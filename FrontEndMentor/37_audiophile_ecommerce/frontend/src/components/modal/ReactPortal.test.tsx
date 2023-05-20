import { render } from '@testing-library/react';
import ReactPortal from './ReactPortal';

describe('Functionality', () => {
  test('Component base should be fully rendered', () => {
    // NOTE:  Portal will render outside of RTL <div> container.
    const { container } = render(
      <ReactPortal wrapperId="modal">
        <div>Dummy Component</div>
      </ReactPortal>
    );

    const componentPortal = document.querySelector('#modal');

    expect(container).toBeEmptyDOMElement();
    expect(componentPortal).toBeInTheDocument();
    expect(componentPortal).toHaveAttribute('id', 'modal');
    expect(componentPortal).toHaveTextContent('Dummy Component');
  });
});
