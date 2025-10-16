"use client";
import HeroSection from "./components/HeroSection";
import HeroSlider from "./components/HeroSlider";
import FeaturesSection from "./components/FeaturesSection";
import StatsSection from "./components/StatsSection";
import ServicesSection from "./components/ServicesSection";
import CTASection from "./components/HomeCTASection";
import TestimonialsSection from "./components/TestimonialsSection";

export default function Home(): JSX.Element {
  return (
    <>
      <HeroSlider />
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
      <ServicesSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}