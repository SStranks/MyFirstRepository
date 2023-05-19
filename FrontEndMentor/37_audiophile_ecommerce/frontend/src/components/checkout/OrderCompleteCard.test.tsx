import ViewMoreCartItemsButton from '#Components/custom/buttons/ViewMoreCartItemsButton';
import { ShoppingCartProvider } from '#Context/ShoppingCartContext';
import { render, screen } from '@testing-library/react';
import OrderCompleteCard from './OrderCompleteCard';

describe('Appearance', () => {
  test('Component base should be fully rendered', () => {
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

    const component = screen.getByLabelText('thank you for your order');
    const iconCheck = document.querySelector('img.card__circle__check');
    const textH3 = screen.getByRole('heading', {
      name: 'thank you for your order',
    });
    const textInfo = screen.getByText(
      'You will receive an email conformation shortly'
    );
    const hrSeparator = screen.getByRole('separator');
    const textGrandTotal = screen.getByText('grand total');
    const textTotalAmount = screen.getByText(
      /^\$(0|[1-9]\d{0,2})(,\d{3})*(\.\d{1,2})?$/
    );
    const backToHomeBtn = screen.getByRole('button', { name: 'back to home' });

    expect(component).toBeInTheDocument();
    expect(iconCheck).toBeInTheDocument();
    expect(textH3).toBeInTheDocument();
    expect(textInfo).toBeInTheDocument();
    expect(hrSeparator).toBeInTheDocument();
    expect(textGrandTotal).toBeInTheDocument();
    expect(textTotalAmount).toBeInTheDocument();
    expect(backToHomeBtn).toBeInTheDocument();
    expect(component.contains(<ViewMoreCartItemsButton />)).toBe(true);
  });
});
