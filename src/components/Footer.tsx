// src/components/Footer.tsx
import { motion } from "framer-motion";
import { Mail, Instagram, Facebook, Linkedin, Github } from "lucide-react";
import Logo from "../assets/Logo.png";
import BG from "../assets/footer/bg.png";

// ✅ Responsive background image
// const BG = "src/assets/footer/bg.png";

const navLeft = [
    { label: "Home", href: "#home" },
    { label: "Education", href: "#education" },
    { label: "Assignments", href: "#assignments" },
    { label: "YouTube", href: "#youtube" },
    { label: "Hire Me", href: "#hire" },
];

const navRight = [
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
];

const socials = [
    { Icon: Instagram, href: "https://www.instagram.com/dionroxx/", label: "Instagram" },
    { Icon: Facebook, href: "https://web.facebook.com/profile.php?id=61550707358176", label: "Facebook" },
    { Icon: Linkedin, href: "https://www.linkedin.com/in/dion-fernando-546483319/", label: "LinkedIn" },
    { Icon: Github, href: "https://github.com/DionFernando", label: "GitHub" },
];

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer id="footer" className="relative isolate text-white overflow-x-clip">
            {/* ---------- Responsive background image + dark overlay ---------- */}
            <div className="relative">
                <div className="absolute inset-0 -z-10">
                    <img src={BG} alt="" aria-hidden="true" className="h-full w-full object-cover object-center" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/65 to-black/30" />
                </div>

                {/* ---------- Top content ---------- */}
                <div className="mx-auto w-[95%] max-w-7xl pt-14 pb-36 md:pb-44">
                    <div className="grid gap-8 md:grid-cols-3">
                        {/* Left quick links: 2 groups */}
                        <div className="text-sm">
                            <div className="grid grid-cols-2 gap-x-10 gap-y-3 md:grid-cols-1">
                                <ul className="space-y-3">
                                    {navLeft.map((n) => (
                                        <li key={n.label}>
                                            <a href={n.href} className="font-semibold text-white/90 hover:text-white">
                                                {n.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                                <ul className="space-y-3">
                                    {navRight.map((n) => (
                                        <li key={n.label}>
                                            <a href={n.href} className="font-semibold text-white/90 hover:text-white">
                                                {n.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Middle pitch + email */}
                        <div className="max-w-xl">
                            <p className="text-white/85">
                                Interested in working together? We should queue up a time to chat. I’ll buy the coffee.
                            </p>
                            <a
                                href="mailto:dionfernando2003@gmail.com"
                                className="mt-4 inline-flex items-center gap-2 text-lg font-semibold text-white hover:text-blue-300"
                            >
                                <Mail className="h-5 w-5" />
                                dionfernando2003@gmail.com
                            </a>
                        </div>

                        {/* Right title/name */}
                        <div className="md:text-right">
                            <h3 className="text-4xl sm:text-5xl font-black tracking-tight">Portfolio</h3>
                            <a href="#about" className="mt-3 inline-block font-semibold text-blue-300 hover:text-blue-200">
                                W K Dion Fernando
                            </a>
                        </div>
                    </div>
                </div>

                {/* ---------- Black wedge + centered logo ---------- */}
                <div className="relative">
                    <div className="absolute inset-x-0 bottom-0 h-28 md:h-40 bg-black [clip-path:polygon(0%_70%,50%_35%,100%_70%,100%_100%,0%_100%)]" />
                    <div className="relative mx-auto -mt-20 grid place-items-center md:-mt-28">
                        <div className="rounded-full bg-black/80 p-4 ring-2 ring-white/10 shadow-2xl">
                            <img src={Logo} alt="Logo" className="h-24 w-24 md:h-28 md:w-28 object-contain" />
                        </div>
                    </div>
                    <div className="h-10 md:h-12 bg-black" />
                </div>
            </div>

            {/* ---------- Social row ---------- */}
            <div className="bg-black">
                <div className="mx-auto w-[95%] max-w-7xl">
                    <div className="flex items-center justify-center gap-8 py-6">
                        {socials.map(({ Icon, href, label }) => (
                            <motion.a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noreferrer"
                                whileHover={{ y: -3, scale: 1.05 }}
                                className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/5 text-white/90 hover:text-white"
                                aria-label={label}
                                title={label}
                            >
                                <Icon className="h-5 w-5" />
                            </motion.a>
                        ))}
                    </div>

                    {/* Divider */}
                    <div className="border-t border-white/10" />

                    {/* ---------- Bottom legal row ---------- */}
                    <div className="py-6 text-white/60">
                        {/* Mobile layout: one-line links + tagline, then centered copyright */}
                        <div className="sm:hidden">
                            <div className="flex items-center justify-center gap-3 whitespace-nowrap text-[11px]">
                                <div className="flex items-center gap-3">
                                    <a href="/privacy" className="hover:text-white/80">Privacy</a>
                                    <span>·</span>
                                    <a href="/terms" className="hover:text-white/80">Terms</a>
                                    <span>·</span>
                                    <a href="/imprint" className="hover:text-white/80">Imprint</a>
                                </div>
                                <span className="max-w-[55vw] truncate">
                  Living, learning, &amp; leveling up one day at a time.
                </span>
                            </div>

                            <p className="mt-2 text-center text-[11px]">
                                © {year} – Design and built by <span className="text-white/80">W K Dion Fernando</span>
                            </p>
                        </div>

                        {/* Desktop / tablet layout (unchanged): three columns */}
                        <div className="hidden sm:grid sm:grid-cols-[1fr_auto_1fr] sm:items-center sm:gap-4 text-xs">
                            <div className="flex flex-wrap gap-x-6 gap-y-2">
                                <a href="/privacy" className="hover:text-white/80">Privacy</a>
                                <a href="/terms" className="hover:text-white/80">Terms</a>
                                <a href="/imprint" className="hover:text-white/80">Imprint</a>
                            </div>

                            <p className="text-center">Living, learning, &amp; leveling up one day at a time.</p>

                            <p className="text-right">
                                © {year} – Design and built by <span className="text-white/80">W K Dion Fernando</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
