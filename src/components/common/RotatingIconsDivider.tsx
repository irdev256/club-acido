import { Box } from '@mui/material';

export default function RotatingIconsDivider() {
  // Usamos el icono secundario ya coloreado
  const ICON_SRC = '/icon-secondary.png';

  // Tomamos la cantidad de items del menú solo como referencia rítmica
  const repeatedIcons = Array.from({ length: 32 });

  return (
    <Box
      sx={{
        width: '100%',
        height: { xs: 32, md: 90 },
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        backgroundColor: 'transparent',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: { xs: 8, md: 12 }, // 👈 todavía más juntos
          px: { xs: 2, md: 3 },
        }}
      >
        {repeatedIcons.map((_, index) => (
          <Box
            key={index}
            component="img"
            src={ICON_SRC}
            alt=""
            sx={{
              width: { xs: 28, md: 90 },
              height: { xs: 28, md: 90 },
              opacity: 0.9,

              animation: 'slowSpin linear infinite',
              animationDuration: `${getSpinDuration(index)}s`,
              animationDirection: index % 2 === 0 ? 'normal' : 'reverse',

              '@keyframes slowSpin': {
                from: { transform: 'rotate(0deg)' },
                to: { transform: 'rotate(360deg)' },
              },
            }}
          />
        ))}
      </Box>
    </Box>
  );
}

/* ================= helpers ================= */

const getSpinDuration = (index: number) => {
  const base = 20;
  const wave = Math.sin(index * 1.1) * 6;
  return base + wave;
};
