'use client';

import { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Clock, FileText } from 'lucide-react';

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    companyName: '',
    industry: '',
    website: '',
    companySize: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    services: [],
    goals: '',
    timeline: '',
    budget: '',
    currentMarketing: '',
    challenges: '',
    additionalInfo: '',
    consent: false
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (name === 'services' && type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        services: checked 
          ? [...prev.services, value]
          : prev.services.filter(service => service !== value)
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          companyName: '',
          industry: '',
          website: '',
          companySize: '',
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          services: [],
          goals: '',
          timeline: '',
          budget: '',
          currentMarketing: '',
          challenges: '',
          additionalInfo: '',
          consent: false
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
      <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100 text-center max-w-4xl mx-auto">
        <div className="w-20 h-20 mx-auto mb-8 bg-green-100 rounded-full flex items-center justify-center">
          <CheckCircle className="w-10 h-10 text-green-600" />
        </div>
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Quote Request Received!</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          Thank you for your detailed submission! We've received your quote request and will prepare a 
          comprehensive proposal within <strong>24-48 hours</strong>.
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8 max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-[#FFD302]/20 to-[#FFD302]/10 p-4 rounded-xl">
            <div className="text-2xl font-bold text-[#002186] mb-1">24-48hrs</div>
            <div className="text-sm text-gray-600">Expert Analysis</div>
          </div>
          <div className="bg-gradient-to-br from-[#002186]/20 to-[#002186]/10 p-4 rounded-xl">
            <div className="text-2xl font-bold text-[#002186] mb-1">Custom</div>
            <div className="text-sm text-gray-600">Proposal</div>
          </div>
          <div className="bg-gradient-to-br from-green-500/20 to-green-500/10 p-4 rounded-xl">
            <div className="text-2xl font-bold text-[#002186] mb-1">Free</div>
            <div className="text-sm text-gray-600">Consultation</div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => setSubmitStatus(null)}
            className="inline-flex items-center px-6 py-3 bg-white border-2 border-[#002186] text-[#002186] font-semibold rounded-xl hover:bg-[#002186] hover:text-white transition-all duration-300"
          >
            Submit Another Request
          </button>
          <a
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-[#002186] text-white font-semibold rounded-xl hover:bg-[#001760] transition-all duration-300"
          >
            Contact Us Directly
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100 max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-[#002186] to-[#001760] rounded-2xl flex items-center justify-center">
          <FileText className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Tell Us About Your Project</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          The more details you provide, the more accurate and helpful your custom proposal will be. This takes about 5 minutes to complete.
        </p>
      </div>
      
      {submitStatus === 'error' && (
        <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center">
          <AlertCircle className="w-5 h-5 text-red-600 mr-3 flex-shrink-0" />
          <p className="text-red-700">
            There was an error submitting your quote request. Please try again or contact us directly.
          </p>
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-10">
        
        {/* Business Information */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <div className="flex items-center mb-6">
            <div className="w-8 h-8 bg-[#002186] rounded-lg flex items-center justify-center mr-3">
              <span className="text-white font-bold">1</span>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900">Business Information</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="companyName" className="block text-sm font-semibold text-gray-900 mb-2">
                Company Name *
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#002186] focus:border-transparent transition-all duration-300"
                placeholder="Enter your company name"
              />
            </div>
            <div>
              <label htmlFor="industry" className="block text-sm font-semibold text-gray-900 mb-2">
                Industry *
              </label>
              <select
                id="industry"
                name="industry"
                value={formData.industry}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#002186] focus:border-transparent transition-all duration-300"
              >
                <option value="">Select your industry</option>
                <option value="ecommerce">E-commerce</option>
                <option value="healthcare">Healthcare</option>
                <option value="technology">Technology</option>
                <option value="education">Education</option>
                <option value="manufacturing">Manufacturing</option>
                <option value="real-estate">Real Estate</option>
                <option value="finance">Finance</option>
                <option value="food-beverage">Food & Beverage</option>
                <option value="professional-services">Professional Services</option>
                <option value="non-profit">Non-Profit</option>
                <option value="automotive">Automotive</option>
                <option value="travel-tourism">Travel & Tourism</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="website" className="block text-sm font-semibold text-gray-900 mb-2">
                Current Website
              </label>
              <input
                type="url"
                id="website"
                name="website"
                value={formData.website}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#002186] focus:border-transparent transition-all duration-300"
                placeholder="https://yourwebsite.com"
              />
            </div>
            <div>
              <label htmlFor="companySize" className="block text-sm font-semibold text-gray-900 mb-2">
                Company Size
              </label>
              <select
                id="companySize"
                name="companySize"
                value={formData.companySize}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#002186] focus:border-transparent transition-all duration-300"
              >
                <option value="">Select company size</option>
                <option value="1-10">1-10 employees</option>
                <option value="11-50">11-50 employees</option>
                <option value="51-200">51-200 employees</option>
                <option value="201-500">201-500 employees</option>
                <option value="500+">500+ employees</option>
              </select>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <div className="flex items-center mb-6">
            <div className="w-8 h-8 bg-[#002186] rounded-lg flex items-center justify-center mr-3">
              <span className="text-white font-bold">2</span>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900">Contact Information</h3>
          </div>
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
          </div>
        </div>

        {/* Services Needed */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <div className="flex items-center mb-6">
            <div className="w-8 h-8 bg-[#002186] rounded-lg flex items-center justify-center mr-3">
              <span className="text-white font-bold">3</span>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900">Services You're Interested In *</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "PPC Management",
              "SEO Optimization", 
              "Social Media Management",
              "Web Development",
              "Brand Marketing",
              "Content Marketing",
              "Email Marketing",
              "Not Sure - Need Consultation"
            ].map((service, index) => (
              <label key={index} className="group flex items-center space-x-3 p-3 rounded-lg hover:bg-white transition-colors cursor-pointer">
                <input
                  type="checkbox"
                  name="services"
                  value={service.toLowerCase().replace(/ /g, '-')}
                  checked={formData.services.includes(service.toLowerCase().replace(/ /g, '-'))}
                  onChange={handleChange}
                  className="w-4 h-4 text-[#002186] border-gray-300 rounded focus:ring-[#002186]"
                />
                <span className="text-gray-700 group-hover:text-[#002186] transition-colors font-medium">{service}</span>
              </label>
            ))}
          </div>
          {formData.services.length === 0 && (
            <p className="text-sm text-red-600 mt-2">Please select at least one service.</p>
          )}
        </div>

        {/* Goals and Timeline */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <div className="flex items-center mb-6">
            <div className="w-8 h-8 bg-[#002186] rounded-lg flex items-center justify-center mr-3">
              <span className="text-white font-bold">4</span>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900">Project Details</h3>
          </div>
          <div className="space-y-6">
            <div>
              <label htmlFor="goals" className="block text-sm font-semibold text-gray-900 mb-2">
                What are your primary goals? *
              </label>
              <textarea
                id="goals"
                name="goals"
                rows={4}
                value={formData.goals}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#002186] focus:border-transparent transition-all duration-300 resize-none"
                placeholder="Describe what you want to achieve (e.g., increase leads by 50%, improve brand awareness, boost online sales, etc.)"
              ></textarea>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="timeline" className="block text-sm font-semibold text-gray-900 mb-2">
                  Preferred Timeline *
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#002186] focus:border-transparent transition-all duration-300"
                >
                  <option value="">Select timeline</option>
                  <option value="asap">As soon as possible</option>
                  <option value="1-month">Within 1 month</option>
                  <option value="2-3-months">2-3 months</option>
                  <option value="3-6-months">3-6 months</option>
                  <option value="6+ months">6+ months</option>
                  <option value="just-exploring">Just exploring options</option>
                </select>
              </div>
              <div>
                <label htmlFor="budget" className="block text-sm font-semibold text-gray-900 mb-2">
                  Monthly Budget Range *
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  required
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
            </div>
          </div>
        </div>

        {/* Current Marketing */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <div className="flex items-center mb-6">
            <div className="w-8 h-8 bg-[#002186] rounded-lg flex items-center justify-center mr-3">
              <span className="text-white font-bold">5</span>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900">Current Marketing Efforts</h3>
          </div>
          <div className="space-y-6">
            <div>
              <label htmlFor="currentMarketing" className="block text-sm font-semibold text-gray-900 mb-2">
                What marketing activities are you currently doing?
              </label>
              <textarea
                id="currentMarketing"
                name="currentMarketing"
                rows={3}
                value={formData.currentMarketing}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#002186] focus:border-transparent transition-all duration-300 resize-none"
                placeholder="Describe your current marketing efforts, tools you're using, what's working, what isn't..."
              ></textarea>
            </div>
            
            <div>
              <label htmlFor="challenges" className="block text-sm font-semibold text-gray-900 mb-2">
                What are your biggest marketing challenges?
              </label>
              <textarea
                id="challenges"
                name="challenges"
                rows={3}
                value={formData.challenges}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#002186] focus:border-transparent transition-all duration-300 resize-none"
                placeholder="Tell us about the obstacles you're facing with your current marketing efforts..."
              ></textarea>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <div className="flex items-center mb-6">
            <div className="w-8 h-8 bg-[#002186] rounded-lg flex items-center justify-center mr-3">
              <span className="text-white font-bold">6</span>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900">Additional Information</h3>
          </div>
          <div>
            <label htmlFor="additionalInfo" className="block text-sm font-semibold text-gray-900 mb-2">
              Anything else you'd like us to know?
            </label>
            <textarea
              id="additionalInfo"
              name="additionalInfo"
              rows={4}
              value={formData.additionalInfo}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#002186] focus:border-transparent transition-all duration-300 resize-none"
              placeholder="Share any additional details about your business, specific requirements, competitors you admire, or questions you have..."
            ></textarea>
          </div>
        </div>

        {/* Consent */}
        <div className="flex items-start space-x-3">
          <input
            type="checkbox"
            id="consent"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
            required
            className="mt-1 w-4 h-4 text-[#002186] border-gray-300 rounded focus:ring-[#002186]"
          />
          <label htmlFor="consent" className="text-sm text-gray-600">
            I agree to receive communications from NXL Digital regarding this quote request and understand that I can unsubscribe at any time. *
          </label>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            disabled={isSubmitting || formData.services.length === 0}
            className="group inline-flex items-center justify-center px-12 py-4 bg-[#002186] text-white font-bold rounded-xl hover:bg-[#001760] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl text-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            {isSubmitting ? (
              <>
                <Clock className="mr-2 w-6 h-6 animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                Get My Custom Quote
                <Send className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>
          <p className="text-sm text-gray-500 mt-4">
            We'll send you a detailed proposal within 24-48 hours
          </p>
        </div>
      </form>
    </div>
  );
}