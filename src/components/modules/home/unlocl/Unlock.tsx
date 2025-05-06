import Image from 'next/image';
import React from 'react';
import un1 from '@/assets/svgs/un1.svg';
import un2 from '@/assets/svgs/un2.svg';
import un3 from '@/assets/svgs/un3.svg';
const Unlock = () => {
    return (
        <div className="relative bg-white py-20 overflow-hidden">
        {/* Background illustrations */}
        {/* <Image
          src={un1}
          alt="Right Illustration"
          className="absolute left-0 bottom-0 h-full object-contain z-0"
        />
        <Image
          src={un2}
          alt="Left Illustration"
          className="absolute right-0 bottom-0 h-full object-contain z-0"
        /> */}
  
        {/* Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-semibold text-black mb-4">
            We’re here to help <br />
            <span className="font-bold wavy-underline text-black">
              you get your dream home
            </span>
          </h2>
          <p className="text-gray-600 mb-12 mt-6">
            It’s easy to start with us—just follow these simple steps.
          </p>
  
          {/* Steps */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-6">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center max-w-sm">
              <div className="w-36 h-36 rounded-full flex items-center justify-center mb-4">
                <Image src={un1} alt="Buy a home" />
              </div>
              <h3 className="font-normal text-md">Buy a home</h3>
              <p className="text-gray-500 text-sm mt-2">
              Explore Basha khuji 50 + homes and uncover your ideal living space.
              </p>
            </div>
  
         
  
            {/* Step 2 */}
            <div className="flex flex-col items-center text-center max-w-sm">
              <div className="w-36 h-36 rounded-full flex items-center justify-center mb-4">
                <Image src={un2} alt="RENT A HOME" />
              </div>
              <h3 className="font-normal text-md">RENT A HOME</h3>
              <p className="text-gray-500 text-sm mt-2">
              Discover a rental you&apos;ll love on Basha khiju.com, thanks to  filters and tailored keywords.
              </p>
            </div>
  
         
            {/* Step 3 */}
            <div className="flex flex-col items-center text-center max-w-sm">
              <div className="w-36 h-36 rounded-full flex items-center justify-center mb-4">
                <Image src={un3} alt="SELL PROPERTY" />
              </div>
              <h3 className="font-normal text-md">SELL PROPERTY</h3>
              <p className="text-gray-500 text-sm mt-2">
              List, sell, thrive – with our top-notch real estate agency. It’s super easy & fun.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Unlock;