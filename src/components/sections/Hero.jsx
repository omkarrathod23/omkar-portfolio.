import React from 'react';
import { motion } from 'framer-motion';
import {
    Github,
    Linkedin,
    Mail,
    Twitter,
    GitCommit
} from 'lucide-react';

const Hero = () => {
    return (
        <section
            id="home"
            className="container pt-8 sm:pt-10 md:pt-12 pb-8 sm:pb-10 md:pb-12 flex justify-center"
        >
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="relative w-full max-w-2xl bg-bg-secondary rounded-xl overflow-hidden shadow-2xl border border-accent-primary/5"
            >
                {/* ================= Banner ================= */}
                <div className="relative h-64 w-full overflow-hidden group">
                    <img
                        src="/banner.jpg"
                        alt="banner"
                        data-robot-msg="Nice view from here"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-opacity" />

                    {/* Quote */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                        <p className="font-serif italic text-white/90 text-lg sm:text-xl md:text-2xl max-w-md leading-relaxed">
                            Clarity over decoration. <br />
                            Impact over noise.
                        </p>
                        <GitCommit className="text-white/80 mt-2" size={20} />
                    </div>
                </div>

                {/* ================= Content ================= */}
                <div className="px-6 pb-8 relative">
                    {/* Top Row */}
                    <div className="flex justify-between items-start">
                        {/* Profile */}
                        <div className="-mt-16 sm:-mt-20 relative z-10">
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                                data-robot-msg="That's me"
                                className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-[6px] border-bg-secondary shadow-lg bg-bg-secondary cursor-help"
                            >
                                <img
                                    src="/profile.jpg"
                                    alt="Profile"
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                        </div>

                        {/* GitHub Stats */}
                        <div
                            data-robot-msg="My contribution score"
                            className="mt-4 flex items-center gap-2 text-secondary hover:text-accent-primary transition-colors cursor-pointer"
                        >
                            <Github size={18} />
                            <span className="font-medium text-sm">81</span>
                        </div>
                    </div>

                    {/* Name & Socials */}
                    <div className="mt-4 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                        <div data-robot-msg="I'm Omkar">
                            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-accent-primary tracking-tight">
                                Omkar Rathod
                            </h1>
                            <p className="text-secondary font-medium mt-1">
                                21 • engineer • Java Full-Stack Developer
                            </p>
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center gap-3">
                            <SocialLink
                                href="https://github.com/omkarrathod23"
                                icon={Github}
                                msg="Check out my GitHub"
                            />
                            <SocialLink
                                href="mailto:omkarrathod101050@gmail.com"
                                icon={Mail}
                                msg="Send me an email"
                            />
                            <SocialLink
                                href="https://www.linkedin.com/in/omkar-rathod-a93467251/"
                                icon={Linkedin}
                                msg="Connect on LinkedIn"
                            />
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="h-px w-full bg-accent-primary/10 my-6" />

                    {/* Bio */}
                    <div data-robot-msg="My technical journey">
                        <p className="text-accent-primary text-base sm:text-lg leading-relaxed">
                            I specialize in developing scalable REST APIs using
                            Java and Spring Boot, designing efficient database
                            schemas, and integrating clean, responsive
                            frontends. From system design and implementation to
                            deployment and maintenance, I focus on writing
                            maintainable code and delivering solutions that
                            solve real-world problems.
                        </p>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

const SocialLink = ({ href, icon: Icon, msg }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        data-robot-msg={msg}
        className="p-2 rounded-full hover:bg-accent-primary/10 text-secondary hover:text-accent-primary transition-all"
    >
        <Icon size={20} />
    </a>
);

export default Hero;