// src/pages/MoreAboutMe.tsx
import { useMemo, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
    ChevronLeft,
    ChevronRight,
    ArrowUpRight,
    X,
} from "lucide-react";

/** ---------- IMAGES (replace with your actual files) ---------- */
// Big portrait (right column)
import portrait from "../assets/Dion2.png";

// Skills images
import skillCajon from "../assets/more/skill-cajon.jpg";
import skillPiano from "../assets/more/skill-piano.jpg";
import skillPresenting from "../assets/more/skill-presenting.jpg";

// Designing viewer images (3+ works best)
import design1 from "../assets/more/design-1.jpg";
import design2 from "../assets/more/design-2.jpg";
import design3 from "../assets/more/design-3.jpg";

// Dionz section image
import dionzHero from "../assets/more/dionz.jpg";

// Gallery images (add as many as you like)
import g1 from "../assets/more/gal-1.jpg";
import g2 from "../assets/more/gal-2.jpg";
import g3 from "../assets/more/gal-3.jpg";
import g4 from "../assets/more/gal-4.jpg";
import g5 from "../assets/more/gal-5.jpg";
import g6 from "../assets/more/gal-6.jpg";
import g7 from "../assets/more/gal-7.jpg";
import g8 from "../assets/more/gal-8.jpg";
import g9 from "../assets/more/gal-9.jpg";
import g10 from "../assets/more/gal-10.jpg";
import g11 from "../assets/more/gal-11.jpg";
import g12 from "../assets/more/gal-12.jpg";
import g13 from "../assets/more/gal-13.jpg";
import g14 from "../assets/more/gal-14.jpg";
import g15 from "../assets/more/gal-15.jpg";
import g16 from "../assets/more/gal-16.jpg";

/** ---------- DATA ---------- */

const skills = [
    {
        title: "Cajón Player",
        img: skillCajon,
        body:
            "I’ve performed cajón at 10+ professional events. I love blending Latin grooves with modern arrangements and locking in with bands to lift the room’s energy.",
    },
    {
        title: "Piano Player",
        img: skillPiano,
        body:
            "Mostly self-taught—with a big assist from YouTube—I play contemporary pieces and chord progressions for songwriting and relaxed jamming.",
    },
    {
        title: "Presenting",
        img: skillPresenting,
        body:
            "I’ve delivered 5+ professional presentations—tech demos, pitches, and showcases—focusing on clarity, structure, and confident storytelling.",
    },
];

const designingImages = [design1, design2, design3];

const galleryImages = [g1, g2, g3, g4, g5, g6, g7, g8, g9, g10, g11, g12, g13, g14, g15, g16];

/** ---------- HELPERS ---------- */
function mod(n: number, m: number) {
    return ((n % m) + m) % m;
}

/** ---------- PAGE ---------- */
export default function MoreAboutMe() {
    const [skillIndex, setSkillIndex] = useState(0);
    const [designIndex, setDesignIndex] = useState(0);
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

    const currentSkill = useMemo(() => skills[skillIndex], [skillIndex]);

    const prevSkill = () => setSkillIndex((i) => mod(i - 1, skills.length));
    const nextSkill = () => setSkillIndex((i) => mod(i + 1, skills.length));

    const prevDesign = () => setDesignIndex((i) => mod(i - 1, designingImages.length));
    const nextDesign = () => setDesignIndex((i) => mod(i + 1, designingImages.length));

    const openLightbox = useCallback((i: number) => setLightboxIndex(i), []);
    const closeLightbox = useCallback(() => setLightboxIndex(null), []);
    const prevLightbox = useCallback(
        () => setLightboxIndex((i) => (i === null ? i : mod(i - 1, galleryImages.length))),
        []
    );
    const nextLightbox = useCallback(
        () => setLightboxIndex((i) => (i === null ? i : mod(i + 1, galleryImages.length))),
        []
    );

    return (
        <main className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white overflow-x-clip">
        {/* HEADER */}
            <div className="mx-auto w-[95%] max-w-7xl pt-10 pb-6 sm:pt-14 sm:pb-10">
                <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    More About Me
                </h1>
                <p className="mt-3 max-w-3xl text-gray-300 text-sm sm:text-base leading-relaxed">
                    Hi 👋, I’m <span className="text-white font-semibold">Dion Fernando</span>—a
                    22-year-old full-stack developer from <span className="text-white font-medium">Moratuwa, Sri Lanka</span>. I studied at{" "}
                    <span className="text-white font-medium">Lyceum International School, Panadura</span>, kick-started my coding journey at{" "}
                    <span className="text-white font-medium">Esost Metro Campus</span>, completed the{" "}
                    <span className="text-white font-medium">DiTec Diploma (2018)</span>, followed by an{" "}
                    <span className="text-white font-medium">HND (2021)</span>. I’m currently pursuing the{" "}
                    <span className="text-white font-medium">GDSE program at IJSE</span> and was awarded{" "}
                    <span className="text-white font-semibold">2nd place</span> for my 1st-semester project among{" "}
                    <span className="text-white font-medium">100+ students</span>. I build modern, reliable software that feels great to use.
                </p>
            </div>

            {/* TWO-COLUMN HERO: left = long description, right = sticky image */}
            <section className="mx-auto w-[95%] max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start overflow-x-clip">
            {/* LEFT — narrative */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.4 }}
                    className="lg:col-span-7 space-y-5 sm:space-y-6"
                >
                    <div className="rounded-2xl border border-white/15 bg-white/5 p-5 sm:p-6 md:p-8 shadow-lg backdrop-blur-md">
                        <h2 className="text-xl sm:text-2xl font-semibold text-blue-300">Who I Am</h2>
                        <p className="mt-3 text-sm sm:text-base text-gray-300 leading-relaxed">
                            I love turning ideas into production-ready experiences—clean code, clean UI, and a focus
                            on performance. I’m fascinated by how design and engineering meet: motion that guides,
                            layouts that breathe, and systems that scale. Whether I’m building a library system, a
                            booking platform, or microservices, I aim for clarity, maintainability, and a great UX.
                        </p>
                        <p className="mt-3 text-sm sm:text-base text-gray-300 leading-relaxed">
                            I’m a learn-by-doing person: ship fast, measure, iterate. I enjoy working in teams,
                            presenting ideas, and documenting decisions. Outside code, I’m into music, content,
                            and visual design—which all feed back into how I approach products.
                        </p>
                    </div>

                    {/* SKILLS — show one at a time, image left / text right */}
                    <div className="rounded-2xl border border-white/15 bg-white/5 p-5 sm:p-6 md:p-8 shadow-lg backdrop-blur-md">
                        <div className="flex items-center justify-between">
                            <h2 className="text-xl sm:text-2xl font-semibold text-blue-300">Skills</h2>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={prevSkill}
                                    className="rounded-full border border-white/20 bg-white/10 p-2 hover:bg-white/15"
                                    aria-label="Previous skill"
                                >
                                    <ChevronLeft className="h-4 w-4" />
                                </button>
                                <button
                                    onClick={nextSkill}
                                    className="rounded-full border border-white/20 bg-white/10 p-2 hover:bg-white/15"
                                    aria-label="Next skill"
                                >
                                    <ChevronRight className="h-4 w-4" />
                                </button>
                            </div>
                        </div>

                        <div className="mt-5 grid grid-cols-1 sm:grid-cols-12 gap-5 sm:gap-6 items-center">
                            {/* image left */}
                            <motion.div
                                key={currentSkill.title + "-img"}
                                initial={{ opacity: 0, x: -14 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.35 }}
                                className="sm:col-span-5"
                            >
                                <div className="relative">
                                    <div className="absolute -top-3 -left-3 w-full h-full rounded-2xl border-2 border-blue-400/25 -z-10" />
                                    <img
                                        src={currentSkill.img}
                                        alt={currentSkill.title}
                                        className="w-full aspect-[4/3] object-cover rounded-2xl shadow-[0_0_50px_rgba(59,130,246,0.18)]"
                                    />
                                </div>
                            </motion.div>

                            {/* text right */}
                            <motion.div
                                key={currentSkill.title + "-text"}
                                initial={{ opacity: 0, x: 14 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.35 }}
                                className="sm:col-span-7"
                            >
                                <h3 className="text-lg sm:text-xl font-semibold text-white">{currentSkill.title}</h3>
                                <p className="mt-2 text-sm sm:text-base text-gray-300 leading-relaxed">
                                    {currentSkill.body}
                                </p>
                                <p className="mt-3 text-xs text-gray-400">
                                    {skillIndex + 1} / {skills.length}
                                </p>
                            </motion.div>
                        </div>
                    </div>

                    {/* DESIGNING — V-shape viewer */}
                    <div className="rounded-2xl border border-white/15 bg-white/5 p-5 sm:p-6 md:p-8 shadow-lg backdrop-blur-md">
                        <div className="flex items-center justify-between">
                            <h2 className="text-xl sm:text-2xl font-semibold text-blue-300">Designing</h2>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={prevDesign}
                                    className="rounded-full border border-white/20 bg-white/10 p-2 hover:bg-white/15"
                                    aria-label="Previous design"
                                >
                                    <ChevronLeft className="h-4 w-4" />
                                </button>
                                <button
                                    onClick={nextDesign}
                                    className="rounded-full border border-white/20 bg-white/10 p-2 hover:bg-white/15"
                                    aria-label="Next design"
                                >
                                    <ChevronRight className="h-4 w-4" />
                                </button>
                            </div>
                        </div>

                        <p className="mt-2 text-sm sm:text-base text-gray-300">
                            I’ve created <span className="text-white font-medium">20+ professional posts</span> for the IJSE Student
                            Committee, plus logos, thumbnails, and social media artwork for others.
                        </p>

                        {/* V-stack viewer */}
                        <div className="relative mt-6 h-[280px] sm:h-[320px] md:h-[360px] overflow-x-clip">
                        {designingImages.map((src, i) => {
                                const rel = mod(i - designIndex, designingImages.length); // 0=center, 1=right, 2=left (with 3 items)
                               // const isCenter = rel === 0;
                                const isRight = rel === 1;
                                const isLeft = rel === designingImages.length - 1;

                                const base =
                                    "absolute left-1/2 -translate-x-1/2 rounded-2xl overflow-hidden shadow-xl cursor-pointer select-none";
                                const imgClass = "h-full w-full object-cover";
                                let style =
                                    "top-0 h-full w-[68%] sm:w-[60%] z-10 opacity-100 translate-y-0 rotate-0 scale-100";
                                if (isLeft) {
                                    style =
                                        "top-6 h-[90%] w-[56%] sm:w-[50%] -translate-x-[58%] -rotate-6 scale-95 opacity-60 z-[5]";
                                } else if (isRight) {
                                    style =
                                        "top-6 h-[90%] w-[56%] sm:w-[50%] translate-x-[-42%] rotate-6 scale-95 opacity-60 z-[5]";
                                }

                                return (
                                    <motion.div
                                        key={i}
                                        onClick={() => setDesignIndex(i)}
                                        className={`${base} ${style}`}
                                        initial={{ opacity: 0.4 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.35 }}
                                    >
                                        <img src={src} alt={`Design ${i + 1}`} className={imgClass} />
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>

                    {/* DIONZ — side venture */}
                    <div className="rounded-2xl border border-white/15 bg-white/5 p-5 sm:p-6 md:p-8 shadow-lg backdrop-blur-md">
                        <h2 className="text-xl sm:text-2xl font-semibold text-blue-300">Dionz</h2>
                        <div className="mt-4 grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
                            <div className="md:col-span-6">
                                <img
                                    src={dionzHero}
                                    alt="Dionz watch collection"
                                    className="w-full rounded-2xl object-cover shadow-[0_0_50px_rgba(59,130,246,0.18)]"
                                />
                            </div>
                            <div className="md:col-span-6">
                                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                                    I run a small watch business called <span className="text-white font-medium">“Dionz”</span>,
                                    launched in <span className="text-white font-medium">August 2025</span>. It started as a passion
                                    project and now doubles as a side income—focused on tasteful curation and honest service.
                                </p>
                                <a
                                    href="https://dionz.vercel.app/" /* TODO: replace with your real website */
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-4 inline-flex items-center gap-2 rounded-xl border border-blue-400/40 bg-blue-500/10 px-4 py-2 text-sm text-blue-200 hover:bg-blue-500/20"
                                >
                                    Visit Website <ArrowUpRight className="h-4 w-4" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* GALLERY */}
                    <div className="rounded-2xl border border-white/15 bg-white/5 p-5 sm:p-6 md:p-8 shadow-lg backdrop-blur-md">
                        <h2 className="text-xl sm:text-2xl font-semibold text-blue-300">Gallery</h2>
                        <p className="mt-2 text-sm sm:text-base text-gray-300">
                            A few moments and portraits. Click any image to view.
                        </p>
                        <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
                            {galleryImages.map((src, i) => (
                                <button
                                    key={i}
                                    onClick={() => openLightbox(i)}
                                    className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5"
                                    aria-label={`Open image ${i + 1}`}
                                >
                                    <img
                                        src={src}
                                        alt={`Gallery ${i + 1}`}
                                        className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="pt-4 pb-12">
                        <Link to="/" className="text-sm text-gray-400 hover:text-white">
                            ← Back to Home
                        </Link>
                    </div>
                </motion.div>

                {/* RIGHT — big sticky portrait */}
                <motion.aside
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.45 }}
                    className="lg:col-span-5 lg:sticky lg:top-20 overflow-x-clip"
                >
                    <div className="relative">
                        <div className="absolute -top-5 -right-5 w-[92%] h-[92%] rounded-3xl border-4 border-blue-400/15 -z-10" />
                        <img
                            src={portrait}
                            alt="Dion Fernando portrait"
                            className="w-full rounded-3xl object-cover shadow-[0_0_80px_rgba(59,130,246,0.18)]"
                        />
                    </div>
                </motion.aside>
            </section>

            {/* LIGHTBOX for Gallery */}
            <AnimatePresence>
                {lightboxIndex !== null && (
                    <motion.div
                        className="fixed inset-0 z-[70] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <div className="relative w-full max-w-5xl">
                            <button
                                onClick={closeLightbox}
                                className="absolute -top-10 right-0 rounded-full bg-white/10 p-2 hover:bg-white/15"
                                aria-label="Close lightbox"
                            >
                                <X className="h-5 w-5" />
                            </button>

                            <div className="flex items-center gap-3 sm:gap-4">
                                <button
                                    onClick={prevLightbox}
                                    className="shrink-0 rounded-full bg-white/10 p-3 hover:bg-white/15"
                                    aria-label="Previous image"
                                >
                                    <ChevronLeft className="h-5 w-5" />
                                </button>

                                <motion.img
                                    key={lightboxIndex}
                                    src={galleryImages[lightboxIndex]}
                                    alt={`Gallery large ${lightboxIndex + 1}`}
                                    className="max-h-[75vh] w-full rounded-2xl object-contain border border-white/10 bg-black/30"
                                    initial={{ opacity: 0, scale: 0.98 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.25 }}
                                />

                                <button
                                    onClick={nextLightbox}
                                    className="shrink-0 rounded-full bg-white/10 p-3 hover:bg-white/15"
                                    aria-label="Next image"
                                >
                                    <ChevronRight className="h-5 w-5" />
                                </button>
                            </div>

                            <p className="mt-3 text-center text-xs text-gray-300">
                                {lightboxIndex + 1} / {galleryImages.length}
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    );
}
