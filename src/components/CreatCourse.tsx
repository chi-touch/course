'use client';

import React, { useState } from 'react';
import { useCreateCourseMutation } from '../redux/api/courseQuery';

interface CreateCourseProps {
    onClose: () => void;
    onSuccess: (newCourse: any) => void;
}

export default function CreateCourse({ onClose, onSuccess }: CreateCourseProps) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [learners, setLearners] = useState('999');
    const [level, setLevel] = useState('Beginner');

    const [createCourse, { isLoading }] = useCreateCourseMutation();

    const getPreviewImage = (lvl: string) => {
        switch (lvl) {
            case 'Intermediate': return '/IntermediateImage.png';
            case 'Advanced': return '/AdvanceImage.png';
            default: return null;
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const result = await createCourse({
                title,
                body: description,
                userId: 1,
            }).unwrap();

            onSuccess({
                ...result,
                level,
                learners,
                id: result.id || Date.now().toString()
            });
        } catch (error) {
            console.error('Failed to create course:', error);
        }
    };

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in duration-300">
                <div className="p-8">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold text-gray-900">Create New Course</h2>
                        <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </button>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700">Course Title</label>
                            <input
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder="Enter course title"
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700">Description</label>
                            <textarea
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                placeholder="What will students learn?"
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium min-h-[100px]"
                                required
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700">Learners</label>
                                <input
                                    type="text"
                                    value={learners}
                                    onChange={(e) => setLearners(e.target.value)}
                                    placeholder="e.g. 999"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700">Level</label>
                                <select
                                    value={level}
                                    onChange={(e) => setLevel(e.target.value)}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium bg-white"
                                >
                                    <option value="Beginner">Beginner</option>
                                    <option value="Intermediate">Intermediate</option>
                                    <option value="Advanced">Advanced</option>
                                </select>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700 text-center block">Image Preview</label>
                            <div className="h-32 bg-gray-50 rounded-2xl flex items-center justify-center overflow-hidden border-2 border-dashed border-gray-200">
                                {getPreviewImage(level) ? (
                                    <img src={getPreviewImage(level) || ''} alt="Preview" className="w-full h-full object-cover" />
                                ) : (
                                    <span className="text-blue-500 font-bold text-3xl">S.U</span>
                                )}
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white py-4 rounded-2xl font-bold text-lg shadow-lg shadow-blue-500/30 transition-all active:scale-[0.98]"
                        >
                            {isLoading ? 'Creating...' : 'Create Course'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}