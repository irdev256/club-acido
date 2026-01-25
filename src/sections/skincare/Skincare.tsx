import { useTheme } from '@mui/material';
import OrganicDivider from '../../components/common/OrganicDivider';
import Hero from './components/Hero';
import TikTokShowcase from './components/TiktokShowcase';

export default function Skincare() {
  const theme = useTheme();
  return (
    <>
      <Hero />
      <OrganicDivider main={theme.palette.secondary.main} />
      <TikTokShowcase />
    </>
  );
}
