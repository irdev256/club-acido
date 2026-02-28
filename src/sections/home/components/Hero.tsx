import { useEffect, useState } from 'react';
import { Box, Container, Stack } from '@mui/material';
import { PagesInfo } from '../../../helpers/constants';
import { scrollTo } from '../../../helpers/utils';

export default function Hero() {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      // apenas se scrollea un poco, desaparece
      if (window.scrollY > 10) {
        setShowScrollIndicator(false);
      } else {
        setShowScrollIndicator(true);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToNextSection = () => {
    const nextSection = document.getElementById(PagesInfo.HOME.sections.LINKS);
    if (!nextSection) return;
    scrollTo(nextSection, 150);
  };

  return (
    <Box
      id={PagesInfo.HOME.sections.HERO}
      sx={(theme) => ({
        minHeight: { xs: '88vh', md: '93vh' },
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: theme.palette.background.default,
      })}
    >
      {/* CONTENIDO */}
      <Container
        maxWidth="lg"
        sx={{
          position: 'relative',
          zIndex: 1,
          textAlign: 'center',
        }}
      >
        <Stack spacing={4} alignItems="center">
          <Box
            component="img"
            src="/logo.png"
            aria-hidden
            sx={(theme) => ({
              width: '90vw',
              maxWidth: '1200px',
              maxHeight: { xs: '52vh', md: '70vh' },
              objectFit: 'contain',
              paddingBottom: { xs: theme.spacing(4), md: theme.spacing(6) },

              '@media (max-width:600px)': {
                width: '95vw',
                maxHeight: '48vh',
              },

              filter: `drop-shadow(0px 10px 28px rgba(0,0,0,0.28))`,
            })}
          />
        </Stack>
      </Container>

      {/* SCROLL INDICATOR */}
      <Box
        component="button"
        type="button"
        aria-label="Ir a la siguiente sección"
        onClick={scrollToNextSection}
        sx={(theme) => ({
          position: 'absolute',
          bottom: {
            xs: 'calc(84px + env(safe-area-inset-bottom))',
            sm: 20,
            md: 32,
          },
          left: '50%',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 1,
          border: 0,
          background: 'transparent',
          color: theme.palette.text.secondary,
          cursor: 'pointer',
          WebkitTapHighlightColor: 'transparent',
          touchAction: 'manipulation',

          // 👇 estado visible / oculto
          opacity: showScrollIndicator ? 1 : 0,
          pointerEvents: showScrollIndicator ? 'auto' : 'none',
          transform: showScrollIndicator ? 'translate(-50%, 0)' : 'translate(-50%, 12px)',
          transition: 'opacity 400ms ease, transform 400ms ease',

          '@keyframes scrollArrow': {
            '0%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(10px)' },
            '100%': { transform: 'translateY(0)' },
          },

          '&:hover': {
            color: theme.palette.text.primary,
          },
          '&:focus-visible': {
            outline: '2px solid currentColor',
            outlineOffset: 4,
          },
        })}
      >
        <Box
          sx={{
            animation: 'scrollArrow 0.9s ease-in-out infinite',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box
            component="svg"
            width={64}
            height={48}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 9l6 6 6-6" />
          </Box>
        </Box>

        <Box
          sx={{
            display: { xs: 'none', sm: 'block' },
            fontSize: {
              sm: 16,
              md: 18
            },
            letterSpacing: '0.12em',
            opacity: 0.7,
          }}
        >
          Scrolleá
        </Box>
      </Box>
    </Box>
  );
}
