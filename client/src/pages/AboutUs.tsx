import React from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import {
  Users,
  Video,
  Puzzle,
  Target,
  History,
  Lightbulb,
  Trophy
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutUs: React.FC = () => {
  const stats = [
    {
      icon: Users,
      value: "1000+",
      label: "Happy Players",
      color: "text-green-500",
      bg: "bg-green-50"
    },
    {
      icon: Video,
      value: "80+",
      label: "Video Lessons",
      color: "text-pink-500",
      bg: "bg-pink-50"
    },
    {
      icon: Puzzle,
      value: "10,000+",
      label: "Chess Puzzles",
      color: "text-yellow-500",
      bg: "bg-yellow-50"
    },
  ];

  const values = [
    {
      title: "Our Story",
      icon: History,
      content: "DameChess started with a simple idea: to create a welcoming space where chess lovers can connect, learn with AI assistance, and compete. We wanted to bridge the gap between traditional learning and modern technology.",
      delay: 0.2
    },
    {
      title: "Our Mission",
      icon: Target,
      content: "Our mission is to make chess a source of joy, growth, and opportunity for people around the world. We believe that mastering chess helps develop critical thinking skills that transcend the board.",
      delay: 0.3
    },
    {
      title: "Our Vision",
      icon: Lightbulb,
      content: "Our vision is to be the leading global platform where chess is not just played but celebrated. We aim to build a community where every move counts and every player matters.",
      delay: 0.4
    }
  ];

  return (
    <div className="min-h-screen bg-white text-dame-dark font-sans selection:bg-dame-orange selection:text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-5">
          <div className="absolute top-20 left-10 w-64 h-64 bg-dame-orange rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-600 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-semibold hover:font-bold transition-all duration-300 tracking-tight mb-8 text-dame-dark">
              About <span className="text-dame-orange">DameChess</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-900 font-medium leading-relaxed">
              At DameChess, we believe chess is more than a game — it’s a journey of strategy, patience, and creativity.
            </p>
            <div className="mt-8 p-6 bg-orange-50 rounded-2xl border border-orange-100 inline-block">
              <p className="text-lg text-dame-dark font-medium">
                "What sets us apart is our AI-powered learning platform, which analyzes your gameplay, identifies strengths and weaknesses, and tails personalized training plans."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Card className="border-none shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden relative transform hover:-translate-y-2 cursor-default">
                  <div className={`absolute top-0 right-0 w-24 h-24 ${stat.bg} rounded-bl-full -mr-4 -mt-4 transition-transform duration-500 group-hover:scale-125`} />
                  <CardContent className="p-8 text-center relative z-10">
                    <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl ${stat.bg} flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300`}>
                      <stat.icon className={`w-8 h-8 ${stat.color}`} />
                    </div>
                    <h3 className="text-4xl font-semibold hover:font-bold transition-all duration-300 mb-2 text-dame-dark">{stat.value}</h3>
                    <p className="text-gray-900 font-bold uppercase tracking-wide text-sm">{stat.label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-40" />

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {values.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: item.delay }}
                className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl hover:border-orange-200 transition-all duration-300 border border-gray-100 flex flex-col transform hover:-translate-y-2 group cursor-default"
              >
                <div className="w-12 h-12 bg-dame-dark/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-dame-orange group-hover:text-white transition-colors duration-300">
                  <item.icon className="w-6 h-6 text-dame-orange group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-semibold hover:font-bold transition-all duration-300 text-dame-dark mb-4 group-hover:text-dame-orange transition-colors">{item.title}</h3>
                <p className="text-gray-900 font-medium leading-relaxed flex-grow">
                  {item.content}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing / CTA */}
      <section className="py-20 bg-white text-center">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center justify-center p-4 bg-orange-50 rounded-full mb-8">
              <Trophy className="w-6 h-6 text-dame-orange mr-2" />
              <span className="text-dame-orange font-bold">Join the Revolution</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-semibold hover:font-bold transition-all duration-300 text-dame-dark mb-6">
              DameChess — <span className="text-dame-orange">Where You Transcend.</span>
            </h2>
            <p className="text-gray-900 font-medium max-w-2xl mx-auto mb-10">
              Ready to start your journey? Join thousands of players who are elevating their game today.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
