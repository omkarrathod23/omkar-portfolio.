import React from 'react';
import Navbar from './Navbar';
import RobotAssistant from '../ui/RobotAssistant';
import { useTheme } from '../../context/ThemeContext';

const Layout = ({ children }) => {
    const { theme } = useTheme();

    return (
        <div className="relative min-h-screen text-accent-primary overflow-x-hidden transition-colors duration-300">
            {/* Global Robot Assistant */}
            <RobotAssistant />

            {/* ================= Premium Background ================= */}
            {theme === 'dark' && (
                <div className="fixed inset-0 z-0">
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80 animate-subtle-float"
                        style={{ backgroundImage: "url('/background.jpg')" }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/80 via-bg-primary/20 to-transparent"></div>
                </div>
            )}

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
