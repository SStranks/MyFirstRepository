import { ShoppingCartProvider } from '#Context/ShoppingCartContext';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import OrderCompleteCard from './OrderCompleteCard';

describe('Appearance', () => {
  test('Component base should be fully rendered', () => {
    const mockFn = jest.fn();
    localStorage.setItem(
      'shopping-cart',
      JSON.stringify([{ id: 1, quantity: 1 }])
    );

    render(
      <ShoppingCartProvider>
        <OrderCompleteCard modalClose={mockFn} />
      </ShoppingCartProvider>
    );

    const component = screen.getByLabelText('thank you for your order');
    const iconCheck = document.querySelector('img.card__circle__check');
    const textH3 = screen.getByRole('heading', {
      name: 'thank you for your order',
      level: 3,
    });
    const textInfo = screen.getByText(
      'You will receive an email conformation shortly'
    );
    const textGrandTotal = screen.getByText('grand total');
    const textTotalAmount = screen.getByText(
      /^\$(0|[1-9]\d{0,2})(,\d{3})*(\.\d{1,2})?$/
    );
    const backToHomeBtn = screen.getByRole('button', { name: 'back to home' });
    const hrSeparator = screen.queryByRole('separator');
    const btns = screen.queryAllByRole('button');

    expect(component).toBeInTheDocument();
    expect(iconCheck).toBeInTheDocument();
    expect(textH3).toBeInTheDocument();
    expect(textInfo).toBeInTheDocument();
    expect(textGrandTotal).toBeInTheDocument();
    expect(textTotalAmount).toBeInTheDocument();
    expect(backToHomeBtn).toBeInTheDocument();
    expect(hrSeparator).not.toBeInTheDocument();
    // eslint-disable-next-line jest-dom/prefer-in-document
    expect(btns).toHaveLength(1);
  });

  test('When cart has more than one type of item, hr and `view more` button should be visible', () => {
    const mockFn = jest.fn();
    localStorage.setItem(
      'shopping-cart',
      JSON.stringify([
        { id: 1, quantity: 3 },
        { id: 2, quantity: 3 },
      ])
    );

    render(
      <ShoppingCartProvider>
        <OrderCompleteCard modalClose={mockFn} />
      </ShoppingCartProvider>
    );

    const hrSeparator = screen.getByRole('separator');
    const btns = screen.getAllByRole('button');

    expect(hrSeparator).toBeInTheDocument();
    expect(btns).toHaveLength(2);
  });
});

describe('Functionality', () => {
  test('Clicking `back to home` button fires closes modal', async () => {
    const mockFn = jest.fn();

    render(
      <ShoppingCartProvider>
        <OrderCompleteCard modalClose={mockFn} />
      </ShoppingCartProvider>
    );

    const backBtn = screen.getByRole('button', { name: 'back to home' });

    await userEvent.click(backBtn);
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
