import { Brain, Eye, GraduationCap, Trophy, Lightbulb, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function BenefitsSection() {
  const benefits = [
    {
      icon: <Brain className="w-8 h-8 text-dame-purple" />,
      title: "Critical Thinking",
      description: "Develops problem-solving skills and strategic planning abilities that help in academics and life.",
      color: "bg-purple-100",
    },
    {
      icon: <Eye className="w-8 h-8 text-dame-green" />,
      title: "Focus & Patience",
      description: "Improves concentration and teaches the value of careful consideration before making decisions.",
      color: "bg-green-100",
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-dame-blue" />,
      title: "Academic Success",
      description: "Studies show chess players often perform better in math and reading comprehension.",
      color: "bg-blue-100",
    },
    {
      icon: <Trophy className="w-8 h-8 text-dame-orange" />,
      title: "Future Achievement",
      description: "Builds confidence and resilience, preparing children for future challenges and success.",
      color: "bg-orange-100",
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-yellow-600" />,
      title: "Creativity",
      description: "Chess encourages creative thinking and helps kids find innovative solutions to complex problems.",
      color: "bg-yellow-100",
    },
    {
      icon: <Users className="w-8 h-8 text-dame-red" />,
      title: "Social Skills",
      description: "Online tournaments and group learning help kids build confidence and sportsmanship.",
      color: "bg-red-100",
    },
  ];

  return (
    <section id="benefits" className="py-24 relative overflow-hidden bg-[#ff4d4d]">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#ff6b6b] via-[#ff4d4d] to-[#e60000]"></div>

      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 opacity-10 mix-blend-overlay" style={{ backgroundImage: 'url(/chess-pattern.jpg)', backgroundSize: '600px', backgroundRepeat: 'repeat' }}></div>

      {/* Vignette for lighter boundaries effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(255,255,255,0.1)_100%)] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Why Kids Love DameChess
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto font-medium">
            Chess isn't just a game—it's a powerful tool that develops critical life skills while having amazing fun.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg relative overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                y: -10,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-transparent to-gray-50 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-500"></div>

              <motion.div
                className={`w-16 h-16 ${benefit.color} rounded-2xl flex items-center justify-center mb-6 relative z-10`}
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                {benefit.icon}
              </motion.div>

              <h3 className="text-xl font-bold text-dame-dark mb-3 relative z-10 group-hover:text-dame-orange transition-colors duration-300">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm relative z-10">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
