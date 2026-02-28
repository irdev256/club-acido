import OrganicDivider from '../../components/common/OrganicDivider';
import RotatingIconsDivider from '../../components/common/RotatingIconsDivider';
import AboutAcido from './components/AboutAcido';
import Hero from './components/Hero';
import Links from './components/Links';
import SocialDemo from './components/SocialDemo';
import Ubicacion from './components/Ubicacion';
import Testimonials from './components/Testimonials';

export default function Home() {
  return (
    <>
      <Hero />
      <Links />
      <OrganicDivider />
      <SocialDemo />
      <RotatingIconsDivider/>
      <AboutAcido />
      <Testimonials />
      <Ubicacion />
      {/* <Content /> */}
      {/* <FinalCTA /> */}
      {/* <SobreMi /> */}
    </>
  );
}
