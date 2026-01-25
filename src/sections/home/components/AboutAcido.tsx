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
          sx={{ mt: 10, backgroundColor: 'highlight.main', width: 'fit-content' }}
          onClick={() => {
            window.open(CLIENT_AGENDA_PRO, '_blank', 'noopener,noreferrer');
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
  color: 'black',
  letterSpacing: '0.3em',
  fontWeight: 700,
  textTransform: 'uppercase',
  border: '2px solid black',
  display: 'inline-block',
  px: 4,
  py: 1.5,
  cursor: 'pointer',
};
