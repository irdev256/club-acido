import { Stack, Typography, Button } from '@mui/material';
import type { QuizQuestion } from '../helpers.ts/types';

type Props = {
  question: QuizQuestion;
  selected?: string;
  onSelect: (id: string) => void;
  accentColor?: string;
};

export default function QuestionStep({ question, selected, onSelect, accentColor }: Props) {
  return (
    <Stack spacing={3}>
      <Typography variant="h5">{question.title}</Typography>

      {question.options.map((opt) => (
        <Button
          key={opt.id}
          variant={selected === opt.id ? 'contained' : 'outlined'}
          onClick={() => onSelect(opt.id)}
          sx={{
            justifyContent: 'flex-start',
            textTransform: 'none',
            borderColor: accentColor,
            backgroundColor: selected === opt.id ? accentColor : 'transparent',
            color: selected === opt.id ? '#fff' : accentColor,
          }}
        >
          {opt.label}
        </Button>
      ))}
    </Stack>
  );
}
