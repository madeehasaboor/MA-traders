import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiPhone, HiMail, HiLocationMarker, HiClock, HiCheck, HiChat } from 'react-icons/hi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    productInterest: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      message: '',
      productInterest: ''
    });
  };

  const handleWhatsAppClick = () => {
    const message = `Hello! I'm interested in your corrugated packaging solutions. Please contact me.`;
    const whatsappUrl = `https://wa.me/923004403664?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const contactInfo = [
         {
       icon: <HiPhone className="w-6 h-6" />,
       title: "Phone",
       details: "+92 300 4403664",
       description: "Call us for immediate assistance"
     },
                   {
        icon: <HiMail className="w-6 h-6" />,
        title: "Email",
        details: "abdulsaboormalik10@gmail.com",
        description: "Send us an email anytime"
      },
     {
       icon: <HiChat className="w-6 h-6" />,
       title: "WhatsApp",
       details: "+92 300 4403664",
       description: "Chat with us on WhatsApp"
     },
    {
      icon: <HiLocationMarker className="w-6 h-6" />,
      title: "Address",
      details: "Manufacturing Plant, Industrial Zone",
      description: "Visit our facility"
    },
    {
      icon: <HiClock className="w-6 h-6" />,
      title: "Business Hours",
      details: "Mon - Fri: 8:00 AM - 6:00 PM",
      description: "Saturday: 9:00 AM - 2:00 PM"
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
              Get in <span className="text-primary-600">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Ready to discuss your packaging needs? Contact us today and let's create the perfect corrugated solution for your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Send us a Message
              </h2>
              
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="card p-8 text-center"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <HiCheck className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Thank You!
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Your message has been sent successfully. We'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="btn-primary"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="your.email@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Your company name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Product Interest
                    </label>
                    <select
                      name="productInterest"
                      value={formData.productInterest}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">Select a product</option>
                      <option value="box-board">Corrugated Box Board</option>
                      <option value="trays">Corrugated Trays</option>
                      <option value="rolls">Corrugated Rolls</option>
                      <option value="custom">Custom Solutions</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Tell us about your packaging needs..."
                    />
                  </div>

                                     <button
                     type="submit"
                     className="btn-primary w-full"
                   >
                     Send Message
                   </button>
                   
                   <button
                     type="button"
                     onClick={handleWhatsAppClick}
                     className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                   >
                     <HiChat className="w-5 h-5" />
                     <span>Chat on WhatsApp</span>
                   </button>
                </form>
              )}
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Contact Information
              </h2>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                                     <motion.div
                     key={index}
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.6, delay: index * 0.1 }}
                     className={`flex items-start space-x-4 ${info.title === 'WhatsApp' ? 'cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors' : ''}`}
                     onClick={info.title === 'WhatsApp' ? handleWhatsAppClick : undefined}
                   >
                     <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                       info.title === 'WhatsApp' ? 'bg-green-100 text-green-600' : 'bg-primary-100 text-primary-600'
                     }`}>
                       {info.icon}
                     </div>
                     <div>
                       <h3 className="text-lg font-semibold text-gray-900 mb-1">
                         {info.title}
                       </h3>
                       <p className="text-gray-600 font-medium mb-1">
                         {info.details}
                       </p>
                       <p className="text-gray-500 text-sm">
                         {info.description}
                       </p>
                     </div>
                   </motion.div>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Our Location
                </h3>
                <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <HiLocationMarker className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-gray-600">
                      Manufacturing Plant<br />
                      Industrial Zone
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our products and services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="card p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What is the minimum order quantity?
              </h3>
              <p className="text-gray-600">
                We offer flexible minimum order quantities to accommodate both small businesses and large-scale operations. Contact us for specific details.
              </p>
            </div>
            <div className="card p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How long does production take?
              </h3>
              <p className="text-gray-600">
                Standard orders typically take 5-7 business days. Rush orders and custom solutions may require additional time.
              </p>
            </div>
            <div className="card p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Do you offer custom designs?
              </h3>
              <p className="text-gray-600">
                Yes! We specialize in custom corrugated packaging solutions tailored to your specific requirements and brand guidelines.
              </p>
            </div>
            <div className="card p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What are your payment terms?
              </h3>
              <p className="text-gray-600">
                We offer flexible payment terms including net 30 for qualified customers. Contact us to discuss payment options.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
