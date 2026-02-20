import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    Github,
    Linkedin,
    Mail,
    Twitter,
    Link as LinkIcon,
    Sun,
    Moon,
    GitCommit
} from 'lucide-react';

const Hero = () => {
    // Theme toggle logic (assuming simple class toggle on visual for now, 
    // ideally this should sync with a global context if available, 
    // but matching the requested component isolation)
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        // Check initial theme
        if (document.documentElement.classList.contains('light')) {
            setIsDark(false);
        }
    }, []);

    const toggleTheme = () => {
        const root = document.documentElement;
        if (isDark) {
            root.classList.add('light');
            setIsDark(false);
        } else {
            root.classList.remove('light');
            setIsDark(true);
        }
    };

    return (
        <section id="home" className="container pt-8 sm:pt-10 md:pt-12 pb-8 sm:pb-10 md:pb-12 flex justify-center">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative w-full max-w-2xl bg-bg-secondary rounded-xl overflow-hidden shadow-2xl border border-white/5"
            >
                {/* ================= Banner ================= */}
                <div className="relative h-64 w-full overflow-hidden group">
                    <img
                        src="/banner.jpg" // Using existing asset
                        alt="banner"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Dark Overlay for text readability */}
                    <div className="absolute inset-0 bg-black/40 transition-opacity group-hover:bg-black/30" />

                    {/* Quote */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                        <p className="font-serif italic text-white/90 text-lg sm:text-xl md:text-2xl max-w-md leading-relaxed">
                            You make your own luck if you stay at it long enough.
                        </p>
                        <GitCommit className="text-white/80 mt-2" size={20} />
                    </div>
                </div>

                {/* ================= Content ================= */}
                <div className="px-6 pb-8 relative">

                    {/* Top Row: Profile & Github Stats */}
                    <div className="flex justify-between items-start">
                        {/* Profile Image - Overlapping */}
                        <div className="-mt-16 sm:-mt-20 relative z-10">
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                                className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-[6px] border-bg-secondary shadow-lg bg-bg-secondary"
                            >
                                <img
                                    src="/profile.jpg" // Using existing asset
                                    alt="Profile"
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                        </div>

                        {/* Github Stats (Mocked or Real) */}
                        <div className="mt-4 flex items-center gap-2 text-secondary hover:text-accent-primary transition-colors cursor-pointer">
                            <Github size={18} />
                            <span className="font-medium text-sm">81</span>
                        </div>
                    </div>

                    {/* Name, Title, Socials Row */}
                    <div className="mt-4 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                        <div>
                            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-accent-primary tracking-tight">
                                Omkar Rathod
                            </h1>
                            <p className="text-secondary font-medium mt-1">
                                21 • engineer • developer • builder
                            </p>
                        </div>

                        {/* Social Icons & Actions */}
                        <div className="flex items-center gap-3">
                            <SocialLink href="https://github.com/omkarrathod23" icon={Github} />
                            <SocialLink href="https://twitter.com" icon={Twitter} /> {/* Placeholder for X/Twitter */}
                            <SocialLink href="mailto:omkarrathod101050@gmail.com" icon={Mail} />
                            <SocialLink href="https://www.linkedin.com/in/omkar-rathod-a93467251/" icon={Linkedin} />

                            {/* Theme Toggle */}
                            <button
                                onClick={toggleTheme}
                                className="p-2 rounded-full hover:bg-white/10 text-secondary hover:text-accent-primary transition-all"
                                aria-label="Toggle Theme"
                            >
                                {isDark ? <Sun size={20} /> : <Moon size={20} />}
                            </button>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="h-px w-full bg-white/10 my-6" />

                    {/* Bio / Description */}
                    <div className="space-y-4">
                        <p className="text-accent-primary text-base sm:text-lg leading-relaxed">
                            <span className="font-bold">I build from zero.</span> Whether it's frontend, backend, full-stack applications, or AI-powered experiences, I work across the entire development lifecycle. From UI/UX to deployment to user feedback, I care less about technology debates and more about delivering results that solve real problems.
                        </p>

                        {/* Blur effect text (mocking the image style of 'more' content or footer) */}
                        {/* <div className="text-secondary/50 text-sm blur-[2px] select-none">
                            Read more about my journey and projects...
                        </div> */}
                    </div>

                </div>
            </motion.div>
        </section>
    );
};

const SocialLink = ({ href, icon: Icon }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-full hover:bg-white/10 text-secondary hover:text-accent-primary transition-all"
    >
        <Icon size={20} />
    </a>
);

export default Hero;
