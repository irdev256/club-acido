import { useTheme } from '@mui/material';
import OrganicDivider from '../../components/common/OrganicDivider';
import Hero from './components/Hero';
import Contenido from './components/Contenido';

export default function Talleres() {
  const theme = useTheme();

  return (
    <>
      <Hero />
      <OrganicDivider main={theme.palette.secondary.main} />
      <Contenido />
    </>
  );
}
