import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
    const work = [
        {
            company: 'Techligence Robotics',
            role: 'Software Developer (AI) Intern',
            date: 'Present',
            location: 'Remote',
            description: 'Building intelligent automation systems and integrating AI models into web applications. Designing full-stack solutions and interactive dashboards.',
            tech: ['Python', 'TensorFlow', 'React', 'FastAPI']
        }
    ];

    return (
        <section id="experience" className="py-8 flex justify-center">
            <div className="w-full max-w-3xl mx-auto px-4">

                {/* Minimal Header */}
                <div className="flex items-center justify-center gap-2 mb-12 opacity-80">
                    <Briefcase className="text-white" size={18} />
                    <span className="text-sm font-bold tracking-[0.2em] text-white uppercase">
                        Experience
                    </span>
                </div>

                {/* Content Container */}
                <div className="space-y-8">
                    {work.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex flex-col md:flex-row gap-4 md:gap-6 p-6 border-l-2 border-white/10 hover:border-white/30 transition-colors pl-6 group"
                        >
                            {/* Left: Role & Company */}
                            <div className="min-w-[200px]">
                                <h3 className="text-xl font-medium text-white tracking-tight group-hover:text-purple-400 transition-colors">
                                    {item.role}
                                </h3>
                                <div className="text-white/60 text-sm font-medium mt-1">
                                    {item.company}
                                </div>
                                <div className="flex items-center gap-2 text-xs text-secondary uppercase tracking-wider mt-3 opacity-80">
                                    <Calendar size={12} />
                                    <span>{item.date}</span>
                                </div>
                            </div>

                            {/* Right: Description & Tech */}
                            <div className="flex-1 pb-2">
                                <p className="text-secondary text-sm leading-relaxed mb-4">
                                    {item.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {item.tech.map((t, i) => (
                                        <span key={i} className="text-[10px] uppercase tracking-wider text-white/40 border border-white/10 px-2 py-1 rounded hover:text-white/80 transition-colors">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Experience;
