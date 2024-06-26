"use client";
import { motion } from "framer-motion"

// Image animation
const img = {
    hidden: {
        opacity: 0,
        scale: 2,
        x: "50%",
        y: "-50%",
    },
    visible: {
        opacity: 1,
        scale: 1,
        x: "57%",
        y: "0%",
        transition: {
            duration: 2.5,
            delay: 0.23,
        },
    },
}

// Letter animation
const banner = {
    animate: {
        transition: {
            delayChildren: 0.4,
            staggerChildren: 0.1,
        },
    },
}
const letterAnimation = {
    initial: {
        y:400,
        scale: 0,
    },
    animate: {
        y:0,
        scale: 1,
        delay: 2,
        transition: {
            ease: [0.6, 0.01, -0.05, 0.95],
            duration: 2,
        },
    },
}

export default function Hero() {
    return (
        <section id="hero" className="h-screen py-20 max-md:pt-64 max-md:py-36">
            <motion.img
                src="/hero-img.jpg"
                className="absolute rounded-md w-[45%] max-sm:w-[60%] max-sm:left-[-13%] -z-[2]"
                variants={img}
                initial="hidden"
                animate="visible"
                transition={{ duration: 2.5, delay: 0.23 }}
            />

            <motion.div
                variants={banner}
                initial="initial"
                animate="animate"
            >
                <motion.h1 className="heading-1 text-[10vw] max-md:text-[11.5vw] text-[#262626] font-extrabold text-center"
                    variants={letterAnimation}
                >
                    HEY, I'M NHAT
                </motion.h1>
                <motion.h1 class="outline-text text-center"
                    variants={letterAnimation}
                >
                    HEY, I'M NHAT
                </motion.h1>
                <motion.h1 className="heading-3 text-[10vw] max-md:text-[11.5vw] text-[#262626] font-extrabold text-center text-balance"
                    variants={letterAnimation}
                >
                    HEY, I'M NHAT
                </motion.h1>
            </motion.div>

            <div className="absolute bottom-20 right-0 rotate-90">
                <span className="font-medium">scroll</span>
                <span className="absolute -bottom-[0.5rem] left-16 bg-black px-[0.7px] py-5 bounce"></span>
            </div>
        </section>
    )
}