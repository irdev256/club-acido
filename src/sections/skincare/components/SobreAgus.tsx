import { Box, Container, Stack, Typography } from '@mui/material';
import { Highlight } from '../../../components/design/Highlight';

export default function SobreAgus() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 12, md: 20 },
        backgroundColor: '#FFFFFF',
      }}
    >
      <Container maxWidth="lg">
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 10, md: 14 }} alignItems="flex-start">
          {/* TEXTO */}
          <Stack flex={1} spacing={6}>
            <Typography
              sx={{
                fontSize: { xs: 14, md: 16 },
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#D46A92',
              }}
            >
              Sobre Agus
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: 32, md: 48 },
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: '-0.03em',
                color: '#2E2E2E',
              }}
            >
              La piel no es un objeto.
              <br />
              Es <Highlight>historia</Highlight>, proceso y momento vital.
            </Typography>

            <Typography
              sx={{
                fontSize: 18,
                lineHeight: 1.6,
                color: '#555',
                maxWidth: 520,
              }}
            >
              Soy <Highlight>Agustina Pereyra</Highlight>, cosmiatra desde el 2017. Mi forma de trabajar parte de la escucha real a cada persona que
              llega a consulta.
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: 22, md: 28 },
                fontWeight: 600,
                lineHeight: 1.3,
                color: '#2E2E2E',
              }}
            >
              Trabajo desde una mirada <Highlight>integral</Highlight>.
            </Typography>

            <Typography
              sx={{
                fontSize: 18,
                lineHeight: 1.6,
                color: '#555',
                maxWidth: 560,
              }}
            >
              La piel no puede pensarse de manera aislada: los niveles de estrés, la alimentación y los hábitos cotidianos influyen directamente en su
              salud. Cada piel responde de forma distinta según el momento vital de quien la habita.
            </Typography>

            <Typography
              sx={{
                fontSize: 18,
                lineHeight: 1.6,
                color: '#555',
                maxWidth: 560,
              }}
            >
              Acompaño los procesos desde el respeto, la actualización constante y la búsqueda de nuevas técnicas, activos y enfoques que estén en
              sintonía con una estética consciente.
            </Typography>
          </Stack>

          {/* IMAGEN */}
          <Box
            sx={{
              flex: 1,
              position: 'relative',
              width: '100%',
              maxWidth: 420,
            }}
          >
            <Box
              sx={{
                width: '100%',
                borderRadius: 5,
                overflow: 'hidden',
                boxShadow: '0 30px 60px rgba(0,0,0,0.18)',
                transform: { md: 'rotate(-2deg)' },
              }}
            >
              <Box
                component="img"
                src="/agus.jpeg"
                alt="Agustina Pereyra"
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
