import Link from "next/link";
import { Target, TrendingUp, BarChart3, Users, CheckCircle, Sparkles, Award, Zap, Clock, Shield, Star, Lightbulb, Search, Globe, Calendar, FileText, DollarSign, MessageCircle, ArrowRight, Send, Phone, Mail } from "lucide-react";
import { metaTagsData } from "../lib/metaTagsData";

export const metadata = {
  title: metaTagsData.getQuote.title,
  description: metaTagsData.getQuote.description,
  keywords: metaTagsData.getQuote.keywords,
  openGraph: metaTagsData.getQuote.openGraph,
};

export default function GetQuotePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-[#002186] via-[#003ba3] to-[#001760] text-white overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-1/4 w-40 h-40 border border-[#FFD302]/30 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-1/4 w-32 h-32 border border-white/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/6 w-6 h-6 bg-[#FFD302]/50 rounded-full animate-ping"></div>
          <div className="absolute top-1/3 right-1/6 w-8 h-8 bg-white/20 rounded-full animate-bounce"></div>
          
          {/* Floating quote badges */}
          <div className="absolute top-20 right-20 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-white/20 animate-float">
            <div className="text-xs font-semibold text-white flex items-center">
              <Zap className="w-3 h-3 mr-2 text-[#FFD302]" />
              24h Turnaround
            </div>
          </div>
          <div className="absolute bottom-32 left-10 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-white/20 animate-float-slow">
            <div className="text-xs font-semibold text-white flex items-center">
              <CheckCircle className="w-3 h-3 mr-2 text-green-400" />
              Free Consultation
            </div>
          </div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-[#FFD302]/20 border border-[#FFD302]/30 rounded-full text-sm font-medium text-[#FFD302] mb-8">
            <Sparkles className="w-4 h-4 mr-2" />
            Custom Digital Marketing Strategy
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Get Your Free
            <br />
            <span className="bg-gradient-to-r from-[#FFD302] to-yellow-300 bg-clip-text text-transparent">Custom Quote</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto mb-12 leading-relaxed">
            Tell us about your project and goals. We'll create a custom digital marketing strategy and provide a detailed, 
            transparent proposal within 24 hours – completely free, no obligations.
          </p>

          {/* Quote benefits */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: "Free", label: "Consultation", icon: CheckCircle },
              { number: "24hrs", label: "Response Time", icon: Clock },
              { number: "100%", label: "Transparent", icon: Shield },
              { number: "Custom", label: "Strategy", icon: Target }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 mx-auto mb-3 bg-[#FFD302]/20 rounded-full flex items-center justify-center group-hover:bg-[#FFD302]/30 transition-colors">
                  <stat.icon className="w-6 h-6 text-[#FFD302]" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-[#FFD302]/10 border border-[#FFD302]/20 rounded-full text-sm font-medium text-[#002186] mb-6">
              Why Request a Quote?
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Get a Comprehensive <span className="bg-gradient-to-r from-[#002186] to-[#FFD302] bg-clip-text text-transparent">Strategy Assessment</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover exactly how digital marketing can transform your business with a detailed, actionable plan designed specifically for your goals.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Custom Strategy",
                description: "Receive a personalized digital marketing strategy tailored to your specific business goals, industry, and target audience with detailed recommendations.",
                Icon: Target,
                color: "from-blue-500 to-blue-600"
              },
              {
                title: "Transparent Pricing",
                description: "Get clear, detailed pricing with no hidden fees. Know exactly what you're paying for, what results to expect, and see the ROI projections.",
                Icon: DollarSign,
                color: "from-green-500 to-green-600"
              },
              {
                title: "Expert Analysis",
                description: "Our team will analyze your current digital presence, identify gaps and opportunities, and provide actionable insights for immediate improvements.",
                Icon: Search,
                color: "from-purple-500 to-purple-600"
              }
            ].map((benefit, index) => (
              <div key={index} className="group bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-[#FFD302]/20 to-transparent rounded-bl-3xl"></div>
                
                <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.Icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#002186] transition-colors">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100">
            <div className="text-center mb-12">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-[#002186] to-[#001760] rounded-2xl flex items-center justify-center">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Tell Us About Your Project</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                The more details you provide, the more accurate and helpful your custom proposal will be. This takes about 5 minutes to complete.
              </p>
            </div>
            
            <form className="space-y-10">
              
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
                        className="w-4 h-4 text-[#002186] border-gray-300 rounded focus:ring-[#002186]"
                      />
                      <span className="text-gray-700 group-hover:text-[#002186] transition-colors font-medium">{service}</span>
                    </label>
                  ))}
                </div>
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
                  className="group inline-flex items-center justify-center px-12 py-4 bg-[#002186] text-white font-bold rounded-xl hover:bg-[#001760] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl text-xl"
                >
                  Get My Custom Quote
                  <Send className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="text-sm text-gray-500 mt-4">
                  We'll send you a detailed proposal within 24 hours
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-[#FFD302]/10 border border-[#FFD302]/20 rounded-full text-sm font-medium text-[#002186] mb-6">
              Our Simple Process
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              What Happens <span className="bg-gradient-to-r from-[#002186] to-[#FFD302] bg-clip-text text-transparent">Next?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Here's our straightforward process to get you a comprehensive quote and strategy that drives real results.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Form Submission",
                description: "Submit your quote request with detailed information about your business, goals, and current challenges.",
                Icon: Send,
                color: "from-blue-500 to-blue-600"
              },
              {
                step: "2",
                title: "Expert Analysis", 
                description: "Our team analyzes your current digital presence, competitors, and identifies growth opportunities.",
                Icon: Search,
                color: "from-green-500 to-green-600"
              },
              {
                step: "3",
                title: "Custom Proposal",
                description: "Receive a detailed proposal with strategies, timelines, transparent pricing, and ROI projections within 24 hours.",
                Icon: FileText,
                color: "from-purple-500 to-purple-600"
              },
              {
                step: "4",
                title: "Strategy Call",
                description: "Schedule a free consultation to discuss the proposal, ask questions, and refine the strategy together.",
                Icon: Phone,
                color: "from-orange-500 to-orange-600"
              }
            ].map((step, index) => (
              <div key={index} className="group text-center relative">
                {/* Connection line */}
                {index < 3 && (
                  <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-[#FFD302] to-gray-200 transform translate-x-4 z-0"></div>
                )}
                
                <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                  {/* Large step number background */}
                  <div className="absolute top-4 right-4 text-6xl font-bold text-gray-100 group-hover:text-[#FFD302]/20 transition-colors">
                    {step.step}
                  </div>
                  
                  {/* Step indicator */}
                  <div className="flex justify-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg relative z-10`}>
                      <step.Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#002186] transition-colors relative z-10">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors relative z-10">
                    {step.description}
                  </p>
                  
                  {/* Progress bar */}
                  <div className="mt-6 w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#002186] to-[#FFD302] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-[#002186] to-[#001760] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="w-16 h-16 mx-auto mb-6 bg-[#FFD302]/20 rounded-2xl flex items-center justify-center">
            <MessageCircle className="w-8 h-8 text-[#FFD302]" />
          </div>
          <h2 className="text-4xl font-bold mb-6">Questions? We're Here to Help</h2>
          <p className="text-xl mb-8 text-gray-200">
            Prefer to talk before filling out the form? We're happy to discuss your needs and answer any questions you have.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="group inline-flex items-center justify-center px-8 py-4 bg-[#FFD302] text-[#002186] font-bold rounded-xl hover:bg-yellow-400 transform hover:scale-105 transition-all duration-300 text-lg"
            >
              Contact Us First
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a 
              href="mailto:contact@nxldigital.com"
              className="group inline-flex items-center justify-center px-8 py-4 border-2 border-white bg-transparent hover:bg-white hover:text-[#002186] transition-all duration-300 text-lg font-bold rounded-xl"
            >
              Email Us Directly
              <Mail className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}