import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Linkedin, Facebook, Instagram, MapPin, Mail } from "lucide-react";
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
    <header className={cn(
      "fixed w-full top-0 z-50 transition-all duration-300",
      isScrolled ? "shadow-md" : ""
    )}>
      {/* Top Bar */}
      <div className="flex w-full h-10 md:h-12 text-white text-sm font-medium relative z-50">
        {/* Social Icons Section - Orange Background */}
        <div className="bg-dame-orange px-6 md:px-10 flex items-center justify-center gap-4 shrink-0">
          <a href="#" className="hover:text-dame-dark transition-colors"><Linkedin className="w-4 h-4" /></a>
          <a href="#" className="hover:text-dame-dark transition-colors"><Facebook className="w-4 h-4" /></a>
          <a href="#" className="hover:text-dame-dark transition-colors"><Instagram className="w-4 h-4" /></a>
        </div>

        {/* Info Section - Dark Background */}
        <div className="bg-dame-dark flex-grow flex items-center justify-between px-4 md:px-10">
          {/* Announcement / Blank Space */}
          <div className="hidden md:flex items-center flex-grow mx-4 h-full">
            <span className="text-dame-orange font-bold mr-3 shrink-0 text-xs uppercase tracking-widest flex items-center h-full">Announcement</span>
            <div className="relative flex-grow h-full overflow-hidden flex items-center">
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: "-100%" }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                  repeatType: "loop"
                }}
                className="whitespace-nowrap text-white tracking-wide text-sm font-bold"
              >
                Participants of our Blue Heavens School & Jr. College chess club get flat 20% discount
              </motion.div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex items-center gap-6 ml-auto">
            <div className="hidden md:flex items-center gap-2">
              <MapPin className="w-4 h-4 text-dame-orange" />
              <span>Pune, India</span>
            </div>
            <a href="mailto:contact@damechess.com" className="flex items-center gap-2 hover:text-dame-orange transition-colors">
              <Mail className="w-4 h-4 text-dame-orange" />
              <span>contact@damechess.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        className={cn(
          "w-full bg-white transition-all duration-300 border-b border-gray-100",
          isScrolled ? "py-2" : "py-4"
        )}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center relative">
            {/* Logo */}
            <Link href="/">
              <a className="flex items-center gap-2 group">
                <img src="/damechess-logo.png" alt="DameChess" className="h-12 md:h-14 w-auto object-contain bg-white rounded-full p-1" />
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
    </header>
  );
}
