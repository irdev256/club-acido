import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  typography: {
    fontFamily: `'Inter', sans-serif`,

    h2: {
      fontSize: '3.2rem',
      lineHeight: 1.15,
      fontWeight: 600,
      '@media (max-width:600px)': {
        fontSize: '2.2rem',
      },
    },

    h5: {
      fontSize: '1.25rem',
      fontWeight: 500,
      '@media (max-width:600px)': {
        fontSize: '1.1rem',
      },
    },

    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },

    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.5,
    },
  },

  palette: {
    mode: 'light',

    background: {
      default: '#F8F4F9',
      paper: '#FFFFFF',
    },

    primary: {
      main: '#FF6600',
      contrastText: '#FFFFFF',
    },

    secondary: {
      main: '#BC5EE8',
      contrastText: '#FFFFFF',
    },

    /* 🔹 EXTENDED PALETTE */
    accent: {
      main: '#FFF94F',
      contrastText: '#4F4A47',
    },

    highlight: {
      main: '#F665B5',
      contrastText: '#FFFFFF',
    },

    neutral: {
      main: '#F8F4F9',
      contrastText: '#4F4A47',
    },

    /* 🔹 TEXT SYSTEM */
    text: {
      primary: '#4F4A47',
      secondary: '#7A726E',
      disabled: 'rgba(79,74,71,0.38)',
    },

    divider: 'rgba(79,74,71,0.12)',

    /* 🔹 INTERACTIONS */
    action: {
      hover: 'rgba(255, 102, 0, 0.10)', // primary soft
      selected: 'rgba(188, 94, 232, 0.14)', // secondary soft
      disabled: 'rgba(79,74,71,0.26)',
      disabledBackground: 'rgba(79,74,71,0.08)',
      focus: 'rgba(255, 102, 0, 0.18)',
    },
  },

  shape: {
    borderRadius: 0,
  },
});
