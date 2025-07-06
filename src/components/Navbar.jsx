import { useState, useEffect, useRef } from "react";

export const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const [isMinimized, setIsMinimized] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Dynamic sizing states
  const [navWidth, setNavWidth] = useState(600);
  const [navHeight, setNavHeight] = useState(48);
  const [minimizedHeight, setMinimizedHeight] = useState(12);
  const [indicatorHeight, setIndicatorHeight] = useState(44);
  const [fontSize, setFontSize] = useState(18);
  const [paddingX, setPaddingX] = useState(24);

  const navRef = useRef(null);
  const buttonRefs = useRef({});
  const lastScrollY = useRef(0);
  const manualLock = useRef(false);
  const lockTimeout = useRef(null);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  // Responsive sizing effect
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        // Small phones
        setNavWidth(Math.min(width * 0.80, 450));
        setNavHeight(40);
        setMinimizedHeight(8);
        setIndicatorHeight(36);
        setFontSize(13);
        setPaddingX(10);
      } else if (width < 1024) {
        // Tablets
        setNavWidth(Math.min(width * 0.9, 550));
        setNavHeight(44);
        setMinimizedHeight(10);
        setIndicatorHeight(40);
        setFontSize(16);
        setPaddingX(12);
      } else if (width < 1300) {
        // 720p screens
        setNavWidth(600);
        setNavHeight(48);
        setMinimizedHeight(12);
        setIndicatorHeight(44);
        setFontSize(18);
        setPaddingX(20);
      } else {
        // Large screens
        setNavWidth(600);
        setNavHeight(48);
        setMinimizedHeight(12);
        setIndicatorHeight(44);
        setFontSize(18);
        setPaddingX(24);
      }
    };

    handleResize(); // run once
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Update indicator position
  useEffect(() => {
    const activeButton = buttonRefs.current[active];
    if (activeButton) {
      const { offsetLeft, offsetWidth } = activeButton;
      setIndicatorStyle({
        left: offsetLeft,
        width: offsetWidth,
      });
    }
  }, [active, navWidth, paddingX]); // Added dependencies for responsive updates

  // Minimize navbar on scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastScrollY.current && currentY > 50) {
        setIsMinimized(true);
      } else {
        setIsMinimized(false);
      }
      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Observer for section in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (manualLock.current) return;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            const link = links.find((l) => l.href.substring(1) === id);
            if (link) {
              setActive(link.name);
            }
          }
        });
      },
      {
        root: null,
        rootMargin: "-50% 0px -50% 0px", // middle of viewport
        threshold: 0,
      }
    );

    links.forEach((link) => {
      const section = document.getElementById(link.href.substring(1));
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  // Click handler: smooth scroll + lock observer temporarily
  const handleLinkClick = (linkName, href) => {
    manualLock.current = true;

    clearTimeout(lockTimeout.current);
    lockTimeout.current = setTimeout(() => {
      manualLock.current = false;
    }, 1200); // adjust for scroll duration

    setActive(linkName);

    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const isExpanded = !isMinimized || isHovered;

  return (
    <nav
      ref={navRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        width: `${navWidth}px`,
        height: isExpanded ? `${navHeight}px` : `${minimizedHeight}px`,
      }}
      className={`fixed left-1/2 -translate-x-1/2 mt-7 z-40 bg-white/30 border-2 border-white/60 backdrop-blur-sm rounded-[15px] shadow-[0px_23px_32px_0px_rgba(0,0,0,0.1)] overflow-hidden transition-all duration-500 ease-out`}
    >
      <div className="relative w-full h-full">
        <div
          className="absolute top-1/2 -translate-y-1/2 bg-[#3259A2] rounded-[15px] transition-all duration-300 ease-out"
          style={{
            ...indicatorStyle,
            height: isExpanded ? `${indicatorHeight}px` : '100%',
          }}
        />

        <div
          className={`flex items-center justify-between h-full relative z-10 transition-opacity duration-300 ${
            isExpanded
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              ref={(el) => (buttonRefs.current[link.name] = el)}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(link.name, link.href);
              }}
              style={{
                paddingLeft: `${paddingX}px`,
                paddingRight: `${paddingX}px`,
                fontSize: `${fontSize}px`,
              }}
              className={`h-full font-dmsans transition-colors duration-300 ease-out flex items-center cursor-pointer ${
                active === link.name
                  ? "text-white"
                  : "text-[#3b3b3b] hover:text-[#334b7a]"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};