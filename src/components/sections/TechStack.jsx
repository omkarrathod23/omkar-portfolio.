import React from 'react';
import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';

const skills = [
    { name: 'React', logo: 'https://cdn.simpleicons.org/react' },
    { name: 'Next.js', logo: 'https://cdn.simpleicons.org/nextdotjs' },
    { name: 'TypeScript', logo: 'https://cdn.simpleicons.org/typescript' },
    { name: 'Tailwind CSS', logo: 'https://cdn.simpleicons.org/tailwindcss' },
    { name: 'JavaScript', logo: 'https://cdn.simpleicons.org/javascript' },
    { name: 'Java', logo: 'https://cdn.simpleicons.org/openjdk' },
    { name: 'Spring Boot', logo: 'https://cdn.simpleicons.org/springboot' },
    { name: 'Python', logo: 'https://cdn.simpleicons.org/python' },
    { name: 'PostgreSQL', logo: 'https://cdn.simpleicons.org/postgresql' },
    { name: 'MongoDB', logo: 'https://cdn.simpleicons.org/mongodb' },
    { name: 'Docker', logo: 'https://cdn.simpleicons.org/docker' },
    { name: 'AWS', logo: 'https://cdn.simpleicons.org/amazonaws' },
];

const SkillCard = ({ skill, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ y: -4 }}
            className="flex flex-col items-center gap-4 p-6 md:p-8 bg-bg-secondary hover:bg-accent-primary/5 border border-accent-primary/10 hover:border-accent-primary/20 rounded-2xl transition-all"
        >
            <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-xl bg-accent-primary/10 border border-accent-primary/20">
                <img
                    src={skill.logo}
                    alt={skill.name}
                    className="w-8 h-8 md:w-10 md:h-10"
                />
            </div>

            <span className="text-sm md:text-base font-bold text-accent-primary">
                {skill.name}
            </span>
        </motion.div>
    );
};

const TechStack = () => {
    return (
        <section id="skills" className="py-16 md:py-24">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <div className="mb-10 md:mb-14">
                    <motion.div
                        className="flex items-center gap-3 mb-4"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-accent-primary text-sm font-black uppercase tracking-[0.2em]">
                            Tech Stack
                        </span>
                        <Code2 className="text-accent-primary" size={18} />
                    </motion.div>

                    <motion.h2
                        className="text-4xl md:text-5xl font-black text-accent-primary mb-4 leading-tight"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        Technologies I Master
                    </motion.h2>
                    <motion.p
                        className="text-secondary text-base md:text-lg max-w-2xl leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        Building with modern frameworks, robust backends, and scalable infrastructure
                    </motion.p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5 md:gap-6">
                    {skills.map((skill, index) => (
                        <SkillCard key={skill.name} skill={skill} index={index} />
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default TechStack;
