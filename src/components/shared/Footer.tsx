'use client';
import Logo from "@/assets/svgs/Logo";
// import Logo from "@/assets/svgs/logo2.png";
import { Facebook, Instagram, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  // const navLinks = [
  //   { href: "/", label: "Home" },
  //   { href: "/products", label: "App Products" },
  //   { href: "/about", label: "About Us" },
  //   { href: "/testimonial", label: "Testimonial" },
  //   { href: "/blogs", label: "Blogs" },
  //   { href: "/contact", label: "Contact Us" },
  // ];

  // const socialLinks = [
  //   { href: "#", icon: Facebook },
  //   { href: "#", icon: Instagram },
  //   { href: "#", icon: X },
  // ];
  return (
    // <footer classNameName="bg-white border-t border-gray-200 py-24">
    //   <div classNameName="max-w-6xl mx-auto px-4 text-center">
    //     <div classNameName="flex flex-col items-center mb-6">
    //       <div classNameName="flex items-center space-x-2">
    //         <h1 classNameName="text-2xl font-black flex items-center">
    //           <Logo />
    //           Next Mart
    //         </h1>
    //       </div>
    //       <p classNameName="text-gray-600 mt-3 w-1/2 text-xs leading-6">
    //         Save big this Black Friday with unbeatable deals on tech, home
    //         essentials, fashion, and more! Limited stock.
    //       </p>
    //     </div>

    //     <hr />
    //     <ul classNameName="flex justify-center space-x-6 text-sm text-gray-800 font-medium my-4">
    //       {navLinks.map((link) => (
    //         <li key={link.href}>
    //           <Link href={link.href} classNameName="hover:text-purple-600">
    //             {link.label}
    //           </Link>
    //         </li>
    //       ))}
    //     </ul>

    //     <div classNameName="flex justify-center space-x-4">
    //       {socialLinks.map(({ href, icon: Icon }, index) => (
    //         <Link
    //           href={href}
    //           key={index}
    //           classNameName="text-gray-600 hover:text-purple-600"
    //         >
    //           <Icon classNameName="w-5 h-5" />
    //         </Link>
    //       ))}
    //     </div>
    //   </div>
    // </footer>
    // --------------------
    <footer className="">
      <div className="mx-auto grid max-w-screen-xl gap-y-8 gap-x-12 px-4 py-10 sm:px-20 md:grid-cols-2 xl:grid-cols-4 xl:px-10">
        <div className="max-w-sm">
          <div className="mb-6 flex h-10 items-center space-x-2 bg-purple-700">
            {/* <Image
              className="h-full object-contain"
              src="/images/logo-circle.png"
              alt="logo"
              width={50} // Add this
              height={54} // Add this
            /> */}
          <Logo />
            <span className="text-2xl font-bold">Basa Khuji.com</span>
          </div>
          <div className="text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis ad a
            officia ea expedita!
          </div>
        </div>
        <div className="">
          <div className="mt-4 mb-2 font-medium xl:mb-4">Guides</div>
          <nav aria-label="Guides Navigation" className="text-gray-500">
            <ul className="space-y-3">
              <li>
                <a className="hover:text-blue-600 hover:underline" href="#">
                  How to make a footer
                </a>
              </li>
              <li>
                <a className="hover:text-blue-600 hover:underline" href="#">
                  Designing your app
                </a>
              </li>
              <li>
                <a className="hover:text-blue-600 hover:underline" href="#">
                  Getting help from the community
                </a>
              </li>
              <li>
                <a className="hover:text-blue-600 hover:underline" href="#">
                  Pricing vs Hourly Rate
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="">
          <div className="mt-4 mb-2 font-medium xl:mb-4">Links</div>
          <nav aria-label="Footer Navigation" className="text-gray-500">
            <ul className="space-y-3">
              <li>
                <a className="hover:text-blue-600 hover:underline" href="#">
                  Pricing
                </a>
              </li>
              <li>
                <a className="hover:text-blue-600 hover:underline" href="#">
                  Demo
                </a>
              </li>
              <li>
                <a className="hover:text-blue-600 hover:underline" href="#">
                  Press
                </a>
              </li>
              <li>
                <a className="hover:text-blue-600 hover:underline" href="#">
                  Support Hub
                </a>
              </li>
              <li>
                <a className="hover:text-blue-600 hover:underline" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="">
          <div className="mt-4 mb-2 font-medium xl:mb-4">
            Support Us on Product Hunt
          </div>
          <div className="flex flex-col">
            <div className="mb-4">
              <a
                href="https://www.producthunt.com/products/Apple?utm_source=badge-follow&utm_medium=badge&utm_souce=badge-Apple"
                target="_blank"
              >
                <Image
                  src="https://api.producthunt.com/widgets/embed-image/v1/follow.svg?post_id=100070&theme=light"
                  alt="Apple - Think&#0032;Different | Product Hunt"
                  style={{ width: "250px", height: "54px" }}
                  width="250"
                  height="54"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t">
        <div className="mx-auto flex max-w-screen-xl flex-col gap-y-4 px-4 py-3 text-center text-gray-500 sm:px-20 lg:flex-row lg:justify-between lg:text-left xl:px-10">
          <p className="">© 2022 Boleno | All Rights Reserved</p>
          <p className="-order-1 sm:order-none">Made with ❤️ Remotely</p>
          <p className="">
            <a className="" href="#">
              Privacy Policy
            </a>
            <span>|</span>
            <a className="" href="#">
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
