import { useEffect } from "react";
import { motion } from "framer-motion";
import ProfileImg from "../assets/Dion2.png";
import { Eye, Target } from "lucide-react";
import { useNavigate } from "react-router-dom";

const About = () => {
    const navigate = useNavigate();

    // optional: close on ESC (can be removed if not needed)
    useEffect(() => {
        function onKey(e: KeyboardEvent) {
            if (e.key === "Escape") {
                // No modal to close
            }
        }
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    return (
        <section
            id="about"
            className="relative flex items-center overflow-hidden bg-gradient-to-b from-black to-gray-900 text-white"
        >
            {/* Background circles (exactly two) */}
            <div
                aria-hidden
                className="pointer-events-none select-none absolute -top-40 -left-40 w-[70vw] max-w-[580px] aspect-square rounded-full bg-blue-400/10 ring-1 ring-blue-400/25 blur-3xl"
            />
            <div
                aria-hidden
                className="pointer-events-none select-none absolute -bottom-20 -right-20 w-[75vw] max-w-[480px] aspect-square rounded-full bg-blue-500/10 ring-1 ring-blue-500/25 blur-3xl"
            />

            <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-10 lg:px-20 w-full">
                {/* Title */}
                <h2 className="text-center font-bold mb-8 md:mb-12">
                    <span className="text-xl sm:text-2xl md:text-3xl">About </span>
                    <span className="text-blue-400 text-3xl sm:text-4xl md:text-5xl">Me.</span>
                </h2>

                {/* Content grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
                    {/* Left: Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="md:col-span-5 flex justify-center"
                    >
                        <div className="relative">
                            {/* subtle offset frame */}
                            <div className="absolute -top-4 -left-4 w-full h-full rounded-3xl border-4 border-blue-400/20 -z-10" />
                            <img
                                src={ProfileImg}
                                alt="Dion Fernando"
                                className="w-56 sm:w-64 md:w-[24rem] rounded-3xl object-cover shadow-[0_0_60px_rgba(59,130,246,0.15)]"
                            />
                        </div>
                    </motion.div>

                    {/* Right: Info + text */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="md:col-span-7"
                    >
                        {/* Info Card */}
                        <div className="rounded-2xl border border-blue-400/50 bg-white/5 backdrop-blur-sm p-4 sm:p-6 md:p-8 shadow-lg">
                            {/* mobile 2x3 grid */}
                            <div className="grid grid-cols-2 gap-y-3 gap-x-4 text-[9px] sm:text-sm md:text-base">
                                <p>
                                    <span className="font-semibold text-blue-300">Name :</span> W K D Fernando
                                </p>
                                <p>
                                    <span className="font-semibold text-blue-300">Age :</span> 22
                                </p>
                                <p>
                                    <span className="font-semibold text-blue-300">Nationality :</span> Sri Lankan
                                </p>
                                <p>
                                    <span className="font-semibold text-blue-300">Occupation :</span> Full-Stack Developer
                                </p>
                                <p>
                                    <span className="font-semibold text-blue-300">Tel :</span> +94 76 714 9543
                                </p>
                                <p>
                                    <span className="font-semibold text-blue-300">Email :</span> dionfernando2003@gmail.com
                                </p>
                            </div>
                        </div>

                        {/* Description */}
                        <p className="mt-6 text-gray-400 text-xs text-[10px] md:text-base leading-relaxed text-center md:text-center">
                            I design and develop software aligned with rapidly evolving technologies, delivering
                            high-quality solutions for clients. I’m passionate about problem-solving, blending
                            design and engineering to craft seamless user experiences.
                        </p>

                        {/* Mission & Vision */}
                        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div className="rounded-2xl border border-white/15 bg-white/5 p-4 shadow-lg backdrop-blur-md sm:p-5">
                                <h3 className="mb-2 flex items-center justify-center gap-2 text-center text-base font-semibold text-blue-400 sm:text-lg md:justify-start md:text-center">
                                    <Target className="h-5 w-5" /> Mission
                                </h3>
                                <p className="text-center text-xs text-gray-300 sm:text-sm md:text-base md:text-left">
                                    “To develop innovative and efficient software solutions that enhance user experiences and drive
                                    business success.”
                                </p>
                            </div>

                            <div className="rounded-2xl border border-white/15 bg-white/5 p-4 shadow-lg backdrop-blur-md sm:p-5">
                                <h3 className="mb-2 flex items-center justify-center gap-2 text-center text-base font-semibold text-blue-400 sm:text-lg md:justify-start md:text-center">
                                    <Eye className="h-5 w-5" /> Vision
                                </h3>
                                <p className="text-center text-xs text-gray-300 sm:text-sm md:text-base md:text-left">
                                    “To be a leading full-stack developer, creating impactful projects that shape the future of technology.”
                                </p>
                            </div>
                        </div>

                        <div className="flex justify-center mt-4">
                            <button
                                onClick={() => navigate("/more-about-me")}
                                className="px-6 py-2 bg-blue-500 hover:bg-blue-600 transition rounded-lg text-white font-semibold shadow-md"
                            >
                                Get to know more about me
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;