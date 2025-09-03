// src/components/YouTube.tsx
import { useState, useRef, useEffect } from "react";
import { motion, useInView, useMotionValue, animate } from "framer-motion";
import { Youtube } from "lucide-react";

type Channel = {
    name: string;
    avatar: string;
    channelUrl: string;
    featuredVideoId: string;
    blurb?: string;
};

const CHANNELS: Channel[] = [
    // {
    //   name: "Dion Fernando",
    //   avatar: "src/assets/youtube/dion.jpg",
    //   channelUrl: "https://www.youtube.com/@DionFernando",
    //   featuredVideoId: "dQw4w9WgXcQ",
    //   blurb: "Tech, dev logs, and behind-the-scenes from my projects.",
    // },
    {
        name: "D ROX",
        avatar: "src/assets/youtube/DRox.png",
        channelUrl: "https://youtu.be/E8iBF8DYJXo?si=Y_HK5p63fgKumLzk",
        featuredVideoId: "E8iBF8DYJXo",
        blurb:
            "I Broke 10 Basketball World Records | මම ලෝක වාර්තා 10ක් බිඳ දැමුවා | Guinness World Record",
    },
    {
        name: "D ROX Gaming",
        avatar: "src/assets/youtube/DRoxGaming.png",
        channelUrl:
            "https://www.youtube.com/live/Z4NK_jGUQdw?si=g4ONLiIDfdfT-cwQ",
        featuredVideoId: "Z4NK_jGUQdw",
        blurb: "Aluth Update eka 😱",
    },
    {
        name: "Roxie",
        avatar: "src/assets/youtube/Roxie.png",
        channelUrl:
            "https://youtube.com/shorts/BdhgWzYlmzI?si=vs1DxY1z8iPVMCtZ",
        featuredVideoId: "BdhgWzYlmzI",
        blurb: "Dog Lost at Sea, Saved by a Dolphin | SunnyPaws Short Story",
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

/** Count-up stat that starts when scrolled into view */
function Stat({
                  value,
                  label,
                  suffix = "+",
              }: {
    value: number;
    label: string;
    suffix?: string;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });
    const mv = useMotionValue(0);
    const [display, setDisplay] = useState("0");

    useEffect(() => {
        if (!inView) return;
        const controls = animate(mv, value, {
            duration: 1.8,
            ease: "easeOut",
            onUpdate: (v) =>
                setDisplay(new Intl.NumberFormat().format(Math.round(v))),
        });
        return () => controls.stop();
    }, [inView, value, mv]);

    return (
        <div
            ref={ref}
            className="rounded-2xl border border-red-400/20 bg-red-500/10 p-4 text-center shadow-lg backdrop-blur-md"
        >
            <div className="text-2xl font-extrabold text-red-200 sm:text-3xl">
                {display}
                {suffix}
            </div>
            <div className="mt-1 text-[11px] text-red-100/80 sm:text-xs">{label}</div>
        </div>
    );
}

/** Lightweight YouTube: thumbnail until click, with responsive pulsing ripple */
function LiteYouTube({ videoId, title }: { videoId: string; title: string }) {
    const [play, setPlay] = useState(false);
    const thumb = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

    return play ? (
        <div className="relative aspect-video w-full overflow-hidden rounded-2xl">
            <iframe
                className="absolute inset-0 h-full w-full rounded-2xl"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                loading="lazy"
            />
        </div>
    ) : (
        <button
            type="button"
            onClick={() => setPlay(true)}
            className="group relative aspect-video w-full overflow-hidden rounded-2xl focus:outline-none"
            aria-label={`Play ${title}`}
        >
            <img
                src={thumb}
                alt={`${title} thumbnail`}
                loading="lazy"
                className="h-full w-full object-cover"
            />

            {/* subtle red border/glow */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-2 ring-red-500/60 group-hover:ring-red-500/90 shadow-[0_0_40px_-10px_rgba(239,68,68,0.65)]" />

            {/* pulsing ripple + play circle */}
            <div className="pointer-events-none absolute inset-0 grid place-items-center">
                <motion.div
                    className="rounded-full border border-red-400/40"
                    style={{
                        width: "clamp(60px,18vw,100px)",
                        height: "clamp(60px,18vw,100px)",
                    }}
                    animate={{ scale: [1, 1.12, 1], opacity: [0.7, 0.9, 0.7] }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                />
            </div>

            <div className="absolute inset-0 grid place-items-center">
                <div
                    className="
            grid place-items-center rounded-full bg-red-600 text-white shadow-lg transition
            group-hover:scale-105
            w-[clamp(40px,12vw,64px)] h-[clamp(40px,12vw,64px)]
          "
                >
                    <svg
                        viewBox="0 0 24 24"
                        className="fill-current w-[clamp(14px,4vw,28px)] h-[clamp(14px,4vw,28px)]"
                        aria-hidden="true"
                    >
                        <path d="M8 5v14l11-7z" />
                    </svg>
                </div>
            </div>

            {/* top gradient for readability */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </button>
    );
}

function ChannelCard({
                         name,
                         avatar,
                         channelUrl,
                         featuredVideoId,
                         blurb,
                     }: Channel) {
    return (
        <motion.li variants={item} className="group">
            <div className="mb-3 flex items-center gap-3">
                <img
                    src={avatar}
                    alt={`${name} avatar`}
                    className="h-10 w-10 rounded-full ring-1 ring-white/20"
                />
                <a
                    href={channelUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-base sm:text-lg font-semibold text-white transition hover:text-red-300"
                >
                    {name}
                </a>
            </div>

            {/* glass card with red accents (softer than solid red block) */}
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-lg backdrop-blur-md">
                {/* red glow accents */}
                <div className="pointer-events-none absolute -inset-16 rounded-[3rem] bg-red-500/10 blur-3xl" />
                <div className="relative z-[1]">
                    <LiteYouTube videoId={featuredVideoId} title={`${name} — featured video`} />
                </div>
            </div>

            {blurb && (
                <p className="mx-auto mt-3 max-w-[50ch] text-center text-xs text-gray-200 sm:text-sm">
                    {blurb}
                </p>
            )}

            <div className="mt-3 flex justify-center">
                <a
                    href={channelUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-2xl border border-red-400/30 bg-red-500/10 px-4 py-2 text-sm text-red-100 hover:bg-red-500/20"
                >
                    Watch more →
                </a>
            </div>
        </motion.li>
    );
}

export default function YouTubeSection() {
    return (
        <section
            id="youtube"
            className="relative isolate bg-gradient-to-b from-black via-[#1a0000] to-[#2b0000] py-16 md:py-20 text-white overflow-x-clip"
        >
            {/* background accents (red) */}
            <div className="pointer-events-none absolute -left-24 top-10 h-56 w-56 rounded-full bg-red-500/10 blur-3xl" />
            <div className="pointer-events-none absolute -right-24 bottom-10 h-56 w-56 rounded-full bg-red-400/10 blur-3xl" />

            {/* subtle dotted texture */}
            <div
                aria-hidden
                className="absolute inset-0 opacity-[0.06]"
                style={{
                    backgroundImage:
                        "radial-gradient(rgba(255,255,255,0.14) 1px, transparent 1px)",
                    backgroundSize: "22px 22px",
                }}
            />

            <div className="relative mx-auto w-[95%] max-w-7xl">
                {/* heading */}
                <div className="mb-6 flex items-center gap-3 md:mb-8">
                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-red-600/20 ring-1 ring-red-500/40">
                        <Youtube className="h-6 w-6 text-red-500" />
                    </div>
                    <h2 className="bg-gradient-to-r from-red-400 to-orange-300 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl md:text-5xl">
                        YouTube
                    </h2>
                </div>

                {/* stats — animate on view */}
                <div className="mb-8 grid grid-cols-2 gap-3 sm:gap-4">
                    <Stat value={2400} label="Total subscribers" suffix="+" />
                    <Stat value={130000} label="Total views" suffix="+" />
                </div>

                {/* 2 columns on mobile (2×2 overall) */}
                <motion.ul
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid grid-cols-2 gap-4 sm:gap-6"
                >
                    {CHANNELS.map((c) => (
                        <ChannelCard key={c.name} {...c} />
                    ))}
                </motion.ul>
            </div>
        </section>
    );
}
