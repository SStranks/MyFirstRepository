import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import { BrowserRouter, Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Card from './Card1';

describe('Appearance', () => {
  test('Component render matches snapshot', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <Card title="dummyTitle" image="imgURL" url="dummyURL" />
        </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Component base should be fully rendered', () => {
    render(<Card title="dummyTitle" image="imgURL" url="dummyURL" />, {
      wrapper: BrowserRouter,
    });

    const component = screen.getByRole('link');
    const bgImg = document.querySelector('div.card');
    const headerText = screen.getByRole('heading', { level: 2 });
    const iconImg = screen.getByRole('img');
    const bodyText = screen.getByText(/view projects/i);

    expect(component).toBeInTheDocument();
    expect(bgImg).toBeInTheDocument();
    expect(bgImg).toHaveStyle('backgroundImage: url(imgURL)');
    expect(headerText).toHaveTextContent('dummyTitle');
    expect(iconImg).toBeInTheDocument();
    expect(bodyText).toBeInTheDocument();
  });
});

describe('Functionality', () => {
  test('Navigation Links direct to the correct page', async () => {
    const history = createMemoryHistory({ initialEntries: ['/dummyRoute'] });
    history.push = jest.fn();
    render(
      <Router location={history.location} navigator={history}>
        <Card title="dummyTitle" image="imgURL" url="dummyURL" />
      </Router>
    );

    const link = screen.getByRole('link');

    await userEvent.click(link);
    expect(history.push).toHaveBeenCalledTimes(1);
    expect(history.push).toHaveBeenCalledWith(
      {
        hash: '',
        pathname: '/dummyURL',
        search: '',
      },
      undefined,
      {
        preventScrollReset: undefined,
        relative: undefined,
        replace: false,
        state: undefined,
      }
    );
  });
});
