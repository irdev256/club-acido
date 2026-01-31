import { Box, Container, Grid, Typography } from '@mui/material';
import { CLIENT_AGENDA_PRO } from '../../../helpers/constants';

export default function AboutAcido() {
  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        py: { xs: 10, md: 16 },
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
            mb: 8,
          }}
        >
          Sobre Ácido
        </Typography>

        <Grid container spacing={6}>
          {/* TEXTO */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography sx={bigLine}>Ácido es un espacio</Typography>
            <Typography sx={bigLine}>pensado para el</Typography>
            <Typography sx={bigHighlight}>cuidado estético</Typography>
            <Typography sx={bigLine}>y la búsqueda de</Typography>
            <Typography sx={bigHighlight}>una piel real</Typography>

            <Typography
              sx={{
                mt: 4,
                maxWidth: 420,
                fontSize: 16,
                lineHeight: 1.6,
                color: 'text.secondary',
              }}
            >
              Para esto creemos en el cuidado integral de la piel y en entender que en ella se reflejan nuestros hábitos y las decisiones de
              autocuidado que elegimos día a día.
            </Typography>
          </Grid>

          {/* COLLAGE */}
          <Grid size={{ xs: 12, md: 6 }} sx={{ position: 'relative', minHeight: 420 }}>
            <Box component="img" src="/aboutacido-1.jpg" sx={collageImage(0, -20, -4)} />
            <Box component="img" src="/aboutacido-3.jpg" sx={collageImage(140, 60, 3)} />
            <Box component="img" src="/aboutacido-4.jpg" sx={collageImage(60, 220, -2)} />
          </Grid>
        </Grid>
        <Box
          onClick={() => {
            window.open(CLIENT_AGENDA_PRO, '_blank', 'noopener,noreferrer');
          }}
          sx={{
            mt: 10,
            width: 'fit-content',
            backgroundColor: 'highlight.main',
            cursor: 'pointer',
            borderRadius: 1.5,

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
          }}
        >
          <Typography sx={ctaStyle}>Agendá tu turno</Typography>
        </Box>
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
  position: 'absolute',
  top: y,
  left: x,
  width: 220,
  borderRadius: 2,
  transform: `rotate(${r}deg)`,
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
