"use client"
import { Atom, GithubLogo, LinkedinLogo, InstagramLogo } from "@phosphor-icons/react"

export default function Contact() {
    return (
        <section id="contact">
            <h1 className="flex gap-3 justify-center items-center font-medium text-center text-[#8c8c73] text-[8vw] pt-24 pb-10">
                <Atom size={36} color="#8c8c73" />
                CONTACTS
                <Atom size={36} color="#8c8c73" />
            </h1>

            <div className="flex max-md:flex-wrap justify-around gap-10">
                <div className="max-md:px-5">
                    <h1 className="font-bold text-6xl max-md:text-[7vw]">
                        Have an awsome idea?
                        <br></br>
                        Let's bring it to life.
                    </h1>
                    <p className="text-3xl max-md:text-[6vw] mt-10 mb-10">
                        Changing and adapting new things
                        is my calling.
                    </p>
                <img src="/image.gif" className="w-[100%]" />
                </div>
                

                <div className="max-md:w-[100%] max-md:px-5">
                    <div>
                        <h2 className="text-[1.875vw] max-md:text-[4.5vw] font-semibold">
                            Contact Detailed
                        </h2>
                        <div className="text-[1.5vw] max-md:text-[3.5vw] text-gray-500 mt-3">
                            <h3>
                                nhattruong.tmn@gmail.com
                            </h3>
                        </div>
                    </div>

                    <div className="mt-10 max-md:mt-5">
                        <h2 className="text-[1.875vw] max-md:text-[4.5vw] font-semibold">
                            My Digital Spaces
                        </h2>
                        <div className="text-[1.5vw] max-md:text-[3.5vw] text-gray-500 mt-5">
                            <a href="" className="flex gap-2">
                                <GithubLogo size={36} color="#0a0a0a" />
                                <span className="github relative">
                                    Github
                                </span>
                            </a>
                            <a href="" className="linkedin flex gap-2 mt-5 mb-5">
                                <LinkedinLogo size={36} color="#0a0a0a" />
                                <span className="linkedin relative">
                                    LinkedIn
                                </span>
                            </a>
                            <a href="" className="insta flex gap-2">
                                <InstagramLogo size={36} color="#0a0a0a" />
                                <span className="insta relative">
                                    Instagram
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}