// src/theme.d.ts
import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    accent: Palette['primary'];
    highlight: Palette['primary'];
    neutral: Palette['primary'];
  }

  interface PaletteOptions {
    accent?: PaletteOptions['primary'];
    highlight?: PaletteOptions['primary'];
    neutral?: PaletteOptions['primary'];
  }
}
