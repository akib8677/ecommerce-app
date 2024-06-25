"use client"
import { CartContextType, CartItem, Product } from '@/types';
import { addProductTOCart, fetchCartItems } from '@/utils/algolia';
import React, { ReactNode, createContext, useEffect, useState } from 'react';

const initialCart: CartItem[] = [];

interface CartProviderProps {
  children: ReactNode;
}

export const CartContext = createContext<CartContextType>({
  cart: initialCart,
  addToCart: () => {},
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

  return (
    <CartContext.Provider value={{ cart, setCart, addToCart, loading, error }}>
      {children}
    </CartContext.Provider>
  );
};
