export type QuizState = {
  step: number;
  answers: QuizAnswers;
};

export type QuizAnswerValue = string | string[];

export type QuizAnswers = Record<string, QuizAnswerValue>;

export type QuizOptionScore = {
  resultId: string;
  points: number;
};

export type QuizOption = {
  id: string;
  label: string;
  scores: QuizOptionScore[];
  excludeResultIds?: string[];
};

export type QuizQuestion = {
  id: string;
  title: string;
  subtitle?: string;
  allowMultiple?: boolean;
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
  disclaimer?: string;
  ctaLabel?: string;
  ctaUrl?: string;
};

export type QuizDefinition = {
  slug: string;
  title: string;
  description?: string;
  theme?: QuizTheme;
  questions: QuizQuestion[];
  results: QuizResult[];
};
