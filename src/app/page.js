import Aboutme from '@/components/layout/About-me'
import Contact from '@/components/layout/Contact'
import Hero from '@/components/layout/Hero'
import Projects from '@/components/layout/Projects'
import Services from '@/components/layout/Services'

export default function Home() {
  return (
    <>
      <Hero />
      <Aboutme />
      <Services />
      <Projects />
      <Contact />
    </>
  )
}
