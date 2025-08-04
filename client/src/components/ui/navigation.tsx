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
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="bg-transparent backdrop-blur-xl fixed w-full top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          {/* Logo + Text */}
          <div className="flex items-center space-x-3">
            <img
              src={logoImage}
              alt="Dame Chess Academy Logo"
              className="w-12 h-12 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            />
            <div className="text-white font-bold leading-tight">
  <div className="flex items-center space-x-1 text-2xl">
    <span className="text-blue-900">D</span>

    {/* ♘ Knight piece replacing A */}
    <span className="w-8 h-8 flex items-center justify-center rounded-md bg-gradient-to-tr from-yellow-200 via-orange-300 to-red-400 shadow-lg text-black font-extrabold border border-white scale-110 animate-bounce-slow">
      ♘
    </span>

    <span className="text-red-600">M</span>
    <span className="text-red-600">E</span>
  </div>
  <div className="text-sm font-semibold text-black pl-1 tracking-wide">
    Chess Academy
  </div>
</div>


          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {["features", "benefits", "pricing", "testimonials"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-black hover:text-yellow-400 font-semibold transition-all hover:scale-105 relative group"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("cta")}
              className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white hover:from-yellow-600 hover:to-orange-600 px-6 py-3 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Start Free Trial
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6 text-white" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col space-y-4 mt-8">
                {["features", "benefits", "pricing", "testimonials"].map(
                  (item) => (
                    <button
                      key={item}
                      onClick={() => scrollToSection(item)}
                      className="text-left text-black hover:text-yellow-400 font-medium transition-colors py-2"
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </button>
                  )
                )}
                <Button
                  onClick={() => scrollToSection("cta")}
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
