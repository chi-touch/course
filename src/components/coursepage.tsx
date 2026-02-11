import BeginnerCourseCard from './BeginnerCourseCard';
import AdvancedCourseCard from './AdvancedCourseCard';
import IntermediateCourseCard from './IntermediateCourseCard';

const COURSES = [
    {
        id: "1",
        title: "Super sport blitz...",
        level: "Beginner",
        learners: "999",
        description: "This a short story of how to create a good...",
        author: "Semicolon",
        modules: 8,
    },
    {
        id: "2",
        title: "Super sport blitz...",
        level: "Advanced",
        learners: "999",
        description: "This a short story of how to create a good...",
        author: "Semicolon",
        modules: 8,
        imageUrl: "/AdvanceImage.png"
    },
    {
        id: "3",
        title: "Super sport blitz...",
        level: "Intermediate",
        learners: "999",
        description: "This a short story of how to create a good...",
        author: "Semicolon",
        modules: 8,
        imageUrl: "/IntermediateImage.png"
    },
    {
        id: "4",
        title: "Super sport blitz...",
        level: "Beginner",
        learners: "999",
        description: "This a short story of how to create a good...",
        author: "Semicolon",
        modules: 8,
    },
    {
        id: "5",
        title: "Super sport blitz...",
        level: "Advanced",
        learners: "999",
        description: "This a short story of how to create a good...",
        author: "Semicolon",
        modules: 8,
        imageUrl: "/AdvanceImage.png"
    },
    {
        id: "6",
        title: "Super sport blitz...",
        level: "Intermediate",
        learners: "999",
        description: "This a short story of how to create a good...",
        author: "Semicolon",
        modules: 8,
        imageUrl: "/IntermediateImage.png"
    }
];

export default function Page() {
    return (
        <div className="min-h-screen bg-white p-6 md:p-10 font-sans">
            <div className="max-w-7xl mx-auto">

                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                    <div>
                        <h1 className="text-4xl font-extrabold text-[#111827] mb-2 tracking-tight">Courses</h1>
                        <p className="text-gray-500 text-lg">Explore all available courses and enroll in the ones that match your goals.</p>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 text-[#3269E1] font-semibold cursor-pointer hover:underline">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
                            </svg>
                            <span>Filter by</span>
                        </div>

                        <div className="relative group">
                            <input
                                type="text"
                                placeholder="Search for course"
                                className="pl-11 pr-4 py-3 border border-gray-200 rounded-xl w-[280px] focus:outline-none focus:ring-2 focus:ring-[#3269E1]/20 focus:border-[#3269E1] transition-all"
                            />
                            <svg className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="11" cy="11" r="8" />
                                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                            </svg>
                        </div>

                        <div className="flex items-center gap-1 border border-gray-200 rounded-lg p-1">
                            <button className="p-2 bg-[#F3F7FF] text-[#3269E1] rounded-md shadow-sm">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="3" y="3" width="7" height="7" />
                                    <rect x="14" y="3" width="7" height="7" />
                                    <rect x="14" y="14" width="7" height="7" />
                                    <rect x="3" y="14" width="7" height="7" />
                                </svg>
                            </button>
                            <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="8" y1="6" x2="21" y2="6" />
                                    <line x1="8" y1="12" x2="21" y2="12" />
                                    <line x1="8" y1="18" x2="21" y2="18" />
                                    <line x1="3" y1="6" x2="3.01" y2="6" />
                                    <line x1="3" y1="12" x2="3.01" y2="12" />
                                    <line x1="3" y1="18" x2="3.01" y2="18" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center gap-8">
                    {COURSES.map((course, index) => {
                        if (course.level === 'Beginner') {
                            return (
                                <BeginnerCourseCard
                                    key={index}
                                    id={course.id}
                                    title={course.title}
                                    learners={course.learners}
                                    description={course.description}
                                    author={course.author}
                                    modules={course.modules}
                                />
                            );
                        } else if (course.level === 'Advanced') {
                            return (
                                <AdvancedCourseCard
                                    key={index}
                                    id={course.id}
                                    title={course.title}
                                    learners={course.learners}
                                    description={course.description}
                                    author={course.author}
                                    modules={course.modules}
                                    imageUrl={course.imageUrl || ''}
                                />
                            );
                        } else if (course.level === 'Intermediate') {
                            return (
                                <IntermediateCourseCard
                                    key={index}
                                    id={course.id}
                                    title={course.title}
                                    learners={course.learners}
                                    description={course.description}
                                    author={course.author}
                                    modules={course.modules}
                                    imageUrl={course.imageUrl || ''}
                                />
                            );
                        }
                        return null;
                    })}
                </div>
            </div>
        </div>
    );
}