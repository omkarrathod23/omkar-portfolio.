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
            description: 'A comprehensive platform for automated vendor billing and payment reconciliation with role-based dashboards for admin, finance managers, and vendors.',
            fullDescription: 'Enterprise-grade reconciliation platform built with Spring Boot and React. Features include automated invoice matching, real-time payment tracking, role-based access control (RBAC), comprehensive audit trails, and advanced reporting dashboards. Implements JWT authentication, PostgreSQL database with optimized queries, and RESTful API design patterns.',
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
            description: 'Modern e-commerce solution with product management, shopping cart, user authentication, and integrated payment processing.',
            fullDescription: 'Full-featured e-commerce platform with advanced product catalog, shopping cart with session persistence, secure payment gateway integration, order management system, and admin dashboard. Built with microservices architecture for scalability.',
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
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
                <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative z-10"
            >
                {/* Section Header with Gradient */}
                <div className="mb-10 md:mb-14">
                    <motion.div
                        className="flex items-center gap-3 mb-4"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <motion.div
                            className="w-16 h-[3px] bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-full"
                            animate={{
                                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: 'linear'
                            }}
                            style={{ backgroundSize: '200% 100%' }}
                        />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 text-sm font-black uppercase tracking-[0.2em]">
                            Portfolio
                        </span>
                        <Sparkles className="text-purple-400 animate-pulse" size={18} />
                    </motion.div>

                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                        <div>
                            <motion.h2
                                className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-pink-200 mb-4 leading-tight"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                            >
                                Featured Projects
                            </motion.h2>
                            <motion.p
                                className="text-secondary text-base md:text-lg max-w-2xl leading-relaxed"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                            >
                                Explore my latest work showcasing <span className="text-purple-400 font-semibold">full-stack development</span>,{' '}
                                <span className="text-pink-400 font-semibold">AI/ML integration</span>, and{' '}
                                <span className="text-orange-400 font-semibold">modern technologies</span>
                            </motion.p>
                        </div>

                        {/* View Toggle with Glassmorphism */}
                        <motion.div
                            className="flex items-center gap-2 bg-white/5 backdrop-blur-xl rounded-xl p-1.5 border border-white/10 shadow-lg"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                        >
                            <button
                                onClick={() => setViewMode('grid')}
                                className={`p-2.5 rounded-lg transition-all duration-300 ${viewMode === 'grid'
                                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/50'
                                    : 'text-secondary hover:text-white hover:bg-white/5'
                                    }`}
                                aria-label="Grid view"
                            >
                                <Grid3x3 size={18} />
                            </button>
                            <button
                                onClick={() => setViewMode('list')}
                                className={`p-2.5 rounded-lg transition-all duration-300 ${viewMode === 'list'
                                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/50'
                                    : 'text-secondary hover:text-white hover:bg-white/5'
                                    }`}
                                aria-label="List view"
                            >
                                <List size={18} />
                            </button>
                        </motion.div>
                    </div>
                </div>

                {/* Search and Filters */}
                <div className="mb-10 space-y-5">
                    {/* Search Bar with Glow Effect */}
                    <motion.div
                        className="relative group"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                    >
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-500" />
                        <div className="relative flex items-center">
                            <Search className="absolute left-5 text-purple-400 z-10" size={20} />
                            <input
                                type="text"
                                placeholder="Search projects by name, description, or technology..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-14 pr-12 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl text-white placeholder:text-secondary/50 focus:outline-none focus:border-purple-500/50 focus:bg-white/[0.08] transition-all relative"
                            />
                            {searchQuery && (
                                <motion.button
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    exit={{ scale: 0 }}
                                    onClick={() => setSearchQuery('')}
                                    className="absolute right-4 p-1.5 bg-white/10 hover:bg-white/20 rounded-lg text-secondary hover:text-white transition-all z-10"
                                >
                                    <X size={16} />
                                </motion.button>
                            )}
                        </div>
                    </motion.div>

                    {/* Category Filters with Gradients */}
                    <motion.div
                        className="flex flex-wrap gap-3"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                    >
                        {categories.map((category, index) => {
                            const colors = categoryColors[category];
                            const isActive = activeCategory === category;

                            return (
                                <motion.button
                                    key={category}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.6 + index * 0.05 }}
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setActiveCategory(category)}
                                    className={`relative px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${isActive
                                        ? `bg-gradient-to-r ${colors.bg} ${colors.text} border ${colors.border} shadow-lg ${colors.glow}`
                                        : 'bg-white/5 text-secondary hover:bg-white/10 hover:text-white border border-white/10 backdrop-blur-sm'
                                        }`}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeCategory"
                                            className={`absolute inset-0 bg-gradient-to-r ${colors.bg} rounded-xl border ${colors.border}`}
                                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                        />
                                    )}
                                    <span className="relative z-10 flex items-center gap-2">
                                        {category}
                                        {category === 'All' && (
                                            <span className="text-[10px] opacity-70">({projects.length})</span>
                                        )}
                                    </span>
                                </motion.button>
                            );
                        })}
                    </motion.div>

                    {/* Active Filters Display */}
                    <AnimatePresence>
                        {(searchQuery || activeCategory !== 'All') && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="flex items-center gap-3 text-sm bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-3"
                            >
                                <Filter size={16} className="text-purple-400" />
                                <span className="text-secondary">
                                    Showing <span className="text-white font-semibold">{filteredProjects.length}</span> of <span className="text-white font-semibold">{projects.length}</span> projects
                                </span>
                                <button
                                    onClick={() => {
                                        setSearchQuery('');
                                        setActiveCategory('All');
                                    }}
                                    className="ml-auto text-purple-400 hover:text-purple-300 font-medium hover:underline transition-colors flex items-center gap-1"
                                >
                                    <X size={14} />
                                    Clear all
                                </button>
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
                                    ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'
                                    : 'flex flex-col gap-5'
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
                            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center border border-purple-500/30">
                                <Search className="text-purple-400" size={36} />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-3">No projects found</h3>
                            <p className="text-secondary mb-6 max-w-md mx-auto">
                                Try adjusting your filters or search query to discover more projects
                            </p>
                            <button
                                onClick={() => {
                                    setSearchQuery('');
                                    setActiveCategory('All');
                                }}
                                className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-xl font-semibold transition-all shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50"
                            >
                                Clear filters
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Project Stats with Animated Counters */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-5"
                >
                    {[
                        { label: 'Total Projects', value: projects.length, icon: Sparkles, gradient: 'from-purple-500 to-pink-500' },
                        { label: 'Technologies', value: new Set(projects.flatMap(p => p.tech)).size, icon: Zap, gradient: 'from-blue-500 to-cyan-500' },
                        { label: 'GitHub Stars', value: projects.reduce((sum, p) => sum + p.stars, 0), icon: TrendingUp, gradient: 'from-orange-500 to-red-500' },
                        { label: 'Categories', value: categories.length - 1, icon: Filter, gradient: 'from-green-500 to-emerald-500' }
                    ].map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 + idx * 0.1 }}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="relative group"
                        >
                            <div className={`absolute -inset-0.5 bg-gradient-to-r ${stat.gradient} rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-500`} />
                            <div className="relative p-6 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 text-center hover:bg-white/[0.08] transition-all">
                                <stat.icon className={`mx-auto mb-3 text-transparent bg-clip-text bg-gradient-to-r ${stat.gradient}`} size={28} strokeWidth={2.5} />
                                <motion.div
                                    className={`text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r ${stat.gradient} mb-1`}
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.5 + idx * 0.1 }}
                                >
                                    {stat.value}
                                </motion.div>
                                <div className="text-xs text-secondary uppercase tracking-[0.15em] font-bold">{stat.label}</div>
                            </div>
                        </motion.div>
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
