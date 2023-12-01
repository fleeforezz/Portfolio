import Link from "next/link"

export default function Projects() {
    return (
        <section className="max-w-9xl mx-auto px-4 pb-52">
            <div className="flex flex-col items-center">
                <h2 className="text-5xl font-extrabold">
                    <span>Projects</span>
                </h2>

                <div className="project grid gap-20  p-14 z-0">
                    <Link href={''} className="bg-background border border-outline rounded-md transition-all hover:-translate-y-7">
                        <div>
                            <img src="/portfolio.png" className="block mx-auto max-h-56 rounded-md"/>
                        </div>
                        <div className="p-5">
                            <h4 className="font-semibold text-xl my-2 text-white">
                                Portfolio
                            </h4>
                            <p className="text-slate-400">
                                Dive in to explore a showcase of my design and development
                                skills built with HTML, CSS, JavaScript, Docker.
                            </p>
                        </div>
                    </Link>

                    <Link href={''} className="bg-background border border-outline rounded-md transition-all hover:-translate-y-7">
                        <div>
                            <img src="/HomeLab.png" className="block mx-auto max-h-56 rounded-md"/>
                        </div>
                        <div className="p-5">
                            <h4 className="font-semibold text-xl my-2 text-white">
                                Homelab
                            </h4>
                            <p className="text-slate-400">
                                Step into the world of innovation with my HomeLab project—an 
                                embodiment of my passion for technology, experimentation, 
                                and home automation.
                            </p>
                        </div>
                    </Link>

                    <Link href={''} className="bg-background border border-outline rounded-md transition-all hover:-translate-y-7">
                        <div>
                            <img src="/Coffee-1900.png" className="block mx-auto max-h-56 rounded-md"/>
                        </div>
                        <div className="p-5">
                            <h4 className="font-semibold text-xl my-2 text-white">
                                Coffee 1900
                            </h4>
                            <p className="text-slate-400">
                                Indulge in a journey to the flavorful past with my Coffee 
                                1900 project—a digital tribute to the rich heritage of 
                                coffee culture from the turn of the 20th century
                            </p>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    )
}