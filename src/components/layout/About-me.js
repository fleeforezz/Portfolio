"use client"
import { Atom } from "@phosphor-icons/react";

export default function Aboutme() {
    return (
        <section className="px-20 max-md:px-5 pt-28">
            <h1 className="font-medium text-[#d1d1c7] text-[6vw] max-md:text-[7vw] leading-[6vw]">
                I have studied web development for a year, and during this time,
                I realized I have passionate in designing user interfaces for websites.
            </h1>

            <h2 id="about" className="flex gap-3 justify-center items-center font-medium text-center text-[#8c8c73] text-[8vw] pt-52 max-md:pt-20 pb-10">
                <Atom size={36} color="#8c8c73" />
                ABOUT ME
                <Atom size={36} color="#8c8c73" />
            </h2>

            <div className="flex max-md:flex-wrap">
                <img src="/profile-image.JPG" className="w-[47%] max-md:w-[100%]" />
                <div className="px-10 max-md:px-0">
                    <span className="about-me-para">
                        <h3 className="font-bold text-6xl max-md:text-[7vw] max-md:mt-10">
                            A brief intro, who am I?
                        </h3>
                        <p className="text-[1.875vw] max-md:text-[4vw] mt-10">
                        I am an independent frontend developer, UI/UX designer
                        and creator based in Melbourne, Australia.
                        <br></br>
                        <br></br>
                        I specialize in crafting elevated, intuitive, and
                        minimalistic designs for startups and small businesses
                        to help them stand out in the digital landscape with a powerful impact. 😎
                        <br></br>
                        <br></br>
                        When I am not developing or designing, I enjoy creating
                        videos that talk about frontend development, productivity
                        and design on YouTube 📸
                        </p>
                    </span>
                </div>
            </div>
        </section>
    )
}