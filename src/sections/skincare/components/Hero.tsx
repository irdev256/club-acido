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

            <Stack spacing={2.5} maxWidth={460}>
              <Typography
                sx={{
                  fontSize: { xs: 20, md: 22 },
                  lineHeight: 1.4,
                  color: '#2E2E2E',
                }}
              >
                Piel sin promesas mágicas.
                <br />
                Procesos conscientes, no apurados.
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: 20, md: 32 },
                  lineHeight: 1.4,
                  color: '#2E2E2E',
                }}
              >
                Acompañamiento honesto, humano, presente, <Highlight>PERÓN.</Highlight>
              </Typography>
            </Stack>
          </Stack>

          {/* COLUMNA IMÁGENES – COMPOSICIÓN EDITORIAL */}
          <Box
            sx={{
              flex: 1.2,
              position: 'relative',
              height: { xs: 420, md: 620 },
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: 240,
                height: 320,
                borderRadius: 4,
                overflow: 'hidden',
                boxShadow: '0 20px 40px rgba(0,0,0,0.18)',
                zIndex: 2,
                transform: 'rotate(3deg)',
              }}
            >
              <Box component="img" src="/skincare-2.jpeg" alt="" sx={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </Box>
            <Box
              sx={{
                position: 'absolute',
                bottom: 0,
                right: 60,
                width: 260,
                height: 340,
                borderRadius: 4,
                overflow: 'hidden',
                boxShadow: '0 20px 40px rgba(0,0,0,0.18)',
                zIndex: 1,
                transform: 'rotate(-4deg)',
              }}
            >
              <Box component="img" src="/skincare-3.jpeg" alt="" sx={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </Box>
            <Box
              sx={{
                position: 'absolute',
                top: 120,
                right: 50,
                width: 180,
                height: 240,
                borderRadius: 3,
                overflow: 'hidden',
                boxShadow: '0 16px 32px rgba(0,0,0,0.15)',
                opacity: 0.9,
                transform: 'rotate(6deg)',
              }}
            >
              <Box component="img" src="/skincare-4.jpeg" alt="" sx={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
