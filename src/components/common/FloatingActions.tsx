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
        right: { xs: 16, md: 24 },
        bottom: { xs: 16, md: 24 },
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
