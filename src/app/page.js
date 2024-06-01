"use client"
import Aboutme from '@/components/layout/About-me'
import Contact from '@/components/layout/Contact'
import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import Hero from '@/components/layout/Hero'
import Projects from '@/components/layout/Projects'
import Services from '@/components/layout/Services'
import StickyCursor from '@/components/stickyCursor/StickyCursor'

import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default
        const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, [])

  return (
    <>
      <StickyCursor />
      <Navbar />
      <Hero />
      <Aboutme />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}
