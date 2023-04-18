import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

// https://v5.reactrouter.com/web/guides/scroll-restoration
// https://stackoverflow.com/a/63042864/20274651

function ScrollToTop(): JSX.Element | null {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // eslint-disable-next-line unicorn/no-null
  return null;
}

export default ScrollToTop;
