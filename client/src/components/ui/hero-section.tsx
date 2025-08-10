import { useState, useEffect } from "react";
import { useLocation } from "wouter"; // ✅ for detecting URL route
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

export default function HeroSection() {
  const [counters, setCounters] = useState({
    puzzles: 0,
    videos: 0,
    students: 0,
  });

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const [location] = useLocation(); // ✅ to detect query params

  // ✅ Scroll to home if ?scroll=home is in URL
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("scroll") === "home") {
      setTimeout(() => {
        document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
        window.history.replaceState({}, "", "/"); // ✅ optional: clean the URL
      }, 200); // slight delay to ensure DOM is ready
    }
  }, [location]);

  // Animate counters on scroll
  useEffect(() => {
    const animateCounters = () => {
      const targets = { puzzles: 10000, videos: 80, students: 1000 };
      const increments = {
        puzzles: targets.puzzles / 100,
        videos: targets.videos / 100,
        students: targets.students / 100,
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

    const heroElement = document.getElementById("hero-stats");
    if (heroElement) {
      observer.observe(heroElement);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToCTA = () => {
    document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen pt-16 pb-16 relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-45 z-[-10]"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dk5dqdowr/image/upload/v1754319590/randy-fath-G1yhU1Ej-9A-unsplash_phsugf.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          filter: "brightness(0.5) saturate(2.15)",
        }}
      ></div>

      {/* Light Particles */}
      <div className="absolute inset-0 z-10">
        {Array.from({ length: 10 }, (_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/40 rounded-full animate-float3d"
            style={{
              top: `${20 + Math.random() * 60}%`,
              left: `${10 + Math.random() * 80}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: `6s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          <div className="text-black animate-slide-up">
            <div className="flex items-center gap-3 mb-6 mt-12">
              <span className="text-amber-700 font-semibold text-lg">
                Transform Your Child's Mind
              </span>
            </div>

            <h1 className="text-6xl md:text-7xl font-bold leading-tight mb-6">
              Master{" "}
              <span className="animated-gradient-text bg-clip-text text-transparent">
                Chess
              </span>
              <br />
              Like Never Before
            </h1>

            <p className="text-xl mb-8 text-gray-800 max-w-lg leading-relaxed">
              Join 1000+ kids and teens who've discovered the joy of chess
              through our revolutionary smart curriculum that grows with your
              child.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                onClick={scrollToCTA}
                className="bg-gradient-to-r from-amber-600 to-yellow-500 text-white px-10 py-6 text-xl font-bold hover:from-amber-700 hover:to-yellow-600 transition-all transform hover:scale-105 shadow-lg rounded-2xl"
                size="lg"
              >
                Start Free Journey
              </Button>
              {/* <Button
                variant="outline"
                className="border-2 border-black/20 text-black px-10 py-6 text-xl font-bold hover:bg-black/10 hover:border-black transition-all rounded-2xl"
                size="lg"
              >
                <Play className="mr-3 h-6 w-6" />
                Watch Demo
              </Button> */}
            </div>
          </div>

          {/* Stats */}
          <div
            id="hero-stats"
            className="flex flex-col sm:flex-row gap-8 justify-around items-center mt-8"
          >
            <div className="text-center transform hover:scale-110 transition-all">
              <div className="text-4xl font-bold text-yellow-700 drop-shadow-md">
                {Math.floor(counters.puzzles).toLocaleString()}+
              </div>
              <div className="text-gray-800 font-medium">Chess Puzzles</div>
            </div>
            <div className="text-center transform hover:scale-110 transition-all">
              <div className="text-4xl font-bold text-lime-700 drop-shadow-md">
                {Math.floor(counters.videos)}+
              </div>
              <div className="text-gray-800 font-medium">Video Lessons</div>
            </div>
            <div className="text-center transform hover:scale-110 transition-all">
              <div className="text-4xl font-bold text-rose-600 drop-shadow-md">
                {Math.floor(counters.students).toLocaleString()}+
              </div>
              <div className="text-gray-800 font-medium">Happy Students</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
