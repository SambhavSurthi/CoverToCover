import React from "react";

const Hero = () => {
  return (
    <div className="hero-section">
      <section className="bg-gray-900 text-white">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-gradient text-3xl font-extrabold text-transparent sm:text-5xl">
              Welcome to CoverToCover
              <span className="sm:block"> "Your Next Great Read Awaits" </span>
            </h1>

            <style>
              {`
                .text-gradient {
                  background-image: linear-gradient(90deg, #f59e0b, #ef4444, #8b5cf6);
                  background-size: 300%;
                  background-clip: text;
                  -webkit-background-clip: text;
                  color: transparent;
                  animation: gradient-move 2s infinite;
                }

                @keyframes gradient-move {
                  0% { background-position: 0% 50%; }
                  50% { background-position: 100% 50%; }
                  100% { background-position: 0% 50%; }
                }
              `}
            </style>

            <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
              Discover a world of books, from timeless classics to bestsellers.
              Shop, explore, and let your next adventure begin.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                className="block w-full rounded border border-blue-500 bg-blue-500 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                href="/signup"
              >
                Browse Books
              </a>

              <a
                className="block w-full rounded border border-blue-500 px-12 py-3 text-sm font-medium text-white hover:bg-blue-500 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                href="#about-us"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
