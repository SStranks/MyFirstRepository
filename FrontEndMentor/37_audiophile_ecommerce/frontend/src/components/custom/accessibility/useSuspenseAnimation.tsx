import { lazy, useCallback, useState } from 'react';

// https://stackoverflow.com/a/61598220/20274651

/* 
Possible State transitions: LAZY -> IMPORT_FINISHED -> ENABLED
- LAZY: React suspense hasn't been triggered yet.
- IMPORT_FINISHED: dynamic import has completed, now we can trigger animations.
- ENABLED: Deferred component will now be displayed 
*/

function deferPromise() {
  let resolve: unknown;
  const promise = new Promise((_resolve) => {
    resolve = _resolve;
  });
  return { resolve, promise } as {
    resolve: () => void;
    promise: Promise<unknown>;
  };
}

function useSuspenseAnimation(path: string) {
  // eslint-disable-next-line no-use-before-define
  const [state, setState] = useState(init);

  console.log(path);

  const enableComponent = useCallback(() => {
    if (state.status === 'IMPORT_FINISHED') {
      setState((prev) => ({ ...prev, status: 'ENABLED' }));
      state.deferred?.resolve();
    }
  }, [state]);

  return {
    hasImportFinished: state.status === 'IMPORT_FINISHED',
    DeferredComponent: state.DeferredComponent,
    enableComponent,
  };

  function init() {
    const deferred = deferPromise();
    // component object reference  is kept stable, since it's stored in state.
    // TODO:  Need to get dynamic import path into import();
    const DeferredComponent = lazy(() =>
      Promise.all([
        import(`#Pages/${path}`).then((imp) => {
          // triggers re-render, so containing component can react
          setState((prev) => ({ ...prev, status: 'IMPORT_FINISHED' }));
          return imp;
        }),
        deferred.promise,
      ]).then(([imp]) => imp)
    );

    return {
      status: 'LAZY',
      DeferredComponent,
      deferred,
    };
  }
}

export default useSuspenseAnimation;
