import { Box, Container, Grid, Typography } from '@mui/material';
import PhoneMockup from '../../../components/common/PhoneMockup';
import InstagramIcon from '@mui/icons-material/Instagram';
import IconButton from '@mui/material/IconButton';
import { CLIENT_INSTAGRAM_LINK, CLIENT_TIKTOK_LINK, PagesInfo } from '../../../helpers/constants';
import TikTokIcon from '../../../components/icons/TikTokIcon';

export default function SocialDemoSection() {
  return (
    <Box
      id={PagesInfo.HOME.sections.SOCIAL_DEMO}
      component="section"
      sx={(theme) => ({
        py: { xs: 6, md: 10 },
        minHeight: { md: '100vh' },
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: theme.palette.background.default,
      })}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 6, md: 20 }} alignItems="center">
          {/* Columna izquierda – teléfono */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box display="flex" justifyContent={{ xs: 'center', md: 'flex-start' }}>
              <PhoneMockup>
                <Box
                  component="video"
                  src="/logo-animated.mp4"
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
          </Grid>

          {/* Columna derecha – texto */}
          <Grid size={{ xs: 12, md: 8 }}>
            <Box
              sx={{
                height: { md: '100%' },
                maxHeight: { md: 620 }, // mismo alto visual que PhoneMockup
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <Typography
                sx={{
                  fontSize: 'clamp(28px, 5vw, 56px)',
                  fontWeight: 800,
                  lineHeight: 1.05,
                  letterSpacing: '-0.03em',
                  mb: 3,
                  maxWidth: { xs: '100%' },
                }}
              >
                Club Ácido
                <br />
                en redes
              </Typography>

              <Typography
                sx={{
                  fontSize: 18,
                  lineHeight: 1.6,
                  fontWeight: 500,
                  mb: 4,
                  color: 'text.primary',
                }}
              >
                No es solo contenido. Es proceso, cuerpo y ritual compartido en tiempo real.
              </Typography>

              <Typography
                sx={{
                  fontSize: 15,
                  lineHeight: 1.9,
                  color: 'text.secondary',
                  mb: 3,
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Typography>

              <Typography
                sx={{
                  mt: 6,
                  mb: 4,
                  fontSize: 20,
                  fontWeight: 700,
                  letterSpacing: '-0.01em',
                }}
              >
                Lo que pasa en Club Ácido no se explica, se vive.
              </Typography>

              <Typography
                sx={{
                  fontSize: 14,
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  color: 'text.secondary',
                  mb: 2,
                }}
              >
                Seguí el proceso
              </Typography>

              <Box
                sx={{
                  display: 'flex',
                  gap: { xs: 2, md: 4 },

                  justifyContent: { xs: 'center', md: 'flex-start' },
                }}
              >
                <IconButton sx={iconStyle} onClick={() => window.open(CLIENT_INSTAGRAM_LINK, '_blank', 'noopener,noreferrer')}>
                  <InstagramIcon fontSize="inherit" />
                </IconButton>

                <IconButton sx={iconStyle} onClick={() => window.open(CLIENT_TIKTOK_LINK, '_blank', 'noopener,noreferrer')}>
                  <TikTokIcon fontSize="inherit" />
                </IconButton>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

const iconStyle = {
  fontSize: { xs: 48, md: 72 },
  color: 'text.secondary',
  transition: 'transform 0.2s ease, color 0.2s ease',
  backgroundColor: 'transparent',
  '&:hover': {
    backgroundColor: 'transparent',
    color: 'primary.main',
    transform: 'translateY(-6px)', // mucho más sutil
  },
};
