import { Box, Container, Typography } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { PagesInfo } from '../../../helpers/constants';
import { getLenis } from '../../../helpers/utils';

type Testimonial = {
  text: string;
};

const testimonials: Testimonial[] = [
  {
    text: 'Agus tiene una manera muy especial de explicarte todo. Me hice un tratamiento de skincare y no solo vi resultados, sino que entendí de verdad cómo cuidar mi piel.',
  },
  {
    text: 'Fui a tatuarme con Leti y la experiencia fue increíble. Súper cuidadosa, atenta y con una sensibilidad única para llevar la idea a la piel.',
  },
  {
    text: 'Nunca me había sentido tan cómoda en una sesión de skincare. Agus te escucha y te propone lo que realmente necesitás.',
  },
  {
    text: 'Leti entendió exactamente lo que quería para mi tattoo. El resultado superó mis expectativas y el proceso fue hermoso.',
  },
  {
    text: 'Llegué a Ácido sin saber mucho de cuidado de la piel y hoy tengo una rutina simple que realmente funciona.',
  },
  {
    text: 'Tatuarme con Leti no fue solo un tattoo, fue un momento para mí. Mucha calma y respeto.',
  },
];

export default function TestimonialsLenis() {
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
        py: { xs: 14, md: 20 },
        backgroundColor: 'background.default',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg" ref={containerRef}>
        <Typography
          sx={{
            fontSize: 'clamp(28px, 6vw, 56px)',
            fontWeight: 900,
            textTransform: 'uppercase',
            letterSpacing: '-0.03em',
            mb: 10,
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
            // offsets orgánicos por card
            const baseOffset = index * 120;
            const float =
              Math.sin(scrollY * 0.002 + index) * 12 +
              Math.min(Math.abs(velocity) * 0.4, 18);

            const rotate =
              Math.sin(scrollY * 0.001 + index * 2) * 1.5;

            return (
              <Box
                key={index}
                sx={{
                  position: 'relative',
                  p: { xs: 4, md: 6 },
                  backgroundColor: 'background.paper',
                  borderRadius: 3,
                  border: '2px solid',
                  borderColor: 'accent.main',

                  boxShadow: '0 30px 70px rgba(0,0,0,0.14)',

                  transform: `
                    translateY(${float}px)
                    rotate(${rotate}deg)
                  `,  

                  transition: 'transform 120ms linear',

                  willChange: 'transform',
                }}
              >
                <Typography
                  sx={{
                    fontSize: 56,
                    lineHeight: 1,
                    fontWeight: 900,
                    color: 'highlight.main',
                    mb: -1,
                    opacity: 0.7,
                  }}
                >
                  “
                </Typography>

                <Typography
                  component="blockquote"
                  sx={{
                    fontSize: 16,
                    lineHeight: 1.65,
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
