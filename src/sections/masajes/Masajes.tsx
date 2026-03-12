import { useTheme } from '@mui/material';
import OrganicDivider from '../../components/common/OrganicDivider';
import Hero from './components/Hero';
// import Servicios from './components/Servicios';

export default function Masajes() {
  const theme = useTheme();

  return (
    <>
      <Hero />
      <OrganicDivider main={theme.palette.secondary.main} />
      {/* <Servicios /> */}
    </>
  );
}
