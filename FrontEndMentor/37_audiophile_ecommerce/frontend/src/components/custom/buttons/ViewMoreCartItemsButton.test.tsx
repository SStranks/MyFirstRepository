import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import ViewMoreCartItemsButton from './ViewMoreCartItemsButton';

describe('Appearance', () => {
  test('Component base should be fully rendered', () => {
    const mockFn = jest.fn();
    render(<ViewMoreCartItemsButton cartItemLength={1} onClickFn={mockFn} />);

    const component = screen.getByRole('button');

    expect(component).toBeInTheDocument();
    expect(component).toHaveTextContent(/and \d other item/);
  });
});

// eslint-disable-next-line jest/no-commented-out-tests
// describe('Functionality', () => {});
