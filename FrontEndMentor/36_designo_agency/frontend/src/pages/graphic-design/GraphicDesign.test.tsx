import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import GraphicDesign from './GraphicDesign';

describe('Appearance', () => {
  test('Component render matches snapshot', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <GraphicDesign />
        </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Component base should be fully rendered', () => {
    const { container } = render(<GraphicDesign />, { wrapper: BrowserRouter });

    const component = container.firstChild;
    const nav = screen.getByRole('navigation');
    const header = screen.getByRole('banner');
    const footer = screen.getByRole('contentinfo');
    const h1Text = screen.getByRole('heading', {
      name: /graphic design/i,
      level: 1,
    });
    const headerText = screen.getByText(/we deliver eye-catching/i);
    const exampleGrid = document.querySelector('div.examplegrid');
    const viewGrid = document.querySelector('div.viewgrid');

    expect(component).toBeInTheDocument();
    expect(nav).toBeInTheDocument();
    expect(header).toBeInTheDocument();
    expect(header).toContainElement(h1Text);
    expect(header).toContainElement(headerText);
    expect(footer).toBeInTheDocument();
    expect(exampleGrid).toBeInTheDocument();
    expect(exampleGrid?.children).toHaveLength(3);
    expect(viewGrid).toBeInTheDocument();
    expect(viewGrid?.children).toHaveLength(2);
  });
});
