// src/components/SplashScreen.tsx
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../assets/Logo.png";

const PARTICLES = Array.from({ length: 14 });

const SplashScreen = () => {
    const [show, setShow] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setShow(false), 2500); // 2.5s then hide
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    className="fixed inset-0 z-[9999] overflow-hidden bg-black text-white"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    aria-label="Splash screen"
                >
                    {/* --- Background glows --- */}
                    <motion.div
                        aria-hidden
                        className="pointer-events-none absolute -top-20 -left-20 h-72 w-72 rounded-full bg-blue-600/25 blur-3xl"
                        animate={{ scale: [1, 1.15, 1] }}
                        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.div
                        aria-hidden
                        className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                    />

                    {/* --- Subtle dot grid overlay for texture --- */}
                    <div
                        aria-hidden
                        className="absolute inset-0 opacity-15"
                        style={{
                            backgroundImage:
                                "radial-gradient(rgba(255,255,255,0.12) 1px, transparent 1px)",
                            backgroundSize: "22px 22px",
                            backgroundPosition: "0 0",
                        }}
                    />

                    {/* --- Particles (tiny floating sparks) --- */}
                    <div aria-hidden className="absolute inset-0">
                        {PARTICLES.map((_, i) => {
                            const left = `${(i * 71) % 100}%`; // pseudo-random
                            const delay = (i % 5) * 0.25;
                            const size = 3 + (i % 3); // 3-5px
                            return (
                                <motion.span
                                    key={i}
                                    className="absolute top-full rounded-full bg-white/60"
                                    style={{ left, width: size, height: size }}
                                    initial={{ y: 0, opacity: 0 }}
                                    animate={{ y: "-120vh", opacity: [0, 1, 0.6, 0] }}
                                    transition={{
                                        duration: 2.4 + (i % 4) * 0.3,
                                        repeat: Infinity,
                                        delay,
                                        ease: "easeOut",
                                    }}
                                />
                            );
                        })}
                    </div>

                    {/* --- Center content --- */}
                    <div className="relative z-10 flex h-full items-center justify-center">
                        <div className="flex flex-col items-center px-6 text-center">
                            {/* Logo pulse */}
                            <motion.img
                                src={Logo}
                                alt="Logo"
                                className="h-16 w-16 rounded-full shadow-2xl ring-2 ring-white/10 md:h-20 md:w-20"
                                initial={{ scale: 0.85, opacity: 0, rotate: -6 }}
                                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                            />

                            {/* Welcome */}
                            <motion.h1
                                className="mt-4 text-lg font-medium text-blue-300 md:text-2xl"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.15 }}
                            >
                                Welcome to My Portfolio
                            </motion.h1>

                            {/* Name: gradient + slight glow */}
                            <motion.h2
                                className="mt-2 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent drop-shadow-[0_0_12px_rgba(59,130,246,0.25)] md:text-6xl"
                                initial={{ opacity: 0, y: 18, letterSpacing: "0.05em" }}
                                animate={{ opacity: 1, y: 0, letterSpacing: "0em" }}
                                transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
                            >
                                Dion Fernando
                            </motion.h2>

                            {/* Underline reveal */}
                            <motion.div
                                className="mt-3 h-[3px] w-44 origin-left rounded-full bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 md:w-56"
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ duration: 0.7, delay: 0.55, ease: "easeOut" }}
                            />

                            {/* Tiny sub-caption (optional) */}
                            <motion.p
                                className="mt-3 text-[11px] text-gray-300 md:text-sm"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 0.85, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.75 }}
                            >
                                Full-Stack Developer • UI/UX • Creator
                            </motion.p>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default SplashScreen;
