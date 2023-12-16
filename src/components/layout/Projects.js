"use client";
import Sparkle from "../icons/sparkle"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Projects() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"],
    });
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

    return (
        <section id="projects" className="flex flex-col items-center px-14 max-sm:px-10 py-24 max-sm:py-5 transition-all mx-auto">
            <h3 className="flex relative gap-3 text-slate-400 text-sm items-center bg-white px-4 py-1 rounded-full border border-outline">
                <Sparkle />
                Browse my recent
            </h3>
            <h2 className="text-black text-6xl text-center mt-4">
                Projects
            </h2>

            <div className="projects grid grid-cols-3 max-sm:grid-cols-1 max-md:grid-cols-2 gap-10 py-10">
                <motion.div className="flex flex-col items-center border-2 border-slate-500 p-10 rounded-3xl bg-slate-50"
                    ref={ref}
                    style={{
                        scale: scaleProgress,
                        opacity: scrollYProgress,
                    }}
                >
                    <Image src={'/portfolio.png'} width={500} height={500} className="w-64 max-sm:w-54 h-64 max-sm:h-40 object-cover rounded-3xl"/>
                    <h3 className="text-center text-3xl font-medium p-4">
                        Portfolio
                    </h3>
                    <div className="flex gap-2">
                        <a href="https://fleeforezz.me" target="_blank" className="px-6 max-sm:px-4 py-3 max-sm:py-2 border-2 border-black rounded-full hover:bg-black hover:text-white transition-all">
                            Live demo
                        </a>
                        <a href="" className="px-6 max-sm:px-4 py-3 max-sm:py-2 border-2 border-black rounded-full bg-black text-white hover:bg-white hover:text-black transition-all">
                            Github
                        </a>
                    </div>
                </motion.div>

                <motion.div className="flex flex-col items-center border-2 border-slate-500 p-10 rounded-3xl bg-slate-50"
                    style={{
                        scale: scaleProgress,
                        opacity: scrollYProgress,
                    }}
                >
                    <Image src={'/HomeLab.png'} width={500} height={500} className="w-64 max-sm:w-54 h-64 max-sm:h-40 object-cover rounded-3xl"/>
                    <h3 className="text-center text-3xl font-medium p-4">
                        HomeLab
                    </h3>
                    <div className="flex gap-2">
                        <a href="https://homarr.fleeforezz.me" target="_blank" className="px-6 max-sm:px-4 py-3 max-sm:py-2 border-2 border-black rounded-full hover:bg-black hover:text-white transition-all">
                            Live demo
                        </a>
                    </div>
                </motion.div>

                <motion.div className="flex flex-col items-center border-2 border-slate-500 p-10 rounded-3xl bg-slate-50"
                    style={{
                        scale: scaleProgress,
                        opacity: scrollYProgress,
                    }}
                >
                    <Image src={'/Coffee-1900.png'} width={500} height={500} className="w-64 max-sm:w-54 h-64 max-sm:h-40 object-cover rounded-3xl"/>
                    <h3 className="text-center text-3xl font-medium p-4">
                        Coffee 1900
                    </h3>
                    <div className="flex gap-2">
                        <a href="https://coffee1900.fleeforezz.me" target="_blank" className="px-6 max-sm:px-4 py-3 max-sm:py-2 border-2 border-black rounded-full hover:bg-black hover:text-white transition-all">
                            Live demo
                        </a>
                        <a href="https://github.com/fleeforezz/Work_place/tree/main/Huflit/Coffee_1900" target="_blank" className="px-6 max-sm:px-4 py-3 max-sm:py-2 border-2 bg-black text-white border-black rounded-full hover:bg-white hover:text-black transition-all">
                            Github
                        </a>
                    </div>
                </motion.div>

                <motion.div className="flex flex-col items-center border-2 border-slate-500 p-10 rounded-3xl bg-slate-50"
                    style={{
                        scale: scaleProgress,
                        opacity: scrollYProgress,
                    }}
                >
                    <Image src={'/Cafi.png'} width={500} height={500} className="w-64 max-sm:w-54 h-64 max-sm:h-40 object-cover rounded-3xl"/>
                    <h3 className="text-center text-3xl font-medium p-4">
                        Cafi
                    </h3>
                    <div className="flex gap-2">
                        <a href="https://cafi.vercel.app/" target="_blank" className="px-6 max-sm:px-4 py-3 max-sm:py-2 border-2 border-black rounded-full hover:bg-black hover:text-white transition-all">
                            Live demo
                        </a>
                        <a href="https://github.com/fleeforezz/Work_place/tree/main/Huflit/Coffee_1900" target="_blank" className="px-6 max-sm:px-4 py-3 max-sm:py-2 border-2 border-black text-white bg-black rounded-full hover:bg-white hover:text-black transition-all">
                            Github
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}