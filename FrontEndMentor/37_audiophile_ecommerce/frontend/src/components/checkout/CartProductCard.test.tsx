import { ShoppingCartProvider } from '#Context/ShoppingCartContext';
import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import CartProductCard from './CartProductCard';

const mockQuantityToggleButton = jest.fn();
// eslint-disable-next-line unicorn/consistent-function-scoping
jest.mock('#Components/custom/buttons/QuantityToggleButton', () => ({
  __esModule: true,
  default: (props: unknown) => {
    mockQuantityToggleButton(props);
    return <div data-testid="quantity-toggle-button" />;
  },
}));

describe('Appearance', () => {
  test('Component base should be fully rendered', () => {
    render(
      <CartProductCard
        productId={1}
        productImg="productImage"
        productTitle="productTitle"
        productPrice={123}
        productQuantity={66}
      />
    );

    const component = screen.getByLabelText('productTitle', {
      selector: 'div',
    });
    const productImg = screen.getByAltText('productTitle');
    const productTitle = screen.getByText('productTitle');
    const productPrice = screen.getByText(/123/);
    const QuantityToggleButton = screen.getByTestId('quantity-toggle-button');

    expect(component).toBeInTheDocument();
    expect(productImg).toBeInTheDocument();
    expect(productImg).toHaveAttribute('src', 'productImage');
    expect(productTitle).toBeInTheDocument();
    expect(productPrice).toBeInTheDocument();
    expect(QuantityToggleButton).toBeInTheDocument();
    expect(mockQuantityToggleButton).toHaveBeenCalledWith(
      expect.objectContaining({
        currentValue: 66,
        maxLimit: 99,
      })
    );
  });
});

describe('Functionality', () => {
  // eslint-disable-next-line jest/no-commented-out-tests
  // test('Button click amends context cartItem[]; increases product (id) by specified quantity; from null to 1 quantity', async () => {
  //   // Dummy JSX to render out cartItems[] from context
  //   const TestContextCartTotal = (): JSX.Element => {
  //     const { cartItems } = useShoppingCartContext();
  //     const items = cartItems.map(({ id, quantity }) => {
  //       return (
  //         <p key={id} data-testid="cartItem">
  //           id: {id} || quantity: {quantity}
  //         </p>
  //       );
  //     });
  //     return <div data-testid="cartItems">{items}</div>;
  //   };
  //   render(
  //     <ShoppingCartProvider>
  //       <TestContextCartTotal />
  //       <CartProductCard
  //         productId={1}
  //         productImg="productImage"
  //         productTitle="productTitle"
  //         productPrice={123}
  //         productQuantity={66}
  //       />
  //     </ShoppingCartProvider>
  //   );
  //   const testContextCartTotal = screen.getByTestId('cartItems');
  //   const button = screen.getByRole('button');
  //   expect(testContextCartTotal).toBeEmptyDOMElement();
  //   await userEvent.click(button);
  //   expect(testContextCartTotal).toContainElement(
  //     screen.getByTestId('cartItem')
  //   );
  //   expect(screen.getByTestId('cartItem')).toHaveTextContent(
  //     'id: 1 || quantity: 1'
  //   );
  // });
});
