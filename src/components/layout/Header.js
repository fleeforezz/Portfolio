"use client";
import Link from "next/link";

export default function Header() {
    return (
        <header id="/">
            <div>
                <nav className="flex fixed md:flex-row flex-col w-full items-center justify-around mx-auto md:p-5 backdrop-blur shadow-sm shadow-navigation_box_shadow z-50">
                    <nav className="flex">
                        <Link href={'#/'} className="text-black text-xl">
                            Nhat Truong
                        </Link>
                    </nav>
                
                    <nav>
                        <div className="flex gap-14 text-black">
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
        </header>
    );
}