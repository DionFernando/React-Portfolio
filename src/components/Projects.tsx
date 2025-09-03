import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, X } from "lucide-react";

import carnage from "../assets/projects/carnage.png";
import booking from "../assets/projects/booking.png";
import sneakerz from "../assets/projects/sneakerz.png";
import bookclub from "../assets/projects/BookClub.png";

// We’ll reuse your ProjectsAll page contents inside a modal
import ProjectsAll from "../pages/ProjectsAll";

export type Project = {
    title: string;
    description: string;
    image: string;
    github: string;
};

// eslint-disable-next-line react-refresh/only-export-components
export const PROJECTS: Project[] = [
    {
        title: "Carnage Management System",
        description: "Full-stack app with auth, CRUD, and real-time updates.",
        image: carnage,
        github: "https://github.com/DionFernando/CarnageManagement.git",
    },
    {
        title: "Booking.com",
        description:
            "A hotel and car booking platform with search, filters, and booking features.",
        image: booking,
        github: "https://github.com/DionFernando/Booking.com.git",
    },
    {
        title: "Sneakerz E-commerce",
        description: "E-commerce site with product pages, cart, and checkout flow.",
        image: sneakerz,
        github: "https://github.com/DionFernando/SneakerZ-EcommerceWebsite.git",
    },
    {
        title: "BookClub Library Management System",
        description:
            "A library management system with user auth, book catalog, and borrowing features.",
        image: bookclub,
        github: "https://github.com/DionFernando/BookClub-frontend.git",
    },
];

// animations
const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.08, delayChildren: 0.05 },
    },
};
const item = {
    hidden: { opacity: 0, y: 14 },
    show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

function ProjectCard({ title, description, image, github }: Project) {
    return (
        <motion.li
            variants={item}
            whileHover={{ y: -4 }}
            className="group relative overflow-hidden rounded-2xl border border-white/15 bg-white/5 shadow-lg backdrop-blur-md"
        >
            {/* soft glow */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl" />

            {/* image */}
            <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full">
                <img
                    src={image}
                    alt={title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>

            {/* content */}
            <div className="relative z-[1] p-4 sm:p-5">
                <h3 className="text-base sm:text-lg font-semibold text-white">{title}</h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-gray-300">
                    {description}
                </p>

                <div className="mt-4">
                    <a
                        href={github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl border border-blue-400/40 bg-blue-500/10 px-3 py-2 text-xs sm:text-sm text-blue-200 hover:bg-blue-500/20"
                    >
                        <Github className="h-4 w-4" />
                        View on GitHub
                    </a>
                </div>
            </div>
        </motion.li>
    );
}

export default function Projects() {
    const [openAll, setOpenAll] = useState(false);

    // Close modal on ESC
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpenAll(false);
        if (openAll) window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [openAll]);

    return (
        <section
            id="projects"
            className="relative isolate bg-gradient-to-b from-gray-900 to-black py-16 md:py-20 text-white overflow-x-clip"
        >
            <div className="pointer-events-none absolute -left-24 top-10 h-56 w-56 rounded-full bg-blue-500/10 blur-3xl" />
            <div className="pointer-events-none absolute -right-24 bottom-10 h-56 w-56 rounded-full bg-blue-400/10 blur-3xl" />

            <div className="mx-auto w-[95%] max-w-7xl">
                {/* header */}
                <div className="mb-8 md:mb-10">
                    <h2 className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl md:text-5xl">
                        Projects
                    </h2>
                    <p className="mt-2 max-w-2xl text-xs text-gray-400 sm:text-sm md:text-base">
                        Selected builds I’m proud of. Explore the full list for more.
                    </p>
                </div>

                {/* 2 cols on mobile, 4 on lg, 1 on very narrow */}
                <motion.ul
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4 max-[360px]:grid-cols-1"
                >
                    {PROJECTS.map((p) => (
                        <ProjectCard key={p.title} {...p} />
                    ))}
                </motion.ul>

                {/* View all */}
                <div className="mt-8 flex justify-center">
                    <button
                        type="button"
                        onClick={() => setOpenAll(true)}
                        className="rounded-2xl border border-white/20 bg-white/10 px-5 py-3 text-sm text-white hover:bg-white/15"
                    >
                        View all projects →
                    </button>
                </div>
            </div>

            {/* Fullscreen modal with all projects (no router needed) */}
            <AnimatePresence>
                {openAll && (
                    <motion.div
                        className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setOpenAll(false)}
                    >
                        <motion.div
                            initial={{ y: 24, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 24, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="absolute left-1/2 top-1/2 w-[95%] max-w-7xl -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-black to-gray-900 shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-white/10 bg-black/60 px-4 py-3">
                                <h3 className="text-lg font-semibold">All Projects</h3>
                                <button
                                    onClick={() => setOpenAll(false)}
                                    className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-3 py-1.5 text-sm hover:bg-white/15"
                                >
                                    <X className="h-4 w-4" />
                                    Close
                                </button>
                            </div>

                            {/* Scrollable content */}
                            <div className="max-h-[75vh] overflow-y-auto">
                                <ProjectsAll />
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
