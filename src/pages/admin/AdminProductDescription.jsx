import React, { useRef } from "react";
import { LuChevronRight, LuChevronLeft } from "react-icons/lu";
import headphones from "/Products/headphones.avif";
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

const AdminProductDescription = () => {
  const images = [
    {
      src: headphones,
      alt: "Image 1",
      title: "Wireless Headphones",
    },
    {
      src: headphones,
      alt: "Image 2",
      title: "Noise Cancelling",
    },
    {
      src: headphones,
      alt: "Image 3",
      title: "Ergonomic Design",
    },
    {
      src: headphones,
      alt: "Image 4",
      title: "Long Battery Life",
    },
    {
      src: headphones,
      alt: "Image 5",
      title: "Bluetooth 5.3",
    },
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
      {/* Image Carousel Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-end lg:justify-between">
            <div className="max-w-md mx-auto text-center lg:text-left lg:mx-0">
              <h2 className="text-3xl font-bold text-gray-900">
                Wireless Headphones
              </h2>
              <p className="mt-4 text-base font-medium text-gray-500">
                Explore detailed descriptions of our featured products. Scroll to
                view more.
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
            {images.map((image, index) => (
              <ImageCard key={index} {...image} />
            ))}
          </div>

          <div className="flex items-center justify-center mt-4 space-x-3 lg:hidden">
            <NavigationButton direction="left" onClick={scrollLeft} />
            <NavigationButton direction="right" onClick={scrollRight} />
          </div>
        </div>
      </section>

      {/* Product Description Section */}
      <div className="bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto bg-white p-6 rounded-lg shadow-md grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Section - Detailed Information */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Product Details</h2>
            <p className="mt-4 text-gray-600 text-sm">
              This premium wireless headphone offers an immersive sound
              experience with deep bass and crystal-clear highs. It features
              advanced noise cancellation, long battery life, and ergonomic
              design for all-day comfort. Ideal for music lovers and
              professionals alike.
            </p>

            <div className="mt-6 space-y-2 text-sm text-gray-700">
              <p>
                <span className="font-semibold">Manufacturer:</span> TechSound
                Inc.
              </p>
              <p>
                <span className="font-semibold">Production Date:</span> March
                2024
              </p>
              <p>
                <span className="font-semibold">Expiry Date:</span> N/A
                (Non-expirable)
              </p>
              <p>
                <span className="font-semibold">Model Number:</span> TS-WH500
              </p>
              <p>
                <span className="font-semibold">Warranty:</span> 2 Years
              </p>
              <p>
                <span className="font-semibold">Material:</span> High-Quality
                Plastic & Leather
              </p>
              <p>
                <span className="font-semibold">Battery Life:</span> Up to 30
                Hours
              </p>
              <p>
                <span className="font-semibold">Charging Time:</span> 2 Hours
                (Fast Charging Supported)
              </p>
              <p>
                <span className="font-semibold">Connectivity:</span> Bluetooth
                5.3, AUX, USB-C
              </p>
            </div>
          </div>

          {/* Right Section - Product Summary & Add to Cart */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h1 className="text-3xl font-bold text-gray-900">
              Wireless Headphones
            </h1>
            <p className="text-lg font-semibold text-green-600 mt-2">$149.99</p>
            <p className="mt-4 text-gray-600 text-sm">
              Experience high-fidelity sound with our top-tier wireless
              headphones, designed for comfort and performance. Stay connected
              seamlessly with the latest Bluetooth technology.
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProductDescription;