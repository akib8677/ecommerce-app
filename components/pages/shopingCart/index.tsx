"use client";
import RemoveItemModal from "@/components/common/model/RemoveItemModal";
import { CartContext } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import React, { useContext, useState } from "react";

const ShoppingCart: React.FC = () => {
  const { cart, setCart, removeFromCart } = useContext(CartContext);
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  const handleQuantityChange = (objectID: string, quantity: number) => {
    const updatedItems = cart.map((item) =>
      item.objectID === objectID
        ? { ...item, quantity: quantity > 0 ? quantity : 1 }
        : item
    );
    setCart(updatedItems);
  };

  const handleProceedToCheckout = () => {
    router.push("/checkout");
  };

  const handleRemove = () => {
    setShowModal(true);
  };

  const handleRemoveConfirm = (item: any) => {
    removeFromCart(item.objectID);
    setShowModal(false);
  };

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      <div className="bg-white shadow-md rounded-lg p-4">
        {cart.length === 0 ? (
          <div className="text-center">No Products in Cart</div>
        ) : (
          cart.map((item) => (
            <div key={item.objectID} className="flex items-center mb-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-20 h-20 object-cover mr-4"
              />
              <div className="flex-1">
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="text-gray-600">${item.price.toFixed(2)}</p>
              </div>
              <div className="w-32">
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) =>
                    handleQuantityChange(
                      item.objectID,
                      parseInt(e.target.value)
                    )
                  }
                  className="w-full p-2 border rounded"
                  min="1"
                />
              </div>
              <p className="text-gray-800 font-semibold ml-4">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
              <button
                onClick={handleRemove}
                className="bg-red-500 text-white px-4 py-2 rounded ml-4"
              >
                Remove
              </button>
              {showModal && (
                <RemoveItemModal
                  onClose={() => setShowModal(false)}
                  onConfirm={() => handleRemoveConfirm(item)}
                />
              )}
            </div>
          ))
        )}
        <div className="mt-4">
          <div className="flex justify-between mt-2">
            <span className="text-gray-600">Total</span>
            <span className="text-gray-800 font-semibold">
              ${subtotal.toFixed(2)}
            </span>
          </div>
          <button
            className="mt-4 bg-green-500 text-white p-2 rounded w-full"
            onClick={handleProceedToCheckout}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
