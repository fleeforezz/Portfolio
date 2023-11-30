import Image from "next/image";
import Sparkle from "../icons/sparkle";

export default function TechStack() {
    return (
        <section className="max-w-7xl mx-auto px-4 pb-96 overflow-x-hidden">
            <div className="flex flex-col items-center">
                <p className="flex absolute gap-3 text-slate-400 text-sm items-center bg-background px-4 py-1 rounded-full border border-outline">
                    <Sparkle />
                    My favorite tech stack
                </p>
                <p className="text-white text-3xl mt-20">
                    Building apps with modern technology
                </p>
                <p className="text-slate-400 mt-10">
                    Made with passion
                </p>
                <div className="flex flex-col gap-10 mt-20 items-center">
                    <div className="flex gap-10">
                        <Image src={'/docker.png'} width={50} height={50} />
                        <Image src={'/linux.svg.png'} width={50} height={50} />
                        <Image src={'/gitwhite.png'} width={50} height={50} />
                        <Image src={'/gitlab.png'} width={50} height={50} />
                        <Image src={'/jenkins.png'} width={50} height={50} />
                        <Image src={'/digital-ocean.png'} width={50} height={50} />
                        <Image src={'/mysql.png'} width={50} height={50} />
                    </div>

                    <div className="flex gap-10">
                        <Image src={'/html.png'} width={50} height={50} />
                        <Image src={'/css.png'} width={50} height={50} />
                        <Image src={'/js.png'} width={50} height={50} />
                        <Image src={'/tailwind.png'} width={50} height={50} />
                        <Image src={'/nginx.png'} width={50} height={50} />
                    </div>

                    <div>
                        <Image src={'/vercel.svg'} width={100} height={100} />
                    </div>
                </div>
                <video src="/cards-video.webm" autoPlay loop muted className="flex absolute w-full h-full opacity-60 -z-50"></video>
            </div>
        </section>
    )
}