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
        <section id="skills" className="py-12 md:py-16">
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
                        <Code2 className="text-accent-primary" size={20} />
                        <span className="text-accent-primary text-sm font-bold uppercase tracking-widest">
                            Tech Stack
                        </span>
                    </motion.div>

                    <motion.h2
                        className="text-2xl md:text-3xl font-bold text-accent-primary mb-3 tracking-tight"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Technologies I Master
                    </motion.h2>
                    <motion.p
                        className="text-secondary text-sm md:text-base max-w-lg mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        Building with modern frameworks, robust backends, and scalable infrastructure.
                    </motion.p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-5 justify-center">
                    {skills.map((skill, index) => (
                        <SkillCard key={skill.name} skill={skill} index={index} />
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default TechStack;
