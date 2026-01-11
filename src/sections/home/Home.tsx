import Hero from './components/Hero';
import Links from './components/Links';
import Content from './components/Content';
import SobreMi from './components/SobreMi';
import FinalCTA from './components/FinalCta';
import Testimonials from './components/Testimonials';

export default function Home() {
  return (
    <>
      <Hero />
      <Links />
      <Content />
      <FinalCTA />
      <SobreMi />
      <Testimonials />
    </>
  );
}
