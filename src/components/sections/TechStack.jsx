import React from 'react';
import { motion } from 'framer-motion';

const skills = [
    { name: 'Java', logo: 'https://cdn.simpleicons.org/openjdk' },
    { name: 'Spring Boot', logo: 'https://cdn.simpleicons.org/springboot' },
    { name: 'React', logo: 'https://cdn.simpleicons.org/react' },
    { name: 'PostgreSQL', logo: 'https://cdn.simpleicons.org/postgresql' },
    { name: 'AWS', logo: 'https://cdn.simpleicons.org/amazonaws' },
    { name: 'Docker', logo: 'https://cdn.simpleicons.org/docker' },
    { name: 'JavaScript', logo: 'https://cdn.simpleicons.org/javascript' },
    { name: 'TypeScript', logo: 'https://cdn.simpleicons.org/typescript' },
    { name: 'Tailwind CSS', logo: 'https://cdn.simpleicons.org/tailwindcss' },
    { name: 'Next.js', logo: 'https://cdn.simpleicons.org/nextdotjs' },
];

const SkillItem = ({ skill }) => (
    <div className="flex flex-col items-center gap-4 px-8 min-w-[140px] group transition-all duration-300">
        <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-accent-primary/[0.02] dark:bg-accent-primary/5 border border-accent-primary/5 group-hover:bg-accent-primary/[0.05] group-hover:border-accent-primary/10 transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-accent-primary/5">
            <img
                src={skill.logo}
                alt={skill.name}
                className="w-8 h-8 opacity-80 group-hover:opacity-100 transition-opacity"
            />
        </div>
        <span className="text-[10px] font-bold text-secondary group-hover:text-accent-primary transition-colors uppercase tracking-[0.2em] text-center">
            {skill.name}
        </span>
    </div>
);

const TechStack = () => {
    return (
        <section id="skills" className="container py-24 overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12 flex flex-col gap-2"
            >
                <h2 className="text-xl font-medium text-secondary tracking-tight">Stack I use</h2>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight max-w-lg">
                    Technologies I work with to build products that solve real problems
                </h3>
            </motion.div>

            <div className="relative mt-8">
                {/* Left gradient fade */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-bg-primary to-transparent z-10" />

                <motion.div
                    animate={{ x: ['0%', '-50%'] }}
                    transition={{
                        repeat: Infinity,
                        duration: 25,
                        ease: 'linear'
                    }}
                    className="flex items-center w-max"
                >
                    {/* Duplicate skills for infinite loop */}
                    {[...skills, ...skills, ...skills].map((skill, index) => (
                        <SkillItem key={index} skill={skill} />
                    ))}
                </motion.div>

                {/* Right gradient fade */}
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-bg-primary to-transparent z-10" />
            </div>
        </section>
    );
};

export default TechStack;
