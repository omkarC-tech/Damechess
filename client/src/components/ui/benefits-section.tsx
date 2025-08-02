import { Brain, Eye, GraduationCap, Zap, Lightbulb, Users } from "lucide-react";

export default function BenefitsSection() {
  return (
    <section id="benefits" className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-2 rounded-full text-lg font-semibold">Fun & Engaging</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-4">
            Why Kids Love Chess
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Chess isn't just a game—it's a powerful tool that develops critical life skills while having amazing fun and achieving exciting milestones.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center mb-6">
              <Brain className="text-white w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-dame-dark mb-3">Critical Thinking</h3>
            <p className="text-gray-600">Develops problem-solving skills and strategic planning abilities that help in academics and life.</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center mb-6">
              <Eye className="text-white w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-dame-dark mb-3">Focus & Patience</h3>
            <p className="text-gray-600">Improves concentration and teaches the value of careful consideration before making decisions.</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center mb-6">
              <GraduationCap className="text-white w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-dame-dark mb-3">Academic Benefits</h3>
            <p className="text-gray-600">Studies show chess players often perform better in math and reading comprehension.</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-red-600 rounded-xl flex items-center justify-center mb-6">
              <Zap className="text-white w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-dame-dark mb-3">Memory Enhancement</h3>
            <p className="text-gray-600">Regular chess practice significantly improves both short-term and long-term memory capacity.</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center mb-6">
              <Lightbulb className="text-white w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-dame-dark mb-3">Creativity</h3>
            <p className="text-gray-600">Chess encourages creative thinking and helps kids find innovative solutions to complex problems.</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-xl flex items-center justify-center mb-6">
              <Users className="text-white w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-dame-dark mb-3">Social Skills</h3>
            <p className="text-gray-600">Online tournaments and group learning help kids build confidence and sportsmanship.</p>
          </div>
        </div>

        {/* Academic Performance Highlight */}

      </div>
    </section>
  );
}
