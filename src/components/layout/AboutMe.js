"use client";
import Image from "next/image"
import Sparkle from "../icons/sparkle"
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export default function AboutMe() {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});

    const mainControls = useAnimation()

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    })

    return (
        <section id="about-me" className="flex flex-col items-center px-20 py-24 max-sm:py-5 overflow-x-hidden">
            <motion.h3 ref={ref} className="flex relative gap-3 text-slate-400 text-sm items-center bg-white px-4 py-1 rounded-full border border-outline"
                variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.2, delay: 0.23 }}
            >
                <Sparkle />
                Get to know more
            </motion.h3>
            <motion.h2 className="text-black text-6xl text-center mt-4"
                variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.2, delay: 0.35 }}
            >
                About Me
            </motion.h2>

            <div className="flex flex-wrap md:flex-nowrap sm:flex-nowrap gap-11 py-20 align-middle items-center">
                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: 10 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{ duration: 0.2, delay: 0.47 }}
                >
                    <Image src={"/leaf-about-me.jpg"} width={400} height={400} className="max-sm:w-128 max-sm:h-64 relative rounded-3xl" />
                </motion.div>
                <div>
                    <div className="flex gap-10 flex-wrap relative justify-center align-middle">
                        <motion.div className="flex flex-col gap-1 border-2 border-slate-500 rounded-3xl text-black bg-white px-[7rem] py-10 text-center items-center"
                            variants={{
                                hidden: { opacity: 0, x: -10 },
                                visible: { opacity: 1, x: 0 },
                            }}
                            initial="hidden"
                            animate={mainControls}
                            transition={{ duration: 0.2, delay: 0.59 }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#1a1a1a" viewBox="0 0 256 256">
                                <path 
                                    d="M216,96A88,88,0,1,0,72,163.83V240a8,8,0,0,0,11.58,7.16L128,225l44.43,22.21A8.07,8.07,0,0,0,176,248a8,8,0,0,0,8-8V163.83A87.85,87.85,0,0,0,216,96ZM56,96a72,72,0,1,1,72,72A72.08,72.08,0,0,1,56,96Zm16,0a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z">
                                </path>
                            </svg>  
                            <h4 className="font-bold text-lg">Front-End </h4>
                            <p className="text-slate-600">+1 years</p>
                            <p className="text-slate-600">3 Projects</p>
                        </motion.div>

                        <motion.div className="flex flex-col gap-1 border-2 border-slate-500 rounded-3xl text-black bg-white px-[7rem] py-10 text-center items-center"
                            variants={{
                                hidden: { opacity: 0, x: 10 },
                                visible: { opacity: 1, x: 0 },
                            }}
                            initial="hidden"
                            animate={mainControls}
                            transition={{ duration: 0.2, delay: 0.71 }}
                        >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#0a0a0a" viewBox="0 0 256 256">
                            <path 
                                d="M221.69,199.77,160,96.92V40h8a8,8,0,0,0,0-16H88a8,8,0,0,0,0,16h8V96.92L34.31,199.77A16,16,0,0,0,48,224H208a16,16,0,0,0,13.72-24.23ZM110.86,103.25A7.93,7.93,0,0,0,112,99.14V40h32V99.14a7.93,7.93,0,0,0,1.14,4.11L183.36,167c-12,2.37-29.07,1.37-51.75-10.11-15.91-8.05-31.05-12.32-45.22-12.81ZM48,208l28.54-47.58c14.25-1.74,30.31,1.85,47.82,10.72,19,9.61,35,12.88,48,12.88a69.89,69.89,0,0,0,19.55-2.7L208,208Z">
                            </path>
                        </svg>
                            <h4 className="font-bold text-lg">Back-End</h4>
                            <p className="text-slate-600">+2 years</p>
                            <p className="text-slate-600">HomeLab</p>
                        </motion.div>
                    </div>

                    <motion.p className="text-black mt-10 leading-relaxed max-w-3xl"
                        variants={{
                            hidden: { opacity: 0, y: 10 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        initial="hidden"
                        animate={mainControls}
                        transition={{ duration: 0.2, delay: 0.83 }}
                    >
                    I have studied web development for a year, and during this time,
                    I realized I have passionate in designing user interfaces for websites. 
                    I focus on making interfaces easy to use and work well on different mobile devices. 
                    Besides, I've spent two years self-learning about how servers operate and how to put apps on them.
                    </motion.p>
                </div>

            </div>
        </section>
    )
}