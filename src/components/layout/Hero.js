"use client";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="flex p-4 justify-center min-h-screen overflow-x-hidden overflow-y-hidden relative">
            <div className="block max-md:hidden max-sm:hidden">
                <div className="absolute top-[50%] left-[60%] translate-x-[70%] -translate-y-[90%] rotate-90 -z-40">
                    <Image src={'/leaf-1.png'} width={400} height={400}/>
                </div>
                <div className="absolute top-[50%] left-[0%] -translate-x-[40%] -translate-y-[12%] -rotate-90 -z-40">
                    <Image src={'/leaf-1.png'} width={400} height={400}/>
                </div>
            </div>

            <div className="grid mt-20 max-sm:mt-1 gap-0 sm:grid-cols-2 md:grid-cols-2 items-center">
                <div className="w-full max-sm:w-32 max-sm:m-auto max-sm:mb-5 max-md:w-52">
                    <Image src={'/profile-image.jpg'} alt="tech-stack-tree" width={325} height={325} className="rounded-full" />
                </div>

                <div className="flex flex-col gap-3 text-center items-center">
                    <h3 className="text-slate-500 text-md text-center">
                        Hello i'm
                    </h3>
                    <h1 className="text-black text-6xl max-sm:text-5xl font-bold">
                        Nhat Truong
                    </h1>
                    <h2 className="text-slate-700 text-xl font-bold">
                        <span className="highlight-text">Front-End</span> Developer
                    </h2>

                    <div className="flex gap-7">
                        <a href="/CV_Truong_Minh_Nhat.pdf" type="download" className="text-black border-2 border-black px-5 py-3 mt-10 rounded-full transition-all hover:bg-black hover:text-white">
                            Download CV
                        </a>
                        <a href="#contact-info" className="text-white bg-black px-5 py-3 mt-10 rounded-full transition-all border-2 hover:bg-transparent hover:text-black hover:border-black">
                            Contact info
                        </a>
                    </div>

                    <div className="flex gap-7 py-4">
                        <a href="https://www.linkedin.com/in/nhattruongminh/" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="#00000" viewBox="0 0 256 256">
                                <path 
                                    d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z">
                                </path>
                            </svg>
                        </a>
                        <a href="https://github.com/fleeforezz" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="#00000" viewBox="0 0 256 256">
                                <path 
                                    d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.72,41.72,0,0,1,200,104Z">
                                </path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            <div className="absolute top-[95%] left-[47%] -translate-x-[50%] -translate-y-[50%] animate-bounce">
                <a href="#about-me" className="text-black px-3 py-2 border-2 border-black rounded-[20px]"></a>
                <span className="absolute bg-black px-[4px] py-[4px] rounded-full top-[40%] left-[36.7%] -translate-x-[50%] -translate-y-[70%] animate-bounce"></span>
            </div>
        </section>
    );
}