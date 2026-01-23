import { AppBar, Box, IconButton, Stack, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import NavigationLoader from './NavigationLoader';
import { PagesInfo, NavItems, HamburgerNavItems } from '../../helpers/constants';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import { alpha } from '@mui/material/styles';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const isHome = location.pathname === '/';
  const [showBrand, setShowBrand] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrolledVh = (window.scrollY / window.innerHeight) * 100;
      setShowBrand(scrolledVh > 80);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* ================= TOP NAVBAR ================= */}

      <AppBar
        position="fixed"
        elevation={0}
        sx={(theme) => ({
          backgroundColor: alpha(theme.palette.secondary.main, 0.75),
          backdropFilter: 'blur(14px) saturate(100%)',
          WebkitBackdropFilter: 'blur(14px) saturate(100%)',
          borderBottom: '1px solid rgba(255,255,255,0.15)',
          color: '#fff',

          // highlight superior tipo vidrio
          '&::before': {
            content: '""',
            position: 'absolute',
            inset: 0,
            background: `
        linear-gradient(
          to bottom,
          rgba(255,255,255,0.18),
          rgba(255,255,255,0.02)
        )
      `,
            pointerEvents: 'none',
          },
        })}
      >
        <Toolbar
          sx={{
            maxWidth: 1200,
            mx: 'auto',
            width: '100%',
            position: 'relative',
          }}
        >
          {/* Logo */}
          <Box
            sx={{
              flexGrow: 1,
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              textDecoration: 'none',
              opacity: showBrand || !isHome ? 1 : 0,
              transform: showBrand || !isHome ? 'translateY(0)' : 'translateY(-6px)',
              transition: 'opacity 400ms ease, transform 400ms ease',
              pointerEvents: showBrand || !isHome ? 'auto' : 'none',
            }}
            component="a"
            href={`/#${PagesInfo.HOME.sections.HERO}`}
          >
            <Box component="img" src="/logo.png" alt="Logo_small" sx={{ width: 80, height: 28 }} />
          </Box>

          {/* Desktop links */}
          <Stack direction="row" spacing={4} sx={{ display: { xs: 'none', md: 'flex' } }}>
            {NavItems.map((item) =>
              item.type === 'route' ? (
                <Box key={item.label} component={Link} to={item.href} sx={linkStyle}>
                  {item.label}
                </Box>
              ) : (
                <Box key={item.label} component="a" href={`/#${item.href}`} sx={linkStyle}>
                  {item.label}
                </Box>
              )
            )}
          </Stack>
          <IconButton
            onClick={() => setOpen(true)}
            sx={{
              position: 'fixed',
              right: 16,
              zIndex: 1201,
              color: '#fff',
            }}
          >
            <MenuIcon sx={{ fontSize: 30 }} />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Toolbar />

      {/* ================= FULLSCREEN OVERLAY MENU ================= */}
      <Box
        sx={{
          position: 'fixed',
          inset: 0,
          zIndex: 1300,
          backgroundColor: 'secondary.main',
          transform: open ? 'translateY(0)' : 'translateY(-100%)',
          transition: `transform 1200ms cubic-bezier(0.22, 1, 0.36, 1)`,
          display: 'flex',
          flexDirection: 'column',
          pointerEvents: open ? 'auto' : 'none',
        }}
      >
        {/* Overlay header */}
        <Box
          sx={{
            height: 64,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid rgba(0,0,0,0.25)',
          }}
        >
          <Typography sx={{ fontWeight: 700, color: 'white', px: { xs: 3, md: 6 } }}>Club ácido</Typography>
          <IconButton onClick={() => setOpen(false)}>
            <CloseIcon />
          </IconButton>
        </Box>

        {/* Menu items */}
        <Stack
          sx={{
            flex: 1,
          }}
        >
          {HamburgerNavItems.map((item, index) => {
            const Component = item.type === 'route' ? Link : 'a';

            return (
              <Box
                key={item.label}
                component={Component}
                to={item.type === 'route' ? item.href : undefined}
                href={item.type !== 'route' ? `/#${item.href}` : undefined}
                onClick={() => setOpen(false)}
                sx={hamburgerRowStyle}
              >
                {/* Icono izquierdo */}
                {item.icon && (
                  <Box
                    component="img"
                    src={item.icon}
                    alt=""
                    sx={{
                      ...hamburgerIconLeftStyle,
                      '--spin-duration': getSpinDuration(index, 6, 5),
                      '--spin-direction': getSpinDirection(index),
                    }}
                  />
                )}

                {/* Texto */}
                <Typography sx={hamburgerTextStyle}>{item.label}</Typography>

                {/* Icono derecho */}
                {item.icon && (
                  <Box
                    component="img"
                    src={item.icon}
                    alt=""
                    sx={{
                      ...hamburgerIconRightStyle,
                      '--spin-duration': getSpinDuration(index + 1, 7, 4),
                      '--spin-direction': getSpinDirection(index + 1),
                    }}
                  />
                )}
              </Box>
            );
          })}
        </Stack>

        {/* Footer */}
        <Box
          sx={{
            fontSize: 14,
            color: 'white',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              gap: 10,
              justifyContent: 'center',
            }}
          >
            <IconButton sx={iconStyle}>
              <InstagramIcon fontSize="inherit" />
            </IconButton>

            <IconButton sx={iconStyle}>
              <YouTubeIcon fontSize="inherit" />
            </IconButton>

            <IconButton sx={iconStyle}>
              <InstagramIcon fontSize="inherit" />
            </IconButton>

            <IconButton sx={iconStyle}>
              <YouTubeIcon fontSize="inherit" />
            </IconButton>
          </Box>
        </Box>
      </Box>

      <NavigationLoader />
    </>
  );
}

/* ================= Styles ================= */

const linkStyle = {
  textDecoration: 'none',
  color: '#fff',
  fontSize: 18,
  cursor: 'pointer',
  '&:hover': { opacity: 0.6 },
};

const hamburgerRowStyle = {
  width: '100%',
  minHeight: 110,
  px: { xs: 3, md: 6 },
  display: 'grid',
  gridTemplateColumns: 'auto max-content auto',
  columnGap: 24,
  alignItems: 'center',
  textDecoration: 'none',
  borderBottom: '1px solid rgba(0,0,0,0.25)',
  backgroundColor: 'transparent',
  transition: 'background-color 300ms ease',

  '&:hover': {
    backgroundColor: '#D8A8FF',
  },

  '&:hover img': {
    transform: 'scale(1.4) rotate(0deg)',
    filter: 'invert(1)',
    opacity: 1,
    animationPlayState: 'paused',
  },
};

const hamburgerTextStyle = {
  justifySelf: 'center',
  fontSize: 'clamp(42px, 6vw, 92px)',
  fontWeight: 800,
  color: '#000',
};

// Keyframe animations for spinning icons

const spinKeyframes = {
  '@keyframes slowSpin': {
    from: { transform: 'rotate(0deg)' },
    to: { transform: 'rotate(360deg)' },
  },
};

const hamburgerIconLeftStyle = {
  width: 90,
  height: 90,
  justifySelf: 'end',
  opacity: 0.85,
  animation: 'slowSpin var(--spin-duration) linear infinite',
  animationDirection: 'var(--spin-direction)',
  transition: 'transform 300ms ease, filter 300ms ease, opacity 300ms ease',

  ...spinKeyframes,
};

const hamburgerIconRightStyle = {
  width: 90,
  height: 90,
  justifySelf: 'start',
  opacity: 0.85,
  animation: 'slowSpin var(--spin-duration) linear infinite',
  animationDirection: 'var(--spin-direction)',
  transition: 'transform 300ms ease, filter 300ms ease, opacity 300ms ease',

  ...spinKeyframes,
};

const iconStyle = {
  fontSize: { xs: 70, md: 140 },
  color: 'background.default',
  transition: 'transform 0.2s ease, color 0.2s ease',
  backgroundColor: 'transparent',
  '&:hover': {
    backgroundColor: 'transparent',
    color: 'primary.main',
    transform: 'translateY(-20px)',
  },
};

const getSpinDuration = (index: number, base = 6, range = 6) => {
  // curva suave: 0 → 1 → 0 → 1 …
  const wave = Math.sin(index * 1.3) * 0.5 + 0.5;
  return `${base + wave * range * 16}s`;
};

const getSpinDirection = (index: number) => (index % 2 === 0 ? 'normal' : 'reverse');
