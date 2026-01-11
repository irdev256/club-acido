import Quiz from '../sections/quiz/Quiz';
import { Helmet } from 'react-helmet-async';
import { PagesInfo } from '../helpers/constants';

export default function QuizPage() {
  return (
    <>
      <Helmet>
        <title>{PagesInfo.QUIZ.helmet}</title>
      </Helmet>

      <Quiz />
    </>
  );
}
