

import GetQuick from "@/components/modules/home/Get quick/GetQuick";
import HeroSection from "@/components/modules/home/HeroSection";
import HomeNewCard from "@/components/modules/home/HomeNewCard.tsx/HomeNewCard";
import LogoSlider from "@/components/modules/home/LogoSlider/LogoSlider";
import ParaLux from "@/components/modules/home/ParaLux/ParaLux";
import Testimonials from "@/components/modules/home/Testimonials";
import Unlock from "@/components/modules/home/unlocl/Unlock";
import UpCommingCity from "@/components/modules/home/UpcommingCity";
import WeAreHere from "@/components/modules/home/WeAreHere/WeAreHere";
import { Suspense } from "react";

const HomePage = () => {
  const deviceType = typeof window !== 'undefined' ? 
    window.innerWidth < 768 ? 'mobile' : 
    window.innerWidth < 1024 ? 'tablet' : 'desktop' : 'desktop';

  return (
    <div className="">
      <Suspense fallback={<div>Loading...</div>}>
      <HeroSection />
      <UpCommingCity />
      <HomeNewCard />
      <WeAreHere/>
      <GetQuick />
      <Unlock />
      <Testimonials />
      <LogoSlider deviceType={deviceType} />
      {/* Add any additional components or sections here */}
     <ParaLux/>
     </Suspense>
    </div>
  );
};

export default HomePage;
