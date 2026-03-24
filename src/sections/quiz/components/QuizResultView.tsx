import { Box, Button, Stack, Typography } from '@mui/material';
import { CLIENT_AGENDA_PRO } from '../../../helpers/constants';
import type { QuizResult } from '../helpers.ts/types';

type Props = {
  result: QuizResult | null;
  onRestart?: () => void;
};

export default function QuizResultView({ result, onRestart }: Props) {
  if (!result) {
    return <Typography>No se pudo determinar un resultado.</Typography>;
  }

  const ctaUrl = result.ctaUrl ?? CLIENT_AGENDA_PRO;
  const ctaLabel = result.ctaLabel ?? 'Agendar tratamiento';

  return (
    <Box>
      <Typography
        textAlign="center"
        textTransform="uppercase"
        letterSpacing={2}
        mb={1}
        sx={(theme) => ({
          color: theme.palette.highlight.main,
          fontWeight: 800,
        })}
      >
        Tratamiento recomendado
      </Typography>

      <Typography
        variant="h4"
        textAlign="center"
        mb={4}
        sx={(theme) => ({
          color: theme.palette.secondary.main,
        })}
      >
        {result.title}
      </Typography>

      <Stack spacing={2.5}>
        <Box
          sx={(theme) => ({
            p: 3,
            borderRadius: 4,
            bgcolor: theme.palette.neutral.main,
            border: `1px solid ${theme.palette.secondary.main}`,
          })}
        >
          <Typography fontWeight={700} mb={1} sx={(theme) => ({ color: theme.palette.secondary.main })}>
            Cómo se siente tu piel
          </Typography>
          <Typography>{result.description}</Typography>
        </Box>

        <Box
          sx={(theme) => ({
            p: 3,
            borderRadius: 4,
            bgcolor: theme.palette.accent.main,
            border: `1px solid ${theme.palette.highlight.main}`,
          })}
        >
          <Typography fontWeight={700} mb={1} sx={(theme) => ({ color: theme.palette.secondary.main })}>
            Por qué te lo recomendamos
          </Typography>
          <Typography>{result.recommendation}</Typography>
        </Box>

        {result.disclaimer && (
          <Typography textAlign="center" sx={(theme) => ({ color: theme.palette.text.secondary })}>
            {result.disclaimer}
          </Typography>
        )}

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
          <Button
            variant="contained"
            onClick={() => window.open(ctaUrl, '_blank', 'noopener,noreferrer')}
            sx={(theme) => ({
              borderRadius: 999,
              px: 3,
              textTransform: 'none',
              fontWeight: 700,
              color: theme.palette.secondary.main,
              backgroundColor: theme.palette.accent.main,
              boxShadow: '0 12px 26px rgba(255, 249, 79, 0.24)',
              '&:hover': {
                backgroundColor: '#FFF26A',
              },
            })}
          >
            {ctaLabel}
          </Button>
          {onRestart && (
            <Button
              variant="outlined"
              onClick={onRestart}
              sx={(theme) => ({
                borderRadius: 999,
                textTransform: 'none',
                borderWidth: 2,
                borderColor: theme.palette.highlight.main,
                color: theme.palette.highlight.main,
              })}
            >
              Volver a empezar
            </Button>
          )}
        </Stack>
      </Stack>
    </Box>
  );
}
