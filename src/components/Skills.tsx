// src/sections/Skills.tsx
import React from "react";
import { motion } from "framer-motion";
import {
    Code2,
    Layout,
    Smartphone,
    Server,
    Database,
    Boxes,
    Wrench,
} from "lucide-react";

type SkillGroup = {
    title: string;
    icon: React.ElementType;
    items: string[];
};

const SKILLS: SkillGroup[] = [
    {
        title: "Languages",
        icon: Code2,
        items: ["Java", "Python", "JavaScript", "TypeScript", "SQL", "NoSQL"],
    },
    {
        title: "Frontend",
        icon: Layout,
        items: ["React", "Next.js", "Tailwind CSS", "Bootstrap", "HTML", "CSS"],
    },
    {
        title: "Mobile",
        icon: Smartphone,
        items: ["React Native", "NativeWind"],
    },
    {
        title: "Backend & APIs",
        icon: Server,
        items: ["Spring Boot", "Node.js", "Express.js", "Java EE • JSP", "Hibernate", "JWT"],
    },
    {
        title: "Databases",
        icon: Database,
        items: ["MySQL", "MongoDB", "Firebase Firestore"],
    },
    {
        title: "Microservices & Infra",
        icon: Boxes,
        items: ["API Gateway", "Eureka", "Docker"],
    },
    {
        title: "Tools & Platforms",
        icon: Wrench,
        items: [
            "Git/GitHub",
            "Postman",
            "Firebase",
            "Mockoon",
            "Scene Builder",
            "Cisco Packet Tracer",
            "Cloudinary",
            "Figma",
            "DrawIO",
            "Canva",
            "Filmora",
            "Premiere Pro",
            "Capcut",
            "Photoshop",
        ],
    },
    {
        title: "Creative & Multimedia Skills",
        icon: Wrench,
        items: ["Graphic Designing", "Photo & Video Editing", "Musical Instruments", "Social Media Influencing"],
    },
];

const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
};

const item = {
    hidden: { opacity: 0, y: 14 },
    show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

function Badge({ text }: { text: string }) {
    return (
        <span className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-gray-200 transition">
      <span className="h-1.5 w-1.5 rounded-full bg-blue-400/80 shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
            {text}
    </span>
    );
}

function SkillCard({ title, icon: Icon, items }: SkillGroup) {
    return (
        <motion.li
            variants={item}
            whileHover={{ y: -4 }}
            className="group relative overflow-hidden rounded-2xl border border-white/15 bg-white/5 p-5 shadow-lg backdrop-blur-md"
        >
            {/* soft glow + shine on hover */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl" />
            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute -left-20 top-1/4 h-28 w-28 rotate-45 bg-gradient-to-r from-transparent via-white/10 to-transparent blur-xl" />
            </div>

            <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/10 ring-1 ring-inset ring-blue-500/30">
                        <Icon className="h-5 w-5 text-blue-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{title}</h3>
                </div>
                <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-xs text-gray-200">{items.length}</span>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
                {items.map((s) => (
                    <Badge key={s} text={s} />
                ))}
            </div>

            {/* bottom gradient underline */}
            <div className="absolute inset-x-0 bottom-0 h-0.5 translate-y-[1px] bg-gradient-to-r from-transparent via-blue-400/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </motion.li>
    );
}

export default function Skills() {
    return (
        <section
            id="skills"
            className="relative isolate bg-gradient-to-b from-black to-gray-900 py-16 md:py-20 text-white overflow-x-clip"
        >
            {/* blue accents */}
            <div className="pointer-events-none absolute -left-24 top-10 h-56 w-56 rounded-full bg-blue-500/10 blur-3xl" />
            <div className="pointer-events-none absolute -right-24 bottom-10 h-56 w-56 rounded-full bg-blue-400/10 blur-3xl" />

            {/* subtle texture */}
            <div
                aria-hidden
                className="absolute inset-0 opacity-[0.07]"
                style={{
                    backgroundImage: "radial-gradient(rgba(255,255,255,0.12) 1px, transparent 1px)",
                    backgroundSize: "22px 22px",
                }}
            />

            <div className="relative mx-auto w-[95%] max-w-7xl">
                <div className="mb-8 md:mb-10">
                    <div className="flex items-center gap-3">
                        <h2 className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl md:text-5xl">
                            Skills
                        </h2>
                    </div>
                    <p className="mt-2 max-w-2xl text-xs text-gray-400 sm:text-sm md:text-base">
                        A snapshot of the tools and technologies I use to design, build, and ship.
                    </p>
                </div>

                {/* grid */}
                <motion.ul
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
                >
                    {SKILLS.map((g) => (
                        <SkillCard key={g.title} {...g} />
                    ))}
                </motion.ul>


            </div>
        </section>
    );
}
