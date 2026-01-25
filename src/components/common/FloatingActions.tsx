import { Stack } from '@mui/material';
import WhatsAppButton from './WhatsAppButton';
import CalendarButton from './CalendarButton';
import ToTopButton from './ToTopButton';

export default function FloatingActions() {
  return (
    <Stack
      spacing={1.5}
      sx={{
        position: 'fixed',
        right: { xs: 16, md: 24 },
        bottom: { xs: 16, md: 24 },
        zIndex: 1300,
        pointerEvents: 'none', 
      }}
    >
      {/* Orden visual: de arriba hacia abajo */}
      <WhatsAppButton />
      <CalendarButton />
      <ToTopButton />
    </Stack>
  );
}
