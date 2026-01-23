import type { QuizDefinition } from '../sections/quiz/helpers.ts/types';

type WhatsAppOptions = {
  baseUrl: string;
  message?: string;
};

export function buildWhatsAppLink({ baseUrl, message }: WhatsAppOptions) {
  if (!message) return baseUrl;

  return `${baseUrl}?text=${encodeURIComponent(message)}`;
}

export function evaluateQuizByScore(quiz: QuizDefinition, answers: Record<string, string>) {
  const scoreMap: Record<string, number> = {};

  // Inicializar scores
  quiz.results.forEach((r) => {
    scoreMap[r.id] = 0;
  });

  // Sumar puntos
  quiz.questions.forEach((q) => {
    const answerId = answers[q.id];
    if (!answerId) return;

    const option = q.options.find((o) => o.id === answerId);
    if (!option) return;

    option.scores.forEach(({ resultId, points }) => {
      scoreMap[resultId] += points;
    });
  });

  // Resultado ganador
  const winnerId = Object.entries(scoreMap).sort(([, a], [, b]) => b - a)[0]?.[0];

  return {
    winner: quiz.results.find((r) => r.id === winnerId) ?? null,
    scores: scoreMap,
  };
}

export function smoothScrollTo(targetY: number, duration = 900) {
  const startY = window.scrollY;
  const distance = targetY - startY;
  const startTime = performance.now();

  function step(currentTime: number) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);

    window.scrollTo(0, startY + distance * eased);

    if (progress < 1) {
      requestAnimationFrame(step);
    }
  }

  requestAnimationFrame(step);
}
