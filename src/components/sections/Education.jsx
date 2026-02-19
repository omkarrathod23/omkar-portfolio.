import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award, MapPin } from 'lucide-react';

const Education = () => {
    return (
        <section id="education" className="py-12 md:py-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto px-4 sm:px-6"
            >
                <div className="text-center mb-10 md:mb-12">
                    <motion.div
                        className="flex items-center justify-center gap-2 mb-3"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <GraduationCap className="text-accent-primary" size={20} />
                        <span className="text-accent-primary text-sm font-bold uppercase tracking-widest">
                            Education
                        </span>
                    </motion.div>

                    <motion.h2
                        className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Academic Background
                    </motion.h2>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="relative p-6 md:p-8 bg-bg-secondary border border-accent-primary/5 rounded-2xl overflow-hidden"
                >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                        <div>
                            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                                Bachelor of Engineering (B.E.)
                            </h3>
                            <div className="text-lg text-accent-primary font-medium mb-1">
                                Computer Science and Engineering
                            </div>
                            <div className="text-sm md:text-base text-secondary/80 font-medium">
                                (Artificial Intelligence & Machine Learning)
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <span className="flex items-center gap-2 text-sm text-secondary bg-white/5 px-3 py-1.5 rounded-lg border border-white/5 w-fit">
                                <Calendar size={14} className="text-accent-primary" />
                                2022 - 2026
                            </span>
                            <span className="flex items-center gap-2 text-sm text-secondary bg-white/5 px-3 py-1.5 rounded-lg border border-white/5 w-fit">
                                <Award size={14} className="text-accent-primary" />
                                CGPA: 7.9/10
                            </span>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-secondary border-t border-white/5 pt-4 mt-4">
                        <MapPin size={14} className="text-accent-primary" />
                        <span className="font-medium text-white">University of Mumbai</span>
                        <span className="text-secondary/50">•</span>
                        <span>India</span>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Education;
