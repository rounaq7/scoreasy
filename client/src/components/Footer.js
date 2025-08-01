import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { 
  GraduationCap, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Mission', href: '#about' },
      { name: 'Team', href: '#about' },
      { name: 'Careers', href: '#' },
    ],
    services: [
      { name: 'Mentorship Program', href: '#benefits' },
      { name: 'Microcourses', href: '#benefits' },
      { name: 'Academic Blueprints', href: '#benefits' },
      { name: 'Progress Tracking', href: '#journey' },
    ],
    support: [
      { name: 'Help Center', href: '#faq' },
      { name: 'Contact Us', href: '#contact' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
    ],
    resources: [
      { name: 'Study Tips', href: '#' },
      { name: 'Success Stories', href: '#testimonials' },
      { name: 'Blog', href: '#' },
      { name: 'Download App', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com/scoreazy', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com/scoreazy', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com/scoreazy', label: 'Instagram' },
    { icon: Linkedin, href: 'https://linkedin.com/company/scoreazy', label: 'LinkedIn' },
    { icon: Youtube, href: 'https://youtube.com/@scoreazy', label: 'YouTube' },
  ];

  const contactInfo = [
    { icon: Mail, text: 'support@scoreazy.com', href: 'mailto:support@scoreazy.com' },
    { icon: Phone, text: '+91 1234567890', href: 'tel:+91 1234567890' },
    { icon: MapPin, text: 'Mumbai, Maharashtra, India', href: '#' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-600 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold font-display">Scoreazy</span>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              A student-first platform that blends educational psychology and AI to deliver 
              personalized academic help. From exam blueprints to mentorship, Scoreazy simplifies success.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              {contactInfo.map((contact, index) => (
                <motion.a
                  key={index}
                  href={contact.href}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-200"
                >
                  <contact.icon className="w-4 h-4 text-primary-400" />
                  <span>{contact.text}</span>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-300 hover:text-white hover:bg-primary-600 transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-lg font-semibold mb-6 capitalize">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    {link.href.startsWith('#') ? (
                      <Link
                        to={link.href.substring(1)}
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={500}
                        className="text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer"
                      >
                        {link.name}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="text-gray-300 hover:text-white transition-colors duration-200"
                      >
                        {link.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">
              Stay Updated with Scoreazy
            </h3>
            <p className="text-gray-300 mb-6">
              Get the latest study tips, success stories, and educational insights 
              delivered to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-lg hover:from-primary-600 hover:to-primary-700 transition-all duration-200"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Scoreazy. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="bg-gray-950 py-6">
        <div className="container-custom">
          <div className="flex flex-wrap items-center justify-center space-x-8 text-gray-400 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>SSL Secured</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>ISO Certified</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <span>GDPR Compliant</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span>Trusted by 10K+ Students</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 