import { render, screen, within } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Home from './Home';

describe('Appearance', () => {
  test('Component render matches snapshot', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Component base should be fully rendered', () => {
    const { container } = render(<Home />, { wrapper: BrowserRouter });

    const component = container.firstChild;
    const nav = screen.getByRole('navigation');
    const footer = screen.getByRole('contentinfo');
    const bgTopImg = screen.getByTestId('bgImgTop');
    const bgBottomImg = screen.getByTestId('bgImgBottom');
    const imgs = screen.getAllByRole('img');

    const heroSection = screen.getByRole('region', { name: 'hero section' });
    const h1Text = screen.getByRole('heading', { level: 1 });
    const heroBtn = screen.getByRole('button', { name: /^learn more$/i });

    const viewGrid = document.querySelector('div.viewgrid');
    const qualitiesGrid = document.querySelector('div.qualities');

    expect(component).toBeInTheDocument();
    expect(nav).toBeInTheDocument();
    expect(footer).toBeInTheDocument();
    expect(bgTopImg).toBeInTheDocument();
    expect(bgTopImg).toBeVisible();
    expect(bgBottomImg).toBeInTheDocument();
    expect(bgBottomImg).toBeVisible();
    imgs.forEach((img) => expect(img).toBeVisible());

    expect(heroSection).toBeInTheDocument();
    expect(heroSection).toContainElement(h1Text);
    expect(heroSection).toContainElement(heroBtn);

    expect(viewGrid).toBeInTheDocument();
    expect(viewGrid?.children).toHaveLength(3);
    expect(within(viewGrid as HTMLElement).getAllByRole('img')).toHaveLength(3);

    expect(qualitiesGrid).toBeInTheDocument();
    expect(
      within(qualitiesGrid as HTMLElement).getAllByRole('img')
    ).toHaveLength(3);
    expect(
      within(qualitiesGrid as HTMLElement).getByText(/^passionate$/)
    ).toBeInTheDocument();
    expect(
      within(qualitiesGrid as HTMLElement).getByText(/^resourceful$/)
    ).toBeInTheDocument();
    expect(
      within(qualitiesGrid as HTMLElement).getByText(/^friendly$/)
    ).toBeInTheDocument();
  });
});
