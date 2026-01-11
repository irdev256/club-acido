export type QuizState = {
  step: number;
  answers: Record<string, string>;
};

export type QuizOptionScore = {
  resultId: string;
  points: number;
};

export type QuizOption = {
  id: string;
  label: string;
  scores: QuizOptionScore[];
};

export type QuizQuestion = {
  id: string;
  title: string;
  subtitle?: string;
  options: QuizOption[];
};

export type QuizTheme = {
  background?: string;
  accentColor?: string;
};

export type QuizResult = {
  id: string;
  title: string;
  description: string;
  recommendation: string;
};

export type QuizDefinition = {
  slug: string;
  title: string;
  description?: string;
  theme?: QuizTheme;
  questions: QuizQuestion[];
  results: QuizResult[];
};
