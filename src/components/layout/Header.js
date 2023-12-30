"use client";
import { motion } from "framer-motion";
import { useEffect } from "react";

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
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;

            // Change color when scroll to About Me section
            const scrollThreshold = 825;
            const above = 1500;

            // Change color when scroll to Projects section
            const start = 5000;
            const end = 8900;


            const navigationbar = document.getElementById('navbar');
            const letstalk = document.getElementById('lets-talk');
            if (navigationbar) {
                // Change color when scroll to About Me section
                if (scrollY > scrollThreshold) {
                    navigationbar.style.backgroundColor = '#0e0e0c';
                    navigationbar.style.color = '#FAFAF9'; 
                }
                if (scrollY < scrollThreshold) {
                    navigationbar.style.backgroundColor = '#FAFAF9';
                    navigationbar.style.color = 'black';
                }
                // Change color when scroll to Project section
                if (scrollY > above && scrollY < start) {
                    navigationbar.style.backgroundColor = '#FAFAF9';
                    navigationbar.style.color = 'black'; 
                } if ( scrollY > end) {
                    navigationbar.style.backgroundColor = '#FAFAF9';
                    navigationbar.style.color = 'black';
                }
            }

            if (letstalk) {
                // Change color when scroll to About Me section
                if (scrollY > scrollThreshold) {
                    letstalk.style.backgroundColor = '#d1d1c7';
                    letstalk.style.color = 'black'; // Change to your desired color
                }
                if (scrollY < scrollThreshold) {
                    letstalk.style.backgroundColor = '#262626';
                    letstalk.style.color = '#d1d1c7'; // Change to your default color
                }
                if (scrollY > above && scrollY < start) {
                    letstalk.style.backgroundColor = '#262626';
                    letstalk.style.color = '#d1d1c7'; // Change to your default color
                }
                // Change color when scroll to Projects section
                if (scrollY > above && scrollY < end) {
                    letstalk.style.backgroundColor = '#d1d1c7';
                    letstalk.style.color = '#262626'; 
                }
                if (scrollY > above && scrollY < start ) {
                    letstalk.style.backgroundColor = '#262626';
                    letstalk.style.color = '#d1d1c7';
                }
                if ( scrollY > end) {
                    letstalk.style.backgroundColor = '#262626';
                    letstalk.style.color = '#d1d1c7';
                }
            }
        };

        // Add event listener for scroll
        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    })
    return (
        <motion.main id="navbar" className="flex fixed w-[100%] bg-[#FAFAF9] justify-between items-center px-5 py-3 z-50"
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
                <a href="#contact" id="lets-talk" className="talk relative px-8 py-3 bg-[#262626] text-white rounded-full">
                    Let's Talk
                </a>
            </div>
        </motion.main>
    )
}