import Image from "next/image";
import Sparkle from "../icons/sparkle";
import Right from "../icons/Right";

export default function Hero() {
    return (
        <section className="max-w-7xl mx-auto p-4 overflow-x-hidden">
            <div className="grid gap-32 py-12 sm:grid-cols-2 md:grid-cols-2 items-center">
                <div className="p-3">
                    <p className="flex absolute gap-3 text-slate-400 text-sm items-center bg-background px-4 py-1 rounded-full border border-outline">
                        <Sparkle />
                        DevOps Engineer & Front-end Developer
                    </p>
                    <h1 className="text-white text-5xl font-bold mt-20 mb-10">Building <span>playground</span> for Developers 🧙‍♂️</h1>
                    <p className="text-slate-400">
                        I'm a DevOps Engineer with experience in Server, CI/CD, Docker.
                        Check out my projects and skills.
                    </p>
                    <button className="flex gap-4 items-center align-middle text-white bg-primary px-5 py-3 mt-10 rounded-lg shadow shadow-outline transition-all hover:shadow-md hover:shadow-outline">
                        Learn more
                        <Right />
                    </button>
                </div>

                <div className="relative">
                    <Image src={'/mainIconsdark.svg'} alt="tech-stack-tree" width={550} height={550} />
                </div>

                <div>
                    
                </div>
            </div>
        </section>
    );
}