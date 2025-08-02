import Navigation from "@/components/ui/navigation";
import HeroSection from "@/components/ui/hero-section";
import FeaturesSection from "@/components/ui/features-section";
import BenefitsSection from "@/components/ui/benefits-section";
import PricingSection from "@/components/ui/pricing-section";
import TestimonialsSection from "@/components/ui/testimonials-section";
import CTASection from "@/components/ui/cta-section";
import Footer from "@/components/ui/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <BenefitsSection />
      <PricingSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
}
