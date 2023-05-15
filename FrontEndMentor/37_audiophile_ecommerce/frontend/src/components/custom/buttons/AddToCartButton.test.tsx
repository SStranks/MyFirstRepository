import {
  ShoppingCartProvider,
  useShoppingCartContext,
} from '#Context/ShoppingCartContext';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AddToCartButton from './AddToCartButton';

// NOTE:  Comment block: To test if child component is passed props
const mockChildComponent = jest.fn();
// expect(mockChildComponent).toHaveBeenCalledWith(
//   expect.objectContaining({
//     open: true,
//     data: "some data",
//   })
// );

// eslint-disable-next-line unicorn/consistent-function-scoping
jest.mock('./QuantityToggleButton', () => ({
  __esModule: true,
  default: (props: unknown) => {
    mockChildComponent(props);
    return <div data-testid="quantity-toggle-button" />;
  },
}));

describe('Appearance', () => {
  test('Component base should be fully rendered', () => {
    const { container } = render(<AddToCartButton productId={1} />);

    const component = container.querySelector('div');
    const QuantityToggleButton = screen.getByTestId('quantity-toggle-button');
    const button = screen.getByRole('button');

    expect(component).toBeInTheDocument();
    expect(QuantityToggleButton).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('add to cart');
  });
});

describe('Functionality', () => {
  test('Button click amends context cartItem[]; increases product (id) by specified quantity; from null to 1 quantity', async () => {
    // Dummy JSX to render out cartItems[] from context
    const TestContextCartTotal = (): JSX.Element => {
      const { cartItems } = useShoppingCartContext();
      const items = cartItems.map(({ id, quantity }) => {
        return (
          <p key={id} data-testid="cartItem">
            id: {id} || quantity: {quantity}
          </p>
        );
      });

      return <div data-testid="cartItems">{items}</div>;
    };

    render(
      <ShoppingCartProvider>
        <TestContextCartTotal />
        <AddToCartButton productId={1} />
      </ShoppingCartProvider>
    );

    const testContextCartTotal = screen.getByTestId('cartItems');
    const button = screen.getByRole('button');

    expect(testContextCartTotal).toBeEmptyDOMElement();
    await userEvent.click(button);
    expect(testContextCartTotal).toContainElement(
      screen.getByTestId('cartItem')
    );
    expect(screen.getByTestId('cartItem')).toHaveTextContent(
      'id: 1 || quantity: 1'
    );
  });
});
