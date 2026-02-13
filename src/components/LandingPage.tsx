'use client';

import React from 'react';
import Link from 'next/link';

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-white font-sans selection:bg-blue-100 overflow-x-hidden">
            {/* Gradient Background elements */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-50 rounded-full blur-[120px] opacity-60" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-50 rounded-full blur-[120px] opacity-60" />
            </div>

            {/* Navigation */}
            <nav className="relative z-10 flex justify-between items-center px-6 md:px-12 py-8 max-w-7xl mx-auto">
                <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg shadow-blue-500/20">
                        S
                    </div>
                    <span className="text-2xl font-black text-gray-900 tracking-tight">Semicolon</span>
                </div>
                <div className="hidden md:flex items-center gap-10">
                    <Link href="#" className="text-gray-500 font-bold hover:text-gray-900 transition-colors">About</Link>
                    <Link href="#" className="text-gray-500 font-bold hover:text-gray-900 transition-colors">Resources</Link>
                    <Link href="#" className="text-gray-500 font-bold hover:text-gray-900 transition-colors">Success Stories</Link>
                </div>
                <div>
                    <Link
                        href="/demo/home"
                        className="px-6 py-3 bg-gray-900 text-white rounded-xl font-bold hover:bg-gray-800 transition-all shadow-lg active:scale-95"
                    >
                        Login
                    </Link>
                </div>
            </nav>

            {/* Hero Section */}
            <main className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-16 md:pt-32 pb-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-full font-bold text-sm tracking-wide uppercase shadow-sm border border-blue-100">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                            </span>
                            Learning Reimagined
                        </div>

                        <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-gray-900 leading-[1.1] sm:leading-[1.05] tracking-tight">
                            Master Your <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Future Today.</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-gray-500 font-medium leading-relaxed max-w-lg">
                            Join thousands of learners on a journey to acquire world-class skills through our expertly curated course paths.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                            <Link
                                href="/demo/home"
                                className="w-full sm:w-auto px-10 py-5 bg-blue-600 text-white rounded-2xl font-extrabold text-xl hover:bg-blue-700 transition-all shadow-2xl shadow-blue-500/30 transform hover:scale-105 active:scale-95 text-center flex items-center justify-center gap-3 group"
                            >
                                Explorer Courses
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                    <polyline points="12 5 19 12 12 19" />
                                </svg>
                            </Link>
                            <Link
                                href="#"
                                className="w-full sm:w-auto px-10 py-5 bg-white text-gray-900 border-2 border-gray-100 rounded-2xl font-extrabold text-xl hover:bg-gray-50 transition-all active:scale-95 text-center"
                            >
                                How it works
                            </Link>
                        </div>

                        {/* Social Proof */}
                        <div className="pt-12 flex items-center gap-6">
                            <div className="flex -space-x-4">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className={`w-12 h-12 rounded-full border-4 border-white bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-400`}>
                                        U{i}
                                    </div>
                                ))}
                            </div>
                            <div className="text-gray-500 font-bold">
                                <span className="text-gray-900">4,000+</span> learners started this week
                            </div>
                        </div>
                    </div>

                    {/* Hero Image/Abstract UI */}
                    <div className="relative hidden lg:block">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-blue-50 to-indigo-50 rounded-full blur-3xl opacity-50" />

                        <div className="relative grid grid-cols-2 gap-6 p-8">
                            <div className="space-y-6 pt-12">
                                <div className="bg-white p-6 rounded-[32px] shadow-2xl border border-gray-100 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                                    <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center mb-4 text-orange-600">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
                                    </div>
                                    <div className="h-4 w-3/4 bg-gray-100 rounded-full mb-2" />
                                    <div className="h-4 w-1/2 bg-gray-50 rounded-full" />
                                </div>
                                <div className="bg-white p-6 rounded-[32px] shadow-2xl border border-gray-100 transform rotate-6 hover:rotate-4 transition-transform duration-500">
                                    <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mb-4 text-blue-600">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                                    </div>
                                    <div className="h-4 w-full bg-gray-100 rounded-full mb-2" />
                                    <div className="h-4 w-3/4 bg-gray-50 rounded-full" />
                                </div>
                            </div>
                            <div className="space-y-6">
                                <div className="bg-white p-6 rounded-[32px] shadow-2xl border border-gray-100 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                                    <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center mb-4 text-green-600">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                                    </div>
                                    <div className="h-4 w-2/3 bg-gray-100 rounded-full mb-2" />
                                    <div className="h-4 w-1/2 bg-gray-50 rounded-full" />
                                </div>
                                <div className="bg-gray-900 p-8 rounded-[40px] shadow-3xl transform -rotate-6 hover:-rotate-3 transition-transform duration-500 scale-105">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-3 h-3 rounded-full bg-red-500" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                        <div className="w-3 h-3 rounded-full bg-green-500" />
                                    </div>
                                    <div className="space-y-3">
                                        <div className="h-3 w-full bg-white/20 rounded-full" />
                                        <div className="h-3 w-3/4 bg-white/10 rounded-full" />
                                        <div className="h-3 w-1/2 bg-white/5 rounded-full" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Feature Icons Section */}
            <section className="bg-gray-50/50 border-y border-gray-100 relative z-10 py-16 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <div className="flex flex-wrap justify-center md:justify-between items-center gap-12 text-gray-400 font-bold tracking-widest uppercase text-sm">
                        <div className="flex items-center gap-2 grayscale brightness-50 opacity-40">Trusted by Global Companies</div>
                        <div className="flex items-center gap-2 grayscale brightness-50 opacity-40">Accredited Learning Paths</div>
                        <div className="flex items-center gap-2 grayscale brightness-50 opacity-40">Verified Certifications</div>
                    </div>
                </div>
            </section>
        </div>
    );
}
