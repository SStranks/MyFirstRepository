import { useCallback, useRef } from 'react';

function useComponentIdGenerator(): () => number {
  const ref = useRef(-1);

  function getId() {
    ref.current += 1;
    return ref.current;
  }

  return useCallback(getId, []);
}

export default useComponentIdGenerator;
