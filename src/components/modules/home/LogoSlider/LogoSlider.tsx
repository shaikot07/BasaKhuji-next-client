// import React from 'react';
// // import './LogoSlider.css';
// // import Image from 'next/image';
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";

// // const logos = [
// //     "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png",
// //     "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png",
// //     "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png",
// //     "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png",
// //     "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png",
// //     "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png",
// //     "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png",
// //   ];
// const LogoSlider = () => {
//     const responsive = {
//         desktop: {
//           breakpoint: { max: 3000, min: 1024 },
//           items: 3,
//           slidesToSlide: 3 // optional, default to 1.
//         },
//         tablet: {
//           breakpoint: { max: 1024, min: 464 },
//           items: 2,
//           slidesToSlide: 2 // optional, default to 1.
//         },
//         mobile: {
//           breakpoint: { max: 464, min: 0 },
//           items: 1,
//           slidesToSlide: 1 // optional, default to 1.
//         }
//       };
//     return (
//     //     <div className="slider">
//     //   <div className="slide-track">
//     //     {[...logos, ...logos].map((src, index) => (
//     //       <div className="slide" key={index}>
//     //         <img src={src} alt={`logo-${index}`} width={250} height={100} />
//     //       </div>
//     //     ))}
//     //   </div>
//     // </div>

//     <Carousel
//   swipeable={false}
//   draggable={false}
//   showDots={true}
//   responsive={responsive}
//   ssr={true} // means to render carousel on server-side.
//   infinite={true}
//   autoPlay={this.props.deviceType !== "mobile" ? true : false}
//   autoPlaySpeed={1000}
//   keyBoardControl={true}
//   customTransition="all .5"
//   transitionDuration={500}
//   containerClass="carousel-container"
//   removeArrowOnDeviceType={["tablet", "mobile"]}
//   deviceType={this.props.deviceType}
//   dotListClass="custom-dot-list-style"
//   itemClass="carousel-item-padding-40-px"
// >
//   <div>Item 1</div>
//   <div>Item 2</div>
//   <div>Item 3</div>
//   <div>Item 4</div>
// </Carousel>;
//     );
// };

// export default LogoSlider;

"use client";

import React from "react";
import dynamic from "next/dynamic";
import "react-multi-carousel/lib/styles.css";
import NMContainer from "@/components/ui/core/NMContainer";
import Image from "next/image";

const Carousel = dynamic(() => import("react-multi-carousel"), { ssr: false });

const logos = [
    "https://homy-next.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fp_logo_06.f182f304.png&w=128&q=75",
    "https://homy-next.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fp_logo_05.a156d89a.png&w=128&q=75",
    "https://homy-next.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fp_logo_03.924d9499.png&w=128&q=75",
    "https://homy-next.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fp_logo_01.39c33bc4.png&w=256&q=75",
    "https://homy-next.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fp_logo_02.4822eaed.png&w=128&q=75",
    // "https://upload.wikimedia.org/wikipedia/commons/a/a1/Flag_of_Canada.svg",
    // "https://upload.wikimedia.org/wikipedia/commons/a/a2/Flag_of_the_United_States.svg",
    // "https://upload.wikimedia.org/wikipedia/commons/a/a0/Flag_of_the_United_Kingdom.svg"
  ];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const LogoSlider = ({ deviceType }: { deviceType: string }) => {
  return (
    //  <NMContainer>
      <div className="bg-[#FF6725] ">
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={false}
        responsive={responsive}
        arrows={false} 
        ssr={false}
        infinite={true}
        autoPlay={deviceType !== "mobile"}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        deviceType={deviceType}
        itemClass="flex justify-center" // ✅ Center each item
        // dotListClass="custom-dot-list-style"
        //   itemClass="carousel-item-padding-40-px"
      >
        {logos.map((src, index) => (
          <div key={index} className="">
            <Image src={src} alt={`logo-${index}`} width={103} height={31} />
          </div>
        ))}
      </Carousel>
      </div>
    // </NMContainer>
  );
};

export default LogoSlider;
