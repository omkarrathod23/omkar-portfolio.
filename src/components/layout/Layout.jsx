import React from 'react';
import Navbar from './Navbar';

const Layout = ({ children }) => {
    return (
        <div className="relative min-h-screen bg-bg-primary text-accent-primary overflow-x-hidden transition-colors duration-300">

            {/* ================= Premium Background ================= */}
            {/* ================= Premium Animated Background ================= */}



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
