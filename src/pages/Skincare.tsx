import { Helmet } from 'react-helmet-async';
import { PagesInfo } from '../helpers/constants';
import Skincare from '../sections/skincare/Skincare';

export default function SkincarePage() {
  return (
    <>
      <Helmet>
        <title>{PagesInfo.SKINCARE.helmet}</title>
      </Helmet>

      <Skincare />
    </>
  );
}
