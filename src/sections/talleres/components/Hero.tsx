import { Box, Container, Stack, Typography } from '@mui/material';

export default function Hero() {
  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        py: { xs: 12, md: 18 },
        overflow: 'hidden',
        backgroundColor: 'background.default',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: (theme) => `
            radial-gradient(circle at 15% 20%, ${theme.palette.secondary.light}44 0%, transparent 42%),
            radial-gradient(circle at 85% 75%, ${theme.palette.primary.light}33 0%, transparent 36%)
          `,
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 8, md: 10 }} alignItems={{ xs: 'flex-start', md: 'center' }}>
          <Stack flex={1} spacing={2.5}>
            <Typography
              sx={{
                fontSize: { xs: 42, md: 86 },
                lineHeight: 0.95,
                letterSpacing: '-0.04em',
                textTransform: 'uppercase',
                fontWeight: 900,
                color: 'text.primary',
              }}
            >
              Talleres
              <br />
              Club Ácido
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: 22, md: 36 },
                fontWeight: 800,
                color: 'secondary.main',
                letterSpacing: '-0.02em',
              }}
            >
              Aprender, compartir y practicar
            </Typography>

            <Typography
              sx={{
                maxWidth: 560,
                fontSize: { xs: 17, md: 22 },
                lineHeight: 1.45,
                color: 'text.primary',
              }}
            >
              Espacios grupales para adquirir herramientas reales de skincare, autocuidado y bienestar.
            </Typography>
          </Stack>

          <Box
            sx={{
              flex: 1,
              width: '100%',
              maxWidth: 520,
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: 2,
            }}
          >
            <Box component="img" src="/talleres.jpg" alt="Talleres" sx={collageImage(4)} />
            <Box component="img" src="/aboutacido-3.jpg" alt="Práctica" sx={collageImage(-3)} />
            <Box component="img" src="/aboutacido-4.jpg" alt="Workshop" sx={collageImage(-5)} />
            <Box component="img" src="/talleres.jpg" alt="Clase grupal" sx={collageImage(3)} />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

const collageImage = (rotate: number) => ({
  width: '100%',
  aspectRatio: '4 / 5',
  objectFit: 'cover',
  borderRadius: 2,
  transform: `rotate(${rotate}deg)`,
  boxShadow: '0 18px 40px rgba(0,0,0,0.15)',
});
