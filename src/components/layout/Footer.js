import Facebook from "../icons/Facebook";
import Github from "../icons/Github";
import Linkedin from "../icons/Linkedin";
import Mail from "../icons/Mail";
import Sparkle from "../icons/sparkle";
import Link from "next/link";

export default function Footer() {
    return (
        <footer id="contact-info" className="flex flex-col sticky items-center py-48 max-sm:py-5 max-h-screen max-w-7xl mx-auto">
            <h3 className="flex relative gap-3 text-slate-400 text-sm items-center bg-white px-4 py-1 rounded-full border border-outline">
                <Sparkle />
                Get in touch
            </h3>
            <h2 className="text-black text-6xl text-center mt-4">
                Contact me
            </h2>

            <div className="contact grid grid-cols-2 max-sm:grid-cols-1 gap-5 border-2 border-slate-500 bg-slate-50 px-24 max-sm:px-11 py-5 mt-20 rounded-2xl">
                <div className="flex gap-2">
                    <a href="" className="flex gap-2 items-center">
                        <Mail />
                        <p>nhattruong.tmn@gmail.com</p>
                    </a>
                </div>

                <div className="flex justify-center">
                    <a href="https://www.linkedin.com/in/nhattruongminh/" target="_blank" className="flex gap-2 items-center">
                        <Linkedin />
                        <p>Linkedin</p>
                    </a>
                </div>

                <div className="flex justify-center">
                    <a href="https://github.com/fleeforezz" target="_blank" className="flex gap-2 items-center">
                        <Github />
                        <p>Github</p>
                    </a>
                </div>

                <div className="flex justify-center">
                    <a href="https://github.com/fleeforezz" target="_blank" className="flex gap-2 items-center">
                        <Facebook />
                        <p>Facebook</p>
                    </a>
                </div>
            </div>

            <div>
                <nav className="flex md:flex-row flex-col w-full items-center justify-around mx-auto my-14 md:p-5">                
                    <nav>
                        <div className="flex gap-14 max-sm:gap-4 text-black">
                        <div className="relative">
                                <Link href={'#about-me'} className="about-me font-semibold">
                                    About me
                                </Link>
                            </div>
                            <div className="relative">
                                <Link href={'#skills'} className="skills font-semibold">
                                    Skills
                                </Link>
                            </div>
                            <div className="relative">
                                <Link href={'#projects'} className="project font-semibold">
                                    Projects
                                </Link>
                            </div>
                            <div className="relative">
                                <Link href={'#contact-info'} className="project font-semibold">
                                    Contact Me
                                </Link>
                            </div>
                        </div>
                    </nav>
                </nav>
            </div>

            <div>
                <h4 className="text-slate-500 text-sm p-2">
                    Copyright @ 2023 Nhat Truong. All Rights Reserves
                </h4>
            </div>
        </footer>
    );
}