import { Brain, TrendingUp, Trophy } from "lucide-react";

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-dame-orange mb-4">
            Interactive Chess Learning
          </h2>
          <p className="text-lg text-gray-900 font-medium max-w-2xl mx-auto">
            Our curriculum adapts to each student's pace, ensuring personalized growth and interactive engagement.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 text-center group hover:scale-105 hover:bg-purple-50 hover:border-purple-200">
            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Brain className="text-dame-purple w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-dame-dark mb-3">Adaptive Learning</h4>
            <p className="text-gray-900 font-medium leading-relaxed text-sm">
              System adjusts difficulty based on performance. Students grow at their own pace with AI-guided lesson paths.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 text-center group hover:scale-105 hover:bg-orange-50 hover:border-orange-200">
            <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <TrendingUp className="text-dame-orange w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-dame-dark mb-3">Real-time Analytics</h4>
            <p className="text-gray-900 font-medium leading-relaxed text-sm">
              Track progress with detailed insights. Parents and coaches access live reports on tactics and accuracy.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 text-center group hover:scale-105 hover:bg-green-50 hover:border-green-200">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Trophy className="text-dame-green w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-dame-dark mb-3">Gamified System</h4>
            <p className="text-gray-900 font-medium leading-relaxed text-sm">
              Gamified rewards keep kids motivated. Earn badges, trophies, and unlock levels through consistent practice.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
