import { useLayoutEffect, useState } from 'react';
import { createPortal } from 'react-dom';

// Creates a flexible ReactPortal component. Will insert DOM element if no wrappedId exists.
// https://github.com/KRRISH96/react-portal-overlay/blob/main/src/components/ReactPortal.js

type PortalChildren = {
  children: JSX.Element | JSX.Element[];
  wrapperId: string;
};

type WrapperState = Element | null;

function createWrapperAndAppendToBody(wrapperId: string) {
  const wrapperElement = document.createElement('div');
  wrapperElement.setAttribute('id', wrapperId);
  document.body.append(wrapperElement);
  return wrapperElement;
}

function ReactPortal({
  children,
  wrapperId = 'react-portal-wrapper',
}: PortalChildren): React.ReactPortal | null {
  // eslint-disable-next-line unicorn/no-null
  const [wrapperElement, setWrapperElement] = useState<WrapperState>(null);

  useLayoutEffect(() => {
    let element = document.querySelector('#wrapperId');
    let systemCreated = false;
    // if element is not found with wrapperId or wrapperId is not provided,
    // create and append to body
    if (!element) {
      systemCreated = true;
      element = createWrapperAndAppendToBody(wrapperId);
    }
    setWrapperElement(element);

    return () => {
      // delete the programatically created element
      if (systemCreated && element?.parentNode) {
        element.remove();
      }
    };
  }, [wrapperId]);

  // wrapperElement state will be null on very first render.
  // eslint-disable-next-line unicorn/no-null
  if (wrapperElement === null) return null;

  return createPortal(children, wrapperElement);
}

export default ReactPortal;
