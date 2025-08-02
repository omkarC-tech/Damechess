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


        </div>


      </div>
    </section>
  );
}
