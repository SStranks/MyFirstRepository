import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ProductDetailCard from './ProductDetailCard';

describe('Appearance', () => {
  // test('Component base should be fully rendered', () => {});

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
