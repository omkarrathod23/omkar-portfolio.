import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const work = [
    {
        company: 'Techligence Robotics',
        role: 'Software Developer (AI) Intern',
        period: 'Jan 2025 – Present',
        location: 'Remote',
        type: 'Internship',
        description:
            'Building intelligent automation systems and integrating AI models into production web applications. Designing full-stack solutions with interactive dashboards, real-time data pipelines, and scalable microservice backends.',
        tech: ['Python', 'TensorFlow', 'React', 'FastAPI', 'Docker'],
        accent: '#6366f1',
    },
];

const ExperienceCard = ({ item, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
        className="exp-card relative"
        data-robot-msg={`Internship at ${item.company}`}
    >
        {/* Left accent bar */}
        <div
            className="absolute left-0 top-0 bottom-0 w-[3px] rounded-full"
            style={{ background: `linear-gradient(to bottom, ${item.accent}, ${item.accent}33)` }}
        />

        <div className="pl-7 pr-6 py-6">
            {/* Top row */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                <div>
                    <h3 className="exp-role text-lg font-bold tracking-tight mb-1">
                        {item.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                        <span className="exp-company text-sm font-semibold">{item.company}</span>
                        <span className="exp-meta flex items-center gap-1 text-xs">
                            <MapPin size={11} />{item.location}
                        </span>
                    </div>
                </div>

                <div className="flex flex-col items-start sm:items-end gap-2 flex-shrink-0">
                    <span
                        className="text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full border"
                        style={{ color: item.accent, borderColor: `${item.accent}40`, background: `${item.accent}14` }}
                    >
                        {item.type}
                    </span>
                    <span className="exp-date flex items-center gap-1.5 text-xs font-medium">
                        <Calendar size={11} />{item.period}
                    </span>
                </div>
            </div>

            {/* Description */}
            <p className="exp-description text-sm leading-relaxed mb-5">
                {item.description}
            </p>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-2">
                {item.tech.map((t, i) => (
                    <span
                        key={i}
                        data-robot-msg={`Used ${t}`}
                        className="exp-tech-tag text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-lg"
                    >
                        {t}
                    </span>
                ))}
            </div>
        </div>
    </motion.div>
);

const Experience = () => (
    <section id="experience" className="py-10 flex justify-center">
        <div className="w-full max-w-3xl mx-auto px-4">

            <motion.div
                className="flex items-center justify-center gap-2.5 mb-10"
                initial={{ opacity: 0, y: -8 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                data-robot-msg="My professional journey"
            >
                <Briefcase size={15} className="section-icon" />
                <span className="text-xs font-bold tracking-[0.25em] uppercase section-label">
                    Experience
                </span>
            </motion.div>

            <div className="space-y-5">
                {work.map((item, i) => (
                    <ExperienceCard key={i} item={item} index={i} />
                ))}
            </div>
        </div>
    </section>
);

export default Experience;
