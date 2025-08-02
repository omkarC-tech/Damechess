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

          {/* AI Dashboard Mockup */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 shadow-2xl">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-lg font-semibold">Student Progress</h4>
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
              </div>
              
              {/* Progress Chart Mockup */}
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">Chess Fundamentals</span>
                    <span className="text-sm font-semibold text-dame-blue">95%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-dame-blue h-2 rounded-full" style={{width: '95%'}}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">Tactical Puzzles</span>
                    <span className="text-sm font-semibold text-dame-gold">78%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-dame-gold h-2 rounded-full" style={{width: '78%'}}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">Endgame Strategy</span>
                    <span className="text-sm font-semibold text-dame-red">42%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-dame-red h-2 rounded-full" style={{width: '42%'}}></div>
                  </div>
                </div>
              </div>

              {/* Achievement Badges */}
              <div className="mt-6 pt-6 border-t border-gray-100">
                <h5 className="text-sm font-semibold text-gray-700 mb-3">Recent Achievements</h5>
                <div className="flex space-x-3">
                  <div className="w-8 h-8 bg-dame-gold rounded-full flex items-center justify-center">
                    <Trophy className="text-white w-4 h-4" />
                  </div>
                  <div className="w-8 h-8 bg-dame-blue rounded-full flex items-center justify-center">
                    <Brain className="text-white w-4 h-4" />
                  </div>
                  <div className="w-8 h-8 bg-dame-red rounded-full flex items-center justify-center">
                    <TrendingUp className="text-white w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-dame-blue rounded-xl flex items-center justify-center mx-auto mb-4">
              <Puzzle className="text-white w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-dame-dark mb-3">100,000+ Puzzles</h3>
            <p className="text-gray-600">From beginner to advanced levels, our vast puzzle library keeps learning engaging and challenging.</p>
          </div>

          <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-dame-red rounded-xl flex items-center justify-center mx-auto mb-4">
              <Play className="text-white w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-dame-dark mb-3">800+ Video Lessons</h3>
            <p className="text-gray-600">Interactive video content taught by expert chess masters, designed specifically for young learners.</p>
          </div>

          <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-dame-gold rounded-xl flex items-center justify-center mx-auto mb-4">
              <Bot className="text-white w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-dame-dark mb-3">AI Bot Matches</h3>
            <p className="text-gray-600">Practice against kid-friendly AI opponents that adapt to your skill level for optimal learning.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
