// src/pages/MoreAboutMe.tsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function MoreAboutMe() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
            <div className="mx-auto w-[95%] max-w-4xl py-12 sm:py-16">
                <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    More About Me
                </h1>
                <p className="mt-3 text-gray-300 text-sm sm:text-base leading-relaxed">
                    Hi 👋, I’m Dion Fernando. Beyond just my portfolio highlights, here’s a little more about me...
                </p>

                <div className="mt-8 space-y-8">
                    <motion.section initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
                        <h2 className="text-lg sm:text-xl font-semibold text-blue-400">Journey</h2>
                        <p className="text-gray-300 text-sm sm:text-base">
                            I started coding at [your story here], and since then I’ve worked on projects from web apps to mobile apps...
                        </p>
                    </motion.section>

                    <motion.section initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: 0.05 }}>
                        <h2 className="text-lg sm:text-xl font-semibold text-blue-400">Passions</h2>
                        <p className="text-gray-300 text-sm sm:text-base">
                            Outside of development, I love YouTube content creation, photography, and design...
                        </p>
                    </motion.section>

                    <motion.section initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: 0.1 }}>
                        <h2 className="text-lg sm:text-xl font-semibold text-blue-400">Future Goals</h2>
                        <p className="text-gray-300 text-sm sm:text-base">
                            My vision is to become a full-stack architect building products that make a real difference...
                        </p>
                    </motion.section>
                </div>

                <div className="mt-10">
                    <Link to="/" className="text-sm text-gray-400 hover:text-white">
                        ← Back to Home
                    </Link>
                </div>
            </div>
        </main>
    );
}
