import { Helmet } from 'react-helmet-async';
import { PagesInfo } from '../helpers/constants';
import Contacto from '../sections/contacto/Contacto';

export default function ContactoPage() {
  return (
    <>
      <Helmet>
        <title>{PagesInfo.CONTACTO.helmet}</title>
      </Helmet>

      <Contacto />
    </>
  );
}
