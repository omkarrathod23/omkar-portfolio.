import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Briefcase } from 'lucide-react';

const WorkItem = ({ index, title, company, role, date, location }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-t border-accent-primary/5 first:border-0">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-6 flex items-center justify-between group text-left"
            >
                <div className="flex items-center gap-6">
                    <div className="w-10 h-10 rounded-full bg-bg-secondary flex items-center justify-center border border-accent-primary/5 group-hover:border-accent-primary/20 transition-all">
                        <Briefcase size={16} className="text-secondary" />
                    </div>
                    <div>
                        <h4 className="text-base font-semibold group-hover:text-accent-primary transition-colors">{company}</h4>
                        <p className="text-secondary text-sm">{role}</p>
                    </div>
                </div>

                <div className="flex items-center gap-6">
                    <div className="text-right hidden sm:block">
                        <p className="text-sm font-medium">{date}</p>
                        <p className="text-secondary text-xs">{location}</p>
                    </div>
                    <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        className="text-secondary group-hover:text-accent-primary transition-colors"
                    >
                        <ChevronDown size={20} />
                    </motion.div>
                </div>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <div className="pb-8 pl-16 pr-12 text-secondary text-sm leading-relaxed max-w-xl">
                            Architected and maintained high-performance microservices. Improved system latency by 30% through caching and query optimization. Led the migration of legacy systems to modern Spring Boot architecture.
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const Experience = () => {
    const work = [
        {
            company: 'Black Knights',
            role: 'Supreme Commander (Zero)',
            date: '2017 - 2018 a.t.b.',
            location: 'Japan / Global',
            details: 'Leading revolutionary strategies and tactical genius operations.'
        },
        {
            company: 'Holy Britannian Empire',
            role: '99th Emperor',
            date: '2018 a.t.b.',
            location: 'Pendragon',
            details: 'Wielder of the Power of Absolute Obedience.'
        },
        {
            company: 'Ashford Academy',
            role: 'Student Council VP',
            date: '2017 a.t.b.',
            location: 'Area 11',
            details: 'Managing student affairs and coordinating club activities.'
        }
    ];

    return (
        <section id="experience" className="container py-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="card-glass flex flex-col gap-2"
            >
                <div className="flex items-center gap-2 mb-4">
                    <h2 className="text-lg font-semibold">Where I've <span className="text-secondary">worked</span></h2>
                </div>

                <div className="flex flex-col">
                    {work.map((item, index) => (
                        <WorkItem key={index} index={index} {...item} />
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Experience;

