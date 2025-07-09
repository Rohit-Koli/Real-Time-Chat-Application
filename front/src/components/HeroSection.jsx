import React from "react";

const HeroSection = () => {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 pt-16 sm:pt-24 sm:pb-32 lg:pt-40 lg:pb-48">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Connect with</span>
              <span className="block gradient-text">friends & teams</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Modern chat application with instant
              messaging, and everything you need to stay close to your favorite
              people.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
