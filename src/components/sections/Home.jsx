export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-[86vh] flex items-center justify-center relative px-4"
    >
      <div className="text-center mt-[15vh] w-full max-w-4xl">
        <p className="text-2xl font-inter sm:text-3xl md:text-4xl text-gray-800 mb-4">
          Hello, I'm
        </p>
        <h1
          className="font-bold font-dmsans text-[#3259a2] mb-4 
          text-5xl sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Carl Justin
        </h1>
        <div className="w-full max-w-xl mx-auto mb-8 px-2">
          <p className="font-inter text-lg sm:text-xl md:text-2xl text-gray-800 leading-relaxed">
            I am an aspiring professional driven by curiosity, growth, and
            passion.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <a href="#about" className="w-[200px]">
            <button class="cursor-pointer flex justify-between bg-[#3259a2] tracking-tight px-3 py-2 rounded-[10px] text-white tracking-wider shadow-xl transition active:bg-[#2c497b] active:scale-95 hover:bg-[#2c497b] hover:scale-105 duration-500 hover:ring-1 font-dmsans text-lg w-[200px]">
            Know more
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              class="w-5 h-5 animate-bounce mt-2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
              ></path>
            </svg>
          </button>
          </a>
        </div>
      </div>
    </section>
  );
};
