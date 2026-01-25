import { Box, Container, Typography, useTheme } from '@mui/material';
import { CLIENT_GOOGLE_MAPS_IFRAME, CLIENT_GOOGLE_MAPS_LINK } from '../../../helpers/constants';

export default function UbicacionSection() {
  const theme = useTheme();
  const NEXT_BG = theme.palette.background.default;

  const scallopPath = `
    M0,30
    Q15,20 30,30
    Q45,40 60,30
    Q75,20 90,30
    Q105,40 120,30
    Q135,20 150,30
    Q165,40 180,30
    Q195,20 210,30
    Q225,40 240,30
    Q255,20 270,30
    Q285,40 300,30
    Q315,20 330,30
    Q345,40 360,30
    Q375,20 390,30
    Q405,40 420,30
    Q435,20 450,30
    Q465,40 480,30
    Q495,20 510,30
    Q525,40 540,30
    Q555,20 570,30
    Q585,40 600,30
    Q615,20 630,30
    Q645,40 660,30
    Q675,20 690,30
    Q705,40 720,30
    Q735,20 750,30
    Q765,40 780,30
    Q795,20 810,30
    Q825,40 840,30
    Q855,20 870,30
    Q885,40 900,30
    Q915,20 930,30
    Q945,40 960,30
    Q975,20 990,30
    Q1005,40 1020,30
    Q1035,20 1050,30
    Q1065,40 1080,30
    Q1095,20 1110,30
    Q1125,40 1140,30
    Q1155,20 1170,30
    Q1185,40 1200,30
    Q1215,20 1230,30
    Q1245,40 1260,30
    Q1275,20 1290,30
    Q1305,40 1320,30
    Q1335,20 1350,30
    Q1365,40 1380,30
    Q1395,20 1410,30
    Q1425,40 1440,30
  `;

  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        py: { xs: 8, md: 12 },
        backgroundColor: 'highlight.main',
        overflow: 'hidden',
      }}
    >
      {/* SCALLOPED TOP EDGE */}
      <Box
        component="svg"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        sx={{
          position: 'absolute',
          top: -1,
          left: 0,
          width: '100%',
          height: 36,
          pointerEvents: 'none',
          zIndex: 1,
        }}
      >
        <path d={`${scallopPath} L1440,0 L0,0 Z`} fill={NEXT_BG} />
        <path d={scallopPath} fill="none" />
      </Box>

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
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
              background:
                'linear-gradient(90deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 22%, rgba(0,0,0,0) 40%)',
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

            <Typography sx={{ fontSize: 20, fontWeight: 800, mb: 1 }}>
              Club Ácido
            </Typography>

          <Typography sx={{ fontSize: 14, lineHeight: 1.5, mb: 3 }}>
            Gobernador Inocencio Arias 2570 307#
            <br />
            Castelar, Buenos Aires, Argentina
          </Typography>


            <Box
              onClick={() =>
                window.open(CLIENT_GOOGLE_MAPS_LINK, '_blank', 'noopener,noreferrer')
              }
              sx={{
                display: 'inline-block',
                px: 3,
                py: 1.25,
                border: '1px solid primary.main',
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                backgroundColor: 'accent.main',
                color: 'primary.main',
                transition: 'all 0.25s ease',
                '&:hover': {
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
