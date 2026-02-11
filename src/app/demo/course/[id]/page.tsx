import Link from 'next/link';

export default async function CourseDetailsPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
            <div className="bg-white p-10 rounded-3xl shadow-xl max-w-2xl w-full text-center space-y-6">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 text-blue-600 rounded-full mb-4">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                    </svg>
                </div>

                <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">Course Details</h1>
                <p className="text-gray-500 text-lg">You are viewing the details for course ID: <span className="font-mono text-blue-600 bg-blue-50 px-2 py-1 rounded">{id}</span></p>

                <div className="pt-6">
                    <Link
                        href="/demo/home"
                        className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="19" y1="12" x2="5" y2="12" />
                            <polyline points="12 19 5 12 12 5" />
                        </svg>
                        Back to Courses
                    </Link>
                </div>
            </div>
        </div>
    );
}
