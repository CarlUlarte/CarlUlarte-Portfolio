import React, { useState } from 'react';
import pythonlogo from '../../assets/pictures/python.png';
import cpplogo from '../../assets/pictures/c++.png';
import javalogo from '../../assets/pictures/java.png';
import phplogo from '../../assets/pictures/php.png';
import htmllogo from '../../assets/pictures/html.png';
import csslogo from '../../assets/pictures/css.png';
import javascriptlogo from '../../assets/pictures/javascript.png';
import reactlogo from '../../assets/pictures/react.png';
import laravellogo from '../../assets/pictures/laravel.png';
import firebaselogo from '../../assets/pictures/firebase.png';
import postgrelogo from '../../assets/pictures/postgre.png';
import nodejslogo from '../../assets/pictures/nodejs.png';
import githublogo from '../../assets/pictures/github.png';
import androidstudiologo from '../../assets/pictures/android.png';

export const Skills = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    // Constants for better maintainability
    const SKILLS_DATA = {
        page1: {
            title: "Programming and Scripting Languages",
            description: "Languages I picked up in university and used for various development projects.",
            skills: [
                { name: "Python", logo: pythonlogo, classes: "saturate-110" },
                { name: "C++", logo: cpplogo, classes: "" },
                { name: "Java", logo: javalogo, classes: "" },
                { name: "PHP", logo: phplogo, classes: "" },
                { name: "HTML", logo: htmllogo, classes: "" },
                { name: "CSS", logo: csslogo, classes: "" },
                { name: "JavaScript", logo: javascriptlogo, classes: "saturate-90" }
            ],
            imageUrl: "https://source.unsplash.com/random/360x480"
        },
        page2: {
            title: "Software Development",
            description: "Collection of frameworks and technologies I have experience working with to bring ideas to life.",
            skills: [
                { name: "React", logo: reactlogo, classes: "" },
                { name: "Laravel", logo: laravellogo, classes: "" },
                { name: "Firebase", logo: firebaselogo, classes: "" },
                { name: "PostgreSQL", logo: postgrelogo, classes: "" },
                { name: "Node.js", logo: nodejslogo, classes: "" },
                { name: "Android Studio", logo: androidstudiologo, classes: "" },
                { name: "GitHub", logo: githublogo, classes: "" },
                
            ],
            imageUrl: "https://source.unsplash.com/random/361x481"
        }
    };

    const ADDITIONAL_SKILLS = [
        {
            title: "Productivity Tools",
            description: "I’m skilled at using Microsoft Office and Google Workspace to manage documents, collaborate, and stay organized."
        },
        {
            title: "Graphic & UI/UX Design",
            description: "I enjoy designing clean interfaces and visuals using Photoshop and Figma, combining creativity with user-centered design."
        },
        {
            title: "DevOps & Cybersecurity",
            description: "I can write clear, engaging, and professional content, whether it’s for documentation, copywriting, or creative work."
        }
    ];

    const COLORS = {
        primary: "#3259A2",
        secondary: "#274F9A",
        dark: "#1d1d1f"
    };

    const nextPage = () => {
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentPage(1);
            setTimeout(() => setIsTransitioning(false), 50);
        }, 200);
    };
        
    const prevPage = () => {
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentPage(0);
            setTimeout(() => setIsTransitioning(false), 50);
        }, 200);
    };

    const renderSkillItem = (skill, index) => (
        <div key={index} className="flex items-center space-x-3 sm:space-x-4">
            <div className="flex-shrink-0">
                <div className={`flex items-center justify-center w-8 h-8 sm:w-12 sm:h-12 ${skill.classes}`}>
                    <img src={skill.logo} alt={`${skill.name} logo`} />
                </div>
            </div>
            <h4 className="text-sm sm:text-lg font-inter font-medium dark:text-gray-900">{skill.name}</h4>
        </div>
    );

    const renderSkillsGrid = (skills) => (
        <div className="mt-6 sm:mt-8 grid grid-cols-1 gap-4 sm:gap-6 sm:grid-rows-3 sm:grid-flow-col sm:gap-x-20 sm:gap-y-13 sm:mt-12">
            {skills.map((skill, index) => renderSkillItem(skill, index))}
        </div>
    );

    const renderPage = (pageData) => (
        <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
            <div>
                <h3 className="text-lg sm:text-2xl font-dmsans font-bold tracking-tight lg:text-3xl dark:text-gray-900">
                    {pageData.title}
                </h3>
                <p className="mt-2 sm:mt-3 font-inter text-sm sm:text-lg dark:text-gray-600">
                    {pageData.description}
                </p>
                {renderSkillsGrid(pageData.skills)}
            </div>
            <div aria-hidden="true" className="mt-10 lg:mt-0">
                <img 
                    src={pageData.imageUrl} 
                    alt="" 
                    className="mx-auto rounded-lg shadow-lg dark:bg-gray-500" 
                />
            </div>
        </div>
    );

    const renderAdditionalSkill = (skill, index) => (
        <div key={index} className="flex">
            <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-md bg-[#274F9A] dark:text-gray-50">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 sm:w-7 sm:h-7">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                </div>
            </div>
            <div className="ml-3 sm:ml-4">
                <h4 className="text-base sm:text-lg font-medium leading-6 dark:text-gray-900">{skill.title}</h4>
                <p className="mt-1 sm:mt-2 text-sm sm:text-base dark:text-gray-600">{skill.description}</p>
            </div>
        </div>
    );

    const ArrowButton = ({ direction, onClick, disabled }) => (
        <button
            onClick={onClick}
            disabled={disabled}
            className="absolute right-[-1rem] sm:right-[-2rem] top-1/2 transform -translate-y-1/2 p-2 sm:p-4 hover:bg-blue-100 rounded-full transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label={`${direction} page`}
        >
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                className="w-6 h-6 sm:w-8 sm:h-8 lg:w-18 lg:h-18 text-[#274F9A] stroke-1"
            >
                <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d={direction === 'Next' ? "M8.25 4.5l7.5 7.5-7.5 7.5" : "M15.75 19.5L8.25 12l7.5-7.5"} 
                />
            </svg>
        </button>
    );

    return (
        <section id="skills" className="pb-[10vh] pt-[7vh]">
            <div className='w-full md:w-[90vw] mx-auto rounded-[20px] bg-white'>
                <div className="container max-w-xl p-6 py-12 mx-auto space-y-4 sm:space-y-6  lg:space-y-14 lg:px-8 lg:max-w-7xl">
                    <div>
                        <h2 className="text-3xl sm:text-5xl lg:text-[4rem] font-dmsans font-bold m-0 leading-none tracking-tight text-left" style={{ color: COLORS.primary }}>
                            Skills I can offer
                        </h2>
                        <h2 className="text-2xl sm:text-4xl lg:text-[3.5rem] font-dmsans font-bold m-0 leading-none tracking-tight text-left" style={{ color: COLORS.dark }}>
                            Key strengths and capabilities.
                        </h2>
                    </div>

                    <div className="relative">
                        <div 
                            className="transition-all duration-400 ease-in-out"
                            style={{ 
                                opacity: isTransitioning ? 0 : 1,
                                transform: isTransitioning ? 'translateX(20px)' : 'translateX(0px)'
                            }}
                        >
                            {currentPage === 0 && renderPage(SKILLS_DATA.page1)}
                            {currentPage === 1 && renderPage(SKILLS_DATA.page2)}
                        </div>

                        {/* Navigation Arrows */}
                        {currentPage === 0 && (
                            <ArrowButton 
                                direction="Next" 
                                onClick={nextPage} 
                                disabled={isTransitioning} 
                            />
                        )}

                        {currentPage === 1 && (
                            <ArrowButton 
                                direction="Previous" 
                                onClick={prevPage} 
                                disabled={isTransitioning} 
                            />
                        )}
                    </div>

                    <div>
                        <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                            <div className="lg:col-start-2">
                                <h3 className="text-lg sm:text-2xl font-bold font-dmsans tracking-tight lg:text-3xl dark:text-gray-900">
                                    Other skills I have
                                </h3>
                                <p className="mt-2 sm:mt-3 text-sm  font-inter sm:text-lg dark:text-gray-600">
                                    Things I can do outside of programming.
                                </p>
                                <div className="mt-8 space-y-12">
                                    {ADDITIONAL_SKILLS.map((skill, index) => renderAdditionalSkill(skill, index))}
                                </div>
                            </div>
                            <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                                <img src="https://source.unsplash.com/random/361x481" alt="" className="mx-auto rounded-lg shadow-lg dark:bg-gray-500" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};