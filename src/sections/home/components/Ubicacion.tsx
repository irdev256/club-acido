import { Box, Container, Typography } from '@mui/material';
import { CLIENT_GOOGLE_MAPS_IFRAME, CLIENT_GOOGLE_MAPS_LINK } from '../../../helpers/constants';

export default function UbicacionSection() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: 'background.default',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            position: 'relative',
            height: { xs: 420, md: 520 },
            borderRadius: 3,
            overflow: 'hidden',
            boxShadow: '0 30px 80px rgba(0,0,0,0.15)',
          }}
        >
          {/* MAPA */}
          <Box
            component="iframe"
            src={CLIENT_GOOGLE_MAPS_IFRAME}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            sx={{
              width: '100%',
              height: '100%',
              border: 0,
            }}
          />

          {/* OVERLAY */}
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(90deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 22%, rgba(0,0,0,0) 40%)',
              pointerEvents: 'none',
            }}
          />

          {/* CARD TEXTO */}
          <Box
            sx={{
              position: 'absolute',
              top: 32,
              left: 32,
              backgroundColor: 'secondary.main',
              color: '#fff',
              p: 4,
              borderRadius: 2,
              maxWidth: 320,
              zIndex: 2,
            }}
          >
            <Typography
              sx={{
                fontSize: 12,
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                opacity: 0.7,
                mb: 1,
              }}
            >
              Ubicación
            </Typography>

            <Typography sx={{ fontSize: 20, fontWeight: 800, mb: 1 }}>Club Ácido</Typography>

            <Typography sx={{ fontSize: 14, lineHeight: 1.5, mb: 3 }}>
              Callecita 123
              <br />
              CABA, Bs. As., Argentina
            </Typography>

            <Box
              onClick={() => {
                window.open(CLIENT_GOOGLE_MAPS_LINK, '_blank', 'noopener,noreferrer');
              }}
              sx={{
                display: 'inline-block',
                px: 3,
                py: 1.25,
                border: '1px solid primary.main',
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                backgroundColor: 'accent.main',
                color: 'primary.main',
                transition: 'all 0.25s ease',
                '&:hover': {
                  backgroundColor: 'accent.main',
                  color: 'primary.main',
                  cursor: 'pointer',
                },
              }}
            >
              Cómo llegar
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
