import { useEffect, useState, useMemo } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Star, Users, Trophy, Gamepad2 } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  const [, setLocation] = useLocation();

  const scrollToCTA = () => {
    setLocation("/contact");
  };

  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["Like a Pro", "With Confidence", "The Smart Way"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <section id="home" className="pt-36 pb-16 md:pt-44 md:pb-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left space-y-8 animate-slide-up">
            <div className="inline-block">
              <span className="text-sm font-bold tracking-wider text-gray-900 uppercase">
                Transform Your Child's Mind
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-dame-dark leading-[1.1]">
              Master Chess <br />
              <span className="relative flex w-full overflow-hidden md:pb-4 md:pt-1 h-[1.2em]">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-extrabold text-dame-orange left-0"
                    initial={{ opacity: 0, y: "100%" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                          y: 0,
                          opacity: 1,
                        }
                        : {
                          y: titleNumber > index ? "-100%" : "100%",
                          opacity: 0,
                        }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-900 font-bold max-w-lg leading-relaxed">
              Join 1000+ kids and teens who've discovered the joy of chess
              through our revolutionary smart curriculum that grows with your
              child.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                onClick={scrollToCTA}
                className="bg-dame-orange hover:bg-orange-600 text-white px-8 py-6 text-lg font-bold rounded-xl shadow-lg shadow-orange-200 transition-all transform hover:scale-105"
              >
                Start Free Trial
              </Button>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-gray-100">
              <div className="flex flex-col items-center text-center gap-2">
                <div className="p-3 bg-orange-100 rounded-xl text-dame-orange">
                  <Star className="w-6 h-6 fill-current" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-dame-dark">4.8/5</div>
                  <div className="text-sm text-gray-900 font-bold">Ratings</div>
                </div>
              </div>

              <div className="flex flex-col items-center text-center gap-2">
                <div className="p-3 bg-blue-100 rounded-xl text-dame-blue">
                  <Users className="w-6 h-6 fill-current" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-dame-dark">2k+</div>
                  <div className="text-sm text-gray-500 font-medium">Students</div>
                </div>
              </div>

              <div className="flex flex-col items-center text-center gap-2">
                <div className="p-3 bg-red-100 rounded-xl text-dame-red">
                  <Trophy className="w-6 h-6 fill-current" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-dame-dark">72</div>
                  <div className="text-sm text-gray-500 font-medium">Titled Players</div>
                </div>
              </div>

              <div className="flex flex-col items-center text-center gap-2">
                <div className="p-3 bg-green-100 rounded-xl text-dame-green">
                  <Gamepad2 className="w-6 h-6 fill-current" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-dame-dark">500+</div>
                  <div className="text-sm text-gray-500 font-medium">Daily Games</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative lg:h-[600px] flex items-center justify-center animate-float3d">
            {/* Placeholder for the cartoon illustration */}
            {/* Placeholder for the cartoon illustration */}
            <div className="relative w-full max-w-2xl aspect-square flex items-center justify-center">
              <img
                src="/hero-characters.png"
                alt="Kids playing chess"
                className="relative z-10 w-[120%] h-[120%] object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
