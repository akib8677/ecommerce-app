import { CartProvider } from '@/context/CartContext';
import ShoppingCart from '@/pages/shopingCart';
import React from 'react'

const page = () => {
  return (
    <CartProvider>
      <ShoppingCart/>
    </CartProvider>
  )
}

export default page;