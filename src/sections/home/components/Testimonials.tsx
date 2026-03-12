import { alpha, Box, Container, Typography, useTheme } from '@mui/material';
import { useEffect, useState } from 'react';
import { PagesInfo } from '../../../helpers/constants';

type Testimonial = {
  title: string;
  text: string;
};

const testimonials: Testimonial[] = [
  {
    title: 'Glow real ✨',
    text: 'En pocas semanas mi piel se ve más pareja y luminosa.',
  },
  {
    title: 'Tattoo sin drama 🖤',
    text: 'Me guiaron en todo y cicatrizó perfecto desde el día uno.',
  },
  {
    title: 'Desconexión total 🌿',
    text: 'Entré tensa y salí liviana, como si reiniciara el cuerpo.',
  },
  {
    title: 'Rutina simple 🧴',
    text: 'Ahora sé exactamente qué usar y qué evitar cada día.',
  },
  {
    title: 'Equipo que escucha 💬',
    text: 'Se siente humano, cercano y súper profesional en cada paso.',
  },
  {
    title: 'Resultados visibles 🔥',
    text: 'Mi piel cambió y lo noté rápido, sin rutinas imposibles.',
  },
];

type SliderPhase = 'building' | 'full-hold' | 'removing' | 'base-hold';

const rotations = [-3.5, 2.2, -6.2, 4.6, -1.8, 5.4];
const stackOffsetsX = [-10, 12, -18, 16, -6, 10];
const stackOffsetsY = [0, 6, 2, 10, 5, 12];
const ICON_SRC = '/icon-secondary.png';
const cardIcons = Array.from({ length: 9 });

export default function TestimonialsLenis() {
  const theme = useTheme();
  const [visibleCount, setVisibleCount] = useState(1);
  const [phase, setPhase] = useState<SliderPhase>('building');

  useEffect(() => {
    const interval = window.setInterval(() => {
      setVisibleCount((currentCount) => {
        if (phase === 'building') {
          if (currentCount < testimonials.length) {
            return currentCount + 1;
          }

          setPhase('full-hold');
          return currentCount;
        }

        if (phase === 'full-hold') {
          setPhase('removing');
          return currentCount;
        }

        if (phase === 'removing') {
          if (currentCount > 1) {
            return currentCount - 1;
          }

          setPhase('base-hold');
          return currentCount;
        }

        setPhase('building');
        return currentCount;
      });
    }, 1750);

    return () => {
      window.clearInterval(interval);
    };
  }, [phase]);

  return (
    <Box
      id={PagesInfo.HOME.sections.TESTIMONIALS}
      component="section"
      sx={{
        position: 'relative',
        pt: { xs: 7, md: 10 },
        pb: { xs: 12, md: 18 },
        backgroundColor: 'background.default',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          sx={{
            textTransform: 'uppercase',
            mb: 10,
            color: 'text.primary',
          }}
        >
          Testimonios
        </Typography>

        <Box
          sx={{
            position: 'relative',
            mx: 'auto',
            width: 'min(100%, 760px)',
            height: { xs: 420, md: 470 },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {testimonials.map((item, index) => {
            const isVisibleCard = index < visibleCount;
            const depthFromTop = visibleCount - 1 - index;
            const isPrimaryCard = index % 2 === 0;
            const restingRotate = rotations[index % rotations.length];
            const restingX = stackOffsetsX[index % stackOffsetsX.length];
            const restingY = stackOffsetsY[index % stackOffsetsY.length];
            const entrySideX = index % 2 === 0 ? 140 : -140;

            const borderColor =
              isPrimaryCard
                ? theme.palette.primary.main
                : theme.palette.secondary.main;

            return (
              <Box
                key={index}
                sx={{
                  position: 'absolute',
                  inset: 0,
                  m: 'auto',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  width: { xs: '84%', md: '74%' },
                  maxWidth: 560,
                  minHeight: 'unset',
                  p: { xs: 2.5, md: 3.25 },
                  backgroundColor: 'background.paper',
                  border: '2px solid',
                  borderColor,
                  borderRadius: 0.8,

                  opacity: isVisibleCard ? 1 : 0,

                  boxShadow: `
                    0 ${18 + depthFromTop * 2}px
                    ${34 + depthFromTop * 5}px
                    rgba(0,0,0,${0.12 + Math.max(0, 0.12 - depthFromTop * 0.03)})
                  `,

                  transform: `
                    translate3d(
                      ${isVisibleCard ? `${restingX}px` : `${entrySideX}px`},
                      ${isVisibleCard ? `${restingY + depthFromTop * 2}px` : '40px'},
                      0
                    )
                    rotate(${isVisibleCard ? `${restingRotate}deg` : `${restingRotate * 0.7}deg`})
                    scale(${isVisibleCard ? `${1 - depthFromTop * 0.018}` : '0.92'})
                  `,

                  transition:
                    'transform 620ms cubic-bezier(0.22, 1, 0.36, 1), opacity 420ms ease, box-shadow 0.3s ease, background-color 0.25s ease',
                  zIndex: isVisibleCard ? index + 1 : 0,

                  willChange: 'transform, opacity, box-shadow',

                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    inset: 0,
                    pointerEvents: 'none',
                    opacity: isVisibleCard ? 0.18 : 0,
                    background: `linear-gradient(135deg, ${alpha(theme.palette.highlight.main, 0.25)} 0%, transparent 68%)`,
                    transition: 'opacity 0.2s ease',
                  },
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: 58, md: 72 },
                    lineHeight: 1,
                    fontWeight: 900,
                    color: isPrimaryCard ? 'secondary.main' : 'primary.main',
                    mb: -0.8,
                  }}
                >
                  “
                </Typography>

                <Typography
                  sx={{
                    mb: 0.9,
                    fontSize: { xs: 22, md: 34 },
                    fontWeight: 900,
                    letterSpacing: '-0.02em',
                    color: isPrimaryCard ? 'primary.main' : 'secondary.main',
                    textTransform: 'uppercase',
                    lineHeight: 1,
                  }}
                >
                  {item.title}
                </Typography>

                <Typography
                  variant="body1"
                  component="blockquote"
                  sx={{
                    mt: { xs: 2, md: 3 },
                    fontSize: { xs: 18, md: 24 },
                    lineHeight: 1.25,
                    fontWeight: 800,
                    color: 'text.primary',
                    textAlign: 'center',
                    alignSelf: 'center',
                    maxWidth: '95%',
                    m: 0,
                    pt: { xs: 2, md: 3.5 },
                  }}
                >
                  {item.text}
                </Typography>

                <Box
                  sx={{
                    mt: 'auto',
                    pt: { xs: 2, md: 2.5 },
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexWrap: 'nowrap',
                    gap: { xs: 0.8, md: 1.1 },
                    overflow: 'hidden',
                  }}
                >
                  {cardIcons.map((_, iconIndex) => (
                    <Box
                      key={`${index}-${iconIndex}`}
                      component="img"
                      src={ICON_SRC}
                      alt=""
                      sx={{
                        width: { xs: 14, md: 18 },
                        height: { xs: 14, md: 18 },
                        opacity: 0.88,
                        flexShrink: 0,
                      }}
                    />
                  ))}
                </Box>
              </Box>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
}