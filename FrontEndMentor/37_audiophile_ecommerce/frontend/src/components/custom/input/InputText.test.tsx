// import { fireEvent, render, screen } from '@testing-library/react';
import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom';
import InputText from './InputText';

test('first test', () => {
  // Render Component
  render(<InputText />);
  // Manipulate component or find element in it
  const button = screen.getByRole('textbox');
  // Assertion - is the component behaving as expected?
  expect(button).toBeInTheDocument();
});
