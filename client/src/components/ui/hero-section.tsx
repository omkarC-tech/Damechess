import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

export default function HeroSection() {
  const [counters, setCounters] = useState({
    puzzles: 0,
    videos: 0,
    students: 0,
  });

  useEffect(() => {
    const animateCounters = () => {
      const targets = { puzzles: 100000, videos: 800, students: 10000 };
      const increments = { 
        puzzles: targets.puzzles / 100, 
        videos: targets.videos / 100,
        students: targets.students / 100 
      };

      let current = { puzzles: 0, videos: 0, students: 0 };
      
      const interval = setInterval(() => {
        let allComplete = true;
        
        Object.keys(targets).forEach((key) => {
          const targetKey = key as keyof typeof targets;
          if (current[targetKey] < targets[targetKey]) {
            current[targetKey] += increments[targetKey];
            allComplete = false;
          } else {
            current[targetKey] = targets[targetKey];
          }
        });
        
        setCounters({ ...current });
        
        if (allComplete) {
          clearInterval(interval);
        }
      }, 20);
    };

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        animateCounters();
        observer.disconnect();
      }
    });

    const heroElement = document.getElementById('hero-stats');
    if (heroElement) {
      observer.observe(heroElement);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToCTA = () => {
    document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-dame-blue via-blue-600 to-dame-dark relative overflow-hidden">
      {/* Animated Background Chess Pieces */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 text-6xl text-white animate-float">♔</div>
        <div className="absolute top-40 right-20 text-5xl text-white animate-pulse-slow">♕</div>
        <div className="absolute bottom-20 left-1/4 text-4xl text-white animate-bounce-slow">♖</div>
        <div className="absolute bottom-40 right-10 text-7xl text-white animate-float" style={{animationDelay: '1s'}}>♗</div>
        <div className="absolute top-60 left-1/2 text-5xl text-white animate-pulse-slow" style={{animationDelay: '2s'}}>♘</div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Master Chess with 
              <span className="text-dame-gold"> AI-Powered</span> 
              Learning
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Join 10,000+ kids and teens learning chess through our revolutionary AI curriculum that adapts to your child's progress and learning style.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToCTA}
                className="bg-dame-gold text-dame-dark px-8 py-4 text-lg font-bold hover:bg-yellow-400 transition-all transform hover:scale-105 shadow-lg"
                size="lg"
              >
                Start Your Journey - Free Trial
              </Button>
              <Button 
                variant="outline" 
                className="border-2 border-white text-white px-8 py-4 text-lg font-bold hover:bg-white hover:text-dame-blue transition-all"
                size="lg"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>
            
            {/* Stats */}
            <div id="hero-stats" className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-blue-400">
              <div className="text-center">
                <div className="text-3xl font-bold text-dame-gold">
                  {Math.floor(counters.puzzles).toLocaleString()}+
                </div>
                <div className="text-blue-200">Puzzles</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-dame-gold">
                  {Math.floor(counters.videos)}+
                </div>
                <div className="text-blue-200">Video Lessons</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-dame-gold">
                  {Math.floor(counters.students).toLocaleString()}+
                </div>
                <div className="text-blue-200">Happy Students</div>
              </div>
            </div>
          </div>

          {/* Hero Chess Board Animation */}
          <div className="flex justify-center">
            <div className="relative">
              {/* 3D Chess Board Effect */}
              <div className="w-80 h-80 bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl shadow-2xl transform rotate-6 hover:rotate-3 transition-transform duration-500">
                {/* Chess Board Pattern */}
                <div className="grid grid-cols-8 grid-rows-8 w-full h-full rounded-2xl overflow-hidden">
                  {Array.from({ length: 64 }, (_, i) => {
                    const row = Math.floor(i / 8);
                    const col = i % 8;
                    const isLight = (row + col) % 2 === 0;
                    return (
                      <div 
                        key={i} 
                        className={isLight ? "bg-amber-100" : "bg-amber-800"} 
                      />
                    );
                  })}
                </div>
              </div>
              
              {/* Floating Chess Pieces */}
              <div className="absolute -top-6 -left-6 text-4xl animate-float chess-piece">👑</div>
              <div className="absolute -top-4 -right-8 text-5xl animate-float chess-piece" style={{animationDelay: '1s'}}>♗</div>
              <div className="absolute -bottom-8 -left-4 text-4xl animate-float chess-piece" style={{animationDelay: '2s'}}>♘</div>
              <div className="absolute -bottom-6 -right-6 text-5xl animate-float chess-piece" style={{animationDelay: '0.5s'}}>♖</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
