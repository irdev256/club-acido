import { useParams } from 'react-router-dom';
import { Box, Container, Typography } from '@mui/material';
import { getQuizBySlug } from './quizzes';
import QuizRenderer from './components/QuizRenderer';

export default function Quiz() {
  const { quizSlug } = useParams();
  const quiz = getQuizBySlug(quizSlug!);

  if (!quiz) {
    return <Typography>Quiz no encontrado</Typography>;
  }

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: quiz.theme?.background,
        py: 8,
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="h3" textAlign="center" mb={2}>
          {quiz.title}
        </Typography>

        {quiz.description && (
          <Typography textAlign="center" mb={4}>
            {quiz.description}
          </Typography>
        )}

        <QuizRenderer quiz={quiz} />
      </Container>
    </Box>
  );
}
