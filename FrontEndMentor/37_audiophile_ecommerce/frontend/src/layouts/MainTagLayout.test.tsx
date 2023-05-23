import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import MainTagLayout from './MainTagLayout';

describe('Appearance', () => {
  test('Component render matches snapshot', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <MainTagLayout />
        </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Component base should be fully rendered', () => {
    render(<MainTagLayout />, { wrapper: BrowserRouter });

    const component = screen.getByRole('main');

    expect(component).toBeInTheDocument();
  });

  test('Appended classes should be added to component', () => {
    render(<MainTagLayout appendClass="additionalStyles" />, {
      wrapper: BrowserRouter,
    });

    const component = screen.getByRole('main');

    expect(component).toHaveClass('additionalStyles');
  });
});
