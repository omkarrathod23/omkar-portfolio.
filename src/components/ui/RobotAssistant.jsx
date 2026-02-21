import React, { useEffect, useState, useMemo, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';

const RobotAssistant = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [contextMsg, setContextMsg] = useState(null);
    const [currentDefaultMsg, setCurrentDefaultMsg] = useState(0);
    const [showBubble, setShowBubble] = useState(true);
    const lastElementRef = useRef(null);

    const defaultMessages = useMemo(() => [
        "Hi! I'm your AI assistant",
        "Scroll down to see my projects",
        "Need a professional dev? Let's talk",
        "I follow you everywhere"
    ], []);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 40, stiffness: 450, mass: 0.5 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    const rotate = useTransform(springX, (x) => (x - window.innerWidth / 2) * 0.02);
    const tiltY = useTransform(springY, (y) => (y - window.innerHeight / 2) * -0.01);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!isVisible) setIsVisible(true);
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);

            // ULTIMATE High Precision Detection
            // document.elementsFromPoint returns ALL elements at coordinates (z-ordered)
            const targets = document.elementsFromPoint(e.clientX, e.clientY);
            let foundMsg = null;

            for (const target of targets) {
                // Ignore the robot itself to see what's underneath
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

        const messageInterval = setInterval(() => {
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
            clearInterval(messageInterval);
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
                    <div className="relative -translate-x-1/2 -translate-y-1/2 w-8 h-8">
                        {/* 1. Speech Bubble */}
                        <AnimatePresence mode="wait">
                            {showBubble && (
                                <motion.div
                                    key={contextMsg || currentDefaultMsg}
                                    initial={{ opacity: 0, y: 5, x: 10, scale: 0.9 }}
                                    animate={{ opacity: 1, y: -45, x: 25, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                    className="absolute left-full top-0 whitespace-nowrap bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl rounded-bl-none border border-black/5 shadow-xl"
                                >
                                    <span className="text-[10px] font-black text-black uppercase tracking-wider">
                                        {contextMsg || defaultMessages[currentDefaultMsg]}
                                    </span>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* 2. Robot Visuals */}
                        <div className="absolute inset-0 bg-accent-primary/15 blur-xl rounded-full scale-110" />

                        <svg viewBox="0 0 100 100" className="w-full h-full relative z-10 filter drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
                            <defs>
                                <linearGradient id="metalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#ffffff" />
                                    <stop offset="50%" stopColor="#f0f0f0" />
                                    <stop offset="100%" stopColor="#d1d1d1" />
                                </linearGradient>
                                <radialGradient id="eyeGlow">
                                    <stop offset="0%" stopColor="#00f2fe" />
                                    <stop offset="100%" stopColor="transparent" />
                                </radialGradient>
                            </defs>

                            <motion.g animate={{ y: [0, -1, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                                <motion.ellipse
                                    cx="50" cy="95" rx="10" ry="3"
                                    fill="var(--accent-primary)"
                                    opacity="0.1"
                                    animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                />

                                <rect x="44" y="66" width="12" height="6" fill="#222" rx="1.5" />
                                <rect x="34" y="70" width="32" height="16" fill="url(#metalGradient)" rx="4" />

                                <rect x="28" y="28" width="44" height="38" fill="url(#metalGradient)" rx="10" />
                                <rect x="32" y="34" width="36" height="26" fill="#050505" rx="6" />

                                <motion.g
                                    animate={{
                                        scaleY: [1, 1, 0.1, 1, 1]
                                    }}
                                    transition={{
                                        duration: 6,
                                        repeat: Infinity,
                                        times: [0, 0.95, 0.97, 0.99, 1]
                                    }}
                                >
                                    <circle cx="42" cy="47" r="4" fill="#00f2fe" />
                                    <circle cx="58" cy="47" r="4" fill="#00f2fe" />
                                    <circle cx="42" cy="47" r="9" fill="url(#eyeGlow)" opacity="0.3" />
                                    <circle cx="58" cy="47" r="9" fill="url(#eyeGlow)" opacity="0.3" />
                                </motion.g>

                                <motion.rect
                                    x="34" y="36" width="1" height="22"
                                    fill="var(--accent-primary)"
                                    opacity="0.3"
                                    animate={{ x: [0, 32, 0] }}
                                    transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }}
                                />
                            </motion.g>
                        </svg>

                        <motion.div
                            animate={{ opacity: [0.3, 0.1, 0.3] }}
                            transition={{ duration: 0.8, repeat: Infinity }}
                            className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-4 bg-accent-primary/10 blur-lg rounded-full"
                        />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default RobotAssistant;
