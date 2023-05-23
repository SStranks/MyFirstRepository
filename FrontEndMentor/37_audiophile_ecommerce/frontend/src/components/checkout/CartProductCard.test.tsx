import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import CartProductCard from './CartProductCard';

const mockQuantityToggleButton = jest.fn();
jest.mock('#Components/custom/buttons/QuantityToggleButton', () => ({
  __esModule: true,
  default: (props: unknown) => {
    mockQuantityToggleButton(props);
    return <div data-testid="quantity-toggle-button" />;
  },
}));

describe('Appearance', () => {
  test('Component render matches snapshot', () => {
    const tree = renderer
      .create(
        <CartProductCard
          productId={1}
          productImg="productImage"
          productTitle="productTitle"
          productPrice={123}
          productQuantity={66}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

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
