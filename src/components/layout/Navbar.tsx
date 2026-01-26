import { AppBar, Box, IconButton, Stack, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import NavigationLoader from './NavigationLoader';
import {
  NavItems,
  HamburgerNavItems,
  PagesInfo,
  Z_INDEX,
  CLIENT_INSTAGRAM_LINK,
  CLIENT_TIKTOK_LINK,
} from '../../helpers/constants';
import InstagramIcon from '@mui/icons-material/Instagram';
import { alpha } from '@mui/material/styles';
import { scrollTo } from '../../helpers/utils';
import TikTokIcon from '../icons/TikTokIcon';

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';
  const isRouteChange = useRef(location.pathname);

  const [open, setOpen] = useState(false);
  const [showBrand, setShowBrand] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (!el) return;
    scrollTo(el, 80);
  };

  useEffect(() => {
    document.body.style.pointerEvents = open ? 'none' : '';
    return () => {
      document.body.style.pointerEvents = '';
    };
  }, [open]);

  useEffect(() => {
    if (isRouteChange.current !== location.pathname) {
      isRouteChange.current = location.pathname;
      setOpen(false);
    }
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => {
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
        <Toolbar>
          {/* Logo */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              mr: 'auto',
              opacity: showBrand ? 1 : 0,
              transform: showBrand ? 'translateY(0)' : 'translateY(-6px)',
              transition: 'opacity 400ms ease, transform 400ms ease',
              pointerEvents: showBrand ? 'auto' : 'none',
              cursor: 'pointer',
            }}
            onClick={() => {
              if (!isHome) {
                navigate('/');
                return;
              }
              scrollToSection(PagesInfo.HOME.sections.HERO);
            }}
          >
            <Box component="img" src="/logo-white.png" alt="Logo" sx={{ width: 80, height: 28 }} />
          </Box>

          {/* Navbar Items */}
          <Stack direction="row" spacing={3} alignItems="center">
            {NavItems.map((item) => {
              if (item.type === 'route') {
                return (
                  <Box key={item.label} component={Link} to={item.href} sx={linkStyle(isAtTop)}>
                    {item.label}
                  </Box>
                );
              }

              if (item.type === 'section') {
                return (
                  <Box
                    key={item.label}
                    sx={linkStyle(isAtTop)}
                    onClick={() => isHome && scrollToSection(item.href)}
                  >
                    {item.label}
                  </Box>
                );
              }

              if (item.type === 'external') {
                return (
                  <Box
                    key={item.label}
                    sx={linkStyle(isAtTop)}
                    onClick={() => window.open(item.href, '_blank', 'noopener,noreferrer')}
                  >
                    {item.label}
                  </Box>
                );
              }

              return null;
            })}

            <IconButton
              onClick={() => setOpen(true)}
              sx={(theme) => ({
                color: isAtTop ? theme.palette.text.primary : theme.palette.primary.contrastText,
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
          transition:
            'transform 1200ms cubic-bezier(0.22, 1, 0.36, 1), visibility 0s linear',
          visibility: open ? 'visible' : 'hidden',
          pointerEvents: open ? 'auto' : 'none',

          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        }}
      >
        {/* Header */}
        <Box
          sx={{
            height: 64,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid rgba(0,0,0,0.25)',
          }}
        >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            px: { xs: 3, md: 6 },
            cursor: 'pointer',
          }}
          onClick={() => {
            setOpen(false);

            if (!isHome) {
              navigate('/');
              return;
            }

            scrollToSection(PagesInfo.HOME.sections.HERO);
          }}
        >
          <Box
            component="img"
            src="/logo-white.png"
            alt="Logo"
            sx={{
              width: 80,
              height: 28,
            }}
          />
        </Box>

          <IconButton sx={{ mr: 2.6, color: 'white' }} onClick={() => setOpen(false)}>
            <CloseIcon />
          </IconButton>
        </Box>

        {/* Scrollable items */}
        <Stack
          sx={{
            flex: 1,
            overflowY: 'auto',
            overscrollBehavior: 'contain',
          }}
        >
          {HamburgerNavItems.map((item, index) => {
            const handleClick = () => {
              setOpen(false);
              if (item.type === 'route') navigate(item.href);
              if (item.type === 'section') scrollToSection(item.href);
              if (item.type === 'external')
                window.open(item.href, '_blank', 'noopener,noreferrer');
            };

            return (
              <Box key={item.label} onClick={handleClick} sx={hamburgerRowStyle}>
                <Typography sx={hamburgerTextStyle}>{item.label}</Typography>

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
        <Box sx={{ py: 2 }}>
          <Box sx={{ display: 'flex', gap: 10, justifyContent: 'center' }}>
            <IconButton sx={iconStyle} onClick={() => window.open(CLIENT_INSTAGRAM_LINK)}>
              <InstagramIcon fontSize="inherit" />
            </IconButton>
            <IconButton sx={iconStyle} onClick={() => window.open(CLIENT_TIKTOK_LINK)}>
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
  '&:hover': { opacity: 0.7 },
});

const hamburgerRowStyle = {
  width: '100%',
  minHeight: 'clamp(72px, 10vh, 110px)',
  px: { xs: 3, md: 6 },
  display: 'grid',
  gridTemplateColumns: 'auto max-content auto',
  alignItems: 'center',
  borderBottom: '1px solid rgba(0,0,0,0.25)',
  cursor: 'pointer',
};

const hamburgerTextStyle = {
  fontSize: 'clamp(32px, 5vw, 88px)',
  fontWeight: 800,
  lineHeight: 1,
};

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
  ...spinKeyframes,
};

const iconStyle = {
  fontSize: { xs: 70, md: 100 },
  color: 'background.default',
  '&:hover': { color: 'accent.main', transform: 'translateY(-5px)' },
};

const getSpinDuration = (index: number, base = 6, range = 6) => {
  const wave = Math.sin(index * 1.3) * 0.5 + 0.5;
  return `${base + wave * range * 16}s`;
};

const getSpinDirection = (index: number) => (index % 2 === 0 ? 'normal' : 'reverse');
