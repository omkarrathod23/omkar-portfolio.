import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({ title, description, image, gradient, link, github }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col gap-4 group cursor-pointer"
    >
        <div className={`relative aspect-[4/3] rounded-2xl overflow-hidden p-8 flex items-center justify-center transition-all duration-500 group-hover:scale-[1.02] shadow-2xl ${gradient}`}>
            {/* Soft glow behind image */}
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="relative z-10 w-full h-full rounded-lg shadow-2xl overflow-hidden border border-white/10 group-hover:rotate-1 transition-transform duration-500">
                <img src={image} alt={title} className="w-full h-full object-cover" />
            </div>

            {/* Hover Actions */}
            <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
                <a href={link} className="p-3 bg-white text-black rounded-full hover:scale-110 transition-transform">
                    <ExternalLink size={20} />
                </a>
                <a href={github} className="p-3 bg-white text-black rounded-full hover:scale-110 transition-transform">
                    <Github size={20} />
                </a>
            </div>
        </div>

        <div className="flex flex-col gap-1">
            <h3 className="text-base font-semibold group-hover:text-accent-primary transition-colors">{title}</h3>
            <p className="text-secondary text-sm line-clamp-1">{description}</p>
        </div>
    </motion.div>
);

const Projects = () => {
    const projects = [
        {
            title: 'BetterShot',
            description: 'Capture beautiful screenshots effortlessly.',
            image: 'https://images.unsplash.com/photo-1618477388954-7852f32655ec?auto=format&fit=crop&q=80&w=800',
            gradient: 'bg-gradient-to-br from-orange-500 to-rose-600',
            link: '#',
            github: '#'
        },
        {
            title: 'OneURL',
            description: 'Your bio link, supercharged.',
            image: 'https://images.unsplash.com/photo-1614332287897-cdc485fa562d?auto=format&fit=crop&q=80&w=800',
            gradient: 'bg-gradient-to-br from-cyan-500 to-blue-600',
            link: '#',
            github: '#'
        },
        {
            title: 'Mind Mentor',
            description: 'AI-powered mental health companion.',
            image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800',
            gradient: 'bg-gradient-to-br from-emerald-500 to-teal-600',
            link: '#',
            github: '#'
        },
        {
            title: 'Nexus UI',
            description: 'Component library for modern web apps.',
            image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800',
            gradient: 'bg-gradient-to-br from-indigo-500 to-purple-600',
            link: '#',
            github: '#'
        }
    ];

    return (
        <section id="projects" className="container py-16 flex flex-col gap-8">
            <div className="card-glass flex flex-col gap-8">
                <div className="flex items-center gap-2">
                    <h2 className="text-lg font-semibold">Proof of <span className="text-secondary">Work</span></h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;

