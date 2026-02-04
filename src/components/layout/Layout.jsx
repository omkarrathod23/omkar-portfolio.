import React from 'react';
import Navbar from './Navbar';

const Layout = ({ children }) => {
    return (
        <div className="relative min-h-screen bg-bg-primary text-accent-primary overflow-x-hidden transition-colors duration-300">

            {/* ================= Premium Background ================= */}
            <div className="fixed inset-0 -z-10 pointer-events-none">

                {/* grid */}
                <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02] 
                    bg-[linear-gradient(var(--accent-primary)_1px,transparent_1px),
                    linear-gradient(90deg,var(--accent-primary)_1px,transparent_1px)]
                    bg-[size:40px_40px]" />

                {/* glow lights */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-indigo-500/10 dark:bg-indigo-500/5 blur-[200px] rounded-full" />
                <div className="absolute bottom-0 left-1/3 w-[900px] h-[500px] bg-emerald-500/10 dark:bg-emerald-500/5 blur-[200px] rounded-full" />
            </div>


            {/* ================= Navbar ================= */}
            <div className="sticky top-0 z-50 backdrop-blur-xl bg-bg-primary/40 border-b border-accent-primary/5">
                <Navbar />
            </div>


            {/* ================= Main ================= */}
            <main className="relative z-10">

                {/* 🔥 MUCH WIDER CONTENT */}
                <div className="
                    max-w-[1400px]
                    w-full
                    mx-auto
                    px-8
                    pt-24
                    pb-32
                    space-y-32
                ">
                    {children}
                </div>

            </main>

        </div>
    );
};

export default Layout;
