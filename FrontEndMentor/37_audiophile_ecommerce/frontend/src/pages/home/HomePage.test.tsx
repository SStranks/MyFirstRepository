import HomePage from '#Pages/home/HomePage';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import { BrowserRouter, Router } from 'react-router-dom';
import renderer from 'react-test-renderer';

describe('Appearance', () => {
  test('Component render matches snapshot', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <HomePage />
        </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Component base should be fully rendered', () => {
    const { container } = render(<HomePage />, { wrapper: BrowserRouter });

    // HERO SECTION
    const component = container.firstChild;
    const header = screen.getByRole('banner');
    const main = screen.getByRole('main');
    const heroImg = within(header).getByRole('img', {
      name: /^XX99 mark 2 headphones$/,
    });
    const H1Text = within(header).getByRole('heading', {
      name: /^xx99 mark ii headphones$/i,
      level: 1,
    });
    const heroLink = within(header).getByRole('link', {
      name: /^See product XX99 mark 2 headphones\.$/,
    });

    // GRID SECTION
    const grid = main.querySelector('div.grid');
    const zx9GridContent = main.querySelector('div.grid > div.zx9');
    const zx7GridContent = main.querySelector('div.grid > div.zx7');
    const yx1GridContent = main.querySelector('div.grid > div.yx1');

    expect(component).toBeInTheDocument();
    expect(component).toHaveClass('container');
    expect(header).toBeInTheDocument();
    expect(main).toBeInTheDocument();
    expect(heroImg).toBeInTheDocument();
    expect(H1Text).toBeInTheDocument();
    expect(heroLink).toBeInTheDocument();

    expect(grid).toBeInTheDocument();
    // --- ZX9 Grid Content ---
    expect(
      within(zx9GridContent as HTMLElement).getByRole('img', {
        name: /product zx9 speaker/i,
      })
    ).toBeInTheDocument();
    expect(
      within(zx9GridContent as HTMLElement).getByText(/^zx9 speaker$/i)
    ).toBeInTheDocument();
    expect(
      within(zx9GridContent as HTMLElement).getByRole('link', {
        name: /^see product zx9 speaker$/i,
      })
    ).toBeInTheDocument();
    // --- ZX7 Grid Content ---
    expect(
      within(zx7GridContent as HTMLElement).getByRole('img', {
        name: /product zx7 speaker/i,
      })
    ).toBeInTheDocument();
    expect(
      within(zx7GridContent as HTMLElement).getByText(/^zx7 speaker$/i)
    ).toBeInTheDocument();
    expect(
      within(zx7GridContent as HTMLElement).getByRole('link', {
        name: /^see product zx7 speaker$/i,
      })
    ).toBeInTheDocument();
    // --- YX1 Grid Content ---
    expect(
      within(grid as HTMLElement).getByRole('img', {
        name: /product yx1 earphones/i,
      })
    ).toBeInTheDocument();
    expect(
      within(yx1GridContent as HTMLElement).getByText(/^yx1 earphones$/i)
    ).toBeInTheDocument();
    expect(
      within(yx1GridContent as HTMLElement).getByRole('link', {
        name: /^see product yx1 earphones$/i,
      })
    ).toBeInTheDocument();
  });
});

describe('Functionality', () => {
  test('Navigation links direct/render correct page', async () => {
    const history = createMemoryHistory({ initialEntries: ['/'] });
    history.push = jest.fn();
    render(
      <Router location={history.location} navigator={history}>
        <HomePage />
      </Router>
    );

    const xx99ProductDetailLink = screen.getByRole('link', {
      name: /^See product XX99 mark 2 headphones\.$/,
    });
    const zx9ProductDetailLink = screen.getByRole('link', {
      name: /^See product ZX9 speaker$/,
    });
    const zx7ProductDetailLink = screen.getByRole('link', {
      name: /^See product ZX7 speaker$/,
    });
    const yx1ProductDetailLink = screen.getByRole('link', {
      name: /^See product YX1 earphones$/,
    });

    await userEvent.click(xx99ProductDetailLink);
    expect(history.push).toHaveBeenCalledTimes(1);
    expect(history.push).toHaveBeenCalledWith(
      {
        hash: '',
        pathname: '/headphones/4',
        search: '',
      },
      { productCategory: 'headphones', productId: 4 },
      {
        preventScrollReset: undefined,
        relative: undefined,
        replace: false,
        state: { productCategory: 'headphones', productId: 4 },
      }
    );
    await userEvent.click(zx9ProductDetailLink);
    expect(history.push).toHaveBeenCalledTimes(2);
    expect(history.push).toHaveBeenCalledWith(
      {
        hash: '',
        pathname: '/speakers/6',
        search: '',
      },
      { productCategory: 'speakers', productId: 6 },
      {
        preventScrollReset: undefined,
        relative: undefined,
        replace: false,
        state: { productCategory: 'speakers', productId: 6 },
      }
    );
    await userEvent.click(zx7ProductDetailLink);
    expect(history.push).toHaveBeenCalledTimes(3);
    expect(history.push).toHaveBeenCalledWith(
      {
        hash: '',
        pathname: '/speakers/5',
        search: '',
      },
      { productCategory: 'speakers', productId: 5 },
      {
        preventScrollReset: undefined,
        relative: undefined,
        replace: false,
        state: { productCategory: 'speakers', productId: 5 },
      }
    );
    await userEvent.click(yx1ProductDetailLink);
    expect(history.push).toHaveBeenCalledTimes(4);
    expect(history.push).toHaveBeenCalledWith(
      {
        hash: '',
        pathname: '/earphones/1',
        search: '',
      },
      { productCategory: 'earphones', productId: 1 },
      {
        preventScrollReset: undefined,
        relative: undefined,
        replace: false,
        state: { productCategory: 'earphones', productId: 1 },
      }
    );
  });
});
