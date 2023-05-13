import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import InputText from './InputText';

describe('Appearance', () => {
  test('Component base should be fully rendered', () => {
    // Render Component
    const { container } = render(<InputText id="label text" />);

    // Manipulate component or find element in it
    const component = container.querySelector('label');
    const inputTypeText = screen.getByRole('textbox');
    const paragraphText = screen.getByText('label text');

    // Debug Options
    // screen.debug(); // Print current state of HTML
    // screen.logTestingPlaygroundURL(); // Serves current HTML in codepen

    // Assertion - is the component behaving as expected?
    expect(component).toBeInTheDocument();
    expect(component).toContainElement(inputTypeText);
    expect(paragraphText).toBeInTheDocument();
  });

  test('Appended classes should be added to component', () => {
    const { container } = render(
      <InputText appendClass="additionalStyles" id="label text" />
    );

    const component = container.querySelector('label');

    expect(component).toHaveClass('additionalStyles');
  });
});

describe('Functionality', () => {
  test('Input accepts and renders text', async () => {
    render(<InputText id="label text" />);

    const inputTypeText = screen.getByLabelText<HTMLInputElement>('label text');

    expect(inputTypeText.value).toBe('');
    await userEvent.type(inputTypeText, 'abc ABC 123!');
    expect(inputTypeText).toHaveValue('abc ABC 123!');
  });

  test('Clicking label focuses on input', async () => {
    const { container } = render(<InputText id="label text" />);

    const component = container.querySelector('label');
    const inputTypeText = screen.getByRole('textbox');

    expect(inputTypeText).not.toHaveFocus();
    if (component) {
      await userEvent.click(component);
    }
    expect(inputTypeText).toHaveFocus();
  });
});
