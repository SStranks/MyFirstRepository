import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import DefaultLayout from './DefaultLayout';

describe('Appearance', () => {
  test('Component render matches snapshot', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <DefaultLayout />
        </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Component base should be fully rendered', () => {
    const { container } = render(<DefaultLayout />, { wrapper: BrowserRouter });

    const component = container.firstChild;
    const primaryNav = screen.getByLabelText('primary');
    const footer = screen.getByTestId('skipto-footer');

    expect(component).toBeInTheDocument();
    expect(component).toHaveClass('container');
    expect(primaryNav).toBeInTheDocument();
    expect(footer).toBeInTheDocument();
  });
});
