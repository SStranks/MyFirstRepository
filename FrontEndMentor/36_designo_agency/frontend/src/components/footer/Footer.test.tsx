import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import { BrowserRouter, MemoryRouter, Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Footer from './Footer';

describe('Appearance', () => {
  test('Component render matches snapshot', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <Footer />
        </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Component base should be fully rendered', () => {
    render(<Footer />, { wrapper: BrowserRouter });

    const component = screen.getByRole('contentinfo');

    const cardHeader = screen.getByText(/let's talk about your project/i);
    const cardText = screen.getByText(/ready to take it to the next level\?/i);
    const cardBtn = screen.getByRole('button', { name: 'get in touch' });

    const logo = screen.getByRole('img', { name: 'Designo Site Home.' });
    const navLinks = screen.getAllByRole('link');
    const mediaIconFB = screen.getByAltText('Designo facebook media page.');
    const mediaIconYT = screen.getByAltText('Designo youtube media page.');
    const mediaIconTW = screen.getByAltText('Designo twitter media page.');
    const mediaIconPI = screen.getByAltText('Designo pinterest media page.');
    const mediaIconIN = screen.getByAltText('Designo instagram media page.');

    expect(component).toBeInTheDocument();
    expect(cardHeader).toBeInTheDocument();
    expect(cardText).toBeInTheDocument();
    expect(cardBtn).toBeInTheDocument();
    expect(logo).toBeInTheDocument();
    expect(navLinks.length).toEqual(4);
    expect(mediaIconFB).toBeInTheDocument();
    expect(mediaIconYT).toBeInTheDocument();
    expect(mediaIconTW).toBeInTheDocument();
    expect(mediaIconPI).toBeInTheDocument();
    expect(mediaIconIN).toBeInTheDocument();
  });

  test('If route is `/contact`, do not render card', () => {
    render(
      <MemoryRouter initialEntries={['/contact']}>
        <Footer />
      </MemoryRouter>
    );

    const cardHeader = screen.queryByText(/let's talk about your project/i);

    expect(cardHeader).not.toBeInTheDocument();
  });
});

describe('Functionality', () => {
  test('Navigation Links direct to the correct page', async () => {
    const history = createMemoryHistory({ initialEntries: ['/dummyRoute'] });
    history.push = jest.fn();
    render(
      <Router location={history.location} navigator={history}>
        <Footer />
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
