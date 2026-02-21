import React from 'react';
import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';

const skills = [
    { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
    { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'Tailwind CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'Spring Boot', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
    { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
];

const SkillPill = ({ skill }) => (
    <div
        data-robot-msg={`I know ${skill.name}`}
        className="skill-pill flex items-center gap-2.5 px-5 py-2.5 rounded-full min-w-max cursor-default select-none"
    >
        <div className="w-5 h-5 flex-shrink-0 flex items-center justify-center">
            <img
                src={skill.logo}
                alt={skill.name}
                className="w-full h-full object-contain"
            />
        </div>
        <span className="skill-pill-text text-xs font-semibold tracking-wide whitespace-nowrap">
            {skill.name}
        </span>
    </div>
);

const TechStack = () => {
    return (
        <section id="skills" className="py-10 flex justify-center">
            <div className="w-full max-w-3xl mx-auto px-4">

                {/* Header */}
                <motion.div
                    className="flex items-center justify-center gap-2.5 mb-8"
                    initial={{ opacity: 0, y: -8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    data-robot-msg="My technical skills"
                >
                    <Code2 size={15} className="section-icon" />
                    <span className="text-xs font-bold tracking-[0.25em] uppercase section-label">
                        Tech Stack
                    </span>
                </motion.div>

                {/* Marquee Strip */}
                <div className="tech-strip relative w-full overflow-hidden py-5 rounded-2xl">
                    {/* Fade Masks */}
                    <div className="tech-mask-left absolute inset-y-0 left-0 w-20 z-10 pointer-events-none" />
                    <div className="tech-mask-right absolute inset-y-0 right-0 w-20 z-10 pointer-events-none" />

                    <motion.div
                        className="flex gap-3 pr-3"
                        animate={{ x: [0, -1035] }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: 'loop',
                                duration: 28,
                                ease: 'linear',
                            },
                        }}
                    >
                        {[...skills, ...skills, ...skills].map((skill, index) => (
                            <SkillPill key={`${skill.name}-${index}`} skill={skill} />
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default TechStack;
