import React from "react";

export default function DemoLayout({children}: {
    children: React.ReactNode;
}) {
    return (
        <div >

            <main >
                <div >
                    {children}
                </div>
            </main>

        </div>
    );
}
