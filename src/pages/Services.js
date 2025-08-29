import React from 'react';
import { motion } from 'framer-motion';
import { HiCog, HiTruck, HiShieldCheck, HiLightningBolt, HiUsers, HiHeart } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: <HiCog className="w-12 h-12" />,
      title: "Custom Manufacturing",
      description: "Bespoke corrugated packaging solutions tailored to your exact specifications and requirements.",
      features: [
        "Design consultation",
        "Prototype development",
        "Custom sizing and shapes",
        "Brand integration"
      ]
    },
    {
      icon: <HiTruck className="w-12 h-12" />,
      title: "Fast Delivery",
      description: "Quick turnaround times with reliable shipping to meet your production deadlines.",
      features: [
        "Express manufacturing",
        "Nationwide shipping",
        "Real-time tracking",
        "Flexible delivery options"
      ]
    },
    {
      icon: <HiShieldCheck className="w-12 h-12" />,
      title: "Quality Assurance",
      description: "Rigorous quality control processes ensuring every product meets the highest standards.",
      features: [
        "Material testing",
        "Strength verification",
        "Durability checks",
        "Certification compliance"
      ]
    },
    {
      icon: <HiLightningBolt className="w-12 h-12" />,
      title: "Technical Support",
      description: "Expert technical assistance and consultation for optimal packaging solutions.",
      features: [
        "Engineering consultation",
        "Material selection guidance",
        "Performance optimization",
        "Ongoing support"
      ]
    },
    {
      icon: <HiUsers className="w-12 h-12" />,
      title: "Customer Service",
      description: "Dedicated customer support team providing personalized assistance throughout your project.",
      features: [
        "Account management",
        "Order tracking",
        "Issue resolution",
        "Regular updates"
      ]
    },
    {
      icon: <HiHeart className="w-12 h-12" />,
      title: "Sustainability",
      description: "Eco-friendly manufacturing processes and materials that protect the environment.",
      features: [
        "Recycled materials",
        "Energy-efficient production",
        "Waste reduction",
        "Green certifications"
      ]
    }
  ];

  const process = [
    {
      step: "01",
      title: "Consultation",
      description: "We discuss your requirements and understand your packaging needs."
    },
    {
      step: "02",
      title: "Design",
      description: "Our team creates custom designs and prototypes for your approval."
    },
    {
      step: "03",
      title: "Manufacturing",
      description: "State-of-the-art production with quality control at every step."
    },
    {
      step: "04",
      title: "Delivery",
      description: "Fast and reliable delivery to your location with tracking."
    }
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
              Our <span className="text-primary-600">Services</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Comprehensive corrugated packaging services from design to delivery, ensuring your products are protected and your brand is enhanced.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-8 text-center"
              >
                <div className="text-primary-600 mb-6 flex justify-center">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 text-left">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary-600 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A streamlined approach to delivering premium corrugated packaging solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-primary-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
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
              Let's discuss your packaging needs and create the perfect solution for your business.
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

export default Services;
