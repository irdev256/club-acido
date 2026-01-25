import { Box, Tooltip } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { scrollTo } from '../../helpers/utils';
import { useEffect, useState } from 'react';

export default function ToTopButton() {
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
      title="Volver arriba"
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
            color: 'black',
          },
        },
      }}
    >
      <Box
        onClick={() => scrollTo(0)}
        sx={(theme) => ({
          width: 56,
          height: 56,
          borderRadius: '50%',
          backgroundColor: 'rgba(255,255,255,0.9)',
          color: theme.palette.text.secondary,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 24px rgba(0,0,0,0.25)',
          cursor: 'pointer',
          pointerEvents: visible ? 'auto' : 'none',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(12px)',
          transition: 'opacity 400ms ease, transform 400ms ease, box-shadow 200ms ease',
          '&:hover': {
            transform: 'translateY(-2px) scale(1.05)',
            boxShadow: '0 12px 32px rgba(0,0,0,0.3)',
            color: theme.palette.primary.main,
          },
        })}
      >
        <KeyboardArrowUpIcon sx={{ fontSize: 34 }} />
      </Box>
    </Tooltip>
  );
}
