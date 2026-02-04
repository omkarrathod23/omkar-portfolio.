import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';
import Card from './Card';

const ProjectCard = ({ title, description, tech, image, category, github, live, metrics }) => {
    return (
        <Card className="group relative overflow-hidden p-0 h-full border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
            {/* Image Section */}
            <div className="relative aspect-video overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-transparent z-10 opacity-60" />
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 text-[10px] font-black uppercase tracking-widest bg-black/50 backdrop-blur-md text-white border border-white/10 rounded-full">
                        {category}
                    </span>
                </div>
            </div>

            {/* Content Section */}
            <div className="p-6 md:p-8">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-accent-primary transition-colors">
                        {title}
                    </h3>
                    <div className="flex gap-3">
                        {github && (
                            <a href={github} className="text-secondary hover:text-white transition-colors" aria-label="GitHub">
                                <Github size={20} />
                            </a>
                        )}
                        {live && (
                            <a href={live} className="text-secondary hover:text-white transition-colors" aria-label="Live Demo">
                                <ArrowUpRight size={20} />
                            </a>
                        )}
                    </div>
                </div>

                <p className="text-secondary text-sm leading-relaxed mb-6 line-clamp-3">
                    {description}
                </p>

                {/* Metrics Grid */}
                {metrics && (
                    <div className="grid grid-cols-3 gap-4 mb-6 py-4 border-y border-white/5">
                        {metrics.map((metric, idx) => (
                            <div key={idx} className="text-center">
                                <div className="text-white font-bold text-sm">{metric.value}</div>
                                <div className="text-[10px] text-dim uppercase tracking-wider">{metric.label}</div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                    {tech.map((item, idx) => (
                        <span
                            key={idx}
                            className="text-[10px] text-dim px-2 py-1 bg-white/5 rounded border border-white/5"
                        >
                            {item}
                        </span>
                    ))}
                </div>
            </div>
        </Card>
    );
};

export default ProjectCard;
