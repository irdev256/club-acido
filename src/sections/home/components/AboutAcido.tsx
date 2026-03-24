import { Box, Container, Grid, Typography } from '@mui/material';
import { CLIENT_AGENDA_PRO } from '../../../helpers/constants';

export default function AboutAcido() {
  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        pt: { xs: 7, md: 9 },
        pb: { xs: 4, md: 5 },
        backgroundColor: 'background.default',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          sx={{
            fontSize: 'clamp(48px, 10vw, 120px)',
            fontWeight: 900,
            letterSpacing: '-0.04em',
            textTransform: 'uppercase',
            mb: 6,
          }}
        >
          Sobre Ácido
        </Typography>

        <Grid container spacing={6}>
          {/* TEXTO */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography sx={bigLine}>Acido es un espacio de estética y exploración.</Typography>
            <Typography sx={bigLine}>
              Cuidamos{' '}
              <Typography component="span" sx={bigHighlight}>
                la piel
              </Typography>
              , pero también abrimos lugar a lo{' '}
              <Typography component="span" sx={bigHighlight}>
                sensible
              </Typography>
              , lo{' '}
              <Typography component="span" sx={bigHighlight}>
                creativo
              </Typography>{' '}
              y lo que transforma.
            </Typography>

            <Box
              component="button"
              type="button"
              aria-label="Agendar turno"
              onClick={() => {
                window.open(CLIENT_AGENDA_PRO, '_blank', 'noopener,noreferrer');
              }}
              sx={{
                mt: { xs: 4, md: 3 },
                width: 'fit-content',
                backgroundColor: 'highlight.main',
                cursor: 'pointer',
                borderRadius: 1.5,
                border: 0,
                WebkitTapHighlightColor: 'transparent',
                touchAction: 'manipulation',

                animation: 'heartBeat 4.2s ease-in-out infinite',
                ...pulseKeyframes,

                transition: 'transform 0.25s ease, box-shadow 0.25s ease',

                '@media (hover: hover)': {
                  '&:hover': {
                    animation: 'none',
                    transform: 'scale(1.07) translateY(-3px)',
                    boxShadow: `
          0 18px 40px rgba(0,0,0,0.32),
          0 6px 14px rgba(0,0,0,0.22)
        `,
                  },
                },
                '&:focus-visible': {
                  outline: '2px solid currentColor',
                  outlineOffset: 4,
                },
              }}
            >
              <Typography sx={ctaStyle}>Agendá tu turno</Typography>
            </Box>
          </Grid>

          {/* COLLAGE */}
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{
              position: 'relative',
              minHeight: { xs: 'auto', md: 600 },
              display: { xs: 'grid', md: 'block' },
              gridTemplateColumns: { xs: 'repeat(2, minmax(0, 1fr))', md: 'none' },
              gap: { xs: 1.5, sm: 2 },
            }}
          >
            <Box component="img" src="/home/about/about-acido-1.PNG" sx={collageImage(0, 10, -4)} />
            <Box component="img" src="/home/about/about-acido-3.PNG" sx={collageImage(300, 20, 5)} />
            <Box component="img" src="/home/about/about-acido-4.jpg" sx={collageImage(160, 125, 3)} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

/* ================= STYLES ================= */

const bigLine = {
  fontSize: 'clamp(28px, 4vw, 48px)',
  fontWeight: 500,
  lineHeight: 1.1,
};

const bigHighlight = {
  fontSize: 'clamp(28px, 4vw, 48px)',
  fontWeight: 800,
  lineHeight: 1.1,
  background: 'linear-gradient(transparent 55%, #FFE600 55%)',
  display: 'inline-block',
  px: 1,
};

const collageImage = (x: number, y: number, r: number) => ({
  position: { xs: 'static', md: 'absolute' },
  top: { md: y },
  left: { md: x },
  width: { xs: '100%', md: 300 },
  height: { xs: 220, sm: 260, md: 'auto' },
  borderRadius: 2,
  objectFit: 'cover',
  transform: { xs: `rotate(${r >= 0 ? 3 : -3}deg)`, md: `rotate(${r}deg)` },
  boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
});

const ctaStyle = {
  fontSize: 12,
  color: 'accent.main',
  letterSpacing: '0.35em', // un poco más editorial
  fontWeight: 800, // más presencia
  textTransform: 'uppercase',

  display: 'inline-block',
  px: 4.5,
  py: 1.75,

  userSelect: 'none',
};

const pulseKeyframes = {
  '@keyframes heartBeat': {
    '0%': {
      transform: 'scale(1)',
      boxShadow: '0 6px 16px rgba(0,0,0,0.18)',
    },

    /* primer golpe */
    '10%': {
      transform: 'scale(1.055)',
      boxShadow: `
        0 14px 28px rgba(0,0,0,0.28),
        0 6px 12px rgba(0,0,0,0.22)
      `,
    },

    '18%': {
      transform: 'scale(1.01)',
      boxShadow: '0 8px 20px rgba(0,0,0,0.24)',
    },

    /* segundo golpe */
    '26%': {
      transform: 'scale(1.045)',
      boxShadow: `
        0 12px 26px rgba(0,0,0,0.26),
        0 4px 10px rgba(0,0,0,0.2)
      `,
    },

    '34%': {
      transform: 'scale(1)',
      boxShadow: '0 6px 16px rgba(0,0,0,0.18)',
    },

    /* descanso corto */
    '100%': {
      transform: 'scale(1)',
      boxShadow: '0 6px 16px rgba(0,0,0,0.18)',
    },
  },
};
