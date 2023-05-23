import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import ProductExampleShopList from './ProductExampleShopList';

describe('Appearance', () => {
  test('Component render matches snapshot', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <ProductExampleShopList />
        </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Component base should be fully rendered', () => {
    const { container } = render(<ProductExampleShopList />, {
      wrapper: BrowserRouter,
    });

    const component = container.querySelector('div');
    const productLinks = screen.getAllByRole('link');

    expect(component).toBeInTheDocument();
    expect(productLinks).toHaveLength(3);
  });

  test('Appended classes should be added to component', () => {
    const { container } = render(
      <ProductExampleShopList appendClass="additionalStyles" />,
      { wrapper: BrowserRouter }
    );

    const component = container.querySelector('div');

    expect(component).toHaveClass('additionalStyles');
  });
});
