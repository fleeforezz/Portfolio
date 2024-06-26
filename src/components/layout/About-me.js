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
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const body = document.querySelector('body');

            if (body) {
                // Change color when scroll to About Me section
                if (scrollY > totalHeight * 0.07 && scrollY < totalHeight * 0.15) {
                    body.style.backgroundColor = '#0e0e0c';
                    body.style.color = '#FAFAF9';
                } else {
                    body.style.backgroundColor = '#FAFAF9';
                    body.style.color = 'black';
                }

                if (scrollY > totalHeight * 0.50 && scrollY < totalHeight * 0.938) {
                    body.style.backgroundColor = '#0e0e0c';
                    body.style.color = '#FAFAF9';
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
        <motion.section id="about" className="px-20 max-md:px-5 pt-28"
            variants={banner}
            initial="initial"
            animate={mainControls}
        >
            <h1 className="font-medium text-[#d1d1c7] text-[6vw] max-md:text-[7vw] max-sm:text-5xl leading-[6vw] pt-24 max-md:pt-0 pb-24 max-md:pb-14">
            Me as a DevOps engineer transforms ideas 
            into reality, driving efficiency and 
            excellence in every deployment.
            </h1>

            <motion.div className="flex gap-10 justify-center items-center pt-44"
                variants={letterAnimation}
            >
                <span className="max-md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 200 200" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M200 150C200 94.7715 155.228 50 100 50C44.7715 50 0 94.7715 0 150H200Z" fill="#8c8c73" />
                    </svg>
                </span>
                <h2 className="font-medium text-center text-[#8c8c73] text-[8vw] max-sm:text-[10vw] max-md:pt-20">
                    ABOUT ME
                </h2>
                <span className="max-md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 200 200" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M200 150C200 94.7715 155.228 50 100 50C44.7715 50 0 94.7715 0 150H200Z" fill="#8c8c73" />
                    </svg>
                </span>
            </motion.div>

            <div ref={ref} className="flex max-md:flex-wrap">
                <img src="/profile-image.JPG" className="w-[47%] max-md:w-[100%] max-md:h-[500px] max-md:object-cover max-sm:w-[100%] max-sm:h-[50vh] max-sm:object-cover rounded-lg" />
                <div className="px-10 max-md:px-0">
                    <motion.span className="about-me-para">
                        <motion.h3 className="font-bold text-6xl max-md:text-[7vw] max-md:mt-10"
                            variants={letterAnimation}
                        >
                            A brief intro, who am I 🧐 ?
                        </motion.h3>
                        <motion.p className="text-[1.6vw] max-md:text-[4vw] mt-10 max-md:mt-5"
                            variants={letterAnimation}
                        >
                            I am a seasoned DevOps engineer with
                            a passion for streamlining and optimizing 
                            software development processes.
                            <br></br>
                            <br></br>
                            With a background in both development 
                            and operations, I specialize in creating 
                            seamless workflows, implementing continuous 
                            integration and deployment pipelines, and 
                            ensuring the reliability and scalability 
                            of infrastructure.
                            <br></br>
                            <br></br>
                            When I'm not engaged in development, 
                            I enjoy working on 
                            <a href="https://hiishi.fleeforezz.me" target="_blank" className=" underline">
                                Hi Is Hi 🐈
                            </a> 
                            website.
                        </motion.p>
                    </motion.span>
                </div>
            </div>
        </motion.section>
    )
}
