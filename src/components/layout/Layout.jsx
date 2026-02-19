import React from 'react';
import Navbar from './Navbar';

const Layout = ({ children }) => {
    return (
        <div className="relative min-h-screen bg-bg-primary text-accent-primary overflow-x-hidden transition-colors duration-300">

            {/* ================= Premium Background ================= */}
            {/* ================= Premium Animated Background ================= */}
            <div className="fixed inset-0 -z-50 pointer-events-none overflow-hidden">
                {/* 1. Base Gradient Layer */}
                <div className="absolute inset-0 bg-bg-primary transition-colors duration-500" />

                {/* 2. Animated Gradient Orbs (Mesh Gradient Effect) */}
                <div className="absolute top-0 left-0 w-full h-full opacity-40 dark:opacity-30">
                    {/* Orb 1: Purple/Pink */}
                    <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob dark:mix-blend-screen dark:opacity-30" />

                    {/* Orb 2: Indigo/Blue */}
                    <div className="absolute top-0 -right-4 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000 dark:mix-blend-screen dark:opacity-30" />

                    {/* Orb 3: Pink/Rose */}
                    <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000 dark:mix-blend-screen dark:opacity-30" />

                    {/* Large central glow for depth */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-indigo-500/10 to-purple-500/10 rounded-full blur-[100px] pointer-events-none" />
                </div>

                {/* 3. Grid Pattern Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />



                {/* 4. Noise Texture for "Grainy" Premium Feel */}
                <div className="absolute inset-0 bg-noise opacity-[0.03] mix-blend-overlay pointer-events-none" />

                {/* 5. 3D Background Removed due to compatibility issues. 
                    The CSS Animation (Orbs) above provides the "Best of All Time" effect. 
                */}
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
                    px-4 sm:px-6 lg:px-8
                    pt-20 sm:pt-24
                    pb-16 sm:pb-24 lg:pb-32
                    space-y-16 sm:space-y-24 lg:space-y-32
                ">
                    {children}
                </div>

            </main>

        </div>
    );
};

export default Layout;
