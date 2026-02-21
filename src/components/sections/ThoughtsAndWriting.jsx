import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Clock, Calendar, X, Quote } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const articles = [
    {
        title: "AI & Opportunity: Leveraging the Intelligence Revolution",
        content: "Artificial Intelligence is not replacing people—it is replacing hesitation. Those who learn to collaborate with it early gain leverage, while those who resist spend their time catching up. The real challenge is not AI itself, but deciding to adapt before adaptation becomes mandatory.",
        date: "2024-02-15",
        readTime: "3 min",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=600&h=600",
        tags: ["AI", "Leverage", "Future"],
        color: "#fbbf24" // Cyber Gold
    },
    {
        title: "The Invisible Art of Engineering Craft",
        content: "Good engineering is invisible. When systems feel simple, reliable, and calm, it is because someone chose clarity over cleverness and discipline over shortcuts.",
        date: "2024-01-20",
        readTime: "2 min",
        image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=600&h=600",
        tags: ["Craftsmanship", "Engineering", "Discipline"],
        color: "#8b5cf6" // Royal Purple
    },
    {
        title: "Compounding Growth: The Power of Consistency",
        content: "Progress rarely comes from dramatic change. It comes from showing up daily, refining small decisions, and trusting that consistency compounds faster than motivation ever will.",
        date: "2023-12-05",
        readTime: "4 min",
        image: "https://images.unsplash.com/photo-1491336477066-31156b5e4f35?auto=format&fit=crop&q=80&w=600&h=600",
        tags: ["Growth", "Mindset", "Consistency"],
        color: "#10b981" // Hyper Green
    }
];

const ThoughtModal = ({ thought, onClose, isLight }) => {
    if (!thought) return null;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6"
        >
            {/* Backdrop */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onClick={onClose}
                className={`absolute inset-0 backdrop-blur-2xl ${isLight ? 'bg-white/40' : 'bg-black/70'}`}
            />

            {/* Modal Container */}
            <motion.div
                initial={{ scale: 0.95, y: 15, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.95, y: 15, opacity: 0 }}
                className={`relative w-full max-w-lg border rounded-[2.5rem] p-6 sm:p-12 overflow-hidden ${isLight
                    ? 'bg-white border-black/10 shadow-[0_32px_80px_rgba(0,0,0,0.15)]'
                    : 'bg-[#020617] border-white/5 shadow-[0_40px_100px_rgba(0,0,0,0.8)]'
                    }`}
            >
                {/* Visual Accent */}
                <div
                    className="absolute top-0 left-0 right-0 h-1.5"
                    style={{ backgroundColor: thought.color, boxShadow: `0 8px 30px ${thought.color}60` }}
                />

                <div className="flex flex-col items-center text-center">
                    {/* Minimal Mark */}
                    <div className="mb-10 relative">
                        <div
                            className={`w-14 h-14 rounded-2xl flex items-center justify-center border relative z-10 overflow-hidden ${isLight ? 'bg-black/5 border-black/10' : 'bg-white/[0.03] border-white/10'
                                }`}
                        >
                            <img src={thought.image} className="w-full h-full object-cover opacity-30 grayscale" alt="" />
                            <div className={`absolute inset-0 ${isLight ? 'bg-white/40' : 'bg-slate-950/80'}`} />
                            <Quote size={20} className={`absolute z-20 ${isLight ? 'text-black/30' : 'text-white/40'}`} />
                        </div>
                        <motion.div
                            animate={{ scale: [1, 1.4, 1], opacity: [0.05, 0.2, 0.05] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute inset-0 blur-3xl rounded-full"
                            style={{ backgroundColor: thought.color }}
                        />
                    </div>

                    {/* Metadata */}
                    <div className={`flex items-center gap-4 text-[9px] font-black uppercase tracking-[0.35em] mb-8 ${isLight ? 'text-black/40' : 'text-white/20'
                        }`}>
                        <span className="flex items-center gap-2"><Calendar size={10} /> {thought.date}</span>
                        <div className={`w-1 h-1 rounded-full ${isLight ? 'bg-black/10' : 'bg-white/10'}`} />
                        <span className="flex items-center gap-2"><Clock size={10} /> {thought.readTime}</span>
                    </div>

                    {/* Content - Pure Crisp Color */}
                    <h2
                        className={`text-base sm:text-lg font-medium mb-10 tracking-wide leading-relaxed italic ${isLight ? 'text-black opacity-90' : 'text-sky-50 opacity-95'
                            }`}
                        style={{ fontFamily: "serif" }}
                    >
                        "{thought.content}"
                    </h2>

                    <div className={`w-12 h-[1px] mb-10 ${isLight ? 'bg-black/10' : 'bg-white/10'}`} />

                    <h3 className={`text-[11px] font-bold mb-10 tracking-[0.2em] uppercase ${isLight ? 'text-black/50' : 'text-white/40'
                        }`}>
                        {thought.title}
                    </h3>

                    {/* Tags */}
                    <div className="flex flex-wrap justify-center gap-2">
                        {thought.tags.map(tag => (
                            <span
                                key={tag}
                                className={`px-4 py-1.5 border rounded-xl text-[8px] font-black uppercase tracking-widest transition-all duration-300 ${isLight
                                    ? 'bg-black/[0.03] border-black/5 text-black/40'
                                    : 'bg-white/[0.02] border-white/10 text-white/30 hover:border-white/20'
                                    }`}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Close Action */}
                    <button
                        onClick={onClose}
                        className={`mt-14 text-[9px] font-black uppercase tracking-[0.5em] transition-all duration-500 ${isLight ? 'text-black/30 hover:text-black' : 'text-white/20 hover:text-white/60 hover:tracking-[0.6em]'
                            }`}
                    >
                        [ Close ]
                    </button>
                </div>
            </motion.div>
        </motion.div>
    );
};

const ArticleCard = ({ article, index, onClick, isLight }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
        data-robot-msg={`Review critical insights: ${article.title}`}
        onClick={() => onClick(article)}
        className="group relative rounded-2xl overflow-hidden cursor-pointer"
    >
        {/* Animated Glow Backdrop - More Atmospheric */}
        <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),var(--glow-color)_0%,transparent_70%)]"
            style={{
                '--glow-color': `${article.color}${isLight ? '30' : '20'}`,
                '--mouse-x': '50%',
                '--mouse-y': '50%'
            }}
        />

        {/* Main Card Container - Deep Premium Black */}
        <div className={`relative flex items-center gap-4 sm:gap-6 p-4 sm:p-7 backdrop-blur-3xl border rounded-2xl transition-all duration-700 overflow-hidden ${isLight
            ? 'bg-white/80 border-black/5 group-hover:bg-white/95'
            : 'bg-[#030712]/80 border-white/[0.04] group-hover:bg-[#030712]/60 group-hover:border-white/[0.12] shadow-[0_4px_20px_rgba(0,0,0,0.3)]'
            }`}>

            {/* Animated Border Reveal */}
            <motion.div
                className="absolute inset-0 border-2 border-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl pointer-events-none"
                style={{ borderColor: `${article.color}25` }}
            />

            {/* Cover Image with Parallax Scale */}
            <div className={`relative w-24 h-24 sm:w-28 sm:h-28 flex-shrink-0 overflow-hidden rounded-2xl shadow-2xl ring-1 ${isLight ? 'ring-black/5' : 'ring-white/[0.08]'
                } text-[0px]`}>
                <motion.img
                    src={article.image}
                    alt={article.title}
                    whileHover={{ scale: 1.2, rotate: 1 }}
                    transition={{ duration: 1.2 }}
                    className={`w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 ${isLight ? 'opacity-80' : 'opacity-60'
                        }`}
                />
                <div className={`absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-80 ${isLight ? 'from-white/90' : 'from-slate-950/90'
                    }`} />
            </div>

            {/* Content Area */}
            <div className="flex-grow min-w-0">
                <div className="flex items-center gap-2 mb-3">
                    <span
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: article.color, boxShadow: `0 0 15px ${article.color}` }}
                    />
                    <div className={`flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.25em] ${isLight ? 'text-black/60' : 'text-white/30'
                        }`}>
                        <span className="flex items-center gap-1.5">
                            <Calendar size={12} className="opacity-50" />
                            {article.date}
                        </span>
                        <span className="flex items-center gap-1.5">
                            <Clock size={12} className="opacity-50" />
                            {article.readTime}
                        </span>
                    </div>
                </div>

                <h3 className={`text-xl font-black mb-4 line-clamp-1 tracking-tight transition-all duration-500 ${isLight ? 'text-black group-hover:text-black' : 'text-sky-50/90 group-hover:text-white group-hover:translate-x-1'
                    }`}>
                    {article.title}
                </h3>

                <div className="flex flex-wrap gap-2.5">
                    {article.tags.map(tag => (
                        <span
                            key={tag}
                            className={`px-4 py-1.5 rounded-xl text-[9px] font-black uppercase tracking-widest border transition-all duration-700 ${isLight
                                ? 'bg-black/10 text-black/50 border-black/5 group-hover:bg-black/10 group-hover:text-black/80 group-hover:border-black/10'
                                : 'bg-white/[0.02] text-white/20 border-white/[0.05] group-hover:bg-white/[0.05] group-hover:text-white/60 group-hover:border-white/[0.15]'
                                }`}
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* Floating Action Arrow */}
            <div className={`hidden sm:flex flex-shrink-0 w-12 h-12 items-center justify-center rounded-2xl border opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:translate-x-0 translate-x-6 ${isLight
                ? 'bg-black/5 border-black/10 text-black/40 group-hover:text-black'
                : 'bg-white/[0.03] border-white/10 text-white/30 group-hover:text-white shadow-[0_0_20px_rgba(0,0,0,0.5)]'
                }`}>
                <ArrowUpRight size={24} />
            </div>
        </div>
    </motion.div>
);

const ThoughtsAndWriting = () => {
    const [selectedThought, setSelectedThought] = useState(null);
    const { theme } = useTheme();
    const isLight = theme === 'light';

    return (
        <section id="writing" className="py-24 relative overflow-hidden flex justify-center">
            {/* Background Ambient Glow */}
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] blur-[120px] rounded-full pointer-events-none ${isLight ? 'bg-sky-500/10' : 'bg-sky-500/5'
                }`} />

            <div className="w-full max-w-3xl auto-mx auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-5 mb-14"
                >
                    <div className={`w-1 h-10 rounded-full bg-gradient-to-b ${isLight ? 'from-black/20 to-black/0' : 'from-white/40 to-white/0'
                        }`} />
                    <div>
                        <span className={`text-[10px] font-black uppercase tracking-[0.3em] block mb-1 ${isLight ? 'text-black/30' : 'text-white/40'
                            }`}>Curation</span>
                        <h2 className={`text-2xl sm:text-3xl font-black tracking-tighter ${isLight ? 'text-black' : 'text-white'
                            }`}>
                            Thoughts <span className={isLight ? 'text-black/30' : 'text-white/40'}>&</span> Writing
                        </h2>
                    </div>
                </motion.div>

                <div className="grid gap-6">
                    {articles.map((article, index) => (
                        <ArticleCard
                            key={index}
                            article={article}
                            index={index}
                            onClick={(thought) => setSelectedThought(thought)}
                            isLight={isLight}
                        />
                    ))}
                </div>
            </div>

            {/* Thought Detailed Modal */}
            <AnimatePresence>
                {selectedThought && (
                    <ThoughtModal
                        thought={selectedThought}
                        onClose={() => setSelectedThought(null)}
                        isLight={isLight}
                    />
                )}
            </AnimatePresence>
        </section>
    );
};

export default ThoughtsAndWriting;
