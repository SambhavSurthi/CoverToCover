import React, { useRef } from "react";
import { LuChevronRight, LuChevronLeft } from "react-icons/lu";
import maybeSomeday from "/Products/clothing.jpeg";
import november9 from "/Products/clothing.jpeg";
import uglyLove from "/Products/clothing.jpeg";
import itEndsWithUs from "/Products/clothing.jpeg";
import itStartsWithUs from "/Products/clothing.jpeg";
import { Outlet, Link } from "react-router-dom";

const ImageCard = ({ src, alt, title }) => (
  <div className="relative snap-start scroll-ml-6 shrink-0 first:pl-6 last:pr-6">
    <img
      className="h-[350px] sm:h-[450px] w-full sm:w-[280px] lg:w-[332px] object-cover rounded-lg"
      src={src}
      alt={alt}
    />
    <p className="mt-5 text-base font-bold text-gray-600">{title}</p>
  </div>
);

const NavigationButton = ({ direction, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="p-1.5 -m-1.5 text-gray-300 transition-all duration-200 rounded-full hover:text-gray-600 hover:bg-gray-100"
  >
    {direction === "left" ? (
      <LuChevronLeft className="w-6 h-6" />
    ) : (
      <LuChevronRight className="w-6 h-6" />
    )}
  </button>
);

const CustomerProductDescription = () => {
  const books = [
    { src: maybeSomeday, alt: "Maybe Someday", title: "Maybe Someday" },
    { src: november9, alt: "November 9", title: "November 9" },
    { src: uglyLove, alt: "Ugly Love", title: "Ugly Love" },
    { src: itEndsWithUs, alt: "It Ends With Us", title: "It Ends With Us" },
    { src: itStartsWithUs, alt: "It Starts With Us", title: "It Starts With Us" },
  ];

  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-gray-50">
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-end lg:justify-between">
            <div className="max-w-md mx-auto text-center lg:text-left lg:mx-0">
              <h2 className="text-3xl font-bold text-gray-900">Colleen Hoover Book Set</h2>
              <p className="mt-4 text-base font-medium text-gray-500">
                A collection of five bestselling novels by Colleen Hoover. Scroll to explore.
              </p>
            </div>
            <div className="hidden lg:flex lg:items-center lg:justify-end lg:space-x-3">
              <NavigationButton direction="left" onClick={scrollLeft} />
              <NavigationButton direction="right" onClick={scrollRight} />
            </div>
          </div>

          <div
            ref={scrollRef}
            className="flex w-[90%] gap-6 pb-8 mt-8 lg:ml-14 overflow-x-auto sm:mt-12 snap-x"
          >
            {books.map((book, index) => (
              <ImageCard key={index} {...book} />
            ))}
          </div>

          <div className="flex items-center justify-center mt-4 space-x-3 lg:hidden">
            <NavigationButton direction="left" onClick={scrollLeft} />
            <NavigationButton direction="right" onClick={scrollRight} />
          </div>
        </div>
      </section>

      <div className="bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto bg-white p-6 rounded-lg shadow-md grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Book Details</h2>
            <p className="mt-4 text-gray-600 text-sm">
              Immerse yourself in the world of Colleen Hoover with this five-book set. Each novel delivers an emotional rollercoaster of love, heartbreak, and redemption.
            </p>

            <div className="mt-6 space-y-2 text-sm text-gray-700">
              <p><span className="font-semibold">Author:</span> Colleen Hoover</p>
              <p><span className="font-semibold">Publisher:</span> Atria Books</p>
              <p><span className="font-semibold">Genre:</span> Romance, Contemporary Fiction</p>
              <p><span className="font-semibold">Format:</span> Paperback</p>
              <p><span className="font-semibold">Number of Books:</span> 5</p>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h1 className="text-3xl font-bold text-gray-900">Colleen Hoover Book Set</h1>
            <p className="text-lg font-semibold text-green-600 mt-2">2500rs</p>
            <p className="mt-4 text-gray-600 text-sm">
              Get the complete set of five bestselling Colleen Hoover novels. A must-have for every book lover.
            </p>
            <Link to="/customer/cart" >
              <button className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg text-sm font-semibold hover:bg-blue-700 transition">
                Add to Cart
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerProductDescription;
