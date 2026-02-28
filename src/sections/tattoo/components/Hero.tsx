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
                  Leti's
                </Box>
                <br />
                Tattoos
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
                Diseños conscientes,
                <br />
                tatuajes con intención.
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: 20, md: 52 },
                  lineHeight: 1.4,
                  color: '#2E2E2E',
                }}
              >
                {' '}
                <Highlight>BLACKWORK.</Highlight>
              </Typography>
            </Stack>
          </Stack>

          {/* COLUMNA IMÁGENES – COMPOSICIÓN EDITORIAL */}
          <Box
            sx={{
              flex: 1.2,
              position: 'relative',
              height: { xs: 'auto', md: 620 },
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
                width: { xs: '100%', md: 260 },
                height: { xs: 220, sm: 260, md: 460 },
                borderRadius: 4,
                overflow: 'hidden',
                boxShadow: '0 20px 40px rgba(0,0,0,0.18)',
                zIndex: 2,
                transform: { xs: 'rotate(3deg)', md: 'rotate(3deg)' },
              }}
            >
              <Box component="img" src="/tattoo-2.PNG" alt="" sx={{ width: '100%', height: '100%', objectFit: 'cover' }} />
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
                transform: { xs: 'rotate(-3deg)', md: 'rotate(-6deg)' },
              }}
            >
              <Box component="img" src="/tattoo-3.jpg" alt="" sx={{ width: '100%', height: '100%', objectFit: 'cover' }} />
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
                transform: { xs: 'rotate(3deg)', md: 'rotate(9deg)' },
              }}
            >
              <Box component="img" src="/tattoo-1.PNG" alt="" sx={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </Box>
            <Box
              sx={{
                position: { xs: 'static', md: 'absolute' },
                top: { md: 36 },
                left: { md: 210 },
                width: { xs: '100%', md: 170 },
                height: { xs: 220, sm: 260, md: 220 },
                borderRadius: 3,
                overflow: 'hidden',
                boxShadow: '0 16px 32px rgba(0,0,0,0.15)',
                opacity: 0.95,
                zIndex: 3,
                transform: { xs: 'rotate(-3deg)', md: 'rotate(-8deg)' },
              }}
            >
              <Box component="img" src="/tattoo-3.jpg" alt="" sx={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </Box>
            <Box
              sx={{
                position: { xs: 'static', md: 'absolute' },
                bottom: { md: 32 },
                left: { md: 120 },
                width: { xs: '100%', md: 150 },
                height: { xs: 220, sm: 260, md: 190 },
                borderRadius: 3,
                overflow: 'hidden',
                boxShadow: '0 14px 28px rgba(0,0,0,0.14)',
                opacity: 0.9,
                zIndex: 2,
                transform: { xs: 'rotate(3deg)', md: 'rotate(7deg)' },
              }}
            >
              <Box component="img" src="/tattoo-2.PNG" alt="" sx={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </Box>
            <Box
              sx={{
                position: { xs: 'static', md: 'absolute' },
                top: { md: 280 },
                right: { md: 10 },
                width: { xs: '100%', md: 140 },
                height: { xs: 220, sm: 260, md: 180 },
                borderRadius: 3,
                overflow: 'hidden',
                boxShadow: '0 14px 28px rgba(0,0,0,0.14)',
                opacity: 0.92,
                zIndex: 4,
                transform: { xs: 'rotate(-3deg)', md: 'rotate(4deg)' },
              }}
            >
              <Box component="img" src="/tattoo-1.PNG" alt="" sx={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
