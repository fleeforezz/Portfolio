"use client"
import Aboutme from '@/components/layout/About-me'
import Contact from '@/components/layout/Contact'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import Hero from '@/components/layout/Hero'
import Projects from '@/components/layout/Projects'
import Services from '@/components/layout/Services'

import SmoothScroll from '@/components/SmoothScroll/SmoothScroll'

export default function Home() {
  return (
    <>
        <Header />
      <SmoothScroll>
        <Hero />
        <Aboutme />
        <Services />
        <Projects />
        <Contact />
        <Footer />
      </SmoothScroll>
    </>
  )
}
