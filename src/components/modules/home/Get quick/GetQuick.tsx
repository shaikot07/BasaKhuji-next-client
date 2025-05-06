"use client";
import Image from "next/image";
import React from "react";
import img1 from "@/assets/img1.jpg";
import img2 from "@/assets//img2.webp";
const GetQuick = () => {
  return (
    <div className="mp-8 md:mt-16 mb-14">
      <section className=" py-12 px-6 md:px-16">
        <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-16">
          {/* <!-- Left: Image and estimate --> */}
          <div className="relative w-full md:w-1/3">
            <Image
              src={img1}
              width={150}
              alt="Building"
              className="rounded-xl shadow-lg w-full"
            />
            <div className="absolute bottom-4 left-4 bg-white p-4 rounded-xl shadow-md text-center w-64">
              <p className="text-gray-600 text-sm">Your estimate is in!</p>
              <p className="text-2xl font-semibold text-gray-800">
                $378,300.00
              </p>
              <Image
                src={img2}
                width={200}
                alt="Map"
                className="mt-2 rounded"
              />
            </div>
          </div>

          {/* <!-- Right: Text content --> */}
          <div className="w-full md:w-1/2">
            <p className="text-sm tracking-widest text-gray-500 uppercase mb-2">
              CB Estimate
            </p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Get quick{" "}
              <span className="underline decoration-orange-500 underline-offset-4">
                estimate
              </span>
              <br />
              on your <span className="text-gray-800">home.</span>
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Master your property&apos;s valuation for a poised entry into the
              real estate market, armed with self-assurance and insight.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
              <input
                type="email"
                placeholder="Your Email Address..."
                className="w-full sm:w-72 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md"
              >
                Find out
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-2">
              *For accurate info please{" "}
              <a href="#" className="underline">
                contact us
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetQuick;
