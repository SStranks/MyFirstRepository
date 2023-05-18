import { ShoppingCartProvider } from '#Context/ShoppingCartContext';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import { BrowserRouter, Router } from 'react-router-dom';
import Nav from './Nav';

describe('Appearance', () => {
  test('Component base should be fully rendered', () => {
    render(<Nav />, { wrapper: BrowserRouter });

    const component = screen.getByRole('navigation');
    const logoLink = screen.getByRole('link', { name: 'Audiophile Home' });
    const homeLink = screen.getByRole('link', { name: /^home$/i });
    const headphonesLink = screen.getByRole('link', { name: /^headphones$/i });
    const speakersLink = screen.getByRole('link', { name: /^speakers$/i });
    const earphonesLink = screen.getByRole('link', { name: /^earphones$/i });
    const cartBtn = screen.getByRole('button', { name: 'Shopping Cart' });
    const menuBtn = screen.getByRole('button', {
      name: 'Menu Product Categories',
    });

    expect(component).toBeInTheDocument();
    expect(logoLink).toBeInTheDocument();
    expect(homeLink).toBeInTheDocument();
    expect(headphonesLink).toBeInTheDocument();
    expect(speakersLink).toBeInTheDocument();
    expect(earphonesLink).toBeInTheDocument();
    expect(cartBtn).toBeInTheDocument();
    expect(menuBtn).toBeInTheDocument();
  });

  test('Appended classes should be added to component', () => {
    render(<Nav appendClass="additionalStyles" />, { wrapper: BrowserRouter });

    const component = screen.getByRole('navigation');

    expect(component).toHaveClass('additionalStyles');
  });
});

describe('Functionality', () => {
  test('Navigation links direct/render correct page', async () => {
    const history = createMemoryHistory({ initialEntries: ['/dummyRoute'] });
    history.push = jest.fn();
    render(
      <Router location={history.location} navigator={history}>
        <Nav />
      </Router>
    );

    const logoLink = screen.getByRole('link', { name: 'Audiophile Home' });
    const HomeLink = screen.getByRole('link', { name: /^home$/i });
    const HeadphoneLink = screen.getByRole('link', { name: /^headphones$/i });
    const SpeakersLink = screen.getByRole('link', { name: /^speakers$/i });
    const EarphonesLink = screen.getByRole('link', { name: /^earphones$/i });

    await userEvent.click(logoLink);
    expect(history.push).toHaveBeenCalledTimes(1);
    expect(history.push).toHaveBeenCalledWith(
      {
        hash: '',
        pathname: '/',
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
    await userEvent.click(HomeLink);
    expect(history.push).toHaveBeenCalledTimes(2);
    expect(history.push).toHaveBeenCalledWith(
      {
        hash: '',
        pathname: '/',
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
    await userEvent.click(HeadphoneLink);
    expect(history.push).toHaveBeenCalledTimes(3);
    expect(history.push).toHaveBeenCalledWith(
      {
        hash: '',
        pathname: '/headphones',
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
    await userEvent.click(SpeakersLink);
    expect(history.push).toHaveBeenCalledTimes(4);
    expect(history.push).toHaveBeenCalledWith(
      {
        hash: '',
        pathname: '/speakers',
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
    await userEvent.click(EarphonesLink);
    expect(history.push).toHaveBeenCalledTimes(5);
    expect(history.push).toHaveBeenCalledWith(
      {
        hash: '',
        pathname: '/earphones',
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

  test('Menu button accepts click and opens Category Modal', async () => {
    render(<Nav />, { wrapper: BrowserRouter });

    const menuBtn = screen.getByRole('button', {
      name: 'Menu Product Categories',
    });

    expect(
      screen.queryByLabelText(/see all \w+ shop/i)
    ).not.toBeInTheDocument();
    await userEvent.click(menuBtn);
    expect(screen.getAllByLabelText(/^see all \w+ shop$/i)).toHaveLength(3);
  });

  test('Cart button accepts click and opens Cart Modal', async () => {
    render(
      <ShoppingCartProvider>
        <Nav />
      </ShoppingCartProvider>,
      { wrapper: BrowserRouter }
    );

    const cartBtn = screen.getByRole('button', {
      name: 'Shopping Cart',
    });

    expect(
      screen.queryByRole('button', { name: /checkout/i })
    ).not.toBeInTheDocument();
    await userEvent.click(cartBtn);
    expect(
      screen.getByRole('button', { name: /checkout/i })
    ).toBeInTheDocument();
  });
});
