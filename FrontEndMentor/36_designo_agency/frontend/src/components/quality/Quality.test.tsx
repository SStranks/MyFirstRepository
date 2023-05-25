import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Quality from './Quality';

describe('Appearance', () => {
  test('Component render matches snapshot', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <Quality
            title="dummyTitle"
            caption="dummyCaption"
            illustration="imgURL"
            bgRotation="0deg"
          />
        </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Component base should be fully rendered', () => {
    const { container } = render(
      <Quality
        title="dummyTitle"
        caption="dummyCaption"
        illustration="imgURL"
        bgRotation="90deg"
      />,
      { wrapper: BrowserRouter }
    );

    const component = container.firstChild;
    const img = screen.getByRole('img');
    const bgCircle = document.querySelector('div.bg-circle');
    const titleText = screen.getByText('dummyTitle');
    const captionText = screen.getByTestId('caption');

    expect(component).toBeInTheDocument();
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'imgURL');
    expect(bgCircle).toBeInTheDocument();
    expect(bgCircle).toHaveStyle('transform: rotate(90deg)');
    expect(titleText).toBeInTheDocument();
    expect(captionText).toBeInTheDocument();
  });

  test('If caption prop is empty, <p> should not render', () => {
    render(
      <Quality
        title="dummyTitle"
        caption=""
        illustration="imgURL"
        bgRotation="90deg"
      />,
      { wrapper: BrowserRouter }
    );

    const captionText = screen.queryByTestId('caption');

    expect(captionText).not.toBeInTheDocument();
  });
});
