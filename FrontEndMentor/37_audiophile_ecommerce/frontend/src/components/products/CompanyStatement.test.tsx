import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import CompanyStatement from './CompanyStatement';

describe('Appearance', () => {
  test('Component render matches snapshot', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <CompanyStatement />
        </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Component base should be fully rendered', () => {
    render(<CompanyStatement />, { wrapper: BrowserRouter });

    const component = screen.getByRole('article');
    const h2Text = screen.getByRole('heading', {
      name: /^Bringing you the best audio gear$/,
      level: 2,
    });
    const statementText = screen.getByText(
      /^Located at the heart of New York City/
    );
    const statementImg = screen.getByRole('img', {
      name: /^Furnishing our customers with the best gear$/,
    });

    expect(component).toBeInTheDocument();
    expect(h2Text).toBeInTheDocument();
    expect(statementText).toBeInTheDocument();
    expect(statementImg).toBeInTheDocument();
  });

  test('Appended classes should be added to component', () => {
    render(<CompanyStatement appendClass="additionalStyles" />, {
      wrapper: BrowserRouter,
    });

    const component = screen.getByRole('article');

    expect(component).toHaveClass('additionalStyles');
  });
});
