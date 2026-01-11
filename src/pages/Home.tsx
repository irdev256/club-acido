import Home from '../sections/home/Home';
import { Helmet } from 'react-helmet-async';
import { PagesInfo } from '../helpers/constants';

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>{PagesInfo.HOME.helmet}</title>
      </Helmet>

      <Home />
    </>
  );
}
