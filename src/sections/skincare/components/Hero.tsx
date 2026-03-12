import { Box, Container, Stack, Typography } from '@mui/material';
import { Highlight } from '../../../components/design/Highlight';

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
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 10, md: 14 }} alignItems={{ xs: 'center', md: 'flex-start' }}>
          {/* COLUMNA TEXTO */}
          <Stack flex={1} spacing={5}>
            <Box>
              <Typography
                sx={{
                  fontSize: { xs: 56, md: 120 },
                  fontWeight: 900,
                  letterSpacing: '-0.05em',
                  lineHeight: 0.9,
                  textTransform: 'uppercase',
                  color: '#2E2E2E',
                }}
              >
                Skincare
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: 28, md: 56 },
                  fontWeight: 700,
                  letterSpacing: '-0.03em',
                  color: '#D46A92',
                }}
              >
                real
              </Typography>
            </Box>

            <Stack spacing={3} maxWidth={620}>
              <Box>
                <Typography
                  sx={{
                    fontSize: { xs: 22, md: 28 },
                    fontWeight: 700,
                    lineHeight: 1.25,
                    color: '#2E2E2E',
                    mb: 1,
                  }}
                >
                  <Highlight>Precisa y consciente</Highlight>.
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: 18, md: 20 },
                    lineHeight: 1.55,
                    color: '#2E2E2E',
                  }}
                >
                  Trabajo desde el conocimiento técnico de la piel, pero con una mirada muy atenta a cada persona. Todo acompañamiento es
                  personalizado e integral.
                </Typography>
              </Box>

              <Box>
                <Typography
                  sx={{
                    fontSize: { xs: 22, md: 28 },
                    fontWeight: 700,
                    lineHeight: 1.25,
                    color: '#2E2E2E',
                    mb: 1,
                  }}
                >
                  <Highlight>Estética y experiencia</Highlight>.
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: 18, md: 20 },
                    lineHeight: 1.55,
                    color: '#2E2E2E',
                  }}
                >
                  No solo busco resultados en la piel, sino que busco crear un clima, una identidad y una experiencia alrededor del cuidado.
                </Typography>
              </Box>

              <Box>
                <Typography
                  sx={{
                    fontSize: { xs: 22, md: 28 },
                    fontWeight: 700,
                    lineHeight: 1.25,
                    color: '#2E2E2E',
                    mb: 1,
                  }}
                >
                  <Highlight>Curiosa y en constante aprendizaje</Highlight>.
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: 18, md: 20 },
                    lineHeight: 1.55,
                    color: '#2E2E2E',
                  }}
                >
                  Estoy todo el tiempo investigando, estudiando y cuestionando lo que hago para hacerlo mejor o entenderlo desde un punto de vista
                  nuevo.
                </Typography>
              </Box>

              <Box>
                <Typography
                  sx={{
                    fontSize: { xs: 22, md: 28 },
                    fontWeight: 700,
                    lineHeight: 1.25,
                    color: '#2E2E2E',
                    mb: 1,
                  }}
                >
                  <Highlight>Humana</Highlight>.
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: 18, md: 20 },
                    lineHeight: 1.55,
                    color: '#2E2E2E',
                  }}
                >
                  Hay una intención de cuidar a la persona completa: entender sus hábitos, sus rutinas de cuidado y sus preocupaciones diarias me dan
                  mas herramientas a la hora de guiarlos en el cuidado de su piel.
                </Typography>
              </Box>
            </Stack>
          </Stack>

          {/* COLUMNA IMÁGENES – COMPOSICIÓN EDITORIAL */}
          <Box
            sx={{
              flex: 1.2,
              position: 'relative',
              height: { xs: 'auto', md: 620 },
              width: { xs: '100%', md: 520 },
              maxWidth: '100%',
              mx: 'auto',
              display: { xs: 'grid', md: 'block' },
              gridTemplateColumns: { xs: 'repeat(2, minmax(0, 1fr))', md: 'none' },
              gap: { xs: 1.5, sm: 2 },
            }}
          >
            <Box
              sx={{
                position: { xs: 'static', md: 'absolute' },
                top: { md: 0 },
                left: { md: 0 },
                width: { xs: '100%', md: 240 },
                height: { xs: 220, sm: 260, md: 320 },
                borderRadius: 4,
                overflow: 'hidden',
                boxShadow: '0 20px 40px rgba(0,0,0,0.18)',
                zIndex: 2,
                transform: { xs: 'rotate(3deg)', md: 'rotate(3deg)' },
              }}
            >
              <Box component="img" src="/skincare-2.jpeg" alt="" sx={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </Box>
            <Box
              sx={{
                position: { xs: 'static', md: 'absolute' },
                bottom: { md: 0 },
                right: { md: 60 },
                width: { xs: '100%', md: 260 },
                height: { xs: 220, sm: 260, md: 340 },
                borderRadius: 4,
                overflow: 'hidden',
                boxShadow: '0 20px 40px rgba(0,0,0,0.18)',
                zIndex: 1,
                transform: { xs: 'rotate(-3deg)', md: 'rotate(-4deg)' },
              }}
            >
              <Box component="img" src="/skincare-3.jpeg" alt="" sx={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </Box>
            <Box
              sx={{
                position: { xs: 'static', md: 'absolute' },
                top: { md: 120 },
                right: { md: 50 },
                width: { xs: '100%', md: 180 },
                height: { xs: 220, sm: 260, md: 240 },
                borderRadius: 3,
                overflow: 'hidden',
                boxShadow: '0 16px 32px rgba(0,0,0,0.15)',
                opacity: 0.9,
                transform: { xs: 'rotate(3deg)', md: 'rotate(6deg)' },
              }}
            >
              <Box component="img" src="/skincare-4.jpeg" alt="" sx={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </Box>
            <Box
              sx={{
                position: { xs: 'static', md: 'absolute' },
                bottom: { md: 36 },
                left: { md: 150 },
                width: { xs: '100%', md: 170 },
                height: { xs: 220, sm: 260, md: 220 },
                borderRadius: 3,
                overflow: 'hidden',
                boxShadow: '0 16px 32px rgba(0,0,0,0.15)',
                opacity: 0.92,
                zIndex: 3,
                transform: { xs: 'rotate(-3deg)', md: 'rotate(-7deg)' },
              }}
            >
              <Box component="img" src="/skincare-5.jpeg" alt="" sx={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
