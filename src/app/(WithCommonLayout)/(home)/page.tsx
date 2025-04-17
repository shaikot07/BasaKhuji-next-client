

import HeroSection from "@/components/modules/home/HeroSection";
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
     
    </div>
  );
};

export default HomePage;
