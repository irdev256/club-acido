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
            <Box component="img" src="/skincare/skincare1.jpg" alt="Skincare 1" sx={imageStyle(1)} />
            <Box component="img" src="/skincare/skincare2.jpg" alt="Skincare 2" sx={imageStyle(2)} />
            <Box component="img" src="/skincare/skincare3.jpg" alt="Skincare 3" sx={imageStyle(3)} />
            <Box component="img" src="/skincare/skincare5.jpg" alt="Skincare 4" sx={imageStyle(4)} />
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
