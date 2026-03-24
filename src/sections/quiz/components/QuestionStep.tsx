import { Button, Stack, Typography } from '@mui/material';
import type { QuizAnswerValue, QuizQuestion } from '../helpers.ts/types';

type Props = {
  question: QuizQuestion;
  selected?: QuizAnswerValue;
  onSelect: (id: string) => void;
  accentColor?: string;
};

export default function QuestionStep({ question, selected, onSelect, accentColor }: Props) {
  const selectedIds = Array.isArray(selected) ? selected : selected ? [selected] : [];
  const activeColor = accentColor ?? '#BC5EE8';

  return (
    <Stack spacing={3}>
      <Typography
        variant="h5"
        sx={(theme) => ({
          color: theme.palette.text.primary,
        })}
      >
        {question.title}
      </Typography>

      {question.subtitle && (
        <Typography
          sx={(theme) => ({
            mt: -1,
            color: theme.palette.secondary.main,
            fontWeight: 600,
          })}
        >
          {question.subtitle}
        </Typography>
      )}

      {question.options.map((opt) => {
        const isSelected = selectedIds.includes(opt.id);

        return (
        <Button
          key={opt.id}
          variant={isSelected ? 'contained' : 'outlined'}
          onClick={() => onSelect(opt.id)}
          sx={(theme) => ({
            justifyContent: 'flex-start',
            textTransform: 'none',
            borderWidth: 2,
            borderColor: isSelected ? activeColor : theme.palette.secondary.main,
            backgroundColor: isSelected ? activeColor : theme.palette.background.paper,
            color: isSelected ? theme.palette.secondary.contrastText : theme.palette.secondary.main,
            borderRadius: 999,
            px: 2.5,
            py: 1.5,
            fontWeight: 700,
            boxShadow: isSelected ? '0 12px 24px rgba(188, 94, 232, 0.18)' : 'none',
            '&:hover': {
              borderColor: activeColor,
              backgroundColor: isSelected ? activeColor : theme.palette.accent.main,
            },
          })}
        >
          {opt.label}
        </Button>
        );
      })}
    </Stack>
  );
}
