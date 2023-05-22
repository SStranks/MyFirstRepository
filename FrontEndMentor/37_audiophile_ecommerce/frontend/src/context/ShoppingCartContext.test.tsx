import {
  ShoppingCartProvider,
  useShoppingCartContext,
} from '#Context/ShoppingCartContext';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

beforeEach(() => {
  localStorage.setItem(
    'shopping-cart',
    JSON.stringify([
      { id: 1, quantity: 1 },
      { id: 2, quantity: 3 },
    ])
  );
});

const DummyContextConsumer = (): JSX.Element => {
  const {
    cartTotalPrice,
    cartItemsCount,
    cartItems,
    increaseCartItem,
    decreaseCartItem,
    removeItem,
    removeAllItems,
  } = useShoppingCartContext();

  const increaseCartItemBtn = () => {
    increaseCartItem(1, 2);
  };

  const decreaseCartItemBtn = () => {
    decreaseCartItem(2);
  };

  const removeItemBtn = () => {
    removeItem(2);
  };

  const removeAllItemsBtn = () => {
    removeAllItems();
  };

  return (
    <div data-testid="dummyUI">
      <p data-testid="cartTotalPrice">{cartTotalPrice()}</p>
      <p data-testid="cartItemsCount">{cartItemsCount}</p>
      <p data-testid="cartItems">{JSON.stringify(cartItems)}</p>
      <button type="button" onClick={increaseCartItemBtn}>
        increaseCartItem
      </button>
      <button type="button" onClick={decreaseCartItemBtn}>
        decreaseCartItem
      </button>
      <button type="button" onClick={removeItemBtn}>
        removeItem
      </button>
      <button type="button" onClick={removeAllItemsBtn}>
        removeAll
      </button>
    </div>
  );
};

describe('Functionality', () => {
  test('All context values render as expected', async () => {
    render(
      <ShoppingCartProvider>
        <DummyContextConsumer />
      </ShoppingCartProvider>
    );

    const component = screen.getByTestId('dummyUI');
    const cartTotalPrice = screen.getByTestId('cartTotalPrice');
    const cartItemsCount = screen.getByTestId('cartItemsCount');
    const cartItems = screen.getByTestId('cartItems');

    expect(component).toBeInTheDocument();
    expect(cartTotalPrice).toHaveTextContent(/^\d+$/);
    expect(cartItemsCount).toHaveTextContent('4');
    expect(cartItems).toHaveTextContent(
      '[{"id":1,"quantity":1},{"id":2,"quantity":3}]'
    );
  });

  test('IncreaseCartItem function increase item quanity', async () => {
    // NOTE:  Values passed to function are hardcoded in dummyUI component.
    render(
      <ShoppingCartProvider>
        <DummyContextConsumer />
      </ShoppingCartProvider>
    );

    const cartItems = screen.getByTestId('cartItems');
    const increaseCartItemBtn = screen.getByRole('button', {
      name: 'increaseCartItem',
    });

    expect(cartItems).toHaveTextContent(
      '[{"id":1,"quantity":1},{"id":2,"quantity":3}]'
    );
    await userEvent.click(increaseCartItemBtn);
    expect(cartItems).toHaveTextContent(
      '[{"id":1,"quantity":3},{"id":2,"quantity":3}]'
    );
  });

  test('DecreaseCartItem function decrements by 1; removes item at 0', async () => {
    render(
      <ShoppingCartProvider>
        <DummyContextConsumer />
      </ShoppingCartProvider>
    );

    const cartItems = screen.getByTestId('cartItems');
    const decreaseCartItemBtn = screen.getByRole('button', {
      name: 'decreaseCartItem',
    });

    expect(cartItems).toHaveTextContent(
      '[{"id":1,"quantity":1},{"id":2,"quantity":3}]'
    );
    await userEvent.click(decreaseCartItemBtn);
    expect(cartItems).toHaveTextContent(
      '[{"id":1,"quantity":1},{"id":2,"quantity":2}]'
    );
    await userEvent.click(decreaseCartItemBtn);
    await userEvent.click(decreaseCartItemBtn);
    expect(cartItems).toHaveTextContent('[{"id":1,"quantity":1}]');
  });

  test('RemoveItem function removes item; hardcoded to remove Id: 2', async () => {
    render(
      <ShoppingCartProvider>
        <DummyContextConsumer />
      </ShoppingCartProvider>
    );

    const cartItems = screen.getByTestId('cartItems');
    const removeItemBtn = screen.getByRole('button', { name: 'removeItem' });

    expect(cartItems).toHaveTextContent(
      '[{"id":1,"quantity":1},{"id":2,"quantity":3}]'
    );
    await userEvent.click(removeItemBtn);
    expect(cartItems).toHaveTextContent('[{"id":1,"quantity":1}]');
  });

  test('RemoveAllItems function removes all items', async () => {
    render(
      <ShoppingCartProvider>
        <DummyContextConsumer />
      </ShoppingCartProvider>
    );

    const cartItems = screen.getByTestId('cartItems');
    const removeAllItemBtn = screen.getByRole('button', {
      name: 'removeAll',
    });

    expect(cartItems).toHaveTextContent(
      '[{"id":1,"quantity":1},{"id":2,"quantity":3}]'
    );
    await userEvent.click(removeAllItemBtn);
    expect(cartItems).toHaveTextContent('[]');
  });
});
