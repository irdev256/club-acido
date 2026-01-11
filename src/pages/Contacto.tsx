import { Helmet } from 'react-helmet-async';
import { PagesInfo } from '../helpers/constants';

export default function Contacto() {
  return (
    <>
      <Helmet>
        <title>{PagesInfo.CONTACTO.helmet}</title>
      </Helmet>

      <Contacto />
    </>
  );
}
