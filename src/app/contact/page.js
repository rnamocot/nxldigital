import Link from "next/link";
import { Mail, Clock, Star } from "lucide-react";
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
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            Get In <span className="bg-gradient-to-r from-[#002186] to-[#FFD302] bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your digital presence? Let's discuss how we can help your business grow with our proven marketing strategies.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Contact Form */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <p className="text-lg text-gray-600 mb-8">
                Fill out the form below and we'll get back to you within 24 hours with a customized strategy for your business.
              </p>
              
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002186] focus:border-transparent transition"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002186] focus:border-transparent transition"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002186] focus:border-transparent transition"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002186] focus:border-transparent transition"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002186] focus:border-transparent transition"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002186] focus:border-transparent transition"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002186] focus:border-transparent transition"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002186] focus:border-transparent transition resize-none"
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
                  className="w-full btn-primary text-lg py-4"
                >
                  Send Message
                </button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Let's Connect</h2>
              <p className="text-lg text-gray-600 mb-8">
                We're here to help you succeed. Reach out through any of the channels below or schedule a free consultation.
              </p>
              
              <div className="space-y-8">
                
                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Us</h3>
                    <p className="text-gray-600 mb-2">Get in touch via email for detailed discussions</p>
                    <a 
                      href="mailto:nxldigital25@gmail.com"
                      className="text-[#002186] font-semibold hover:text-[#FFD302] transition-colors"
                    >
                      nxldigital25@gmail.com
                    </a>
                  </div>
                </div>
                
                {/* Response Time */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Response Time</h3>
                    <p className="text-gray-600">We typically respond within 24 hours during business days</p>
                  </div>
                </div>
                
                {/* Social Media */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Star className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Follow Us</h3>
                    <p className="text-gray-600 mb-3">Stay updated with our latest insights and tips</p>
                    <div className="flex space-x-4">
                      <a 
                        href="https://facebook.com/nxldigital" 
                        className="text-[#002186] hover:text-[#FFD302] transition-colors"
                        aria-label="Facebook"
                      >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                      </a>
                      <a 
                        href="https://linkedin.com/company/nxldigital" 
                        className="text-[#002186] hover:text-[#FFD302] transition-colors"
                        aria-label="LinkedIn"
                      >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Quick Action Card */}
              <div className="mt-12 card p-8 bg-gradient-to-br from-[#002186] to-[#003ba3] text-white text-center">
                <h3 className="text-2xl font-bold mb-4">Need Immediate Help?</h3>
                <p className="text-gray-200 mb-6">
                  Skip the form and get a free consultation right now. We'll analyze your current digital presence and provide actionable recommendations.
                </p>
                <Link href="/get-quote" className="btn-accent">
                  Get Free Analysis
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Get quick answers to common questions about our services and process.
            </p>
          </div>
          
          <div className="space-y-6">
            {[
              {
                question: "How long does it take to see results?",
                answer: "Results vary by service and industry. PPC campaigns can show immediate traffic, while SEO typically takes 3-6 months for significant organic growth. We provide regular reports and updates throughout the process."
              },
              {
                question: "Do you work with small businesses?",
                answer: "Absolutely! We work with businesses of all sizes, from startups to enterprise companies. Our strategies are scalable and tailored to your specific budget and goals."
              },
              {
                question: "What makes NXL Digital different?",
                answer: "Our human-centered approach combines cutting-edge technology with personal attention. We focus on building long-term partnerships and delivering measurable results, not just reporting vanity metrics."
              },
              {
                question: "Can you help with our existing campaigns?",
                answer: "Yes, we offer campaign audits and optimization services. We can review your current efforts and provide recommendations or take over management to improve performance."
              },
              {
                question: "What is your pricing structure?",
                answer: "Our pricing varies based on services, scope, and complexity. We offer transparent, results-based pricing with no hidden fees. Contact us for a custom quote based on your specific needs."
              }
            ].map((faq, index) => (
              <div key={index} className="card p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}