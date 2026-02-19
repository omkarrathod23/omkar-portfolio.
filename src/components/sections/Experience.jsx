import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Building2, ArrowRight, Download } from 'lucide-react';

const Experience = () => {
    const work = [
        {
            company: 'Black Knights',
            role: 'Supreme Commander (Zero)',
            date: '2017 - 2018 a.t.b.',
            location: 'Japan / Global',
            description: [
                'Orchestrated global resistance movements against the Holy Britannian Empire.',
                'Developed advanced tactical strategies resulting in multiple high-profile victories.',
                'Managed a diverse coalition of forces, ensuring operational unity and morale.'
            ],
            tech: ['Strategy', 'Leadership', 'Tactics', 'Geass']
        },
        {
            company: 'Holy Britannian Empire',
            role: '99th Emperor',
            date: '2018 a.t.b.',
            location: 'Pendragon',
            description: [
                'Implemented world-unifying policies (Zero Requiem) to break the cycle of hatred.',
                'Consolidated political power to focus global animosity on a single point.',
                'Restructured imperial administration for efficiency and rapid deployment.'
            ],
            tech: ['Governance', 'Policy', 'Requiem', 'Diplomacy']
        },
        {
            company: 'Ashford Academy',
            role: 'Student Council VP',
            date: '2017 a.t.b.',
            location: 'Area 11',
            description: [
                'Managed student council activities and organized large-scale school events.',
                'Maintained academic excellence while balancing extracurricular leadership duties.',
                'Fostered a supportive community environment for student body.'
            ],
            tech: ['Management', 'Events', 'Coordination']
        }
    ];

    return (
        <section id="experience" className="py-20 md:py-32 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 relative z-10">

                {/* Section Header */}
                <div className="text-center mb-16 md:mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-primary/5 border border-accent-primary/10 mb-6"
                    >
                        <Briefcase size={16} className="text-accent-primary" />
                        <span className="text-sm font-semibold text-accent-primary uppercase tracking-wider">Career Path</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-black text-accent-primary tracking-tight mb-4"
                    >
                        Professional Experience
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-secondary max-w-2xl mx-auto leading-relaxed"
                    >
                        A timeline of my professional journey, building scalable software and leading engineering teams.
                    </motion.p>
                </div>

                {/* Timeline */}
                <div className="relative max-w-5xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-primary/5 via-accent-primary/20 to-accent-primary/5 md:-translate-x-1/2" />

                    <div className="space-y-12 md:space-y-20">
                        {work.map((item, index) => (
                            <TimelineItem key={index} data={item} index={index} />
                        ))}
                    </div>
                </div>

                {/* Resume Download CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20 text-center"
                >
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary inline-flex items-center gap-2 group"
                    >
                        <Download size={18} className="group-hover:-translate-y-1 transition-transform" />
                        Download Full Resume
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

const TimelineItem = ({ data, index }) => {
    const isEven = index % 2 === 0;

    return (
        <div className={`relative flex items-start md:items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>

            {/* Timeline Dot */}
            <div className="absolute left-[20px] md:left-1/2 w-4 h-4 rounded-full bg-bg-primary border-[3px] border-accent-primary z-20 md:-translate-x-1/2 translate-y-1.5 shadow-[0_0_0_4px_rgba(var(--accent-primary),0.2)]">
                <div className="absolute inset-0 rounded-full bg-accent-primary animate-ping opacity-20" />
            </div>

            {/* Spacer for Mobile (Left side of line) */}
            <div className="w-[60px] md:w-1/2 flex-shrink-0" />

            {/* Content Card */}
            <div className="flex-1 md:w-1/2 pt-1 md:pt-0 pl-0 md:px-12">
                <motion.div
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="relative group"
                >
                    <div className="card-glass p-6 md:p-8 hover:bg-bg-secondary/80 transition-all border border-accent-primary/5 hover:border-accent-primary/20">
                        {/* Date Tag */}
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-primary/5 text-xs font-semibold text-accent-primary border border-accent-primary/10 mb-4">
                            <Calendar size={12} />
                            {data.date}
                        </div>

                        {/* Title & Company */}
                        <h3 className="text-xl md:text-2xl font-bold text-accent-primary mb-1">
                            {data.role}
                        </h3>
                        <div className="flex items-center gap-2 text-secondary font-medium mb-4">
                            <Building2 size={16} />
                            <span>{data.company}</span>
                            <span className="w-1 h-1 rounded-full bg-secondary/50" />
                            <span className="flex items-center gap-1"><MapPin size={14} /> {data.location}</span>
                        </div>

                        {/* Description */}
                        <ul className="space-y-2 mb-6">
                            {data.description.map((desc, i) => (
                                <li key={i} className="flex items-start gap-2 text-secondary/90 text-sm leading-relaxed">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-primary/50 flex-shrink-0" />
                                    {desc}
                                </li>
                            ))}
                        </ul>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2">
                            {data.tech.map((tech, i) => (
                                <span
                                    key={i}
                                    className="px-2.5 py-1 text-xs font-medium rounded-md bg-accent-primary/5 text-accent-primary/80 border border-accent-primary/5"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Experience;
