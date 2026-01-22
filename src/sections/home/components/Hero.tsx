import { alpha, Box, Container, Stack, Tooltip } from '@mui/material';
import { PagesInfo } from '../../../helpers/constants';
import Navbar from '../../../components/layout/Navbar';

export default function Hero() {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById(PagesInfo.HOME.sections.SOCIAL_DEMO);

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      id={PagesInfo.HOME.sections.HERO}
      sx={{
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Navbar />

      {/* Fondo principal */}
      <Box
        sx={(theme) => ({
          position: 'absolute',
          inset: 0,
          background: `
          radial-gradient(
          circle at top,
          ${alpha(theme.palette.common.white, 0.92)} 0%,
          ${alpha(theme.palette.background.default, 0.95)} 55%,
          ${alpha(theme.palette.background.paper, 0.96)} 100%)`,
        })}
      />

      {/* Detalles sutiles de luz */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: `
            linear-gradient(
              120deg,
              rgba(200,164,93,0.08),
              transparent 40%,
              rgba(200,164,93,0.06)
            )
          `,
          pointerEvents: 'none',
        }}
      />

      {/* Glow suave central */}
      <Box
        sx={{
          position: 'absolute',
          width: 600,
          height: 600,
          borderRadius: '50%',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'rgba(200,164,93,0.12)',
          filter: 'blur(120px)',
          pointerEvents: 'none',
        }}
      />

      {/* Contenido */}
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
            src="/logo.png"
            component="img"
            aria-hidden
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              paddingBottom: 10, // PADDING BOT PARA SUBIRLO UN POCO
            }}
          />
        </Stack>
      </Container>
      <Tooltip
        title="O apretá... hacé lo que quieras 🙄"
        placement="top"
        arrow
        slotProps={{
          tooltip: {
            sx: {
              fontSize: 22,
              padding: '14px 20px',
              borderRadius: 12,
              backgroundColor: 'rgba(30,30,30,0.85)',
              backdropFilter: 'blur(6px)',
              maxWidth: 480,
              textAlign: 'center',
            },
          },
          arrow: {
            sx: {
              color: 'rgba(30,30,30,0.85)',
            },
          },
        }}
      >
        <Box
          onClick={scrollToNextSection}
          sx={(theme) => ({
            position: 'absolute',
            bottom: 32,
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 1,
            color: theme.palette.text.secondary,
            cursor: 'pointer',

            '@keyframes scrollArrow': {
              '0%': { transform: 'translateY(0)' },
              '50%': { transform: 'translateY(12px)' },
              '100%': { transform: 'translateY(0)' },
            },

            '&:hover': {
              opacity: 0.9,
            },
          })}
        >
          <Box
            sx={{
              animation: 'scrollArrow 0.8s ease-in-out infinite',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Box
              component="svg"
              width={78}
              height={86}
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
              fontSize: 23,
              letterSpacing: '0.08em',
              opacity: 0.75,
            }}
          >
            Scrolleá
          </Box>
        </Box>
      </Tooltip>
    </Box>
  );
}
