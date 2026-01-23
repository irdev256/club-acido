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
              <Typography variant="h4" gutterBottom>
                Lorem ipsum en redes sociales
              </Typography>

              <Typography variant="body1" paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Typography>

              <Typography variant="body1" paragraph>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas ab autem veniam, in praesentium dolorem amet deserunt. Eaque
                repellat quisquam reprehenderit, nisi labore accusantium hic nam, illo veniam perferendis quia. Lorem ipsum dolor sit, amet
                consectetur adipisicing elit. Totam cum ipsam, tenetur itaque expedita harum assumenda deleniti odio fugiat eveniet asperiores
                aspernatur culpa veniam. Error mollitia temporibus facere ipsa aspernatur.
              </Typography>

              <Typography variant="body1" paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
              </Typography>

              <Typography variant="body1" paragraph>
                ¿Querés verme en acción? Seguime en mis redes sociales:
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
