import { useEffect } from 'react';

function useScrollLock(isModalOpen: boolean) {
  useEffect(() => {
    if (isModalOpen) {
      const scrollBarCompensation =
        window.innerWidth - document.body.offsetWidth;
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollBarCompensation}px`;
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [isModalOpen]);
}

export default useScrollLock;
