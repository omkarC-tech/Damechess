import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Play, Sparkles, Zap } from "lucide-react";
import logoDark from "@assets/WhatsApp Image 2025-07-30 at 21.12.51_923cbd96_1754123644630.jpg";

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
    <section className="min-h-screen pt-20 pb-16 relative overflow-hidden perspective-3d">
      {/* Dynamic Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 via-transparent to-orange-400/20"></div>
      
      {/* Animated 3D Chess Pieces Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 text-8xl text-white animate-float3d chess-piece">♔</div>
        <div className="absolute top-40 right-20 text-6xl text-yellow-300 animate-chess-float chess-piece" style={{animationDelay: '1s'}}>♕</div>
        <div className="absolute bottom-32 left-1/4 text-7xl text-blue-300 animate-float3d chess-piece" style={{animationDelay: '2s'}}>♖</div>
        <div className="absolute bottom-40 right-10 text-9xl text-purple-300 animate-chess-float chess-piece" style={{animationDelay: '0.5s'}}>♗</div>
        <div className="absolute top-60 left-1/2 text-6xl text-green-300 animate-float3d chess-piece" style={{animationDelay: '1.5s'}}>♘</div>
        <div className="absolute top-1/3 right-1/3 text-5xl text-red-300 animate-chess-float chess-piece" style={{animationDelay: '3s'}}>♙</div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }, (_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/30 rounded-full animate-float3d"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          <div className="text-white animate-slide-up">
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="text-yellow-400 w-8 h-8 animate-pulse" />
              <span className="text-yellow-400 font-semibold text-lg">Transform Your Child's Mind</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold leading-tight mb-6">
              Master 
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"> Chess</span> 
              <br />
              Like Never Before
            </h1>
            
            <p className="text-xl mb-8 text-gray-200 max-w-lg leading-relaxed">
              Join 10,000+ kids and teens who've discovered the joy of chess through our revolutionary smart curriculum that grows with your child.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                onClick={scrollToCTA}
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-10 py-6 text-xl font-bold hover:from-yellow-300 hover:to-orange-400 transition-all transform hover:scale-105 shadow-2xl rounded-2xl"
                size="lg"
              >
                <Zap className="mr-3 h-6 w-6" />
                Start Free Journey
              </Button>
              <Button 
                variant="outline" 
                className="border-3 border-white/50 text-white px-10 py-6 text-xl font-bold hover:bg-white/10 hover:border-white transition-all glass-effect rounded-2xl"
                size="lg"
              >
                <Play className="mr-3 h-6 w-6" />
                Watch Magic
              </Button>
            </div>
            
            {/* Animated Stats */}
            <div id="hero-stats" className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20">
              <div className="text-center transform hover:scale-110 transition-all">
                <div className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  {Math.floor(counters.puzzles).toLocaleString()}+
                </div>
                <div className="text-gray-300 font-medium">Chess Puzzles</div>
              </div>
              <div className="text-center transform hover:scale-110 transition-all">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  {Math.floor(counters.videos)}+
                </div>
                <div className="text-gray-300 font-medium">Video Lessons</div>
              </div>
              <div className="text-center transform hover:scale-110 transition-all">
                <div className="text-4xl font-bold bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent">
                  {Math.floor(counters.students).toLocaleString()}+
                </div>
                <div className="text-gray-300 font-medium">Happy Students</div>
              </div>
            </div>
          </div>

          {/* Revolutionary 3D Chess Experience */}
          <div className="flex justify-center animate-scale-in perspective-3d">
            <div className="relative transform-3d">
              {/* Main 3D Chess Board */}
              <div className="relative">
                <div className="w-96 h-96 bg-gradient-to-br from-amber-200 via-amber-300 to-amber-100 rounded-3xl shadow-2xl transform rotate-12 hover:rotate-6 transition-all duration-700 transform-3d">
                  {/* Glowing effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-3xl blur-xl"></div>
                  
                  {/* Chess Board Pattern with 3D effect */}
                  <div className="relative grid grid-cols-8 grid-rows-8 w-full h-full rounded-3xl overflow-hidden">
                    {Array.from({ length: 64 }, (_, i) => {
                      const row = Math.floor(i / 8);
                      const col = i % 8;
                      const isLight = (row + col) % 2 === 0;
                      return (
                        <div 
                          key={i} 
                          className={`${isLight ? "bg-amber-100 hover:bg-amber-200" : "bg-amber-800 hover:bg-amber-700"} transition-colors duration-300 transform hover:scale-105`}
                        />
                      );
                    })}
                  </div>
                  
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 shimmer-bg animate-shimmer opacity-30 rounded-3xl"></div>
                </div>
                
                {/* Floating 3D Chess Pieces with enhanced animations */}
                <div className="absolute -top-8 -left-8 text-6xl animate-float3d chess-piece filter drop-shadow-lg">👑</div>
                <div className="absolute -top-6 -right-10 text-7xl animate-chess-float chess-piece filter drop-shadow-lg" style={{animationDelay: '1s'}}>♗</div>
                <div className="absolute -bottom-10 -left-6 text-6xl animate-float3d chess-piece filter drop-shadow-lg" style={{animationDelay: '2s'}}>♘</div>
                <div className="absolute -bottom-8 -right-8 text-7xl animate-chess-float chess-piece filter drop-shadow-lg" style={{animationDelay: '0.5s'}}>♖</div>
                
                {/* Orbiting elements */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-24 h-24 animate-rotate3d">
                    <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full absolute top-0 left-1/2 transform -translate-x-1/2 shadow-lg"></div>
                    <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full absolute bottom-0 left-1/2 transform -translate-x-1/2 shadow-lg"></div>
                    <div className="w-7 h-7 bg-gradient-to-r from-green-400 to-teal-500 rounded-full absolute top-1/2 right-0 transform -translate-y-1/2 shadow-lg"></div>
                    <div className="w-5 h-5 bg-gradient-to-r from-pink-400 to-red-500 rounded-full absolute top-1/2 left-0 transform -translate-y-1/2 shadow-lg"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
