import React from 'react';
import { motion } from 'framer-motion';

const skills = [
    { name: 'Java', logo: 'https://cdn.simpleicons.org/openjdk' },
    { name: 'Spring Boot', logo: 'https://cdn.simpleicons.org/springboot' },
    { name: 'React', logo: 'https://cdn.simpleicons.org/react' },
    { name: 'Next.js', logo: 'https://cdn.simpleicons.org/nextdotjs' },
    { name: 'Node.js', logo: 'https://cdn.simpleicons.org/nodedotjs' },
    { name: 'PostgreSQL', logo: 'https://cdn.simpleicons.org/postgresql' },
    { name: 'MongoDB', logo: 'https://cdn.simpleicons.org/mongodb' },
    { name: 'Docker', logo: 'https://cdn.simpleicons.org/docker' },
    { name: 'AWS', logo: 'https://cdn.simpleicons.org/amazonaws' },
    { name: 'TypeScript', logo: 'https://cdn.simpleicons.org/typescript' },
    { name: 'Git', logo: 'https://cdn.simpleicons.org/git' },
    { name: 'Linux', logo: 'https://cdn.simpleicons.org/linux' }
];


const SkillItem = ({ skill }) => (
    <div className="flex items-center gap-3 px-5 py-3 bg-white/5 border border-white/10 rounded-xl backdrop-blur-md hover:bg-white/10 transition whitespace-nowrap">
        <img
            src={skill.logo}
            alt={skill.name}
            className="w-5 h-5"
        />
        <span className="text-sm font-medium text-white/80">
            {skill.name}
        </span>
    </div>
);


const About = () => {
    return (
        <section className="container py-12 flex flex-col gap-10">

            {/* ================= Skills Section ================= */}
            <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="card-glass overflow-hidden flex flex-col gap-6 p-6"
            >
                <h2 className="text-lg font-semibold">
                    My <span className="text-secondary">Skills</span>
                </h2>

                {/* Marquee */}
                <div className="relative overflow-hidden">

                    <motion.div
                        animate={{ x: ['0%', '-50%'] }}
                        transition={{
                            repeat: Infinity,
                            duration: 18,
                            ease: 'linear'
                        }}
                        className="flex gap-4 w-max"
                    >
                        {/* duplicate skills for infinite loop */}
                        {[...skills, ...skills].map((skill, index) => (
                            <SkillItem key={index} skill={skill} />
                        ))}
                    </motion.div>

                </div>
            </motion.div>

        </section>
    );
};

export default About;

