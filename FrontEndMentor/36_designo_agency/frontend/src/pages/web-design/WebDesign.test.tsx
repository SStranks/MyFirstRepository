import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import WebDesign from './WebDesign';

describe('Appearance', () => {
  test('Component render matches snapshot', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <WebDesign />
        </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Component base should be fully rendered', () => {
    const { container } = render(<WebDesign />, { wrapper: BrowserRouter });

    const component = container.firstChild;
    const nav = screen.getByRole('navigation');
    const footer = screen.getByRole('contentinfo');
    const h1Text = screen.getByRole('heading', {
      name: /web design/i,
      level: 1,
    });
    const headerText = screen.getByText(/we build websites that/i);
    const exampleGrid = document.querySelector('div.examplegrid');
    const viewGrid = document.querySelector('div.viewgrid');

    expect(component).toBeInTheDocument();
    expect(nav).toBeInTheDocument();
    expect(footer).toBeInTheDocument();
    expect(h1Text).toBeInTheDocument();
    expect(headerText).toBeInTheDocument();
    expect(exampleGrid).toBeInTheDocument();
    expect(exampleGrid?.children).toHaveLength(6);
    expect(viewGrid).toBeInTheDocument();
    expect(viewGrid?.children).toHaveLength(2);
  });
});
