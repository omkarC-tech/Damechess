import { Crown, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

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
            {/* <div className="flex space-x-4">
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
            </div> */}
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/courses" className="hover:text-white transition-colors">Courses</Link></li>
              <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li> {/* ✅ Added */}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/refund" className="hover:text-white transition-colors">Refund Policy</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>📍 Pune, Maharashtra, India</li>
              <li>📞 <a href="tel:+91 98216 79475" className="hover:text-white">+91 98216 79475</a></li>
              <li>✉️ <a href="mailto:contact@technewity.com" className="hover:text-white">contact@technewity.com</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 DameChess Academy. All rights reserved. Made with ❤️ for young chess enthusiasts.</p>
        </div>
      </div>
    </footer>
  );
}
