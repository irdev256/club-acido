import { Helmet } from 'react-helmet-async';
import { PagesInfo } from '../helpers/constants';
import Talleres from '../sections/talleres/Talleres';

export default function TalleresPage() {
  return (
    <>
      <Helmet>
        <title>{PagesInfo.TALLERES.helmet}</title>
      </Helmet>

      <Talleres />
    </>
  );
}
