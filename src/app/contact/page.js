import Link from "next/link";
import { Mail, Clock, MapPin, Phone, Users, Star, ArrowRight, CheckCircle, Sparkles, Award, Zap, MessageCircle, Calendar, Globe, Send } from "lucide-react";
import { metaTagsData } from "../lib/metaTagsData";

export const metadata = {
  title: metaTagsData.contact.title,
  description: metaTagsData.contact.description,
  keywords: metaTagsData.contact.keywords,
  openGraph: metaTagsData.contact.openGraph,
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-1/4 w-40 h-40 border border-[#FFD302]/30 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-1/4 w-32 h-32 border border-[#002186]/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/6 w-6 h-6 bg-[#FFD302]/50 rounded-full animate-ping"></div>
          <div className="absolute top-1/3 right-1/6 w-8 h-8 bg-[#002186]/20 rounded-full animate-bounce"></div>
          
          {/* Floating contact badges */}
          <div className="absolute top-20 right-20 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-gray-100 animate-float">
            <div className="text-xs font-semibold text-[#002186] flex items-center">
              <MessageCircle className="w-3 h-3 mr-2 text-[#FFD302]" />
              24h Response
            </div>
          </div>
          <div className="absolute bottom-32 left-10 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-gray-100 animate-float-slow">
            <div className="text-xs font-semibold text-[#002186] flex items-center">
              <Award className="w-3 h-3 mr-2 text-green-500" />
              Expert Support
            </div>
          </div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-[#FFD302]/10 border border-[#FFD302]/20 rounded-full text-sm font-medium text-[#002186] mb-8">
            <Sparkles className="w-4 h-4 mr-2" />
            Let's Connect & Grow Together
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-gray-900 leading-tight">
            Ready to Transform Your
            <br />
            <span className="bg-gradient-to-r from-[#002186] to-[#FFD302] bg-clip-text text-transparent">Digital Presence?</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
            Let's discuss how we can help your business achieve remarkable growth with our proven digital marketing strategies. 
            We're here to answer your questions and craft the perfect solution for you.
          </p>

          {/* Contact stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: "24hrs", label: "Response Time", icon: Clock },
              { number: "500+", label: "Happy Clients", icon: Users },
              { number: "98%", label: "Success Rate", icon: Award },
              { number: "5+ Years", label: "Experience", icon: Star }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 mx-auto mb-3 bg-[#FFD302]/10 rounded-full flex items-center justify-center group-hover:bg-[#FFD302]/20 transition-colors">
                  <stat.icon className="w-6 h-6 text-[#002186]" />
                </div>
                <div className="text-2xl font-bold text-[#002186] mb-1">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-[#FFD302]/10 border border-[#FFD302]/20 rounded-full text-sm font-medium text-[#002186] mb-6">
              Multiple Ways to Connect
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Choose Your <span className="bg-gradient-to-r from-[#002186] to-[#FFD302] bg-clip-text text-transparent">Preferred Way</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you prefer a quick call, detailed email, or comprehensive form submission, we're here to help through your preferred channel.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Quick Contact */}
            <div className="group bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-[#FFD302]/20 to-transparent rounded-bl-3xl"></div>
              
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-[#FFD302] to-yellow-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#002186] transition-colors">
                Quick Call
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Need immediate answers? Schedule a 15-minute discovery call to discuss your project and get expert advice.
              </p>
              
              <Link 
                href="/get-quote"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#002186] text-white font-semibold rounded-xl hover:bg-[#001760] transition-all duration-300"
              >
                Schedule Call
                <Calendar className="ml-2 w-4 h-4" />
              </Link>
            </div>

            {/* Email Contact */}
            <div className="group bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-[#FFD302]/20 to-transparent rounded-bl-3xl"></div>
              
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-[#002186] to-[#001760] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#002186] transition-colors">
                Email Us
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Prefer email? Send us your project details and we'll respond with a detailed plan within 24 hours.
              </p>
              
              <a 
                href="mailto:contact@nxldigital.com"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#002186] text-white font-semibold rounded-xl hover:bg-[#001760] transition-all duration-300"
              >
                Send Email
                <Send className="ml-2 w-4 h-4" />
              </a>
            </div>

            {/* Comprehensive Form */}
            <div className="group bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-[#FFD302]/20 to-transparent rounded-bl-3xl"></div>
              
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#002186] transition-colors">
                Detailed Form
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Want a comprehensive consultation? Fill out our detailed form below for a personalized strategy session.
              </p>
              
              <a 
                href="#contact-form"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#002186] text-white font-semibold rounded-xl hover:bg-[#001760] transition-all duration-300"
              >
                Fill Form Below
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section id="contact-form" className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Contact Form */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-gray-100">
              <div className="text-center mb-8">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Send Us a Message</h2>
                <p className="text-lg text-gray-600">
                  Fill out the form below and we'll get back to you within 24 hours with a customized strategy for your business.
                </p>
              </div>
              
              <form className="space-y-6">
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
                
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-gray-900 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
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
                    required
                    className="mt-1 w-4 h-4 text-[#002186] border-gray-300 rounded focus:ring-[#002186]"
                  />
                  <label htmlFor="privacy" className="text-sm text-gray-600">
                    I agree to receive communications from NXL Digital and understand that I can unsubscribe at any time. *
                  </label>
                </div>
                
                <button
                  type="submit"
                  className="w-full group inline-flex items-center justify-center px-8 py-4 bg-[#002186] text-white font-bold rounded-xl hover:bg-[#001760] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl text-lg"
                >
                  Send Message
                  <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div>
              <div className="mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Let's Connect</h2>
                <p className="text-lg text-gray-600 mb-8">
                  We're here to help you succeed. Reach out through any of the channels below or schedule a free consultation to discuss your project in detail.
                </p>
              </div>
              
              <div className="space-y-8 mb-12">
                
                {/* Email */}
                <div className="group flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#002186] to-[#001760] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Us</h3>
                    <p className="text-gray-600 mb-3">Get in touch via email for detailed discussions</p>
                    <a 
                      href="mailto:contact@nxldigital.com"
                      className="text-[#002186] font-semibold hover:text-[#FFD302] transition-colors inline-flex items-center"
                    >
                      contact@nxldigital.com
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </a>
                  </div>
                </div>
                
                {/* Response Time */}
                <div className="group flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#FFD302] to-yellow-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Clock className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Response Time</h3>
                    <p className="text-gray-600 mb-3">We typically respond within 24 hours during business days</p>
                    <div className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 text-sm font-semibold rounded-full">
                      <CheckCircle className="w-4 h-4 mr-1" />
                      Fast Response
                    </div>
                  </div>
                </div>
                
                {/* Location */}
                <div className="group flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Globe className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Serving Worldwide</h3>
                    <p className="text-gray-600 mb-3">Remote-first agency serving clients globally with local expertise</p>
                    <div className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full">
                      <Globe className="w-4 h-4 mr-1" />
                      Global Reach
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Quick Action Card */}
              <div className="bg-gradient-to-br from-[#002186] to-[#003ba3] text-white rounded-3xl p-8 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 mx-auto mb-6 bg-[#FFD302]/20 rounded-2xl flex items-center justify-center">
                    <Zap className="w-8 h-8 text-[#FFD302]" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Need Immediate Help?</h3>
                  <p className="text-gray-200 mb-6 leading-relaxed">
                    Skip the form and get a free consultation right now. We'll analyze your current digital presence and provide actionable recommendations within 24 hours.
                  </p>
                  <Link 
                    href="/get-quote" 
                    className="inline-flex items-center justify-center px-6 py-3 bg-[#FFD302] text-[#002186] font-bold rounded-xl hover:bg-yellow-400 transform hover:scale-105 transition-all duration-300"
                  >
                    Get Free Analysis
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-[#FFD302]/10 border border-[#FFD302]/20 rounded-full text-sm font-medium text-[#002186] mb-6">
              Frequently Asked Questions
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Quick <span className="bg-gradient-to-r from-[#002186] to-[#FFD302] bg-clip-text text-transparent">Answers</span>
            </h2>
            <p className="text-xl text-gray-600">
              Get quick answers to common questions about our services and process.
            </p>
          </div>
          
          <div className="space-y-6">
            {[
              {
                question: "How long does it take to see results?",
                answer: "Results vary by service and industry. PPC campaigns can show immediate traffic within 24-48 hours, while SEO typically takes 3-6 months for significant organic growth. Social media and brand marketing show progressive results over 2-4 months. We provide regular reports and updates throughout the process."
              },
              {
                question: "Do you work with small businesses?",
                answer: "Absolutely! We work with businesses of all sizes, from startups to enterprise companies. Our strategies are scalable and tailored to your specific budget and goals. We offer flexible packages that can grow with your business."
              },
              {
                question: "What makes NXL Digital different?",
                answer: "Our human-centered approach combines cutting-edge technology with personal attention. We focus on building long-term partnerships and delivering measurable results, not just reporting vanity metrics. Every strategy is custom-built for your unique business goals."
              },
              {
                question: "Can you help with our existing campaigns?",
                answer: "Yes, we offer campaign audits and optimization services. We can review your current efforts, identify improvement opportunities, and either provide recommendations or take over management to improve performance and ROI."
              },
              {
                question: "What is your pricing structure?",
                answer: "Our pricing varies based on services, scope, and complexity. We offer transparent, results-based pricing with no hidden fees. After understanding your needs, we provide a detailed proposal with clear pricing and expected outcomes. Contact us for a custom quote."
              },
              {
                question: "Do you provide ongoing support?",
                answer: "Yes, we provide comprehensive ongoing support including regular strategy reviews, performance monitoring, monthly reports, and direct access to your account manager. We're committed to your long-term success."
              }
            ].map((faq, index) => (
              <div key={index} className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-[#002186] transition-colors flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#FFD302] mr-3 mt-0.5 flex-shrink-0" />
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed pl-8">{faq.answer}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-6">Still have questions?</p>
            <Link 
              href="/get-quote"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#002186] text-white font-bold rounded-xl hover:bg-[#001760] transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Schedule a Free Consultation
              <Calendar className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}