import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import innovesta from "../assets/achievements/innovesta.png";
//import innovesta2 from "../assets/achievements/innovesta2.png";
import semester from "../assets/achievements/semester.png";
//import semester2 from "../assets/achievements/semester2.png";
import ditec from "../assets/achievements/DITEC.png";
//import ditec2 from "../assets/achievements/DITEC2.png";
import hnd from "../assets/achievements/HND.png";
//import hnd2 from "../assets/achievements/HND2.png";


type Achievement = {
    imgs: string[];
    alt: string;
    caption: string;
    tag?: string;
};

const ACHIEVEMENTS: Achievement[] = [
    {
        imgs: [
            innovesta
            //innovesta2
        ],
        alt: "Receiving award",
        caption: "Innovesta 2024",
    },
    {
        imgs: [
            semester
            //semester2
        ],
        alt: "Team on stage",
        caption: "2nd Place - Semester Project",
    },
    {
        imgs: [
            ditec
            //ditec2
        ],
        alt: "Graduation certificate",
        caption: "DITEC Graduation",
    },

    {
        imgs: [
            hnd
           // hnd2
        ],
        alt: "Graduation certificate",
        caption: "HND Graduation",
    },
];

// animations
const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const item = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

function Card({ imgs, alt, caption, tag }: Achievement) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((i) => (i + 1) % imgs.length);
        }, 3000);
        return () => clearInterval(timer);
    }, [imgs.length]);

    return (
        <motion.li variants={item} whileHover={{ y: -2 }} className="group">
            <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-white/5 shadow-lg backdrop-blur-md">
                <div className="pointer-events-none absolute -inset-16 rounded-[3rem] bg-blue-500/10 blur-3xl" />
                <img
                    src={imgs[index]}
                    alt={alt}
                    loading="lazy"
                    className="relative z-[1] h-full w-full rounded-2xl object-cover object-center aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9] transition-all duration-500"
                />
                {tag && (
                    <span className="absolute right-2 top-2 z-[2] rounded-md border border-white/20 bg-black/40 px-2 py-0.5 text-[10px] font-medium text-gray-200 backdrop-blur group-hover:bg-black/50">
                        {tag}
                    </span>
                )}
                <div className="absolute inset-0 z-[1] bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
            <p className="mx-auto mt-2 max-w-[40ch] text-center text-[11px] leading-relaxed text-gray-300 sm:mt-3 sm:text-sm md:text-base">
                {caption}
            </p>
        </motion.li>
    );
}

export default function Achievements() {
    return (
        <section
            id="achievements"
            className="relative isolate bg-gradient-to-b from-gray-900 to-black py-16 md:py-20 text-white overflow-x-clip"
        >
            <div className="pointer-events-none absolute -left-24 top-16 h-56 w-56 rounded-full bg-blue-500/10 blur-3xl" />
            <div className="pointer-events-none absolute -right-24 bottom-12 h-56 w-56 rounded-full bg-blue-400/10 blur-3xl" />

            <div className="mx-auto w-[95%] max-w-7xl">
                <div className="mb-8 md:mb-10">
                    <h2 className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl md:text-5xl">
                        Achievements
                    </h2>
                    <p className="mt-2 max-w-2xl text-xs text-gray-400 sm:text-sm md:text-base">
                        Highlights from events, awards, and milestones that shaped my journey.
                    </p>
                </div>
                <motion.ul
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3 lg:gap-8"
                >
                    {ACHIEVEMENTS.map((a, i) => (
                        <Card key={i} {...a} />
                    ))}
                </motion.ul>
            </div>
        </section>
    );
}