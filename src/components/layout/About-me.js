"use client";
import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

// About me paragragh animation
const banner = {
    animate: {
        transition: {
            delayChildren: 0.4,
            staggerChildren: 0.3,
        },
    },
}
const letterAnimation = {
    initial: {
        y: 20,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        delay: 3,
        transition: {
            duration: 0.5,
        },
    },
}

export default function Aboutme() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation()

    useEffect(() => {
        if (isInView) {
            mainControls.start("animate");
        }

        const handleScroll = () => {
            const scrollY = window.scrollY;

            // Define the scroll position at which you want to change the background color
            const scrollThreshold = 800; // Change this value to your desired scroll position
            const above = 1000;

            // Access the body element and change its background color based on the scroll position
            const body = document.querySelector('body');
            if (body) {
                if (scrollY > scrollThreshold) {
                    body.style.backgroundColor = 'black';
                    body.style.color = 'white'; // Change to your desired color
                } else {
                    body.style.backgroundColor = 'white';
                    body.style.color = 'black';
                }
                if (scrollY > above) {
                    body.style.backgroundColor = 'white';
                    body.style.color = 'black'; // Change to your default color
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
        <section className="px-20 max-md:px-5 pt-28">
            <h1 className="font-medium text-[#8c8c73] text-[6vw] max-md:text-[7vw] leading-[6vw]">
                I have studied web development for a year, and during this time,
                I realized I have passionate in designing user interfaces for websites.
            </h1>

            <h2 id="about" className="flex gap-10 justify-center items-center font-medium text-center text-[#8c8c73] text-[8vw] pt-44 max-md:pt-20 pb-10">
                <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 200 200" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M200 150C200 94.7715 155.228 50 100 50C44.7715 50 0 94.7715 0 150H200Z" fill="#8c8c73" />
                </svg>
                ABOUT ME
                <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 200 200" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M200 150C200 94.7715 155.228 50 100 50C44.7715 50 0 94.7715 0 150H200Z" fill="#8c8c73" />
                </svg>
            </h2>

            <div ref={ref} className="flex max-md:flex-wrap">
                <img src="/profile-image.JPG" className="w-[47%] max-md:w-[100%]" />
                <div className="px-10 max-md:px-0">
                    <motion.span className="about-me-para"
                        variants={banner}
                        initial="initial"
                        animate={mainControls}
                    >
                        <motion.h3 className="font-bold text-6xl max-md:text-[7vw] max-md:mt-10"
                            variants={letterAnimation}
                        >
                            A brief intro, who am I?
                        </motion.h3>
                        <motion.p className="text-[1.875vw] max-md:text-[4vw] mt-10"
                            variants={letterAnimation}
                        >
                            I am an independent frontend developer, UI/UX designer
                            and creator based in Melbourne, Australia.
                            <br></br>
                            <br></br>
                            I specialize in crafting elevated, intuitive, and
                            minimalistic designs for startups and small businesses
                            to help them stand out in the digital landscape with a powerful impact. 😎
                            <br></br>
                            <br></br>
                            When I am not developing or designing, I enjoy creating
                            videos that talk about frontend development, productivity
                            and design on YouTube 📸
                        </motion.p>
                    </motion.span>
                </div>
            </div>
        </section>
    )
}
