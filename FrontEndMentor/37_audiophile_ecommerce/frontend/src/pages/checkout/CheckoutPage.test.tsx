import { ShoppingCartProvider } from '#Context/ShoppingCartContext';
import { render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import { BrowserRouter, Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import CheckoutPage from './CheckoutPage';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

beforeEach(() => {
  mockedUsedNavigate.mockReset();
});

describe('Appearance', () => {
  test('Component render matches snapshot', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <ShoppingCartProvider>
            <CheckoutPage />
          </ShoppingCartProvider>
        </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Component base should be fully rendered', () => {
    render(
      <ShoppingCartProvider>
        <CheckoutPage />
      </ShoppingCartProvider>,
      { wrapper: BrowserRouter }
    );

    const component = screen.getByRole('main');
    const backBtn = within(component).getByRole('button', { name: 'go back' });
    const checkoutForm = within(component).getByRole('form');

    expect(component).toBeInTheDocument();
    expect(backBtn).toBeInTheDocument();
    expect(checkoutForm).toBeInTheDocument();
  });
});

describe('Functionality', () => {
  test('Clicking `go back` button navigates backwards in history by -1', async () => {
    const history = createMemoryHistory();
    render(
      <Router location={history.location} navigator={history}>
        <ShoppingCartProvider>
          <CheckoutPage />
        </ShoppingCartProvider>
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
