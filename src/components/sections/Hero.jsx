import React from 'react';
import { motion } from 'framer-motion';
import {
    Github,
    Linkedin,
    Mail,
    Download,
    MessageSquare
} from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="container pt-8 sm:pt-12 md:pt-16 pb-12 sm:pb-16 md:pb-24">

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-accent-primary/5 bg-bg-secondary shadow-2xl"
            >
                {/* ================= Banner ================= */}
                <div className="relative h-32 sm:h-40 md:h-56 w-full overflow-hidden">
                    <motion.img
                        initial={{ scale: 1.2 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        src="/banner.jpg"
                        alt="banner"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-bg-secondary dark:to-bg-primary" />

                    <div className="absolute top-5 right-5">
                        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-accent-primary/10 backdrop-blur-md border border-accent-primary/10">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
                            <span className="text-[10px] font-bold uppercase tracking-widest text-accent-primary">Online</span>
                        </div>
                    </div>
                </div>

                {/* ================= Content ================= */}
                <div className="px-4 sm:px-6 md:px-10 pb-6 sm:pb-8 md:pb-12 -mt-8 sm:-mt-10 md:-mt-14 relative">
                    {/* Profile image */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden border-3 sm:border-4 border-bg-primary shadow-2xl ring-1 ring-accent-primary/10"
                    >
                        <img
                            src="/profile.jpg"
                            alt="Omkar Rathod"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>

                    {/* Text + actions */}
                    <div className="mt-4 sm:mt-5 md:mt-6 flex flex-col md:flex-row md:items-end md:justify-between gap-4 sm:gap-6 md:gap-8">
                        <div className="max-w-xl">
                            <motion.h1
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3, duration: 0.5 }}
                                className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight text-accent-primary"
                            >
                                Omkar Rathod
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4, duration: 0.5 }}
                                className="text-secondary mt-2 sm:mt-3 md:mt-4 leading-relaxed text-xs sm:text-sm md:text-base"
                            >
                                Java Full Stack Developer & AI/ML Engineer.
                                Building scalable Spring Boot backends, modern React frontends,
                                and intelligent data-driven systems.
                            </motion.p>
                        </div>

                        <motion.a
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary flex items-center justify-center gap-2 w-full md:w-fit text-xs sm:text-sm"
                        >
                            <Download size={16} />
                            Download CV
                        </motion.a>
                    </div>

                    {/* ================= Bottom Row ================= */}
                    <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-accent-primary/5 flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-6">
                        <div className="flex flex-wrap gap-2 sm:gap-3">
                            <a
                                href="https://www.linkedin.com/in/omkar-rathod-a93467251/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-secondary flex items-center gap-1.5 sm:gap-2 py-2 px-3 sm:px-4"
                            >
                                <MessageSquare size={14} className="flex-shrink-0" />
                                <span className="text-[10px] sm:text-xs">Let's connect</span>
                            </a>

                            <a
                                href="mailto:omkarrathod101050@gmail.com"
                                className="btn-secondary flex items-center gap-1.5 sm:gap-2 py-2 px-3 sm:px-4"
                            >
                                <Mail size={14} className="flex-shrink-0" />
                                <span className="text-[10px] sm:text-xs">Email me</span>
                            </a>
                        </div>

                        <div className="flex items-center gap-2 sm:gap-3">
                            {[
                                { icon: Github, href: "https://github.com/omkarrathod23" },
                                { icon: Linkedin, href: "https://www.linkedin.com/in/omkar-rathod-a93467251/" },
                                { icon: Mail, href: "mailto:omkarrathod101050@gmail.com" }
                            ].map((social, i) => (
                                <motion.a
                                    key={i}
                                    whileHover={{ y: -2 }}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 sm:p-2.5 bg-accent-primary/5 rounded-lg sm:rounded-xl hover:bg-accent-primary/10 transition-colors border border-accent-primary/5 text-secondary hover:text-accent-primary"
                                >
                                    <social.icon size={16} className="sm:w-[18px] sm:h-[18px]" />
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;