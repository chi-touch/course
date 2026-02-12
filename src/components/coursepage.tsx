'use client';

import React, { useState } from 'react';
import BeginnerCourseCard from './BeginnerCourseCard';
import CreateCourse from './CreatCourse';
import { useGetCoursesQuery } from '../redux/api/courseQuery';

export default function Page() {
    const { data: apiCourses, isLoading, error } = useGetCoursesQuery();
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [localCourses, setLocalCourses] = useState<any[]>([]);

    if (isLoading) {
        return (
            <div className="min-h-screen bg-white p-6 md:p-10 font-sans flex items-center justify-center">
                <div className="text-xl font-semibold text-gray-500 animate-pulse">Loading courses...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-white p-6 md:p-10 font-sans flex items-center justify-center">
                <div className="text-xl font-semibold text-red-500 bg-red-50 px-6 py-4 rounded-2xl border border-red-100 italic">
                    Error loading courses. Please check your connection.
                </div>
            </div>
        );
    }

    const allCourses = [...localCourses, ...(apiCourses || [])];

    return (
        <div className="min-h-screen bg-white p-6 md:p-10 font-sans">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
                    <h1 className="text-5xl font-black text-gray-900 tracking-tight">Courses</h1>
                    <button
                        onClick={() => setIsCreateModalOpen(true)}
                        className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20 active:scale-95 flex items-center gap-2 group"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className=" group-hover:rotate-90 transition-transform">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                        Create Course
                    </button>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
                    <div className="max-w-xl">
                        <p className="text-gray-500 text-xl font-medium leading-relaxed">
                            Explore all available courses and enroll in the ones that match your professional goals and interests.
                        </p>
                    </div>

                    <div className="flex items-center gap-4 w-full md:w-auto">
                        <div className="relative flex-1 md:w-72">
                            <input
                                type="text"
                                placeholder="Search for course..."
                                className="w-full pl-12 pr-4 py-4 border border-gray-100 rounded-2xl bg-gray-50 focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all font-medium text-gray-900"
                            />
                            <svg className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="11" cy="11" r="8" />
                                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                            </svg>
                        </div>

                        <div className="flex items-center gap-2 p-1.5 bg-gray-50 rounded-2xl border border-gray-100">
                            <button className="p-3 bg-white text-blue-600 rounded-xl shadow-sm border border-gray-100">
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

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center gap-10">
                    {allCourses.map((course: any, index: number) => {
                        let level = course.level;
                        let imageUrl = undefined;

                        // Use level from course object if available, otherwise calculate
                        if (!level) {
                            level = index % 3 === 0 ? "Beginner" : index % 3 === 1 ? "Advanced" : "Intermediate";
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
                    })}
                </div>
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