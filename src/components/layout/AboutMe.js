import Image from "next/image"
import Sparkle from "../icons/sparkle"

export default function AboutMe() {
    return (
        <section id="about-me" className="flex flex-col items-center px-20 py-24 max-sm:py-5 overflow-x-hidden">
            <h3 className="flex relative gap-3 text-slate-400 text-sm items-center bg-white px-4 py-1 rounded-full border border-outline">
                <Sparkle />
                Get to know more
            </h3>
            <h2 className="text-black text-6xl text-center mt-4">
                About Me
            </h2>

            <div className="flex flex-wrap md:flex-nowrap sm:flex-nowrap gap-11 py-20 align-middle items-center">
                <Image src={"/leaf-about-me.jpg"} width={400} height={400} className="relative rounded-3xl" />
                <div>
                    <div className="flex gap-10 flex-wrap relative justify-center align-middle">
                        <div className="flex flex-col gap-1 border-2 border-slate-500 rounded-3xl text-black bg-white px-[7rem] py-10 text-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#1a1a1a" viewBox="0 0 256 256">
                                <path 
                                    d="M216,96A88,88,0,1,0,72,163.83V240a8,8,0,0,0,11.58,7.16L128,225l44.43,22.21A8.07,8.07,0,0,0,176,248a8,8,0,0,0,8-8V163.83A87.85,87.85,0,0,0,216,96ZM56,96a72,72,0,1,1,72,72A72.08,72.08,0,0,1,56,96Zm16,0a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z">
                                </path>
                            </svg>  
                            <h4 className="font-bold text-lg">Experience</h4>
                            <p className="text-slate-600">+2 years</p>
                            <p className="text-slate-600">Front-End Developer</p>
                        </div>
                        <div className="flex flex-col gap-1 border-2 border-slate-500 rounded-3xl text-black bg-white px-[7rem] py-10 text-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#1a1a1a" viewBox="0 0 256 256">
                                <path 
                                    d="M176,207.24a119,119,0,0,0,16-7.73V240a8,8,0,0,1-16,0Zm11.76-88.43-56-29.87a8,8,0,0,0-7.52,14.12L171,128l17-9.06Zm64-29.87-120-64a8,8,0,0,0-7.52,0l-120,64a8,8,0,0,0,0,14.12L32,117.87v48.42a15.91,15.91,0,0,0,4.06,10.65C49.16,191.53,78.51,216,128,216a130,130,0,0,0,48-8.76V130.67L171,128l-43,22.93L43.83,106l0,0L25,96,128,41.07,231,96l-18.78,10-.06,0L188,118.94a8,8,0,0,1,4,6.93v73.64a115.63,115.63,0,0,0,27.94-22.57A15.91,15.91,0,0,0,224,166.29V117.87l27.76-14.81a8,8,0,0,0,0-14.12Z">
                                </path>
                            </svg>
                            <h4 className="font-bold text-lg">Education</h4>
                            <p className="text-slate-600">+2 years</p>
                            <p className="text-slate-600">Back-End Developer</p>
                        </div>
                    </div>
                    <p className="text-black mt-10 leading-relaxed max-w-3xl">
                    I have studied web development for a year, and during this time,
                    I realized I have passionate in designing user interfaces for websites. 
                    I focus on making interfaces easy to use and work well on different mobile devices. 
                    Besides, I've spent two years self-learning about how servers operate and how to put apps on them.
                    </p>
                </div>

            </div>
        </section>
    )
}