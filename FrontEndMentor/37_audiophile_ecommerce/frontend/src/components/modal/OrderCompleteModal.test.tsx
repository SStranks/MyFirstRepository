import { ShoppingCartProvider } from '#Context/ShoppingCartContext';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import OrderCompleteModal from './OrderCompleteModal';

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
  test('Component base should be fully rendered', () => {
    const mockSetModalFn = jest.fn();
    const { container } = render(
      <ShoppingCartProvider>
        <OrderCompleteModal modalOpen modalClose={mockSetModalFn} />
      </ShoppingCartProvider>,
      { wrapper: BrowserRouter, container: $root }
    );

    const componentPortal = container;
    const modalText = screen.getByText('thank you for your order');

    expect(componentPortal).toBeInTheDocument();
    expect(modalText).toBeInTheDocument();
  });
});

describe('Functionality', () => {
  test('Clicking `back to home` button fires close modal call', async () => {
    const mockSetModalFn = jest.fn();
    render(
      <ShoppingCartProvider>
        <OrderCompleteModal modalOpen modalClose={mockSetModalFn} />
      </ShoppingCartProvider>,
      { wrapper: BrowserRouter, container: $root }
    );

    const backBtn = screen.getByRole('button', { name: 'back to home' });

    await userEvent.click(backBtn);
    expect(mockSetModalFn).toHaveBeenCalledTimes(1);
    expect(mockSetModalFn).toHaveBeenCalledWith(true);
  });
});
