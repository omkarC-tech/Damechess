import { Brain, TrendingUp, Trophy } from "lucide-react";

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dame-dark mb-4">
            Interactive Chess Learning
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our curriculum adapts to each student's pace, ensuring personalized growth and interactive engagement.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="flex flex-col md:flex-row items-stretch justify-center gap-6">
          {/* Card 1 */}
          <div className="group w-full md:w-1/3 bg-white rounded-2xl shadow-md border border-gray-200 p-8 text-center transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl">
            <div className="w-16 h-16 bg-dame-blue rounded-xl flex items-center justify-center mx-auto mb-4">
              <Brain className="text-white w-8 h-8" />
            </div>
            <h4 className="text-2xl font-bold text-dame-dark mb-2">Adaptive Learning</h4>
            <p className="text-base text-gray-600 mb-2">
              System adjusts difficulty based on performance.
            </p>
            <div className="h-[4px] w-16 mx-auto bg-gradient-to-r from-dame-blue to-dame-light rounded-full mb-3 transition-transform duration-300 group-hover:translate-x-1" />
            <p className="text-sm text-gray-500 leading-relaxed">
              Students grow at their own pace with AI-guided lesson paths and custom practice drills that evolve with their skills.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group w-full md:w-1/3 bg-white rounded-2xl shadow-md border border-gray-200 p-8 text-center transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl">
            <div className="w-16 h-16 bg-dame-red rounded-xl flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="text-white w-8 h-8" />
            </div>
            <h4 className="text-2xl font-bold text-dame-dark mb-2">Real-time Analytics</h4>
            <p className="text-base text-gray-600 mb-2">
              Track progress with detailed insights.
            </p>
            <div className="h-[4px] w-16 mx-auto bg-gradient-to-r from-dame-red to-orange-400 rounded-full mb-3 transition-transform duration-300 group-hover:translate-x-1" />
            <p className="text-sm text-gray-500 leading-relaxed">
              Parents and coaches access live reports on tactics, accuracy, strengths, and areas for improvement.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group w-full md:w-1/3 bg-white rounded-2xl shadow-md border border-gray-200 p-8 text-center transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl">
            <div className="w-16 h-16 bg-dame-gold rounded-xl flex items-center justify-center mx-auto mb-4">
              <Trophy className="text-white w-8 h-8" />
            </div>
            <h4 className="text-2xl font-bold text-dame-dark mb-2">Achievement System</h4>
            <p className="text-base text-gray-600 mb-2">
              Gamified rewards keep kids motivated.
            </p>
            <div className="h-[4px] w-16 mx-auto bg-gradient-to-r from-yellow-400 to-yellow-200 rounded-full mb-3 transition-transform duration-300 group-hover:translate-x-1" />
            <p className="text-sm text-gray-500 leading-relaxed">
              Earn badges, trophies, and unlock levels through consistent practice and chess mastery.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
