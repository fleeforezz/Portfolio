"use client"
import { Atom, Dot } from "@phosphor-icons/react"

export default function Projects() {
    return (
        <section id="projects" className="bg-black">
            <div className="px-20 max-md:px-5">
                <h1 className="flex gap-3 justify-center items-center font-medium text-center text-[#8c8c73] text-9xl max-md:text-[8vw] pt-24 pb-10">
                    <Atom size={36} color="#8c8c73" />
                    PROJECTS
                    <Atom size={36} color="#8c8c73" />
                </h1>
                <div>
                    <div className="flex flex-col items-center justify-center">
                        <div className="flex w-[100%] max-w-[1750px]  max-h-[1000px] overflow-hidden transition-all hover:rounded-3xl">
                            <img src="/HomeLab.png" className="w-[100%] transition-all hover:scale-[1.05]" />
                        </div>
                    </div>
                    <div className="flex gap-4 text-[#8c8c73] text-2xl max-md:text-[3.4vw] mt-8">
                        <div className="flex items-center border-2 border-[#8c8c73] rounded-full px-5 max-md:px-[5vw] py-1 max-md:py-[0vw]">
                            2023
                        </div>
                        <div className="flex justify-start items-center border-2 border-[#8c8c73] rounded-full px-5 max-md:px-[5vw] py-1 max-md:py-[0vw]">
                            NAS
                            <Dot size={40} color="#8c8c73" />
                            Test Apps
                            <Dot size={40} color="#8c8c73" />
                            Sevices
                        </div>
                    </div>
                    <div>
                        <h2 className="text-5xl max-md:[2vw] font-medium text-white mt-3 mb-3">
                            HomeLab
                        </h2>
                        <h3 className="flex text-white font-thin opacity-90 text-3xl max-md:text-[4vw] items-center">
                            Linux server
                            <Dot size={40} color="#ffffff" />
                            Docker
                            <Dot size={40} color="#ffffff" />
                            Devop
                        </h3>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2 pl-6 max-md:pl-0 md:pl-[5rem] max-md:grid-cols-1">
                <div className="max-md:px-5">
                    <div className="pt-10 max-md:pt-7">
                        <div className="flex w-[100%] max-w-[950px] max-h-[2000px] mt-10 overflow-hidden transition-all hover:rounded-3xl">
                            <img src="/Coffee-1900.png" className="w-[100%] transition-all hover:scale-[1.05]" />
                        </div>
                    </div>
                    <div className="flex gap-4 text-[#8c8c73] text-2xl max-md:text-[3.4vw] mt-8">
                        <div className="flex items-center border-2 border-[#8c8c73] rounded-full px-5 max-md:px-[5vw] py-1 max-md:py-[0vw]">
                            2023
                        </div>
                        <div className="flex justify-start items-center border-2 border-[#8c8c73] rounded-full px-5 max-md:px-[5vw] py-1 max-md:py-[0vw]">
                            HTML
                            <Dot size={40} color="#8c8c73" />
                            CSS
                            <Dot size={40} color="#8c8c73" />
                            Vite
                        </div>
                    </div>
                    <div>
                        <h2 className="text-5xl max-md:[2vw] font-medium text-white mt-3 mb-3">
                            Coffee 1900
                        </h2>
                        <h3 className="flex text-white font-thin opacity-90 text-3xl max-md:text-[4vw] items-center">
                            Front-End Development
                            <Dot size={40} color="#ffffff" />
                            School Project
                        </h3>
                    </div>
                </div>

                <div className="flex flex-col justify-center ml-24 max-md:ml-0">
                    <div className="max-md:px-5">
                        <div>
                            <div className="flex w-[100%] max-w-[560px] max-h-[560px] mt-10 overflow-hidden transition-all hover:rounded-3xl">
                                <img src="/Portfolio-1.png" className="w-[100%] transition-all hover:scale-[1.05]" />
                            </div>
                        </div>
                        <div className="flex gap-4 text-[#8c8c73] text-2xl max-md:text-[3.4vw] mt-8">
                            <div className="flex items-center border-2 border-[#8c8c73] rounded-full px-5 max-md:px-[5vw] py-1 max-md:py-[0vw]">
                                2023
                            </div>
                            <div className="flex justify-start items-center border-2 border-[#8c8c73] rounded-full px-5 max-md:px-[5vw] py-1 max-md:py-[0vw]">
                                HTML
                                <Dot size={40} color="#8c8c73" />
                                CSS
                                <Dot size={40} color="#8c8c73" />
                                Vite
                            </div>
                        </div>
                        <div>
                            <h2 className="text-5xl max-md:[2vw] font-medium text-white mt-3 mb-3">
                                Portfolio
                            </h2>
                            <h3 className="flex text-white font-thin opacity-90 text-3xl max-md:text-[4vw] items-center">
                                Front-End Development
                                <Dot size={40} color="#ffffff" />
                                Self Project
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
