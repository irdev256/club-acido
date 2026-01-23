import { Helmet } from 'react-helmet-async';
import { PagesInfo } from '../helpers/constants';
import Tattoo from '../sections/tattoo/Tattoo';

export default function TattooPage() {
  return (
    <>
      <Helmet>
        <title>{PagesInfo.TATTOO.helmet}</title>
      </Helmet>

      <Tattoo />
    </>
  );
}
