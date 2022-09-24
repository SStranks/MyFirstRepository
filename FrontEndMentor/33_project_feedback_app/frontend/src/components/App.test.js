import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import '@testing-library/jest-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

test('full app rendering', async () => {
  render(<App />, { wrapper: BrowserRouter });
  const user = userEvent.setup();

  // verify page content for default route
  // expect(screen.getByText(/you are home/i)).toBeInTheDocument()
});

test('navigating to roadmap page', async () => {
  render(<App />, { wrapper: BrowserRouter });
  const user = userEvent.setup();

  // verify page content for expected route after navigating
  // await user.click(screen.getByText(/about/i));
  // expect(screen.getByText(/you are on the about page/i)).toBeInTheDocument();
});

test('navigating to unknown page', () => {
  const badRoute = '/some/bad/route';

  render(
    <MemoryRouter initialEntries={[badRoute]}>
      <App />
    </MemoryRouter>
  );

  // verify navigation to "no match" route
  // expect(screen.getByText(/no match/i)).toBeInTheDocument()
});
