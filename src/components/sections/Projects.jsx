import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Grid3x3, List, Filter, X, Sparkles, TrendingUp, Zap } from 'lucide-react';
import ProjectCard from '../ui/ProjectCard';
import ProjectModal from '../ui/ProjectModal';

const Projects = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [viewMode, setViewMode] = useState('grid');
    const [selectedProject, setSelectedProject] = useState(null);

    // Color schemes for categories
    const categoryColors = {
        'All': { bg: 'from-purple-500/20 to-pink-500/20', border: 'border-purple-500/30', text: 'text-purple-400', glow: 'shadow-purple-500/50' },
        'Full Stack': { bg: 'from-blue-500/20 to-cyan-500/20', border: 'border-blue-500/30', text: 'text-blue-400', glow: 'shadow-blue-500/50' },
        'Web App': { bg: 'from-green-500/20 to-emerald-500/20', border: 'border-green-500/30', text: 'text-green-400', glow: 'shadow-green-500/50' },
        'AI/ML': { bg: 'from-orange-500/20 to-red-500/20', border: 'border-orange-500/30', text: 'text-orange-400', glow: 'shadow-orange-500/50' },
        'Portfolio': { bg: 'from-pink-500/20 to-rose-500/20', border: 'border-pink-500/30', text: 'text-pink-400', glow: 'shadow-pink-500/50' },
        'Mobile': { bg: 'from-indigo-500/20 to-purple-500/20', border: 'border-indigo-500/30', text: 'text-indigo-400', glow: 'shadow-indigo-500/50' }
    };

    const categories = ['All', 'Full Stack', 'Web App', 'AI/ML', 'Portfolio', 'Mobile'];

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
            category: 'Web App',
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
            category: 'Portfolio',
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
            const matchesCategory = activeCategory === 'All' || project.category === activeCategory;
            const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                project.tech.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
            return matchesCategory && matchesSearch;
        });
    }, [activeCategory, searchQuery]);

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

                {/* Search and Filters */}
                <div className="mb-10 space-y-6">
                    {/* Search Bar */}
                    <motion.div
                        className="relative max-w-md mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        <div className="relative flex items-center">
                            <Search className="absolute left-4 text-secondary z-10" size={18} />
                            <input
                                type="text"
                                placeholder="Search projects..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-10 py-3 bg-white/5 border border-white/10 rounded-full text-white placeholder:text-secondary/50 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all font-light text-sm"
                            />
                            {searchQuery && (
                                <button
                                    onClick={() => setSearchQuery('')}
                                    className="absolute right-3 p-1.5 text-secondary hover:text-white transition-all z-10"
                                >
                                    <X size={14} />
                                </button>
                            )}
                        </div>
                    </motion.div>

                    {/* Controls Row: Filters & View Toggle */}
                    <motion.div
                        className="flex flex-col md:flex-row items-center justify-center gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                    >
                        {/* Categories */}
                        <div className="flex flex-wrap justify-center gap-2">
                            {categories.map((category) => {
                                const isActive = activeCategory === category;
                                return (
                                    <button
                                        key={category}
                                        onClick={() => setActiveCategory(category)}
                                        className={`relative px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 border ${isActive
                                            ? 'bg-white text-black border-white'
                                            : 'bg-transparent text-secondary border-white/10 hover:border-white/30 hover:text-white'
                                            }`}
                                    >
                                        {category}
                                    </button>
                                );
                            })}
                        </div>

                        {/* View Toggle */}
                        <div className="flex items-center gap-1 bg-white/5 rounded-lg p-1 border border-white/10 ml-0 md:ml-4">
                            <button
                                onClick={() => setViewMode('grid')}
                                className={`p-1.5 rounded-md transition-all duration-200 ${viewMode === 'grid'
                                    ? 'bg-white/10 text-white shadow-sm'
                                    : 'text-secondary hover:text-white hover:bg-white/5'
                                    }`}
                                aria-label="Grid view"
                            >
                                <Grid3x3 size={16} />
                            </button>
                            <button
                                onClick={() => setViewMode('list')}
                                className={`p-1.5 rounded-md transition-all duration-200 ${viewMode === 'list'
                                    ? 'bg-white/10 text-white shadow-sm'
                                    : 'text-secondary hover:text-white hover:bg-white/5'
                                    }`}
                                aria-label="List view"
                            >
                                <List size={16} />
                            </button>
                        </div>
                    </motion.div>

                    {/* Active Filters Display */}
                    <AnimatePresence>
                        {(searchQuery || activeCategory !== 'All') && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="flex justify-center"
                            >
                                <div className="flex items-center gap-3 text-xs bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-4 py-2">
                                    <Filter size={14} className="text-purple-400" />
                                    <span className="text-secondary">
                                        Found <span className="text-white font-semibold">{filteredProjects.length}</span> projects
                                    </span>
                                    <button
                                        onClick={() => {
                                            setSearchQuery('');
                                            setActiveCategory('All');
                                        }}
                                        className="ml-2 text-purple-400 hover:text-purple-300 font-medium hover:underline transition-colors flex items-center gap-1"
                                    >
                                        <X size={12} />
                                        Clear
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Projects Grid/List */}
                <AnimatePresence mode="wait">
                    {filteredProjects.length > 0 ? (
                        <motion.div
                            key={viewMode + activeCategory + searchQuery}
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
                            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center border border-purple-500/30">
                                <Search className="text-purple-400" size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">No projects found</h3>
                            <button
                                onClick={() => {
                                    setSearchQuery('');
                                    setActiveCategory('All');
                                }}
                                className="px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg font-medium transition-all"
                            >
                                Clear filters
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
