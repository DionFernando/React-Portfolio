// src/components/Projects.tsx
import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { PROJECTS, type Project } from "../data/projects";  // ✅ imported from separate file

const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
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
            <div className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl" />

            <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full">
                <img src={image} alt={title} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>

            <div className="relative z-[1] p-4 sm:p-5">
                <h3 className="text-base sm:text-lg font-semibold text-white">{title}</h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-gray-300">{description}</p>

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

type ProjectsProps = {
    onViewAll: () => void;
};

export default function Projects({ onViewAll }: ProjectsProps) {
    return (
        <section
            id="projects"
            className="relative isolate bg-gradient-to-b from-gray-900 to-black py-16 md:py-20 text-white overflow-x-clip"
        >
            <div className="pointer-events-none absolute -left-24 top-10 h-56 w-56 rounded-full bg-blue-500/10 blur-3xl" />
            <div className="pointer-events-none absolute -right-24 bottom-10 h-56 w-56 rounded-full bg-blue-400/10 blur-3xl" />

            <div className="mx-auto w-[95%] max-w-7xl">
                <div className="mb-8 md:mb-10">
                    <h2 className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl md:text-5xl">
                        Projects
                    </h2>
                    <p className="mt-2 max-w-2xl text-xs text-gray-400 sm:text-sm md:text-base">
                        Selected builds I’m proud of. Explore the full list for more.
                    </p>
                </div>

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

                <div className="mt-8 flex justify-center">
                    <button
                        type="button"
                        onClick={onViewAll}
                        className="rounded-2xl border border-white/20 bg-white/10 px-5 py-3 text-sm text-white hover:bg-white/15"
                    >
                        View all projects →
                    </button>
                </div>
            </div>
        </section>
    );
}
