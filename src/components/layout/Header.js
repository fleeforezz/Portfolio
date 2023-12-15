"use client";
import Link from "next/link";

export default function Header() {
    return (
        <header id="/">
            <div>
                <nav className="flex fixed nav-noise md:flex-row flex-col w-full items-center justify-around mx-auto p-4 backdrop-blur shadow-sm shadow-navigation_box_shadow z-50">
                    <nav className="flex">
                        <Link href={'#/'} className="text-black text-xl">
                            Nhat Truong
                        </Link>
                    </nav>
                
                    <nav className="max-sm:hidden">
                        <div className="flex gap-14 text-black">
                            <div className="relative">
                                <Link href={'#about-me'} className="flex gap-1 about-me font-semibold">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#000000" viewBox="0 0 256 256">
                                        <path 
                                            d="M197.58,129.06l-51.61-19-19-51.65a15.92,15.92,0,0,0-29.88,0L78.07,110l-51.65,19a15.92,15.92,0,0,0,0,29.88L78,178l19,51.62a15.92,15.92,0,0,0,29.88,0l19-51.61,51.65-19a15.92,15.92,0,0,0,0-29.88ZM140.39,163a15.87,15.87,0,0,0-9.43,9.43l-19,51.46L93,172.39A15.87,15.87,0,0,0,83.61,163h0L32.15,144l51.46-19A15.87,15.87,0,0,0,93,115.61l19-51.46,19,51.46a15.87,15.87,0,0,0,9.43,9.43l51.46,19ZM144,40a8,8,0,0,1,8-8h16V16a8,8,0,0,1,16,0V32h16a8,8,0,0,1,0,16H184V64a8,8,0,0,1-16,0V48H152A8,8,0,0,1,144,40ZM248,88a8,8,0,0,1-8,8h-8v8a8,8,0,0,1-16,0V96h-8a8,8,0,0,1,0-16h8V72a8,8,0,0,1,16,0v8h8A8,8,0,0,1,248,88Z">
                                        </path>
                                    </svg>
                                    About me
                                </Link>
                            </div>
                            <div className="relative">
                                <Link href={'#education'} className="flex gap-1 skills font-semibold">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#0a0a0a" viewBox="0 0 256 256">
                                        <path 
                                            d="M226.53,56.41l-96-32a8,8,0,0,0-5.06,0l-96,32A8,8,0,0,0,24,64v80a8,8,0,0,0,16,0V75.1L73.59,86.29a64,64,0,0,0,20.65,88.05c-18,7.06-33.56,19.83-44.94,37.29a8,8,0,1,0,13.4,8.74C77.77,197.25,101.57,184,128,184s50.23,13.25,65.3,36.37a8,8,0,0,0,13.4-8.74c-11.38-17.46-27-30.23-44.94-37.29a64,64,0,0,0,20.65-88l44.12-14.7a8,8,0,0,0,0-15.18ZM176,120A48,48,0,1,1,89.35,91.55l36.12,12a8,8,0,0,0,5.06,0l36.12-12A47.89,47.89,0,0,1,176,120ZM128,87.57,57.3,64,128,40.43,198.7,64Z">
                                        </path>
                                    </svg>
                                    Education
                                </Link>
                            </div>
                            <div className="relative">
                                <Link href={'#skills'} className="flex gap-1 skills font-semibold">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#000000" viewBox="0 0 256 256">
                                        <path 
                                            d="M68,152a36,36,0,1,0,36,36A36,36,0,0,0,68,152Zm0,56a20,20,0,1,1,20-20A20,20,0,0,1,68,208ZM34.34,106.34,48.69,92,34.34,77.66A8,8,0,0,1,45.66,66.34L60,80.69,74.34,66.34A8,8,0,0,1,85.66,77.66L71.31,92l14.35,14.34a8,8,0,0,1-11.32,11.32L60,103.31,45.66,117.66a8,8,0,0,1-11.32-11.32Zm187.32,96a8,8,0,0,1-11.32,11.32L196,199.31l-14.34,14.35a8,8,0,0,1-11.32-11.32L184.69,188l-14.35-14.34a8,8,0,0,1,11.32-11.32L196,176.69l14.34-14.35a8,8,0,0,1,11.32,11.32L207.31,188Zm-45.19-89.51c-6.18,22.33-25.32,41.63-46.53,46.93a8.13,8.13,0,0,1-2,.24,8,8,0,0,1-1.93-15.76c15.63-3.91,30.35-18.91,35-35.68,3.19-11.5,3.22-29-14.71-46.9L144,59.31V80a8,8,0,0,1-16,0V40a8,8,0,0,1,8-8h40a8,8,0,0,1,0,16H155.31l2.35,2.34C175.9,68.59,182.58,90.78,176.47,112.83Z">
                                        </path>
                                    </svg>
                                    Skills
                                </Link>
                            </div>
                            <div className="relative">
                                <Link href={'#projects'} className="flex gap-1 project font-semibold">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#000000" viewBox="0 0 256 256">
                                        <path 
                                                d="M223.68,66.15,135.68,18h0a15.88,15.88,0,0,0-15.36,0l-88,48.17a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM128,32h0l80.34,44L128,120,47.66,76ZM40,90l80,43.78v85.79L40,175.82Zm96,129.57V133.82L216,90v85.78Z">
                                        </path>
                                    </svg>
                                    Projects
                                </Link>
                            </div>
                            <div className="relative">
                                <Link href={'#contact-info'} className="flex gap-1 project font-semibold">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#000000" viewBox="0 0 256 256">
                                        <path 
                                            d="M220.54,86.66l-176.06-54A16,16,0,0,0,24,48V192a16,16,0,0,0,16,16,16,16,0,0,0,4.52-.65L128,181.73V192a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16v-29.9l28.54-8.75A16.09,16.09,0,0,0,232,138V102A16.09,16.09,0,0,0,220.54,86.66ZM128,165,40,192V48l88,27Zm48,27H144V176.82L176,167Zm40-54-.11,0L144,160.08V79.92l71.89,22,.11,0v36Z">
                                        </path>
                                    </svg>
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