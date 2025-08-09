'use client';

import { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    services: '',
    budget: '',
    message: '',
    privacy: false
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          company: '',
          services: '',
          budget: '',
          message: '',
          privacy: false
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === 'success') {
    return (
      <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-gray-100 text-center">
        <div className="w-16 h-16 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h2>
        <p className="text-lg text-gray-600 mb-6">
          We've received your message and will get back to you within 24 hours during business days.
        </p>
        <button
          onClick={() => setSubmitStatus(null)}
          className="inline-flex items-center px-6 py-3 bg-[#002186] text-white font-semibold rounded-xl hover:bg-[#001760] transition-all duration-300"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-gray-100">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Send Us a Message</h2>
        <p className="text-lg text-gray-600">
          Fill out the form below and we'll get back to you within 24 hours with a customized strategy for your business.
        </p>
      </div>
      
      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center">
          <AlertCircle className="w-5 h-5 text-red-600 mr-3" />
          <p className="text-red-700">
            There was an error sending your message. Please try again or contact us directly.
          </p>
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="firstName" className="block text-sm font-semibold text-gray-900 mb-2">
              First Name *
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#002186] focus:border-transparent transition-all duration-300"
              placeholder="Enter your first name"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-semibold text-gray-900 mb-2">
              Last Name *
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#002186] focus:border-transparent transition-all duration-300"
              placeholder="Enter your last name"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#002186] focus:border-transparent transition-all duration-300"
            placeholder="Enter your email address"
          />
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#002186] focus:border-transparent transition-all duration-300"
            placeholder="Enter your phone number"
          />
        </div>
        
        <div>
          <label htmlFor="company" className="block text-sm font-semibold text-gray-900 mb-2">
            Company Name
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#002186] focus:border-transparent transition-all duration-300"
            placeholder="Enter your company name"
          />
        </div>
        
        <div>
          <label htmlFor="services" className="block text-sm font-semibold text-gray-900 mb-2">
            Services Interested In *
          </label>
          <select
            id="services"
            name="services"
            value={formData.services}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#002186] focus:border-transparent transition-all duration-300"
          >
            <option value="">Select a service</option>
            <option value="ppc">PPC Management</option>
            <option value="seo">SEO Optimization</option>
            <option value="social-media">Social Media Management</option>
            <option value="web-development">Web Development</option>
            <option value="brand-marketing">Brand Marketing</option>
            <option value="multiple">Multiple Services</option>
            <option value="consultation">General Consultation</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="budget" className="block text-sm font-semibold text-gray-900 mb-2">
            Monthly Budget Range
          </label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#002186] focus:border-transparent transition-all duration-300"
          >
            <option value="">Select budget range</option>
            <option value="under-2500">Under $2,500</option>
            <option value="2500-5000">$2,500 - $5,000</option>
            <option value="5000-10000">$5,000 - $10,000</option>
            <option value="10000-25000">$10,000 - $25,000</option>
            <option value="over-25000">Over $25,000</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
            Tell Us About Your Project *
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#002186] focus:border-transparent transition-all duration-300 resize-none"
            placeholder="Describe your goals, challenges, and what you're hoping to achieve..."
          ></textarea>
        </div>
        
        <div className="flex items-start space-x-3">
          <input
            type="checkbox"
            id="privacy"
            name="privacy"
            checked={formData.privacy}
            onChange={handleChange}
            required
            className="mt-1 w-4 h-4 text-[#002186] border-gray-300 rounded focus:ring-[#002186]"
          />
          <label htmlFor="privacy" className="text-sm text-gray-600">
            I agree to receive communications from NXL Digital and understand that I can unsubscribe at any time. *
          </label>
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full group inline-flex items-center justify-center px-8 py-4 bg-[#002186] text-white font-bold rounded-xl hover:bg-[#001760] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl text-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
          <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </form>
    </div>
  );
}