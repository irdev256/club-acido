import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scrollTo } from '../../helpers/utils';

export default function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    scrollTo(0, 0, true);
  }, [location.pathname]);

  return null;
}
