import Image from "next/image"; // Added Image import
import rightImg from "@/assets/svgs/right.svg";
import leftImg from "@/assets/svgs/left.svg";
import createAccount from "@/assets/svgs/creatAccount.svg";
import findHome from "@/assets/svgs/findhome.svg";
import quickProcess from "@/assets/svgs/quekProccess.svg";
import arrow from "@/assets/svgs/arrow.svg";

const WeAreHere = () => {
  return (
    <div className="relative bg-white py-20 overflow-hidden">
      {/* Background illustrations */}
      <Image
        src={rightImg}
        alt="Right Illustration"
        className="absolute left-0 bottom-0 h-full object-contain z-0"
      />
      <Image
        src={leftImg}
        alt="Left Illustration"
        className="absolute right-0 bottom-0 h-full object-contain z-0"
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
          It’s easy to start with us—just follow these simple steps.
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
              Opening an account is quick and easy—start your journey now.
            </p>
          </div>

          {/* Arrow */}
          <div className="hidden md:block">
          <Image
                src={arrow}
                width={400}
                height={400}
                alt="arrow"
                className="mb-4"
              />
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center max-w-sm">
            <div className="w-36 h-36 rounded-full flex items-center justify-center mb-4">
              <Image src={findHome} alt="Find Home" />
            </div>
            <h3 className="font-semibold text-lg">Find Home</h3>
            <p className="text-gray-500 text-sm mt-2">
              Complete your profile to attract attention from potential clients.
            </p>
          </div>

          {/* Arrow */}
          <div className="hidden md:block">
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
              Apply and get matched with your preferred properties quickly and easily.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeAreHere;
