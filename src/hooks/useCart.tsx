import { createContext, useContext, useEffect, useState } from 'react';
import { Product } from '../pages/Home/components/Product';
import { Cart, CartContextData, CartProviderProps } from './types';

const CartContext = createContext({} as CartContextData);

const WeMoviesLocalStorageKey = '@WeMovies:cart';

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<Cart[]>([]);

  useEffect(() => {
    const storagedCart = localStorage.getItem(WeMoviesLocalStorageKey);

    if (storagedCart) {
      setCart(JSON.parse(storagedCart));
    }
  }, []);

  const addProduct = (product: Product) => {
    try {
      const productExists = cart.find((item) => item.id === product.id);

      if (productExists) {
        setCart(
          cart.map((item) =>
            item.id === product.id
              ? { ...product, quantity: item.quantity + 1 }
              : item
          )
        );

        localStorage.setItem(
          WeMoviesLocalStorageKey,
          JSON.stringify(
            cart.map((item) =>
              item.id === product.id
                ? { ...product, quantity: item.quantity + 1 }
                : item
            )
          )
        );
      } else {
        const newProduct = { ...product, quantity: 1 };

        const products = [...cart, newProduct];

        setCart(products);

        localStorage.setItem(WeMoviesLocalStorageKey, JSON.stringify(products));
      }
    } catch {
      throw new Error('Erro na adição do produto');
    }
  };

  const removeProduct = (productId: number) => {
    try {
      const newCart = cart.filter((item) => item.id !== productId);

      setCart(newCart);

      localStorage.setItem(WeMoviesLocalStorageKey, JSON.stringify(newCart));
    } catch {
      throw new Error('Erro na remoção do produto');
    }
  };

  const productIncrement = (productId: number) => {
    const productExists = cart.find((item) => item.id === productId);

    if (productExists) {
      setCart(
        cart.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );

      localStorage.setItem(
        WeMoviesLocalStorageKey,
        JSON.stringify(
          cart.map((item) =>
            item.id === productId
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        )
      );
    }
  };

  const productDecrement = (productId: number) => {
    const productExists = cart.find((item) => item.id === productId);

    if (productExists) {
      if (productExists.quantity > 1) {
        setCart(
          cart.map((item) =>
            item.id === productId
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
        );

        localStorage.setItem(
          WeMoviesLocalStorageKey,
          JSON.stringify(
            cart.map((item) =>
              item.id === productId
                ? { ...item, quantity: item.quantity - 1 }
                : item
            )
          )
        );
      } else {
        return;
      }
    }
  };

  function confirmOrder(): void {
    localStorage.removeItem(WeMoviesLocalStorageKey);
    setCart([]);
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addProduct,
        removeProduct,
        productIncrement,
        productDecrement,
        confirmOrder
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  return context;
}
