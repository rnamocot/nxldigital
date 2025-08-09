import Link from "next/link";
import { Target, TrendingUp, BarChart3, Users, CheckCircle, Sparkles, Award, Zap, Clock, Shield, Star, Lightbulb, Search, Globe, Calendar, FileText, DollarSign, MessageCircle, ArrowRight, Send, Phone, Mail } from "lucide-react";
import { metaTagsData } from "../lib/metaTagsData";
import QuoteForm from './QuoteForm';

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
          <QuoteForm />
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