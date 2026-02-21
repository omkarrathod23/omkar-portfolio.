import React, { useEffect, useState, useMemo, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';

const RobotAssistant = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [contextMsg, setContextMsg] = useState(null);
    const [currentDefaultMsg, setCurrentDefaultMsg] = useState(0);
    const [showBubble, setShowBubble] = useState(true);

    // Professional Technical Messaging
    const defaultMessages = useMemo(() => [
        "Core systems operational. Ready to assist.",
        "Analyzing project architecture stack...",
        "Synthesizing technical documentation.",
        "Monitoring interface interaction patterns."
    ], []);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Physics-based inertia (Weighty yet responsive feel)
    const springConfig = { damping: 35, stiffness: 350, mass: 0.8 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    // Secondary motion transforms (3D Tilt)
    const rotate = useTransform(springX, (x) => (x - window.innerWidth / 2) * 0.025);
    const tiltY = useTransform(springY, (y) => (y - window.innerHeight / 2) * -0.012);

    // Adaptive Positioning: Flip bubble if too close to the top
    const bubbleY = useTransform(springY, [0, 150], [65, -55]);
    const bubbleTailRotate = useTransform(springY, [0, 150], [225, 45]);
    const bubbleTailY = useTransform(springY, [0, 150], [-8, 26]);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!isVisible) setIsVisible(true);
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);

            const targets = document.elementsFromPoint(e.clientX, e.clientY);
            let foundMsg = null;

            for (const target of targets) {
                if (target.id === 'robot-assistant-core' || target.closest('#robot-assistant-core')) continue;
                const contextualElement = target.closest('[data-robot-msg]');
                if (contextualElement) {
                    foundMsg = contextualElement.getAttribute('data-robot-msg');
                    break;
                }
            }

            if (foundMsg) {
                if (foundMsg !== contextMsg) {
                    setContextMsg(foundMsg);
                    setShowBubble(true);
                }
            } else if (contextMsg) {
                setContextMsg(null);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        const interval = setInterval(() => {
            if (!contextMsg) {
                setShowBubble(false);
                setTimeout(() => {
                    setCurrentDefaultMsg((prev) => (prev + 1) % defaultMessages.length);
                    setShowBubble(true);
                }, 500);
            }
        }, 12000);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            clearInterval(interval);
        };
    }, [isVisible, mouseX, mouseY, contextMsg, defaultMessages.length]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    id="robot-assistant-core"
                    style={{
                        position: 'fixed',
                        left: springX,
                        top: springY,
                        rotate: rotate,
                        zRotate: tiltY,
                        zIndex: 999999,
                        pointerEvents: 'none',
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    className="hidden md:block"
                >
                    <div className="relative -translate-x-1/2 -translate-y-1/2 w-9 h-9">
                        {/* 1. Speech Bubble - Glassmorphism UI */}
                        <AnimatePresence mode="wait">
                            {showBubble && (
                                <motion.div
                                    key={contextMsg || currentDefaultMsg}
                                    initial={{ opacity: 0, x: 20, scale: 0.9 }}
                                    animate={{ opacity: 1, x: 40, y: bubbleY, scale: 1 }}
                                    exit={{ opacity: 0, x: 20, scale: 0.9 }}
                                    className="absolute left-full top-0 border border-white/20 bg-slate-900/80 backdrop-blur-xl px-4 py-2 rounded-2xl rounded-bl-none shadow-[0_12px_40px_rgba(0,0,0,0.4)] ring-1 ring-white/10"
                                >
                                    <div className="flex flex-col gap-0.5">
                                        <div className="flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse shadow-[0_0_8px_rgba(14,165,233,0.8)]" />
                                            <span className="text-[9px] font-bold text-sky-400 uppercase tracking-widest">Assistant</span>
                                        </div>
                                        <span className="text-[11px] font-medium text-white/95 whitespace-nowrap leading-relaxed">
                                            {contextMsg || defaultMessages[currentDefaultMsg]}
                                        </span>
                                    </div>
                                    {/* Adaptive Tail */}
                                    <motion.div
                                        style={{ rotate: bubbleTailRotate, top: bubbleTailY }}
                                        className="absolute -left-1.5 w-3 h-3 bg-slate-900/80 border-l border-b border-white/15"
                                    />
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* 2. Glow Effects */}
                        <div className="absolute inset-0 bg-sky-500/15 blur-2xl rounded-full scale-110" />

                        {/* 3. Robot Component */}
                        <svg viewBox="0 0 100 100" className="w-full h-full relative z-10 filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.4)]">
                            <defs>
                                <linearGradient id="metalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#ffffff" />
                                    <stop offset="50%" stopColor="#f8fafc" />
                                    <stop offset="100%" stopColor="#94a3b8" />
                                </linearGradient>
                                <radialGradient id="eyeGlow">
                                    <stop offset="0%" stopColor="#0ea5e9" />
                                    <stop offset="100%" stopColor="transparent" />
                                </radialGradient>
                            </defs>

                            <motion.g animate={{ y: [0, -2, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
                                {/* Shadow */}
                                <motion.ellipse
                                    cx="50" cy="110" rx="14" ry="3"
                                    fill="black" opacity="0.1"
                                    animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.15, 0.05] }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                />

                                {/* Main Body Elements */}
                                <rect x="44" y="66" width="12" height="6" fill="#1e293b" rx="1.5" />
                                <rect x="34" y="70" width="32" height="15" fill="url(#metalGradient)" rx="4" />
                                <rect x="28" y="28" width="44" height="38" fill="url(#metalGradient)" rx="10" />

                                {/* Visor Plate */}
                                <rect x="32" y="34" width="36" height="26" fill="#0f172a" rx="6" />

                                {/* Eyes / Optics */}
                                <motion.g animate={{ scaleY: [1, 1, 0.1, 1, 1] }} transition={{ duration: 6, repeat: Infinity, times: [0, 0.9, 0.92, 0.94, 1] }}>
                                    <circle cx="42" cy="47" r="3.5" fill="#0ea5e9" />
                                    <circle cx="58" cy="47" r="3.5" fill="#0ea5e9" />
                                    <circle cx="42" cy="47" r="8" fill="url(#eyeGlow)" opacity="0.3" />
                                    <circle cx="58" cy="47" r="8" fill="url(#eyeGlow)" opacity="0.3" />
                                    <circle cx="40.5" cy="45.5" r="0.8" fill="white" opacity="0.6" />
                                    <circle cx="56.5" cy="45.5" r="0.8" fill="white" opacity="0.6" />
                                </motion.g>

                                {/* Scanning Line */}
                                <motion.rect
                                    x="34" y="36" width="1" height="22"
                                    fill="#0ea5e9" opacity="0.4"
                                    animate={{ x: [0, 32, 0] }}
                                    transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                                />
                            </motion.g>
                        </svg>

                        {/* Exhaust Heat Distortion */}
                        <motion.div
                            animate={{ opacity: [0.4, 0.1, 0.4] }}
                            transition={{ duration: 0.8, repeat: Infinity }}
                            className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-6 h-6 bg-sky-500/10 blur-xl rounded-full"
                        />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default RobotAssistant;
