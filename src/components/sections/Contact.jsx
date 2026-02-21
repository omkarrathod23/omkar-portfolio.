import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Github, Linkedin, MessageCircle } from 'lucide-react';

const Contact = () => {
    const [hoveredMethod, setHoveredMethod] = useState(null);

    const contactMethods = [
        {
            id: 'email',
            icon: Mail,
            label: 'Email',
            value: 'omkarrathod101050@gmail.com',
            href: 'mailto:omkarrathod101050@gmail.com',
            description: 'Send me an email for any inquiries or collaboration requests.',
            robotMsg: 'Drop me a message'
        },
        {
            id: 'linkedin',
            icon: Linkedin,
            label: 'LinkedIn',
            value: '/omkar-rathod',
            href: 'https://www.linkedin.com/in/omkar-rathod-a93467251/',
            description: 'Connect with me on LinkedIn to see my professional background.',
            preview: '/previews/linkedin.png',
            robotMsg: 'Let\'s connect'
        },
        {
            id: 'github',
            icon: Github,
            label: 'GitHub',
            value: '@omkarrathod23',
            href: 'https://github.com/omkarrathod23',
            description: 'Check out my latest projects and contributions on GitHub.',
            preview: '/previews/github.png',
            robotMsg: 'Check out my code'
        }
    ];

    return (
        <footer
            id="contact"
            className="py-12 md:py-20 relative overflow-hidden bg-black/20"
        >
            {/* Background elements */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-10">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)]" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10"
            >
                {/* Minimalist Signature Block */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-10 p-8 md:p-12 rounded-[2.5rem] bg-bg-secondary/40 backdrop-blur-xl border border-accent-primary/5 shadow-2xl relative overflow-visible group">
                    {/* Decorative side accent */}
                    <div className="absolute left-0 top-1/4 bottom-1/4 w-1 bg-accent-primary/20 rounded-r-full group-hover:bg-accent-primary/50 transition-colors duration-500" />

                    <div className="flex-1 text-center md:text-left">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center justify-center md:justify-start gap-2 mb-4"
                            data-robot-msg="Get in touch"
                        >
                            <span className="w-8 h-[1px] bg-accent-primary scale-x-100 group-hover:scale-x-150 origin-left transition-transform duration-700" />
                            <span className="text-accent-primary text-[10px] font-black uppercase tracking-[0.4em]">Let's Connect</span>
                        </motion.div>

                        <h2
                            className="text-3xl md:text-4xl lg:text-5xl font-black text-accent-primary mb-4 tracking-tighter leading-none"
                            data-robot-msg="Let's build something great"
                        >
                            Let's Build <span className="text-indigo-500">Together.</span>
                        </h2>
                        <p
                            className="text-secondary text-sm md:text-base font-medium max-w-sm"
                            data-robot-msg="Open for collaboration"
                        >
                            I'm always open to new opportunities and interesting projects.
                        </p>
                    </div>

                    <div className="flex flex-col gap-4 w-full md:w-auto">
                        {contactMethods.map((method, idx) => (
                            <div key={method.id} className="relative group/pill">
                                <motion.a
                                    href={method.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    data-robot-msg={method.robotMsg}
                                    onMouseEnter={() => setHoveredMethod(method.id)}
                                    onMouseLeave={() => setHoveredMethod(null)}
                                    className="flex items-center justify-between gap-4 px-6 py-4 rounded-2xl bg-accent-primary/5 border border-accent-primary/5 hover:bg-accent-primary/10 hover:border-accent-primary/10 transition-all duration-300 group/link"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="p-2 rounded-lg bg-accent-primary/10 text-accent-primary group-hover/link:bg-accent-primary group-hover/link:text-bg-primary transition-all duration-300">
                                            <method.icon size={18} />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-xs font-black text-accent-primary/50 group-hover/link:text-accent-primary/80 transition-colors">{method.label}</span>
                                            <span className="text-[10px] font-medium text-secondary truncate max-w-[120px]">{method.value}</span>
                                        </div>
                                    </div>
                                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-accent-primary/5 group-hover/link:translate-x-1 transition-transform">
                                        <div className="w-1.5 h-1.5 border-t-2 border-r-2 border-accent-primary/20 group-hover/link:border-accent-primary rotate-45" />
                                    </div>
                                </motion.a>

                                {/* Floating Hover Preview (Outside the pill) */}
                                <AnimatePresence>
                                    {hoveredMethod === method.id && method.preview && (
                                        <motion.div
                                            initial={{ opacity: 0, x: -20, scale: 0.95 }}
                                            animate={{ opacity: 1, x: 0, scale: 1 }}
                                            exit={{ opacity: 0, x: -10, scale: 0.95 }}
                                            transition={{
                                                type: "spring",
                                                stiffness: 400,
                                                damping: 25
                                            }}
                                            className="absolute right-[112%] top-1/2 -translate-y-1/2 z-[1000] pointer-events-none hidden lg:block w-[450px] max-h-[300px] rounded-xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)] bg-transparent"
                                        >
                                            <img
                                                src={method.preview}
                                                alt={`${method.label} Preview`}
                                                className="w-full h-full object-contain opacity-100"
                                            />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Refined Footer Bottom */}
                <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-6 dark:opacity-60 group-hover:opacity-100 transition-opacity duration-1000">
                    <div
                        className="flex items-center gap-3 text-[10px] font-bold"
                        data-robot-msg="© 2026 Omkar Rathod"
                    >
                        <span className="text-accent-primary uppercase tracking-widest">© {new Date().getFullYear()} Omkar Rathod</span>
                        <div className="w-1 h-1 rounded-full bg-accent-primary" />
                        <span className="text-accent-primary uppercase tracking-widest" data-robot-msg="Digital Craftsman">Digital Craftsman</span>
                    </div>

                    <div className="flex items-center gap-6">
                        <div
                            data-robot-msg="I am looking for new challenges"
                            className="text-[9px] font-black uppercase tracking-[0.2em] text-accent-primary flex items-center gap-2"
                        >
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            Available for New Projects
                        </div>
                        <div
                            className="text-[10px] font-medium text-accent-primary"
                            data-robot-msg="People love this site"
                        >
                            2,267 unique views
                        </div>
                    </div>
                </div>
            </motion.div>
        </footer>
    );
};

export default Contact;
