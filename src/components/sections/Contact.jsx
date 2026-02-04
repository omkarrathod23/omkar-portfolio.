import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Twitter, Linkedin, Heart, ExternalLink } from 'lucide-react';

const Contact = () => {
    return (
        <footer id="contact" className="container py-8 flex flex-col gap-8">
            {/* CTA Card */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="card-glass flex flex-col items-center text-center gap-6 py-16"
            >
                <h2 className="text-3xl font-bold tracking-tight">Interested in collaborating?</h2>
                <p className="text-secondary max-w-sm mx-auto text-sm leading-relaxed">
                    I'm currently open to new opportunities and interesting projects.
                    Let's build something exceptional together.
                </p>
                <div className="flex gap-4">
                    <a href="mailto:omkarrathod101050@gmail.com" className="btn-primary flex items-center gap-2">
                        <Mail size={16} />
                        Get in touch
                    </a>
                </div>
            </motion.div>

            {/* Links and Info Area */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 py-8 border-t border-accent-primary/5 px-4 text-xs font-medium uppercase tracking-widest text-secondary">
                <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.3)]" />
                    Available for work
                </div>

                <div className="flex gap-6">
                    <a href="https://github.com/omkarrathod23" target="_blank" rel="noopener noreferrer" className="hover:text-accent-primary transition-colors">GitHub</a>
                    <a href="https://www.linkedin.com/in/omkar-rathod-a93467251/" target="_blank" rel="noopener noreferrer" className="hover:text-accent-primary transition-colors">LinkedIn</a>
                    <a href="mailto:omkarrathod101050@gmail.com" className="hover:text-accent-primary transition-colors">Email</a>
                </div>

                <div className="flex items-center gap-2">
                    Made with <Heart size={14} className="text-red-500 fill-red-500" /> by Omkar
                </div>
            </div>

        </footer>
    );
};

export default Contact;
