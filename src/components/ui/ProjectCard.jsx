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
    const categoryColor = categoryColors[category] || { bg: 'from-purple-500/20 to-pink-500/20', text: 'text-purple-400' };

    // List view layout
    if (viewMode === 'list') {
        return (
            <motion.div
                whileHover={{ scale: 1.01, x: 4 }}
                className="group relative overflow-hidden rounded-2xl"
            >
                {/* Gradient glow effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${gradient} rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500`} />

                <div className="relative border border-white/10 bg-white/[0.03] backdrop-blur-xl hover:bg-white/[0.06] hover:border-white/20 transition-all rounded-2xl">
                    <div className="flex flex-col md:flex-row gap-4 p-5">
                        {/* Image with overlay gradient */}
                        <div className="relative w-full md:w-56 h-36 flex-shrink-0 rounded-xl overflow-hidden">
                            <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-20 mix-blend-overlay`} />
                            <img
                                src={image}
                                alt={title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                            {/* Badges overlay */}
                            <div className="absolute top-3 left-3 flex gap-2">
                                <span className={`px-2.5 py-1 text-[9px] font-black uppercase tracking-wider bg-black/70 backdrop-blur-md ${categoryColor.text} border ${categoryColor.border} rounded-full`}>
                                    {category}
                                </span>
                            </div>

                            {featured && (
                                <div className="absolute top-3 right-3">
                                    <Star size={16} className="text-yellow-400 fill-yellow-400 drop-shadow-lg" />
                                </div>
                            )}
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0 flex flex-col justify-between">
                            <div>
                                <div className="flex items-start justify-between mb-2">
                                    <h3 className={`text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${gradient} group-hover:scale-[1.02] transition-transform`}>
                                        {title}
                                    </h3>
                                    <div className="flex gap-2 ml-4">
                                        {github && (
                                            <a
                                                href={github}
                                                onClick={(e) => e.stopPropagation()}
                                                className="p-1.5 bg-white/5 hover:bg-white/10 rounded-lg text-secondary hover:text-white transition-all backdrop-blur-sm border border-white/10"
                                                aria-label="GitHub"
                                            >
                                                <Github size={16} />
                                            </a>
                                        )}
                                        {live && (
                                            <a
                                                href={live}
                                                onClick={(e) => e.stopPropagation()}
                                                className="p-1.5 bg-white/5 hover:bg-white/10 rounded-lg text-secondary hover:text-white transition-all backdrop-blur-sm border border-white/10"
                                                aria-label="Live Demo"
                                            >
                                                <ExternalLink size={16} />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <p className="text-secondary text-sm mb-3 line-clamp-2 leading-relaxed">
                                    {description}
                                </p>

                                <div className="flex flex-wrap gap-1.5 mb-3">
                                    {tech.slice(0, 5).map((item, idx) => (
                                        <span
                                            key={idx}
                                            className="text-[10px] text-dim px-2.5 py-1 bg-white/5 rounded-lg border border-white/10 hover:border-purple-500/30 hover:text-purple-400 transition-colors backdrop-blur-sm"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                    {tech.length > 5 && (
                                        <span className="text-[10px] text-purple-400 px-2 py-1 font-semibold">
                                            +{tech.length - 5} more
                                        </span>
                                    )}
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg border ${difficultyColors[difficulty]}`}>
                                    {difficulty}
                                </span>
                                <button
                                    onClick={onViewDetails}
                                    className="text-sm text-purple-400 hover:text-purple-300 font-medium flex items-center gap-1.5 group/btn"
                                >
                                    <Eye size={14} className="group-hover/btn:scale-110 transition-transform" />
                                    View Details
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        );
    }

    // Grid view layout (default) - Premium Version
    return (
        <motion.div
            whileHover={{ y: -8 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="group relative"
        >
            {/* Animated gradient glow */}
            <div className={`absolute -inset-1 bg-gradient-to-r ${gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-all duration-500 animate-pulse`} />

            <Card className="relative overflow-hidden p-0 h-full border-white/10 bg-white/[0.03] backdrop-blur-xl hover:bg-white/[0.06] hover:border-white/20 transition-all">
                {/* Image Section with Gradient Overlay */}
                <div className="relative aspect-video overflow-hidden">
                    {/* Gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-30 mix-blend-overlay z-10`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/50 to-transparent z-10" />

                    <motion.img
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover"
                    />

                    {/* Top Badges */}
                    <div className="absolute top-4 left-4 z-20 flex gap-2">
                        <motion.span
                            whileHover={{ scale: 1.05 }}
                            className={`px-3 py-1.5 text-[10px] font-black uppercase tracking-widest bg-black/60 backdrop-blur-xl ${categoryColor.text} border ${categoryColor.border} rounded-full shadow-lg`}
                        >
                            {category}
                        </motion.span>
                        <motion.span
                            whileHover={{ scale: 1.05 }}
                            className={`px-3 py-1.5 text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg border ${difficultyColors[difficulty]}`}
                        >
                            {difficulty}
                        </motion.span>
                    </div>

                    {/* Featured Badge */}
                    {featured && (
                        <motion.div
                            initial={{ rotate: -15, scale: 0 }}
                            animate={{ rotate: 0, scale: 1 }}
                            whileHover={{ rotate: 10, scale: 1.1 }}
                            className="absolute top-4 right-4 z-20"
                        >
                            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-yellow-500/20 backdrop-blur-xl border border-yellow-500/40 rounded-full shadow-lg shadow-yellow-500/30">
                                <Star size={14} className="text-yellow-400 fill-yellow-400" />
                                <span className="text-[10px] font-black uppercase tracking-wider text-yellow-400">
                                    Featured
                                </span>
                            </div>
                        </motion.div>
                    )}

                    {/* Hover overlay with icons */}
                    <motion.div
                        className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center gap-3"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                    >
                        {github && (
                            <motion.a
                                href={github}
                                onClick={(e) => e.stopPropagation()}
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                whileTap={{ scale: 0.9 }}
                                className="p-3 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 text-white hover:bg-white/20 transition-all shadow-lg"
                            >
                                <Github size={20} />
                            </motion.a>
                        )}
                        {live && (
                            <motion.a
                                href={live}
                                onClick={(e) => e.stopPropagation()}
                                whileHover={{ scale: 1.1, rotate: -5 }}
                                whileTap={{ scale: 0.9 }}
                                className="p-3 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 text-white hover:bg-white/20 transition-all shadow-lg"
                            >
                                <ExternalLink size={20} />
                            </motion.a>
                        )}
                    </motion.div>
                </div>

                {/* Content Section */}
                <div className="p-7 md:p-8">
                    {/* Title */}
                    <h3 className={`text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r ${gradient} mb-3 leading-tight`}>
                        {title}
                    </h3>

                    <p className="text-secondary text-sm leading-relaxed mb-6 line-clamp-3">
                        {description}
                    </p>

                    {/* Metrics Grid with Hover Effects */}
                    {metrics && (
                        <div className="grid grid-cols-3 gap-3 mb-6 py-5 border-y border-white/10">
                            {metrics.map((metric, idx) => (
                                <motion.div
                                    key={idx}
                                    className="text-center relative group/metric"
                                    whileHover={{ scale: 1.08, y: -2 }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg opacity-0 group-hover/metric:opacity-100 transition-opacity" />
                                    <div className="relative">
                                        <div className={`text-lg font-black text-transparent bg-clip-text bg-gradient-to-r ${gradient} mb-1`}>
                                            {metric.value}
                                        </div>
                                        <div className="text-[10px] text-dim uppercase tracking-widest font-bold">
                                            {metric.label}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    )}

                    {/* Tech Stack with Color-coded Badges */}
                    <div className="flex flex-wrap gap-2 mb-5">
                        {tech.map((item, idx) => (
                            <motion.span
                                key={idx}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: idx * 0.05 }}
                                whileHover={{ scale: 1.1, y: -2 }}
                                className="text-[11px] font-semibold text-purple-300 px-3 py-1.5 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-all backdrop-blur-sm"
                            >
                                {item}
                            </motion.span>
                        ))}
                    </div>

                    {/* View Details Button with Gradient */}
                    <motion.button
                        onClick={onViewDetails}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`w-full py-3.5 px-4 bg-gradient-to-r ${gradient} hover:shadow-lg hover:shadow-purple-500/30 text-white rounded-xl transition-all flex items-center justify-center gap-2.5 font-bold text-sm relative overflow-hidden group/btn`}
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700" />
                        <Eye size={18} className="relative z-10" />
                        <span className="relative z-10">View Details</span>
                        <ArrowUpRight size={16} className="relative z-10 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    </motion.button>
                </div>
            </Card>
        </motion.div>
    );
};

export default ProjectCard;
