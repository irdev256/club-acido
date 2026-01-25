import { Box } from '@mui/material';

export const Highlight = ({ children }: { children: React.ReactNode }) => (
  <Box
    component="span"
    sx={{
      position: 'relative',
      display: 'inline-block',
      fontWeight: 700,
      zIndex: 0, // 👈 crea contexto controlado
      '&::after': {
        content: '""',
        position: 'absolute',
        left: -4,
        right: -4,
        bottom: '0.15em',
        height: '0.55em',
        backgroundColor: '#FFE600',
        zIndex: -1, // 👈 ahora seguro
        borderRadius: '2px',
      },
    }}
  >
    {children}
  </Box>
);
