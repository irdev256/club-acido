import { Box, Container, Typography, useTheme } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { PagesInfo } from '../../../helpers/constants';
import { getLenis } from '../../../helpers/utils';

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
            const float =
              Math.sin(scrollY * 0.002 + index) * 12 +
              Math.min(Math.abs(velocity) * 0.4, 18);

            const rotate =
              Math.sin(scrollY * 0.001 + index * 2) * 1.5;

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

                  boxShadow: `
                    0 20px 40px rgba(0,0,0,0.06)
                  `,

                  transform: `
                    translateY(${float}px)
                    rotate(${rotate}deg)
                  `,

                  transition:
                    'transform 120ms linear, background-color 0.25s ease',

                  '&:hover': {
                    backgroundColor: 'action.hover',
                  },

                  willChange: 'transform',
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