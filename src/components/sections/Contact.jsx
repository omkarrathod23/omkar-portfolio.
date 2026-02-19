import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MessageCircle } from 'lucide-react';

const Contact = () => {
    const contactMethods = [
        {
            icon: Mail,
            label: 'Email',
            value: 'omkarrathod101050@gmail.com',
            href: 'mailto:omkarrathod101050@gmail.com'
        },
        {
            icon: Linkedin,
            label: 'LinkedIn',
            value: '/omkar-rathod',
            href: 'https://www.linkedin.com/in/omkar-rathod-a93467251/'
        },
        {
            icon: Github,
            label: 'GitHub',
            value: '@omkarrathod23',
            href: 'https://github.com/omkarrathod23'
        }
    ];

    return (
        <footer id="contact" className="py-12 md:py-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-3xl mx-auto px-4 sm:px-6"
            >
                <div className="text-center mb-10 md:mb-12">
                    <motion.div
                        className="flex items-center justify-center gap-2 mb-3"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <MessageCircle className="text-accent-primary" size={20} />
                        <span className="text-accent-primary text-sm font-bold uppercase tracking-widest">
                            Contact
                        </span>
                    </motion.div>

                    <motion.h2
                        className="text-2xl md:text-3xl font-bold text-accent-primary mb-3 tracking-tight"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Let's Build Together
                    </motion.h2>
                    <motion.p
                        className="text-secondary text-sm md:text-base max-w-lg mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        Have a project in mind? Let's collaborate and create something amazing together.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    {contactMethods.map((method, idx) => (
                        <motion.a
                            key={idx}
                            href={method.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + idx * 0.1 }}
                            whileHover={{ y: -4 }}
                            className="p-5 bg-bg-secondary hover:bg-accent-primary/5 border border-accent-primary/10 hover:border-accent-primary/20 rounded-xl transition-all flex flex-col items-center text-center"
                        >
                            <div className="w-10 h-10 mb-3 rounded-lg bg-accent-primary/10 flex items-center justify-center border border-accent-primary/20">
                                <method.icon size={18} className="text-accent-primary" />
                            </div>
                            <h3 className="text-sm font-bold text-accent-primary mb-1">{method.label}</h3>
                            <p className="text-xs text-secondary font-semibold">{method.value}</p>
                        </motion.a>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="p-8 bg-bg-secondary border border-accent-primary/10 rounded-2xl text-center"
                >
                    <h3 className="text-xl md:text-2xl font-bold text-accent-primary mb-3">
                        Interested in Collaborating?
                    </h3>
                    <p className="text-secondary max-w-lg mx-auto text-sm leading-relaxed mb-6">
                        I'm currently open to new opportunities and interesting projects.
                    </p>

                    <a
                        href="mailto:omkarrathod101050@gmail.com"
                        className="btn-primary inline-flex items-center gap-2 px-6 py-2.5 text-sm"
                    >
                        <Mail size={16} />
                        Get in Touch
                    </a>
                </motion.div>

                <div className="mt-12 pt-8 border-t border-accent-primary/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
                    <motion.div
                        className="flex items-center gap-2"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-2 px-3 py-1.5 bg-accent-primary/5 border border-accent-primary/10 rounded-full">
                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                            <span className="font-bold uppercase tracking-widest text-accent-primary">Available</span>
                        </div>
                    </motion.div>

                    <motion.div
                        className="text-secondary font-semibold"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        Made with <span className="text-red-400">♥</span> by Omkar Rathod
                    </motion.div>
                </div>
            </motion.div>
        </footer>
    );
};

export default Contact;
