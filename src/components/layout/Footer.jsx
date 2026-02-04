import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-12 border-t border-white/[0.05] mt-24">
            <div className="container">

                <div className="flex flex-col md:flex-row justify-between items-center gap-8">

                    {/* Brand */}
                    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-center md:text-left">
                        <div className="text-xl font-black text-white tracking-widest">
                            OMKAR
                        </div>

                        <div className="h-4 w-[1px] bg-white/10 hidden md:block" />

                        <div className="text-xs font-bold text-secondary uppercase tracking-[0.2em]">
                            Java Full Stack Developer
                        </div>
                    </div>


                    {/* Social Links */}
                    <div className="flex items-center gap-10">

                        {/* GitHub */}
                        <a
                            href="https://github.com/omkarrathod23"
                            target="_blank"
                            rel="noopener noreferrer"
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
                            className="text-dim hover:text-white transition-colors flex items-center gap-2 group"
                        >
                            <Mail size={18} />
                            <span className="text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                                Email
                            </span>
                        </a>

                    </div>


                    {/* Copyright */}
                    <div className="text-[10px] font-bold text-dim uppercase tracking-[0.2em]">
                        © {currentYear} Omkar Rathod. All rights reserved.
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
