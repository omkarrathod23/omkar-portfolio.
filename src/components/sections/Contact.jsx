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
        <footer id="contact" className="py-16 md:py-24">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-5xl mx-auto"
            >
                <div className="mb-10 md:mb-14">
                    <motion.div
                        className="flex items-center gap-3 mb-4"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-accent-primary text-sm font-black uppercase tracking-[0.2em]">
                            Contact
                        </span>
                        <MessageCircle className="text-accent-primary" size={18} />
                    </motion.div>

                    <motion.h2
                        className="text-4xl md:text-5xl font-black text-accent-primary mb-4 leading-tight"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        Let's Build Together
                    </motion.h2>
                    <motion.p
                        className="text-secondary text-base md:text-lg max-w-2xl leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        Have a project in mind? Let's collaborate and create something amazing together
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
                    {contactMethods.map((method, idx) => (
                        <motion.a
                            key={idx}
                            href={method.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 + idx * 0.1 }}
                            whileHover={{ y: -4 }}
                            className="p-6 bg-bg-secondary hover:bg-accent-primary/5 border border-accent-primary/10 hover:border-accent-primary/20 rounded-2xl transition-all"
                        >
                            <div className="w-12 h-12 mb-4 rounded-xl bg-accent-primary/10 flex items-center justify-center border border-accent-primary/20">
                                <method.icon size={20} className="text-accent-primary" />
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
                    transition={{ delay: 0.5 }}
                    className="p-8 md:p-12 bg-bg-secondary border border-accent-primary/10 rounded-3xl text-center"
                >
                    <h3 className="text-3xl md:text-4xl font-black text-accent-primary mb-4">
                        Interested in Collaborating?
                    </h3>
                    <p className="text-secondary max-w-xl mx-auto text-sm md:text-base leading-relaxed mb-8">
                        I'm currently open to new opportunities and interesting projects.
                        Let's build something exceptional together.
                    </p>

                    <a
                        href="mailto:omkarrathod101050@gmail.com"
                        className="btn-primary inline-flex items-center gap-2"
                    >
                        <Mail size={20} />
                        Get in Touch
                    </a>
                </motion.div>

                <div className="mt-12 pt-8 border-t border-accent-primary/10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <motion.div
                        className="flex items-center gap-2"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-2 px-4 py-2 bg-accent-primary/10 border border-accent-primary/20 rounded-full">
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                            <span className="text-xs font-bold uppercase tracking-widest text-accent-primary">Available for Work</span>
                        </div>
                    </motion.div>

                    <motion.div
                        className="flex gap-4"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        {[
                            { icon: Github, href: 'https://github.com/omkarrathod23' },
                            { icon: Linkedin, href: 'https://www.linkedin.com/in/omkar-rathod-a93467251/' },
                            { icon: Mail, href: 'mailto:omkarrathod101050@gmail.com' }
                        ].map((social, i) => (
                            <motion.a
                                key={i}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ y: -4 }}
                                className="p-3 bg-accent-primary/5 hover:bg-accent-primary/10 border border-accent-primary/10 rounded-xl transition-all text-accent-primary"
                            >
                                <social.icon size={18} />
                            </motion.a>
                        ))}
                    </motion.div>

                    <motion.div
                        className="text-xs text-secondary font-semibold"
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
