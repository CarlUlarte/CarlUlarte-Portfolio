import { useState, useEffect, useRef } from "react";
import verde from "../../assets/pictures/verde.png";
import thesis from "../../assets/pictures/ThesisM.png";
import profile from "../../assets/pictures/profile.png";
import portfolio from "../../assets/pictures/portfolio.png";
import ojt from "../../assets/pictures/ojt.png";
import { a } from "framer-motion/client";

export const Projects = () => {
  const [activeSlide, setActiveSlide] = useState(2);
  const [slideWidth, setSlideWidth] = useState(600);
  const [slideHeight, setSlideHeight] = useState(520);
  const [maxVisibleSlides, setMaxVisibleSlides] = useState(5);
  const [gap, setGap] = useState(30);
  const [imageHeight, setImageHeight] = useState(320);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const projects = [
    {
      id: 1,
      title: "OJT Portal",
      description: "The OJT Portal is a website where students can search for companies to apply for internships and submit their pre- and post-OJT requirements and daily reports. The system supports multiple user roles, including students and administrators. It helps streamline internship applications and monitoring for everyone involved.",
      tech1: "Laravel",
      tech2: "TailwindCSS",
      tech3: "JavaScript",
      tech4: "PostgreSQL",
      image: ojt,
      color: "#E12F36",
    },
    {
      id: 2,
      title: "Professional Portfolio",
      description: "My Professional Portfolio is my latest project, designed to showcase my skills and past projects. It highlights my work, tech stack, and what I’m capable of as a developer.",
      image: portfolio,
      color: "#3259a2",
      tech1: "React",
      tech2: "TailwindCSS",
    },
    {
      id: 3,
      title: "Verde",
      description:
        "Verde is a gamified activity tracking app that rewards users with points for environmentally friendly actions, like using green transport or saving energy. It tracks and ranks users’ scores over daily, weekly, and overall periods, motivating people to adopt and maintain sustainable habits through friendly competition.",
      image: verde,
      color: "#599c77",
      tech1: "ReactNative",
      tech2: "NodeJS",
      tech3: "Firebase",
    },
    {
      id: 4,
      title: "Thesis Management System",
      description: "It is a web application designed to streamline the entire thesis process within the department. It manages everything from proposal submissions to defense scheduling, ensuring a more organized workflow for students and faculty. The system supports multiple user roles with customized menus and authentication for each.",
      image: thesis,
      color: "#f99292",
      tech1: "React",
      tech2: "TailwindCSS",
      tech3: "NodeJS",
      tech4: "Firebase",
    },
    {
      id: 5,
      title: "My Profile☍",
      link: "https://carlularte.netlify.app/",
      description: "My Profile is the first website I built as a freshman to practice web design and development. It includes my background, hobbies, posters Ive made, and facts about me.",
      image: profile,
      color: "#3C8EE5",
      tech1: "HTML",
      tech2: "CSS",
      tech3: "JavaScript",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 845) {
        setSlideWidth(300);
        setSlideHeight(550);
        setGap(15);
        setMaxVisibleSlides(3);
        setImageHeight(200);
      } else if (width < 1024) {
        setSlideWidth(400);
        setSlideHeight(550);
        setGap(20);
        setMaxVisibleSlides(5);
        setImageHeight(250);
      } else if (width < 1300) {
        setSlideWidth(500);
        setSlideHeight(550);
        setGap(20);
        setMaxVisibleSlides(5);
        setImageHeight(260);
      } else {
        setSlideWidth(600);
        setSlideHeight(570);
        setGap(30);
        setMaxVisibleSlides(5);
        setImageHeight(320);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getSlidePosition = (index) => {
    const totalSlides = projects.length;
    let position = (index - activeSlide + totalSlides) % totalSlides;
    if (position > Math.floor(totalSlides / 2)) {
      position = position - totalSlides;
    }
    return position;
  };

  const getSlideStyle = (index) => {
    const position = getSlidePosition(index);
    const half = Math.floor(maxVisibleSlides / 2);

    if (Math.abs(position) > half) {
      return {
        transform: `translateX(${position > 0 ? "400%" : "-400%"}) scale(0.5)`,
        opacity: 0,
        pointerEvents: "none",
      };
    }

    const transforms =
      maxVisibleSlides === 5
        ? {
            "-2": `translateX(calc(-65% - ${gap * 2}px)) scale(0.6)`,
            "-1": `translateX(calc(-40% - ${gap}px)) scale(0.8)`,
            0: "translateX(0) scale(1)",
            1: `translateX(calc(40% + ${gap}px)) scale(0.8)`,
            2: `translateX(calc(65% + ${gap * 2}px)) scale(0.6)`,
          }
        : {
            "-1": `translateX(calc(-30% - ${gap}px)) scale(0.6)`,
            0: "translateX(0) scale(0.9)",
            1: `translateX(calc(30% + ${gap}px)) scale(0.6)`,
          };

    const zIndexes = {
      "-2": 3,
      "-1": 5,
      0: 10,
      1: 5,
      2: 3,
    };

    return {
      transform: transforms[position],
      opacity: 1,
      zIndex: zIndexes[position] || 1,
      pointerEvents: "auto",
    };
  };

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const onTouchEnd = () => {
    const distance = touchStartX.current - touchEndX.current;

    if (distance > 50) {
      setActiveSlide((prev) => (prev + 1) % projects.length);
    } else if (distance < -50) {
      setActiveSlide((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
    }

    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-15"
    >
      <div className="relative w-full max-w-[1800px]">
        <div className="mb-10">
          <h2 className="text-4xl md:text-6xl font-bold font-dmsans m-0 tracking-tight text-center text-[#3259a2]">
            Projects I've worked on.
          </h2>
        </div>

        <div
          className="relative w-full flex items-center justify-center overflow-hidden min-h-[560px] sm:min-h-[560px] md:min-h-[600px] lg:min-h-[600px]"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {projects.map((project, index) => (
            <div
              key={project.id}
              onClick={() => setActiveSlide(index)}
              style={{
                ...getSlideStyle(index),
                width: `${slideWidth}px`,
                height: `${slideHeight}px`,
              }}
              className="absolute transition-all duration-500 ease-in-out cursor-pointer flex items-center justify-center"
            >
              <div className="w-full h-full bg-white rounded-[20px] shadow-lg overflow-hidden flex flex-col">
                <div className="p-4 flex-1 flex flex-col">
                  <div className="space-y-4 flex-1">
                    <div className="group overflow-hidden rounded-[15px] space-y-2">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="block object-cover object-center w-full rounded-[15px] bg-gray-300 transform transition-transform duration-400 group-hover:scale-105"
                        style={{ height: `${imageHeight}px` }}
                      />
                    </div>
                    <div className="px-2 flex flex-wrap justify-start">
                      {project.tech1 && (
                        <p
                          className="mx-1 px-1 rounded-[5px] text-white text-[10px] md:text-[13px]"
                          style={{ backgroundColor: project.color }}
                        >
                          {project.tech1}
                        </p>
                      )}
                      {project.tech2 && (
                        <p
                          className="px-1 rounded-[5px] text-white text-[10px] md:text-[13px]"
                          style={{ backgroundColor: project.color }}
                        >
                          {project.tech2}
                        </p>
                      )}
                      {project.tech3 && (
                        <p
                          className="mx-1 px-1 rounded-[5px] text-white text-[10px] md:text-[13px]"
                          style={{ backgroundColor: project.color }}
                        >
                          {project.tech3}
                        </p>
                      )}
                      {project.tech4 && (
                        <p
                          className="px-1 rounded-[5px] text-white text-[10px] md:text-[13px]"
                          style={{ backgroundColor: project.color }}
                        >
                          {project.tech4}
                        </p>
                      )}
                    </div>
                    <div className="px-3 flex-1">
                      <h3
                        className="text-[20px] leading-tight md:text-[30px] font-bold font-dmsans mb-2"
                        style={{ color: project.color }}
                      >
                        {project.link ? (
                        <a href={project.link} target="_blank" className="underline" >
                          {project.title}
                        </a>
                      ) : (
                        project.title
                      )}
                      </h3>
                      <p className="leading-relaxed font-inter text-gray-800 text-[13px] md:text-sm">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-3 space-x-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeSlide
                  ? "bg-[#3259a2] scale-125"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
