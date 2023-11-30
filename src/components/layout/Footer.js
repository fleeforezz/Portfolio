import Link from "next/link";
import Facebook from "../icons/Facebook";
import Instagram from "../icons/Instagram";
import Discord from "../icons/Discord";
import Download from "../icons/Download";
import Github from "../icons/Github";
import More from "../icons/More";

export default function Footer() {
    return (
        <footer className="backdrop-blur pt-20 pb-36">
            <div className="">
                <div className="grid grid-cols-3">
                    <div className="flex flex-col gap-8 text-white items-center">
                        <h5 className="font-bold text-lg">
                            Community
                        </h5>
                        <Link href={''} className="flex gap-2 transition-all hover:translate-x-3">
                            <Facebook />
                            Facebook
                        </Link>
                        <Link href={''} className="flex gap-2 transition-all hover:translate-x-3">
                            <Instagram />
                            Instagram
                        </Link>
                        <Link href={''} className="flex gap-2 transition-all hover:translate-x-3">
                            <Discord />
                            Discord
                        </Link>
                    </div>

                    <div className="flex flex-col gap-8 text-white items-center">
                        <h5 className="font-bold text-lg">
                            Download CV
                        </h5>
                        <a href="/CV.pdf" type="download" className="flex gap-2 transition-all hover:translate-x-3">
                            <Download />
                            Download here
                        </a>
                    </div>

                    <div className="flex flex-col gap-8 text-white items-center">
                        <h5 className="font-bold text-lg">
                            Get to know me
                        </h5>
                        <Link href={''} className="flex gap-2 transition-all hover:translate-x-3">
                            <Github />
                            Github
                        </Link>
                        <Link href={''} className="flex gap-2 transition-all hover:translate-x-3">
                            <More />
                            More about me
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}