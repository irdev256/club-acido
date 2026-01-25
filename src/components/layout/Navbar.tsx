import { AppBar, Box, IconButton, Stack, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import NavigationLoader from './NavigationLoader';
import { NavItems, HamburgerNavItems, PagesInfo, Z_INDEX, CLIENT_INSTAGRAM_LINK, CLIENT_TIKTOK_LINK } from '../../helpers/constants';
import InstagramIcon from '@mui/icons-material/Instagram';
import { alpha } from '@mui/material/styles';
import { scrollTo } from '../../helpers/utils';
import TikTokIcon from '../icons/TikTokIcon';

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';
  const isRouteChange = useRef(location.pathname);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (!el) return;

    scrollTo(el, 80); // offset navbar
  };

  const [open, setOpen] = useState(false);
  const [showBrand, setShowBrand] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    document.body.style.pointerEvents = open ? 'none' : '';
    return () => {
      document.body.style.pointerEvents = '';
    };
  }, [open]);

  useEffect(() => {
    if (isRouteChange.current !== location.pathname) {
      isRouteChange.current = location.pathname;
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setOpen(false);
    }
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => {
      // Las dos lineas comentadas son para mostrar la navbar al mismo tiempo que las floating actions
      // pero también queda bien que la navbar aparezca antes, por eso las dejo comentadas:
      // const scrolledVh = (window.scrollY / window.innerHeight) * 100;
      // const atTop = scrolledVh <= 80;

      // ----------------------------------------------

      // Mostrar la navbar antes:
      const atTop = window.scrollY < 10;
      setIsAtTop(atTop);
      setShowBrand(!atTop);
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
          backgroundColor: isAtTop ? 'transparent' : alpha(theme.palette.primary.main, 0.85),

          transition: 'background-color 300ms ease, box-shadow 300ms ease',

          boxShadow: isAtTop ? 'none' : theme.shadows[4],

          color: isAtTop ? theme.palette.text.primary : theme.palette.primary.contrastText,
        })}
      >
        <Toolbar
          sx={{
            width: '100%',
          }}
        >
          {/* Logo */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              mr: 'auto', // 👈 clave: empuja el resto a la derecha
              textDecoration: 'none',
              opacity: showBrand ? 1 : 0,
              transform: showBrand ? 'translateY(0)' : 'translateY(-6px)',
              transition: 'opacity 400ms ease, transform 400ms ease',
              pointerEvents: showBrand ? 'auto' : 'none',
              cursor: 'pointer',
            }}
            component="div"
            onClick={() => {
              if (!isHome) {
                navigate('/');
                return;
              }
              scrollToSection(PagesInfo.HOME.sections.HERO);
            }}
          >
            <Box component="img" src="/logo-white.png" alt="Logo_small" sx={{ width: 80, height: 28 }} />
          </Box>

          {/* Navbar Items */}
          <Stack
            direction="row"
            spacing={3}
            alignItems="center"
            sx={{
              ml: 'auto',
            }}
          >
            {NavItems.map((item) => {
              switch (item.type) {
                case 'route':
                  return (
                    <Box key={item.label} component={Link} to={item.href} sx={linkStyle(isAtTop)}>
                      {item.label}
                    </Box>
                  );

                case 'section':
                  return (
                    <Box
                      key={item.label}
                      sx={linkStyle(isAtTop)}
                      onClick={() => {
                        if (isHome) scrollToSection(item.href);
                      }}
                    >
                      {item.label}
                    </Box>
                  );

                case 'external':
                  return (
                    <Box key={item.label} sx={linkStyle(isAtTop)} onClick={() => window.open(item.href, '_blank', 'noopener,noreferrer')}>
                      {item.label}
                    </Box>
                  );

                default:
                  return null;
              }
            })}
            <IconButton
              onClick={() => setOpen(true)}
              sx={(theme) => ({
                color: isAtTop ? theme.palette.text.primary : theme.palette.primary.contrastText,
                transition: 'color 200ms ease',
              })}
            >
              <MenuIcon sx={{ fontSize: 30 }} />
            </IconButton>
          </Stack>
        </Toolbar>
      </AppBar>

      <Toolbar />

      {/* ================= FULLSCREEN OVERLAY MENU ================= */}
      <Box
        sx={{
          position: 'fixed',
          inset: 0,
          zIndex: Z_INDEX.HAMBURGER_MENU,
          backgroundColor: 'secondary.main',
          transform: open ? 'translateY(0)' : 'translateY(-100%)',
          transition: `transform 1200ms cubic-bezier(0.22, 1, 0.36, 1), visibility 0s linear ${open ? '0s' : '1200ms'}`,
          visibility: open ? 'visible' : 'hidden',
          pointerEvents: open ? 'auto' : 'none',
          display: 'flex',
          flexDirection: 'column',
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
          <IconButton sx={{ mr: 2.6, fontSize: 30, color: 'white' }} onClick={() => setOpen(false)}>
            <CloseIcon />
          </IconButton>
        </Box>

        {/* Hamburger Items */}
        <Stack
          sx={{
            flex: 1,
          }}
        >
          {HamburgerNavItems.map((item, index) => {
            const handleClick = () => {
              setOpen(false);

              switch (item.type) {
                case 'route':
                  navigate(item.href);
                  break;

                case 'section':
                  scrollToSection(item.href);
                  break;

                case 'external':
                  window.open(item.href, '_blank', 'noopener,noreferrer');
                  break;
              }
            };

            return (
              <Box key={item.label} onClick={handleClick} sx={hamburgerRowStyle}>
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
              alignItems: 'center',
            }}
          >
            <IconButton sx={iconStyle} onClick={() => window.open(CLIENT_INSTAGRAM_LINK, '_blank', 'noopener,noreferrer')}>
              <InstagramIcon fontSize="inherit" />
            </IconButton>

            <IconButton sx={iconStyle} onClick={() => window.open(CLIENT_TIKTOK_LINK, '_blank', 'noopener,noreferrer')}>
              <TikTokIcon fontSize="inherit" />
            </IconButton>
          </Box>
        </Box>
      </Box>

      <NavigationLoader />
    </>
  );
}

/* ================= Styles ================= */

const linkStyle = (isAtTop: boolean) => ({
  textDecoration: 'none',
  fontSize: 18,
  cursor: 'pointer',
  color: isAtTop ? 'text.primary' : 'primary.contrastText',
  transition: 'opacity 200ms ease, color 200ms ease',

  '&:hover': {
    opacity: 0.7,
  },
});

const hamburgerRowStyle = {
  width: '100%',
  minHeight: 110,
  px: { xs: 3, md: 6 },
  display: 'grid',
  gridTemplateColumns: 'auto max-content auto',
  columnGap: 12,
  alignItems: 'center',
  textDecoration: 'none',
  borderBottom: '1px solid rgba(0,0,0,0.25)',
  backgroundColor: 'transparent',
  transition: 'background-color 300ms ease',
  cursor: 'pointer',
  color: 'black',
  '&:hover': {
    backgroundColor: '#D8A8FF',
    color: 'accent.main',
  },

  '&:hover img': {
    transform: 'scale(1.4) rotate(0deg)',
    filter: 'invert(1)',
    color: 'accent.main',
    animationPlayState: 'paused',
  },
};

const hamburgerTextStyle = {
  justifySelf: 'start',
  textAlign: 'left',
  fontSize: 'clamp(42px, 6vw, 92px)',
  fontWeight: 800,
};

// Keyframe animations for spinning icons

const spinKeyframes = {
  '@keyframes slowSpin': {
    from: { transform: 'rotate(0deg)' },
    to: { transform: 'rotate(360deg)' },
  },
};

const hamburgerIconRightStyle = {
  width: { xs: 70, md: 90 },
  height: { xs: 70, md: 90 },
  opacity: 0.85,
  animation: 'slowSpin var(--spin-duration) linear infinite',
  animationDirection: 'var(--spin-direction)',
  transition: 'transform 300ms ease, filter 300ms ease, opacity 300ms ease',

  ...spinKeyframes,
};

const iconStyle = {
  fontSize: { xs: 70, md: 100 },
  color: 'background.default',
  backgroundColor: 'transparent',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  lineHeight: 1,
  '& svg': {
    display: 'block',
  },
  transition: 'transform 0.2s ease, color 0.2s ease',
  '&:hover': {
    backgroundColor: 'transparent',
    color: 'accent.main',
    transform: 'translateY(-5px)',
  },
};

const getSpinDuration = (index: number, base = 6, range = 6) => {
  // curva suave: 0 → 1 → 0 → 1 …
  const wave = Math.sin(index * 1.3) * 0.5 + 0.5;
  return `${base + wave * range * 16}s`;
};

const getSpinDirection = (index: number) => (index % 2 === 0 ? 'normal' : 'reverse');
