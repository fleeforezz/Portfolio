"use client"
import { GithubLogo, LinkedinLogo, InstagramLogo, GitlabLogoSimple } from "@phosphor-icons/react"
import { motion, useInView, useAnimation } from "framer-motion"
import { useEffect, useRef } from "react"

const banner = {
    animate: {
        transition: {
            delayChildren: 0.2,
            staggerChildren: 0.3    ,
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
            duration: 0.3,
        },
    },
}

const listAnimation = {
    initial: {
        y: 20,
        opacity:0,
    },
    animate: {
        y:0,
        opacity: 1,
        delay: 3,
        transition: {
            duration: 0.3,
        }
    }
}

export default function Contact() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const mainControls = useAnimation()

    useEffect(() => {
        if (isInView) {
            mainControls.start("animate");
        }
    })
    return (
        <motion.section id="contact" className=""
            variants={banner}
            initial="initial"
            animate={mainControls}
        >
            <motion.h1 className="flex gap-10 justify-center items-center font-medium text-center text-[#8c8c73] text-[8vw] max-sm:text-[10vw] pt-32 max-sm:pt-10"
                variants={letterAnimation}
            >
                <div className="max-md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 200 200" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M200 150C200 94.7715 155.228 50 100 50C44.7715 50 0 94.7715 0 150H200Z" fill="#8c8c73" />
                    </svg>
                </div>
                CONTACTS
                <div className="max-md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 200 200" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M200 150C200 94.7715 155.228 50 100 50C44.7715 50 0 94.7715 0 150H200Z" fill="#8c8c73" />
                    </svg>
                </div>
            </motion.h1>

            <div ref={ref} className="flex max-md:flex-wrap justify-around gap-10">
                <div className="max-md:px-5">
                    <motion.h1 className="font-bold text-[4.5vw] max-md:text-[7vw] leading-[5rem] max-md:leading-7"
                        variants={letterAnimation}
                    >
                        Have an awesome idea
                        <br></br>
                        Let's share with me.
                    </motion.h1>
                    <motion.p className="text-3xl max-md:text-[6vw] mt-10 mb-10"
                        variants={letterAnimation}
                    >
                        Changing and adapting new things
                        is my calling.
                    </motion.p>
                    <motion.img src="/image.gif" className="w-[100%]" variants={letterAnimation}/>
                </div>


                <div className="max-md:w-[100%] max-md:px-5">
                    <div>
                        <motion.h2 className="text-[1.875vw] max-md:text-[4.5vw] font-semibold"
                            variants={listAnimation}
                        >
                            Contact Detailed
                        </motion.h2>
                        <motion.div className="text-[1.5vw] max-md:text-[3.5vw] text-gray-500 mt-3"
                            variants={listAnimation}
                        >
                            <h3>
                                nhattruong.tmn@gmail.com
                            </h3>
                        </motion.div>
                    </div>

                    <div className="mt-10 max-md:mt-5">
                        <motion.h2 className="text-[1.875vw] max-md:text-[4.5vw] font-semibold"
                            variants={listAnimation}
                        >
                            My Digital Spaces
                        </motion.h2>
                        <motion.div className="text-[1.5vw] max-md:text-[3.5vw] text-gray-500 mt-5"
                            variants={listAnimation}
                        >
                            <a href="https://github.com/fleeforezz" target="_blank" className="flex items-center gap-2">
                                <GithubLogo size={36} color="#0a0a0a" />
                                <span className="github relative">
                                    Github
                                </span>
                            </a>
                            <a href="https://gitlab.fleeforezz.me/jso" target="_blank" className="gitlab flex items-center gap-2 mt-5 mb-5">
                                <GitlabLogoSimple size={36} color="#0a0a0a" />
                                <span className="gitlab relative">
                                    Gitlab
                                </span>
                            </a>
                            <a href="https://www.linkedin.com/in/nhattruongminh/" target="_blank" className="linkedin flex items-center gap-2 mt-5 mb-5">
                                <LinkedinLogo size={36} color="#0a0a0a" />
                                <span className="linkedin relative">
                                    LinkedIn
                                </span>
                            </a>
                            <a href="https://www.instagram.com/tmn_nhat/" target="_blank" className="insta flex items-center gap-2">
                                <InstagramLogo size={36} color="#0a0a0a" />
                                <span className="insta relative">
                                    Instagram
                                </span>
                            </a>
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}