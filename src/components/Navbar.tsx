'use client'
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from '@emailjs/browser';

emailjs.init("gipPkaR3oxwlkLC_6");

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  [key: string]: string;
}

const Navbar = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInitialMessage = () => {
    setShowForm(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const templateParams = {
      to_email: 'mfaizanakram536@gmail.com',
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message
    };

    emailjs.send(
      'service_0hwcn2q',
      'template_0pw18xb',
      templateParams,
      'gipPkaR3oxwlkLC_6'
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setIsSubmitted(true);
      
      setTimeout(() => {
        setIsSubmitted(false);
        setIsChatOpen(false);
        setShowForm(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      }, 3000);
    })
    .catch((err) => {
      console.log('FAILED...', err);
      alert('Failed to send message. Please try again.');
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Animation variants
  const chatWindowVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 }
  };

  return (
    <>
      <header>
        {/* Top Bar */}
        <div className="bg-gray-100 flex justify-between items-center text-sm py-2 px-6">
          <p>Call Us: +971 56 856 3660</p>
          <p>Welcome to House of Ultimate Quality</p>
          <p>Contact Us</p>
        </div>

        {/* Main Navbar */}
        <nav className="bg-white shadow-md">
          <div className="flex justify-between items-center px-6 py-6">
            {/* Logo */}
            <div className="flex items-center space-x-2 ml-11">
              <Image
                src="/r1.png" // Replace with your logo's path
                alt="Logo"
                width={150}
                height={150}
              />
            </div>

            {/* Search Bar */}
            <div className="flex-grow mx-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-[600px] pl-12 pr-4 py-3 bg-slate-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {/* Search Icon */}
                <svg
                  className="absolute top-1/2 left-4 transform -translate-y-1/2 w-5 h-5 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 4a7 7 0 100 14 7 7 0 000-14zm0 0l6 6"
                  />
                </svg>
              </div>
            </div>

            {/* Icons */}
            <div className="flex items-center space-x-8 mr-11">
              <a href="#" className="text-gray-700 hover:text-blue-500">
                My Account
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-500">
                Customer Help
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-500">
                Checkout
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="bg-black text-white font-bold">
            <div className="flex justify-between items-center px-6 py-3">
              <div className="flex space-x-6 ml-12">
                <a href="#" className="hover:text-blue-400">
                  Home
                </a>
                <a href="#" className="hover:text-blue-400">
                  Laptops
                </a>
                <a href="#" className="hover:text-blue-400">
                  Smart TVs
                </a>
                <a href="#" className="hover:text-blue-400">
                  About
                </a>
                <a href="#" className="hover:text-blue-400">
                  Customer Help
                </a>
                <a href="#" className="hover:text-blue-400">
                  Contact Us
                </a>
              </div>

              <div className="flex items-center space-x-2">
                <span className="text-blue-400">0.00 Pkr</span>
                <div className="relative">
                  <span className="absolute top-0 right-0 bg-blue-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    0
                  </span>
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 3h18l-1 9H4l-1-9zm3 16a2 2 0 100-4 2 2 0 000 4zm12 0a2 2 0 100-4 2 2 0 000 4z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Flash Sale Section */}
          <div className="bg-sky-500 text-white text-center py-2 text-sm font-semibold">
            Latest Deals & Flash Sale Offers ⚡ Up to 49% Off
          </div>
        </nav>
      </header>

      {/* Floating Chat Icon with Pulse Effect */}
      <motion.div 
        className="fixed bottom-8 right-8 z-50"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <button
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 flex items-center justify-center relative"
        >
          <span className="absolute w-full h-full rounded-full animate-ping bg-blue-400 opacity-75"></span>
          {!isChatOpen ? (
            <svg
              className="w-6 h-6 relative"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6 relative"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </button>
      </motion.div>

      {/* Animated Chat Window */}
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={chatWindowVariants}
            transition={{ type: "spring", duration: 0.6 }}
            className="fixed bottom-24 right-8 w-96 bg-white rounded-xl shadow-2xl z-50 border border-gray-200 overflow-hidden"
          >
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 rounded-t-xl">
              <h3 className="font-bold text-lg">Customer Support</h3>
              <p className="text-sm opacity-90">We are here to help you</p>
            </div>

            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-64 flex items-center justify-center bg-gradient-to-b from-white to-blue-50"
              >
                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", duration: 0.5 }}
                  >
                    <svg
                      className="w-16 h-16 text-green-500 mx-auto mb-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </motion.div>
                  <p className="text-xl font-semibold text-gray-700 mb-2">Thank you!</p>
                  <p className="text-gray-600">Your request has been sent successfully.</p>
                </div>
              </motion.div>
            ) : showForm ? (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="p-6 bg-gradient-to-b from-white to-blue-50"
              >
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Form fields with improved styling */}
                  <div className="space-y-4">
                    {[
                      { name: 'name', type: 'text', placeholder: 'Your Name' },
                      { name: 'email', type: 'email', placeholder: 'Your Email' },
                      { name: 'phone', type: 'tel', placeholder: 'Phone Number' },
                      { name: 'subject', type: 'text', placeholder: 'Subject' }
                    ].map((field) => (
                      <motion.div
                        key={field.name}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <input
                          type={field.type}
                          name={field.name}
                          value={formData[field.name]}
                          onChange={handleChange}
                          placeholder={field.placeholder}
                          required
                          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white bg-opacity-80 backdrop-blur-sm"
                        />
                      </motion.div>
                    ))}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your Message"
                        required
                        rows={4}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white bg-opacity-80 backdrop-blur-sm resize-none"
                      />
                    </motion.div>
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 font-semibold shadow-md"
                  >
                    Send Message
                  </motion.button>
                </form>
              </motion.div>
            ) : (
              <>
                <div className="h-96 p-4 overflow-y-auto bg-gradient-to-b from-white to-blue-50">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-blue-100 p-4 rounded-lg mb-2 shadow-sm"
                  >
                    <p className="text-blue-800 font-medium">
                      Hello! How can we assist you today? 👋
                    </p>
                  </motion.div>
                </div>
                <div className="p-4 border-t bg-white">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Type your message..."
                      className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                          handleInitialMessage();
                        }
                      }}
                    />
                    <motion.button 
                      onClick={handleInitialMessage}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-md"
                    >
                      Send
                    </motion.button>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
