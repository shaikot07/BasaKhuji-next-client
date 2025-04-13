import React from "react";
import Image from "next/image";
import bgImg from "@/assets/svgs/aboutus-banner.svg"

const aboutUsPage = () => {
  return (
    <div>
      <div className="relative bg-[#FFF8F4] h-[362px] text-white overflow-hidden border-b-2 border-[#343434]">
        <div className="absolute inset-0">
          <Image
            src={bgImg}
            alt="Background Image"
            className="object-cover object-center w-full h-full"
            fill
          />
          {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}
        </div>

        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
          <h1 className="text-5xl font-bold leading-tight mb-4 text-black">
            About Agency
          </h1>
          {/* <p className="text-lg text-gray-300 mb-8">
            Discover amazing features and services that await you.
          </p> */}
         
        </div>
      </div>
      {/* second section */}
      <div className="relative z-10 px-6 py-16 lg:py-32 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Secure your <span className="underline decoration-orange-500 underline-offset-4">family&apos;s</span><br />
              Dream home.
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Our founders Dustin Moskovitz and Justin Rosenstein met while leading Engineering.
            </p>
            <button className="bg-[#FF6A22] hover:bg-[#e85e1b] text-white font-semibold py-2 px-6 rounded-md transition">
              Contact Us
            </button>

            <div className="flex gap-12 mt-10">
              <div>
                <h3 className="text-3xl font-bold">1.2%</h3>
                <p className="text-sm text-gray-600">Low interest rate</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold">$1.3b+</h3>
                <p className="text-sm text-gray-600">Cumulative trading volume</p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div>
            <h4 className="text-xl font-semibold mb-2">Who we are?</h4>
            <p className="text-gray-700 mb-6">
              Our founders Dustin Moskovitz & Justin Rosenstein met leading Engineering teams at Facebook.
              As operations scaled, they grew frustrated by how difficult coordinate.
            </p>

            <h4 className="text-xl font-semibold mb-2">Our Mission</h4>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut labore et dolore aliqua.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default aboutUsPage;
