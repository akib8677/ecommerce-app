"use client";
import React, { useContext, useState } from "react";
import { CartContext } from "@/context/CartContext";
import { useRouter } from "next/navigation";

const CheckoutPage: React.FC = () => {
  const { cart, setCart } = useContext(CartContext);
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    country: "India",
    streetAddress: "",
    apartment: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
    email: "",
    paymentMethod: "cod",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleOrder = async () => {
    setLoading(true);
    try {
      const response = await fetch("/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ items: cart, user: form }),
      });
      const data = await response.json();
      if (response.ok) {
        setCart([]);
        router.push(`/order-confirmation/${data.orderId}`);
      } else {
        console.error("Order failed", data.message);
      }
    } catch (error) {
      console.error("Order error", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-2/3 px-4 mb-4 md:mb-0">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Billing details</h2>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="mb-4">
                  <label className="block mb-2">First name *</label>
                  <input
                    type="text"
                    name="firstName"
                    className="w-full p-2 border rounded"
                    value={form.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-2">Last name *</label>
                  <input
                    type="text"
                    name="lastName"
                    className="w-full p-2 border rounded"
                    value={form.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block mb-2">Company name (optional)</label>
                <input
                  type="text"
                  name="companyName"
                  className="w-full p-2 border rounded"
                  value={form.companyName}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Country / Region *</label>
                <select
                  name="country"
                  className="w-full p-2 border rounded"
                  value={form.country}
                  onChange={handleChange}
                  required
                >
                  <option>India</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block mb-2">Street address *</label>
                <input
                  type="text"
                  name="streetAddress"
                  className="w-full p-2 border rounded mb-2"
                  placeholder="House number and street name"
                  value={form.streetAddress}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="apartment"
                  className="w-full p-2 border rounded"
                  placeholder="Apartment, suite, unit, etc. (optional)"
                  value={form.apartment}
                  onChange={handleChange}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="mb-4">
                  <label className="block mb-2">Town / City *</label>
                  <input
                    type="text"
                    name="city"
                    className="w-full p-2 border rounded"
                    value={form.city}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-2">State *</label>
                  <select
                    name="state"
                    className="w-full p-2 border rounded"
                    value={form.state}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a state</option>
                    <option>Andhra Pradesh</option>
                    <option>Arunachal Pradesh</option>
                    <option>Assam</option>
                    <option>Bihar</option>
                    <option>Chhattisgarh</option>
                    <option>Goa</option>
                    <option>Gujarat</option>
                    <option>Haryana</option>
                    <option>Himachal Pradesh</option>
                    <option>Jharkhand</option>
                    <option>Karnataka</option>
                    <option>Kerala</option>
                    <option>Madhya Pradesh</option>
                    <option>Maharashtra</option>
                    <option>Manipur</option>
                    <option>Meghalaya</option>
                    <option>Mizoram</option>
                    <option>Nagaland</option>
                    <option>Odisha</option>
                    <option>Punjab</option>
                    <option>Rajasthan</option>
                    <option>Sikkim</option>
                    <option>Tamil Nadu</option>
                    <option>Telangana</option>
                    <option>Tripura</option>
                    <option>Uttar Pradesh</option>
                    <option>Uttarakhand</option>
                    <option>West Bengal</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block mb-2">ZIP *</label>
                  <input
                    type="text"
                    name="zip"
                    className="w-full p-2 border rounded"
                    value={form.zip}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block mb-2">Phone *</label>
                <input
                  type="text"
                  name="phone"
                  className="w-full p-2 border rounded"
                  value={form.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Email address *</label>
                <input
                  type="email"
                  name="email"
                  className="w-full p-2 border rounded"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </form>
          </div>
        </div>
        <div className="w-full md:w-1/3 px-4">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Your order</h2>
            <div className="mb-4">
              {cart.map((item) => (
                <div key={item.objectID} className="flex justify-between mb-2">
                  <span>
                    {item.title} x {item.quantity}
                  </span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
              <div className="flex justify-between font-semibold border-t pt-2">
                <span>Total</span>
                <span>
                  $
                  {cart
                    .reduce(
                      (total, item) => total + item.price * item.quantity,
                      0
                    )
                    .toFixed(2)}
                </span>
              </div>
            </div>
            <div className="mb-4">
              <h3 className="font-semibold mb-2">Payment Method</h3>
              <div className="flex flex-col">
                <label className="flex items-center mb-2">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="bank"
                    checked={form.paymentMethod === "bank"}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  Direct bank transfer
                </label>
                <label className="flex items-center mb-2">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="check"
                    checked={form.paymentMethod === "check"}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  Check payments
                </label>
                <label className="flex items-center mb-2">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cod"
                    checked={form.paymentMethod === "cod"}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  Cash on delivery
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="paypal"
                    checked={form.paymentMethod === "paypal"}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  PayPal
                </label>
              </div>
            </div>
            <button
              onClick={handleOrder}
              className="bg-orange-500 text-white p-2 rounded w-full"
              disabled={loading}
            >
              {loading ? "Placing order..." : "Place order"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
