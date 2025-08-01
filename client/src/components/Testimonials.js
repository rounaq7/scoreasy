import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Class 12 Student',
      board: 'CBSE',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      quote: 'Scoreazy transformed my approach to studying. My mentor helped me understand complex concepts in Physics and Chemistry that I struggled with for months. I improved from 65% to 92% in just 6 months!',
      improvement: '65% → 92%',
      subject: 'Physics & Chemistry',
    },
    {
      name: 'Rahul Patel',
      role: 'Class 10 Student',
      board: 'ICSE',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      quote: 'The personalized study plan created by Scoreazy was exactly what I needed. My mentor identified my weak areas and helped me build confidence. I scored 95% in my board exams!',
      improvement: '78% → 95%',
      subject: 'All Subjects',
    },
    {
      name: 'Ananya Reddy',
      role: 'Class 11 Student',
      board: 'IB',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      quote: 'As an IB student, I was struggling with the rigorous curriculum. Scoreazy\'s AI-powered insights and expert mentorship helped me develop effective study strategies. My grades improved significantly!',
      improvement: '6.2 → 7.8',
      subject: 'IB Diploma',
    },
    {
      name: 'Arjun Singh',
      role: 'Class 9 Student',
      board: 'CBSE',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      quote: 'My parents were worried about my academic performance. Scoreazy\'s structured approach and regular progress tracking helped me stay motivated. I\'m now confident about my future!',
      improvement: '70% → 88%',
      subject: 'Mathematics',
    },
    {
      name: 'Zara Khan',
      role: 'Class 12 Student',
      board: 'IGCSE',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
      quote: 'The mentorship program at Scoreazy is exceptional. My mentor not only helped me with academics but also guided me through career choices. I\'m now pursuing my dream course!',
      improvement: 'A* in 3 subjects',
      subject: 'Biology & Chemistry',
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section id="testimonials" className="section-padding bg-gradient-to-br from-gray-50 to-white">
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
            <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
            <span className="text-sm font-medium">Success Stories</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-3xl md:text-5xl font-bold font-display text-gray-900 mb-6"
          >
            What Our{' '}
            <span className="gradient-text">Students Say</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Real stories from real students who have transformed their academic journey 
            with Scoreazy's personalized mentorship and AI-powered learning approach.
          </motion.p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-large p-8 md:p-12 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-primary-200">
                <Quote className="w-12 h-12" />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                {/* Student Info */}
                <div className="text-center lg:text-left">
                  <div className="w-24 h-24 mx-auto lg:mx-0 mb-4 rounded-full overflow-hidden border-4 border-primary-100">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {testimonials[currentIndex].name}
                  </h3>
                  
                  <p className="text-gray-600 mb-2">
                    {testimonials[currentIndex].role}
                  </p>
                  
                  <div className="inline-flex items-center space-x-1 bg-primary-50 text-primary-700 rounded-full px-3 py-1 text-sm font-medium mb-3">
                    {testimonials[currentIndex].board}
                  </div>

                  {/* Rating */}
                  <div className="flex items-center justify-center lg:justify-start space-x-1 mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Improvement Stats */}
                  <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-lg p-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary-600 mb-1">
                        {testimonials[currentIndex].improvement}
                      </div>
                      <div className="text-sm text-gray-600">
                        {testimonials[currentIndex].subject}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quote */}
                <div className="lg:col-span-2">
                  <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed italic">
                    "{testimonials[currentIndex].quote}"
                  </blockquote>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="w-12 h-12 bg-white rounded-full shadow-medium flex items-center justify-center hover:shadow-large transition-shadow duration-200"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-primary-600" />
            </motion.button>

            {/* Dots */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentIndex
                      ? 'bg-primary-600 scale-125'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="w-12 h-12 bg-white rounded-full shadow-medium flex items-center justify-center hover:shadow-large transition-shadow duration-200"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-primary-600" />
            </motion.button>
          </div>
        </div>

        {/* Overall Rating */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-2xl shadow-soft p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Trusted by Students Nationwide
            </h3>
            
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-2xl font-bold text-gray-900">4.9/5</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-1">10,000+</div>
                <div className="text-gray-600">Happy Students</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-1">95%</div>
                <div className="text-gray-600">Success Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-1">500+</div>
                <div className="text-gray-600">Expert Mentors</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Ready to Join Our Success Stories?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Start your journey towards academic excellence with personalized mentorship 
            that has helped thousands of students achieve their goals.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary"
          >
            Start Your Success Story
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials; 