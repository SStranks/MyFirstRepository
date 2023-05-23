import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import CheckoutSummaryProductCard from './CheckoutSummaryProductCard';

describe('Appearance', () => {
  test('Component render matches snapshot', () => {
    const tree = renderer
      .create(
        <CheckoutSummaryProductCard
          productImg="imgURL"
          productPrice={9.99}
          productQuantity={3}
          productTitle="dummyTitle"
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Component base should be fully rendered', () => {
    const { container } = render(
      <CheckoutSummaryProductCard
        productImg="imgURL"
        productPrice={9.99}
        productQuantity={3}
        productTitle="dummyTitle"
      />
    );

    const component = container.querySelector('div');
    const productImg = screen.getByRole('img');
    const productTitle = screen.getByText('dummyTitle');
    const productPrice = screen.getByText('$ 9.99');
    const productQuantity = screen.getByText(/^x3$/);

    expect(component).toBeInTheDocument();
    expect(productImg).toBeInTheDocument();
    expect(productImg).toHaveAttribute('src', 'imgURL');
    expect(productTitle).toBeInTheDocument();
    expect(productPrice).toBeInTheDocument();
    expect(productQuantity).toBeInTheDocument();
  });
});
