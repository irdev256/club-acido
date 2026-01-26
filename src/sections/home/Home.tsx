import OrganicDivider from '../../components/common/OrganicDivider';
import RotatingIconsDivider from '../../components/common/RotatingIconsDivider';
import AboutAcido from './components/AboutAcido';
import Hero from './components/Hero';
import Links from './components/Links';
import SocialDemo from './components/SocialDemo';
import Ubicacion from './components/Ubicacion';

export default function Home() {
  return (
    <>
      <Hero />
      <Links />
      <OrganicDivider />
      <SocialDemo />
      <RotatingIconsDivider/>
      <AboutAcido />
      <Ubicacion />
      {/* <Content /> */}
      {/* <FinalCTA /> */}
      {/* <SobreMi /> */}
      {/* <Testimonials /> */}
    </>
  );
}
