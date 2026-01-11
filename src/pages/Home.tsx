import { Helmet } from 'react-helmet-async';
import { PagesInfo } from '../helpers/constants';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>{PagesInfo.HOME.helmet}</title>
      </Helmet>

      <Home />
    </>
  );
}
