'use client';

import React, { useState, useEffect } from 'react';

interface CarouselItem {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    level: string;
    color: string;
}

const FEATURED_COURSES: CarouselItem[] = [
    {
        id: 'feat-1',
        title: 'Master Modern Web Development',
        description: 'Dive deep into React, Next.js, and the future of the web with our most comprehensive path yet.',
        imageUrl: '/IntermediateImage.png',
        level: 'Pro',
        color: 'from-blue-600 to-indigo-700'
    },
    {
        id: 'feat-2',
        title: 'Advanced UI/UX Design Systems',
        description: 'Learn to build scalable, beautiful design systems that wow users and simplify development.',
        imageUrl: '/AdvanceImage.png',
        level: 'Expert',
        color: 'from-emerald-600 to-teal-700'
    },
    {
        id: 'feat-3',
        title: 'Data Science & Machine Learning',
        description: 'Harness the power of data to predict trends and build intelligent systems from scratch.',
        imageUrl: '/IntermediateImage.png',
        level: 'Advanced',
        color: 'from-purple-600 to-pink-700'
    }
];

export default function CourseCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % FEATURED_COURSES.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % FEATURED_COURSES.length);
    const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + FEATURED_COURSES.length) % FEATURED_COURSES.length);

    return (
        <div className="relative w-full h-[450px] sm:h-[400px] md:h-[450px] rounded-[24px] sm:rounded-[32px] overflow-hidden group shadow-2xl shadow-blue-500/10 mb-8 md:mb-16">
            {FEATURED_COURSES.map((item, index) => (
                <div
                    key={item.id}
                    className={`absolute inset-0 transition-all duration-700 ease-in-out flex items-center ${index === currentIndex ? 'opacity-100 translate-x-0' :
                        index < currentIndex ? 'opacity-0 -translate-x-full' : 'opacity-0 translate-x-full'
                        }`}
                >
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-90`} />
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20" />

                    <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 p-6 sm:p-10 md:p-16 items-center w-full">
                        <div className="space-y-4 sm:space-y-6 text-white text-center md:text-left">
                            <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs sm:text-sm font-bold tracking-widest uppercase">
                                {item.level} Path
                            </span>
                            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black leading-tight sm:leading-[1.1]">
                                {item.title}
                            </h2>
                            <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-md mx-auto md:mx-0 font-medium line-clamp-2 md:line-clamp-none">
                                {item.description}
                            </p>
                            <button className="px-6 py-3 sm:px-8 sm:py-4 bg-white text-gray-900 rounded-2xl font-bold hover:bg-gray-100 transition-all transform hover:scale-105 active:scale-95 shadow-xl text-sm sm:text-base">
                                Get Started Now
                            </button>
                        </div>

                        <div className="hidden md:block relative animate-in zoom-in slide-in-from-right duration-700 delay-100">
                            <div className="absolute -inset-4 bg-white/10 backdrop-blur-3xl rounded-3xl -rotate-6" />
                            <img
                                src={item.imageUrl}
                                alt={item.title}
                                className="relative rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500 object-cover w-full h-[250px] lg:h-[300px]"
                            />
                        </div>
                    </div>
                </div>
            ))}

            {/* Navigation Arrows - Hidden on small mobile for touch friendly dots */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-md rounded-full hidden sm:flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-white/20 z-20"
            >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="19" y1="12" x2="5" y2="12" />
                    <polyline points="12 19 5 12 12 5" />
                </svg>
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-md rounded-full hidden sm:flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-white/20 z-20"
            >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                </svg>
            </button>

            {/* Dots */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
                {FEATURED_COURSES.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`transition-all duration-300 rounded-full h-2.5 ${index === currentIndex ? 'bg-white w-8' : 'bg-white/40 w-2.5 hover:bg-white/60'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}
