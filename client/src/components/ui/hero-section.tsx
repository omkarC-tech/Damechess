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

      {/* Subtle Floating Particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 8 }, (_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-float3d"
            style={{
              top: `${20 + Math.random() * 60}%`,
              left: `${10 + Math.random() * 80}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: `6s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          <div className="text-white animate-slide-up">
            <div className="flex items-center gap-3 mb-6">
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
                className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-10 py-6 text-xl font-bold hover:from-blue-600 hover:to-indigo-700 transition-all transform hover:scale-105 shadow-2xl rounded-2xl"
                size="lg"
              >
                Start Free Journey
              </Button>
              <Button 
                variant="outline" 
                className="border-3 border-white/50 text-white px-10 py-6 text-xl font-bold hover:bg-white/10 hover:border-white transition-all glass-effect rounded-2xl"
                size="lg"
              >
                <Play className="mr-3 h-6 w-6" />
                Watch Demo
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

          {/* Professional Hero Image */}
          <div className="flex justify-center animate-scale-in">
            <div className="relative">
              <div className="w-96 h-96 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl shadow-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl mb-6 text-indigo-600">♔</div>
                  <h3 className="text-2xl font-bold text-indigo-700">Master Chess</h3>
                  <p className="text-indigo-600">Strategic Thinking for Life</p>
                </div>
              </div>
              
              {/* Subtle floating elements */}
              <div className="absolute -top-4 -right-4 text-3xl text-indigo-500 animate-float3d">♕</div>
              <div className="absolute -bottom-4 -left-4 text-3xl text-indigo-500 animate-float3d" style={{animationDelay: '1s'}}>♗</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
