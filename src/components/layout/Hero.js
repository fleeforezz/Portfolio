"use client";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="flex p-10 justify-center min-h-screen overflow-x-hidden relative">
            <div className="grid mt-20 gap-0 sm:grid-cols-2 md:grid-cols-2 items-center">
                <div className="relative">
                    <Image src={'/profile-image.jpg'} alt="tech-stack-tree" width={325} height={325} className="rounded-full" />
                </div>

                <div className="flex flex-col gap-3 text-center items-center">
                    <h3 className="text-slate-500 text-md text-center">
                        Hello i'm
                    </h3>
                    <h1 className="text-black text-6xl font-bold">
                        Nhat Truong
                    </h1>
                    <h2 className="text-slate-700 text-xl font-bold">
                        <span>Front-End</span> Developer
                    </h2>

                    <div className="flex gap-7">
                        <a href="/CV_Truong_Minh_Nhat.pdf" type="download" className="text-black border-2 px-5 py-3 mt-10 rounded-full transition-all hover:bg-black hover:text-white">
                            Download CV
                        </a>
                        <a href="#contact-info" className="text-white bg-black px-5 py-3 mt-10 rounded-full transition-all border-2 hover:bg-transparent hover:text-black">
                            Contact info
                        </a>
                    </div>

                    <div className="flex gap-7 py-4">
                        <a href="https://www.linkedin.com/in/nhattruongminh/" target="_blank">
                            <Image src={"/linkedin-logo.svg"} width={40} height={40} className="cursor-pointer"/>
                        </a>
                        <a href="https://github.com/fleeforezz" target="_blank">
                            <Image src={"/github-logo.svg"} width={40} height={40} className="cursor-pointer"/>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}