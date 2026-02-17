import { Box, Container, Typography, useTheme } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { PagesInfo } from '../../../helpers/constants';
import { getLenis } from '../../../helpers/utils';
import { alpha } from '@mui/material/styles';

type Testimonial = {
  text: string;
};

const testimonials: Testimonial[] = [
  {
    text: 'Arranqué con un diagnóstico de piel y me cambió completamente la forma de cuidarme. Hoy mi rutina es simple y realmente efectiva.',
  },
  {
    text: 'Mi tattoo fue una experiencia súper cuidada. Desde el diseño hasta la cicatrización, todo estuvo acompañado y explicado.',
  },
  {
    text: 'Los masajes en Ácido son un ritual. Salís liviana, desbloqueada y con otra energía en el cuerpo.',
  },
  {
    text: 'No es solo skincare, es educación. Entendí qué necesita mi piel y por qué.',
  },
  {
    text: 'El estudio tiene una vibra muy especial. Profesional, artístico y con mucho respeto por cada proceso.',
  },
  {
    text: 'Después de varias sesiones mi piel está más luminosa y equilibrada. Se nota cuando el cuidado es personalizado.',
  },
];

export default function TestimonialsLenis() {
  const theme = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const [velocity, setVelocity] = useState(0);

  useEffect(() => {
    const lenis = getLenis();
    if (!lenis) return;

    const onScroll = ({ scroll, velocity }: any) => {
      setScrollY(scroll);
      setVelocity(velocity);
    };

    lenis.on('scroll', onScroll);
    return () => {
      lenis.off('scroll', onScroll);
    };
  }, []);

  return (
    <Box
      id={PagesInfo.HOME.sections.TESTIMONIALS}
      component="section"
      sx={{
        position: 'relative',
        py: { xs: 12, md: 18 },
        backgroundColor: 'background.default',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg" ref={containerRef}>
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
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: { xs: 6, md: 8 },
          }}
        >
          {testimonials.map((item, index) => {
            const containerRect =
              containerRef.current?.getBoundingClientRect();

            const viewportHeight = window.innerHeight;

            const percentInView = containerRect
              ? Math.max(
                  0,
                  Math.min(
                    1,
                    (viewportHeight - containerRect.top - index * 80) /
                      viewportHeight
                  )
                )
              : 0;

            // Reveal progressivo
            const translateBase = 80 * (1 - percentInView);

            // Parallax alternado
            const parallax =
              percentInView * 40 * (index % 2 === 0 ? 1 : -1);

            // Rotación según velocidad
            const dynamicRotate =
              velocity * 0.4 * (index % 2 === 0 ? 1 : -1);

            // Leve escala según velocidad
            const scale =
              1 + Math.min(Math.abs(velocity) * 0.0004, 0.04);

            const borderColor =
              index % 2 === 0
                ? theme.palette.primary.main
                : theme.palette.secondary.main;

            return (
              <Box
                key={index}
                sx={{
                  position: 'relative',
                  p: { xs: 4, md: 6 },
                  backgroundColor: 'background.paper',
                  border: '2px solid',
                  borderColor,
                  borderRadius: 0,

                  opacity: percentInView,

                  boxShadow: `
                    0 ${20 + Math.abs(velocity) * 0.2}px
                    ${40 + Math.abs(velocity) * 0.3}px
                    rgba(0,0,0,${
                      0.08 +
                      Math.min(Math.abs(velocity) * 0.0005, 0.08)
                    })
                  `,

                  transform: `
                    translateY(${translateBase + parallax}px)
                    rotate(${dynamicRotate}deg)
                    scale(${scale})
                  `,

                  transition:
                    'transform 120ms linear, background-color 0.25s ease, opacity 0.25s ease',

                  '&:hover': {
                    backgroundColor:
                      index % 2 === 0
                        ? alpha(theme.palette.secondary.main, 0.14)
                        : alpha(theme.palette.primary.main, 0.14),
                  },

                  willChange: 'transform, opacity',
                }}
              >
                <Typography
                  sx={{
                    fontSize: 72,
                    lineHeight: 1,
                    fontWeight: 900,
                    color: 'highlight.main',
                    mb: -2,
                  }}
                >
                  “
                </Typography>

                <Typography
                  variant="body1"
                  component="blockquote"
                  sx={{
                    color: 'text.primary',
                  }}
                >
                  {item.text}
                </Typography>
              </Box>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
}