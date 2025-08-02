import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Crown } from "lucide-react";

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
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center relative">
              <div className="text-white text-2xl">♗</div>
              <Crown className="absolute -top-2 -right-1 text-dame-gold text-lg w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center">
                <span className="text-dame-blue font-bold text-xl">D</span>
                <span className="text-white bg-dame-blue px-1 rounded text-xl font-bold">A</span>
                <span className="text-dame-red font-bold text-xl">ME</span>
              </div>
              <div className="text-sm text-gray-600 font-medium">Chess Academy</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('features')}
              className="text-gray-700 hover:text-dame-blue font-medium transition-colors"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('benefits')}
              className="text-gray-700 hover:text-dame-blue font-medium transition-colors"
            >
              Benefits
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="text-gray-700 hover:text-dame-blue font-medium transition-colors"
            >
              Pricing
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-gray-700 hover:text-dame-blue font-medium transition-colors"
            >
              Stories
            </button>
            <Button 
              onClick={() => scrollToSection('cta')}
              className="bg-dame-blue text-white hover:bg-blue-700 transition-all transform hover:scale-105"
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
                  className="bg-dame-blue text-white hover:bg-blue-700 w-full"
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
