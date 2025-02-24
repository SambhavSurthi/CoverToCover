import React from "react";

const About = () => {
  return (
    <div className="about-us" id="about-us">
      <div className="sm:flex items-center max-w-screen-xl">
        <div className="sm:w-1/2 p-10">
          <div className="image object-center text-center">
            <img
              src="https://i.imgur.com/WbQnbas.png"
              alt="CoverToCover Logo"
            />
          </div>
        </div>
        <div className="sm:w-1/2 p-5">
          <div className="text">
            <span className="text-gray-500 border-b-2 border-indigo-600 uppercase">
              About Us
            </span>
            <h2 className="my-4 font-bold text-3xl sm:text-4xl">
              About <span className="text-indigo-600">CoverToCover</span>
            </h2>
            <p className="text-gray-700">
              Welcome to CoverToCover, your ultimate online bookstore! We bring
              book lovers a seamless shopping experience with a vast collection
              of books across various genres. Our platform is designed to make
              book shopping effortless and enjoyable with a range of features.
            </p>
            <h3 className="mt-4 font-semibold text-2xl text-indigo-600">
              Features
            </h3>
            <ul className="list-disc list-inside text-gray-700 mt-2">
              <li>
                <strong>User Authentication:</strong> Secure login & signup with
                JWT authentication, roles for Admin & Customers.
              </li>
              <li>
                <strong>Book Listings:</strong> Browse books by title, author,
                price, category, and search with filters.
              </li>
              <li>
                <strong>Shopping Cart & Checkout:</strong> Add to cart, manage
                items, and checkout with Stripe/PayPal integration.
              </li>
              <li>
                <strong>Order Management:</strong> Track order status and view
                order history.
              </li>
              <li>
                <strong>Admin Dashboard:</strong> Manage books, users, orders,
                and view sales analytics.
              </li>
            </ul>
            <p className="text-gray-700 mt-4">
              At CoverToCover, we believe that every book tells a story, and we
              want to make sure you find yours. Join us in creating a thriving
              reading community where books are just a click away!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
