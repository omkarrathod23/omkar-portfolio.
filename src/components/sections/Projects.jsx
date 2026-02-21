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
            title: 'AI-Powered Multi-Tenant SaaS Platform',
            description: 'Enterprise-grade vendor billing and payment reconciliation platform with JWT-secured APIs and automated invoice-to-payment matching.',
            fullDescription: 'Built an enterprise-grade vendor billing and payment reconciliation platform with JWT-secured APIs, automated invoice-to-payment matching, and dispute workflows to reduce manual accounting effort and improve reconciliation accuracy.',
            tech: ['Java', 'Spring Boot', 'React', 'TypeScript', 'PostgreSQL'],
            category: 'Full Stack',
            github: 'https://github.com/omkarrathod23',
            live: '#',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
            metrics: [
                { value: '100%', label: 'Accuracy' },
                { value: 'Multi-tenant', label: 'Architecture' },
                { value: 'Automated', label: 'Workflows' }
            ],
            featured: true,
            date: '2026-02',
            team: 'Solo',
            stars: 45,
            difficulty: 'Advanced',
            gradient: 'from-blue-600 via-cyan-600 to-teal-600'
        },
        {
            id: 2,
            title: 'SmartReconcil – Vendor Billing Platform',
            description: 'Scalable billing and reconciliation system with FIFO and exact-match engines, secure REST APIs, and automated workflows.',
            fullDescription: 'Developed a scalable billing and reconciliation system with FIFO and exact-match engines, secure REST APIs, and automated workflows for streamlined vendor payment processing.',
            tech: ['Java', 'Spring Boot', 'Next.js', 'PostgreSQL'],
            category: 'Full Stack',
            github: 'https://github.com/omkarrathod23',
            live: '#',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
            metrics: [
                { value: 'FIFO', label: 'Engine' },
                { value: 'Secure', label: 'REST APIs' },
                { value: 'Scalable', label: 'System' }
            ],
            featured: false,
            date: '2026-01',
            team: 'Solo',
            stars: 38,
            difficulty: 'Advanced',
            gradient: 'from-blue-500 via-indigo-500 to-violet-500'
        },
        {
            id: 3,
            title: 'Shofy – E-Commerce Web Application',
            description: 'Production-ready e-commerce platform with product listing, filtering, cart, authentication, and cloud deployment.',
            fullDescription: 'Built a production-ready e-commerce platform with product listing, filtering, cart, authentication, REST API integration, and cloud deployment.',
            tech: ['Next.js', 'React', 'Node.js', 'Express', 'MongoDB'],
            category: 'Full Stack',
            github: 'https://github.com/omkarrathod23',
            live: '#',
            image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
            metrics: [
                { value: 'Full', label: 'Features' },
                { value: 'Cloud', label: 'Native' },
                { value: 'Secure', label: 'Auth' }
            ],
            featured: false,
            date: '2025-12',
            team: 'Solo',
            stars: 32,
            difficulty: 'Intermediate',
            gradient: 'from-green-600 via-emerald-600 to-teal-600'
        },
        {
            id: 4,
            title: 'Customer Churn Prediction System',
            description: 'XGBoost-based churn prediction model achieving 66.49% accuracy with interactive real-time prediction dashboard.',
            fullDescription: 'Created an XGBoost-based churn prediction model achieving 66.49% accuracy with feature engineering, data preprocessing, and an interactive real-time prediction dashboard.',
            tech: ['Python', 'XGBoost', 'Streamlit', 'ML'],
            category: 'AI/ML',
            github: 'https://github.com/omkarrathod23',
            live: '#',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
            metrics: [
                { value: '66.49%', label: 'Accuracy' },
                { value: 'Real-time', label: 'Insights' },
                { value: 'Interactive', label: 'Dashboard' }
            ],
            featured: true,
            date: '2025-11',
            team: 'Solo',
            stars: 42,
            difficulty: 'Advanced',
            gradient: 'from-orange-500 via-red-500 to-pink-500'
        },
        {
            id: 5,
            title: 'IMDb Sentiment Analysis Web App',
            description: 'LSTM-based NLP model to classify IMDb reviews, including text preprocessing and SHAP-based interpretability.',
            fullDescription: 'Implemented an LSTM-based NLP model to classify IMDb reviews, including text preprocessing, SHAP-based interpretability, and a Flask-based web interface.',
            tech: ['Deep Learning', 'LSTM', 'TensorFlow', 'Flask'],
            category: 'AI/ML',
            github: 'https://github.com/omkarrathod23',
            live: '#',
            image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80',
            metrics: [
                { value: 'NLP', label: 'Model' },
                { value: 'SHAP', label: 'Analysis' },
                { value: 'Flask', label: 'Interface' }
            ],
            featured: false,
            date: '2025-10',
            team: 'Solo',
            stars: 35,
            difficulty: 'Intermediate',
            gradient: 'from-purple-600 via-fuchsia-600 to-pink-600'
        },
        {
            id: 6,
            title: 'Police Crime Prediction System',
            description: 'Crime prediction and station management system using historical and geospatial data with hotspot visualization.',
            fullDescription: 'Designed a crime prediction and station management system using historical and geospatial data, featuring hotspot visualization dashboards and automated FIR workflows.',
            tech: ['Python', 'FastAPI', 'Firebase', 'GIS'],
            category: 'AI/ML',
            github: 'https://github.com/omkarrathod23',
            live: '#',
            image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
            metrics: [
                { value: 'Geospatial', label: 'Data' },
                { value: 'Hotspot', label: 'Viz' },
                { value: 'Automated', label: 'Flows' }
            ],
            featured: false,
            date: '2025-09',
            team: 'Solo',
            stars: 29,
            difficulty: 'Advanced',
            gradient: 'from-cyan-600 via-blue-600 to-indigo-600'
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
                        className="text-neutral-700 dark:text-neutral-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        A selection of my recent work in{" "}
                        <span className="font-semibold text-neutral-900 dark:text-white">
                            Full Stack Development
                        </span>{" "}
                        and{" "}
                        <span className="font-semibold text-neutral-900 dark:text-white">
                            AI Integration
                        </span>.
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
                                    ? 'grid grid-cols-1 lg:grid-cols-2 gap-8'
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
                                    data-robot-msg={`Click to see ${project.title}`}
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
        </section >
    );
};

export default Projects;
