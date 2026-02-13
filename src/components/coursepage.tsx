'use client';

import React, { useState, useMemo } from 'react';
import BeginnerCourseCard from './BeginnerCourseCard';
import CreateCourse from './CreatCourse';
import CourseCardSkeleton from './CourseCardSkeleton';
import { useGetCoursesQuery } from '../redux/api/courseQuery';
import Link from 'next/link';

export default function Page() {
    const { data: apiCourses, isLoading, error } = useGetCoursesQuery();
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [localCourses, setLocalCourses] = useState<any[]>([]);
    const [searchQuery, setSearchQuery] = useState('');

    const allCourses = useMemo(() => [...localCourses, ...(apiCourses || [])], [localCourses, apiCourses]);

    const filteredCourses = useMemo(() => {
        const query = searchQuery.toLowerCase().trim();
        if (!query) return allCourses;

        return allCourses.filter(course => {
            const titleMatch = course.title?.toLowerCase().includes(query) || false;
            const bodyMatch = course.body?.toLowerCase().includes(query) || false;
            const levelMatch = course.level?.toLowerCase().includes(query) || false;
            return titleMatch || bodyMatch || levelMatch;
        });
    }, [allCourses, searchQuery]);

    return (
        <div className="min-h-screen bg-white p-4 sm:p-6 md:p-10 font-sans">
            <div className="max-w-5xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 md:mb-10">
                    <div className="flex items-center gap-4">
                        <Link
                            href="/"
                            className="p-3 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md hover:border-blue-100 transition-all active:scale-95 group/back"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600 group-hover/back:text-blue-600 group-hover/back:-translate-x-1 transition-all">
                                <line x1="19" y1="12" x2="5" y2="12" />
                                <polyline points="12 19 5 12 12 5" />
                            </svg>
                        </Link>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight">Courses</h1>
                    </div>
                    <button
                        onClick={() => setIsCreateModalOpen(true)}
                        className="w-full md:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20 active:scale-95 flex items-center justify-center gap-2 group"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className=" group-hover:rotate-90 transition-transform">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                        Create Course
                    </button>
                </div>

                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center sm:gap-6 mb-8 md:mb-12">
                    <div className="max-w-xl w-full lg:w-auto">
                        <p className="text-gray-500 text-base sm:text-lg md:text-xl font-medium leading-relaxed">
                            Explore all available courses and enroll in the ones that match your professional goals and interests.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full lg:w-auto">
                        <div className="relative w-full sm:flex-1 sm:min-w-[200px] lg:w-[300px]">
                            <input
                                type="text"
                                placeholder="Search for course..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-4 border border-gray-100 rounded-2xl bg-gray-50 focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all font-medium text-gray-900 text-sm sm:text-base"
                            />
                            <svg className="absolute left-3.5 sm:left-4 top-1/2 -translate-y-1/2 text-gray-400" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="11" cy="11" r="8" />
                                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                            </svg>
                        </div>

                        <div className="flex items-center gap-2 p-1 bg-gray-50 rounded-2xl border border-gray-100 self-end sm:self-auto">
                            <button className="p-2.5 sm:p-3 bg-white text-blue-600 rounded-xl shadow-sm border border-gray-100 transition-all active:scale-95">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="3" y="3" width="7" height="7" />
                                    <rect x="14" y="3" width="7" height="7" />
                                    <rect x="14" y="14" width="7" height="7" />
                                    <rect x="3" y="14" width="7" height="7" />
                                </svg>
                            </button>
                            <button className="p-3 text-gray-400 hover:text-gray-600 transition-colors">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="8" y1="6" x2="21" y2="6" />
                                    <line x1="8" y1="12" x2="21" y2="12" />
                                    <line x1="8" y1="18" x2="21" y2="18" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {error ? (
                    <div className="py-20 text-center">
                        <div className="text-xl font-semibold text-red-500 bg-red-50 px-6 py-4 rounded-2xl border border-red-100 italic inline-block">
                            Error loading courses. Please check your connection.
                        </div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 justify-items-center gap-6 md:gap-8">
                        {isLoading ? (

                            Array.from({ length: 6 }).map((_, i) => (
                                <CourseCardSkeleton key={i} />
                            ))
                        ) : filteredCourses.length > 0 ? (
                            filteredCourses.map((course: any) => {
                                let level = course.level;
                                let imageUrl = undefined;

                                if (!level) {
                                    const idNum = parseInt(course.id) || 0;
                                    level = idNum % 3 === 0 ? "Beginner" : idNum % 3 === 1 ? "Advanced" : "Intermediate";
                                }

                                if (level === "Advanced") {
                                    imageUrl = "/AdvanceImage.png";
                                } else if (level === "Intermediate") {
                                    imageUrl = "/IntermediateImage.png";
                                }

                                return (
                                    <BeginnerCourseCard
                                        key={course.id}
                                        id={course.id.toString()}
                                        title={course.title}
                                        learners={course.learners || "999"}
                                        description={course.body}
                                        author="Semicolon"
                                        modules={8}
                                        imageUrl={imageUrl}
                                        level={level}
                                    />
                                );
                            })
                        ) : (
                            <div className="col-span-full py-20 text-center">
                                <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-50 rounded-full mb-6 text-gray-400">
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="11" cy="11" r="8" />
                                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">No courses found</h3>
                                <p className="text-gray-500 font-medium">Try searching for something else or check your spelling.</p>
                                <button
                                    onClick={() => {
                                        setSearchQuery('');
                                    }}
                                    className="mt-6 text-blue-600 font-bold hover:underline"
                                >
                                    Clear search
                                </button>
                            </div>
                        )}
                    </div>
                )}
            </div>

            {isCreateModalOpen && (
                <CreateCourse
                    onClose={() => setIsCreateModalOpen(false)}
                    onSuccess={(newCourse) => {
                        setIsCreateModalOpen(false);
                        setLocalCourses(prev => [newCourse, ...prev]);
                    }}
                />
            )}
        </div>
    );
}



