import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { Link } from "react-router-dom";

import smartparking from "../assets/projects/smartparking.png";
import culinaryac from "../assets/projects/culinaryac.png";
import scrollgame from "../assets/projects/scrollgame.png";
import chatapp from "../assets/projects/chatapp.png";
import fittrack from "../assets/projects/fittrack.png";
import terminalchat from "../assets/projects/terminalchat.png";
import cashier from "../assets/projects/cashier.png";
import connect4 from "../assets/projects/connect4.png";
import logistic from "../assets/projects/logistic.png";
import knightrider from "../assets/projects/knightrider.png";

const MORE_PROJECTS = [
    { title: "Smart Parking System", description: "A web application that allows users to find and reserve parking spots in real-time", image: smartparking, github: "https://github.com/DionFernando/SmartParking.git" },
    { title: "The Culinary Academy", description: "A responsive website for a culinary school, featuring course listings, instructor profiles, and enrollment forms.", image: culinaryac, github: "https://github.com/DionFernando/The-Culinary-Academy.git" },
    { title: "Scroll Game", description: "A simple 2D side-scrolling game built with HTML, CSS, and JavaScript, featuring character movement and obstacle avoidance.", image: scrollgame, github: "https://github.com/DionFernando/Scroll-Game.git" },
    { title: "Chat Application", description: "A real-time chat application built with React and Firebase, featuring user authentication and group chats.", image: chatapp, github: "https://github.com/DionFernando/Chat-App.git" },
    { title: "Fit Track", description: "Figma Prototype for a fitness tracking application designed to monitor workouts, nutrition, and progress over time.", image: fittrack, github: "https://www.figma.com/design/hJdmblnYiBltveTh00lrTF/Untitled?node-id=0-1&t=L1u19BCZklOBltKg-1" },
    { title: "Terminal Chat Application", description: "A command-line chat application using socket programming in Python, enabling real-time communication between multiple users.", image: terminalchat, github: "https://github.com/DionFernando/Terminal-Chat--Socket-Programming.git" },
    { title: "Cashier Management System", description: "A desktop application built with Java Swing and MySQL that streamlines sales transactions, inventory management, and reporting for retail businesses.", image: cashier, github: "https://github.com/DionFernando/Cashier.git" },
    { title: "Connect 4 Game", description: "A two-player Connect 4 game built with Java, featuring a graphical interface and win detection logic.", image: connect4, github: "https://github.com/DionFernando/Cashier.git" },
    { title: "Logistic Management System", description: "Figma Prototype for a comprehensive Logistic Management System designed to streamline operations and enhance efficiency.", image: logistic, github: "https://www.figma.com/design/kUWB0CKeCKGplbvXWMNQWg/Logistic-Management-System---Figma--Latest--?node-id=230-80&t=brhGUakwjwozKaVQ-1" },
    { title: "Knight Rider LED", description: "HTML CSS and JavaScript project that simulates the iconic Knight Rider LED effect", image: knightrider, github: "https://github.com/DionFernando/Kitt_Knight_Rider.git" },
];

export default function ProjectsAll() {
    // If PROJECTS is in another file, import and concat it here:
    // import { PROJECTS } from "../components/Projects";
    // const ALL = PROJECTS.concat(MORE_PROJECTS);
    const ALL = MORE_PROJECTS; // or concat with PROJECTS if imported

    return (
        <main className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white overflow-x-clip">
            <div className="mx-auto w-[95%] max-w-7xl py-16">
                <h1 className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
                    All Projects
                </h1>
                <p className="mt-2 text-gray-400">A longer list of work—repos, experiments, and shipped features.</p>

                <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 max-[360px]:grid-cols-1">
                    {ALL.map((p) => (
                        <motion.article
                            key={p.title}
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.35 }}
                            className="overflow-hidden rounded-2xl border border-white/15 bg-white/5 shadow-lg backdrop-blur-md"
                        >
                            <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full">
                                <img src={p.image} alt={p.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                            </div>

                            <div className="p-4 sm:p-5">
                                <h3 className="text-base sm:text-lg font-semibold">{p.title}</h3>
                                <p className="mt-1 text-xs sm:text-sm text-gray-300">{p.description}</p>
                                <a
                                    href={p.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="mt-4 inline-flex items-center gap-2 rounded-xl border border-blue-400/40 bg-blue-500/10 px-3 py-2 text-xs sm:text-sm text-blue-200 hover:bg-blue-500/20"
                                >
                                    <Github className="h-4 w-4" />
                                    GitHub
                                </a>
                            </div>
                        </motion.article>
                    ))}
                </div>

                {/* Back link (uses hash so it never 404s on Vercel) */}
                <div className="mt-10">
                    <Link to="/" className="text-sm text-gray-400 hover:text-white">
                        ← Back to Home
                    </Link>
                </div>
            </div>
        </main>
    );
}
