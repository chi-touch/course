import React from 'react';
import Link from 'next/link';

interface BeginnerCourseCardProps {
    id: string;
    title: string;
    description: string;
    learners: string;
    modules: number;
    author: string;
    imageText?: string;
    imageUrl?: string;
    level?: string;
    ribbonBgClass?: string;
    ribbonTextClass?: string;
}

const BeginnerCourseCard: React.FC<BeginnerCourseCardProps> = ({
    id,
    title,
    description,
    learners,
    modules,
    author,
    imageText = "S.U",
    imageUrl,
    level = "Beginner",
    ribbonBgClass,
    ribbonTextClass
}) => {
    const getLevelStyles = (level: string) => {
        switch (level) {
            case 'Intermediate':
                return {
                    text: 'text-[#EA580C]',
                    ribbonBg: 'bg-white',
                    border: 'group-hover:border-orange-200',
                    imageBg: ''
                };
            case 'Advanced':
                return {
                    text: 'text-[#16A34A]',
                    ribbonBg: 'bg-white',
                    border: 'group-hover:border-green-200',
                    imageBg: ''
                };
            default:
                return {
                    text: 'text-[#3269E1]',
                    ribbonBg: 'bg-white',
                    border: 'group-hover:border-blue-200',
                    imageBg: 'bg-[#F3F7FF]'
                };
        }
    };

    const levelStyles = getLevelStyles(level);

    return (
        <Link
            href={`/demo/course/${id}`}
            className={`bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden p-2 flex flex-col w-full max-w-[350px] transition-all hover:shadow-md active:scale-[0.99] group ${levelStyles.border}`}
        >

            <div className={`relative h-[140px] rounded-xl flex items-center justify-center overflow-hidden ${levelStyles.imageBg || ''}`}>
                {imageUrl ? (
                    <img src={imageUrl} alt={title} className="w-[334px] h-[149px] object-cover" />
                ) : (
                    <span className={`${levelStyles.text} text-5xl font-bold tracking-tighter`}>{imageText}</span>
                )}


                <div
                    className="absolute top-0 left-0 w-30 h-30 overflow-hidden pointer-events-none"
                    style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}
                >
                    <div
                        className={`absolute top-[18px] left-[-55px] w-40 py-1 text-center text-[15px] font-bold tracking-tight -rotate-40 shadow-sm border-b border-gray-100 ${ribbonBgClass || (levelStyles as any).ribbonBg} ${ribbonTextClass || levelStyles.text}`}
                    >
                        {level}
                    </div>
                </div>


                <button className="absolute top-1 right-1.5 w-7 h-7 flex items-center justify-center bg-white rounded-full shadow-lg hover:bg-gray-50 transition-all active:scale-95 ml-30">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="7" r="1.5" fill="#111827" />
                        <circle cx="12" cy="12" r="1.5" fill="#111827" />
                        <circle cx="12" cy="17" r="1.5" fill="#111827" />
                    </svg>
                </button>
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
        </Link >
    );
};

export default BeginnerCourseCard;
