import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import {
  User,
  Crown,
  Shield
} from "lucide-react";

export default function PricingSection() {
  const scrollToCTA = () => {
    document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="pricing"
      className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-2 rounded-full text-lg font-semibold">
              Choose Your Plan
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-6">
            Simple & Affordable
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect plan for your child's chess journey. All plans
            include live sessions, tournaments & resources.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          
          {/* Monthly Plan */}
          <Card className="relative hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-pink-200 bg-white/90">
            <CardHeader className="text-center pb-6 bg-gradient-to-br from-orange-400 to-pink-500 text-white rounded-t-lg">
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md">
                <User className="text-orange-500 w-8 h-8" />
              </div>
              <CardTitle className="text-2xl font-bold">Monthly Plan</CardTitle>
              <p className="text-gray-100 text-sm">For regular learners</p>
            </CardHeader>
            <CardContent className="p-6">
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-orange-600 mb-1">₹2500.00</div>
                <div className="text-sm line-through text-gray-400 mb-1">₹3000.00</div>
                <div className="text-green-600 text-sm font-semibold">You Save ₹500.00</div>
              </div>
              <ul className="space-y-3 mb-6 text-sm text-gray-700">
                <li>✓ Weekly 1.5 hrs interactive sessions</li>
                <li>✓ Weekly practice tournaments</li>
                <li>✓ Access to class recordings & resources</li>
              </ul>
              <div className="flex gap-3">
                <Button onClick={scrollToCTA} className="w-full bg-orange-400 hover:bg-orange-500 text-white">
                  Book Demo
                </Button>
                <Button onClick={scrollToCTA} className="w-full bg-gradient-to-r from-pink-400 to-orange-500 text-white">
                  Enroll
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* 3 Months Plan */}
          <Card className="relative hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-purple-300 bg-white/95">
            <CardHeader className="text-center pb-6 bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-t-lg">
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md">
                <Shield className="text-purple-500 w-8 h-8" />
              </div>
              <CardTitle className="text-2xl font-bold">3 Months Plan</CardTitle>
              <p className="text-gray-100 text-sm">For consistent growth</p>
            </CardHeader>
            <CardContent className="p-6">
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-purple-600 mb-1">₹6000.00</div>
                <div className="text-sm line-through text-gray-400 mb-1">₹9000.00</div>
                <div className="text-green-600 text-sm font-semibold">You Save ₹3000.00</div>
              </div>
              <ul className="space-y-3 mb-6 text-sm text-gray-700">
                <li>✓ Weekly 1.5 hrs interactive sessions</li>
                <li>✓ Weekly practice tournaments</li>
                <li>✓ Access to class recordings & resources</li>
                <li>✓ 2 Compensation classes & 1 tournament prep session</li>
              </ul>
              <div className="flex gap-3">
                <Button onClick={scrollToCTA} className="w-full bg-purple-500 hover:bg-pink-500 text-white">
                  Book Demo
                </Button>
                <Button onClick={scrollToCTA} className="w-full bg-purple-500 hover:bg-pink-500 text-white">
                  Enroll
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* 6 Months Plan */}
          <Card className="relative hover:shadow-2xl transition-all transform hover:-translate-y-2 border-2 border-gradient-to-r from-yellow-400 to-red-500 bg-white">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
              <div className="bg-gradient-to-r from-yellow-400 to-red-500 text-white px-5 py-2 rounded-full text-sm font-bold shadow-xl">
                ⭐ Best Value
              </div>
            </div>
            <CardHeader className="text-center pb-6 bg-gradient-to-br from-yellow-400 to-red-500 text-white rounded-t-lg mt-6">
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md">
                <Crown className="text-yellow-500 w-8 h-8" />
              </div>
              <CardTitle className="text-2xl font-bold">6 Months Plan</CardTitle>
              <p className="text-gray-100 text-sm">Max learning & savings</p>
            </CardHeader>
            <CardContent className="p-6">
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-yellow-600 mb-1">₹11000.00</div>
                <div className="text-sm line-through text-gray-400 mb-1">₹18000.00</div>
                <div className="text-green-600 text-sm font-semibold">You Save ₹7000.00</div>
              </div>
              <ul className="space-y-3 mb-6 text-sm text-gray-700">
                <li>✓ Weekly 1.5 hrs interactive sessions</li>
                <li>✓ Weekly practice tournaments</li>
                <li>✓ Access to class recordings & resources</li>
                <li>✓ 5 Compensation classes & 2 tournament prep sessions</li>
              </ul>
              <div className="flex gap-3">
                <Button onClick={scrollToCTA} className="w-full bg-yellow-500 hover:bg-yellow-600 text-white">
                  Book Demo
                </Button>
                <Button onClick={scrollToCTA} className="w-full bg-gradient-to-r from-yellow-400 to-red-500 text-white">
                  Enroll
                </Button>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  );
}
