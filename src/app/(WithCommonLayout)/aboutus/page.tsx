import React from "react";
import Image from "next/image";
import bgImg from "@/assets/svgs/aboutus-banner.svg"
import videoBg from "@/assets/videoBg.jpg"

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
          <h2 className="py-10">About us</h2>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Secure your <span className="underline decoration-orange-500 underline-offset-4">family&apos;s</span><br />
              Dream home.
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Our founders Dustin Moskovitz and Justin Rosenstein met while leading Engineering.
            </p>
            <button className="bg-[#FF6A22] hover:bg-[#e85e1b] text-white font-semibold py-2 px-6 rounded-md transition mt-2">
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
          <div className=" py-16 px-6 rounded-lg ">
            <h4 className="text-xl font-semibold mb-6">Who we are?</h4>
            <p className="text-gray-700 mb-8">
              Our founders Dustin Moskovitz & Justin Rosenstein met leading Engineering teams at Facebook.
              As operations scaled, they grew frustrated by how difficult coordinate.
            </p>
            <hr />
            <h4 className="text-xl font-semibold mb-6 mt-6">Our Mission</h4>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut labore et dolore aliqua.
            </p>
          </div>
        </div>
      </div>
      {/* video section  */}
      <div className="flex justify-center items-center py-8 px-4 bg-[#FFFFFF]">
      <div className="relative max-w-5xl w-full rounded-2xl overflow-hidden shadow-lg">
        <Image
          src={videoBg}
          alt="Video preview"
          className="w-full h-auto object-cover"
        />
        <button className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition">
            <svg
              className="w-10 h-10 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M6 4l10 6-10 6V4z" />
            </svg>
          </div>
        </button>
      </div>
    </div>
    </div>
  );
};

export default aboutUsPage;
