"use client";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
    // window.onscroll = function() {myFunction()};
    // var navbar = document.getElementById('navbar');
    // var sticky = navbar.offsetTop;

    // function myFunction() {
    //     if (window.scrollY >= sticky) {
    //         navbar.classList.add("sticky");
    //     }
    //     else {
    //         navbar.classList.remove("sticky");
    //     }
    // }
    return (
        <header>
            <video src="/blackhole.webm" autoPlay muted loop className="absolute -top-[47%] -z-50 rotate-180"></video>
            
            <div id="navbar" className="left-0 w-full items-center">
                <nav className="flex md:flex-row flex-col items-center justify-between mx-auto p-4 md:p-5 backdrop-blur shadow-sm shadow-navigation_box_shadow">
                    <nav className="flex gap-4 items-center">
                        <Image src={'/atom.png'} width={45} height={45} />
                        <Link href={'/'} className="text-white">Nhat Truong</Link>
                    </nav>
                
                    <nav className="bg-navigation px-4 py-2 rounded-3xl backdrop-blur bg-black/20">
                        <div className="flex gap-14 text-white">
                            <Link href={'#about-me'}>About me</Link>
                            <Link href={'#projects'}>Projects</Link>
                            <Link href={'#skills'}>Skills</Link>
                        </div>
                    </nav>
                
                    <nav className="flex gap-4">
                        <a href="https://www.facebook.com/profile.php?id=100091778170480" target="_blank">
                            <Image src="/facebook-logo.svg" width={25} height={25}/>
                        </a>
                        <a href="https://www.instagram.com/tmn_nhat/" target="_blank">
                            <Image src={'/instagram-logo.svg'} width={25} height={25} />
                        </a>
                        <a href="https://www.linkedin.com/in/nh%E1%BA%ADt-tr%C6%B0%C6%A1ng-420723278/" target="_blank">
                            <Image src={'/linkedin-logo.svg'} width={25} height={25} />
                        </a>
                    </nav>
                </nav>
            </div>
        </header>
    );
}