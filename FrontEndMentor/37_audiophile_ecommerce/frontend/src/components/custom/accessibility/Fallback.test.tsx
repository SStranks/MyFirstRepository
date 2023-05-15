import { render } from '@testing-library/react';
import Fallback from './Fallback';

describe('Appearance', () => {
  test('Component base should be fully rendered', () => {
    const { container } = render(<Fallback />);

    const component = container.querySelector('div');

    expect(component).toHaveTextContent(/loading/i);
  });
});
