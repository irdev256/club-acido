import { Box, Button, Container, Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const QUIZ_PATH = '/quiz/tratamientos-faciales';

export default function QuizCta() {
  const navigate = useNavigate();

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 10 },
        px: { xs: 2, md: 0 },
        background: 'linear-gradient(180deg, rgba(248,244,249,0.3) 0%, rgba(255,255,255,0.95) 100%)',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={(theme) => ({
            position: 'relative',
            overflow: 'hidden',
            borderRadius: { xs: 4, md: 6 },
            px: { xs: 3, md: 8 },
            py: { xs: 4, md: 6 },
            background: `linear-gradient(135deg, ${theme.palette.highlight.main} 0%, ${theme.palette.secondary.main} 52%, ${theme.palette.primary.main} 100%)`,
            boxShadow: '0 26px 56px rgba(188, 94, 232, 0.24)',
          })}
        >
          <Box
            sx={{
              position: 'absolute',
              top: -70,
              right: -30,
              width: { xs: 170, md: 260 },
              height: { xs: 170, md: 260 },
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(255,249,79,0.42) 0%, rgba(255,249,79,0) 72%)',
            }}
          />

          <Box
            sx={{
              position: 'absolute',
              bottom: -90,
              left: -40,
              width: { xs: 160, md: 230 },
              height: { xs: 160, md: 230 },
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(255,255,255,0.26) 0%, rgba(255,255,255,0) 70%)',
            }}
          />

          <Stack spacing={3} sx={{ position: 'relative', zIndex: 1 }}>
            <Typography
              sx={{
                fontSize: { xs: 13, md: 14 },
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.82)',
                fontWeight: 700,
              }}
            >
              No sabés por dónde empezar
            </Typography>

            <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 3, md: 6 }} alignItems={{ xs: 'flex-start', md: 'flex-end' }}>
              <Box sx={{ flex: 1, maxWidth: 720 }}>
                <Typography
                  sx={{
                    fontSize: { xs: 32, md: 54 },
                    lineHeight: 1,
                    letterSpacing: '-0.04em',
                    fontWeight: 800,
                    color: '#FFFFFF',
                    mb: 2,
                    textWrap: 'balance',
                  }}
                >
                  Hacé el quiz y encontrá una recomendación inicial para tu piel.
                </Typography>

                <Typography
                  sx={{
                    fontSize: { xs: 17, md: 19 },
                    lineHeight: 1.6,
                    color: 'rgba(255,255,255,0.9)',
                    maxWidth: 560,
                  }}
                >
                  En menos de dos minutos podés ver qué tratamiento facial encaja mejor con lo que hoy necesita tu piel antes de agendar.
                </Typography>
              </Box>

              <Stack spacing={1.5} alignItems={{ xs: 'stretch', md: 'flex-start' }}>
                <Button
                  variant="contained"
                  onClick={() => navigate(QUIZ_PATH)}
                  sx={(theme) => ({
                    alignSelf: { xs: 'stretch', md: 'flex-start' },
                    px: 3.5,
                    py: 1.5,
                    borderRadius: 999,
                    textTransform: 'none',
                    fontSize: 16,
                    fontWeight: 700,
                    color: theme.palette.secondary.main,
                    backgroundColor: theme.palette.accent.main,
                    boxShadow: '0 12px 26px rgba(255, 249, 79, 0.28)',
                    '&:hover': {
                      backgroundColor: '#FFF26A',
                      boxShadow: '0 16px 30px rgba(255, 249, 79, 0.34)',
                    },
                  })}
                >
                  Hacer quiz de skincare
                </Button>

                <Typography
                  sx={{
                    fontSize: 13,
                    color: 'rgba(255,255,255,0.82)',
                  }}
                >
                  Resultado orientativo para elegir mejor tu primera consulta.
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}