import { Brain, Eye, GraduationCap, Zap, Lightbulb, Users } from "lucide-react";

export default function BenefitsSection() {
  return (
    <section id="benefits" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dame-dark mb-4">
            Why Kids Love Chess
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Chess isn't just a game—it's a powerful tool that develops critical life skills while having fun.
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
        <div className="bg-white rounded-3xl p-12 shadow-xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-dame-dark mb-6">Proven Academic Results</h3>
              <p className="text-lg text-gray-600 mb-8">
                Research consistently shows that students who learn chess demonstrate significant improvements in academic performance, particularly in mathematics and reading comprehension.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-dame-blue mb-2">23%</div>
                  <div className="text-sm text-gray-600">Improvement in Math Scores</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-dame-red mb-2">18%</div>
                  <div className="text-sm text-gray-600">Better Reading Comprehension</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-dame-gold mb-2">35%</div>
                  <div className="text-sm text-gray-600">Increased Attention Span</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">42%</div>
                  <div className="text-sm text-gray-600">Better Problem Solving</div>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="w-full h-64 bg-gradient-to-br from-dame-blue to-blue-600 rounded-2xl shadow-lg flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-6xl mb-4">📚</div>
                    <div className="text-lg font-semibold">Students at School</div>
                    <div className="text-sm opacity-90">Learning Chess Together</div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 text-6xl chess-piece">♔</div>
                <div className="absolute -top-4 -left-4 text-4xl chess-piece">♗</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
