import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import logoImage from "@assets/logodamechess_1754125181154.jpg";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="bg-gradient-to-r from-purple-900/95 to-pink-900/95 backdrop-blur-xl fixed w-full top-0 z-50 border-b border-purple-500/30 shadow-xl">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          {/* Professional Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src={logoImage} 
              alt="Dame Chess Academy Logo" 
              className="w-12 h-12 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            />
            <div className="font-bold leading-tight">
  <div className="flex items-center space-x-1 text-2xl">
    <span className="text-white">D</span>
    <span className="bg-gradient-to-br from-red-600 to-blue-700 text-black w-6 h-6 flex items-center justify-center rounded-sm shadow-md backdrop-blur-sm">
      A
    </span>
    <span className="text-white">M</span>
    <span className="text-white">E</span>
  </div>
  <div className="text-sm font-semibold text-white pl-1 tracking-wide">Chess Academy</div>
</div>




          </div>

          {/* Modern Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('features')}
              className="text-white hover:text-yellow-300 font-semibold transition-all hover:scale-105 relative group"
            >
              Features
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-400 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button 
              onClick={() => scrollToSection('benefits')}
              className="text-white hover:text-yellow-300 font-semibold transition-all hover:scale-105 relative group"
            >
              Benefits
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-400 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="text-white hover:text-yellow-300 font-semibold transition-all hover:scale-105 relative group"
            >
              Pricing
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-400 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-white hover:text-yellow-300 font-semibold transition-all hover:scale-105 relative group"
            >
              Stories
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-400 group-hover:w-full transition-all duration-300"></span>
            </button>
            <Button 
              onClick={() => scrollToSection('cta')}
              className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white hover:from-yellow-600 hover:to-orange-600 px-6 py-3 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Start Free Trial
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col space-y-4 mt-8">
                <button 
                  onClick={() => scrollToSection('features')}
                  className="text-left text-gray-700 hover:text-dame-blue font-medium transition-colors py-2"
                >
                  Features
                </button>
                <button 
                  onClick={() => scrollToSection('benefits')}
                  className="text-left text-gray-700 hover:text-dame-blue font-medium transition-colors py-2"
                >
                  Benefits
                </button>
                <button 
                  onClick={() => scrollToSection('pricing')}
                  className="text-left text-gray-700 hover:text-dame-blue font-medium transition-colors py-2"
                >
                  Pricing
                </button>
                <button 
                  onClick={() => scrollToSection('testimonials')}
                  className="text-left text-gray-700 hover:text-dame-blue font-medium transition-colors py-2"
                >
                  Stories
                </button>
                <Button 
                  onClick={() => scrollToSection('cta')}
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 w-full rounded-xl"
                >
                  Start Free Trial
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
