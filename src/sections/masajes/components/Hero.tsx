import { Box, Container, Stack, Typography } from '@mui/material';

export default function Hero() {
  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        py: { xs: 12, md: 18 },
        overflow: 'hidden',
        background: 'linear-gradient(180deg, #FFF7EA 0%, #FFFFFF 55%, #FFF3F8 100%)',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: -80,
          right: -80,
          width: 300,
          height: 300,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,196,113,0.45) 0%, transparent 70%)',
          filter: 'blur(10px)',
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 7, md: 10 }} alignItems="center">
          <Stack flex={1} spacing={2.5}>
            <Typography
              sx={{
                fontSize: { xs: 44, md: 90 },
                lineHeight: 0.95,
                letterSpacing: '-0.04em',
                textTransform: 'uppercase',
                fontWeight: 900,
                color: 'text.primary',
              }}
            >
              Masajes
              <br />
              Club Ácido
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: 24, md: 38 },
                fontWeight: 700,
                color: 'secondary.main',
                letterSpacing: '-0.02em',
              }}
            >
              Pausa, cuerpo y bienestar
            </Typography>

            <Typography
              sx={{
                maxWidth: 520,
                fontSize: { xs: 18, md: 22 },
                lineHeight: 1.45,
                color: 'text.primary',
              }}
            >
              Sesiones personalizadas para bajar el estrés, soltar tensiones y reconectar con tu cuerpo.
            </Typography>
          </Stack>

          <Box
            sx={{
              flex: 1,
              width: '100%',
              maxWidth: 500,
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: 2,
              transform: { md: 'rotate(-2deg)' },
            }}
          >
            <Box component="img" src="/masajes.jpg" alt="Masajes" sx={imageStyle(1)} />
            <Box component="img" src="/skincare-1.jpeg" alt="Bienestar" sx={imageStyle(2)} />
            <Box component="img" src="/masajes.jpg" alt="Relajación" sx={imageStyle(3)} />
            <Box component="img" src="/skincare-2.jpeg" alt="Ritual" sx={imageStyle(4)} />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

const imageStyle = (index: number) => ({
  width: '100%',
  aspectRatio: '4 / 5',
  borderRadius: 2,
  objectFit: 'cover',
  boxShadow: '0 18px 40px rgba(0,0,0,0.16)',
  transform: `rotate(${index % 2 === 0 ? -3 : 3}deg)`,
});
