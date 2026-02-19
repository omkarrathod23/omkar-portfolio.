import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Building2, ArrowRight, Download } from 'lucide-react';

const Experience = () => {
    const work = [
        {
            company: 'Techligence Robotics',
            role: 'Software Developer (AI) Intern',
            date: 'Present',
            location: 'Remote',
            description: [
                'Contributing to the development of intelligent web platforms and AI-driven systems used in robotics applications.',
                'Designing and building full-stack solutions, integrating AI logic, and developing interactive dashboards.',
                'Collaborating with engineers and designers to deliver scalable, efficient, and production-ready applications.',
                'Gaining hands-on exposure to industry-level robotics and automation projects while strengthening skills in AI integration and system architecture.'
            ],
            tech: ['AI Integration', 'Full Stack', 'Robotics', 'System Architecture', 'Web Technologies']
        }
    ];

    return (
        <section id="experience" className="py-12 md:py-16 relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-8 md:mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight"
                    >
                        Experience
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-secondary text-sm md:text-base max-w-lg mx-auto leading-relaxed"
                    >
                        My professional journey in <span className="text-white font-medium">AI</span> and <span className="text-white font-medium">Robotics</span>.
                    </motion.p>
                </div>

                {/* Compact Centered Card */}
                <div className="max-w-2xl mx-auto">
                    {work.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-white/5 border border-white/5 rounded-2xl p-6 md:p-8 hover:border-white/10 transition-colors"
                        >
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                                <div>
                                    <h3 className="text-lg md:text-xl font-bold text-white mb-1">
                                        {item.role}
                                    </h3>
                                    <div className="text-base text-purple-400 font-medium">
                                        {item.company}
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 text-xs md:text-sm text-secondary font-medium">
                                    <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-full border border-white/5">
                                        <Calendar size={12} /> {item.date}
                                    </span>
                                </div>
                            </div>

                            <ul className="space-y-3 mb-6">
                                {item.description.map((desc, i) => (
                                    <li key={i} className="flex items-start gap-3 text-secondary text-sm leading-relaxed">
                                        <span className="mt-1.5 w-1 h-1 rounded-full bg-white/30 flex-shrink-0" />
                                        {desc}
                                    </li>
                                ))}
                            </ul>

                            <div className="flex flex-wrap gap-2">
                                {item.tech.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="px-2.5 py-1 text-[11px] font-medium rounded-md bg-white/5 text-secondary border border-white/5"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="mt-8 text-center"
                    >
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2 text-sm font-medium text-secondary hover:text-white transition-colors"
                        >
                            <Download size={14} />
                            Download Resume
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
