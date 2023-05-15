/* eslint-disable jest/no-commented-out-tests */
// import DefaultLayout from '#Layouts/DefaultLayout';
// import CheckoutPage from '#Pages/checkout/CheckoutPage';
// import EarphonesPage from '#Pages/earphones/EarphonesPage';
// import HeadphonesPage from '#Pages/headphones/HeadphonesPage';
// import Home from '#Pages/home/HomePage';
// import ProductDetailsPage from '#Pages/product-details/ProductDetailsPage';
// import SpeakersPage from '#Pages/speakers/SpeakersPage';
import App from '#Components/App';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import SkipTo from './SkipTo';

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
  describe('Clicking component should focus on `main content` on all route pages', () => {
    test('Home Page', async () => {
      render(
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>
      );

      const skipToMainContentLink = screen.getByRole('link', {
        name: /Skip to Main Content/,
      });
      const mainContent = document.querySelector('#skipto-main');

      expect(skipToMainContentLink).toBeInTheDocument();
      expect(mainContent).toBeInTheDocument();
      await userEvent.click(skipToMainContentLink);
      expect(mainContent).toHaveFocus();
    });
    // test('Speakers Page', () => {});
    // test('Headphones Page', () => {});
    // test('Earphones Page', () => {});
    // test('Product Details Page', () => {});
    // test('Checkout Page', () => {});
  });
  // test('', () => {
  //   [
  //     <Home key="1" />,
  //     <SpeakersPage key="2" />,
  //     <HeadphonesPage key="3" />,
  //     <EarphonesPage key="4" />,
  //     <ProductDetailsPage key="5" />,
  //     <CheckoutPage key="6" />,
  //     // eslint-disable-next-line unicorn/no-array-for-each
  //   ].forEach((pageComponent) => {
  //     // Test each individual page
  //     test('page scenario', async () => {
  //       render(<DefaultLayout>{pageComponent}</DefaultLayout>);

  //       const skipToMainContentLink = screen.getByRole('link', {
  //         name: /Skip to #skipto-main/,
  //       });
  //       const mainContent = screen.getByRole('main');

  //       expect(skipToMainContentLink).toBeInTheDocument();
  //       expect(mainContent).toBeInTheDocument();
  //       await userEvent.click(skipToMainContentLink);
  //       expect(mainContent).toHaveFocus();
  //     });
  //   });
  // });

  // eslint-disable-next-line jest/no-commented-out-tests
  // test('Clicking component should focus on `footer content` on all route pages', () => {
  //   render(<SkipTo contentName="Dummy name" contentId="Dummy id" />);

  //   const component = screen.getByRole('link');

  //   expect(component).toBeInTheDocument();
  // });
});
