import AboutMe from '../components/layout/AboutMe';
import Education from '../components/layout/Education';
import Hero from '../components/layout/Hero';
import Projects from '../components/layout/Projects';
import TechStack from '../components/layout/TechStack';

export default function Home() {
  return (
    <>
      <Hero />
      <AboutMe />
      <Education />
      <TechStack />
      <Projects />
    </>
  );
}
