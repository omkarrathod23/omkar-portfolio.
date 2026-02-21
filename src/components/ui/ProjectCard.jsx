import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const ProjectCard = ({
    title,
    description,
    tech,
    github,
    live,
    image,
    gradient = 'from-purple-600 to-blue-600'
}) => {
    return (
        <div className="group relative w-full bg-[#121212] overflow-hidden rounded-2xl border border-white/5 hover:border-white/10 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-1">

            {/* Visual Header / Screenshot Area */}
            <div className={`relative h-64 sm:h-72 w-full bg-gradient-to-br ${gradient} p-6 sm:p-8 flex items-center justify-center overflow-hidden group-hover:p-5 transition-all duration-500`}>

                {/* Floating Screenshot */}
                <div className="relative w-full h-full rounded-lg overflow-hidden shadow-2xl transform transition-transform duration-500 group-hover:scale-[1.02] group-hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] bg-[#121212]">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover object-top"
                    />

                    {/* Overlay for Links (Shows on Hover) */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-[2px]">
                        {github && (
                            <a
                                href={github}
                                target="_blank"
                                rel="noreferrer"
                                className="p-3 bg-white/10 hover:bg-white text-white hover:text-black rounded-full transition-all duration-300 transform translate-y-4 group-hover:translate-y-0"
                                aria-label="GitHub Repo"
                            >
                                <Github size={20} />
                            </a>
                        )}
                        {live && (
                            <a
                                href={live}
                                target="_blank"
                                rel="noreferrer"
                                className="p-3 bg-white/10 hover:bg-white text-white hover:text-black rounded-full transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 delay-75"
                                aria-label="Live Demo"
                            >
                                <ExternalLink size={20} />
                            </a>
                        )}
                    </div>
                </div>
            </div>

            {/* Content Footer */}
            <div className="p-6 bg-[#121212]">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/70 transition-colors">
                        {title}
                    </h3>
                </div>

                {/* Tech Stack (Minimal) */}
                <div className="flex flex-wrap gap-2">
                    {tech.slice(0, 3).map((item, idx) => (
                        <span key={idx} className="text-xs text-secondary/60 font-medium">
                            {item}
                        </span>
                    ))}
                    {tech.length > 3 && (
                        <span className="text-xs text-secondary/60 font-medium">+{tech.length - 3}</span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
