import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowUpRight, Eye, Star, Zap, Code2, TrendingUp } from 'lucide-react';
import Card from './Card';

const ProjectCard = ({
    title,
    description,
    tech,
    image,
    category,
    github,
    live,
    metrics,
    viewMode = 'grid',
    onViewDetails,
    featured = false,
    difficulty = 'Intermediate',
    gradient = 'from-purple-600 to-pink-600',
    difficultyColors = {},
    categoryColors = {}
}) => {
    // List view layout
    if (viewMode === 'list') {
        return (
            <motion.div
                whileHover={{ y: -2 }}
                className="group relative overflow-hidden rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300"
            >
                <div className="flex flex-col md:flex-row gap-6 p-6">
                    {/* Image */}
                    <div className="relative w-full md:w-64 h-40 flex-shrink-0 rounded-lg overflow-hidden">
                        <img
                            src={image}
                            alt={title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        {featured && (
                            <div className="absolute top-2 right-2 bg-yellow-400 text-black text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">
                                Featured
                            </div>
                        )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0 flex flex-col justify-between">
                        <div>
                            <div className="flex items-start justify-between mb-2">
                                <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                                    {title}
                                </h3>
                                <div className="flex gap-2">
                                    {github && (
                                        <a
                                            href={github}
                                            onClick={(e) => e.stopPropagation()}
                                            className="text-secondary hover:text-white transition-colors"
                                            aria-label="GitHub"
                                        >
                                            <Github size={18} />
                                        </a>
                                    )}
                                    {live && (
                                        <a
                                            href={live}
                                            onClick={(e) => e.stopPropagation()}
                                            className="text-secondary hover:text-white transition-colors"
                                            aria-label="Live Demo"
                                        >
                                            <ExternalLink size={18} />
                                        </a>
                                    )}
                                </div>
                            </div>

                            <p className="text-secondary text-sm mb-4 line-clamp-2 leading-relaxed">
                                {description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {tech.slice(0, 5).map((item, idx) => (
                                    <span
                                        key={idx}
                                        className="text-xs text-secondary/80 px-2 py-1 bg-white/5 rounded-md border border-white/5"
                                    >
                                        {item}
                                    </span>
                                ))}
                                {tech.length > 5 && (
                                    <span className="text-xs text-secondary/60 px-2 py-1">
                                        +{tech.length - 5}
                                    </span>
                                )}
                            </div>
                        </div>

                        <div className="flex items-center justify-between mt-auto">
                            <span className="text-xs font-medium text-secondary/70 uppercase tracking-wider">
                                {category} • {difficulty}
                            </span>
                            <button
                                onClick={onViewDetails}
                                className="text-sm text-white font-medium hover:underline flex items-center gap-1"
                            >
                                View Details <ArrowUpRight size={14} />
                            </button>
                        </div>
                    </div>
                </div>
            </motion.div>
        );
    }

    // Grid view layout (default) - Minimal Version
    return (
        <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
            className="group relative bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-white/20 transition-colors"
        >
            <Card className="h-full bg-transparent border-0 p-0">
                {/* Image Section */}
                <div className="relative aspect-video overflow-hidden border-b border-white/5">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 flex gap-2">
                        <span className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider bg-black/50 backdrop-blur-md text-white rounded-md border border-white/10">
                            {category}
                        </span>
                    </div>

                    {/* Featured Badge */}
                    {featured && (
                        <div className="absolute top-3 right-3">
                            <div className="flex items-center gap-1 px-2 py-1 bg-yellow-500/90 text-black text-[10px] font-bold uppercase tracking-wider rounded-md">
                                <Star size={10} className="fill-current" /> Featured
                            </div>
                        </div>
                    )}
                </div>

                {/* Content Section */}
                <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                            {title}
                        </h3>
                        <div className="flex gap-3">
                            {github && (
                                <a
                                    href={github}
                                    onClick={(e) => e.stopPropagation()}
                                    className="text-secondary hover:text-white transition-colors"
                                >
                                    <Github size={18} />
                                </a>
                            )}
                            {live && (
                                <a
                                    href={live}
                                    onClick={(e) => e.stopPropagation()}
                                    className="text-secondary hover:text-white transition-colors"
                                >
                                    <ExternalLink size={18} />
                                </a>
                            )}
                        </div>
                    </div>

                    <p className="text-secondary text-sm leading-relaxed mb-6 line-clamp-3">
                        {description}
                    </p>

                    {/* Metrics Grid */}
                    {metrics && (
                        <div className="grid grid-cols-3 gap-2 mb-6 py-4 border-y border-white/5">
                            {metrics.map((metric, idx) => (
                                <div key={idx} className="text-center">
                                    <div className="text-sm font-bold text-white mb-0.5">
                                        {metric.value}
                                    </div>
                                    <div className="text-[10px] text-secondary uppercase tracking-wider">
                                        {metric.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                        {tech.slice(0, 4).map((item, idx) => (
                            <span
                                key={idx}
                                className="text-[11px] text-secondary px-2 py-1 bg-white/5 rounded-md border border-white/5"
                            >
                                {item}
                            </span>
                        ))}
                    </div>

                    <button
                        onClick={onViewDetails}
                        className="w-full py-3 bg-white/5 hover:bg-white/10 text-white rounded-lg transition-colors font-medium text-sm flex items-center justify-center gap-2"
                    >
                        View Project
                    </button>
                </div>
            </Card>
        </motion.div>
    );
};

export default ProjectCard;
