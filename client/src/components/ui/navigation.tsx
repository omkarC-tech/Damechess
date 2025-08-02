import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Crown, Sparkles } from "lucide-react";

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
    <nav className="glass-effect backdrop-blur-xl fixed w-full top-0 z-50 border-b border-white/20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-6">
          {/* Modern Logo */}
          <div className="flex items-center space-x-4">
            <div className="relative perspective-3d">
              <div className="w-14 h-14 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-2xl flex items-center justify-center shadow-2xl transform-3d hover:scale-110 transition-all duration-300">
                <div className="text-white text-3xl animate-chess-float">♔</div>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                  <Crown className="text-white w-3 h-3" />
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center">
                <span className="text-3xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  DameChess
                </span>
              </div>
              <div className="text-sm text-gray-600 font-medium">Chess Academy</div>
            </div>
          </div>

          {/* Modern Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('features')}
              className="text-gray-700 hover:text-indigo-600 font-semibold transition-all hover:scale-105 relative group"
            >
              Features
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button 
              onClick={() => scrollToSection('benefits')}
              className="text-gray-700 hover:text-indigo-600 font-semibold transition-all hover:scale-105 relative group"
            >
              Benefits
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="text-gray-700 hover:text-indigo-600 font-semibold transition-all hover:scale-105 relative group"
            >
              Pricing
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-gray-700 hover:text-indigo-600 font-semibold transition-all hover:scale-105 relative group"
            >
              Stories
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
            </button>
            <Button 
              onClick={() => scrollToSection('cta')}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 px-6 py-3 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <Sparkles className="mr-2 w-5 h-5" />
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
