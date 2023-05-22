import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import ProductDetailLayout from './ProductDetailLayout';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

beforeEach(() => {
  mockedUsedNavigate.mockReset();
});

describe('Appearance', () => {
  test('Component base should be fully rendered', () => {
    const history = createMemoryHistory();
    const state = { productCategory: 'speakers', productId: 5 };
    history.push('/', state);
    render(
      <Router location={history.location} navigator={history}>
        <ProductDetailLayout />
      </Router>
    );

    const component = screen.getByTestId('skipto-main');
    const backBtn = screen.getByRole('button', { name: 'go back' });
    const alternativeProductsText = screen.getByText(/^you may also like$/);
    const productDetailCard = screen.getByRole('heading', {
      name: 'in the box',
      level: 3,
    });
    const productImageGrid = screen.getAllByRole('img', {
      name: /^.+ being used$/,
    });

    expect(component).toBeInTheDocument();
    expect(backBtn).toBeInTheDocument();
    expect(alternativeProductsText).toBeInTheDocument();
    expect(productDetailCard).toBeInTheDocument();
    expect(productImageGrid.length).toEqual(3);
  });

  test('If no product is found matching category and Id; detailCard and imageGrid should not render', () => {
    const history = createMemoryHistory();
    const state = { productCategory: 'speakers', productId: -1 };
    history.push('/', state);
    render(
      <Router location={history.location} navigator={history}>
        <ProductDetailLayout />
      </Router>
    );

    const productDetailCard = screen.queryByRole('heading', {
      name: 'in the box',
    });
    const productImageGrid = screen.queryAllByRole('img', {
      name: /^.+ being used$/,
    });

    expect(productDetailCard).not.toBeInTheDocument();
    expect(productImageGrid.length).toEqual(0);
  });
});

describe('Functionality', () => {
  test('Clicking `go back` button navigates backwards in history by -1', async () => {
    const history = createMemoryHistory();
    const state = { productCategory: 'speakers', productId: 5 };
    history.push('/', state);
    render(
      <Router location={history.location} navigator={history}>
        <ProductDetailLayout />
      </Router>
    );

    const backBtn = screen.getByRole('button', { name: 'go back' });

    await userEvent.click(backBtn);
    await waitFor(() => {
      expect(mockedUsedNavigate).toHaveBeenCalledTimes(1);
      expect(mockedUsedNavigate).toHaveBeenCalledWith(-1);
    });
  });
});
