import { Box, Button, Container, Stack, Typography } from '@mui/material';
import { PagesInfo } from '../../../helpers/constants';
import Navbar from '../../../components/layout/Navbar';

export default function Hero() {
  return (
    <Box
      id={PagesInfo.HOME.sections.HERO}
      sx={{
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Navbar />

      {/* Fondo principal */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: `
            radial-gradient(
              circle at top,
              rgba(255,255,255,0.92) 0%,
              rgba(254,252,250,0.95) 55%,
              rgba(234,223,204,0.96) 100%
            )
          `,
        }}
      />

      {/* Detalles sutiles de luz */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: `
            linear-gradient(
              120deg,
              rgba(200,164,93,0.08),
              transparent 40%,
              rgba(200,164,93,0.06)
            )
          `,
          pointerEvents: 'none',
        }}
      />

      {/* Glow suave central */}
      <Box
        sx={{
          position: 'absolute',
          width: 600,
          height: 600,
          borderRadius: '50%',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'rgba(200,164,93,0.12)',
          filter: 'blur(120px)',
          pointerEvents: 'none',
        }}
      />

      {/* Contenido */}
      <Container
        maxWidth="lg"
        sx={{
          position: 'relative',
          zIndex: 1,
          textAlign: 'center',
        }}
      >
        <Stack spacing={4} alignItems="center">
          {/* Video */}
          <Box
            sx={{
              width: { xs: 220, sm: 280, md: 340 },
              aspectRatio: '1 / 1',
            }}
          >
            <Box
              component="video"
              src="/logo-animated.mp4"
              autoPlay
              loop
              muted
              playsInline
              aria-hidden
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
              }}
            />
          </Box>

          {/* Texto */}
          <Typography
            variant="h1"
            fontWeight={600}
            sx={{
              color: '#5B5450',
              fontSize: {
                xs: '2.2rem',
                sm: '2.8rem',
                md: '3.4rem',
              },
            }}
          >
            Despertar con el Plan de tu Alma
          </Typography>

          <Typography
            variant="h6"
            sx={{
              color: '#6B6460',
              maxWidth: 600,
            }}
          >
            Mentoría espiritual para reconectar con tu propósito, tu energía y tu verdad.
          </Typography>

          {/* CTA */}
          <Button
            component="a"
            href={`/#${PagesInfo.HOME.sections.CONTENT}`}
            variant="contained"
            size="large"
            sx={{
              textTransform: 'none',
              px: 4,
              py: 1.5,
              fontWeight: 500,
              color: '#9A6B1F',
              backgroundColor: '#FFF1D6',
              border: '1px solid #9A6B1F',
              '&:hover': {
                backgroundColor: '#ffe8b9',
              },
            }}
          >
            Quiero más información
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
