import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material';
import { CLIENT_AGENDA_PRO } from '../../../helpers/constants';

type Taller = {
  title: string;
  description: string;
  image: string;
};

const talleres: Taller[] = [
  {
    title: 'Skincare para principiantes',
    description: 'Aprendé a armar una rutina simple y efectiva con foco en tu tipo de piel.',
    image: '/talleres.jpg',
  },
  {
    title: 'Autocuidado diario',
    description: 'Hábitos concretos para sostener bienestar en medio de la rutina.',
    image: '/aboutacido-3.jpg',
  },
  {
    title: 'Workshop de masajes faciales',
    description: 'Técnicas prácticas para desinflamar, relajar y activar circulación.',
    image: '/masajes.jpg',
  },
  {
    title: 'Lectura de etiquetas',
    description: 'Entendé ingredientes y elegí productos según necesidad real.',
    image: '/aboutacido-4.jpg',
  },
  {
    title: 'Cuidados estacionales',
    description: 'Qué ajustar en cada época del año para cuidar mejor tu piel.',
    image: '/talleres.jpg',
  },
  {
    title: 'Espacio de consultas',
    description: 'Traé tus dudas y trabajamos casos reales en formato grupal.',
    image: '/aboutacido-1.jpg',
  },
];

export default function Contenido() {
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
              fontSize: { xs: 34, md: 54 },
              lineHeight: 1,
              fontWeight: 900,
              letterSpacing: '-0.03em',
              textTransform: 'uppercase',
              color: 'text.primary',
            }}
          >
            Talleres disponibles
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
            Quiero sumarme
          </Button>
        </Stack>

        <Grid container spacing={2.5} sx={{ mt: 2.5 }}>
          {talleres.map((taller) => (
            <Grid key={taller.title} size={{ xs: 12, sm: 6, md: 4 }}>
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
                  src={taller.image}
                  alt={taller.title}
                  loading="lazy"
                  sx={{
                    width: '100%',
                    height: 220,
                    objectFit: 'cover',
                  }}
                />

                <Box sx={{ p: 2.2 }}>
                  <Typography sx={{ fontSize: 22, lineHeight: 1.1, fontWeight: 800, mb: 1, color: 'text.primary' }}>{taller.title}</Typography>
                  <Typography sx={{ color: 'text.secondary' }}>{taller.description}</Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
