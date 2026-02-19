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
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center py-4 px-4 pointer-events-none">
                <div className="w-full max-w-7xl pointer-events-auto">
                    <motion.div
                        className={`flex items-center justify-between px-6 py-3 rounded-2xl transition-all duration-300 ${isScrolled
                            ? 'bg-bg-primary/70 backdrop-blur-xl border border-accent-primary/10 shadow-lg'
                            : 'bg-transparent border border-transparent'
                            }`}
                    >
                        <a href="#" className="font-bold text-xl tracking-tighter hover:opacity-80 transition-opacity text-accent-primary group">
                            om<span className="text-indigo-500 group-hover:text-pink-500 transition-colors">.</span>
                        </a>

                        {/* Desktop Links */}
                        <div className="hidden md:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="relative text-xs font-medium text-secondary hover:text-accent-primary transition-colors uppercase tracking-widest group"
                                >
                                    {link.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent-primary transition-all duration-300 group-hover:w-full" />
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
                                <span className="text-xs font-bold uppercase tracking-widest px-5 py-2.5 bg-accent-primary text-bg-primary rounded-xl hover:opacity-90 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-accent-primary/20">
                                    Hire me
                                </span>
                            </a>
                        </div>

                        {/* Mobile Menu Button & Toggle */}
                        <div className="flex items-center gap-2 md:hidden">
                            <button
                                onClick={toggleTheme}
                                className="p-2 rounded-xl text-accent-primary bg-accent-primary/5"
                            >
                                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                            </button>
                            <button
                                className="text-accent-primary p-2 bg-accent-primary/5 rounded-xl ml-2"
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            >
                                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                            </button>
                        </div>
                    </motion.div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed top-24 left-4 right-4 z-40 md:hidden bg-bg-secondary/95 backdrop-blur-2xl border border-accent-primary/10 shadow-2xl rounded-2xl overflow-hidden"
                    >
                        <div className="flex flex-col p-4 gap-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-sm font-semibold text-secondary hover:text-accent-primary hover:bg-accent-primary/5 px-4 py-3 rounded-xl uppercase tracking-widest transition-all"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="mailto:omkarrathod101050@gmail.com"
                                className="w-full text-center text-[11px] font-bold uppercase tracking-widest px-4 py-4 bg-accent-primary text-bg-primary rounded-xl mt-2"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Hire me
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
