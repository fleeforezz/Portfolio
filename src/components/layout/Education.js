"use client";
import Sparkle from "../icons/sparkle"
import Image from "next/image"
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export default function Education() {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});

    const mainControls = useAnimation()

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    })

    return (
        <section id="education" className="flex flex-col items-center px-20 max-sm:px-3 pt-24 max-sm:pt-5 overflow-x-hidden">
            <div>
                <motion.span ref={ref} className="absolute max-sm:hidden bg-slate-500 px-[1px] py-[650px] left-[50%] -translate-x-[50%] translate-y-[50%]"
                    variants={{
                        hidden: { opacity: 0, y: 10 },
                        visible: { opacity: 1, y: "15%" },
                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{ duration: 0.4, delay: 0.23 }}
                ></motion.span>
                <div className="absolute flex flex-col gap-[12.3rem] left-[50%] -translate-x-[50%] translate-y-[28%]">
                    <motion.div className="bg-white p-3 border border-slate-300 rounded-full"
                        variants={{
                            hidden: { opacity: 0, y: 10 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        initial="hidden"
                        animate={mainControls}
                        transition={{ duration: 0.4, delay: 0.45 }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#0c0c0d" viewBox="0 0 256 256">
                            <path 
                                d="M226.53,56.41l-96-32a8,8,0,0,0-5.06,0l-96,32A8,8,0,0,0,24,64v80a8,8,0,0,0,16,0V75.1L73.59,86.29a64,64,0,0,0,20.65,88.05c-18,7.06-33.56,19.83-44.94,37.29a8,8,0,1,0,13.4,8.74C77.77,197.25,101.57,184,128,184s50.23,13.25,65.3,36.37a8,8,0,0,0,13.4-8.74c-11.38-17.46-27-30.23-44.94-37.29a64,64,0,0,0,20.65-88l44.12-14.7a8,8,0,0,0,0-15.18ZM176,120A48,48,0,1,1,89.35,91.55l36.12,12a8,8,0,0,0,5.06,0l36.12-12A47.89,47.89,0,0,1,176,120Z">
                            </path>
                        </svg>
                    </motion.div>
                    <motion.div className="bg-white p-3 border border-slate-300 rounded-full"
                        variants={{
                            hidden: { opacity: 0, y: 10 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        initial="hidden"
                        animate={mainControls}
                        transition={{ duration: 0.4, delay: 0.57 }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#0c0c0d" viewBox="0 0 256 256">
                            <path 
                                d="M69.12,94.15,28.5,128l40.62,33.85a8,8,0,1,1-10.24,12.29l-48-40a8,8,0,0,1,0-12.29l48-40a8,8,0,0,1,10.24,12.3Zm176,27.7-48-40a8,8,0,1,0-10.24,12.3L227.5,128l-40.62,33.85a8,8,0,1,0,10.24,12.29l48-40a8,8,0,0,0,0-12.29ZM162.73,32.48a8,8,0,0,0-10.25,4.79l-64,176a8,8,0,0,0,4.79,10.26A8.14,8.14,0,0,0,96,224a8,8,0,0,0,7.52-5.27l64-176A8,8,0,0,0,162.73,32.48Z">
                            </path>
                        </svg>
                    </motion.div>
                    <motion.div className="bg-white p-3 border border-slate-300 rounded-full"
                        variants={{
                            hidden: { opacity: 0, y: 10 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        initial="hidden"
                        animate={mainControls}
                        transition={{ duration: 0.4, delay: 0.69 }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#0c0c0d" viewBox="0 0 256 256">
                            <path 
                                d="M216,40H72A16,16,0,0,0,56,56V72H40A16,16,0,0,0,24,88V200a16,16,0,0,0,16,16H184a16,16,0,0,0,16-16V184h16a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM184,88v16H40V88Zm0,112H40V120H184v80Zm32-32H200V88a16,16,0,0,0-16-16H72V56H216Z">
                            </path>
                        </svg>
                    </motion.div>
                    <motion.div className="bg-white p-3 border border-slate-300 rounded-full"
                        variants={{
                            hidden: { opacity: 0, y: 10 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        initial="hidden"
                        animate={mainControls}
                        transition={{ duration: 0.4, delay: 0.81 }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#0c0c0d" viewBox="0 0 256 256">
                            <path 
                                d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,160H40V56H216V200ZM80,84A12,12,0,1,1,68,72,12,12,0,0,1,80,84Zm40,0a12,12,0,1,1-12-12A12,12,0,0,1,120,84Z">
                            </path>
                        </svg>
                    </motion.div>
                    <motion.div className="bg-white p-3 border border-slate-300 rounded-full"
                        variants={{
                            hidden: { opacity: 0, y: 10 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        initial="hidden"
                        animate={mainControls}
                        transition={{ duration: 0.4, delay: 0.92 }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#0c0c0d" viewBox="0 0 256 256">
                            <path 
                                d="M128,24C74.17,24,32,48.6,32,80v96c0,31.4,42.17,56,96,56s96-24.6,96-56V80C224,48.6,181.83,24,128,24Zm80,104c0,9.62-7.88,19.43-21.61,26.92C170.93,163.35,150.19,168,128,168s-42.93-4.65-58.39-13.08C55.88,147.43,48,137.62,48,128V111.36c17.06,15,46.23,24.64,80,24.64s62.94-9.68,80-24.64ZM69.61,53.08C85.07,44.65,105.81,40,128,40s42.93,4.65,58.39,13.08C200.12,60.57,208,70.38,208,80s-7.88,19.43-21.61,26.92C170.93,115.35,150.19,120,128,120s-42.93-4.65-58.39-13.08C55.88,99.43,48,89.62,48,80S55.88,60.57,69.61,53.08ZM186.39,202.92C170.93,211.35,150.19,216,128,216s-42.93-4.65-58.39-13.08C55.88,195.43,48,185.62,48,176V159.36c17.06,15,46.23,24.64,80,24.64s62.94-9.68,80-24.64V176C208,185.62,200.12,195.43,186.39,202.92Z">
                            </path>
                        </svg>
                    </motion.div>
                </div>
            </div>
            <motion.h3 className="flex relative gap-3 text-slate-400 text-sm items-center bg-white px-4 py-1 rounded-full border border-outline"
                variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.4, delay: 0.23 }}
            >
                <Sparkle />
                Learn new things
            </motion.h3>
            <motion.h2 className="text-black text-6xl text-center mt-4"
                variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.4, delay: 0.35 }}
            >
                Education
            </motion.h2>

            <div className="grid grid-cols-2 max-sm:grid-cols-1 max-sm:gap-2 gap-x-36 gap-y-20 px-5 py-[7.9rem] w-[70%] max-xl:w-[100%]">
                <motion.div className="p-10 max-sm:p-5 bg-white border-2 border-slate-500 rounded-3xl transition-all hover:scale-[1.05]"
                    variants={{
                        hidden: { opacity: 0, x: -15 },
                        visible: { opacity: 1, x: 0 },
                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{ duration: 0.4, delay: 1.04 }}
                >
                    <Image src={'/FPTU.svg'} width={100} height={100} />
                    <h3 className="font-bold">
                        FPT University
                    </h3>
                    <p>2022</p>
                </motion.div>
                <motion.div className="max-sm:hidden flex justify-start items-center"
                    variants={{
                        hidden: { opacity: 0, x: 15 },
                        visible: { opacity: 1, x: 0 },
                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{ duration: 0.4, delay: 1.04 }}
                >
                    2022
                </motion.div>
                <motion.div className="max-sm:hidden flex justify-end items-center"
                    variants={{
                        hidden: { opacity: 0, x: -15 },
                        visible: { opacity: 1, x: 0 },
                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{ duration: 0.4, delay: 1.54 }}
                >
                    2022
                </motion.div>
                <motion.div className="p-10 max-sm:p-5 bg-white border-2 border-slate-500 rounded-3xl transition-all hover:scale-[1.05]"
                    variants={{
                        hidden: { opacity: 0, x: 15 },
                        visible: { opacity: 1, x: 0 },
                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{ duration: 0.4, delay: 1.54 }}
                >
                    <Image src={'/Udemy_logo.svg'} width={100} height={100} />
                    <h3 className="font-bold">
                        Docker and Kubernetes: The Complete Guide
                    </h3>
                    <p>2022</p>
                </motion.div>
                <motion.div className="p-10 max-sm:p-5 bg-white border-2 border-slate-500 rounded-3xl transition-all hover:scale-[1.05]"
                    variants={{
                        hidden: { opacity: 0, x: -15 },
                        visible: { opacity: 1, x: 0 },
                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{ duration: 0.4, delay: 2.04 }}
                >
                    <Image src={'/coursera.svg'} width={50} height={50} />
                    <h3 className="font-bold">
                        Basics of Web Development & Coding
                    </h3>
                    <p>2022</p>
                </motion.div>
                <motion.div className="max-sm:hidden flex justify-start items-center"
                    variants={{
                        hidden: { opacity: 0, x: 15 },
                        visible: { opacity: 1, x: 0 },
                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{ duration: 0.4, delay: 2.04 }}
                >
                    2022
                </motion.div>
                <motion.div className="max-sm:hidden flex justify-end items-center"
                    variants={{
                        hidden: { opacity: 0, x: -15 },
                        visible: { opacity: 1, x: 0 },
                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{ duration: 0.4, delay: 2.54 }}
                >
                    2023
                </motion.div>
                <motion.div className="p-10 max-sm:p-5 bg-white border-2 border-slate-500 rounded-3xl transition-all hover:scale-[1.05]"
                    variants={{
                        hidden: { opacity: 0, x: 15 },
                        visible: { opacity: 1, x: 0 },
                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{ duration: 0.4, delay: 2.54 }}
                >
                    <Image src={'/Udemy_logo.svg'} width={100} height={100} />
                    <h3 className="font-bold">
                        Java Programming MasterClass
                    </h3>
                </motion.div>
                <motion.div className="p-10 max-sm:p-5 bg-white border-2 border-slate-500 rounded-3xl transition-all hover:scale-[1.05]"
                    variants={{
                        hidden: { opacity: 0, x: -15 },
                        visible: { opacity: 1, x: 0 },
                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{ duration: 0.4, delay: 3.04 }}
                >
                    <Image src={'/Udemy_logo.svg'} width={100} height={100} />
                    <h3 className="font-bold">
                        The Ultimate MySQL Bootcamp: Go from SQL Beginner to Expert
                    </h3>
                </motion.div>
                <motion.div className="max-sm:hidden flex justify-start items-center"
                    variants={{
                        hidden: { opacity: 0, x: 15 },
                        visible: { opacity: 1, x: 0 },
                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{ duration: 0.4, delay: 3.54 }}
                >
                    2023
                </motion.div>
            </div>
        </section>
    )
}