import { diagnosticoPielQuiz } from './diagnostico-piel';

export const quizzes = [diagnosticoPielQuiz];

export const getQuizBySlug = (slug: string) => quizzes.find((q) => q.slug === slug);
