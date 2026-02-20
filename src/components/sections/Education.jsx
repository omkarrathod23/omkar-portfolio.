import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
    return (
        <section id="education" className="py-8 flex justify-center">
            <div className="w-full max-w-3xl mx-auto px-4">

                {/* Minimal Header */}
                <div className="flex items-center justify-center gap-2 mb-12 opacity-80">
                    <GraduationCap className="text-white" size={18} />
                    <span className="text-sm font-bold tracking-[0.2em] text-white uppercase">
                        Education
                    </span>
                </div>

                {/* Content Container */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 p-6 border-l-2 border-white/10 hover:border-white/30 transition-colors pl-6"
                >
                    {/* Left: Degree Info */}
                    <div className="space-y-2">
                        <h3 className="text-2xl font-medium text-white tracking-tight">
                            Bachelor of Engineering
                        </h3>
                        <div className="text-secondary text-sm md:text-base font-light">
                            Computer Science & Engineering (AI/ML)
                        </div>
                        <div className="flex items-center gap-2 text-xs text-white/40 uppercase tracking-wider mt-1">
                            <MapPin size={12} />
                            <span>University of Mumbai</span>
                        </div>
                    </div>

                    {/* Right: Meta Info */}
                    <div className="flex flex-col items-start md:items-end gap-1">
                        <div className="flex items-center gap-2 text-white/80 font-medium bg-white/5 px-3 py-1 rounded-full text-sm">
                            <Calendar size={14} />
                            <span>2022 - 2026</span>
                        </div>
                        <div className="text-secondary text-sm font-light mt-2">
                            CGPA: <span className="text-white font-medium">7.9</span> / 10
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Education;
