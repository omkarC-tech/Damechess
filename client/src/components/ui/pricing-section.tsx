import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useLocation } from "wouter";

export default function PricingSection() {
  const [, setLocation] = useLocation();

  const handleAction = () => {
    setLocation("/contact");
  };

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold text-dame-orange mb-4">
            Simple & Affordable
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose a plan that works for you. All plans include live sessions, tournaments & resources.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">

          {/* Monthly Plan */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-transparent relative group hover:-translate-y-2 transition-all duration-300 hover:bg-orange-100 hover:border-dame-orange hover:shadow-2xl hover:shadow-orange-200/50">
            <div className="w-20 h-20 mx-auto mb-6">
              <img src="/pricing-silver.png" alt="Silver Plan" className="w-full h-full object-contain" />
            </div>
            <h3 className="text-2xl font-bold text-dame-dark mb-2">Monthly Plan</h3>
            <p className="text-gray-500 text-sm mb-6">For absolute beginners</p>

            <div className="mb-6">
              <span className="text-4xl font-bold text-dame-orange">₹3000.00</span>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-gray-400 text-lg line-through">₹3500.00</span>
                <span className="text-green-600 text-sm font-semibold">You Save ₹500.00</span>
              </div>
            </div>

            <div className="flex gap-3 mb-8">
              <Button onClick={handleAction} className="flex-1 bg-rose-500 hover:bg-rose-600 text-white rounded-lg font-bold">
                Enroll
              </Button>
              <Button onClick={handleAction} variant="outline" className="flex-1 border-dame-orange text-dame-orange hover:bg-orange-50 rounded-lg font-bold">
                Book Demo
              </Button>
            </div>

            <ul className="space-y-4">
              {[
                "Weekly 2 hrs interactive sessions",
                "Weekly practice tournaments",
                "Access to class recordings & resources"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                  <Check className="w-5 h-5 text-green-500 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 3 Months Plan (Featured) */}
          <div className="bg-gradient-to-b from-gray-900 to-black rounded-3xl p-8 shadow-2xl border-2 border-gray-800 relative transform scale-105 z-10 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/40 hover:border-dame-orange">
            <div className="w-24 h-24 mx-auto mb-6">
              <img src="/pricing-bronze.png" alt="Bronze Plan" className="w-full h-full object-contain" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">3 Months Plan</h3>
            <p className="text-gray-400 text-sm mb-6">For serious players</p>

            <div className="mb-6">
              <span className="text-4xl font-bold text-white">₹8000.00</span>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-gray-500 text-lg line-through">₹9000.00</span>
                <span className="text-yellow-400 text-sm font-semibold">You Save ₹1000.00</span>
              </div>
            </div>

            <div className="flex gap-3 mb-8">
              <Button onClick={handleAction} className="flex-1 bg-rose-500 hover:bg-rose-600 text-white rounded-lg font-bold">
                Enroll
              </Button>
              <Button onClick={handleAction} variant="outline" className="flex-1 border-white text-black bg-white hover:text-white before:bg-dame-dark rounded-lg font-bold">
                Book Demo
              </Button>
            </div>

            <ul className="space-y-4">
              {[
                "Weekly 2 hrs interactive sessions",
                "Weekly practice tournaments",
                "Access to class recordings & resources",
                "2 Compensation classes",
                "1 tournament prep session"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                  <Check className="w-5 h-5 text-green-400 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 6 Months Plan */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-transparent relative group hover:-translate-y-2 transition-all duration-300 hover:bg-orange-100 hover:border-dame-orange hover:shadow-2xl hover:shadow-orange-200/50">
            <div className="w-20 h-20 mx-auto mb-6">
              <img src="/pricing-gold.png" alt="Gold Plan" className="w-full h-full object-contain" />
            </div>
            <h3 className="text-2xl font-bold text-dame-dark mb-2">6 Months Plan</h3>
            <p className="text-gray-500 text-sm mb-6">For aspiring champions</p>

            <div className="mb-6">
              <span className="text-4xl font-bold text-dame-orange">₹16000.00</span>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-gray-400 text-lg line-through">₹18000.00</span>
                <span className="text-green-600 text-sm font-semibold">You Save ₹2000.00</span>
              </div>
            </div>

            <div className="flex gap-3 mb-8">
              <Button onClick={handleAction} className="flex-1 bg-rose-500 hover:bg-rose-600 text-white rounded-lg font-bold">
                Enroll
              </Button>
              <Button onClick={handleAction} variant="outline" className="flex-1 border-dame-orange text-dame-orange hover:bg-orange-50 rounded-lg font-bold">
                Book Demo
              </Button>
            </div>

            <ul className="space-y-4">
              {[
                "Weekly 2 hrs interactive sessions",
                "Weekly practice tournaments",
                "Access to class recordings & resources",
                "5 Compensation classes",
                "2 tournament prep sessions"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                  <Check className="w-5 h-5 text-green-500 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
