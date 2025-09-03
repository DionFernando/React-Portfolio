import { motion } from "framer-motion";
import { BookOpen, GraduationCap } from "lucide-react";
import React from "react";

// --- Data -------------------------------------------------------------

type EduItem = {
    year: string;
    title: string;
    icon: React.ElementType;
    note?: string;
};

const EDUCATION: EduItem[] = [
    { year: "2018", title: "GCE O/L Examination", icon: BookOpen },
    { year: "2020", title: "Diploma in Information Technology (DITEC)", icon: GraduationCap },
    { year: "2021", title: "GCE A/L Examination", icon: BookOpen },
    { year: "2022", title: "Higher National Diploma (HND)", icon: GraduationCap },
    { year: "2025", title: "Graduate Diploma in Software Engineering (GDSE)", icon: GraduationCap },
];

// --- Animation --------------------------------------------------------

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// --- Card -------------------------------------------------------------

function EduCard({ year, title, icon: Icon, note }: EduItem) {
    return (
        <motion.li
            variants={item}
            whileHover={{ y: -2, scale: 1.01 }}
            className="group relative flex items-center gap-3 sm:gap-4 rounded-xl border border-white/20 bg-white/10 px-3 py-2 sm:px-4 sm:py-3 shadow-md backdrop-blur-md"
        >
            {/* icon */}
            <div className="flex h-8 w-8 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 ring-1 ring-inset ring-blue-500/30">
                <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400" />
            </div>

            {/* content inline */}
            <div className="flex w-full flex-col sm:flex-row sm:items-center sm:gap-3">
        <span className="text-base sm:text-lg md:text-xl font-semibold tracking-tight text-white">
          {year}
        </span>
                <span className="text-xs sm:text-sm md:text-base leading-tight text-gray-300">
          {title}
        </span>
                {note && <span className="text-[10px] sm:text-xs text-gray-400">{note}</span>}
            </div>
        </motion.li>
    );
}

// --- Section ----------------------------------------------------------

export default function Education() {
    return (
        <section
            id="education"
            className="relative isolate bg-gradient-to-b from-gray-900 to-black py-20 md:py-24 text-white overflow-x-clip"
        >
            {/* background accents */}
            <div className="pointer-events-none absolute -left-20 top-32 h-56 w-56 rounded-full bg-blue-500/10 blur-3xl" />
            <div className="pointer-events-none absolute -right-20 bottom-24 h-56 w-56 rounded-full bg-blue-400/10 blur-3xl" />

            <div className="mx-auto w-[95%] max-w-5xl">
                {/* header */}
                <div className="mb-10 flex flex-col items-start gap-2 md:mb-12">
                    <h2 className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-transparent">
                        Education
                    </h2>
                    <p className="max-w-2xl text-xs sm:text-sm md:text-base text-gray-400">
                        A quick snapshot of my academic journey — built on curiosity, discipline, and a love for technology.
                    </p>
                </div>

                {/* compact list (single column) */}
                <motion.ul
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="flex flex-col gap-3 sm:gap-4"
                >
                    {EDUCATION.map((e) => (
                        <EduCard key={e.year} {...e} />
                    ))}
                </motion.ul>
            </div>
        </section>
    );
}
