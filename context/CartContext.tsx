"use client"
import { CartContextType, CartItem, Product } from '@/types';
import { addProductTOCart, fetchCartItems, removeProductToCart } from '@/utils/algolia';
import React, { ReactNode, createContext, useEffect, useState } from 'react';

const initialCart: CartItem[] = [];

interface CartProviderProps {
  children: ReactNode;
}

export const CartContext = createContext<CartContextType>({
  cart: initialCart,
  addToCart: () => {},
  removeFromCart: () => {},
  loading: false,
  error: null,
  setCart: () => {}
});

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<any>(initialCart);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getCartItems = async () => {
      try {
        const items = await fetchCartItems();
        setCart(items);
      } catch (error) {
        setError('Failed to fetch cart items.');
      } finally {
        setLoading(false);
      }
    };

    getCartItems();
  }, []);

  const addToCart = (product: Product) => {
    const item: CartItem = {
      ...product,
      quantity: 1,
    };
    setCart((prevCart:any) => [...prevCart, item]);
    addProductTOCart(item).catch((error) => {
      console.error('Failed to add product to Algolia:', error);
    });
  };

  const removeFromCart = async (objectID: string) => {
    debugger
    try {
      const updatedCart = cart.filter((item:any) => item.objectID !== objectID);
      setCart(updatedCart);
      await removeProductToCart(objectID);
    } catch (error) {
      console.error('Failed to remove product from Algolia:', error);
    }
  };

  return (
    <CartContext.Provider value={{ cart, setCart, addToCart, removeFromCart, loading, error }}>
      {children}
    </CartContext.Provider>
  );
};
