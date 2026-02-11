import React from 'react';
import Link from 'next/link';

interface IntermediateCourseCardProps {
    id: string;
    title: string;
    description: string;
    learners: string;
    modules: number;
    author: string;
    imageUrl: string;
}

const IntermediateCourseCard: React.FC<IntermediateCourseCardProps> = ({
    id,
    title,
    description,
    learners,
    modules,
    author,
    imageUrl
}) => {
    return (
        <Link
            href={`/demo/course/${id}`}
            className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden p-2 flex flex-col w-full max-w-[350px] transition-all hover:shadow-md hover:border-orange-200 active:scale-[0.99] group"
        >
            <div className="relative h-[160px] rounded-xl flex items-center justify-center overflow-hidden">
                <img src={imageUrl} alt={title} className="w-[334px] h-[149px] object-cover" />
            </div>

            <div className="flex-1 space-y-2 p-2">
                <div className="flex justify-between items-start">
                    <h3 className="font-bold text-gray-900 line-clamp-1 text-lg">{title}</h3>
                    <span className="text-gray-400 text-sm whitespace-nowrap ml-2">{learners} Learners</span>
                </div>

                <p className="text-gray-500 text-sm line-clamp-2 leading-relaxed">
                    {description}
                </p>

                <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center text-white font-bold text-xs ring-2 ring-white shadow-sm">
                            S
                        </div>
                        <span className="text-gray-600 text-sm font-medium">{author}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-gray-500">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                        </svg>
                        <span className="text-sm font-medium">{modules} Modules</span>
                    </div>
                </div>
            </div>

            <div
                className="mt-5 block w-full bg-[#1866DA] group-hover:bg-[#1559C0] text-white py-3 rounded-xl font-semibold transition-all shadow-md text-center"
            >
                View course
            </div>
        </Link>
    );
};

export default IntermediateCourseCard;
