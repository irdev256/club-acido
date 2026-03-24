import { diagnosticoPielQuiz } from './diagnostico-piel';
import { tratamientosFacialesQuiz } from './tratamientos-faciales';

export const quizzes = [diagnosticoPielQuiz, tratamientosFacialesQuiz];

export const getQuizBySlug = (slug: string) => quizzes.find((q) => q.slug === slug);
