import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Grid3x3, List, Filter, X } from 'lucide-react';
import ProjectCard from '../ui/ProjectCard';
import ProjectModal from '../ui/ProjectModal';

const Projects = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [viewMode, setViewMode] = useState('grid');
    const [selectedProject, setSelectedProject] = useState(null);

    // Color schemes for categories
    const categoryColors = {
        'All': { bg: 'from-purple-500/20 to-pink-500/20', border: 'border-purple-500/30', text: 'text-purple-400', glow: 'shadow-purple-500/50' },
        'Full Stack': { bg: 'from-blue-500/20 to-cyan-500/20', border: 'border-blue-500/30', text: 'text-blue-400', glow: 'shadow-blue-500/50' },
        'AI/ML': { bg: 'from-orange-500/20 to-red-500/20', border: 'border-orange-500/30', text: 'text-orange-400', glow: 'shadow-orange-500/50' }
    };

    const categories = ['All', 'Full Stack', 'AI/ML'];

    const projects = [
        {
            id: 1,
            title: 'Smart Vendor Reconciliation',
            description: 'A comprehensive platform for automated vendor billing, onboarding, and payment reconciliation with role-based dashboards.',
            fullDescription: 'Enterprise-grade reconciliation platform built with Spring Boot and React. Features include automated invoice matching, streamlined vendor onboarding with document verification, real-time payment tracking, role-based access control (RBAC), and comprehensive audit trails. Implements JWT authentication, PostgreSQL database, and RESTful API design patterns.',
            tech: ['Spring Boot', 'React', 'PostgreSQL', 'JWT', 'REST API', 'Redux'],
            category: 'Full Stack',
            github: 'https://github.com/omkarrathod23',
            live: '#',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
            metrics: [
                { value: '100%', label: 'Accurate' },
                { value: '4+', label: 'Roles' },
                { value: 'Real-time', label: 'Updates' }
            ],
            featured: true,
            date: '2026-01',
            team: 'Solo',
            stars: 45,
            difficulty: 'Advanced',
            gradient: 'from-blue-600 via-cyan-600 to-teal-600'
        },
        {
            id: 2,
            title: 'E-Commerce Platform',
            description: 'Modern e-commerce solution with advanced coupon management, order tracking, and integrated payment processing.',
            fullDescription: 'Full-featured e-commerce platform featuring a robust coupon management system for targeted promotions, real-time order tracking for customers, secure payment gateway integration, and a comprehensive admin dashboard. built with microservices architecture for scalability.',
            tech: ['Java', 'Spring', 'MySQL', 'React', 'Redux', 'Stripe API'],
            category: 'Full Stack',
            github: 'https://github.com/omkarrathod23',
            live: '#',
            image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
            metrics: [
                { value: '1000+', label: 'Products' },
                { value: '50ms', label: 'Response' },
                { value: 'Secure', label: 'Payments' }
            ],
            featured: false,
            date: '2025-12',
            team: 'Solo',
            stars: 32,
            difficulty: 'Intermediate',
            gradient: 'from-green-600 via-emerald-600 to-teal-600'
        },
        {
            id: 3,
            title: 'AI-Powered Portfolio',
            description: 'Interactive portfolio website featuring AI/ML project showcases, GitHub contributions visualization, and dynamic content management.',
            fullDescription: 'Modern portfolio built with React and Vite, featuring smooth animations with Framer Motion, GitHub API integration for real-time contribution visualization, responsive design, and optimized performance with 95+ Lighthouse score.',
            tech: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'GitHub API'],
            category: 'Full Stack',
            github: 'https://github.com/omkarrathod23',
            live: '#',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
            metrics: [
                { value: '95+', label: 'Lighthouse' },
                { value: 'Modern', label: 'Design' },
                { value: 'Fast', label: 'Loading' }
            ],
            featured: true,
            date: '2026-02',
            team: 'Solo',
            stars: 28,
            difficulty: 'Intermediate',
            gradient: 'from-pink-600 via-purple-600 to-indigo-600'
        },
        {
            id: 4,
            title: 'Sentiment Analysis Dashboard',
            description: 'Real-time sentiment analysis tool using NLP and machine learning to analyze social media trends and customer feedback.',
            fullDescription: 'Machine learning-powered dashboard for analyzing sentiment in text data. Utilizes NLP libraries, implements custom ML models for emotion detection, provides real-time analytics, and features interactive data visualizations.',
            tech: ['Python', 'TensorFlow', 'React', 'D3.js', 'FastAPI', 'MongoDB'],
            category: 'AI/ML',
            github: 'https://github.com/omkarrathod23',
            live: '#',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
            metrics: [
                { value: '92%', label: 'Accuracy' },
                { value: '1M+', label: 'Records' },
                { value: 'Live', label: 'Analysis' }
            ],
            featured: false,
            date: '2025-11',
            team: '2 Members',
            stars: 67,
            difficulty: 'Advanced',
            gradient: 'from-orange-600 via-red-600 to-pink-600'
        }
    ];

    const filteredProjects = useMemo(() => {
        return projects.filter(project => {
            return activeCategory === 'All' || project.category === activeCategory;
        });
    }, [activeCategory]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 15
            }
        }
    };

    const difficultyColors = {
        'Beginner': 'bg-green-500/20 text-green-400 border-green-500/30',
        'Intermediate': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
        'Advanced': 'bg-red-500/20 text-red-400 border-red-500/30'
    };

    return (
        <section id="projects" className="py-16 md:py-24 relative overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
            >
                {/* Section Header */}
                <div className="text-center mb-12">
                    <motion.h2
                        className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        Featured Projects
                    </motion.h2>
                    <motion.p
                        className="text-secondary text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        A selection of my recent work in <span className="text-white font-medium">Full Stack Development</span> and <span className="text-white font-medium">AI Integration</span>.
                    </motion.p>
                </div>

                {/* Filters & View Toggle */}
                <div className="mb-10 flex flex-col md:flex-row items-center justify-center gap-6">
                    {/* Categories */}
                    <motion.div
                        className="flex flex-wrap justify-center gap-2"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        {categories.map((category) => {
                            const isActive = activeCategory === category;
                            return (
                                <button
                                    key={category}
                                    onClick={() => setActiveCategory(category)}
                                    className={`relative px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${isActive
                                            ? 'bg-white text-black shadow-lg shadow-white/10'
                                            : 'bg-white/5 text-secondary hover:bg-white/10 hover:text-white border border-white/5'
                                        }`}
                                >
                                    {category}
                                </button>
                            );
                        })}
                    </motion.div>

                    {/* View Toggle */}
                    <motion.div
                        className="flex items-center gap-1 bg-white/5 rounded-lg p-1 border border-white/10"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                    >
                        <button
                            onClick={() => setViewMode('grid')}
                            className={`p-2 rounded-md transition-all duration-200 ${viewMode === 'grid'
                                ? 'bg-white/10 text-white shadow-sm'
                                : 'text-secondary hover:text-white hover:bg-white/5'
                                }`}
                            aria-label="Grid view"
                        >
                            <Grid3x3 size={18} />
                        </button>
                        <button
                            onClick={() => setViewMode('list')}
                            className={`p-2 rounded-md transition-all duration-200 ${viewMode === 'list'
                                ? 'bg-white/10 text-white shadow-sm'
                                : 'text-secondary hover:text-white hover:bg-white/5'
                                }`}
                            aria-label="List view"
                        >
                            <List size={18} />
                        </button>
                    </motion.div>
                </div>

                {/* Active Filter Display (if not 'All') */}
                <AnimatePresence>
                    {activeCategory !== 'All' && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="flex justify-center mb-8"
                        >
                            <div className="flex items-center gap-2 text-xs bg-white/5 border border-white/10 rounded-full px-4 py-1.5">
                                <Filter size={12} className="text-purple-400" />
                                <span className="text-secondary">
                                    Showing <span className="text-white font-medium">{filteredProjects.length}</span> {activeCategory} projects
                                </span>
                                <button
                                    onClick={() => setActiveCategory('All')}
                                    className="ml-2 text-purple-400 hover:text-white transition-colors"
                                >
                                    <X size={12} />
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Projects Grid/List */}
                <AnimatePresence mode="wait">
                    {filteredProjects.length > 0 ? (
                        <motion.div
                            key={viewMode + activeCategory}
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            className={
                                viewMode === 'grid'
                                    ? 'grid grid-cols-1 md:grid-cols-2 gap-6'
                                    : 'flex flex-col gap-4 max-w-3xl mx-auto'
                            }
                        >
                            {filteredProjects.map((project) => (
                                <motion.div
                                    key={project.id}
                                    variants={itemVariants}
                                    layout
                                    onClick={() => setSelectedProject(project)}
                                    className="cursor-pointer"
                                >
                                    <ProjectCard
                                        {...project}
                                        viewMode={viewMode}
                                        onViewDetails={() => setSelectedProject(project)}
                                        difficultyColors={difficultyColors}
                                        categoryColors={categoryColors}
                                    />
                                </motion.div>
                            ))}
                        </motion.div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="text-center py-20"
                        >
                            <p className="text-secondary text-lg">No projects found in this category.</p>
                            <button
                                onClick={() => setActiveCategory('All')}
                                className="mt-4 px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg font-medium transition-all"
                            >
                                View All Projects
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Project Stats - Compact */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16 border-t border-white/5 pt-8"
                >
                    {[
                        { label: 'Projects', value: projects.length },
                        { label: 'Tech Stack', value: new Set(projects.flatMap(p => p.tech)).size },
                        { label: 'Stars', value: projects.reduce((sum, p) => sum + p.stars, 0) },
                    ].map((stat, idx) => (
                        <div key={idx} className="text-center">
                            <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                            <div className="text-[10px] text-secondary uppercase tracking-widest">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>
            </motion.div>

            {/* Project Detail Modal */}
            <ProjectModal
                project={selectedProject}
                isOpen={!!selectedProject}
                onClose={() => setSelectedProject(null)}
                difficultyColors={difficultyColors}
                categoryColors={categoryColors}
            />
        </section>
    );
};

export default Projects;
