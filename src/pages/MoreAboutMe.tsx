// src/components/MoreAboutMe.tsx
import { motion } from "framer-motion";

export default function MoreAboutMe({ onClose }: { onClose: () => void }) {
    return (
        <motion.section
            id="more-about-me"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="relative max-w-3xl w-full rounded-2xl border border-white/15 bg-gradient-to-b from-gray-900 to-black p-6 sm:p-10 shadow-xl text-white overflow-y-auto max-h-[90vh]">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    More About Me
                </h2>
                <p className="mt-4 text-gray-300 text-sm sm:text-base leading-relaxed">
                    Hi 👋, I’m Dion Fernando. Beyond just my portfolio highlights, here’s a
                    little more about me...
                </p>

                <div className="mt-6 space-y-6">
                    <section>
                        <h3 className="text-lg font-semibold text-blue-400">Journey</h3>
                        <p className="text-gray-400 text-sm sm:text-base">
                            I started coding at [your story here], and since then I’ve worked
                            on projects from web apps to mobile apps...
                        </p>
                    </section>

                    <section>
                        <h3 className="text-lg font-semibold text-blue-400">Passions</h3>
                        <p className="text-gray-400 text-sm sm:text-base">
                            Outside of development, I love YouTube content creation,
                            photography, and design...
                        </p>
                    </section>

                    <section>
                        <h3 className="text-lg font-semibold text-blue-400">Future Goals</h3>
                        <p className="text-gray-400 text-sm sm:text-base">
                            My vision is to become a full-stack architect building products
                            that make a real difference...
                        </p>
                    </section>
                </div>

                {/* Close Button */}
                <div className="mt-8 flex justify-end">
                    <button
                        onClick={onClose}
                        className="rounded-xl bg-blue-500 px-5 py-2 font-semibold text-white hover:bg-blue-600 shadow-md"
                    >
                        Close
                    </button>
                </div>
            </div>
        </motion.section>
    );
}
