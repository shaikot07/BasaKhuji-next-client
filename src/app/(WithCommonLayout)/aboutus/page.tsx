
import React from "react";
import Image from "next/image";

import bgImg from "@/assets/svgs/aboutus-banner.svg";
import videoBg from "@/assets/videoBg.jpg";
import rightImg from "@/assets/svgs/right.svg";
import leftImg from "@/assets/svgs/left.svg";
import createAccount from "@/assets/svgs/creatAccount.svg";
import findHome from "@/assets/svgs/findhome.svg";
import quickProcess from "@/assets/svgs/quekProccess.svg";
import arrow from "@/assets/svgs/arrow.svg";

import OurTeam from "@/components/modules/aboutUs/OurTeam";
import Contact from "@/components/modules/aboutUs/Contact";

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
              Secure your{" "}
              <span className="underline decoration-orange-500 underline-offset-4">
                family&apos;s
              </span>
              <br />
              Dream home.
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Our founders Dustin Moskovitz and Justin Rosenstein met while
              leading Engineering.
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
                <p className="text-sm text-gray-600">
                  Cumulative trading volume
                </p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className=" py-16 px-6 rounded-lg ">
            <h4 className="text-xl font-semibold mb-6">Who we are?</h4>
            <p className="text-gray-700 mb-8">
              Our founders Dustin Moskovitz & Justin Rosenstein met leading
              Engineering teams at Facebook. As operations scaled, they grew
              frustrated by how difficult coordinate.
            </p>
            <hr />
            <h4 className="text-xl font-semibold mb-6 mt-6">Our Mission</h4>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod incididunt ut labore et dolore aliqua.
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
      {/* We’r here to help you get your dream home section  */}
      <div className="relative bg-white py-20  overflow-hidden">
        {/* Background illustrations */}
        <Image
          src={rightImg}
          alt="Left Illustration"
          className="absolute left-0 bottom-0 h-full object-contain z-0"
        />
        <Image
          src={leftImg}
          alt="Right Illustration"
          className="absolute right-0 bottom-0 h-full object-contain z-0 transform "
        />

        {/* Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-semibold text-black mb-4">
            We’re here to help <br />
            <span className="font-bold wavy-underline text-black">
              you get your dream home
            </span>
          </h2>
          <p className="text-gray-600 mb-12 mt-6">
            It’s easy to start with us with these simple steps
          </p>
          {/* Steps */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-6">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center max-w-sm">
              <div className="w-36 h-36 rounded-full flex items-center justify-center mb-4">
                <Image src={createAccount} alt="Create Account" />
              </div>
              <h3 className="font-semibold text-lg">Create Account</h3>
              <p className="text-gray-500 text-sm mt-2">
                It’s very easy to open an account and start your journey.
              </p>
            </div>

            {/* Arrow */}
            <div className="hidden md:block">
              {/* <svg width="40" height="20" viewBox="0 0 40 20" fill="none">
              <path
                d="M0 10H38M38 10L30 2M38 10L30 18"
                stroke="black"
                strokeWidth="2"
              />
            </svg> */}
              <Image src={arrow} width={400} height={400} alt="arrow" />
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center max-w-sm ">
              <div className="w-36 h-36 rounded-full flex items-center justify-center mb-4">
                <Image src={findHome} alt="Find Home" />
              </div>
              <h3 className="font-semibold text-lg">Find Home</h3>
              <p className="text-gray-500 text-sm mt-2">
                Complete your profile with all the info to get attention of
                client.
              </p>
            </div>

            {/* Arrow */}
            <div className="hidden md:block">
              {/* <svg width="40" height="20" viewBox="0 0 40 20" fill="none">
              <path
                d="M0 10H38M38 10L30 2M38 10L30 18"
                stroke="black"
                strokeWidth="2"
              />
            </svg> */}
              <Image
                src={arrow}
                width={400}
                height={400}
                alt="arrow"
                className="mb-4"
              />
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center max-w-sm">
              <div className="w-36 h-36 rounded-full flex items-center justify-center mb-4">
                <Image src={quickProcess} alt="Quick Process" />
              </div>
              <h3 className="font-semibold text-lg">Quick Process</h3>
              <p className="text-gray-500 text-sm mt-2">
                Apply & get your preferable jobs with all the requirements and
                get it.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* testyminonial section */}
      <div className="bg-[#F5EDE8] py-20 ">
        {/* <Testimonials /> */}
        <OurTeam />
      </div>
      <Contact />
    </div>
  );
};

export default aboutUsPage;
