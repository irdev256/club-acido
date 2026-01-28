import { useTheme } from '@mui/material';
import OrganicDivider from '../../components/common/OrganicDivider';
import Gallery from './components/Gallery';
import Hero from './components/Hero';

export default function Tattoo() {
  const theme = useTheme();
  return (
    <>
      <Hero />

      <OrganicDivider main={theme.palette.secondary.main} />
      <Gallery />
    </>
  );
}
