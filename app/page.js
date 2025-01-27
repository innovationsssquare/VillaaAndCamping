"use client";
import HotelFooter from "@/components/Footercomponents/Footer";
import Herosection from "@/components/Herocomponents/Herosection";
import Allproperty from "@/components/Homecomponents/Allproperty";
import DestinationsCarousel from "@/components/Homecomponents/destinations";
import AnimatedTestimonialsDemo from "@/components/Homecomponents/Testimonials";

export default function LandingPage() {


  return (
   <main>
    <Herosection/>
    <DestinationsCarousel/>
    <Allproperty/>
    {/* <AnimatedTestimonialsDemo/> */}
    <HotelFooter/>
   </main>
  );
}
