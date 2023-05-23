import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import ReactPortal from './ReactPortal';

describe('Functionality', () => {
  test('Component render matches snapshot', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <Nav />
        </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

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
