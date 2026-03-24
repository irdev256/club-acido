import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material';
import { CLIENT_AGENDA_PRO } from '../../../helpers/constants';

type Servicio = {
  title: string;
  description: string;
  image: string;
};

const servicios: Servicio[] = [
  {
    title: 'Masaje descontracturante',
    description: 'Ideal para liberar zonas de tensión y recuperar movilidad.',
    image: '/masajes/masajes-cover.jpg',
  },
  {
    title: 'Masaje relajante',
    description: 'Una pausa profunda para bajar el ritmo y descansar.',
    image: '/masajes/masaje-card-3.jpeg',
  },
  {
    title: 'Masaje espalda y cuello',
    description: 'Trabajo focalizado para aliviar carga diaria en hombros y cervicales.',
    image: '/masajes/masajes-cover.jpg',
  },
  {
    title: 'Drenaje suave',
    description: 'Movimientos gentiles para favorecer desinflamación y bienestar.',
    image: '/masajes/masaje-card-4.jpeg',
  },
  {
    title: 'Sesión anti-estrés',
    description: 'Combinación de técnicas para relajar cuerpo y mente.',
    image: '/masajes/masajes-cover.jpg',
  },
  {
    title: 'Ritual cuerpo completo',
    description: 'Una experiencia integral para terminar liviana y renovada.',
    image: '/masajes/masaje-card-5.jpeg',
  },
];

export default function Servicios() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: 'background.default',
      }}
    >
      <Container maxWidth="lg">
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} justifyContent="space-between" alignItems={{ xs: 'flex-start', md: 'flex-end' }}>
          <Typography
            sx={{
              fontSize: { xs: 36, md: 54 },
              lineHeight: 1,
              fontWeight: 900,
              letterSpacing: '-0.03em',
              textTransform: 'uppercase',
            }}
          >
            Nuestros masajes
          </Typography>

          <Button
            variant="contained"
            onClick={() => window.open(CLIENT_AGENDA_PRO, '_blank', 'noopener,noreferrer')}
            sx={{
              borderRadius: 999,
              px: 3,
              py: 1.1,
              fontWeight: 700,
            }}
          >
            Reservar turno
          </Button>
        </Stack>

        <Grid container spacing={2.5} sx={{ mt: 2.5 }}>
          {servicios.map((servicio) => (
            <Grid key={servicio.title} size={{ xs: 12, sm: 6, md: 4 }}>
              <Box
                sx={{
                  height: '100%',
                  borderRadius: 2,
                  overflow: 'hidden',
                  backgroundColor: 'background.paper',
                  border: '1px solid',
                  borderColor: 'divider',
                }}
              >
                <Box
                  component="img"
                  src={servicio.image}
                  alt={servicio.title}
                  loading="lazy"
                  sx={{
                    width: '100%',
                    height: 220,
                    objectFit: 'cover',
                  }}
                />

                <Box sx={{ p: 2.2 }}>
                  <Typography sx={{ fontSize: 22, lineHeight: 1.1, fontWeight: 800, mb: 1 }}>{servicio.title}</Typography>
                  <Typography sx={{ color: 'text.secondary' }}>{servicio.description}</Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
