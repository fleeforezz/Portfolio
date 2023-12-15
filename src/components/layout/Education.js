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
        <section id="education" className="flex flex-col items-center px-20 max-sm:px-3 py-24 max-sm:py-5 overflow-x-hidden">
            <span ref={ref} className="absolute max-sm:hidden bg-slate-500 px-[1px] py-[700px] left-[50%] -translate-x-[50%] translate-y-[12%]"></span>
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

            <div className="grid grid-cols-2 max-sm:grid-cols-1 max-sm:gap-2 gap-20 px-5 py-20">
                <div className="p-10 max-sm:p-5 bg-white border-2 border-slate-500 rounded-3xl transition-all hover:scale-[1.05]">
                    <Image src={'/FPTU.svg'} width={100} height={100} />
                    <h3 className="font-bold">
                        FPT University
                    </h3>
                    <p>2022</p>
                </div>
                <div className="max-sm:hidden"></div>
                <div className="max-sm:hidden"></div>
                <div className="p-10 max-sm:p-5 bg-white border-2 border-slate-500 rounded-3xl transition-all hover:scale-[1.05]">
                    <Image src={'/Udemy_logo.svg'} width={100} height={100} />
                    <h3 className="font-bold">
                        Docker and Kubernetes: The Complete Guide
                    </h3>
                    <p>2022</p>
                </div>
                <div className="p-10 max-sm:p-5 bg-white border-2 border-slate-500 rounded-3xl transition-all hover:scale-[1.05]">
                    <Image src={'/coursera.svg'} width={100} height={100} />
                    <h3 className="font-bold">
                        Basics of Web Development & Coding
                    </h3>
                    <p>2022</p>
                </div>
                <div className="max-sm:hidden"></div>
                <div className="max-sm:hidden"></div>
                <div className="p-10 max-sm:p-5 bg-white border-2 border-slate-500 rounded-3xl transition-all hover:scale-[1.05]">
                    <Image src={'/Udemy_logo.svg'} width={100} height={100} />
                    <h3 className="font-bold">
                        Java Programming MasterClass
                    </h3>
                    <p>2023</p>
                </div>
                <div className="max-sm:hidden"></div>
                <div className="max-sm:hidden"></div>
                <div className="p-10 max-sm:p-5 bg-white border-2 border-slate-500 rounded-3xl transition-all hover:scale-[1.05]">
                    <Image src={'/Udemy_logo.svg'} width={100} height={100} />
                    <h3 className="font-bold">
                        The Ultimate MySQL Bootcamp: Go from SQL Beginner to Expert
                    </h3>
                    <p>2023</p>
                </div>
            </div>
        </section>
    )
}