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
        minHeight: '93vh',
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
              maxHeight: '70vh',
              objectFit: 'contain',
              paddingBottom: theme.spacing(6),

              '@media (max-width:600px)': {
                width: '95vw',
                maxHeight: '60vh',
              },

              filter: `drop-shadow(0px 10px 28px rgba(0,0,0,0.28))`,
            })}
          />
        </Stack>
      </Container>

      {/* SCROLL INDICATOR */}
      <Box
        onClick={scrollToNextSection}
        sx={(theme) => ({
          position: 'absolute',
          bottom: 32,
          left: '50%',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 1,
          color: theme.palette.text.secondary,
          cursor: 'pointer',

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
            height={72}
            viewBox="0 0 24 36"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 2v26" />
            <path d="M19 21l-7 7-7-7" />
          </Box>
        </Box>

        <Box
          sx={{
            fontSize: 18,
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
