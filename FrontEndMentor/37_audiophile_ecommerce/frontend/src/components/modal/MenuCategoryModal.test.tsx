import { ShoppingCartProvider } from '#Context/ShoppingCartContext';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import MenuCategoryModal from './MenuCategoryModal';

let $root: HTMLDivElement;

beforeEach(() => {
  $root = document.createElement('div');
  $root.id = 'modal';
  document.body.append($root);
});

afterEach(() => {
  $root.remove();
});

describe('Appearance', () => {
  test('Component render matches snapshot', () => {
    ReactDOM.createPortal = jest.fn((element) => {
      return element as React.ReactPortal;
    });

    const mockSetModalFn = jest.fn();
    const tree = renderer
      .create(
        <BrowserRouter>
          <ShoppingCartProvider>
            <MenuCategoryModal
              modalOpen
              setModal={mockSetModalFn}
              // eslint-disable-next-line unicorn/no-null
              modalButtonRef={null}
            />
          </ShoppingCartProvider>
        </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();

    (ReactDOM.createPortal as jest.Mock).mockClear();
  });

  test('Component base should be fully rendered', () => {
    const mockSetModalFn = jest.fn();
    const { container } = render(
      <ShoppingCartProvider>
        <MenuCategoryModal
          modalOpen
          setModal={mockSetModalFn}
          // eslint-disable-next-line unicorn/no-null
          modalButtonRef={null}
        />
      </ShoppingCartProvider>,
      { wrapper: BrowserRouter, container: $root }
    );

    const componentPortal = container;
    const modalContainer = container.querySelector('div.container');
    const modalText = screen.getAllByLabelText(/^see all \w+ shop$/i);

    expect(componentPortal).toBeInTheDocument();
    expect(modalContainer).toBeInTheDocument();
    expect(modalText).toHaveLength(3);
  });
});

describe('Functionality', () => {
  test('Clicking outside modal contents/Pressing `Esc`, fires close modal call', async () => {
    const mockSetModalFn = jest.fn();
    const { container } = render(
      <ShoppingCartProvider>
        <MenuCategoryModal
          modalOpen
          setModal={mockSetModalFn}
          // eslint-disable-next-line unicorn/no-null
          modalButtonRef={null}
        />
      </ShoppingCartProvider>,
      { wrapper: BrowserRouter, container: $root }
    );

    const modalContainer = container.querySelector('div.container');

    await userEvent.click(modalContainer as Element);
    await userEvent.keyboard('{Escape}');
    expect(mockSetModalFn).toHaveBeenCalledTimes(2);
    expect(mockSetModalFn).toHaveBeenCalledWith(false);
  });
});
