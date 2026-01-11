import { Box } from '@mui/material';
import type { QuizDefinition } from '../helpers.ts/types';

import QuestionStep from './QuestionStep';
import QuizNavigation from './QuizNavigation';
import QuizResultView from './QuizResultView';
import { evaluateQuizByScore } from '../../../helpers/utils';
import { useLocalStorageState } from '../../../hooks/useLocalStorageState';

type Props = {
  quiz: QuizDefinition;
};

type QuizState = {
  step: number;
  answers: Record<string, string>;
};

export default function QuizRenderer({ quiz }: Props) {
  const storageKey = `quiz:${quiz.slug}`;

  const [state, setState] = useLocalStorageState<QuizState>(storageKey, { step: 0, answers: {} });

  const { step, answers } = state;
  const isFinished = step === quiz.questions.length;

  const setAnswer = (optionId: string) => {
    const question = quiz.questions[step];

    setState((prev) => ({
      ...prev,
      answers: {
        ...prev.answers,
        [question.id]: optionId,
      },
    }));
  };

  const goNext = () => setState((prev) => ({ ...prev, step: prev.step + 1 }));

  const goBack = () => setState((prev) => ({ ...prev, step: prev.step - 1 }));

  // RESULTADO FINAL
  if (isFinished) {
    const { winner } = evaluateQuizByScore(quiz, answers);

    return (
      <QuizResultView
        result={winner}
        onRestart={() => {
          localStorage.removeItem(storageKey);
          setState({ step: 0, answers: {} });
        }}
      />
    );
  }

  // 👉 PREGUNTA ACTUAL
  const question = quiz.questions[step];

  return (
    <Box>
      <QuestionStep question={question} selected={answers[question.id]} onSelect={setAnswer} accentColor={quiz.theme?.accentColor} />

      <QuizNavigation step={step} total={quiz.questions.length} canNext={!!answers[question.id]} onNext={goNext} onBack={goBack} />
    </Box>
  );
}
