// src/components/Navbar.tsx
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "../assets/Logo.png";

type NavItem = { name: string; href: string };

const NAV_ITEMS: NavItem[] = [
    { name: "Home", href: "#hero" },
    { name: "Education", href: "#education" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "YouTube", href: "#youtube" },
];

const MOBILE_ITEMS: NavItem[] = [
    { name: "Home", href: "#hero" },
    { name: "Education", href: "#education" },
    { name: "Skills", href: "#skills" }, // fixed case
    { name: "Projects", href: "#projects" },
    { name: "YouTube", href: "#youtube" },
];

const NAV_OFFSET = 88; // px to offset for the fixed navbar height

function scrollToHash(href: string) {
    const id = href.replace(/^#/, "");
    const el = document.getElementById(id);
    if (!el) return;

    const y = el.getBoundingClientRect().top + window.pageYOffset - NAV_OFFSET;
    window.scrollTo({ top: y, behavior: "smooth" });
}

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen((v) => !v);

    const handleClick = (e: React.MouseEvent, href: string) => {
        e.preventDefault();
        scrollToHash(href);
        setIsOpen(false);
    };

    return (
        <nav className="fixed top-4 left-0 right-0 z-50 flex justify-center">
            <div
                className="w-[95%] md:w-[85%] lg:w-[70%]
        flex items-center justify-between px-6 py-3 rounded-2xl
        bg-white/10 backdrop-blur-md border border-white/20 shadow-lg"
            >
                {/* Logo (left side) */}
                <a href="#home" onClick={(e) => handleClick(e, "#home")} className="flex items-center">
                    <img src={Logo} alt="Logo" className="h-10 w-auto" />
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex flex-1 justify-center">
                    <ul className="flex space-x-8">
                        {NAV_ITEMS.map((item) => (
                            <li key={item.name}>
                                <a
                                    href={item.href}
                                    onClick={(e) => handleClick(e, item.href)}
                                    className="cursor-pointer text-white hover:text-blue-400 transition-colors duration-200"
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Hire Me Button (Right side) */}
                <div className="hidden md:flex">
                    <a
                        href="#hire"
                        onClick={(e) => handleClick(e, "#hire")}
                        className="px-4 py-2 bg-blue-500 hover:bg-blue-600 transition rounded-lg text-white font-semibold shadow-md"
                    >
                        Hire Me
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-white focus:outline-none" onClick={toggleMenu} aria-label="Menu">
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Dropdown */}
            {isOpen && (
                <ul
                    className="absolute top-[72px] w-[95%] md:w-[85%] lg:w-[70%]
            flex flex-col mt-2 space-y-4 bg-white/10 backdrop-blur-md
            border border-white/20 rounded-2xl px-6 py-4 shadow-lg md:hidden"
                >
                    {MOBILE_ITEMS.map((item) => (
                        <li key={item.name}>
                            <a
                                href={item.href}
                                onClick={(e) => handleClick(e, item.href)}
                                className="cursor-pointer text-white hover:text-blue-400 transition-colors duration-200 block"
                            >
                                {item.name}
                            </a>
                        </li>
                    ))}
                    {/* Hire Me inside mobile dropdown */}
                    <li>
                        <a
                            href="#hire"
                            onClick={(e) => handleClick(e, "#hire")}
                            className="w-full block text-center px-4 py-2 bg-blue-500 hover:bg-blue-600 transition rounded-lg text-white font-semibold shadow-md"
                        >
                            Hire Me
                        </a>
                    </li>
                </ul>
            )}
        </nav>
    );
};

export default Navbar;
