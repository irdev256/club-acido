import { Box, Container, Grid, Typography } from '@mui/material';
import PhoneMockup from '../../../components/common/PhoneMockup';
import InstagramIcon from '@mui/icons-material/Instagram';
import IconButton from '@mui/material/IconButton';
import { CLIENT_INSTAGRAM_LINK, CLIENT_TIKTOK_LINK, PagesInfo } from '../../../helpers/constants';
import TikTokIcon from '../../../components/icons/TikTokIcon';

export default function SocialDemo() {
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
        <Grid container spacing={{ xs: 6 }} alignItems="center">
          {/* Columna izquierda – teléfono */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box display="flex" justifyContent={{ xs: 'center', md: 'flex-start' }}>
              <PhoneMockup>
                <Box
                  component="video"
                  src="/video-landing.mp4"
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
          <Grid size={{ xs: 12, md: 6 }}>
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
                  fontSize: 'clamp(40px, 7vw, 84px)',
                  fontWeight: 900,
                  lineHeight: 0.9,
                  letterSpacing: '-0.05em',
                  mb: 5,
                }}
              >
                Club Ácido
                <br />
                <span style={{ fontWeight: 300 }}>en redes</span>
              </Typography>

              <Typography
                sx={{
                  fontSize: 'clamp(22px, 3vw, 32px)',
                  lineHeight: 1.3,
                  fontWeight: 400,
                  mb: 5,
                }}
              >
                Proceso <Highlight>real</Highlight>.
                <br />
                Cuerpo <Highlight>presente</Highlight>.
                <br />
                Contenido <Highlight>vivo</Highlight>.
              </Typography>

              <Typography
                sx={{
                  fontSize: 18,
                  lineHeight: 1.5,
                  color: 'text.secondary',
                  maxWidth: 520,
                  mb: 4,
                }}
              >
                Lo que pasa acá no se explica.
                <br />
                <strong>Se vive.</strong>
              </Typography>

              <Typography
                sx={{
                  fontSize: 11,
                  letterSpacing: '0.25em',
                  textTransform: 'uppercase',
                  fontWeight: 700,
                  color: 'text.primary',
                  mb: 3,
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
  px: 0,
  transition: 'transform 0.2s ease, color 0.2s ease',
  backgroundColor: 'transparent',
  '&:hover': {
    backgroundColor: 'transparent',
    color: 'primary.main',
    transform: 'translateY(-6px)', // mucho más sutil
  },
};

// ------
const Highlight = ({ children }: { children: React.ReactNode }) => (
  <Box
    component="span"
    sx={{
      position: 'relative',
      display: 'inline-block',
      fontWeight: 700,
      zIndex: 0, // 👈 crea contexto controlado
      '&::after': {
        content: '""',
        position: 'absolute',
        left: -4,
        right: -4,
        bottom: '0.15em',
        height: '0.55em',
        backgroundColor: '#FFE600',
        zIndex: -1, // 👈 ahora seguro
        borderRadius: '2px',
      },
    }}
  >
    {children}
  </Box>
);
