import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Fallback from './Fallback';

describe('Appearance', () => {
  test('Component render matches snapshot', () => {
    const tree = renderer.create(<Fallback />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Component base should be fully rendered', () => {
    const { container } = render(<Fallback />);

    const component = container.querySelector('div');

    expect(component).toHaveTextContent(/loading/i);
  });
});
