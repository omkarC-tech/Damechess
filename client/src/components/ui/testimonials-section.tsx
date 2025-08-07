import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star, Users, Award } from "lucide-react";

export default function TestimonialsSection() {
  const [statsCounters, setStatsCounters] = useState({
    satisfaction: 0,
    improvement: 0,
    winners: 0,
    schools: 0,
  });

  useEffect(() => {
    const animateStats = () => {
      const targets = { satisfaction: 10, improvement: 91, winners: 200, schools: 4 };
      const increments = { 
        satisfaction: targets.satisfaction / 100, 
        improvement: targets.improvement / 100,
        winners: targets.winners / 100,
        schools: targets.schools / 100
      };

      let current = { satisfaction: 0, improvement: 0, winners: 0, schools: 0 };
      
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
        
        setStatsCounters({ ...current });
        
        if (allComplete) {
          clearInterval(interval);
        }
      }, 20);
    };

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        animateStats();
        observer.disconnect();
      }
    });

    const statsElement = document.getElementById('testimonial-stats');
    if (statsElement) {
      observer.observe(statsElement);
    }

    return () => observer.disconnect();
  }, []);

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Parent of Arjun, Age 10",
      content: "My son went from knowing nothing about chess to winning his school tournament in 8 months! The structured curriculum and progress tracking helped us see his improvement every week.",
      avatar: "👩‍💼",
      rating: 5
    },
    {
      name: "Raj Patel",
      role: "Parent of Kavya, Age 12",
      content: "The video lessons are amazing quality and my daughter's math grades improved by 25% since she started chess. The teachers are very patient and skilled.",
      avatar: "👨‍💻",
      rating: 4.5
    },
    {
      name: "Anita Verma",
      role: "School Principal",
      content: "We've implemented DameChess in our school and seen remarkable improvements in students' concentration and problem-solving abilities across all subjects.",
      avatar: "👩‍🏫",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 text-8xl text-white animate-float3d">♔</div>
        <div className="absolute bottom-20 right-10 text-6xl text-yellow-300 animate-chess-float">♕</div>
        <div className="absolute top-1/2 left-1/4 text-7xl text-blue-300 animate-float3d">♗</div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <div className="mb-6">
            <span className="text-yellow-400 font-semibold text-lg">Real Stories</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent mb-6">
            Parents Love Our Results
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Real families sharing their amazing chess journey with DameChess
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="glass-effect border-2 border-white/20 hover:border-white/40 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 animate-scale-in"
              style={{
                animationDelay: `${index * 300}ms`
              }}
            >
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <Quote className="text-yellow-400 w-10 h-10" />
                  <div className="flex gap-1">
                    {Array.from({ length: testimonial.rating }, (_, i) => (
                      <Star key={i} className="text-yellow-400 w-5 h-5 fill-current" />
                    ))}
                  </div>
                </div>
                
                <p className="text-white mb-8 text-lg leading-relaxed font-medium">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-2xl shadow-lg">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-white text-xl">{testimonial.name}</div>
                    <div className="text-blue-200 text-sm font-medium">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced Trust indicators */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl p-10 glass-effect">
            <h3 className="text-3xl font-bold text-center text-white mb-10">Trusted by Thousands</h3>
            <div id="testimonial-stats" className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center transform hover:scale-110 transition-all">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-2">
                  {Math.floor(statsCounters.satisfaction * 100)}+
                </div>
                <div className="text-blue-200 font-medium">Happy Students Learning</div>
              </div>
              <div className="text-center transform hover:scale-110 transition-all">
                <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Star className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent mb-2">
                  {Math.floor(statsCounters.improvement)}%
                </div>
                <div className="text-blue-200 font-medium">Parent Satisfaction Rate</div>
              </div>
              <div className="text-center transform hover:scale-110 transition-all">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-2">
                  {Math.floor(statsCounters.schools * 10)}+
                </div>
                <div className="text-blue-200 font-medium">School Partners</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
