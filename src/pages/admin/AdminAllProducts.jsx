import React from 'react'
import cocacola from "/Products/cocacola.webp";
import clothing from "/Products/clothing.jpeg";
import headphones from "/Products/headphones.avif";
import shoes from "/Products/shoes.jpeg";
import { Outlet, Link } from "react-router-dom";

const AdminAllProducts = () => {
  return (
    <div>
        <section>
        <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <header>
            <h2 class="text-xl font-bold text-gray-900 sm:text-3xl">
              Product Collection
            </h2>

            {/* <p class="mt-4 max-w-md text-gray-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
              praesentium cumque iure dicta incidunt est ipsam, officia dolor
              fugit natus?
            </p> */}
          </header>

          <div class="mt-8 sm:flex sm:items-center sm:justify-between">
            <div class="block sm:hidden">
              <button class="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600">
                <span class="text-sm font-medium"> Filters & Sorting </span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-4 rtl:rotate-180"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            </div>

            <div class="hidden sm:flex sm:gap-4">
              <div class="relative">
                <details class="group [&_summary::-webkit-details-marker]:hidden">
                  <summary class="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600">
                    <span class="text-sm font-medium"> Category </span>

                    <span class="transition group-open:-rotate-180">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="size-4"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </span>
                  </summary>

                  <div class="z-50 group-open:absolute group-open:top-auto group-open:mt-2 ltr:group-open:start-0">
                    <div class="w-96 rounded-sm border border-gray-200 bg-white">
                      <header class="flex items-center justify-between p-4">
                        <span class="text-sm text-gray-700"> 0 Selected </span>

                        <button
                          type="button"
                          class="text-sm text-gray-900 underline underline-offset-4"
                        >
                          Reset
                        </button>
                      </header>

                      <ul class="space-y-1 border-t border-gray-200 p-4">
                        <li>
                          <label
                            for="FilterInStock"
                            class="inline-flex items-center gap-2"
                          >
                            <input
                              type="checkbox"
                              id="FilterInStock"
                              class="size-5 rounded-sm border-gray-300"
                            />

                            <span class="text-sm font-medium text-gray-700">
                              {" "}
                              Foods & Bevrages (5+){" "}
                            </span>
                          </label>
                        </li>

                        <li>
                          <label
                            for="FilterPreOrder"
                            class="inline-flex items-center gap-2"
                          >
                            <input
                              type="checkbox"
                              id="FilterPreOrder"
                              class="size-5 rounded-sm border-gray-300"
                            />

                            <span class="text-sm font-medium text-gray-700">
                              {" "}
                              Clothing (3+){" "}
                            </span>
                          </label>
                        </li>

                        <li>
                          <label
                            for="FilterOutOfStock"
                            class="inline-flex items-center gap-2"
                          >
                            <input
                              type="checkbox"
                              id="FilterOutOfStock"
                              class="size-5 rounded-sm border-gray-300"
                            />

                            <span class="text-sm font-medium text-gray-700">
                              {" "}
                              Footware (10+){" "}
                            </span>
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div>
                </details>
              </div>

              <div class="relative">
                <details class="group [&_summary::-webkit-details-marker]:hidden">
                  <summary class="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600">
                    <span class="text-sm font-medium"> Price </span>

                    <span class="transition group-open:-rotate-180">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="size-4"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </span>
                  </summary>

                  <div class="z-50 group-open:absolute group-open:top-auto group-open:mt-2 ltr:group-open:start-0">
                    <div class="w-96 rounded-sm border border-gray-200 bg-white">
                      <header class="flex items-center justify-between p-4">
                        <span class="text-sm text-gray-700">
                          {" "}
                          The highest price is $600{" "}
                        </span>

                        <button
                          type="button"
                          class="text-sm text-gray-900 underline underline-offset-4"
                        >
                          Reset
                        </button>
                      </header>

                      <div class="border-t border-gray-200 p-4">
                        <div class="flex justify-between gap-4">
                          <label
                            for="FilterPriceFrom"
                            class="flex items-center gap-2"
                          >
                            <span class="text-sm text-gray-600">$</span>

                            <input
                              type="number"
                              id="FilterPriceFrom"
                              placeholder="From"
                              class="w-full rounded-md border-gray-200 shadow-xs sm:text-sm"
                            />
                          </label>

                          <label
                            for="FilterPriceTo"
                            class="flex items-center gap-2"
                          >
                            <span class="text-sm text-gray-600">$</span>

                            <input
                              type="number"
                              id="FilterPriceTo"
                              placeholder="To"
                              class="w-full rounded-md border-gray-200 shadow-xs sm:text-sm"
                            />
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </details>
              </div>
            </div>

            {/* <div class="hidden sm:block">
              <label for="SortBy" class="sr-only">
                SortBy
              </label>

              <select
                id="SortBy"
                class="h-10 rounded-sm border-gray-300 text-sm"
              >
                <option>Sort By</option>
                <option value="Title, DESC">Title, DESC</option>
                <option value="Title, ASC">Title, ASC</option>
                <option value="Price, DESC">Price, DESC</option>
                <option value="Price, ASC">Price, ASC</option>
              </select>
            </div> */}
          </div>

          <ul class="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <li>
              <a
                href="/admin/product"
                class="group relative block overflow-hidden"
              >
                <img
                  src={cocacola}
                  alt=""
                  class="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
                />

                <div class="relative border border-gray-100 bg-white p-6">
                  <p class="text-gray-700">$49.99</p>

                  <h3 className="text-lg font-medium text-gray-900">
                    Wireless Headphones
                  </h3>

                  <p className="mt-1.5 line-clamp-3 text-gray-700">
                    Experience high-quality sound with our wireless headphones.
                    Perfect for music lovers and audiophiles.
                  </p>

                </div>
              </a>
            </li>

            <li>
              <a
                href="/admin/product"
                class="group relative block overflow-hidden"
              >
                <img
                  src={headphones}
                  alt=""
                  class="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
                />

                <div class="relative border border-gray-100 bg-white p-6">
                  <p class="text-gray-700">$49.99</p>

                  <h3 className="text-lg font-medium text-gray-900">
                    Smart Watch
                  </h3>

                  <p className="mt-1.5 line-clamp-3 text-gray-700">
                    Stay connected and track your fitness with our latest smart
                    watch. Stylish and functional for everyday use.
                  </p>

                </div>
              </a>
            </li>

            <li>
              <a
                href="/admin/product"
                class="group relative block overflow-hidden"
              >
                <img
                  src={shoes}
                  alt=""
                  class="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
                />

                <div class="relative border border-gray-100 bg-white p-6">
                  <p class="text-gray-700">$49.99</p>

                  <h3 className="text-lg font-medium text-gray-900">
                    Bluetooth Speaker
                  </h3>

                  <p className="mt-1.5 line-clamp-3 text-gray-700">
                    Enjoy your favorite tunes on the go with our portable
                    Bluetooth speaker. Compact and powerful sound.
                  </p>


                </div>
              </a>
            </li>

            <li>
              <a
                href="/admin/product"
                class="group relative block overflow-hidden"
              >
                <img
                  src={clothing}
                  alt=""
                  class="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
                />

                <div class="relative border border-gray-100 bg-white p-6">
                  <p class="text-gray-700">
                    $49.99
                    <span class="text-gray-400 line-through">$80</span>
                  </p>

                  <h3 class="mt-1.5 text-lg font-medium text-gray-900">
                    Wireless Headphones
                  </h3>

                  <p class="mt-1.5 line-clamp-3 text-gray-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Labore nobis iure obcaecati pariatur. Officiis qui, enim
                    cupiditate aliquam corporis iste.
                  </p>


                </div>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default AdminAllProducts