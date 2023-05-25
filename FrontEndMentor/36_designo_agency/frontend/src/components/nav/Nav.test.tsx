import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import { BrowserRouter, Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Nav from './Nav';

describe('Appearance', () => {
  test('Component render matches snapshot', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <Nav />
        </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Component base should be fully rendered', () => {
    render(<Nav />, { wrapper: BrowserRouter });

    const component = screen.getByRole('navigation');
    const logo = screen.getByRole('img', { name: 'Designo Site Home.' });
    const navLinks = screen.getAllByRole('link');

    expect(component).toBeInTheDocument();
    expect(logo).toBeInTheDocument();
    expect(navLinks.length).toEqual(4);
  });
});

describe('Functionality', () => {
  test('Navigation Links direct to the correct page', async () => {
    const history = createMemoryHistory({ initialEntries: ['/dummyRoute'] });
    history.push = jest.fn();
    render(
      <Router location={history.location} navigator={history}>
        <Nav />
      </Router>
    );

    const homeLink = screen.getByRole('link', { name: 'Designo Site Home.' });
    const aboutLink = screen.getByRole('link', { name: 'our company' });
    const locationsLink = screen.getByRole('link', { name: 'locations' });
    const contactLink = screen.getByRole('link', { name: 'contact' });

    await userEvent.click(homeLink);
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

    await userEvent.click(aboutLink);
    expect(history.push).toHaveBeenCalledTimes(2);
    expect(history.push).toHaveBeenCalledWith(
      {
        hash: '',
        pathname: '/about',
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

    await userEvent.click(locationsLink);
    expect(history.push).toHaveBeenCalledTimes(3);
    expect(history.push).toHaveBeenCalledWith(
      {
        hash: '',
        pathname: '/locations',
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

    await userEvent.click(contactLink);
    expect(history.push).toHaveBeenCalledTimes(4);
    expect(history.push).toHaveBeenCalledWith(
      {
        hash: '',
        pathname: '/contact',
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
