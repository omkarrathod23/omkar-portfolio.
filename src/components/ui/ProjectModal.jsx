import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink, Calendar, Users, Star, Code, Zap, Award, TrendingUp } from 'lucide-react';

const ProjectModal = ({ project, isOpen, onClose, difficultyColors = {}, categoryColors = {} }) => {
    if (!project) return null;

    const categoryColor = categoryColors[project.category] || { text: 'text-purple-400', border: 'border-purple-500/30' };

    const modalVariants = {
        hidden: { opacity: 0, scale: 0.9, y: 50 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 300,
                damping: 25,
                staggerChildren: 0.1
            }
        },
        exit: {
            opacity: 0,
            scale: 0.9,
            y: 50,
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

    const contentVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop with Blur */}
                    <motion.div
                        variants={backdropVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        onClick={onClose}
                        className="fixed inset-0 bg-black/90 backdrop-blur-xl z-50"
                    />

                    {/* Modal */}
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none overflow-y-auto">
                        <motion.div
                            variants={modalVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            onClick={(e) => e.stopPropagation()}
                            className="relative pointer-events-auto w-full max-w-5xl my-8"
                        >
                            {/* Animated gradient glow */}
                            <div className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} rounded-3xl blur-2xl opacity-30 animate-pulse`} />

                            <div className="relative bg-bg-secondary/95 backdrop-blur-2xl border border-white/20 rounded-3xl overflow-hidden shadow-2xl">
                                {/* Modal Header with Image */}
                                <div className="relative h-72 md:h-96">
                                    {/* Gradient overlay */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-40 mix-blend-overlay z-10`} />

                                    <motion.img
                                        initial={{ scale: 1.2 }}
                                        animate={{ scale: 1 }}
                                        transition={{ duration: 0.6 }}
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-bg-secondary via-bg-secondary/70 to-transparent z-10" />

                                    {/* Close Button */}
                                    <motion.button
                                        whileHover={{ scale: 1.1, rotate: 90 }}
                                        whileTap={{ scale: 0.9 }}
                                        onClick={onClose}
                                        className="absolute top-6 right-6 p-3 bg-black/60 hover:bg-black/80 rounded-full backdrop-blur-xl transition-all text-white z-20 border border-white/20 shadow-lg"
                                    >
                                        <X size={20} />
                                    </motion.button>

                                    {/* Badges */}
                                    <div className="absolute top-6 left-6 z-20 flex flex-wrap gap-2">
                                        <motion.span
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            className={`px-4 py-2 text-xs font-black uppercase tracking-widest bg-black/60 backdrop-blur-xl ${categoryColor.text} border ${categoryColor.border} rounded-full shadow-lg`}
                                        >
                                            {project.category}
                                        </motion.span>

                                        <motion.span
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.1 }}
                                            className={`px-4 py-2 text-xs font-black uppercase tracking-widest rounded-full shadow-lg border ${difficultyColors[project.difficulty]}`}
                                        >
                                            {project.difficulty}
                                        </motion.span>

                                        {project.featured && (
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: 0.2, type: 'spring' }}
                                                className="flex items-center gap-2 px-4 py-2 bg-yellow-500/20 backdrop-blur-xl border border-yellow-500/40 rounded-full shadow-lg shadow-yellow-500/30"
                                            >
                                                <Star size={14} className="text-yellow-400 fill-yellow-400" />
                                                <span className="text-xs font-black uppercase tracking-widest text-yellow-400">
                                                    Featured
                                                </span>
                                            </motion.div>
                                        )}
                                    </div>
                                </div>

                                {/* Modal Content */}
                                <div className="p-8 md:p-10 max-h-[60vh] overflow-y-auto custom-scrollbar">
                                    {/* Title and Actions */}
                                    <motion.div
                                        variants={contentVariants}
                                        className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8"
                                    >
                                        <div className="flex-1">
                                            <h2 className={`text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r ${project.gradient} mb-4 leading-tight`}>
                                                {project.title}
                                            </h2>
                                            <p className="text-secondary text-lg leading-relaxed">
                                                {project.description}
                                            </p>
                                        </div>

                                        <div className="flex gap-3 flex-shrink-0">
                                            {project.github && (
                                                <motion.a
                                                    whileHover={{ scale: 1.05, y: -2 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-2 px-5 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/20 rounded-xl text-white font-semibold transition-all shadow-lg"
                                                >
                                                    <Github size={20} />
                                                    <span>Code</span>
                                                </motion.a>
                                            )}
                                            {project.live && (
                                                <motion.a
                                                    whileHover={{ scale: 1.05, y: -2 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    href={project.live}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={`flex items-center gap-2 px-5 py-3 bg-gradient-to-r ${project.gradient} hover:shadow-lg hover:shadow-purple-500/30 rounded-xl text-white font-semibold transition-all shadow-lg`}
                                                >
                                                    <ExternalLink size={20} />
                                                    <span>Live Demo</span>
                                                </motion.a>
                                            )}
                                        </div>
                                    </motion.div>

                                    {/* Project Meta Info */}
                                    <motion.div
                                        variants={contentVariants}
                                        className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
                                    >
                                        {[
                                            { icon: Calendar, label: 'Date', value: project.date, gradient: 'from-blue-500 to-cyan-500' },
                                            { icon: Users, label: 'Team', value: project.team, gradient: 'from-green-500 to-emerald-500' },
                                            { icon: Star, label: 'Stars', value: project.stars, gradient: 'from-yellow-500 to-orange-500' },
                                            { icon: Code, label: 'Technologies', value: project.tech.length, gradient: 'from-purple-500 to-pink-500' }
                                        ].map((meta, idx) => (
                                            <motion.div
                                                key={idx}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.1 * idx }}
                                                whileHover={{ scale: 1.05, y: -2 }}
                                                className="relative group"
                                            >
                                                <div className={`absolute -inset-0.5 bg-gradient-to-r ${meta.gradient} rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300`} />
                                                <div className="relative flex items-center gap-3 p-4 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10">
                                                    <meta.icon size={20} className={`text-transparent bg-clip-text bg-gradient-to-r ${meta.gradient}`} />
                                                    <div>
                                                        <div className="text-[10px] text-dim uppercase tracking-wider font-bold">{meta.label}</div>
                                                        <div className={`text-base font-bold text-transparent bg-clip-text bg-gradient-to-r ${meta.gradient}`}>
                                                            {meta.value}
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </motion.div>

                                    {/* Divider */}
                                    <div className={`h-[2px] bg-gradient-to-r ${project.gradient} opacity-20 mb-8 rounded-full`} />

                                    {/* Full Description */}
                                    <motion.div variants={contentVariants} className="mb-8">
                                        <div className="flex items-center gap-3 mb-4">
                                            <Zap size={24} className={`text-transparent bg-clip-text bg-gradient-to-r ${project.gradient}`} />
                                            <h3 className="text-2xl font-bold text-white">About This Project</h3>
                                        </div>
                                        <p className="text-secondary leading-relaxed text-base">
                                            {project.fullDescription}
                                        </p>
                                    </motion.div>

                                    {/* Metrics */}
                                    {project.metrics && (
                                        <motion.div variants={contentVariants} className="mb-8">
                                            <div className="flex items-center gap-3 mb-5">
                                                <TrendingUp size={24} className={`text-transparent bg-clip-text bg-gradient-to-r ${project.gradient}`} />
                                                <h3 className="text-2xl font-bold text-white">Key Metrics</h3>
                                            </div>
                                            <div className="grid grid-cols-3 gap-5">
                                                {project.metrics.map((metric, idx) => (
                                                    <motion.div
                                                        key={idx}
                                                        initial={{ opacity: 0, scale: 0.8 }}
                                                        animate={{ opacity: 1, scale: 1 }}
                                                        transition={{ delay: 0.1 * idx }}
                                                        whileHover={{ scale: 1.05, y: -4 }}
                                                        className="relative group"
                                                    >
                                                        <div className={`absolute -inset-0.5 bg-gradient-to-r ${project.gradient} rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300`} />
                                                        <div className="relative p-6 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 text-center">
                                                            <div className={`text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r ${project.gradient} mb-2`}>
                                                                {metric.value}
                                                            </div>
                                                            <div className="text-xs text-dim uppercase tracking-widest font-bold">
                                                                {metric.label}
                                                            </div>
                                                        </div>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}

                                    {/* Technologies */}
                                    <motion.div variants={contentVariants}>
                                        <div className="flex items-center gap-3 mb-5">
                                            <Award size={24} className={`text-transparent bg-clip-text bg-gradient-to-r ${project.gradient}`} />
                                            <h3 className="text-2xl font-bold text-white">Technologies Used</h3>
                                        </div>
                                        <div className="flex flex-wrap gap-3">
                                            {project.tech.map((tech, idx) => (
                                                <motion.span
                                                    key={idx}
                                                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                                    transition={{ delay: 0.05 * idx, type: 'spring' }}
                                                    whileHover={{ scale: 1.1, y: -4 }}
                                                    className={`relative group px-5 py-2.5 bg-gradient-to-r ${project.gradient} bg-opacity-10 rounded-xl border-2 border-white/10 text-sm font-bold overflow-hidden`}
                                                >
                                                    <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity`} />
                                                    <span className={`relative text-transparent bg-clip-text bg-gradient-to-r ${project.gradient}`}>
                                                        {tech}
                                                    </span>
                                                </motion.span>
                                            ))}
                                        </div>
                                    </motion.div>
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
