import { useEffect } from "react";
import { useLocation } from "wouter";

import Navigation from "@/components/ui/navigation";
import HeroSection from "@/components/ui/hero-section";
import FeaturesSection from "@/components/ui/features-section";
import BenefitsSection from "@/components/ui/benefits-section";
import PricingSection from "@/components/ui/pricing-section";
import TestimonialsSection from "@/components/ui/testimonials-section";
import CTASection from "@/components/ui/cta-section";
import FAQSection from "@/components/ui/faq-section";
import Footer from "@/components/ui/footer";

export default function Home() {
  const [location] = useLocation();

  useEffect(() => {
    const url = new URL(window.location.href);
    const sectionId = url.searchParams.get("scrollTo");
    if (sectionId) {
      const el = document.getElementById(sectionId);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100); // delay to ensure elements have rendered
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <BenefitsSection />
      <PricingSection />
      <TestimonialsSection />
      <CTASection />
      <FAQSection />
      <Footer />
    </div>
  );
}
