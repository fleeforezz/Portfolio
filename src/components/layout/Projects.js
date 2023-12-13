import Link from "next/link"
import Sparkle from "../icons/sparkle"
import Image from "next/image"

export default function Projects() {
    return (
        <section id="projects" className="flex flex-col items-center px-14 py-24 transition-all mx-auto">
            <h3 className="flex relative gap-3 text-slate-400 text-sm items-center bg-white px-4 py-1 rounded-full border-outline">
                <Sparkle />
                Browse my recent
            </h3>
            <h2 className="text-black text-6xl text-center mt-4">
                Projects
            </h2>

            <div className="projects grid grid-cols-3 max-sm:grid-cols-1 max-md:grid-cols-2 gap-10 py-20">
                <div className="flex flex-col items-center border-2 border-slate-500 p-10 rounded-3xl">
                    <Image src={'/portfolio.png'} width={500} height={500} className="w-64 h-64 object-cover rounded-3xl"/>
                    <h3 className="text-center text-3xl font-medium p-4">
                        Portfolio
                    </h3>
                    <div className="flex gap-2">
                        <a href="https://fleeforezz.me" target="_blank" className="px-6 py-3 border-2 rounded-full hover:bg-black hover:text-white transition-all">
                            Live demo
                        </a>
                        <a href="" className="px-6 py-3 border-2 rounded-full hover:bg-black hover:text-white transition-all">
                            Github
                        </a>
                    </div>
                </div>

                <div className="flex flex-col items-center border-2 border-slate-500 p-10 rounded-3xl">
                    <Image src={'/HomeLab.png'} width={500} height={500} className="w-64 h-64 object-cover rounded-3xl"/>
                    <h3 className="text-center text-3xl font-medium p-4">
                        HomeLab
                    </h3>
                    <div className="flex gap-2">
                        <a href="https://homarr.fleeforezz.me" target="_blank" className="px-6 py-3 border-2 rounded-full hover:bg-black hover:text-white transition-all">
                            Live demo
                        </a>
                    </div>
                </div>

                <div className="flex flex-col items-center border-2 border-slate-500 p-10 rounded-3xl">
                    <Image src={'/Coffee-1900.png'} width={500} height={500} className="w-64 h-64 object-cover rounded-3xl"/>
                    <h3 className="text-center text-3xl font-medium p-4">
                        Coffee 1900
                    </h3>
                    <div className="flex gap-2">
                        <a href="https://coffee1900.fleeforezz.me" target="_blank" className="px-6 py-3 border-2 rounded-full hover:bg-black hover:text-white transition-all">
                            Live demo
                        </a>
                        <a href="https://github.com/fleeforezz/Work_place/tree/main/Huflit/Coffee_1900" target="_blank" className="px-6 py-3 border-2 rounded-full hover:bg-black hover:text-white transition-all">
                            Github
                        </a>
                    </div>
                </div>

                <div className="flex flex-col items-center border-2 border-slate-500 p-10 rounded-3xl">
                    <Image src={'/Cafi.png'} width={500} height={500} className="w-64 h-64 object-cover rounded-3xl"/>
                    <h3 className="text-center text-3xl font-medium p-4">
                        Cafi
                    </h3>
                    <div className="flex gap-2">
                        <a href="https://cafi.vercel.app/" target="_blank" className="px-6 py-3 border-2 rounded-full hover:bg-black hover:text-white transition-all">
                            Live demo
                        </a>
                        <a href="https://github.com/fleeforezz/Work_place/tree/main/Huflit/Coffee_1900" target="_blank" className="px-6 py-3 border-2 rounded-full hover:bg-black hover:text-white transition-all">
                            Github
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}