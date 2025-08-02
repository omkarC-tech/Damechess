import { useState, useEffect } from "react";
import { Star } from "lucide-react";

export default function TestimonialsSection() {
  const [statsCounters, setStatsCounters] = useState({
    satisfaction: 0,
    improvement: 0,
    winners: 0,
    schools: 0,
  });

  useEffect(() => {
    const animateStats = () => {
      const targets = { satisfaction: 95, improvement: 87, winners: 200, schools: 50 };
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
      name: "Sarah Johnson",
      role: "Parent of Emma, Age 8",
      content: "My 8-year-old daughter went from knowing nothing about chess to winning her school tournament in just 6 months! The AI-powered lessons kept her engaged and motivated.",
      avatar: "👩‍💼"
    },
    {
      name: "Michael Chen",
      role: "Parent of David, Age 12",
      content: "The progress tracking is incredible! I can see exactly where my son needs improvement. His math grades have improved significantly since starting chess.",
      avatar: "👨‍💻"
    },
    {
      name: "Lisa Rodriguez",
      role: "Primary School Teacher",
      content: "As a teacher, I'm amazed by how DameChess has improved my students' concentration and problem-solving skills. The classroom management tools are excellent!",
      avatar: "👩‍🏫"
    },
    {
      name: "Alex Kumar",
      role: "Student, Age 14",
      content: "I love the AI that adapts to my playing style! The puzzles get harder as I improve, and I never get bored. Chess is now my favorite subject!",
      avatar: "🧑‍🎓"
    },
    {
      name: "Dr. Priya Sharma",
      role: "School Principal",
      content: "Our school chess program has been transformed! Students are more engaged, and we've seen remarkable improvements in their analytical thinking across all subjects.",
      avatar: "👩‍💼"
    },
    {
      name: "Rajesh Patel",
      role: "Parent of Arjun & Kiran, Age 11",
      content: "The gamified approach keeps my twin boys competing with each other in a healthy way. They've both improved tremendously, and their confidence has soared!",
      avatar: "👨‍👨‍👦‍👦"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-dame-dark to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Hear from parents and students who've transformed their chess journey with DameChess.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="flex items-center mb-4">
                <div className="flex text-dame-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                "{testimonial.content}"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4 text-2xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-dame-dark">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Success Stats */}
        <div id="testimonial-stats" className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold text-dame-gold mb-2">
                {Math.floor(statsCounters.satisfaction)}%
              </div>
              <div className="text-gray-300">Student Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-dame-gold mb-2">
                {Math.floor(statsCounters.improvement)}%
              </div>
              <div className="text-gray-300">Academic Improvement</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-dame-gold mb-2">
                {Math.floor(statsCounters.winners)}+
              </div>
              <div className="text-gray-300">Tournament Winners</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-dame-gold mb-2">
                {Math.floor(statsCounters.schools)}+
              </div>
              <div className="text-gray-300">Partner Schools</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
