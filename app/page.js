'use client'

import BrandSection from "@/components/HomeSections/BrandSection";
import HeroSection from "@/components/HomeSections/HeroSection";
import RegisterTrademark from "@/components/HomeSections/RegisterTrademark";
import BenifitsSection from '@/components/HomeSections/BenifitsSection'
import AboutSection from "@/components/HomeSections/AboutSection";
import Testimonial from "@/components/HomeSections/Testimonial";
import PricingSection from "@/components/HomeSections/PricingSection";

export default function Home() {
  return (

    <>

      <HeroSection />
      <RegisterTrademark />
      <BenifitsSection />
      <PricingSection />
      <BrandSection />
      <AboutSection />
      <Testimonial />
      

    </>
  );
}
