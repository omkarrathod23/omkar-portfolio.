import React from 'react';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-12 md:py-16">
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
                        <User className="text-accent-primary" size={20} />
                        <span className="text-accent-primary text-sm font-bold uppercase tracking-widest">
                            About Me
                        </span>
                    </motion.div>

                    <motion.h2
                        className="text-2xl md:text-3xl font-bold text-white mb-6 tracking-tight"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Passionate about AI & Full Stack
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-secondary text-sm md:text-base max-w-2xl mx-auto leading-relaxed space-y-4"
                    >
                        <p>
                            I am a final-year Computer Science student specializing in Artificial Intelligence and Machine Learning.
                            My passion lies in bridging the gap between intelligent algorithms and robust software engineering.
                        </p>
                        <p>
                            With experience in full-stack development and a deep interest in robotics and automation,
                            I enjoy building scalable applications that solve real-world problems.
                            I am constanty learning and exploring new technologies to stay ahead in the rapidly evolving tech landscape.
                        </p>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default About;

