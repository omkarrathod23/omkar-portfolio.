import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const courses = [
    'Data Structures', 'Machine Learning', 'Deep Learning',
    'DBMS', 'Operating Systems', 'System Design',
];

const Education = () => (
    <section id="education" className="py-10 flex justify-center">
        <div className="w-full max-w-3xl mx-auto px-4">

            <motion.div
                className="flex items-center justify-center gap-2.5 mb-10"
                initial={{ opacity: 0, y: -8 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                data-robot-msg="My academic background"
            >
                <GraduationCap size={15} className="section-icon" />
                <span className="text-xs font-bold tracking-[0.25em] uppercase section-label">
                    Education
                </span>
            </motion.div>

            <motion.div
                className="edu-card relative overflow-hidden"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: 'easeOut' }}
                viewport={{ once: true, margin: '-60px' }}
                data-robot-msg="Pursuing B.E. in AI & ML"
            >
                {/* Gradient top accent bar */}
                <div className="edu-top-bar absolute top-0 left-0 right-0 h-[3px]" />

                {/* Decorative glow */}
                <div
                    className="absolute -top-10 -right-10 w-52 h-52 rounded-full pointer-events-none blur-3xl"
                    style={{ background: 'radial-gradient(circle, #6366f155, transparent)' }}
                />

                <div className="relative p-7">
                    {/* Top row */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                        <div>
                            <h3 className="edu-degree text-xl font-bold tracking-tight mb-1">
                                Bachelor of Engineering
                            </h3>
                            <p className="edu-specialization text-sm font-semibold">
                                Computer Science &amp; Engineering — AI/ML
                            </p>
                            <div className="flex items-center gap-1.5 edu-university text-xs mt-2">
                                <MapPin size={11} />
                                University of Mumbai
                            </div>
                        </div>

                        <div className="flex flex-col items-start sm:items-end gap-2 flex-shrink-0">
                            <span className="edu-period-badge flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full">
                                <Calendar size={11} />
                                2022 – 2026
                            </span>
                            <span className="edu-cgpa-badge flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full">
                                <Award size={11} />
                                CGPA: 7.9 / 10
                            </span>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="edu-divider mb-5" />

                    {/* Coursework */}
                    <div>
                        <p className="edu-meta text-[10px] font-bold tracking-widest uppercase mb-3">
                            Relevant Coursework
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {courses.map((c, i) => (
                                <span
                                    key={i}
                                    data-robot-msg={`Studied ${c}`}
                                    className="edu-tag text-[10px] font-semibold uppercase tracking-wider px-3 py-1.5 rounded-lg"
                                >
                                    {c}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    </section>
);

export default Education;
