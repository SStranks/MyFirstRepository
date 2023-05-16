import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import { BrowserRouter, Router } from 'react-router-dom';
import Footer from './Footer';

describe('Appearance', () => {
  test('Component base should be fully rendered', () => {
    render(<Footer />, { wrapper: BrowserRouter });

    const component = screen.getByRole('contentinfo');
    const nav = screen.getByRole('navigation');
    const navLinks = within(nav).getAllByRole('link');
    const navLogo = screen.getByAltText(/^audiophile logo$/i);
    const socialMediaLinks = screen.getAllByAltText(/media page$/i);
    const copyright = screen.getByText(/Copyright 2021. All Rights Reserved/, {
      exact: true,
    });

    expect(component).toBeInTheDocument();
    expect(nav).toBeInTheDocument();
    expect(navLogo).toBeInTheDocument();
    expect(navLinks).toHaveLength(4);
    expect(navLogo).toBeInTheDocument();
    expect(socialMediaLinks).toHaveLength(3);
    expect(copyright).toBeInTheDocument();
  });
});

describe('Functionality', () => {
  test('Navigation links direct/render correct page', async () => {
    const history = createMemoryHistory({ initialEntries: ['/dummyRoute'] });
    history.push = jest.fn();
    render(
      <Router location={history.location} navigator={history}>
        <Footer />
      </Router>
    );

    const HomeLink = screen.getByRole('link', { name: /^home$/i });

    await userEvent.click(HomeLink);
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
  });
});
