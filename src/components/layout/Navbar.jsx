import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Work', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'GitHub', href: '#github' },
        { name: 'Skills', href: '#skills' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className="fixed top-8 left-0 right-0 z-50 px-4 pointer-events-none">
            <div className="max-w-[700px] mx-auto pointer-events-auto">
                <motion.div
                    className={`flex items-center justify-between px-8 py-4 rounded-2xl border transition-all duration-300 ${isScrolled ? 'bg-bg-primary/80 backdrop-blur-xl border-accent-primary/10 shadow-xl' : 'bg-transparent border-transparent'}`}
                >
                    <a href="#" className="font-bold text-xl tracking-tighter hover:opacity-80 transition-opacity text-accent-primary">
                        om<span className="text-indigo-500">.</span>
                    </a>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-xs font-medium text-secondary hover:text-white transition-colors uppercase tracking-widest"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Theme Toggle & Hire me */}
                    <div className="hidden md:flex items-center gap-4">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-xl bg-accent-primary/5 hover:bg-accent-primary/10 transition-colors border border-accent-primary/5 text-accent-primary"
                            aria-label="Toggle theme"
                        >
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={theme}
                                    initial={{ y: -20, opacity: 0, rotate: -90 }}
                                    animate={{ y: 0, opacity: 1, rotate: 0 }}
                                    exit={{ y: 20, opacity: 0, rotate: 90 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                                </motion.div>
                            </AnimatePresence>
                        </button>

                        <a href="mailto:omkarrathod101050@gmail.com">
                            <span className="text-xs font-bold uppercase tracking-widest px-4 py-2 bg-accent-primary text-bg-primary rounded-lg hover:opacity-90 transition-all">
                                Hire me
                            </span>
                        </a>
                    </div>

                    {/* Mobile Menu Button & Toggle */}
                    <div className="flex items-center gap-2 md:hidden">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-xl text-accent-primary"
                        >
                            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                        <button
                            className="text-accent-primary p-2"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden mt-4 mx-auto max-w-[1400px] card-glass pointer-events-auto bg-bg-primary/95 backdrop-blur-xl border-accent-primary/10 shadow-2xl"
                    >
                        <div className="flex flex-col p-6 gap-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-sm font-semibold text-secondary hover:text-accent-primary uppercase tracking-widest transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="mailto:omkarrathod101050@gmail.com"
                                className="w-full text-center text-xs font-bold uppercase tracking-widest px-4 py-4 bg-accent-primary text-bg-primary rounded-xl"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Hire me
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;

