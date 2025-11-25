import { Crown, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">

          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <img src="/damechess-logo.png" alt="DameChess" className="h-16 w-auto object-contain" />
              <span className="text-2xl font-extrabold tracking-tighter text-white ml-1">
                Dame<span className="text-dame-orange">Chess</span>
              </span>
            </div>
            <p className="text-gray-300 font-medium mb-6 leading-relaxed">
              Empowering young minds through AI-powered chess education. Join the revolution in chess learning.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-dame-orange transition-colors">
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-dame-orange transition-colors">
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-dame-orange transition-colors">
                <Twitter className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-dame-orange transition-colors">
                <Youtube className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Quick Links</h3>
            <ul className="space-y-4 text-gray-300 font-medium">
              <li><Link to="/" className="hover:text-dame-orange transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-dame-orange transition-colors">About Us</Link></li>
              <li><Link to="/courses" className="hover:text-dame-orange transition-colors">Courses</Link></li>
              <li><Link to="/blog" className="hover:text-dame-orange transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Support</h3>
            <ul className="space-y-4 text-gray-300 font-medium">
              <li><Link to="/terms" className="hover:text-dame-orange transition-colors">Terms of Service</Link></li>
              <li><Link to="/privacy" className="hover:text-dame-orange transition-colors">Privacy Policy</Link></li>
              <li><Link to="/contact" className="hover:text-dame-orange transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Contact Us</h3>
            <ul className="space-y-4 text-gray-300 font-medium">
              <li className="flex items-start gap-3">
                <span>📍</span>
                <span>Pune, Maharashtra, India</span>
              </li>
              <li className="flex items-center gap-3">
                <span>📞</span>
                <a href="tel:+919821679475" className="hover:text-dame-orange">+91 98216 79475</a>
              </li>
              <li className="flex items-center gap-3">
                <span>✉️</span>
                <a href="mailto:contact@technewity.com" className="hover:text-dame-orange">contact@technewity.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} DameChess Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
