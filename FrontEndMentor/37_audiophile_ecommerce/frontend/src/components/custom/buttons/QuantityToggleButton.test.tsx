import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';
import QuantityToggleButton from './QuantityToggleButton';

describe('Appearance', () => {
  test('Component render matches snapshot', () => {
    const mockFn = jest.fn();
    const currentValue = 123;
    const tree = renderer
      .create(
        <QuantityToggleButton
          appendClass="additionalStyles"
          currentValue={currentValue}
          increaseFn={mockFn}
          decreaseFn={mockFn}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Component base should be fully rendered', () => {
    const mockFn = jest.fn();
    const currentValue = 123;
    const { container } = render(
      <QuantityToggleButton
        appendClass="additionalStyles"
        currentValue={currentValue}
        increaseFn={mockFn}
        decreaseFn={mockFn}
      />
    );

    const component = container.querySelector('div');
    const buttons = screen.getAllByRole('button');

    expect(component).toHaveTextContent('123');
    expect(buttons).toHaveLength(2);
    expect(buttons[0]).toHaveTextContent('-');
    expect(buttons[1]).toHaveTextContent('+');
  });

  test('Appended classes should be added to component', () => {
    const mockFn = jest.fn();
    const { container } = render(
      <QuantityToggleButton
        appendClass="additionalStyles"
        currentValue={1}
        increaseFn={mockFn}
        decreaseFn={mockFn}
      />
    );

    const component = container.querySelector('div');

    expect(component).toHaveClass('additionalStyles');
  });
});

describe('Functionality', () => {
  test('Buttons fire calls to parent; increase/decrease current value', async () => {
    const mockFnDecrease = jest.fn();
    const mockFnIncrease = jest.fn();
    const currentValue = 1;
    render(
      <QuantityToggleButton
        currentValue={currentValue}
        increaseFn={mockFnIncrease}
        decreaseFn={mockFnDecrease}
      />
    );

    const decreaseButton = screen.getByText('-');
    const increaseButton = screen.getByText('+');

    await userEvent.click(decreaseButton);
    expect(mockFnDecrease).toHaveBeenCalledTimes(1);
    expect(mockFnDecrease).toHaveBeenCalledWith(currentValue - 1);

    await userEvent.click(increaseButton);
    expect(mockFnIncrease).toHaveBeenCalledTimes(1);
    expect(mockFnIncrease).toHaveBeenCalledWith(currentValue + 1);
  });
});
