import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiArrowRight, HiCheck, HiStar } from 'react-icons/hi';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'box-board', name: 'Box Board' },
    { id: 'trays', name: 'Trays' },
    { id: 'rolls', name: 'Rolls' },
    { id: 'custom', name: 'Custom Solutions' }
  ];

  const products = [
    {
      id: 1,
      name: "Premium Corrugated Box Board",
      category: "box-board",
      description: "High-quality corrugated board for various packaging applications with superior strength and durability.",
      features: [
        "Superior strength and durability",
        "Multiple thickness options",
        "Eco-friendly material",
        "Customizable sizes"
      ],
      applications: ["Shipping boxes", "Display packaging", "Industrial packaging"],
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 2,
      name: "Corrugated Food Trays",
      category: "trays",
      description: "Food-grade corrugated trays designed for safe and hygienic food packaging and display.",
      features: [
        "Food-grade certified",
        "Moisture resistant",
        "Stackable design",
        "Easy assembly"
      ],
      applications: ["Food packaging", "Retail display", "Catering services"],
      image: "https://images.unsplash.com/photo-1586528116493-6c8b5b3b1b1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 3,
      name: "Industrial Corrugated Trays",
      category: "trays",
      description: "Heavy-duty corrugated trays for industrial applications requiring maximum strength and protection.",
      features: [
        "Heavy-duty construction",
        "Maximum load capacity",
        "Weather resistant",
        "Reusable design"
      ],
      applications: ["Automotive parts", "Electronics", "Heavy machinery"],
      image: "https://images.unsplash.com/photo-1586528116493-6c8b5b3b1b1c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 4,
      name: "Corrugated Rolls",
      category: "rolls",
      description: "Versatile corrugated rolls for custom packaging solutions and protective wrapping.",
      features: [
        "Flexible application",
        "Custom lengths available",
        "Excellent cushioning",
        "Cost-effective"
      ],
      applications: ["Protective wrapping", "Custom packaging", "Shipping protection"],
      image: "https://images.unsplash.com/photo-1586528116493-6c8b5b3b1b1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 5,
      name: "Retail Display Trays",
      category: "trays",
      description: "Attractive corrugated trays designed specifically for retail display and product presentation.",
      features: [
        "Eye-catching design",
        "Brand customization",
        "Easy setup",
        "Space efficient"
      ],
      applications: ["Retail stores", "Trade shows", "Product launches"],
      image: "https://images.unsplash.com/photo-1586528116493-6c8b5b3b1b1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 6,
      name: "Custom Packaging Solutions",
      category: "custom",
      description: "Bespoke corrugated packaging designed to your exact specifications and requirements.",
      features: [
        "Fully customizable",
        "Design consultation",
        "Prototype development",
        "Bulk production"
      ],
      applications: ["Specialty products", "Luxury items", "Unique shapes"],
      image: "https://images.unsplash.com/photo-1586528116493-6c8b5b3b1b1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

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
              Our <span className="text-primary-600">Products</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Discover our comprehensive range of premium corrugated packaging solutions designed to meet every industry need.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card overflow-hidden"
              >
                <div className="aspect-video bg-gradient-to-br from-primary-100 to-blue-100 flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="w-20 h-20 bg-primary-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <span className="text-white font-bold text-xl">C</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {product.name}
                    </h3>
                    <p className="text-gray-600">
                      {product.description}
                    </p>
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <HiCheck className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Applications</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.applications.map((app, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                        >
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <HiStar key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                      <span className="text-gray-600 ml-2">Premium Quality</span>
                    </div>
                    <button className="text-primary-600 hover:text-primary-700 font-semibold inline-flex items-center">
                      Get Quote
                      <HiArrowRight className="ml-2 w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-gray-600 text-lg">No products found in this category.</p>
            </motion.div>
          )}
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
              Need Custom Solutions?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              We specialize in creating bespoke corrugated packaging solutions tailored to your specific requirements.
            </p>
            <button className="btn-secondary">
              Contact Us for Custom Quote
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Products;
