"use client";
import React, { useContext } from "react";
import { CartContext } from "@/context/CartContext";
import { useRouter } from "next/navigation";

const AddToCartButton: React.FC<any> = ({ product }) => {
  const { addToCart, cart } = useContext(CartContext);
  const router = useRouter();
  const isInCart = cart.some(
    (cartItem: any) => cartItem.objectID === product.objectID
  );
  const handleAddToCart = () => {
    addToCart(product);
    router.push("/cart")
  };

  return (
    <>
      {isInCart ? (
        <button
          onClick={() => router.push("/cart")}
          className="bg-green-500 w-full text-white px-6 py-2 rounded-full shadow hover:bg-green-600 transition"
        >
          GO TO CART
        </button>
      ) : (
        <button
          className="bg-blue-600 w-full text-white rounded-full px-6 py-2 mt-4 hover:bg-blue-700"
          onClick={handleAddToCart}
        >
          ADD TO CART
        </button>
      )}
      <button
        className=" bg-red-400 w-full text-white rounded-full px-6 py-2 mt-4 hover:bg-red-500"
      >
        BUY NOW
      </button>
    </>
  );
};

export default AddToCartButton;
