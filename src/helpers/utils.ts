import type Lenis from 'lenis';
import type { QuizAnswers, QuizDefinition, QuizAnswerValue } from '../sections/quiz/helpers.ts/types';

type WhatsAppOptions = {
  baseUrl: string;
  message?: string;
};

export function buildWhatsAppLink({ baseUrl, message }: WhatsAppOptions) {
  if (!message) return baseUrl;

  return `${baseUrl}?text=${encodeURIComponent(message)}`;
}

function toAnswerIds(answer: QuizAnswerValue | undefined) {
  if (!answer) return [];

  return Array.isArray(answer) ? answer : [answer];
}

export function evaluateQuizByScore(quiz: QuizDefinition, answers: QuizAnswers) {
  const scoreMap: Record<string, number> = {};
  const blockedResults = new Set<string>();

  // Inicializar scores
  quiz.results.forEach((r) => {
    scoreMap[r.id] = 0;
  });

  // Sumar puntos
  quiz.questions.forEach((q) => {
    const answerIds = toAnswerIds(answers[q.id]);
    if (answerIds.length === 0) return;

    answerIds.forEach((answerId) => {
      const option = q.options.find((o) => o.id === answerId);
      if (!option) return;

      option.excludeResultIds?.forEach((resultId) => {
        blockedResults.add(resultId);
      });

      option.scores.forEach(({ resultId, points }) => {
        scoreMap[resultId] += points;
      });
    });
  });

  let winner = null;
  let highestScore = Number.NEGATIVE_INFINITY;

  quiz.results.forEach((result) => {
    if (blockedResults.has(result.id)) return;

    const score = scoreMap[result.id];

    if (score > highestScore) {
      winner = result;
      highestScore = score;
    }
  });

  if (!winner) {
    winner = quiz.results.find((result) => !blockedResults.has(result.id)) ?? quiz.results[0] ?? null;
  }

  return {
    winner,
    scores: scoreMap,
    blockedResults: [...blockedResults],
  };
}

// ---------- Smooth scrolling ----------

let lenisInstance: Lenis | null = null;

export function registerLenis(lenis: Lenis) {
  lenisInstance = lenis;
}
export function getLenis() {
  return lenisInstance;
}

export function scrollTo(target: number | HTMLElement, offset = 0, immediate = false) {
  if (!lenisInstance) return;

  lenisInstance.scrollTo(target, {
    offset: -offset,
    immediate,
  });
}
