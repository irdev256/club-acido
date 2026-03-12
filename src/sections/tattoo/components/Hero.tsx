import { Box, Container, Stack, Typography } from '@mui/material';

export default function Hero() {
  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        py: { xs: 12, md: 20 },
        overflow: 'hidden',
        background: `
                    linear-gradient(
                      180deg,
                      #FDEEF4 100%
                      #FFF7FB 40%,
                      #FFFFFF 30%,
                      #F8F4F9 0%,
                    )
                  `,
      }}
    >
      {/* MANCHA DECORATIVA */}
      <Box
        sx={{
          position: 'absolute',
          top: -120,
          left: -120,
          width: 420,
          height: 420,
          borderRadius: '50%',
          background: 'radial-gradient(0deg, #FFD6E8 10%, transparent 70%)',
          filter: 'blur(20px)',
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 10, md: 14 }} alignItems="flex-start">
          {/* COLUMNA TEXTO */}
          <Stack flex={1} spacing={5}>
            <Box>
              <Typography
                sx={{
                  fontSize: { xs: 56, md: 120 },
                  fontWeight: 900,
                  letterSpacing: '-0.04em',
                  lineHeight: 0.9,
                  textTransform: 'uppercase',
                  color: '#2E2E2E',
                }}
              >
                <Box
                  component="span"
                  sx={{
                    fontSize: '0.55em', // 👈 más chico relativo
                    fontWeight: 700, // opcional: un poco menos pesado
                  }}
                >
                Tattoos
                </Box>
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: 28, md: 56 },
                  fontWeight: 700,
                  letterSpacing: '-0.03em',
                  color: '#D46A92',
                }}
              >
                detallistas
              </Typography>
            </Box>

            <Stack spacing={2.5} maxWidth={460}>
              <Typography
                sx={{
                  fontSize: { xs: 20, md: 22 },
                  lineHeight: 1.4,
                  color: '#2E2E2E',
                }}
              >
                Leti es tatuadora especializada en blackwork. Su trabajo explora el contraste entre
                líneas gruesas y finas, creando piezas simples, contundentes y con carácter.
              </Typography>
            </Stack>
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
            <Box component="img" src="/tattoo/tattoo1.jpg" alt="Tattoo 1" sx={imageStyle(1)} />
            <Box component="img" src="/tattoo/tattoo2.jpg" alt="Tattoo 2" sx={imageStyle(2)} />
            <Box component="img" src="/tattoo/tattoo3.jpg" alt="Tattoo 3" sx={imageStyle(3)} />
            <Box component="img" src="/tattoo/tattoo4.jpg" alt="Tattoo 4" sx={imageStyle(4)} />
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
