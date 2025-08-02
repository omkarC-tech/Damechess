import { Crown, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-dame-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center relative">
                <div className="text-white text-xl">♗</div>
                <Crown className="absolute -top-1 -right-1 text-dame-gold w-4 h-4" />
              </div>
              <div>
                <div className="flex items-center">
                  <span className="text-dame-blue font-bold text-lg">D</span>
                  <span className="text-white bg-dame-blue px-1 rounded text-lg font-bold">A</span>
                  <span className="text-dame-red font-bold text-lg">ME</span>
                </div>
                <div className="text-xs text-gray-400">Chess Academy</div>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Empowering young minds through AI-powered chess education.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-dame-gold transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-dame-gold transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-dame-gold transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-dame-gold transition-colors">
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Programs</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Beginner Chess</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Intermediate Level</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Advanced Training</a></li>
              <li><a href="#" className="hover:text-white transition-colors">School Programs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Tournament Prep</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li>
                <button 
                  onClick={() => scrollToSection('cta')}
                  className="hover:text-white transition-colors text-left"
                >
                  Contact Us
                </button>
              </li>
              <li><a href="#" className="hover:text-white transition-colors">Technical Support</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Parent Resources</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Teacher Training</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 DameChess Academy. All rights reserved. Made with ❤️ for young chess enthusiasts.</p>
        </div>
      </div>
    </footer>
  );
}
