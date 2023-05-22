import { render, screen, within } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ProductDetailCard from './ProductDetailCard';

describe('Appearance', () => {
  test('Component base should be fully rendered', () => {
    const { container } = render(
      <ProductDetailCard
        appendClass="additionalStyles"
        productId={0}
        newProduct
        productImages={{
          desktop: '',
          tablet: '',
          mobile: '',
        }}
        productTitle="dummyProductTitle"
        productDescription="dummyProductDescription"
        productPrice={99.01}
        productFeatures="dummyProductFeatures"
        productItems={[{ item: 'dummyItem', quantity: 1 }]}
      />,
      {
        wrapper: BrowserRouter,
      }
    );

    const component = container.querySelector('div');
    const productImg = screen.getByRole('img', { name: 'dummyProductTitle' });
    const newProductText = screen.getByText(/^new product$/);
    const productTitleH2 = screen.getByRole('heading', {
      name: /^dummyProductTitle$/,
      level: 2,
    });
    const productDescription = screen.getByText(/^dummyProductDescription$/);
    const productPrice = screen.getByText(/^\$ 99\.01$/);
    const addToCartBtn = screen.getByRole('button', { name: 'add to cart' });
    const productFeaturesH3 = screen.getByRole('heading', {
      name: 'features',
      level: 3,
    });
    const productFeatures = screen.getByText('dummyProductFeatures');
    const inTheBoxH3 = screen.getByRole('heading', {
      name: 'in the box',
      level: 3,
    });
    const productInTheBoxUL = screen.getByRole('list');
    const { getAllByRole } = within(productInTheBoxUL);
    const listItems = getAllByRole('listitem');

    expect(component).toBeInTheDocument();
    expect(component).toHaveClass('container');
    expect(productImg).toBeInTheDocument();
    expect(newProductText).toBeInTheDocument();
    expect(productTitleH2).toBeInTheDocument();
    expect(productDescription).toBeInTheDocument();
    expect(productPrice).toBeInTheDocument();
    expect(addToCartBtn).toBeInTheDocument();
    expect(productFeaturesH3).toBeInTheDocument();
    expect(productFeatures).toBeInTheDocument();
    expect(inTheBoxH3).toBeInTheDocument();
    expect(productInTheBoxUL).toBeInTheDocument();
    expect(listItems.length).toBe(1);
    expect(listItems[0]).toHaveTextContent(/^1x dummyItem$/);
  });

  test('If product is not new, do not render `new product` text', () => {
    render(
      <ProductDetailCard
        appendClass="additionalStyles"
        productId={0}
        newProduct={false}
        productImages={{
          desktop: '',
          tablet: '',
          mobile: '',
        }}
        productTitle="dummyProductTitle"
        productDescription=""
        productPrice={0}
        productFeatures=""
        productItems={[]}
      />,
      {
        wrapper: BrowserRouter,
      }
    );

    const newProductText = screen.queryByText(/^new product$/);

    expect(newProductText).not.toBeInTheDocument();
  });

  test('Appended classes should be added to component', () => {
    const { container } = render(
      <ProductDetailCard
        appendClass="additionalStyles"
        productId={0}
        newProduct={false}
        productImages={{
          desktop: '',
          tablet: '',
          mobile: '',
        }}
        productTitle=""
        productDescription=""
        productPrice={0}
        productFeatures=""
        productItems={[]}
      />,
      {
        wrapper: BrowserRouter,
      }
    );

    const component = container.querySelector('div');

    expect(component).toHaveClass('additionalStyles');
  });
});
