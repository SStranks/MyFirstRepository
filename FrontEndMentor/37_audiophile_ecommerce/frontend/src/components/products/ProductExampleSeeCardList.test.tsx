import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ProductExampleSeeCardList from './ProductExampleSeeCardList';

describe('Appearance', () => {
  test('Component base should be fully rendered', () => {
    const { container } = render(
      <ProductExampleSeeCardList currentProductId={1} />,
      { wrapper: BrowserRouter }
    );

    const component = container.querySelector('div');
    const productExampleCard = screen.getAllByLabelText(/^see product/);

    expect(component).toBeInTheDocument();
    expect(productExampleCard.length).toBeGreaterThanOrEqual(1);
  });

  test('If productId is invalid render no product example cards', () => {
    const { container } = render(
      <ProductExampleSeeCardList currentProductId={-1} />,
      { wrapper: BrowserRouter }
    );

    const component = container.querySelector('div');
    const productExampleCard = screen.queryAllByLabelText(/^see product/);

    expect(component).toBeInTheDocument();
    expect(productExampleCard.length).toEqual(0);
  });

  test('Appended classes should be added to component', () => {
    const { container } = render(
      <ProductExampleSeeCardList
        appendClass="additionalStyles"
        currentProductId={0}
      />
    );

    const component = container.querySelector('div');

    expect(component).toHaveClass('additionalStyles');
  });
});
