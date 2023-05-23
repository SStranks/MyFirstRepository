import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import ProductImageGrid from './ProductImageGrid';

describe('Appearance', () => {
  test('Component render matches snapshot', () => {
    const tree = renderer
      .create(
        <ProductImageGrid
          productImagesGallery={{
            dummyProduct: {
              mobile: 'mobileImg',
              tablet: 'tabletImg',
              desktop: 'desktopImg',
            },
          }}
          productTitle="dummyProductTitle"
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Component base should be fully rendered', () => {
    const { container } = render(
      <ProductImageGrid
        productImagesGallery={{
          dummyProduct: {
            mobile: 'mobileImg',
            tablet: 'tabletImg',
            desktop: 'desktopImg',
          },
        }}
        productTitle="dummyProductTitle"
      />
    );

    const component = container.querySelector('div');
    const productImg = screen.getByRole('img', {
      name: 'dummyProductTitle being used',
    });

    expect(component).toBeInTheDocument();
    expect(productImg).toBeInTheDocument();
  });

  test('Appended classes should be added to component', () => {
    const { container } = render(
      <ProductImageGrid
        appendClass="additionalStyles"
        productImagesGallery={{
          dummyProduct: {
            mobile: 'mobileImg',
            tablet: 'tabletImg',
            desktop: 'desktopImg',
          },
        }}
        productTitle="dummyProductTitle"
      />
    );

    const component = container.querySelector('div');

    expect(component).toHaveClass('additionalStyles');
  });
});
