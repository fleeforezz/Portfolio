"use client"
import { Atom } from "@phosphor-icons/react"

export default function Services() {
    return (
        <section id="services" className="px-20 max-md:px-5">
            <h1 className="flex gap-3 justify-center items-center font-medium text-center text-[#8c8c73] text-[8vw] pt-24 pb-10">
                <Atom size={36} color="#8c8c73" />
                SERVICES
                <Atom size={36} color="#8c8c73" />
            </h1>

            <div className="grid grid-cols-2 gap-24 max-md:gap-10 max-md:grid-cols-1">
                <div>
                    <h2 className="font-bold text-[4.5vw] max-md:text-[7vw]">
                        my expertises.
                    </h2>
                    <p className="text-[1.875vw] max-md:text-[4vw] mt-10">I focus on all things design and web related. 
                        With each of my services, my goal is to deliver 
                        an impactful and elevating digital experience for everyone.
                    </p>
                </div>

                <span className="hidden max-md:flex bg-[#aeae9d] w-[100%] h-1"></span>

                <div className="font-extrabold text-[4.5vw] max-md:text-[7vw] text-[#aeae9d] max-md:leading-10">
                    <h3>Web</h3>
                    <h3>Development</h3>
                    <h3>Web Design</h3>
                    <h3>Wireframing</h3>
                    <h3>UI/UX Design</h3>
                    <h3>Branding</h3>
                </div>

                <div>
                    <h2 className="font-bold text-[4.5vw] max-md:text-[7vw]">
                        my digital tool box.
                    </h2>
                    <p className="text-[1.875vw] max-md:text-[4vw] mt-10">
                        These are my go to tech stack to make any projects happen. 
                        I am always eager of learning more about my current stack, 
                        and new technologies that could expand my horizons.
                    </p>
                </div>

                <span className="hidden max-md:flex bg-[#aeae9d] w-[100%] h-1"></span>

                <div className="font-extrabold text-[4.5vw] max-md:text-[7vw] text-[#aeae9d] max-md:leading-10">
                    <h3>Javascript</h3>
                    <h3>HTML</h3>
                    <h3>CSS</h3>
                    <h3>Figma</h3>
                    <h3>Webflow</h3>
                    <h3>TailwindCSS</h3>
                    <h3>ReactJS</h3>
                </div>
            </div>
        </section>
    )
}