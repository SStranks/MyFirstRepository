import { render, screen, within } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import About from './About';

describe('Appearance', () => {
  test('Component render matches snapshot', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <About />
        </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Component base should be fully rendered', () => {
    const { container } = render(<About />, { wrapper: BrowserRouter });

    const component = container.firstChild;
    const nav = screen.getByRole('navigation');
    const header = screen.getByRole('banner');
    const section1 = screen.getByRole('region', {
      name: /world-class talent/i,
    });
    const section2 = screen.getByRole('region', { name: /the real deal/i });

    const footer = screen.getByRole('contentinfo');
    const h1Text = screen.getByRole('heading', {
      name: /about us/i,
      level: 1,
    });
    const headerText = screen.getByText(/founded in 2010/i);

    const locations = document.querySelector('div.locations');

    expect(component).toBeInTheDocument();
    expect(nav).toBeInTheDocument();
    expect(header).toBeInTheDocument();
    expect(header).toContainElement(h1Text);
    expect(header).toContainElement(headerText);
    expect(within(header).getByRole('img')).toBeInTheDocument();

    expect(section1).toBeInTheDocument();
    expect(
      within(section1).getByRole('heading', {
        name: /world-class talent/i,
        level: 2,
      })
    ).toBeInTheDocument();
    expect(within(section1).getByRole('img')).toBeInTheDocument();
    expect(section2).toBeInTheDocument();
    expect(
      within(section2).getByRole('heading', {
        name: /the real deal/i,
        level: 2,
      })
    ).toBeInTheDocument();
    expect(within(section2).getByRole('img')).toBeInTheDocument();
    expect(footer).toBeInTheDocument();

    expect(locations).toBeInTheDocument();
    expect(locations?.children).toHaveLength(3);
  });
});
