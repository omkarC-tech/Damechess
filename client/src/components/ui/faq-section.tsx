import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What age group is Dame Chess Academy suitable for?",
    answer: "Our program is designed for kids and teens aged 6-18. We have age-appropriate content and teaching methods that adapt to different learning styles and abilities."
  },
  {
    question: "Do I need any prior chess knowledge to start?",
    answer: "No! Our program starts from absolute beginner level. We'll teach your child everything from how the pieces move to advanced strategies, all in a fun and engaging way."
  },
  {
    question: "How long does it take to see improvement?",
    answer: "Most students see noticeable improvement within 2-4 weeks of consistent practice. Our adaptive learning system ensures steady progress at your child's own pace."
  },
  {
    question: "Is the program safe for children online?",
    answer: "Absolutely! We prioritize child safety with secure, monitored environments, age-appropriate content, and strict privacy protections. Parents have full oversight of their child's progress."
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer: "Yes, you can cancel your subscription at any time. There are no long-term commitments, and you'll retain access until the end of your current billing period."
  },
  {
    question: "What devices can we use to access the lessons?",
    answer: "Our platform works on all devices - computers, tablets, and smartphones. The lessons are optimized for both desktop and mobile experiences."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-2 rounded-full text-lg font-semibold">
              Questions & Answers
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Got questions? We've got answers! Here are the most common questions parents ask about Dame Chess Academy.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-lg border border-purple-100 overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-purple-50 transition-all duration-300"
                >
                  <h3 className="text-lg font-semibold text-gray-800 pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <ChevronUp className="w-6 h-6 text-purple-600 transform transition-transform duration-300" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-purple-600 transform transition-transform duration-300" />
                    )}
                  </div>
                </button>
                
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-6 pt-0 border-t border-purple-100">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}