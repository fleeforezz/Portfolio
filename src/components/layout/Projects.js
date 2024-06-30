"use client"
import { Dot } from "@phosphor-icons/react"
import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion"
import HomeLab from "../popout/HomeLab";

// Projects heading animation
const banner = {
    animate: {
        transition: {
            delayChildren: 0.3,
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

export default function Projects() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const mainControls = useAnimation()

    useEffect(() => {
        if (isInView) {
            mainControls.start("animate");
        }
    })

    // const [showPopout, setPopout] = useState(false);

    return (
        <motion.section ref={ref} id="projects" className="pt-10"
            variants={banner}
            initial="initial"
            animate={mainControls}
        >
            <div className="px-20 max-md:px-5 max-xl:px-16">
                <motion.h1 className="flex gap-10 justify-center items-center font-medium text-center text-[#8c8c73] text-[8vw] max-sm:text-[10vw] max-sm:pb-0"
                    variants={letterAnimation}
                >
                    <div className="max-md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 200 200" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M200 150C200 94.7715 155.228 50 100 50C44.7715 50 0 94.7715 0 150H200Z" fill="#8c8c73" />
                        </svg>
                    </div>
                    PROJECTS
                    <div className="max-md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 200 200" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M200 150C200 94.7715 155.228 50 100 50C44.7715 50 0 94.7715 0 150H200Z" fill="#8c8c73" />
                        </svg>
                    </div>
                </motion.h1>

                {/* Homelab */}
                <div>
                    <div 
                        className="flex flex-col justify-center"
                        // onClick={() => setPopout(true)}
                    >
                        <div className="flex max-w-[1750px] max-h-[1000px] overflow-hidden transition-all hover:rounded-3xl">
                            <img src="/HomeLab.png" className="w-[100%] object-cover transition-all hover:scale-[1.05]" />
                        </div>
                    </div>
                    <div className="flex gap-4 text-[#8c8c73] text-2xl max-md:text-[3.4vw] mt-8">
                        <div className="flex items-center border-2 border-[#8c8c73] rounded-full px-5 max-md:px-[5vw] py-1 max-md:py-[0vw]">
                            <h4>
                                2022
                            </h4>
                        </div>
                        <div className="flex items-center border-2 border-[#8c8c73] rounded-full px-5 max-md:px-[5vw] py-1 max-md:py-[0vw] whitespace-nowrap">
                            <h4>
                                NAS
                            </h4>
                            <Dot size={40} color="#8c8c73" />
                            <h4>
                                Server
                            </h4>
                            <Dot size={40} color="#8c8c73" />
                            <h4>
                                Automation
                            </h4>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-5xl max-md:[2vw] font-medium text-white mt-3 mb-3">
                            HomeLab
                        </h2>
                        <div className="flex items-center whitespace-nowrap">
                            <h3 className="text-[1.875vw] max-md:text-[4vw] opacity-[70%]">
                                Linux Server
                            </h3>
                            <Dot size={40} color="#ffffff" className="opacity-[60%]" />
                            <h3 className="text-[1.875vw] max-md:text-[4vw] opacity-[70%]">
                                Docker
                            </h3>
                            <Dot size={40} color="#ffffff" className="opacity-[60%]" />
                            <h3 className="text-[1.875vw] max-md:text-[4vw] opacity-[70%]">
                                DevOps
                            </h3>
                        </div>
                    </div>
                </div>
                {/* {showPopout && <HomeLab onClose={() => setPopout(false)}/>} */}
            </div>

            {/* Coffee 1900 */}
            <div className="flex max-md:flex-wrap max-lg:flex-wrap gap-16 max-md:gap-0 max-xl:gap-7 px-20 max-md:px-0 max-xl:px-16">
                <div
                    className="max-md:px-5"
                    // onClick={() => setPopout(true)}
                >
                    <div className="pt-10 max-md:pt-7">
                        <div className="flex w-[100%] max-w-[952px] max-h-[1192px] mt-10 overflow-hidden transition-all hover:rounded-3xl">
                            <img src="/Coffee-1900.png" className="w-[100%] transition-all hover:scale-[1.05]" />
                        </div>
                    </div>
                    <div className="flex gap-4 text-[#8c8c73] text-[1.5vw] max-md:text-[3.4vw] max-sm:gap-2 mt-8">
                        <div className="flex items-center border-2 border-[#8c8c73] rounded-full px-5 py-1 max-md:py-[0vw]">
                            <h4>
                                2023
                            </h4>
                        </div>
                        <div className="flex items-center border-2 border-[#8c8c73] rounded-full px-5 py-1 max-md:py-[0vw]">
                            <h4>
                                HTML
                            </h4>
                            <Dot size={40} color="#8c8c73" />
                            <h4>
                                CSS
                            </h4>
                            <Dot size={40} color="#8c8c73" />
                            <h4>
                                JS
                            </h4>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-5xl max-md:[2vw] font-medium text-white mt-3 mb-3">
                            Coffee 1900
                        </h2>
                        <div className="flex items-center whitespace-nowrap">
                            <h3 className="text-[1.875vw] max-md:text-[4vw] opacity-[70%]">
                                Front-End Development
                            </h3>
                            <Dot size={40} color="#ffffff" className="opacity-[60%]" />
                            <h3 className="text-[1.875vw] max-md:text-[4vw] opacity-[70%]">
                                School Project
                            </h3>
                        </div>
                    </div>
                </div>

                {/* Portfolio */}
                <div className="flex flex-col justify-center max-md:ml-0">
                    <div className="max-md:px-5 max-md:mt-7">
                        <div>
                            <a href="https://fleeforezz.me" target="_blank" className="flex w-[100%] max-w-[662px] max-h-[662px] mt-10 overflow-hidden transition-all hover:rounded-3xl">
                                <img src="/Portfolio-1.png" className="w-[100%] transition-all hover:scale-[1.05]" />
                            </a>
                        </div>
                        <div className="flex gap-4 text-[#8c8c73] text-2xl max-md:text-[3.4vw] max-sm:gap-2 mt-8">
                            <div className="flex items-center border-2 border-[#8c8c73] rounded-full px-5 max-md:px-[5vw] py-1 max-md:py-[0vw]">
                                <h4>
                                    2023
                                </h4>
                            </div>
                            <div className="flex items-center border-2 border-[#8c8c73] rounded-full px-5 max-md:px-[5vw] py-1 max-md:py-[0vw]">
                                <h4>
                                    HTML
                                </h4>
                                <Dot size={40} color="#8c8c73" />
                                <h4>
                                    Tailwind
                                </h4>
                                <Dot size={40} color="#8c8c73" />
                                <h4>
                                    NextJs
                                </h4>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-5xl max-md:[2vw] font-medium text-white mt-3 mb-3">
                                Portfolio
                            </h2>
                            <div className="flex items-center whitespace-nowrap">
                                <h3 className="text-[1.875vw] max-md:text-[4vw] opacity-[70%]">
                                    Front-End Development
                                </h3>
                                <Dot size={40} color="#ffffff" className="opacity-[60%]" />
                                <h3 className="text-[1.875vw] max-md:text-[4vw] opacity-[70%]">
                                    Self Project
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Cafi */}
            <div className="flex max-md:flex-wrap gap-16 max-md:gap-0 max-xl:gap-7 px-20 max-md:px-0 max-xl:px-16">
                <div className="max-md:px-5">
                    <div className=" pt-20 max-md:pt-7">
                        <a href="https://cafi.vercel.app" target="_blank" className="flex w-[100%] max-w-[1099px] max-h-[751px] mt-10 overflow-hidden transition-all hover:rounded-3xl">
                            <img src="/Cafi.png" className="w-[100%] max-md:w-[100%] transition-all hover:scale-[1.05]" />
                        </a>
                    </div>
                    <div className="flex gap-4 text-[#8c8c73] text-2xl max-md:text-[3.4vw] max-sm:gap-2 mt-8">
                        <div className="flex items-center border-2 border-[#8c8c73] rounded-full px-5 max-md:px-[5vw] py-1 max-md:py-[0vw]">
                            <h4>
                                2023
                            </h4>
                        </div>
                        <div className="flex items-center border-2 border-[#8c8c73] rounded-full px-5 max-md:px-[5vw] py-1 max-md:py-[0vw]">
                            <h4>
                                HTML
                            </h4>
                            <Dot size={40} color="#8c8c73" />
                            <h4>
                                CSS
                            </h4>
                            <Dot size={40} color="#8c8c73" />
                            <h4>
                                Vite
                            </h4>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-5xl max-md:[2vw] font-medium text-white mt-3 mb-3">
                            Cafi
                        </h2>
                        <div className="flex items-center whitespace-nowrap">
                            <h3 className="text-[1.875vw] max-md:text-[4vw] opacity-[70%]">
                                Front-End Development
                            </h3>
                            <Dot size={40} color="#ffffff" className="opacity-[60%]" />
                            <h3 className="text-[1.875vw] max-md:text-[4vw] opacity-[70%]">
                                School Project
                            </h3>
                        </div>
                    </div>
                </div>

                {/* Contact Page */}
                <div className="flex flex-col max-md:ml-0">
                    <div className="max-md:px-5 max-md:pt-7">
                        <div>
                            <div className="flex w-[100%] max-w-[660px] max-h-[560px] mt-5 overflow-hidden transition-all hover:rounded-3xl">
                                <img src="/Contact-page.png" className="w-[100%] max-md:w-[1000px] transition-all hover:scale-[1.05]" />
                            </div>
                        </div>
                        <div className="flex gap-4 text-[#8c8c73] text-2xl max-md:text-[3.4vw] max-sm:gap-2 mt-8">
                            <div className="flex items-center border-2 border-[#8c8c73] rounded-full px-5 max-md:px-[5vw] py-1 max-md:py-[0vw]">
                                <h4>
                                    2023
                                </h4>
                            </div>
                            <div className="flex items-center border-2 border-[#8c8c73] rounded-full px-5 max-md:px-[5vw] py-1 max-md:py-[0vw]">
                                <h4>
                                    HTML
                                </h4>
                                <Dot size={40} color="#8c8c73" />
                                <h4>
                                    CSS
                                </h4>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-5xl max-md:[2vw] font-medium text-white mt-3 mb-3">
                                Contact Page
                            </h2>
                            <div className="flex items-center whitespace-nowrap">
                                <h3 className="text-[1.875vw] max-md:text-[4vw] opacity-[70%]">
                                    Front-End Development
                                </h3>
                                <Dot size={40} color="#ffffff" className="opacity-[60%]" />
                                <h3 className="text-[1.875vw] max-md:text-[4vw] opacity-[70%]">
                                    Self Project
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}
