import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, Target, Users, Zap } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Insights',
      description: 'Advanced algorithms analyze your learning patterns and provide personalized recommendations for optimal performance.',
    },
    {
      icon: Target,
      title: 'Personalized Learning',
      description: 'Customized study plans and strategies tailored to your unique learning style and academic goals.',
    },
    {
      icon: Users,
      title: 'Expert Mentors',
      description: 'Certified educators and industry professionals with proven track records in student success.',
    },
    {
      icon: Zap,
      title: 'Proven Results',
      description: '95% success rate with students achieving their target scores and academic objectives.',
    },
  ];

  return (
    <section id="about" className="section-padding bg-white">
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
            <span className="text-sm font-medium">About Scoreazy</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-3xl md:text-5xl font-bold font-display text-gray-900 mb-6"
          >
            A Student-First Platform That{' '}
            <span className="gradient-text">Simplifies Success</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Scoreazy is a revolutionary educational platform that blends educational psychology, 
            artificial intelligence, and cutting-edge technology to deliver personalized academic help. 
            From comprehensive exam blueprints to one-on-one mentorship programs, we make scoring easier 
            for students across all educational boards and levels.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Why Students Choose Scoreazy
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our unique approach combines the power of AI with human expertise to create 
                a learning experience that adapts to each student's needs. We understand that 
                every student is different, and that's why we've built a platform that personalizes 
                every aspect of the learning journey.
              </p>
            </div>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1 }}
              className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl p-6 border border-primary-100"
            >
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">✓</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900">
                  Proven Track Record
                </h4>
              </div>
              <p className="text-gray-600">
                Join thousands of students who have transformed their academic performance 
                with Scoreazy's personalized approach to learning and mentorship.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-primary-500 to-secondary-600 rounded-2xl p-8 text-white">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-black/10 rounded-2xl"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6">
                  Our Mission
                </h3>
                <p className="text-lg mb-8 leading-relaxed">
                  To democratize quality education by making personalized learning accessible 
                  to every student, regardless of their background or learning style.
                </p>

                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">10K+</div>
                    <div className="text-sm opacity-90">Students Helped</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">95%</div>
                    <div className="text-sm opacity-90">Success Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">500+</div>
                    <div className="text-sm opacity-90">Expert Mentors</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">50+</div>
                    <div className="text-sm opacity-90">Subjects Covered</div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-8 h-8 bg-white/20 rounded-full"
              />
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-white/20 rounded-full"
              />
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent-200 rounded-full opacity-30 blur-xl"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-200 rounded-full opacity-30 blur-xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 