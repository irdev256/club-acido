import { Box } from '@mui/material';

interface PhoneMockupProps {
  children: React.ReactNode;
}

export default function PhoneMockup({ children }: PhoneMockupProps) {
  return (
    <Box
      sx={{
        width: { xs: 260, md: 300 },
        aspectRatio: '9 / 19.5',
        borderRadius: '42px',
        background: 'linear-gradient(145deg, #2b2b2b, #1a1a1a)',
        padding: '10px',
        position: 'relative',
        boxShadow: `
          0 16px 40px rgba(0,0,0,0.28),
          inset 0 0 0 1px rgba(255,255,255,0.12)
        `,

      }}
    >
      {/* Borde metálico */}
      <Box
        sx={{
          position: 'absolute',
          inset: 3,
          borderRadius: '38px',
          background: 'linear-gradient(145deg, #3a3a3a, #1c1c1c)',
          zIndex: 1,
        }}
      />

      {/* Pantalla */}
      <Box
        sx={{
          position: 'absolute',
          inset: 8,
          borderRadius: '32px',
          overflow: 'hidden',
          backgroundColor: '#000',
          zIndex: 2,
        }}
      >
        {/* Notch */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 140,
            height: 32,
            backgroundColor: '#000',
            borderBottomLeftRadius: 18,
            borderBottomRightRadius: 18,
            zIndex: 3,
          }}
        />

        {/* Speaker */}
        <Box
          sx={{
            position: 'absolute',
            top: 8,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 60,
            height: 6,
            borderRadius: 3,
            backgroundColor: '#222',
            zIndex: 4,
          }}
        />

        {/* Contenido */}
        <Box
          sx={{
            width: '100%',
            height: '100%',
            position: 'relative',
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
}
