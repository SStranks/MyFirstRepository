import ProductData from '#Data/Data.json';
import useLocalStorage from '#Hooks/useLocalStorage';
import { PropsWithChildren, createContext, useContext } from 'react';

type CartItem = {
  id: number;
  quantity: number;
};

type ShoppingCartContext = {
  cartTotalPrice: () => number;
  increaseCartItem: (id: number, val?: number) => void;
  decreaseCartItem: (id: number) => void;
  removeItem: (id: number) => void;
  removeAllItems: () => void;
  cartItemsCount: number;
  cartItems: CartItem[];
};

const ShoppingCartContext = createContext({} as ShoppingCartContext);

function useShoppingCartContext() {
  return useContext(ShoppingCartContext);
}

function ShoppingCartProvider(props: PropsWithChildren) {
  const { children } = props;
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
    'shopping-cart',
    []
  );

  const cartItemsCount = cartItems.reduce((acc, cur) => cur.quantity + acc, 0);

  function cartTotalPrice() {
    // eslint-disable-next-line unicorn/no-array-reduce
    return cartItems.reduce((acc, cur) => {
      const product = ProductData.find((item) => item.id === cur.id);
      return acc + (product?.price || 0) * cur.quantity;
    }, 0);
  }

  function increaseCartItem(id: number, quantity = 1) {
    setCartItems((items) => {
      return items.some((item) => item.id === id)
        ? items.map((item) => {
            return item.id === id
              ? { ...item, quantity: item.quantity + quantity }
              : item;
          })
        : [...items, { id, quantity }];
    });
  }

  function decreaseCartItem(id: number) {
    setCartItems((items) => {
      return items.find((item) => item.id === id)?.quantity === 1
        ? items.filter((item) => item.id !== id)
        : items.map((item) => {
            return item.id === id
              ? { ...item, quantity: item.quantity - 1 }
              : item;
          });
    });
  }

  function removeItem(id: number) {
    setCartItems((items) => {
      return items.filter((item) => item.id !== id);
    });
  }

  function removeAllItems() {
    setCartItems([]);
  }

  return (
    // NOTE:  If context has parent/s that cause re-render, then wrap provider value with useMemo to prevent unecessary re-renders of this context child consumers.
    <ShoppingCartContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        cartTotalPrice,
        increaseCartItem,
        decreaseCartItem,
        removeItem,
        removeAllItems,
        cartItemsCount,
        cartItems,
      }}>
      {children}
    </ShoppingCartContext.Provider>
  );
}

export { ShoppingCartProvider, useShoppingCartContext };
