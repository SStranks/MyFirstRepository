import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ViewMoreCartItemsButton from './ViewMoreCartItemsButton';

describe('Appearance', () => {
  test('Component base should be fully rendered', () => {
    const mockFn = jest.fn();
    render(<ViewMoreCartItemsButton cartItemLength={2} onClickFn={mockFn} />);

    const component = screen.getByRole('button');

    expect(component).toBeInTheDocument();
    expect(component).toHaveTextContent(/and \d other item/i);
  });
});

describe('Functionality', () => {
  test('Clicking button fires callback', async () => {
    const mockFn = jest.fn();
    render(<ViewMoreCartItemsButton cartItemLength={2} onClickFn={mockFn} />);

    const component = screen.getByRole('button');

    await userEvent.click(component);
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  test('Clicking button should alternative text content', async () => {
    const mockFn = jest.fn();
    render(<ViewMoreCartItemsButton cartItemLength={2} onClickFn={mockFn} />);

    const component = screen.getByRole('button');

    expect(component).toHaveTextContent(/and \d other item/i);
    await userEvent.click(component);
    expect(component).toHaveTextContent(/view less/i);
    await userEvent.click(component);
    expect(component).toHaveTextContent(/and \d other item/i);
  });

  test('If cartItemLength is greater than 2, button text should be plural', async () => {
    const mockFn = jest.fn();
    render(<ViewMoreCartItemsButton cartItemLength={3} onClickFn={mockFn} />);

    const component = screen.getByRole('button');

    expect(component).toHaveTextContent(/and \d other item\(s\)/i);
    await userEvent.click(component);
    expect(component).toHaveTextContent(/view less/i);
  });
});
