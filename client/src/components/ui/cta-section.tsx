import { Button } from "@/components/ui/button";
import ContactForm from "@/components/ui/contact-form";
import { Mail, Phone, MapPin, Play } from "lucide-react";

export default function CTASection() {
  return (
    <section id="cta" className="py-20 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="mb-6">
            <span className="bg-white/20 text-white px-6 py-2 rounded-full text-lg font-semibold">Join the Adventure</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your Chess Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of kids and teens who are already mastering chess with our interactive platform. Start your free trial today!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg"
              className="bg-yellow-400 text-purple-900 px-8 py-4 text-lg font-bold hover:bg-yellow-300 transition-all transform hover:scale-105 shadow-lg"
            >
              Start Free Trial - No Credit Card Required
            </Button>
            <Button 
              size="lg"
              variant="outline" 
              className="border-2 border-white text-white px-8 py-4 text-lg font-bold hover:bg-white hover:text-purple-600 transition-all"
            >
              <Play className="mr-2 h-5 w-5" />
              Schedule Demo
            </Button>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-dame-dark mb-6">Get Started Today</h3>
                <ContactForm />
              </div>
              
              <div className="lg:pl-8">
                <h3 className="text-2xl font-bold text-dame-dark mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-dame-blue rounded-lg flex items-center justify-center">
                      <Mail className="text-white w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-dame-dark">Email</h4>
                      <p className="text-gray-600">support@damechess.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-dame-red rounded-lg flex items-center justify-center">
                      <Phone className="text-white w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-dame-dark">Phone</h4>
                      <p className="text-gray-600">+91 98765 43210</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-dame-gold rounded-lg flex items-center justify-center">
                      <MapPin className="text-white w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-dame-dark">Location</h4>
                      <p className="text-gray-600">Pune, Maharashtra, India</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl">
                  <h4 className="font-semibold text-dame-dark mb-3">Why Choose DameChess?</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>✓ AI-powered personalized learning</li>
                    <li>✓ 100,000+ puzzles and 800+ videos</li>
                    <li>✓ Proven academic improvement</li>
                    <li>✓ Expert teacher training included</li>
                    <li>✓ 24/7 support and guidance</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
