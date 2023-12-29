"use client";
import { motion, useScroll } from "framer-motion";

// Navbar animation
const navbar = {
    hidden: {
        y:-75,
    },
    visible: {
        y:0,
        transition: {
            duration: 0.7,
            delay: 1.8,
        }
    }
}

export default function Header() {
    return (
        <motion.main className="flex fixed w-[100%] justify-between items-center px-5 py-3  z-50"
            variants={navbar}
            initial="hidden"
            animate="visible"
        >
            <div className="flex align-middle">
                <a href="#hero" className="font-bold text-xl">
                    Nhat Truong</a>
            </div>

            <div className="flex gap-5 items-center">
                <a href="#about" className="about relative max-md:hidden">
                    About
                </a>
                <a href="#services" className="service relative max-md:hidden">
                    Services
                </a>
                <a href="#projects" className="project relative max-md:hidden">
                    Projects
                </a>
                <a href="#contact" className="talk relative px-8 py-3 bg-[#262626] text-white rounded-full">
                    Let's Talk
                </a>
            </div>
        </motion.main>
    )
}