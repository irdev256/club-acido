import { Stack } from '@mui/material';
import WhatsAppButton from './WhatsAppButton';
import CalendarButton from './CalendarButton';
import ToTopButton from './ToTopButton';
import { Z_INDEX } from '../../helpers/constants';

export default function FloatingActions() {
  return (
    <Stack
      spacing={1.5}
      sx={{
        position: 'fixed',
        right: { xs: 'calc(12px + env(safe-area-inset-right))', md: 24 },
        bottom: { xs: 'calc(12px + env(safe-area-inset-bottom))', md: 24 },
        zIndex: Z_INDEX.FLOATING_ACTIONS,
      }}
    >
      {/* Orden visual: de arriba hacia abajo */}
      <WhatsAppButton />
      <CalendarButton />
      <ToTopButton />
    </Stack>
  );
}
