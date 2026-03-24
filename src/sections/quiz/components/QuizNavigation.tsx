import { Box, Button } from '@mui/material';

type Props = {
  step: number;
  total: number;
  canNext: boolean;
  onNext: () => void;
  onBack: () => void;
};

export default function QuizNavigation({ step, total, canNext, onNext, onBack }: Props) {
  return (
    <Box display="flex" justifyContent="space-between" mt={4}>
      <Button
        disabled={step === 0}
        onClick={onBack}
        variant="outlined"
        sx={(theme) => ({
          borderRadius: 999,
          textTransform: 'none',
          borderWidth: 2,
          borderColor: theme.palette.secondary.main,
          color: theme.palette.secondary.main,
        })}
      >
        Volver
      </Button>

      <Button
        variant="contained"
        disabled={!canNext}
        onClick={onNext}
        sx={(theme) => ({
          borderRadius: 999,
          textTransform: 'none',
          fontWeight: 700,
          px: 3,
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
          boxShadow: '0 12px 24px rgba(255, 102, 0, 0.24)',
          '&:hover': {
            backgroundColor: '#E65C00',
          },
        })}
      >
        {step === total - 1 ? 'Finalizar' : 'Continuar'}
      </Button>
    </Box>
  );
}
