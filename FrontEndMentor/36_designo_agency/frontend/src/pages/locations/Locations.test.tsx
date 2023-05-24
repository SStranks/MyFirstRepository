import { render, screen, within } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Locations from './Locations';

describe('Appearance', () => {
  test('Component render matches snapshot', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <Locations />
        </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Component base should be fully rendered', () => {
    const { container } = render(<Locations />, { wrapper: BrowserRouter });

    const component = container.firstChild;
    const nav = screen.getByRole('navigation');
    const footer = screen.getByRole('contentinfo');
    const grid = document.querySelector('div.grid');

    expect(component).toBeInTheDocument();
    expect(nav).toBeInTheDocument();
    expect(footer).toBeInTheDocument();
    expect(grid).toBeInTheDocument();
    expect(grid?.children).toHaveLength(3);
    expect(within(grid as HTMLElement).getAllByRole('img')).toHaveLength(3);
  });
});
