import Link from "next/link";
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
      <section className="section-padding bg-gradient-to-br from-[#002186] to-[#003ba3] text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Get Your Free <span className="text-[#FFD302]">Quote</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Tell us about your project and goals. We'll create a custom digital marketing strategy and provide a detailed proposal within 24 hours.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Request a Quote?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get a comprehensive understanding of how digital marketing can transform your business.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Custom Strategy",
                description: "Receive a personalized digital marketing strategy tailored to your specific business goals and target audience.",
                icon: "<�"
              },
              {
                title: "Transparent Pricing",
                description: "Get clear, detailed pricing with no hidden fees. Know exactly what you're paying for and what results to expect.",
                icon: "=�"
              },
              {
                title: "Expert Analysis",
                description: "Our team will analyze your current digital presence and identify opportunities for growth and optimization.",
                icon: "=�"
              }
            ].map((benefit, index) => (
              <div key={index} className="card p-8 text-center">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="card p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Tell Us About Your Project</h2>
              <p className="text-lg text-gray-600">
                The more details you provide, the more accurate and helpful your custom proposal will be.
              </p>
            </div>
            
            <form className="space-y-8">
              
              {/* Business Information */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Business Information</h3>
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002186] focus:border-transparent transition"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002186] focus:border-transparent transition"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002186] focus:border-transparent transition"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002186] focus:border-transparent transition"
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
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h3>
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
                </div>
              </div>

              {/* Services Needed */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Services You're Interested In *</h3>
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
                    <label key={index} className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        name="services"
                        value={service.toLowerCase().replace(/ /g, '-')}
                        className="w-4 h-4 text-[#002186] border-gray-300 rounded focus:ring-[#002186]"
                      />
                      <span className="text-gray-700">{service}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Goals and Timeline */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Project Details</h3>
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002186] focus:border-transparent transition resize-none"
                      placeholder="Describe what you want to achieve (e.g., increase leads, improve brand awareness, boost online sales, etc.)"
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002186] focus:border-transparent transition"
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
                  </div>
                </div>
              </div>

              {/* Current Marketing */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Current Marketing Efforts</h3>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="currentMarketing" className="block text-sm font-semibold text-gray-900 mb-2">
                      What marketing activities are you currently doing?
                    </label>
                    <textarea
                      id="currentMarketing"
                      name="currentMarketing"
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002186] focus:border-transparent transition resize-none"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002186] focus:border-transparent transition resize-none"
                      placeholder="Tell us about the obstacles you're facing with your current marketing efforts..."
                    ></textarea>
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <div>
                <label htmlFor="additionalInfo" className="block text-sm font-semibold text-gray-900 mb-2">
                  Anything else you'd like us to know?
                </label>
                <textarea
                  id="additionalInfo"
                  name="additionalInfo"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002186] focus:border-transparent transition resize-none"
                  placeholder="Share any additional details about your business, specific requirements, or questions you have..."
                ></textarea>
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
                  className="btn-primary text-xl px-12 py-4"
                >
                  Get My Custom Quote
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Happens Next?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Here's our simple process to get you a comprehensive quote and strategy.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Form Submission",
                description: "Submit your quote request with detailed information about your business and goals."
              },
              {
                step: "2",
                title: "Initial Analysis", 
                description: "Our team analyzes your current digital presence and identifies growth opportunities."
              },
              {
                step: "3",
                title: "Custom Proposal",
                description: "Receive a detailed proposal with strategies, timelines, and transparent pricing within 24 hours."
              },
              {
                step: "4",
                title: "Strategy Call",
                description: "Schedule a free consultation to discuss the proposal and answer any questions you have."
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#FFD302] text-[#002186] rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding gradient-primary text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Questions? We're Here to Help</h2>
          <p className="text-xl mb-8 text-gray-200">
            Prefer to talk before filling out the form? We're happy to discuss your needs and answer any questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-accent text-lg">
              Contact Us First
            </Link>
            <a 
              href="mailto:nxldigital25@gmail.com"
              className="btn-primary text-lg border-2 border-white bg-transparent hover:bg-white hover:text-[#002186]"
            >
              Email Us Directly
            </a>
          </div>
        </div>
      </section>
    </>
  );
}