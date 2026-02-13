import React from 'react';

const CourseCardSkeleton = () => {
    return (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden p-2 flex flex-col w-full sm:w-[320px] animate-pulse">

            <div className="relative h-[120px] sm:h-[140px] bg-gray-100 rounded-xl overflow-hidden">
                <div className="absolute top-4 right-4 w-8 h-8 bg-gray-50 rounded-full" />
            </div>

            <div className="flex-1 space-y-4 p-4">
                <div className="flex justify-between items-start gap-2">
                    <div className="h-6 bg-gray-100 rounded-md w-3/4" />
                    <div className="h-4 bg-gray-50 rounded-md w-1/4" />
                </div>

                <div className="space-y-2">
                    <div className="h-3 bg-gray-50 rounded-full w-full" />
                    <div className="h-3 bg-gray-50 rounded-full w-5/6" />
                </div>
                <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gray-100" />
                        <div className="h-4 bg-gray-50 rounded-md w-20" />
                    </div>
                    <div className="h-4 bg-gray-50 rounded-md w-16" />
                </div>
            </div>

            <div className="mt-4 h-11 bg-gray-100 rounded-xl w-full" />
        </div>
    );
};

export default CourseCardSkeleton;
