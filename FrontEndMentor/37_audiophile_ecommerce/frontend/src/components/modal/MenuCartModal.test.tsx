import { ShoppingCartProvider } from '#Context/ShoppingCartContext';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import MenuCartModal from './MenuCartModal';

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
    const mockSetModalFn = jest.fn();
    const tree = renderer
      .create(
        <BrowserRouter>
          <ShoppingCartProvider>
            <MenuCartModal
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
  });

  test('Component base should be fully rendered', () => {
    const mockSetModalFn = jest.fn();
    const { container } = render(
      <ShoppingCartProvider>
        <MenuCartModal
          modalOpen
          setModal={mockSetModalFn}
          // eslint-disable-next-line unicorn/no-null
          modalButtonRef={null}
        />
      </ShoppingCartProvider>,
      { wrapper: BrowserRouter, container: $root }
    );

    const componentPortal = container;
    const modalBtn = screen.getByRole('button', {
      name: 'remove all products from cart',
      hidden: true,
    });

    expect(componentPortal).toBeInTheDocument();
    expect(modalBtn).toBeInTheDocument();
  });
});

describe('Functionality', () => {
  test('Clicking outside modal contents/Pressing `Esc`, fires close modal call', async () => {
    const mockSetModalFn = jest.fn();
    const { container } = render(
      <ShoppingCartProvider>
        <MenuCartModal
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
