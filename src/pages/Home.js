import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiArrowRight, HiShieldCheck, HiLightningBolt, HiHeart, HiUsers } from 'react-icons/hi';

const Home = () => {
  const features = [
    {
      icon: <HiShieldCheck className="w-8 h-8" />,
      title: "Premium Quality",
      description: "State-of-the-art manufacturing ensures every product meets the highest standards."
    },
    {
      icon: <HiLightningBolt className="w-8 h-8" />,
      title: "Fast Delivery",
      description: "Quick turnaround times with reliable shipping to meet your deadlines."
    },
    {
      icon: <HiHeart className="w-8 h-8" />,
      title: "Eco-Friendly",
      description: "Sustainable materials and processes that protect the environment."
    },
    {
      icon: <HiUsers className="w-8 h-8" />,
      title: "Expert Support",
      description: "Dedicated team providing personalized solutions and ongoing support."
    }
  ];

  const products = [
    {
      name: "Corrugated Box Board",
      description: "High-quality board for various packaging applications",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Corrugated Trays",
      description: "Sturdy trays for retail, food, and industrial use",
      image: "https://images.unsplash.com/photo-1586528116493-6c8b5b3b1b1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Corrugated Rolls",
      description: "Versatile rolls for custom packaging solutions",
      image: "https://images.unsplash.com/photo-1586528116493-6c8b5b3b1b1c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="gradient-bg min-h-screen flex items-center">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Premium <span className="text-primary-600">Corrugated</span> Solutions
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                At M.A.Mobeen Traders, we deliver high-quality corrugated packaging that protects, performs, and promotes your brand. From box boards to custom trays, we're your trusted partner in packaging excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/products"
                  className="btn-primary inline-flex items-center justify-center"
                >
                  Explore Products
                  <HiArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/contact"
                  className="btn-secondary inline-flex items-center justify-center"
                >
                  Get Quote
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="aspect-square bg-gradient-to-br from-primary-100 to-blue-100 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-primary-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                      <span className="text-white text-4xl font-bold">C</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      M.A.Mobeen Traders
                    </h3>
                    <p className="text-gray-600">
                      Your Packaging Partner
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine innovation, quality, and sustainability to deliver packaging solutions that exceed expectations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-6 text-center"
              >
                <div className="text-primary-600 mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Premium Products
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our range of high-quality corrugated solutions designed for every industry need.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="card overflow-hidden"
              >
                <div className="aspect-video bg-gradient-to-br from-primary-100 to-blue-100 flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="w-16 h-16 bg-primary-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <span className="text-white font-bold text-lg">C</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {product.name}
                    </h3>
                    <p className="text-gray-600">
                      {product.description}
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <Link
                    to="/products"
                    className="text-primary-600 hover:text-primary-700 font-semibold inline-flex items-center"
                  >
                    Learn More
                    <HiArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-12"
          >
            <Link
              to="/products"
              className="btn-primary inline-flex items-center"
            >
              View All Products
              <HiArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
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
              Ready to Transform Your Packaging?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how our premium corrugated solutions can enhance your brand and protect your products.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="btn-secondary"
              >
                Get Started Today
              </Link>
              <Link
                to="/about"
                className="bg-white text-primary-600 hover:bg-gray-50 font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Learn More About Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
