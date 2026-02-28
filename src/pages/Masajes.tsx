import { Helmet } from 'react-helmet-async';
import { PagesInfo } from '../helpers/constants';
import Masajes from '../sections/masajes/Masajes';

export default function MasajesPage() {
  return (
    <>
      <Helmet>
        <title>{PagesInfo.MASAJES.helmet}</title>
      </Helmet>

      <Masajes />
    </>
  );
}
