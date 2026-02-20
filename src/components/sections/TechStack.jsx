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

const SkillPill = ({ skill }) => (
    <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-white/20 transition-all min-w-max group">
        <div className="w-5 h-5 flex items-center justify-center">
            <img
                src={skill.logo}
                alt={skill.name}
                className="w-full h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity"
            />
        </div>
        <span className="text-xs font-medium text-secondary group-hover:text-white transition-colors">
            {skill.name}
        </span>
    </div>
);

const TechStack = () => {
    return (
        <section id="skills" className="py-8 flex justify-center">
            {/* Small Centered Container */}
            <div className="w-full max-w-3xl mx-auto px-4">

                {/* Header */}
                <div className="flex items-center justify-center gap-2 mb-8 opacity-80">
                    <Code2 className="text-white" size={18} />
                    <span className="text-sm font-bold tracking-[0.2em] text-white uppercase">
                        Tech Stack
                    </span>
                </div>

                {/* Compact Marquee Box */}
                <div className="relative w-full overflow-hidden mask-image-gradient border-t border-b border-white/5 py-6 bg-white/[0.02]">
                    {/* Mask gradients */}
                    <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#030014] to-transparent z-10" />
                    <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#030014] to-transparent z-10" />

                    <motion.div
                        className="flex gap-4 pr-4"
                        animate={{
                            x: [0, -1035], // Adjust based on content width
                        }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 30,
                                ease: "linear",
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
