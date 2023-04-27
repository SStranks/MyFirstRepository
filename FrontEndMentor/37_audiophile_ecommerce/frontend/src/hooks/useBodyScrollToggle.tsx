import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Ensures that if routes change that the 'body overflow' state is unset.
function useBodyScrollToggle(): JSX.Element | null {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    document.body.style.overflow = 'unset';
  }, [pathname]);

  // eslint-disable-next-line unicorn/no-null
  return null;
}

export default useBodyScrollToggle;
