import type Lenis from 'lenis';
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

// ---------- Smooth scrolling ----------

let lenisInstance: Lenis | null = null;

export function registerLenis(lenis: Lenis) {
  lenisInstance = lenis;
}

export function scrollTo(target: number | HTMLElement, offset = 0, immediate = false) {
  if (!lenisInstance) return;

  lenisInstance.scrollTo(target, {
    offset: -offset,
    immediate,
  });
}
