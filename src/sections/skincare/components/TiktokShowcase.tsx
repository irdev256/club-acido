import { Box, Container, Stack, Typography } from '@mui/material';
import PhoneMockup from '../../../components/common/PhoneMockup';

export default function TikTokShowcase() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 10, md: 16 },
        backgroundColor: '#FFFFFF',
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={2} mb={{ xs: 8, md: 12 }} alignItems="center">
          <Typography
            sx={{
              fontSize: { xs: 28, md: 48 },
              fontWeight: 800,
              letterSpacing: '-0.03em',
              textAlign: 'center',
              color: '#2E2E2E',
            }}
          >
            Skincare en la vida real
          </Typography>

          <Typography
            sx={{
              fontSize: 18,
              maxWidth: 520,
              textAlign: 'center',
              color: '#555',
            }}
          >
            Procesos, resultados y acompañamiento mostrados sin filtros.
          </Typography>
        </Stack>

        <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 6, md: 22 }} justifyContent="center" alignItems="flex-end">
          <Box
            sx={{
              transform: { md: 'translateY(40px)' },
            }}
          >
            <PhoneMockup>
              <Box
                component="video"
                src="/tiktok-1.mp4"
                autoPlay
                loop
                muted
                playsInline
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </PhoneMockup>
          </Box>

          <Box
            sx={{
              transform: { md: 'scale(1.05)' },
            }}
          >
            <PhoneMockup>
              <Box
                component="video"
                src="/tiktok-2.mp4"
                autoPlay
                loop
                muted
                playsInline
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </PhoneMockup>
          </Box>

          <Box
            sx={{
              transform: { md: 'translateY(40px)' },
            }}
          >
            <PhoneMockup>
              <Box
                component="video"
                src="/tiktok-3.mp4"
                autoPlay
                loop
                muted
                playsInline
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </PhoneMockup>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
