import { useTheme } from '@mui/material';
import OrganicDivider from '../../components/common/OrganicDivider';
import Hero from './components/Hero';
import TikTokShowcase from './components/TiktokShowcase';
import SobreAgus from './components/SobreAgus';
import BrandsCarousel from './components/BrandsCarousel';

export default function Skincare() {
  const theme = useTheme();
  return (
    <>
      <Hero />
      <OrganicDivider main={theme.palette.secondary.main} />
      <SobreAgus />
      <BrandsCarousel />
      <TikTokShowcase />
    </>
  );
}
