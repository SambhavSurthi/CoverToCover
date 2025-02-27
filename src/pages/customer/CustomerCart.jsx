import React, { useState } from "react";
import threeMistakes from "/Products/cocacola.webp";
import november9 from "/Products/clothing.jpeg";

const CustomerCart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: "It Ends with Us",
      author: "Colleen Hoover",
      price: 1200,
      quantity: 1,
      image: threeMistakes,
    },
    {
      id: 2,
      title: "Verity",
      author: "Colleen Hoover",
      price: 1099,
      quantity: 1,
      image: november9,
    },
  ]);

  // Function to increment quantity
  const handleIncrement = (itemId) => {
    setCartItems((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Function to decrement quantity
  const handleDecrement = (itemId) => {
    setCartItems((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Function to remove an item from the cart
  const handleRemove = (itemId) => {
    setCartItems((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  return (
    <div className="mx-auto max-w-screen-xl bg-gray-50 mt-6 rounded-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <header className="text-center">
          <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">Your Cart</h1>
        </header>

        <div className="mt-8">
          <ul className="space-y-4">
            {cartItems.map((item) => (
              <li key={item.id} className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="size-16 rounded-sm object-cover"
                />
                <div>
                  <h3 className="text-sm font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-xs text-gray-600">by {item.author}</p>
                  <p className="text-sm font-medium text-gray-900">
                    {item.price.toFixed(2)}rs
                  </p>
                </div>
                <div className="flex flex-1 items-center justify-end gap-2">
                  <button
                    className="px-2 py-1 bg-gray-200 text-gray-700 rounded"
                    onClick={() => handleDecrement(item.id)}
                  >
                    -
                  </button>
                  <span className="text-sm font-medium">{item.quantity}</span>
                  <button
                    className="px-2 py-1 bg-gray-200 text-gray-700 rounded"
                    onClick={() => handleIncrement(item.id)}
                  >
                    +
                  </button>
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="text-gray-600 transition hover:text-red-600"
                  >
                    <span className="sr-only">Remove item</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
            <div className="w-screen max-w-lg space-y-4">
              <dl className="space-y-0.5 text-sm text-gray-700">
                <div className="flex justify-between">
                  <dt>Subtotal</dt>
                  <dd>
                    {cartItems
                      .reduce((sum, item) => sum + item.price * item.quantity, 0)
                      .toFixed(2)}
                    rs
                  </dd>
                </div>
                <div className="flex justify-between !text-base font-medium">
                  <dt>Total</dt>
                  <dd>
                    {cartItems
                      .reduce((sum, item) => sum + item.price * item.quantity, 0)
                      .toFixed(2)}
                    rs
                  </dd>
                </div>
              </dl>

              <div className="flex justify-end">
                <a
                  href="/customer/address"
                  className="block rounded-sm bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
                >
                  Checkout
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerCart;
