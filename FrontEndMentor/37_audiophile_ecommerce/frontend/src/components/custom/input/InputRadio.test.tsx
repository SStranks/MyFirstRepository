import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';
import InputRadio from './InputRadio';

describe('Appearance', () => {
  test('Component render matches snapshot', () => {
    const tree = renderer.create(<InputRadio id="label text" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Component base should be fully rendered', () => {
    const { container } = render(<InputRadio id="label text" />);

    const component = container.querySelector('label');
    const inputTypeRadio = screen.getByRole('radio');
    const paragraphText = screen.getByText('label text');

    expect(component).toBeInTheDocument();
    expect(component).toContainElement(inputTypeRadio);
    expect(paragraphText).toBeInTheDocument();
  });

  test('Appended classes should be added to component', () => {
    const { container } = render(
      <InputRadio appendClass="additionalStyles" id="label text" />
    );

    const component = container.querySelector('label');

    expect(component).toHaveClass('additionalStyles');
  });
});

describe('Functionality', () => {
  test('Radio accepts click and becomes checked', async () => {
    render(<InputRadio id="label text" />);

    const inputTypeRadio =
      screen.getByLabelText<HTMLInputElement>('label text');

    expect(inputTypeRadio).not.toBeChecked();
    await userEvent.click(inputTypeRadio);
    expect(inputTypeRadio).toBeChecked();
  });

  test('Label accepts click and radio becomes checked', async () => {
    const { container } = render(<InputRadio id="label text" />);

    const label = container.querySelector<HTMLLabelElement>('label');
    const inputTypeRadio = screen.getByRole('radio');

    expect(inputTypeRadio).not.toBeChecked();
    if (label) {
      await userEvent.click(label);
    }
    expect(inputTypeRadio).toBeChecked();
  });
});
