import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import { BrowserRouter, Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import ProductExampleShopCard from './ProductExampleShopCard';

describe('Appearance', () => {
  test('Component render matches snapshot', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <ProductExampleShopCard
            productName="dummyProductName"
            productImg=""
            productShopURL=""
          />
        </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Component base should be fully rendered', () => {
    render(
      <ProductExampleShopCard
        productName="dummyProductName"
        productImg=""
        productShopURL=""
      />,
      { wrapper: BrowserRouter }
    );

    const component = screen.getByRole('link');
    const cardContent = screen.getByLabelText('see all dummyProductName shop');
    const cardImgs = screen.getAllByRole('img');
    const productName = screen.getByText(/^dummyProductName$/);
    const shopText = screen.getByText(/^shop$/);

    expect(component).toBeInTheDocument();
    expect(cardContent).toBeInTheDocument();
    expect(cardImgs).toHaveLength(2);
    expect(productName).toBeInTheDocument();
    expect(shopText).toBeInTheDocument();
  });
});

describe('Functionality', () => {
  test('Clicking link should navigate to productShopURL', async () => {
    const history = createMemoryHistory({ initialEntries: ['/dummyRoute'] });
    history.push = jest.fn();
    render(
      <Router location={history.location} navigator={history}>
        <ProductExampleShopCard
          productName=""
          productImg=""
          productShopURL="dummyURL"
        />
      </Router>
    );

    const component = screen.getByRole('link');

    await userEvent.click(component);
    expect(history.push).toHaveBeenCalledTimes(1);
    expect(history.push).toHaveBeenCalledWith(
      {
        hash: '',
        pathname: '/dummyURL',
        search: '',
      },
      undefined,
      {
        preventScrollReset: undefined,
        relative: undefined,
        replace: false,
        state: undefined,
      }
    );
  });
});
