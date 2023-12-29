"use client"
import { Triangle } from "@phosphor-icons/react"
import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef } from "react";

// Services paragragh animation
const banner = {
    animate: {
        transition: {
            delayChildren: 0.4,
            staggerChildren: 0.4,
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
        delay: 5,
        transition: {
            duration: 0.3,
        },
    },
}

export default function Services() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const mainControls = useAnimation()

    useEffect(() => {
        if (isInView) {
            mainControls.start("animate");
        }

        const handleScroll = () => {
            const scrollY = window.scrollY;
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const body = document.querySelector('body');

            if (body) {
                if (scrollY > totalHeight * 0.5 ) {
                    body.style.backgroundColor = 'black';
                    body.style.color = 'white';
                    console.log("yo")
                }
                if (scrollY > totalHeight * 0.92) {
                    body.style.backgroundColor = 'white';
                    body.style.color = 'black';
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    })

    return (
        <section id="services" className="px-20 max-md:px-5">
            <h1 className="flex gap-10 justify-center items-center font-medium text-center text-[#8c8c73] text-[8vw] pt-24 pb-10">
                <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 200 200" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M200 150C200 94.7715 155.228 50 100 50C44.7715 50 0 94.7715 0 150H200Z" fill="#8c8c73" />
                </svg>
                SERVICES
                <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 200 200" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M200 150C200 94.7715 155.228 50 100 50C44.7715 50 0 94.7715 0 150H200Z" fill="#8c8c73" />
                </svg>
            </h1>

            <div ref={ref} className="grid grid-cols-2 gap-24 max-md:gap-10 max-md:grid-cols-1">
                <motion.div
                    variants={banner}
                    initial="initial"
                    animate={mainControls}
                >
                    <motion.h2 className="font-bold text-[4.5vw] max-md:text-[7vw]"
                        variants={letterAnimation}
                    >
                        my expertises.
                    </motion.h2>
                    <motion.p className="text-[1.875vw] max-md:text-[4vw] mt-10"
                        variants={letterAnimation}
                    >
                        I focus on all things design and web related.
                        With each of my services, my goal is to deliver
                        an impactful and elevating digital experience for everyone.
                    </motion.p>
                </motion.div>

                <span className="hidden max-md:flex bg-[#aeae9d] w-[100%] h-1"></span>

                <motion.div className="font-extrabold text-[4.5vw] max-md:text-[7vw] text-[#aeae9d] leading-[5rem] max-md:leading-10"
                    variants={banner}
                    initial="initial"
                    animate={mainControls}
                >
                    <span>
                        <motion.h3 variants={letterAnimation}>Web</motion.h3>
                        <motion.h3 variants={letterAnimation}>Development</motion.h3>
                        <motion.h3 variants={letterAnimation}>Web Design</motion.h3>
                        <motion.h3 variants={letterAnimation}>Wireframing</motion.h3>
                        <motion.h3 variants={letterAnimation}>UI/UX Design</motion.h3>
                        <motion.h3 variants={letterAnimation}>Branding</motion.h3>
                    </span>
                </motion.div>

                <motion.div
                    variants={banner}
                    initial="initial"
                    animate={mainControls}
                >
                    <motion.h2 className="font-bold text-[4.5vw] max-md:text-[7vw]"
                        variants={letterAnimation}
                    >
                        my digital tool box.
                    </motion.h2>
                    <motion.p className="text-[1.875vw] max-md:text-[4vw] mt-10"
                        variants={letterAnimation}
                    >
                        These are my go to tech stack to make any projects happen.
                        I am always eager of learning more about my current stack,
                        and new technologies that could expand my horizons.
                    </motion.p>
                </motion.div>

                <span className="hidden max-md:flex bg-[#aeae9d] w-[100%] h-1"></span>

                <motion.div className="font-extrabold text-[4.5vw] max-md:text-[7vw] text-[#aeae9d] leading-[5rem] max-md:leading-10"
                    variants={banner}
                    initial="initial"
                    animate={mainControls}
                >
                    <motion.h3 variants={letterAnimation}>Javascript</motion.h3>
                    <motion.h3 variants={letterAnimation}>HTML</motion.h3>
                    <motion.h3 variants={letterAnimation}>CSS</motion.h3>
                    <motion.h3 variants={letterAnimation}>Figma</motion.h3>
                    <motion.h3 variants={letterAnimation}>Webflow</motion.h3>
                    <motion.h3 variants={letterAnimation}>TailwindCSS</motion.h3>
                    <motion.h3 variants={letterAnimation}>ReactJS</motion.h3>
                </motion.div>
            </div>
        </section>
    )
}