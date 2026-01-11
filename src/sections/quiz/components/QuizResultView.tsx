import { Box, Typography, Button } from '@mui/material';
import type { QuizResult } from '../helpers.ts/types';

type Props = {
  result: QuizResult | null;
  onRestart?: () => void;
};

export default function QuizResultView({ result, onRestart }: Props) {
  if (!result) {
    return <Typography>No se pudo determinar un resultado.</Typography>;
  }

  return (
    <Box textAlign="center">
      <Typography variant="h4" mb={2}>
        {result.title}
      </Typography>

      <Typography mb={2}>{result.description}</Typography>

      <Typography fontWeight={500} mb={4}>
        {result.recommendation}
      </Typography>

      <Button variant="contained">Agendar tratamiento</Button>
      {onRestart && (
        <Button variant="outlined" onClick={onRestart}>
          Volver a empezar
        </Button>
      )}
    </Box>
  );
}
