import { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Container, Typography } from '@mui/material';
import { getQuizBySlug } from './quizzes';
import QuizRenderer from './components/QuizRenderer';

const QUIZ_BG_ICON_SRC = '/icon-secondary.png';

export default function Quiz() {
  const { quizSlug } = useParams();
  const quiz = getQuizBySlug(quizSlug!);
  const [backgroundIconCount, setBackgroundIconCount] = useState(() => getBackgroundIconCount());

  useEffect(() => {
    const handleResize = () => {
      setBackgroundIconCount(getBackgroundIconCount());
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const backgroundIcons = useMemo(() => Array.from({ length: backgroundIconCount }), [backgroundIconCount]);

  if (!quiz) {
    return <Typography>Quiz no encontrado</Typography>;
  }

  return (
    <Box
      sx={(theme) => ({
        position: 'relative',
        minHeight: '100vh',
        backgroundColor: theme.palette.neutral.main,
        py: { xs: 6, md: 8 },
        overflow: 'hidden',

        '@keyframes quizBgSpin': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
      })}
    >
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          pointerEvents: 'none',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(44px, 1fr))',
          alignContent: 'stretch',
          gap: { xs: 1, md: 1.5 },
          p: { xs: 2, md: 3 },
          opacity: 1,
        }}
      >
        {backgroundIcons.map((_, index) => (
          <Box
            key={`quiz-bg-icon-${index}`}
            component="img"
            src={QUIZ_BG_ICON_SRC}
            alt=""
            sx={{
              width: { xs: 28, md: 36 },
              height: { xs: 28, md: 36 },
              justifySelf: 'center',
              alignSelf: 'center',
              animation: 'quizBgSpin linear infinite',
              animationDuration: `${getBackgroundSpinDuration(index)}s`,
              animationDirection: index % 2 === 0 ? 'normal' : 'reverse',
            }}
          />
        ))}
      </Box>

      <Container maxWidth="md">
        <Box
          sx={(theme) => ({
            position: 'relative',
            zIndex: 1,
            maxWidth: 760,
            mx: 'auto',
            px: { xs: 3, md: 6 },
            py: { xs: 4, md: 5 },
            borderRadius: { xs: 5, md: 8 },
            backgroundColor: theme.palette.background.paper,
            boxShadow: '0 20px 40px rgba(188, 94, 232, 0.12)',
          })}
        >
          <Typography
            variant="h3"
            textAlign="left"
            mb={2}
            sx={(theme) => ({
              color: theme.palette.secondary.main,
              textWrap: 'balance',
            })}
          >
            {quiz.title}
          </Typography>

          {quiz.description && (
            <Typography
              textAlign="left"
              mb={4}
              sx={(theme) => ({
                color: theme.palette.text.secondary,
                maxWidth: 620,
              })}
            >
              {quiz.description}
            </Typography>
          )}

          <QuizRenderer quiz={quiz} />
        </Box>
      </Container>
    </Box>
  );
}

const getBackgroundSpinDuration = (index: number) => {
  const base = 24;
  const wave = Math.sin(index * 0.7) * 7;

  return base + wave;
};

const getBackgroundIconCount = () => {
  if (typeof window === 'undefined') {
    return 480;
  }

  const approximateCellSize = 44;
  const columns = Math.ceil(window.innerWidth / approximateCellSize);
  const rows = Math.ceil(window.innerHeight / approximateCellSize);

  // Sumamos una fila extra para evitar huecos al final por variaciones de gap/padding.
  return columns * (rows + 1);
};
