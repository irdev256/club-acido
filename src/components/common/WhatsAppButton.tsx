import { Box, Tooltip } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { CLIENT_WHATSAPP_LINK, WHATSAPP_DEFAULT_MESSAGE } from '../../helpers/constants';
import { buildWhatsAppLink } from '../../helpers/utils';
import { useEffect, useState } from 'react';

export default function WhatsAppButton() {
  const whatsappUrl = buildWhatsAppLink({
    baseUrl: CLIENT_WHATSAPP_LINK,
    message: WHATSAPP_DEFAULT_MESSAGE,
  });

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
      title="Hablanos por WhatsApp!"
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
        component="a"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          width: 56,
          height: 56,
          borderRadius: '50%',
          backgroundColor: '#25D366',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 24px rgba(0,0,0,0.25)',
          pointerEvents: visible ? 'auto' : 'none',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(12px)',
          transition: 'opacity 400ms ease, transform 400ms ease, box-shadow 200ms ease',
          '&:hover': {
            transform: 'scale(1.05)',
            boxShadow: '0 12px 32px rgba(0,0,0,0.3)',
          },
        }}
      >
        <WhatsAppIcon sx={{ fontSize: 30 }} />
      </Box>
    </Tooltip>
  );
}
