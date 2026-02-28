import { Box, Tooltip } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { CLIENT_AGENDA_PRO } from '../../helpers/constants';
import { useEffect, useState } from 'react';

export default function CalendarButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const atTop = window.scrollY < 10;
      setVisible(!atTop);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <Tooltip
      title="Agendá tu turno!"
      placement="left"
      arrow
      slotProps={{
        tooltip: {
          sx: {
            fontSize: 22,
            padding: '14px 20px',
            borderRadius: 12,
            color: 'accent.main',
            backgroundColor: 'highlight.main',
            backdropFilter: 'blur(6px)',
            textAlign: 'center',
            maxWidth: 480,
          },
        },
        arrow: {
          sx: {
            color: 'highlight.main',
          },
        },
      }}
    >
      <Box
        component="button"
        type="button"
        aria-label="Abrir agenda"
        onClick={() => window.open(CLIENT_AGENDA_PRO, '_blank', 'noopener,noreferrer')}
        sx={{
          width: { xs: 52, md: 56 },
          height: { xs: 52, md: 56 },
          borderRadius: '50%',
          backgroundColor: 'highlight.main',
          color: 'accent.main',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 24px rgba(0,0,0,0.25)',
          cursor: 'pointer',
          border: 0,
          pointerEvents: visible ? 'auto' : 'none',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(12px)',
          transition: 'opacity 400ms ease, transform 400ms ease, box-shadow 200ms ease',
          WebkitTapHighlightColor: 'transparent',
          touchAction: 'manipulation',
          '&:hover': {
            transform: 'translateY(-2px) scale(1.05)',
            boxShadow: '0 12px 32px rgba(0,0,0,0.3)',
          },
          '&:focus-visible': {
            outline: '2px solid currentColor',
            outlineOffset: 2,
          },
        }}
      >
        <CalendarMonthIcon sx={{ fontSize: { xs: 26, md: 28 } }} />
      </Box>
    </Tooltip>
  );
}
