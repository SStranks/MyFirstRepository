import { useCallback, useRef } from 'react';

function useComponentIdGenerator(): () => number {
  // Generates a sequential ID; use locally in component - not a globally unique ID.
  // First Id number is 0.
  // NOTE:  If initializing state with elements that have key/uniqueId, then predefine them with negative numbers.
  const ref = useRef(-1);

  function getId() {
    ref.current += 1;
    return ref.current;
  }

  return useCallback(getId, []);
}

export default useComponentIdGenerator;
