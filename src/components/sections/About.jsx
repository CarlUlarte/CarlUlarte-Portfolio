import { useState } from "react";
import CarlGradPic from "../../assets/pictures/CarlGradPic.jpg";

export const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleNextSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % 2);
      setIsTransitioning(false);
    }, 200);
  };

  return (
    <section
      id="about"
      className="pt-[2vh] sm:pt-[3vh] lg:pt-[5vh] pb-[5vh] sm:pb-[8vh] lg:pb-[10vh] min-h-screen flex items-center justify-center relative px-4 sm:px-6 lg:px-8"
    >
      <div className="flex items-center justify-center w-full max-w-none md:max-w-4xl lg:max-w-6xl xl:max-w-7xl h-auto relative">
        {/* Browser Window */}
        <div className="h-[600px] md:h-auto w-[96vw] md:w-[80%] rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl overflow-hidden">
          {/* Browser Header */}
          <div className="grid grid-cols-[1fr] md:grid-cols-[15%,70%,15%] bg-[#335698] px-3 sm:px-4 h-8 sm:h-10">
            <div className="flex items-center justify-between md:justify-center w-full">
              <div className="flex gap-1 sm:gap-2">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-400 rounded-full"></div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
              </div>

              <div className="hidden md:flex flex-1 mx-6 justify-center">
                <div className="flex items-center w-50 justify-center bg-[#2C497B] rounded-md h-5 py-2 text-[10px] text-center text-gray-300">
                  www.portfolio.com/about
                </div>
              </div>

              <div className="flex gap-1 sm:gap-2">
                <button className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center text-gray-100 text-xs sm:text-base">
                  ⟲
                </button>
                <button className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center text-gray-100 text-xs sm:text-base">
                  ⋮
                </button>
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="bg-white/75 flex flex-col md:grid md:grid-cols-[67%_33%] min-h-[600px]  lg:min-h-[650px]">
            {/* Picture Section */}
            <div className="order-1 md:order-2 flex items-start justify-center md:justify-start md:pr-10 md:pt-25 pt-5">
              <img
                src={CarlGradPic}
                alt="Carl"
                className="w-36 sm:w-44 md:w-60 lg:w-72 object-cover rounded-[10px] sm:rounded-[12px] lg:rounded-[15px] shadow-lg"
              />
            </div>

            {/* Content Section */}
            <div className="order-2 md:order-1 flex flex-col px-4 sm:p-6 lg:pl-15 md:pl-10 md:pt-10 relative">
              {/* Title */}
              <div className="pt-4 sm:pt-8 lg:pt-12 xl:pt-20 flex items-end mb-2 sm:mb-4 lg:mb-6">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-dmsans tracking-tight leading-none font-bold text-[#3259A2] mr-2 sm:mr-4">
                  About
                </h1>
              </div>

              {/* Slide Content */}
              <div className="flex-1 relative">
                <div
                  className="transition-all duration-400 ease-in-out"
                  style={{
                    opacity: isTransitioning ? 0 : 1,
                    transform: isTransitioning
                      ? "translateX(20px)"
                      : "translateX(0px)",
                  }}
                >
                  {currentSlide === 0 ? (
                    <div>
                      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-dmsans tracking-tight font-bold text-gray-700 mr-2 sm:mr-4 mb-3 sm:mb-4 lg:mb-6">
                        My Background
                      </h2>
                      <p className="text-justify font-inter text-sm md:text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed mb-3 sm:mb-4 lg:mb-6">
                        I recently earned my Computer Science degree from Batangas State University, and I’m eager to kickstart my career in tech. Whether I’m designing an interface, writing code, or learning something new, I bring curiosity and dedication to every project. With my attention to detail and taste for good and intuitive design, I aim to build digital experiences that are not only functional but also enjoyable to use. I’m excited to grow, collaborate, and contribute fresh ideas wherever I go next.
                      </p>
                    </div>
                  ) : (
                    <div>
                      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-dmsans tracking-tight font-bold text-gray-700 mr-2 sm:mr-4 mb-3 sm:mb-4 lg:mb-6">
                        Some Achievements I have
                      </h2>
                      <p className="text-justify text-sm sm:text-base lg:text-lg font-inter text-gray-600 leading-relaxed mb-3 sm:mb-4 lg:mb-6">
                        I have always been an achiever throughout my academic journey, and I am proud to showcase some of the achievements and scholarships I earned.
                      </p>
                      <div className="space-y-2 sm:space-y-3 lg:space-y-4 mb-4 sm:mb-6 lg:mb-8">
                        <div className="flex items-center gap-2 sm:gap-3">
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                          <span className="text-xs font-inter sm:text-sm lg:text-base text-gray-600">
                            Dean's Lister from 2021 to 2025
                          </span>
                        </div>
                        <div className="flex items-center gap-2 sm:gap-3">
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                          <span className="text-xs font-inter sm:text-sm lg:text-base text-gray-600">
                            Graduated with honors (cum laude)
                          </span>
                        </div>
                        <div className="flex items-center gap-2 sm:gap-3">
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                          <span className="text-xs font-inter sm:text-sm lg:text-base text-gray-600">
                            Hermilando I. Mandanas Academic Scholar
                          </span>
                        </div>
                        <div className="flex items-center gap-2 sm:gap-3">
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                          <span className="text-xs font-inter sm:text-sm lg:text-base text-gray-600">
                            SM Foundation Scholar
                          </span>
                        </div>
                        <div className="flex items-center gap-2 sm:gap-3">
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                          <span className="text-xs font-inter sm:text-sm lg:text-base text-gray-600">
                            CHED CMSP Scholar
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Next Slide Button */}
          <div className="flex items-center justify-end px-10">
            <button
              onClick={handleNextSlide}
              className="absolute bottom-4 sm:bottom-6 lg:bottom-10 w-10 h-10 sm:w-12 sm:h-12 lg:w-20 lg:h-20 hover:bg-blue-100 text-white rounded-full flex items-center justify-center transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 sm:w-8 sm:h-8 lg:w-15 lg:h-15 xl:w-15 xl:h-15 text-[#274F9A] stroke-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
