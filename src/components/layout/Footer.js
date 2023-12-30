"use client"
import { HandPointing } from "@phosphor-icons/react"

export default function Footer() {
    return (
        <section className="px-5 pt-32 pb-2 max-md:pt-12">
            <div className="flex max-md:flex-wrap-reverse justify-between">
                <h1>
                    <span className="font-light text-sm">@2023 </span>
                    Nhat
                </h1>

                <h2>
                    Site designed by <span className="font-semibold">Huy</span> and coded by <span className="font-semibold">Nhat</span> 🦖
                </h2>

                <a href="#hero" className="font-bold flex gap-2 items-center transition-button hover:-translate-y-2">
                    BACK TO TOP
                    <HandPointing size={26} color="#0a0a0a" />
                </a>
            </div>
        </section>
    )
}