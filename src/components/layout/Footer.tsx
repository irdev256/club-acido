import { Box, Container, Grid, Link, Stack, Typography, IconButton } from '@mui/material';

import InstagramIcon from '@mui/icons-material/Instagram';
// import FacebookIcon from '@mui/icons-material/Facebook';

import { CLIENT_EMAIL, CLIENT_INSTAGRAM_LINK, CLIENT_PHONE_NUMBER, CLIENT_TIKTOK_LINK, OUR_WHATSAPP_LINK } from '../../helpers/constants';
import TikTokIcon from '../icons/TikTokIcon';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        pt: { xs: 6, md: 8 },
        pb: { xs: 2, md: 3 },
        backgroundColor: 'background.default',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 6 }} textAlign={{ xs: 'center', md: 'left' }} justifyContent="center">
          {' '}
          {/* Marca */}
          {/* Marca */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Stack
              spacing={1.2}
              alignItems="center" // siempre centrado (nombre + girasol)
            >
              <Box component="img" src="/logo.png" alt="Logo_small" sx={{ width: 220, height: 128 }} />
            </Stack>
          </Grid>
          {/* Contactame */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Stack spacing={1.2}>
              <Typography variant="h6" fontWeight={500}>
                Contactame
              </Typography>

              <Link underline="none" color="text.secondary">
                {CLIENT_PHONE_NUMBER}
              </Link>

              <Link href={`mailto:${CLIENT_EMAIL}`} underline="none" color="text.secondary">
                {CLIENT_EMAIL}
              </Link>
            </Stack>
          </Grid>
          {/* Ubicación */}
          {/* <Grid size={{ xs: 12, md: 3 }}>
            <Stack spacing={1.2} alignItems={{ xs: 'center', md: 'flex-start' }}>
              <Typography variant="h6" fontWeight={500}>
                Ubicación
              </Typography>

              <Link
                href={GOOGLE_MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                underline="none"
                color="text.secondary"
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: { xs: 'center', md: 'flex-start' },
                  gap: 0.5,
                  textAlign: 'center',
                  '&:hover': {
                    color: 'text.primary',
                  },
                }}
              >
                📍 Av. Córdoba 3621 - Palermo
              </Link>
            </Stack>
          </Grid> */}
          {/* Seguime en */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Stack alignItems={{ xs: 'center', md: 'flex-start' }}>
              <Typography variant="h6" fontWeight={500}>
                Seguime en
              </Typography>

              <Stack direction="row">
                <IconButton
                  component="a"
                  href={CLIENT_INSTAGRAM_LINK}
                  target="_blank"
                  sx={{
                    color: 'text.secondary',
                    '&:hover': { color: '#9A6B1F' },
                  }}
                  aria-label="Instagram de Alejandrina González"
                >
                  <InstagramIcon />
                </IconButton>

                <IconButton
                  component="a"
                  href={CLIENT_TIKTOK_LINK}
                  target="_blank"
                  sx={{
                    color: 'text.secondary',
                    '&:hover': { color: '#9A6B1F' },
                  }}
                  aria-label="TikTok de Alejandrina González"
                >
                  <TikTokIcon />
                </IconButton>

                {/* <IconButton
                  component="a"
                  href="#"
                  target="_blank"
                  sx={{
                    color: 'text.secondary',
                    '&:hover': { color: '#9A6B1F' },
                  }}
                  aria-label="Facebook de Alejandrina González"
                >
                  <FacebookIcon />
                </IconButton> */}
              </Stack>
            </Stack>
          </Grid>
        </Grid>

        {/* Footer inferior */}
        <Box
          sx={{
            mt: { xs: 5, md: 6 },
            pt: 3,
            borderTop: '1px solid',
            borderColor: 'divider',
            textAlign: 'center',
          }}
        >
          <Link
            href={OUR_WHATSAPP_LINK}
            target="_blank"
            underline="none"
            color="text.secondary"
            sx={{
              fontSize: 16,
              '&:hover': { color: 'text.primary' },
            }}
          >
            © {new Date().getFullYear()} IR-DEV
          </Link>
        </Box>
      </Container>
    </Box>
  );
}
