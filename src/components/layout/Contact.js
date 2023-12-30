"use client"
import { GithubLogo, LinkedinLogo, InstagramLogo } from "@phosphor-icons/react"

export default function Contact() {
    return (
        <section id="contact" className="">
            <h1 className="flex gap-10 justify-center items-center font-medium text-center text-[#8c8c73] text-[8vw] max-sm:text-[10vw] pt-32 max-sm:pt-10">
                <div className="max-md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 200 200" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M200 150C200 94.7715 155.228 50 100 50C44.7715 50 0 94.7715 0 150H200Z" fill="#8c8c73" />
                    </svg>
                </div>
                    CONTACTS
                <div className="max-md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 200 200" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M200 150C200 94.7715 155.228 50 100 50C44.7715 50 0 94.7715 0 150H200Z" fill="#8c8c73" />
                    </svg>
                </div>
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
                            <a href="https://github.com/fleeforezz" target="_blank" className="flex items-center gap-2">
                                <GithubLogo size={36} color="#0a0a0a" />
                                <span className="github relative">
                                    Github
                                </span>
                            </a>
                            <a href="https://www.linkedin.com/in/nhattruongminh/" target="_blank" className="linkedin flex items-center gap-2 mt-5 mb-5">
                                <LinkedinLogo size={36} color="#0a0a0a" />
                                <span className="linkedin relative">
                                    LinkedIn
                                </span>
                            </a>
                            <a href="https://www.instagram.com/tmn_nhat/" target="_blank" className="insta flex items-center gap-2">
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