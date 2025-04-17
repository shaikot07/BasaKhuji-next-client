

import HeroSection from "@/components/modules/home/HeroSection";
import LogoSlider from "@/components/modules/home/LogoSlider/LogoSlider";
import Testimonials from "@/components/modules/home/Testimonials";
import UpCommingCity from "@/components/modules/home/UpcommingCity";
import WeAreHere from "@/components/modules/home/WeAreHere/WeAreHere";


const HomePage = () => {
  return (
    <div >
      <HeroSection />
      <UpCommingCity />
      <WeAreHere/>
      <Testimonials />
      <LogoSlider />
      {/* Add any additional components or sections here */}
     
    </div>
  );
};

export default HomePage;
