import { Brain, TrendingUp, Trophy, Puzzle, Play, Bot } from "lucide-react";

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dame-dark mb-4">
            Interactive Chess Learning
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive curriculum adapts to each student's learning pace, ensuring personalized growth and maximum engagement through interactive lessons.
          </p>
        </div>

        {/* AI Feature Showcase */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold text-dame-dark mb-6">Smart Progress Tracking</h3>
            <p className="text-lg text-gray-600 mb-8">
              Track your child's performance across 100,000+ puzzles and 800+ video lessons with our comprehensive learning system that creates a personalized path that evolves with their skills.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-dame-blue rounded-xl flex items-center justify-center">
                  <Brain className="text-white w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-dame-dark">Adaptive Learning</h4>
                  <p className="text-gray-600">System adjusts difficulty based on performance</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-dame-red rounded-xl flex items-center justify-center">
                  <TrendingUp className="text-white w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-dame-dark">Real-time Analytics</h4>
                  <p className="text-gray-600">Track progress with detailed insights</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-dame-gold rounded-xl flex items-center justify-center">
                  <Trophy className="text-white w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-dame-dark">Achievement System</h4>
                  <p className="text-gray-600">Gamified rewards keep kids motivated</p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Learning Demo */}
          <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-8 shadow-2xl">
            <div className="text-center">
              <div className="text-6xl mb-6">🎯</div>
              <h4 className="text-2xl font-bold text-purple-700 mb-4">Interactive Learning</h4>
              <p className="text-purple-600 text-lg">
                Experience chess like never before with our fun, interactive approach designed specifically for young minds.
              </p>
            </div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow hover:scale-105 transform duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Puzzle className="text-white w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-purple-700 mb-3">100,000+ Puzzles</h3>
            <p className="text-purple-600">From beginner to advanced levels, our vast puzzle library keeps learning engaging and challenging.</p>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow hover:scale-105 transform duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Play className="text-white w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-orange-700 mb-3">800+ Video Lessons</h3>
            <p className="text-orange-600">Interactive video content taught by expert chess masters, designed specifically for young learners.</p>
          </div>

          <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow hover:scale-105 transform duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-400 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Bot className="text-white w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-yellow-700 mb-3">Smart Practice</h3>
            <p className="text-yellow-600">Practice against kid-friendly opponents that adapt to your skill level for optimal learning.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
