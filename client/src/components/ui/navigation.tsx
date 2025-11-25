import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Courses", href: "/courses" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed w-full top-0 z-50 transition-all duration-300 border-b",
        isScrolled
          ? "bg-white/90 backdrop-blur-md border-gray-200 py-2 shadow-sm"
          : "bg-transparent border-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center relative">
          {/* Logo */}
          <Link href="/">
            <a className="flex items-center gap-2 group">
              <img src="/damechess-logo.png" alt="DameChess" className="h-14 w-auto object-contain" />
              <span className="text-2xl font-extrabold tracking-tighter text-dame-dark ml-1">
                Dame<span className="text-dame-orange">Chess</span>
              </span>
            </a>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-2 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href}>
                <a className="relative px-4 py-2 rounded-full text-base font-bold transition-colors group">
                  {location === link.href && (
                    <motion.div
                      layoutId="navbar-active"
                      className="absolute inset-0 bg-dame-orange/10 rounded-full"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span
                    className={cn(
                      "relative z-10 transition-colors duration-200",
                      location === link.href ? "text-dame-orange font-bold" : "text-gray-900 group-hover:text-dame-orange"
                    )}
                  >
                    {link.name}
                  </span>
                </a>
              </Link>
            ))}
          </div>



          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden text-gray-600">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-6 mt-8">
                {navLinks.map((link) => (
                  <Link key={link.name} href={link.href}>
                    <a
                      onClick={() => setIsOpen(false)}
                      className={`text-lg font-medium transition-colors hover:text-dame-orange ${location === link.href ? "text-dame-orange" : "text-gray-600"
                        }`}
                    >
                      {link.name}
                    </a>
                  </Link>
                ))}

              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
