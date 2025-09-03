// src/App.tsx
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SplashScreen from "./components/SplashScreen";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Achievements from "./components/Acheivements"; // make sure file is spelled correctly
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ProjectsAll from "./pages/ProjectsAll";   // ✅ fixed path
import YouTube from "./components/YouTube";
import HireMe from "./components/HireMe.tsx";
import Footer from "./components/Footer";

function HomePage() {
    return (
        <div className="animate-fade-in">
            <Navbar />
            <Hero />
            <About />
            <Education />
            <Achievements />
            <Skills />
            <Projects />
            <YouTube />
            <HireMe />
            <Footer />
        </div>
    );
}

export default function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const t = setTimeout(() => setLoading(false), 3000);
        return () => clearTimeout(t);
    }, []);

    if (loading) return <SplashScreen />;

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/projects" element={<ProjectsAll />} /> {/* ✅ correct import */}
            </Routes>
        </BrowserRouter>
    );
}
