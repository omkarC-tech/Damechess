import React from "react";
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import {
  FaChessKnight,
  FaChessQueen,
  FaChessPawn,
  FaChessBishop,
  FaChessRook,
  FaChessKing,
} from "react-icons/fa";

const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-dame-dark">
      {/* Header */}
      <Navigation />

      {/* Content */}
      <section className="relative bg-gradient-to-br from-orange-50 via-yellow-50 to-pink-50 py-16 px-6 md:px-12 lg:px-24 overflow-hidden pt-32">
        {/* Left side pieces */}
        <FaChessKnight className="text-green-500 text-8xl absolute top-[10%] left-[2%] opacity-15 animate-float [animation-delay:-1s]" />
        <FaChessBishop className="text-orange-400 text-7xl absolute top-[35%] left-[3%] opacity-15 animate-drift [animation-delay:-2s]" />
        <FaChessPawn className="text-yellow-500 text-6xl absolute top-[60%] left-[4%] opacity-15 animate-float [animation-delay:-3s]" />
        <FaChessRook className="text-blue-400 text-9xl absolute bottom-[15%] left-[2%] opacity-15 animate-rotate-slow" />
        <FaChessPawn className="text-teal-400 text-5xl absolute bottom-[5%] left-[3%] opacity-15 animate-drift [animation-delay:-4s]" />

        {/* Right side pieces */}
        <FaChessQueen className="text-pink-400 text-9xl absolute top-[8%] right-[2%] opacity-15 animate-drift" />
        <FaChessKing className="text-purple-400 text-8xl absolute top-[30%] right-[3%] opacity-15 animate-float [animation-delay:-0.5s]" />
        <FaChessKnight className="text-green-500 text-7xl absolute top-[55%] right-[4%] opacity-15 animate-drift [animation-delay:-2.5s]" />
        <FaChessBishop className="text-orange-400 text-6xl absolute bottom-[20%] right-[2%] opacity-15 animate-float [animation-delay:-1.5s]" />
        <FaChessRook className="text-blue-400 text-8xl absolute bottom-[5%] right-[3%] opacity-15 animate-rotate-slow" />

        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto mb-12 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-snug">
            About <span className="text-orange-500">Dame Chess</span>
          </h1>
          <p className="mt-4 text-md text-gray-700">
            At Dame Chess, we believe chess is more than a game — it’s a journey
            of strategy, patience, and creativity. <br />
            We want to inspire and guide players of all ages to think smarter,
            play better, and enjoy the beauty of chess. <br />
            What sets us apart is our AI-powered learning platform, which
            analyzes your gameplay, identifies strengths and weaknesses, and
            tailors personalized training plans.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16 relative z-10">
          <div className="text-center">
            <FaChessKnight className="text-green-500 text-5xl mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900">1000+</h3>
            <p className="text-gray-600">Happy Players</p>
          </div>
          <div className="text-center">
            <FaChessQueen className="text-pink-500 text-5xl mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900">80+</h3>
            <p className="text-gray-600">Video Lessons</p>
          </div>
          <div className="text-center">
            <FaChessRook className="text-yellow-500 text-5xl mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900">10,000+</h3>
            <p className="text-gray-600">Chess Puzzles</p>
          </div>
        </div>

        {/* Our Story */}
        <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-3xl p-8 md:p-12 relative z-10 mb-12">
          <h2 className="text-3xl font-semibold text-orange-500 mb-4">
            Our Story
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Dame Chess started with a simple idea: to create a welcoming space
            where chess lovers can connect, learn with AI assistance, and
            compete.
          </p>
        </div>

        {/* Mission */}
        <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-3xl p-8 md:p-12 relative z-10 mb-12">
          <h2 className="text-3xl font-semibold text-orange-500 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Our mission is to make chess a source of joy, growth, and
            opportunity for people around the world.
          </p>
        </div>

        {/* Vision */}
        <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-3xl p-8 md:p-12 relative z-10 mb-16">
          <h2 className="text-3xl font-semibold text-orange-500 mb-4">
            Our Vision
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Our vision is to be the leading global platform where chess is not
            just played but celebrated.
          </p>
        </div>

        {/* Tagline */}
        <div className="text-center relative z-10">
          <p className="text-lg font-semibold text-gray-900">
            ♟ Dame Chess —{" "}
            <span className="text-orange-500">where you Transcend.</span>
          </p>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AboutUs;
