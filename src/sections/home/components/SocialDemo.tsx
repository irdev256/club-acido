import { Box, Container, Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import PhoneMockup from '../../../components/common/PhoneMockup';
import InstagramIcon from '@mui/icons-material/Instagram';
import IconButton from '@mui/material/IconButton';
import { CLIENT_INSTAGRAM_LINK, CLIENT_TIKTOK_LINK, PagesInfo } from '../../../helpers/constants';
import TikTokIcon from '../../../components/icons/TikTokIcon';
import { Highlight } from '../../../components/design/Highlight';

const SOCIAL_GIFS = ['/gifs-redes/1.gif', '/gifs-redes/2.gif', '/gifs-redes/3.gif', '/gifs-redes/4.gif'];

export default function SocialDemo() {
  const [currentGifIndex, setCurrentGifIndex] = useState(0);

  useEffect(() => {
    if (SOCIAL_GIFS.length <= 1) return;

    const intervalId = window.setInterval(() => {
      setCurrentGifIndex((prevIndex) => (prevIndex + 1) % SOCIAL_GIFS.length);
    }, 3000);

    return () => window.clearInterval(intervalId);
  }, []);

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
                  component="img"
                  src={SOCIAL_GIFS[currentGifIndex]}
                  alt={`Demo en redes ${currentGifIndex + 1}`}
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
                Compartimos <Highlight>procesos,</Highlight>
                <br />
               <Highlight>autocuidado</Highlight> e información,
                <br />
                y el <Highlight>universo creativo</Highlight> de Ácido.
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
