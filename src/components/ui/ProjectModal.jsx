import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink, Calendar, Users, Star, Code, Zap, Award, TrendingUp } from 'lucide-react';

const ProjectModal = ({ project, isOpen, onClose, difficultyColors = {}, categoryColors = {} }) => {
    if (!project) return null;

    const modalVariants = {
        hidden: { opacity: 0, scale: 0.95, y: 20 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 300,
                damping: 30,
                staggerChildren: 0.1
            }
        },
        exit: {
            opacity: 0,
            scale: 0.95,
            y: 20,
            transition: {
                duration: 0.2
            }
        }
    };

    const backdropVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
        exit: { opacity: 0 }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        variants={backdropVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
                    />

                    {/* Modal */}
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none overflow-y-auto">
                        <motion.div
                            variants={modalVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            onClick={(e) => e.stopPropagation()}
                            className="relative pointer-events-auto w-full max-w-4xl my-8 bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
                        >
                            {/* Modal Header with Image */}
                            <div className="relative h-64 md:h-80">
                                <motion.img
                                    initial={{ scale: 1.1 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.6 }}
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/50 to-transparent" />

                                {/* Close Button */}
                                <button
                                    onClick={onClose}
                                    className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white/80 hover:text-white transition-colors border border-white/10 backdrop-blur-md"
                                >
                                    <X size={20} />
                                </button>

                                {/* Badges */}
                                <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between">
                                    <div className="flex flex-col gap-2">
                                        <div className="flex flex-wrap gap-2">
                                            <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider bg-white/10 backdrop-blur-md text-white border border-white/10 rounded-md">
                                                {project.category}
                                            </span>
                                            <span className={`px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-md border ${difficultyColors[project.difficulty]} bg-black/50 backdrop-blur-md`}>
                                                {project.difficulty}
                                            </span>
                                        </div>
                                    </div>
                                    {project.featured && (
                                        <div className="flex items-center gap-1.5 px-3 py-1 bg-yellow-500/20 backdrop-blur-md border border-yellow-500/30 rounded-full text-yellow-400">
                                            <Star size={12} className="fill-current" />
                                            <span className="text-[10px] font-bold uppercase tracking-wider">Featured</span>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Modal Content */}
                            <div className="p-6 md:p-8 max-h-[calc(80vh-320px)] overflow-y-auto custom-scrollbar">
                                <div className="flex flex-col md:flex-row gap-8 mb-8">
                                    <div className="flex-1">
                                        <h2 className="text-3xl font-bold text-white mb-4">
                                            {project.title}
                                        </h2>
                                        <p className="text-secondary text-base leading-relaxed">
                                            {project.description}
                                        </p>
                                    </div>

                                    <div className="flex gap-3 flex-shrink-0 self-start">
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white text-sm font-medium transition-colors"
                                            >
                                                <Github size={18} />
                                                <span>Source</span>
                                            </a>
                                        )}
                                        {project.live && (
                                            <a
                                                href={project.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 px-4 py-2 bg-white text-black hover:bg-gray-200 rounded-lg text-sm font-bold transition-colors"
                                            >
                                                <ExternalLink size={18} />
                                                <span>Live Demo</span>
                                            </a>
                                        )}
                                    </div>
                                </div>

                                {/* Project Meta Info Grid */}
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 py-6 border-y border-white/5">
                                    {[
                                        { icon: Calendar, label: 'Date', value: project.date },
                                        { icon: Users, label: 'Team', value: project.team },
                                        { icon: Star, label: 'Stars', value: project.stars },
                                        { icon: Code, label: 'Tech', value: `${project.tech.length} Used` }
                                    ].map((meta, idx) => (
                                        <div key={idx} className="flex items-center gap-3">
                                            <div className="p-2 bg-white/5 rounded-lg text-secondary">
                                                <meta.icon size={18} />
                                            </div>
                                            <div>
                                                <div className="text-[10px] text-secondary uppercase tracking-wider font-semibold">{meta.label}</div>
                                                <div className="text-sm font-bold text-white">{meta.value}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Full Description */}
                                <div className="mb-8">
                                    <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                                        <Zap size={18} className="text-purple-400" /> Project Overview
                                    </h3>
                                    <p className="text-secondary leading-relaxed">
                                        {project.fullDescription}
                                    </p>
                                </div>

                                {/* Metrics */}
                                {project.metrics && (
                                    <div className="mb-8">
                                        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                            <TrendingUp size={18} className="text-green-400" /> Key Metrics
                                        </h3>
                                        <div className="grid grid-cols-3 gap-4">
                                            {project.metrics.map((metric, idx) => (
                                                <div key={idx} className="p-4 bg-white/5 rounded-xl border border-white/5 text-center">
                                                    <div className="text-2xl font-bold text-white mb-1">
                                                        {metric.value}
                                                    </div>
                                                    <div className="text-[10px] text-secondary uppercase tracking-wider font-medium">
                                                        {metric.label}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Technologies */}
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                        <Award size={18} className="text-blue-400" /> Tech Stack
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((tech, idx) => (
                                            <span
                                                key={idx}
                                                className="px-3 py-1.5 bg-white/5 hover:bg-white/10 border border-white/5 rounded-lg text-sm text-secondary hover:text-white transition-colors cursor-default"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
};

export default ProjectModal;
