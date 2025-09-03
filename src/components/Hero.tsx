// src/components/Hero.tsx
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useCallback } from "react";
import ProfileImg from "../assets/youtube/dion.jpg";

const words = [
    "Full-Stack Developer",
    "UI/UX Designer",
    "Graphic Designer",
    "YouTuber",
    "Photographer",
];

// floating orbs
const Circle = ({
                    size,
                    duration,
                    delay,
                    className,
                }: {
    size: number;
    duration: number;
    delay: number;
    className?: string;
}) => (
    <motion.div
        initial={{ y: 0, x: 0 }}
        animate={{ y: [0, 18, 0], x: [0, 18, -18, 0] }}
        transition={{ repeat: Infinity, duration, delay, ease: "easeInOut" }}
        className={`absolute rounded-full bg-blue-400/20 ${className}`}
        style={{ width: size, height: size }}
    />
);

// smooth scroll with offset (matches your navbar offset)
const NAV_OFFSET = 88;
function scrollToHash(id: string) {
    const el = document.getElementById(id.replace(/^#/, ""));
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.pageYOffset - NAV_OFFSET;
    window.scrollTo({ top: y, behavior: "smooth" });
}

export default function Hero() {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);

    useEffect(() => {
        const t = setInterval(
            () => setCurrentWordIndex((p) => (p + 1) % words.length),
            1800
        );
        return () => clearInterval(t);
    }, []);

    const handleHireClick = useCallback(() => scrollToHash("#hire"), []);

    return (
        <section
            id="hero"
            className="relative isolate min-h-screen overflow-hidden bg-gradient-to-b from-gray-900 to-black text-white flex items-center pt-20 md:pt-24"
        >
            {/* --- Background glows --- */}
            <div className="pointer-events-none absolute -left-24 -top-16 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />
            <div className="pointer-events-none absolute -right-24 -bottom-16 h-80 w-80 rounded-full bg-cyan-400/15 blur-3xl" />

            {/* --- Subtle grid texture --- */}
            <div
                aria-hidden
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage:
                        "radial-gradient(rgba(255,255,255,0.12) 1px, transparent 1px)",
                    backgroundSize: "22px 22px",
                    backgroundPosition: "0 0",
                }}
            />

            {/* Floating circles */}
            <Circle size={16} duration={10} delay={0} className="top-[10%] left-[10%] sm:top-[15%] sm:left-[20%]" />
            <Circle size={12} duration={15} delay={2} className="top-[70%] left-[70%] sm:top-[80%] sm:left-[90%]" />
            <Circle size={12} duration={12} delay={1} className="top-[50%] left-[30%] sm:top-[60%] sm:left-[40%]" />
            <Circle size={12} duration={18} delay={3} className="top-[75%] left-[15%] sm:top-[80%] sm:left-[20%]" />
            <Circle size={8} duration={14} delay={0.5} className="top-[15%] left-[50%] sm:top-[20%] sm:left-[60%]" />
            <Circle size={8} duration={16} delay={2.5} className="top-[40%] left-[80%] sm:top-[50%] sm:left-[90%]" />
            <Circle size={8} duration={11} delay={1.5} className="top-[80%] left-[40%] sm:top-[85%] sm:left-[50%]" />
            <Circle size={8} duration={13} delay={3.5} className="top-[30%] left-[70%] sm:top-[40%] sm:left-[80%]" />

            <div className="container relative z-10 mx-auto flex w-full h-full flex-col-reverse items-center justify-between px-4 sm:px-6 md:flex-row md:px-12 lg:px-20">
                {/* --- Left: text --- */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex h-full max-w-xl flex-col justify-center text-center md:text-left"
                >

                    <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-6xl">
                        Hey! I'm{" "}
                        <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
              Dion Fernando
            </span>
                    </h2>

                    {/* rotating roles with nicer transition + blinking caret */}
                    <div className="mt-2 h-7 sm:mt-3 sm:h-8">
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={currentWordIndex}
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -8 }}
                                transition={{ duration: 0.35 }}
                                className="align-middle text-sm text-gray-300 sm:text-lg"
                            >
                                {words[currentWordIndex]}
                            </motion.span>
                        </AnimatePresence>
                        <span className="ml-1 align-middle text-gray-400 animate-pulse">|</span>
                    </div>

                    <p className="mt-2 text-sm text-gray-400 sm:text-base">
                        Passionate about building creative solutions, blending design and technology to craft experiences
                        people love. Always exploring, always learning.
                    </p>

                    <div className="mt-4 flex flex-row flex-wrap justify-center gap-3 sm:mt-5 sm:gap-4 md:justify-start">
                        <button
                            onClick={handleHireClick}
                            className="rounded-2xl bg-blue-500 px-4 py-2 text-sm text-white shadow-lg transition hover:bg-blue-600 sm:px-6 sm:py-3 sm:text-lg"
                        >
                            Hire Me
                        </button>
                        <a
                            href="/Dion%20Fernando%20CV.pdf"
                            download="DionFernandoCV.pdf"
                            className="rounded-2xl border border-gray-400 px-4 py-2 text-center text-sm transition hover:bg-gray-800 sm:px-6 sm:py-3 sm:text-lg"
                        >
                            Download CV
                        </a>
                    </div>
                </motion.div>

                {/* --- Right: portrait with glow + shine sweep --- */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative mb-6 flex w-full items-center justify-center md:mb-0 md:justify-end"
                >
                    {/* outer aura ring */}
                    <motion.div
                        animate={{ boxShadow: ["0 0 22px 6px rgba(59,130,246,0.5)", "0 0 44px 12px rgba(59,130,246,0.8)", "0 0 22px 6px rgba(59,130,246,0.5)"] }}
                        transition={{ duration: 3, repeat: Infinity, repeatType: "mirror" }}
                        className="relative rounded-full"
                    >
                        <div className="relative">
                            <img
                                src={ProfileImg}
                                alt="Dion Fernando"
                                className="w-44 rounded-full shadow-2xl sm:w-48 md:w-80 lg:w-[400px]"
                                style={{ transform: "rotate(2deg)" }}
                            />

                            {/* shiny sweep */}
                            <motion.div
                                aria-hidden
                                className="pointer-events-none absolute inset-0 overflow-hidden rounded-full"
                            >
                                <motion.div
                                    className="absolute -inset-y-10 -left-1/2 h-[200%] w-16 rotate-12 bg-gradient-to-r from-transparent via-white/25 to-transparent"
                                    initial={{ x: "-150%" }}
                                    animate={{ x: ["-150%", "150%"] }}
                                    transition={{ duration: 2.6, ease: "linear", repeat: Infinity, repeatDelay: 3 }}
                                />
                            </motion.div>

                            {/* thin neon ring */}
                            <span className="pointer-events-none absolute inset-0 rounded-full ring-2 ring-blue-400/30" />
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
