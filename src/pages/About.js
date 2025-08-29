import React from 'react';
import { motion } from 'framer-motion';
import { HiUsers, HiShieldCheck, HiLightningBolt, HiHeart } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const About = () => {
  const values = [
    {
      icon: <HiShieldCheck className="w-8 h-8" />,
      title: "Quality Assurance",
      description: "Every product meets the highest standards of durability and reliability."
    },
    {
      icon: <HiLightningBolt className="w-8 h-8" />,
      title: "Innovation",
      description: "State-of-the-art manufacturing with cutting-edge technology."
    },
    {
      icon: <HiHeart className="w-8 h-8" />,
      title: "Sustainability",
      description: "Eco-friendly solutions that protect both products and the environment."
    },
    {
      icon: <HiUsers className="w-8 h-8" />,
      title: "Customer Focus",
      description: "Tailored solutions to meet the unique needs of each client."
    }
  ];

  const stats = [
    { number: "15+", label: "Years Experience" },
    { number: "500+", label: "Happy Clients" },
    { number: "1000+", label: "Products Delivered" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="gradient-bg section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              About <span className="text-primary-600">M.A.Mobeen Traders</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Leading the industry with premium corrugated packaging solutions that protect, perform, and promote your brand.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  At M.A.Mobeen Traders, we specialize in delivering high-quality corrugated box board solutions for a wide range of industries. With our state-of-the-art manufacturing plant, we produce premium corrugated trays and corrugated rolls that meet the highest standards of durability, strength, and reliability.
                </p>
                <p>
                  Our mission is to provide businesses with packaging solutions that not only protect their products but also enhance their brand image. Whether you need sturdy trays for retail, food, or industrial use, or versatile corrugated rolls for custom packaging, we ensure every product is crafted with precision and care.
                </p>
                <p>
                  Equipped with modern machinery and a dedicated team, our plant combines efficiency, innovation, and quality control to deliver consistent results. We take pride in our ability to meet both small-scale and bulk orders, tailoring our products to suit the unique needs of each client.
                </p>
                <p>
                  At M.A.Mobeen Traders, we are committed to sustainability, durability, and excellence. Our corrugated solutions are designed to be eco-friendly, strong, and reliable, making us a trusted partner in the packaging industry.
                </p>
                <p className="font-semibold text-primary-600">
                  Choose us for packaging that protects, performs, and promotes your brand.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary-100 to-blue-100 rounded-2xl p-8">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                    Our Leadership
                  </h3>
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-primary-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <span className="text-white font-bold text-xl">AM</span>
                      </div>
                      <h4 className="text-xl font-semibold text-gray-900">Abdul Mobeen Malik</h4>
                      <p className="text-primary-600 font-medium">Chief Executive Officer</p>
                      <p className="text-gray-600 text-sm mt-2">
                        Leading our company with vision and expertise in the packaging industry.
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-20 h-20 bg-secondary-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <span className="text-white font-bold text-xl">AS</span>
                      </div>
                      <h4 className="text-xl font-semibold text-gray-900">Abdul Saboor Malik</h4>
                      <p className="text-primary-600 font-medium">Director</p>
                      <p className="text-gray-600 text-sm mt-2">
                        Overseeing operations and strategic development of our manufacturing processes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and every product we create.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-6 text-center"
              >
                <div className="text-primary-600 mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding gradient-bg">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl lg:text-5xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how our premium corrugated solutions can meet your packaging needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="btn-secondary"
              >
                Contact Us
              </Link>
              <Link
                to="/products"
                className="bg-white text-primary-600 hover:bg-gray-50 font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                View Products
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
