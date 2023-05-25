import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Card2 from './Card2';

describe('Appearance', () => {
  test('Component render matches snapshot', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <Card2 title="dummyTitle" caption="dummyCaption" image="imgURL" />
        </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Component base should be fully rendered', () => {
    const { container } = render(
      <Card2 title="dummyTitle" caption="dummyCaption" image="imgURL" />,
      {
        wrapper: BrowserRouter,
      }
    );

    const component = container.firstChild;
    const img = screen.getByRole('img');
    const headerText = screen.getByRole('heading', { level: 3 });
    const captionText = screen.getByText('dummyCaption');

    expect(component).toBeInTheDocument();
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'imgURL');
    expect(headerText).toHaveTextContent('dummyTitle');
    expect(captionText).toBeInTheDocument();
  });
});
