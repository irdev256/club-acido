import Hero from './components/Hero';
import Links from './components/Links';
import Content from './components/Content';
import SobreMi from './components/SobreMi';
import FinalCTA from './components/FinalCta';
import Testimonials from './components/Testimonials';
import BrandsCarousel from './components/BrandsCarousel';

export default function Home() {
  return (
    <>
      <Hero />
      <BrandsCarousel />
      <Links />
      <Content />
      <FinalCTA />
      <SobreMi />
      <Testimonials />
    </>
  );
}
