// src/App.tsx
import { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import SplashScreen from "./components/SplashScreen";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Achievements from "./components/Acheivements";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ProjectsAll from "./pages/ProjectsAll";
import MoreAboutMe from "./pages/MoreAboutMe";
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
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/projects" element={<ProjectsAll />} />
                <Route path="/more-about-me" element={<MoreAboutMe />} /> {/* ✅ new */}
            </Routes>
        </Router>
    );
}
