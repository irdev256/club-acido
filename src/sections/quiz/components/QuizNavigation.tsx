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
      <Button disabled={step === 0} onClick={onBack}>
        Volver
      </Button>

      <Button variant="contained" disabled={!canNext} onClick={onNext}>
        {step === total - 1 ? 'Finalizar' : 'Continuar'}
      </Button>
    </Box>
  );
}
