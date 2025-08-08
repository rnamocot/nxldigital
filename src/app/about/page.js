import Link from "next/link";
import { Eye, Lightbulb, TrendingUp, Handshake, ArrowRight, CheckCircle, Sparkles, Users, Award, Target, Heart } from "lucide-react";
import { metaTagsData } from "../lib/metaTagsData";

export const metadata = {
  title: metaTagsData.about.title,
  description: metaTagsData.about.description,
  keywords: metaTagsData.about.keywords,
  openGraph: metaTagsData.about.openGraph,
};

export default function AboutPage() {
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
          
          {/* Floating badges */}
          <div className="absolute top-20 right-20 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-gray-100 animate-float">
            <div className="text-xs font-semibold text-[#002186] flex items-center">
              <Heart className="w-3 h-3 mr-2 text-red-500" />
              Human-Centered
            </div>
          </div>
          <div className="absolute bottom-32 left-10 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-gray-100 animate-float-slow">
            <div className="text-xs font-semibold text-[#002186] flex items-center">
              <Award className="w-3 h-3 mr-2 text-[#FFD302]" />
              Award Winning
            </div>
          </div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-[#FFD302]/10 border border-[#FFD302]/20 rounded-full text-sm font-medium text-[#002186] mb-8">
            <Sparkles className="w-4 h-4 mr-2" />
            Meet the Team Behind Your Success
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-gray-900 leading-tight">
            We're <span className="bg-gradient-to-r from-[#002186] to-[#FFD302] bg-clip-text text-transparent">NXL Digital</span>
            <br />
            <span className="text-4xl md:text-5xl text-gray-600 font-normal">Your Growth Partners</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
            Beyond algorithms and automation, we're the architects of meaningful digital connections. 
            Every strategy we craft combines cutting-edge technology with genuine human insight.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link 
              href="/get-quote" 
              className="group inline-flex items-center justify-center px-8 py-4 bg-[#002186] text-white font-semibold rounded-xl hover:bg-[#001760] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl"
            >
              Start Your Journey
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link 
              href="/case-studies" 
              className="group inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-[#002186] hover:text-[#002186] transition-all duration-300"
            >
              See Our Impact
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: "500+", label: "Happy Clients", icon: Users },
              { number: "3+", label: "Years Experience", icon: Award },
              { number: "98%", label: "Success Rate", icon: Target },
              { number: "24/7", label: "Support", icon: Heart }
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

      {/* Our Story */}
      <section className="section-padding bg-white relative">
        {/* Background decoration */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-br from-[#FFD302]/5 to-[#002186]/5 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center px-4 py-2 bg-[#FFD302]/10 border border-[#FFD302]/20 rounded-full text-sm font-medium text-[#002186] mb-6">
                  Our Journey
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  The Story Behind 
                  <span className="bg-gradient-to-r from-[#002186] to-[#FFD302] bg-clip-text text-transparent"> Our Success</span>
                </h2>
              </div>
              
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  Founded with a revolutionary vision to bridge the gap between technology and human connection, 
                  <strong className="text-gray-900"> NXL Digital emerged from a simple belief</strong>: successful digital marketing 
                  requires more than just algorithms and automation—it requires heart.
                </p>
                <p>
                  We recognized that in an increasingly digital world, businesses didn't just need service providers—they needed 
                  <strong className="text-gray-900"> true partners</strong> who understood both the technical complexities and the 
                  human elements that drive real, lasting results.
                </p>
                <p>
                  Today, we're proud to help businesses across industries build meaningful digital ecosystems that don't just 
                  drive traffic, but create <strong className="text-gray-900">genuine connections</strong> and sustainable growth.
                </p>
              </div>

              <div className="flex items-center space-x-4 pt-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#002186] to-[#FFD302] rounded-2xl flex items-center justify-center">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Human-Centered Philosophy</div>
                  <div className="text-gray-600">Every strategy starts with understanding people, not just data</div>
                </div>
              </div>
            </div>
            
            <div className="lg:pl-12">
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-lg border border-gray-100 relative overflow-hidden">
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#FFD302]/20 to-transparent rounded-bl-3xl"></div>
                
                <div className="relative">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-[#002186] rounded-2xl flex items-center justify-center mr-4">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
                  </div>
                  
                  <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                    To empower businesses with digital marketing strategies that combine cutting-edge technology 
                    with genuine human insight, creating sustainable growth and meaningful connections that last.
                  </p>
                  
                  <div className="space-y-4">
                    {[
                      "Human-centered approach to digital marketing",
                      "Data-driven strategies with personal touch", 
                      "Long-term partnerships, not just projects",
                      "Transparent communication and honest results"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-3 group">
                        <CheckCircle className="w-5 h-5 text-[#FFD302] flex-shrink-0 group-hover:scale-110 transition-transform" />
                        <span className="text-gray-700 group-hover:text-gray-900 transition-colors">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-[#FFD302]/10 border border-[#FFD302]/20 rounded-full text-sm font-medium text-[#002186] mb-6">
              Our Foundation
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Values That <span className="bg-gradient-to-r from-[#002186] to-[#FFD302] bg-clip-text text-transparent">Drive Us</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These aren't just words on a wall—they're the principles that guide every decision, 
              every strategy, and every relationship we build.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Transparency",
                description: "Open communication and honest reporting in every aspect of our work. You'll always know exactly what we're doing and why.",
                Icon: Eye,
                color: "from-blue-500 to-blue-600"
              },
              {
                title: "Innovation",
                description: "Staying ahead of digital trends and continuously evolving our strategies to give you the competitive edge.",
                Icon: Lightbulb,
                color: "from-yellow-500 to-orange-500"
              },
              {
                title: "Results-Driven",
                description: "Every campaign is designed and optimized for measurable business impact. We're obsessed with your success.",
                Icon: TrendingUp,
                color: "from-green-500 to-emerald-600"
              },
              {
                title: "Partnership",
                description: "Building long-term relationships based on trust, mutual respect, and shared success stories.",
                Icon: Handshake,
                color: "from-purple-500 to-pink-500"
              }
            ].map((value, index) => (
              <div key={index} className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden text-center">
                {/* Gradient top bar */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${value.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                
                {/* Icon with gradient background */}
                <div className="relative mb-6">
                  <div className={`w-20 h-20 mx-auto bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-xl`}>
                    <value.Icon className="w-10 h-10 text-white" />
                  </div>
                  {/* Pulse effect */}
                  <div className={`absolute inset-0 w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-20 animate-ping`}></div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#002186] transition-colors">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">{value.description}</p>
                
                {/* Decorative corner */}
                <div className="absolute bottom-0 right-0 w-12 h-12 bg-gradient-to-tl from-[#FFD302]/10 to-transparent rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section-padding bg-white relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-20 left-10 w-64 h-64 border border-[#FFD302]/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 border border-[#002186]/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-[#FFD302]/10 border border-[#FFD302]/20 rounded-full text-sm font-medium text-[#002186] mb-6">
              Our Methodology
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              How We <span className="bg-gradient-to-r from-[#002186] to-[#FFD302] bg-clip-text text-transparent">Create Success</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our time-tested approach ensures every client gets personalized attention and measurable results 
              that drive real business growth.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {[
              {
                step: "01",
                title: "Deep Discovery & Strategy",
                description: "We dive deep into understanding your business, goals, audience, and competitive landscape to create a tailored digital marketing strategy that perfectly aligns with your objectives and budget.",
                icon: "🔍",
                color: "from-blue-500 to-blue-600"
              },
              {
                step: "02",
                title: "Expert Implementation",
                description: "Our seasoned team executes your strategy across all chosen channels with precision, continuously monitoring performance and optimizing every element for maximum impact and ROI.",
                icon: "⚡",
                color: "from-green-500 to-emerald-600"
              },
              {
                step: "03",
                title: "Analysis & Scaling",
                description: "We provide comprehensive reporting and actionable insights, using real data to refine strategies, double down on what works, and scale successful campaigns for sustained growth.",
                icon: "📈",
                color: "from-purple-500 to-pink-500"
              }
            ].map((step, index) => (
              <div key={index} className="relative group">
                {/* Connection line */}
                {index < 2 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-[#FFD302] to-gray-200 transform translate-x-6 z-0"></div>
                )}
                
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden">
                  {/* Large step number background */}
                  <div className="absolute top-4 right-4 text-6xl font-bold text-gray-100 group-hover:text-[#FFD302]/20 transition-colors">
                    {step.step}
                  </div>
                  
                  {/* Step indicator */}
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg mr-4`}>
                      <span className="text-2xl">{step.icon}</span>
                    </div>
                    <div className={`text-sm font-bold text-transparent bg-gradient-to-r ${step.color} bg-clip-text`}>
                      STEP {step.step}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#002186] transition-colors relative z-10">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors relative z-10">
                    {step.description}
                  </p>
                  
                  {/* Progress bar */}
                  <div className="mt-6 w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                    <div className={`h-full bg-gradient-to-r ${step.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left`}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-[#002186]/5 to-[#FFD302]/5 rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Experience Our Approach?</h3>
              <p className="text-gray-600 mb-6">Let's start with a free strategy session to see how our methodology can transform your business.</p>
              <Link 
                href="/get-quote"
                className="inline-flex items-center px-8 py-4 bg-[#002186] text-white font-semibold rounded-xl hover:bg-[#001760] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl"
              >
                Get Your Free Strategy Session
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-gradient-to-r from-[#002186] to-[#001760] text-white relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border border-[#FFD302] rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 border border-white rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-[#FFD302] rounded-full animate-ping"></div>
          <div className="absolute top-1/3 right-1/3 w-6 h-6 bg-white/40 rounded-full animate-bounce"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <div className="mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-[#FFD302]/20 border border-[#FFD302]/30 rounded-full text-sm font-medium text-[#FFD302] mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              Why Choose NXL Digital
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Join Our Success
              <br />
              <span className="bg-gradient-to-r from-[#FFD302] to-yellow-300 bg-clip-text text-transparent">Community</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed">
              We don't just deliver services—we build lasting partnerships that transform businesses 
              and create measurable success stories.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                stat: "500+",
                label: "Success Stories Written",
                icon: "🏆",
                description: "Projects that exceeded expectations"
              },
              {
                stat: "98%",
                label: "Client Happiness Score",
                icon: "❤️",
                description: "Satisfaction guaranteed"
              },
              {
                stat: "300%",
                label: "Average Growth Rate",
                icon: "📈",
                description: "ROI that speaks volumes"
              }
            ].map((stat, index) => (
              <div key={index} className="group text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div className="text-5xl font-bold text-[#FFD302] mb-2 group-hover:scale-105 transition-transform">
                  {stat.stat}
                </div>
                <div className="text-lg font-semibold text-white mb-2">
                  {stat.label}
                </div>
                <div className="text-gray-300 text-sm">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto border border-white/20">
            <h3 className="text-2xl font-bold mb-4">Ready to Write Your Success Story?</h3>
            <p className="text-gray-300 mb-8">
              Join the businesses that chose growth over stagnation. Let's create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/get-quote"
                className="group inline-flex items-center justify-center px-8 py-4 bg-[#FFD302] text-[#002186] font-bold rounded-xl hover:bg-yellow-400 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl"
              >
                Start Your Digital Journey
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/case-studies"
                className="group inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-[#002186] transition-all duration-300"
              >
                See Success Stories
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}