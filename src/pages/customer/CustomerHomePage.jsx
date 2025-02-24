import React, { useState } from "react";
import threeMistakes from "/Products/cocacola.webp";
import november9 from "/Products/clothing.jpeg";
import colleenSet from "/Products/headphones.avif";
import itEndsWithUs from "/Products/shoes.jpeg";
import { Outlet, Link } from "react-router-dom";

const CustomerHomePage = () => {
  const products = [
    {
      productId: 2523,
      productName: "Colleen Hoover Books Set of 5",
      productCategory: "Fictional",
      productPrice: 3500,
      productImage: colleenSet,
      productDescription:
        "A set of 5 bestselling books by Colleen Hoover, perfect for book lovers.",
    },
    {
      productId: 2524,
      productName: "Colleen Hoover - November 9",
      productCategory: "Mystery",
      productPrice: 700,
      productImage: november9,
      productDescription:
        "A gripping novel by Colleen Hoover that tells a unique love story spanning years.",
    },
    {
      productId: 2525,
      productName: "Chetan Bhagat - The 3 Mistakes of My Life",
      productCategory: "Fictional",
      productPrice: 500,
      productImage: threeMistakes,
      productDescription:
        "A captivating novel by Chetan Bhagat, inspired by real events in India.",
    },
    {
      productId: 2526,
      productName: "Colleen Hoover - It Ends with Us",
      productCategory: "Mystery",
      productPrice: 800,
      productImage: itEndsWithUs,
      productDescription:
        "An emotional and powerful novel by Colleen Hoover that explores love and resilience.",
    },
  ];

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState({
    min: 0,
    max: findHighestPrice(products),
  });
  const [searchTerm, setSearchTerm] = useState("");

  function findHighestPrice(products) {
    let highestPrice = 0;
    products.forEach((product) => {
      if (product.productPrice > highestPrice) {
        highestPrice = product.productPrice;
      }
    });

    return highestPrice;
  }

  const countFilters = selectedCategories.length;

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((cat) => cat !== category)
        : [...prev, category]
    );
  };

  const handlePriceChange = (e) => {
    const { id, value } = e.target;
    setPriceRange((prev) => ({
      ...prev,
      [id]: parseInt(value, 10) || 0,
    }));
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const filteredProducts = products.filter((product) => {
    const inCategory = selectedCategories.length
      ? selectedCategories.includes(product.productCategory)
      : true;
    const inPriceRange =
      product.productPrice >= priceRange.min &&
      product.productPrice <= priceRange.max;
    const matchesSearch = product.productName
      .toLowerCase()
      .includes(searchTerm);

    return inCategory && inPriceRange && matchesSearch;
  });

  return (
    <div>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <header>
            <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
              Books Collection
            </h2>
          </header>

          <div className="mt-8 sm:flex sm:items-center sm:justify-between">
            <div className="hidden sm:flex sm:gap-4">
              <div className="relative">
                <details className="group [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600">
                    <span className="text-sm font-medium"> Category </span>
                    <span className="transition group-open:-rotate-180">
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
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </span>
                  </summary>

                  <div className="z-50 group-open:absolute group-open:top-auto group-open:mt-2 ltr:group-open:start-0">
                    <div className="w-96 rounded-sm border border-gray-200 bg-white">
                      <header className="flex items-center justify-between p-4">
                        <span className="text-sm text-gray-700">
                          {" "}
                          {countFilters} Selected{" "}
                        </span>
                        <button
                          type="button"
                          className="text-sm text-gray-900 underline underline-offset-4"
                          onClick={() => setSelectedCategories([])}
                        >
                          Reset
                        </button>
                      </header>

                      <ul className="space-y-1 border-t border-gray-200 p-4">
                        <li>
                          <label className="inline-flex items-center gap-2">
                            <input
                              type="checkbox"
                              id="Food"
                              className="size-5 rounded-sm border-gray-300"
                              checked={selectedCategories.includes("Mystery")}
                              onChange={() => handleCategoryChange("Mystery")}
                            />
                            <span className="text-sm font-medium text-gray-700">
                            Mystery
                            </span>
                          </label>
                        </li>
                        <li>
                          <label className="inline-flex items-center gap-2">
                            <input
                              type="checkbox"
                              id="Clothing"
                              className="size-5 rounded-sm border-gray-300"
                              checked={selectedCategories.includes("Fictional")}
                              onChange={() => handleCategoryChange("Fictional")}
                            />
                            <span className="text-sm font-medium text-gray-700">
                            Fictional
                            </span>
                          </label>
                        </li>
                        
                      </ul>
                    </div>
                  </div>
                </details>
              </div>

              <div className="relative">
                <details className="group [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600">
                    <span className="text-sm font-medium"> Price </span>
                    <span className="transition group-open:-rotate-180">
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
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </span>
                  </summary>

                  <div className="z-50 group-open:absolute group-open:top-auto group-open:mt-2 ltr:group-open:start-0">
                    <div className="w-96 rounded-sm border border-gray-200 bg-white">
                      <header className="flex items-center justify-between p-4">
                        <span className="text-sm text-gray-700">
                          Highest price: {findHighestPrice(products)}
                        </span>
                        <button
                          type="button"
                          className="text-sm text-gray-900 underline underline-offset-4"
                          onClick={() => setPriceRange({ min: 0, max: 100000 })}
                        >
                          Reset
                        </button>
                      </header>

                      <div className="border-t border-gray-200 p-4">
                        <div className="flex justify-between gap-4">
                          <label className="flex items-center gap-2">
                            <span className="text-sm text-gray-600">Rs</span>
                            <input
                              type="number"
                              id="min"
                              placeholder="From"
                              className="w-full rounded-md border-gray-200 shadow-xs sm:text-sm"
                              value={priceRange.min}
                              onChange={handlePriceChange}
                            />
                          </label>

                          <label className="flex items-center gap-2">
                            <span className="text-sm text-gray-600">Rs</span>
                            <input
                              type="number"
                              id="max"
                              placeholder="To"
                              className="w-full rounded-md border-gray-200 shadow-xs sm:text-sm"
                              value={priceRange.max}
                              onChange={handlePriceChange}
                            />
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </details>
              </div>

              <input
                type="text"
                placeholder="Search products..."
                className="border border-gray-300 rounded-sm px-4 py-1 text-gray-700"
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </div>
          </div>

          <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {filteredProducts.length === 0 ? (
              <p>No Products Found</p>
            ) : (
              filteredProducts.map((product) => {
                return (
                  <li key={product.productId}>
                    <a
                      href="/customer/product"
                      className="group relative block overflow-hidden"
                    >
                      <img
                        src={product.productImage}
                        alt="product Image"
                        className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
                      />

                      <div className="relative border border-gray-100 bg-white p-6">
                        <p className="text-gray-700">
                          {product.productPrice} Rs
                        </p>

                        <h3 className="text-lg font-medium text-gray-900">
                          {product.productName}
                        </h3>

                        <p className="mt-1.5 line-clamp-3 text-gray-700">
                          {product.productDescription}
                        </p>

                        <Link to="/customer/cart">
                          <form className="mt-4 flex gap-4">
                            <button className="block w-full rounded-sm bg-gray-100 px-4 py-3 text-sm font-medium text-gray-900 transition hover:scale-105">
                              Add to Cart
                            </button>
                          </form>
                        </Link>
                      </div>
                    </a>
                  </li>
                );
              })
            )}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default CustomerHomePage;
