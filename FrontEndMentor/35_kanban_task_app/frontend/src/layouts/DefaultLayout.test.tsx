import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import DefaultLayout from './DefaultLayout';

describe('Appearance', () => {
  test('Component render matches snapshot', () => {
    const mockFn = jest.fn();
    const tree = renderer
      .create(
        <BrowserRouter>
          <DefaultLayout
            boardData={{
              boards: [],
              activeBoard: {
                _id: '',
                name: '',
                columns: [],
              },
            }}
            activeBoardId=""
            setActiveBoardId={mockFn}
          />
        </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Component base should be fully rendered', () => {
    const mockFn = jest.fn();
    const { container } = render(
      <DefaultLayout
        boardData={{
          boards: [],
          activeBoard: {
            _id: '',
            name: '',
            columns: [],
          },
        }}
        activeBoardId=""
        setActiveBoardId={mockFn}
      />,
      { wrapper: BrowserRouter }
    );

    const component = container.firstChild;
    const nav = screen.getByRole('navigation');
    const aside = screen.getByRole('complementary');
    const main = screen.getByRole('main');

    expect(component).toBeInTheDocument();
    expect(component).toHaveClass('container');
    expect(nav).toBeInTheDocument();
    expect(aside).toBeInTheDocument();
    expect(main).toBeInTheDocument();
  });
});
