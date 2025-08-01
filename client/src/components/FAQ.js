import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'How does Scoreazy\'s personalized mentorship work?',
      answer: 'Our AI-powered platform analyzes your learning style, academic strengths, and areas for improvement. We then match you with a certified mentor who specializes in your subjects. Together, you\'ll create a customized study plan that adapts to your pace and goals, with regular progress tracking and adjustments.',
    },
    {
      question: 'What qualifications do Scoreazy mentors have?',
      answer: 'All our mentors are certified educators with advanced degrees in their respective subjects. They have extensive teaching experience and undergo rigorous training in our methodology. Many are former teachers from top schools and universities, ensuring you get the highest quality guidance.',
    },
    {
      question: 'How long does it take to see results?',
      answer: 'Most students begin to see improvements within 2-4 weeks of starting their mentorship program. However, significant academic improvements typically become evident within 2-3 months. Our 95% success rate shows that consistent engagement leads to measurable results.',
    },
    {
      question: 'What subjects and boards do you support?',
      answer: 'We support all major educational boards including CBSE, ICSE, IB, IGCSE, and state boards. Our mentors cover all core subjects: Mathematics, Science (Physics, Chemistry, Biology), English, Social Studies, and more. We also offer specialized programs for competitive exams.',
    },
    {
      question: 'How much does the mentorship program cost?',
      answer: 'We offer flexible pricing plans starting from ₹2,999/month. Our packages include personalized mentorship sessions, AI-powered study materials, progress tracking, and 24/7 support. We also provide special discounts for longer commitments and family packages.',
    },
    {
      question: 'Can I change my mentor if needed?',
      answer: 'Absolutely! We understand that the mentor-student relationship is crucial for success. If you feel your current mentor isn\'t the right fit, you can request a change at any time. We\'ll match you with another qualified mentor who better suits your learning style and needs.',
    },
    {
      question: 'Do you offer trial sessions?',
      answer: 'Yes! We offer a free discovery call where you can discuss your academic goals and experience our approach. We also provide a 7-day trial period where you can work with your assigned mentor to see if our program is right for you, with no commitment required.',
    },
    {
      question: 'How do you track student progress?',
      answer: 'We use advanced analytics and regular assessments to track your progress. Our AI system monitors your performance, identifies areas for improvement, and provides detailed reports. Your mentor also conducts regular check-ins and adjusts your study plan based on your progress.',
    },
    {
      question: 'What if I\'m not satisfied with the program?',
      answer: 'We offer a 30-day money-back guarantee. If you\'re not completely satisfied with our mentorship program within the first 30 days, we\'ll provide a full refund. Your success is our priority, and we\'re committed to ensuring you get the value you expect.',
    },
    {
      question: 'Can parents be involved in the mentorship process?',
      answer: 'Yes! We encourage parental involvement and provide regular progress reports to keep parents informed. Parents can attend initial consultations, receive monthly updates, and have access to our parent portal to track their child\'s academic journey.',
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-primary-50 text-primary-700 rounded-full px-4 py-2 mb-6"
          >
            <HelpCircle className="w-4 h-4" />
            <span className="text-sm font-medium">Frequently Asked Questions</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-3xl md:text-5xl font-bold font-display text-gray-900 mb-6"
          >
            Everything You Need to{' '}
            <span className="gradient-text">Know</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Get answers to the most common questions about our mentorship program, 
            pricing, and how we help students achieve their academic goals.
          </motion.p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-soft hover:shadow-medium transition-shadow duration-200"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-5 h-5 text-primary-600" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      id={`faq-answer-${index}`}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contact Support */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 md:p-12 max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Our support team is here to help you with any questions about our 
              mentorship program, pricing, or how to get started.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">📞</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Call Us</h4>
                <p className="text-gray-600">91 1234567890</p>
                <p className="text-sm text-gray-500">Mon-Sat, 9 AM - 8 PM</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">✉️</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h4>
                <p className="text-gray-600">support@scoreazy.com</p>
                <p className="text-sm text-gray-500">24/7 Support</p>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              Get in Touch
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ; 