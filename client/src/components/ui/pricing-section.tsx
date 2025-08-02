import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, User, School, Crown, Smartphone, Trophy, Award, Headphones } from "lucide-react";

export default function PricingSection() {
  const scrollToCTA = () => {
    document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dame-dark mb-4">
            Simple, Affordable Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The lowest cost for comprehensive chess education ever possible for schools and families.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Individual Plan */}
          <Card className="relative hover:shadow-xl transition-all">
            <CardHeader className="text-center pb-2">
              <div className="w-16 h-16 bg-dame-blue rounded-xl flex items-center justify-center mx-auto mb-4">
                <User className="text-white w-8 h-8" />
              </div>
              <CardTitle className="text-2xl text-dame-dark">Individual</CardTitle>
              <p className="text-gray-600">Perfect for single students</p>
            </CardHeader>
            <CardContent>
              <div className="text-center mb-8">
                <div className="text-4xl font-bold text-dame-dark mb-2">
                  ₹500<span className="text-lg text-gray-500">/month</span>
                </div>
                <div className="text-sm text-gray-600">Per student (10-month tenure)</div>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <Check className="text-green-500 mr-3 w-4 h-4" />
                  <span className="text-gray-700">100,000+ puzzles</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-green-500 mr-3 w-4 h-4" />
                  <span className="text-gray-700">800+ video lessons</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-green-500 mr-3 w-4 h-4" />
                  <span className="text-gray-700">AI-powered curriculum</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-green-500 mr-3 w-4 h-4" />
                  <span className="text-gray-700">Progress tracking</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-green-500 mr-3 w-4 h-4" />
                  <span className="text-gray-700">Live bot matches</span>
                </li>
              </ul>

              <Button 
                onClick={scrollToCTA}
                className="w-full bg-dame-blue text-white hover:bg-blue-700"
              >
                Start Free Trial
              </Button>
            </CardContent>
          </Card>

          {/* School Plan - Featured */}
          <Card className="relative hover:shadow-2xl transition-all transform scale-105 border-2 border-dame-blue">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-dame-gold text-dame-dark px-4 py-2 rounded-full text-sm font-bold">
                Most Popular
              </div>
            </div>
            
            <CardHeader className="text-center pb-2 bg-gradient-to-br from-dame-blue to-blue-700 text-white rounded-t-lg">
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-4">
                <School className="text-dame-blue w-8 h-8" />
              </div>
              <CardTitle className="text-2xl">School Program</CardTitle>
              <p className="text-blue-100">Complete solution for schools</p>
            </CardHeader>
            <CardContent className="bg-gradient-to-br from-dame-blue to-blue-700 text-white">
              <div className="text-center mb-8">
                <div className="text-4xl font-bold mb-2">
                  ₹300<span className="text-lg text-blue-200">/month</span>
                </div>
                <div className="text-sm text-blue-200">Per student (School receives ₹200 retainer)</div>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <Check className="text-dame-gold mr-3 w-4 h-4" />
                  <span>Everything in Individual</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-dame-gold mr-3 w-4 h-4" />
                  <span>24 free teacher training sessions</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-dame-gold mr-3 w-4 h-4" />
                  <span>Classroom management tools</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-dame-gold mr-3 w-4 h-4" />
                  <span>Data dashboards</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-dame-gold mr-3 w-4 h-4" />
                  <span>Tournament creation</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-dame-gold mr-3 w-4 h-4" />
                  <span>School revenue sharing</span>
                </li>
              </ul>

              <Button 
                onClick={scrollToCTA}
                className="w-full bg-dame-gold text-dame-dark hover:bg-yellow-400"
              >
                Contact for Demo
              </Button>
            </CardContent>
          </Card>

          {/* Premium Plan */}
          <Card className="relative hover:shadow-xl transition-all">
            <CardHeader className="text-center pb-2">
              <div className="w-16 h-16 bg-dame-red rounded-xl flex items-center justify-center mx-auto mb-4">
                <Crown className="text-white w-8 h-8" />
              </div>
              <CardTitle className="text-2xl text-dame-dark">Premium</CardTitle>
              <p className="text-gray-600">With dedicated tutor</p>
            </CardHeader>
            <CardContent>
              <div className="text-center mb-8">
                <div className="text-4xl font-bold text-dame-dark mb-2">
                  ₹25,000<span className="text-lg text-gray-500">/month</span>
                </div>
                <div className="text-sm text-gray-600">Full-time chess tutor included</div>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <Check className="text-green-500 mr-3 w-4 h-4" />
                  <span className="text-gray-700">Everything in School Program</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-green-500 mr-3 w-4 h-4" />
                  <span className="text-gray-700">Dedicated full-time tutor</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-green-500 mr-3 w-4 h-4" />
                  <span className="text-gray-700">Personalized coaching</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-green-500 mr-3 w-4 h-4" />
                  <span className="text-gray-700">Advanced tournament prep</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-green-500 mr-3 w-4 h-4" />
                  <span className="text-gray-700">Priority support</span>
                </li>
              </ul>

              <Button 
                onClick={scrollToCTA}
                className="w-full bg-dame-red text-white hover:bg-red-700"
              >
                Contact Sales
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Additional Benefits */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-dame-blue to-dame-red rounded-3xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">All Plans Include</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="flex flex-col items-center">
                <Smartphone className="w-8 h-8 mb-2" />
                <span>Cross-platform access</span>
              </div>
              <div className="flex flex-col items-center">
                <Trophy className="w-8 h-8 mb-2" />
                <span>Monthly tournaments</span>
              </div>
              <div className="flex flex-col items-center">
                <Award className="w-8 h-8 mb-2" />
                <span>Achievement certificates</span>
              </div>
              <div className="flex flex-col items-center">
                <Headphones className="w-8 h-8 mb-2" />
                <span>24/7 support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
