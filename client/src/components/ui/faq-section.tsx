import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What age group is DameChess Academy suitable for?",
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
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dame-dark mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Got questions? We've got answers! Here are the most common questions parents ask about DameChess Academy.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 hover:border-dame-orange/50"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex justify-between items-center bg-white hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-bold text-dame-dark pr-8">
                  {faq.question}
                </h3>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openIndex === index ? 'bg-dame-orange text-white' : 'bg-gray-100 text-gray-500'}`}>
                  {openIndex === index ? (
                    <Minus className="w-5 h-5" />
                  ) : (
                    <Plus className="w-5 h-5" />
                  )}
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                  }`}
              >
                <div className="p-6 pt-0 bg-white">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}