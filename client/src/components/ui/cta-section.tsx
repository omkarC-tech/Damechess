import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

export default function CTASection() {
  const [, setLocation] = useLocation();

  const handleAction = () => {
    setLocation("/contact");
  };

  return (
    <section id="cta" className="py-20 bg-dame-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-64 h-64 bg-dame-orange rounded-full filter blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-dame-blue rounded-full filter blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Start Your Chess Journey?
        </h2>
        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Join thousands of kids and teens who are already mastering chess with our interactive platform.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={handleAction}
            size="lg"
            className="bg-dame-orange hover:bg-orange-600 text-white px-8 py-6 text-lg font-bold rounded-xl shadow-lg hover:shadow-orange-500/25 transition-all"
          >
            Start Free Trial
          </Button>
          <Button
            onClick={handleAction}
            size="lg"
            variant="outline"
            className="border-2 border-white text-black bg-white hover:text-white before:bg-dame-dark px-8 py-6 text-lg font-bold rounded-xl transition-all"
          >
            Schedule Demo
          </Button>
        </div>
      </div>
    </section>
  );
}
