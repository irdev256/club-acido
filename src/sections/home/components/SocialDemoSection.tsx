import { Box, Container, Grid, Typography } from '@mui/material';
import PhoneMockup from '../../../components/common/PhoneMockup';
import { NAVBAR_SECTION_OFFSET_ON_TOP, PagesInfo } from '../../../helpers/constants';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import IconButton from '@mui/material/IconButton';

export default function SocialDemoSection() {
  return (
    <Box
      id={PagesInfo.HOME.sections.SOCIAL_DEMO}
      component="section"
      sx={(theme) => ({
        py: { xs: 8, md: 12 },
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        scrollMarginTop: NAVBAR_SECTION_OFFSET_ON_TOP,
        backgroundColor: theme.palette.background.default,
      })}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 6, md: 10 }} alignItems="center">
          {/* Columna izquierda – teléfono */}
          <Grid size={{ xs: 12, md: 5 }}>
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
          <Grid size={{ xs: 12, md: 7 }}>
            <Box>
              <Typography
                sx={{
                  fontSize: 'clamp(32px, 5vw, 56px)',
                  fontWeight: 800,
                  lineHeight: 1.05,
                  letterSpacing: '-0.03em',
                  mb: 4,
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
                  maxWidth: 520,
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
                  maxWidth: 560,
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
                  mt: 6,
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <IconButton sx={iconStyle}>
                  <InstagramIcon fontSize="inherit" />
                </IconButton>

                <IconButton sx={iconStyle}>
                  <YouTubeIcon fontSize="inherit" />
                </IconButton>

                <IconButton sx={iconStyle}>
                  <InstagramIcon fontSize="inherit" />
                </IconButton>

                <IconButton sx={iconStyle}>
                  <YouTubeIcon fontSize="inherit" />
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
  fontSize: { xs: 70, md: 140 },
  color: 'text.secondary',
  transition: 'transform 0.2s ease, color 0.2s ease',
  backgroundColor: 'transparent',
  '&:hover': {
    backgroundColor: 'transparent',
    color: 'primary.main',
    transform: 'translateY(-20px)',
  },
};
