import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer
            data-robot-msg="You've reached the bottom"
            className="py-8 sm:py-12 border-t border-white/[0.05] mt-12 sm:mt-16 lg:mt-24"
        >
            <div className="container">

                <div className="flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8">

                    {/* Brand */}
                    <div className="flex flex-col md:flex-row items-center gap-3 sm:gap-4 md:gap-8 text-center md:text-left">
                        <div className="text-lg sm:text-xl font-black text-white tracking-widest">
                            OMKAR
                        </div>

                        <div className="h-4 w-[1px] bg-white/10 hidden md:block" />

                        <div className="text-[10px] sm:text-xs font-bold text-secondary uppercase tracking-[0.15em] sm:tracking-[0.2em]">
                            Java Full Stack Developer
                        </div>
                    </div>


                    {/* Social Links */}
                    <div className="flex items-center gap-6 sm:gap-8 md:gap-10">

                        {/* GitHub */}
                        <a
                            href="https://github.com/omkarrathod23"
                            target="_blank"
                            rel="noopener noreferrer"
                            data-robot-msg="Check out my code"
                            className="text-dim hover:text-white transition-colors flex items-center gap-2 group"
                        >
                            <Github size={18} />
                            <span className="text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                                GitHub
                            </span>
                        </a>


                        {/* LinkedIn */}
                        <a
                            href="https://www.linkedin.com/in/omkar-rathod-a93467251/"
                            target="_blank"
                            rel="noopener noreferrer"
                            data-robot-msg="Let's connect on LinkedIn"
                            className="text-dim hover:text-white transition-colors flex items-center gap-2 group"
                        >
                            <Linkedin size={18} />
                            <span className="text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                                LinkedIn
                            </span>
                        </a>


                        {/* Email */}
                        <a
                            href="mailto:omkarrathod101050@gmail.com"
                            data-robot-msg="Send me an email"
                            className="text-dim hover:text-white transition-colors flex items-center gap-2 group"
                        >
                            <Mail size={18} />
                            <span className="text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                                Email
                            </span>
                        </a>

                    </div>


                    {/* Copyright */}
                    <div className="text-[9px] sm:text-[10px] font-bold text-dim uppercase tracking-[0.15em] sm:tracking-[0.2em] text-center md:text-left">
                        © {currentYear} Omkar Rathod. All rights reserved.
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
