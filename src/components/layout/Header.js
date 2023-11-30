import Link from "next/link";
import Image from "next/image";

export default function Header() {
    return (
        <header>
            <video src="/blackhole.webm" autoPlay muted loop className="flex absolute -top-14 -z-50 rotate-180 -translate-y-1/3"></video>
            <nav className="flex items-center justify-between mx-auto p-4 backdrop-blur shadow-sm shadow-navigation_box_shadow">
                <nav className="flex gap-4 items-center">
                    <Image src={'/atom.png'} width={45} height={45} />
                    <Link href={'/'} className="text-white">Nhat Truong</Link>
                </nav>
                
                <nav className="bg-navigation px-4 py-2 rounded-3xl backdrop-blur bg-black/20">
                    <div className="flex gap-24 text-white">
                        <Link href={''}>About me</Link>
                        <Link href={''}>Projects</Link>
                        <Link href={''}>Skills</Link>
                    </div>
                </nav>
                
                <nav className="flex gap-4">
                    <a href="">
                        <Image src="/facebook-logo.svg" width={25} height={25} />
                    </a>
                    <a href="">
                        <Image src={'/instagram-logo.svg'} width={25} height={25} />
                    </a>
                    <a href="">
                        <Image src={'/linkedin-logo.svg'} width={25} height={25} />
                    </a>
                </nav>
            </nav>
        </header>
    );
}