import Exquisite from '@/components/layout/Exquisite';
import Hero from '@/components/layout/Hero';
import Projects from '@/components/layout/Projects';
import TechStack from '@/components/layout/TechStack';
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Hero />
      <TechStack />
      <Exquisite />
      <Projects />
    </>
  );
}
