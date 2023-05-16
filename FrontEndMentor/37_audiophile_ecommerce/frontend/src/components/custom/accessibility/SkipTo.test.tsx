import App from '#Components/App';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import SkipTo from './SkipTo';

const ROUTES = {
  home: '/',
  speakers: '/speakers',
  headphones: '/headphones',
  earphones: '/earphones',
  productDetail: '/speakers/1',
  checkout: '/checkout',
};

describe('Appearance', () => {
  test('Component base should be fully rendered', () => {
    render(<SkipTo contentName="Dummy name" contentId="Dummy id" />);

    const component = screen.getByRole('link');

    expect(component).toBeInTheDocument();
    expect(component).toHaveTextContent(/skip to dummy name/i);
    expect(component).toHaveAttribute('href', 'Dummy id');
  });
});

describe('Functionality', () => {
  // NOTE:  Test ID manually added to components on lazy loaded pages; require 'await' to ensure page is loaded.
  // NOTE:  Extra timeout added on findBy Query on Headphones page; accounts for deliberate fallback animation.
  // NOTE:  State passed to route on ProductDetail page; using category 'speakers' and productId '1'.
  describe('Clicking component should focus on `main content` on all route pages', () => {
    test('Home Page', async () => {
      render(
        <MemoryRouter initialEntries={[`${ROUTES.home}`]}>
          <App />
        </MemoryRouter>
      );

      const skipToMainContentLink = screen.getByRole('link', {
        name: /Skip to Main Content/,
      });

      const mainContent = await screen.findByTestId('skipto-main');

      expect(skipToMainContentLink).toBeInTheDocument();
      expect(mainContent).toBeInTheDocument();
      await userEvent.click(skipToMainContentLink);
      expect(mainContent).toHaveFocus();
    });

    test('Speakers Page', async () => {
      render(
        <MemoryRouter initialEntries={[`${ROUTES.speakers}`]}>
          <App />
        </MemoryRouter>
      );

      const skipToMainContentLink = screen.getByRole('link', {
        name: /Skip to Main Content/,
      });

      const mainContent = await screen.findByTestId('skipto-main');

      expect(skipToMainContentLink).toBeInTheDocument();
      expect(mainContent).toBeInTheDocument();
      await userEvent.click(skipToMainContentLink);
      expect(mainContent).toHaveFocus();
    });

    test('Headphones Page', async () => {
      render(
        <MemoryRouter initialEntries={[`${ROUTES.headphones}`]}>
          <App />
        </MemoryRouter>
      );

      const skipToMainContentLink = screen.getByRole('link', {
        name: /Skip to Main Content/,
      });

      const mainContent = await screen.findByTestId('skipto-main', undefined, {
        timeout: 3000,
      });

      expect(skipToMainContentLink).toBeInTheDocument();
      expect(mainContent).toBeInTheDocument();
      await userEvent.click(skipToMainContentLink);
      expect(mainContent).toHaveFocus();
    });

    test('Earphones Page', async () => {
      render(
        <MemoryRouter initialEntries={[`${ROUTES.earphones}`]}>
          <App />
        </MemoryRouter>
      );

      const skipToMainContentLink = screen.getByRole('link', {
        name: /Skip to Main Content/,
      });

      const mainContent = await screen.findByTestId('skipto-main');

      expect(skipToMainContentLink).toBeInTheDocument();
      expect(mainContent).toBeInTheDocument();
      await userEvent.click(skipToMainContentLink);
      expect(mainContent).toHaveFocus();
    });

    test('Product Details Page', async () => {
      render(
        <MemoryRouter
          initialEntries={[
            {
              pathname: `${ROUTES.productDetail}`,
              state: { productCategory: 'speakers', productId: '1' },
            },
          ]}>
          <App />
        </MemoryRouter>
      );

      const skipToMainContentLink = screen.getByRole('link', {
        name: /Skip to Main Content/,
      });

      const mainContent = await screen.findByTestId('skipto-main');

      expect(skipToMainContentLink).toBeInTheDocument();
      expect(mainContent).toBeInTheDocument();
      await userEvent.click(skipToMainContentLink);
      expect(mainContent).toHaveFocus();
    });

    test('Checkout Page', async () => {
      render(
        <MemoryRouter initialEntries={[`${ROUTES.checkout}`]}>
          <App />
        </MemoryRouter>
      );

      const skipToMainContentLink = screen.getByRole('link', {
        name: /Skip to Main Content/,
      });

      const mainContent = await screen.findByTestId('skipto-main');

      expect(skipToMainContentLink).toBeInTheDocument();
      expect(mainContent).toBeInTheDocument();
      await userEvent.click(skipToMainContentLink);
      expect(mainContent).toHaveFocus();
    });
  });

  describe('Clicking component should focus on `footer content` on all route pages', () => {
    test('Home Page', async () => {
      render(
        <MemoryRouter initialEntries={[`${ROUTES.home}`]}>
          <App />
        </MemoryRouter>
      );

      const skipToMainContentLink = screen.getByRole('link', {
        name: /Skip to Footer Content/,
      });

      const mainContent = await screen.findByTestId('skipto-footer');

      expect(skipToMainContentLink).toBeInTheDocument();
      expect(mainContent).toBeInTheDocument();
      await userEvent.click(skipToMainContentLink);
      expect(mainContent).toHaveFocus();
    });

    test('Speakers Page', async () => {
      render(
        <MemoryRouter initialEntries={[`${ROUTES.speakers}`]}>
          <App />
        </MemoryRouter>
      );

      const skipToMainContentLink = screen.getByRole('link', {
        name: /Skip to Footer Content/,
      });

      const mainContent = await screen.findByTestId('skipto-footer');

      expect(skipToMainContentLink).toBeInTheDocument();
      expect(mainContent).toBeInTheDocument();
      await userEvent.click(skipToMainContentLink);
      expect(mainContent).toHaveFocus();
    });

    test('Headphones Page', async () => {
      render(
        <MemoryRouter initialEntries={[`${ROUTES.headphones}`]}>
          <App />
        </MemoryRouter>
      );

      const skipToMainContentLink = screen.getByRole('link', {
        name: /Skip to Footer Content/,
      });

      const mainContent = await screen.findByTestId(
        'skipto-footer',
        undefined,
        {
          timeout: 3000,
        }
      );

      expect(skipToMainContentLink).toBeInTheDocument();
      expect(mainContent).toBeInTheDocument();
      await userEvent.click(skipToMainContentLink);
      expect(mainContent).toHaveFocus();
    });

    test('Earphones Page', async () => {
      render(
        <MemoryRouter initialEntries={[`${ROUTES.earphones}`]}>
          <App />
        </MemoryRouter>
      );

      const skipToMainContentLink = screen.getByRole('link', {
        name: /Skip to Footer Content/,
      });

      const mainContent = await screen.findByTestId('skipto-footer');

      expect(skipToMainContentLink).toBeInTheDocument();
      expect(mainContent).toBeInTheDocument();
      await userEvent.click(skipToMainContentLink);
      expect(mainContent).toHaveFocus();
    });

    test('Product Details Page', async () => {
      render(
        <MemoryRouter
          initialEntries={[
            {
              pathname: `${ROUTES.productDetail}`,
              state: { productCategory: 'speakers', productId: '1' },
            },
          ]}>
          <App />
        </MemoryRouter>
      );

      const skipToMainContentLink = screen.getByRole('link', {
        name: /Skip to Footer Content/,
      });

      const mainContent = await screen.findByTestId('skipto-footer');

      expect(skipToMainContentLink).toBeInTheDocument();
      expect(mainContent).toBeInTheDocument();
      await userEvent.click(skipToMainContentLink);
      expect(mainContent).toHaveFocus();
    });

    test('Checkout Page', async () => {
      render(
        <MemoryRouter initialEntries={[`${ROUTES.checkout}`]}>
          <App />
        </MemoryRouter>
      );

      const skipToMainContentLink = screen.getByRole('link', {
        name: /Skip to Footer Content/,
      });

      const mainContent = await screen.findByTestId('skipto-footer');

      expect(skipToMainContentLink).toBeInTheDocument();
      expect(mainContent).toBeInTheDocument();
      await userEvent.click(skipToMainContentLink);
      expect(mainContent).toHaveFocus();
    });
  });
});
