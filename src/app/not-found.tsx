import Link from "next/link";

import notFound from "@/assets/svgs/notFound.svg";
import { Button } from "@/components/ui/button";

const NotFoundPage = () => {
  return (
    <div>
      <div
        className="flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${notFound.src})`,
        }}
      >
        <div className="max-w-md mx-auto text-center">
          <div className="text-9xl font-bold text-[#FF3F25] mb-4">404</div>
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Oops! It looks like you&apos;re lost.
          </h1>
          <p className="text-base text-gray-600 mb-8">
            The page you&apos;re looking for isn&apos;t available. Try to search
            again or use the go to
          </p>

          <Link href="/">
            <Button className="hover:bg-[#FF3F25]">Back to Home</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
