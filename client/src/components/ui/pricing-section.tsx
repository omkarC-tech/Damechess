import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, User, Crown, Smartphone, Trophy, Award, Headphones, Star, Zap } from "lucide-react";

export default function PricingSection() {
  const scrollToCTA = () => {
    document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <div className="mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-2 rounded-full text-lg font-semibold">Choose Your Plan</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-6">
            Simple & Affordable
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect plan for your child's chess journey. Both plans include everything needed to master chess.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Standard Plan */}
          <Card className="relative hover:shadow-2xl transition-all transform hover:-translate-y-2 border-2 border-blue-200 bg-white">
            <CardHeader className="text-center pb-6 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-t-lg">
              <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <User className="text-blue-500 w-10 h-10" />
              </div>
              <CardTitle className="text-3xl font-bold">Standard Plan</CardTitle>
              <p className="text-blue-100 text-lg">Perfect for individual learning</p>
            </CardHeader>
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <div className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                  ₹500
                </div>
                <div className="text-gray-600 text-lg">per month</div>
                <div className="text-sm text-gray-500 mt-2">10-month program</div>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4">
                    <Check className="text-white w-4 h-4" />
                  </div>
                  <span className="text-gray-700 font-medium">100,000+ interactive puzzles</span>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4">
                    <Check className="text-white w-4 h-4" />
                  </div>
                  <span className="text-gray-700 font-medium">800+ professional video lessons</span>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4">
                    <Check className="text-white w-4 h-4" />
                  </div>
                  <span className="text-gray-700 font-medium">Smart progress tracking</span>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4">
                    <Check className="text-white w-4 h-4" />
                  </div>
                  <span className="text-gray-700 font-medium">Live bot practice matches</span>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4">
                    <Check className="text-white w-4 h-4" />
                  </div>
                  <span className="text-gray-700 font-medium">Monthly tournaments & certificates</span>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4">
                    <Check className="text-white w-4 h-4" />
                  </div>
                  <span className="text-gray-700 font-medium">Cross-platform access</span>
                </li>
              </ul>

              <Button 
                onClick={scrollToCTA}
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white text-lg py-6 hover:from-blue-600 hover:to-blue-700 transition-all transform hover:scale-105 shadow-lg rounded-xl"
              >
                Start Free Trial
              </Button>
            </CardContent>
          </Card>

          {/* Premium Plan - Featured */}
          <Card className="relative hover:shadow-2xl transition-all transform hover:-translate-y-2 border-4 border-gradient-to-r from-yellow-400 to-orange-500 bg-white">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-3 rounded-full text-lg font-bold shadow-lg">
                🏆 Most Comprehensive
              </div>
            </div>
            
            <CardHeader className="text-center pb-6 bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 text-white rounded-t-lg mt-6">
              <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Crown className="text-purple-600 w-10 h-10" />
              </div>
              <CardTitle className="text-3xl font-bold">Premium Plan</CardTitle>
              <p className="text-purple-100 text-lg">With dedicated personal tutor</p>
            </CardHeader>
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <div className="text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
                  ₹25,000
                </div>
                <div className="text-gray-600 text-lg">per month</div>
                <div className="text-sm text-gray-500 mt-2">Full-time dedicated tutor included</div>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <div className="w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mr-4">
                    <Check className="text-white w-4 h-4" />
                  </div>
                  <span className="text-gray-700 font-medium">Everything in Standard Plan</span>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mr-4">
                    <Zap className="text-white w-4 h-4" />
                  </div>
                  <span className="text-gray-700 font-medium">Dedicated full-time chess tutor</span>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mr-4">
                    <Star className="text-white w-4 h-4" />
                  </div>
                  <span className="text-gray-700 font-medium">Personalized 1-on-1 coaching</span>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mr-4">
                    <Trophy className="text-white w-4 h-4" />
                  </div>
                  <span className="text-gray-700 font-medium">Advanced tournament preparation</span>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mr-4">
                    <Crown className="text-white w-4 h-4" />
                  </div>
                  <span className="text-gray-700 font-medium">Priority 24/7 support</span>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mr-4">
                    <Award className="text-white w-4 h-4" />
                  </div>
                  <span className="text-gray-700 font-medium">Custom learning roadmap</span>
                </li>
              </ul>

              <Button 
                onClick={scrollToCTA}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-lg py-6 hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105 shadow-lg rounded-xl"
              >
                Contact for Personal Tutor
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-10 text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-8">What You Get With Both Plans</h3>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="flex flex-col items-center transform hover:scale-110 transition-all">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-4">
                  <Smartphone className="w-8 h-8" />
                </div>
                <span className="font-semibold text-lg">Any Device Access</span>
                <span className="text-sm opacity-80">Phone, tablet, computer</span>
              </div>
              <div className="flex flex-col items-center transform hover:scale-110 transition-all">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-4">
                  <Trophy className="w-8 h-8" />
                </div>
                <span className="font-semibold text-lg">Monthly Tournaments</span>
                <span className="text-sm opacity-80">Compete & win prizes</span>
              </div>
              <div className="flex flex-col items-center transform hover:scale-110 transition-all">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-4">
                  <Award className="w-8 h-8" />
                </div>
                <span className="font-semibold text-lg">Certificates</span>
                <span className="text-sm opacity-80">Achievement recognition</span>
              </div>
              <div className="flex flex-col items-center transform hover:scale-110 transition-all">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-4">
                  <Headphones className="w-8 h-8" />
                </div>
                <span className="font-semibold text-lg">Expert Support</span>
                <span className="text-sm opacity-80">Always here to help</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
