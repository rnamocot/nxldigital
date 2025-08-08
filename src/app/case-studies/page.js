import Link from "next/link";
import Image from "next/image";
import { Target, TrendingUp, Star, Building2, ShoppingCart, Stethoscope, Laptop, BookOpen, Factory, Home, DollarSign, UtensilsCrossed, Briefcase, Heart, Car, Plane, ArrowRight, CheckCircle, Sparkles, Award, Zap, Users, Eye } from "lucide-react";
import { metaTagsData } from "../lib/metaTagsData";

export const metadata = {
  title: metaTagsData.caseStudies.title,
  description: metaTagsData.caseStudies.description,
  keywords: metaTagsData.caseStudies.keywords,
  openGraph: metaTagsData.caseStudies.openGraph,
};

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      title: "E-Commerce Growth Strategy",
      client: "RetailTech Solutions",
      industry: "E-commerce",
      challenge: "Low conversion rates and poor organic visibility",
      solution: "Implemented comprehensive SEO strategy and conversion optimization",
      results: [
        "300% increase in organic traffic",
        "150% improvement in conversion rate",
        "400% growth in revenue"
      ],
      services: ["SEO", "PPC", "Web Development"],
      image: "/images/placeholder.png",
      duration: "6 months"
    },
    {
      title: "B2B Lead Generation Campaign",
      client: "TechStart Industries",
      industry: "SaaS Technology",
      challenge: "Limited qualified leads and low brand awareness",
      solution: "Multi-channel lead generation with targeted PPC and content marketing",
      results: [
        "250% increase in qualified leads",
        "180% improvement in lead quality",
        "300% ROI on ad spend"
      ],
      services: ["PPC", "Social Media", "Brand Marketing"],
      image: "/images/placeholder.png",
      duration: "4 months"
    },
    {
      title: "Local Business Digital Transformation",
      client: "Metro Restaurant Group",
      industry: "Food & Beverage",
      challenge: "Poor online presence and declining foot traffic",
      solution: "Complete digital overhaul with local SEO and social media strategy",
      results: [
        "400% increase in online orders",
        "200% growth in social media engagement",
        "150% increase in foot traffic"
      ],
      services: ["Local SEO", "Social Media", "Web Development"],
      image: "/images/placeholder.png",
      duration: "8 months"
    },
    {
      title: "Healthcare Practice Growth",
      client: "Wellness Medical Center",
      industry: "Healthcare",
      challenge: "Low patient acquisition and outdated online presence",
      solution: "Medical SEO optimization and patient-focused digital marketing",
      results: [
        "350% increase in new patient inquiries",
        "200% improvement in online visibility",
        "180% growth in appointment bookings"
      ],
      services: ["Medical SEO", "PPC", "Web Development"],
      image: "/images/placeholder.png",
      duration: "10 months"
    },
    {
      title: "Manufacturing Company Rebrand",
      client: "Industrial Solutions Inc.",
      industry: "Manufacturing",
      challenge: "Outdated brand image and low digital presence",
      solution: "Complete brand overhaul with modern web presence and B2B marketing",
      results: [
        "500% increase in website traffic",
        "300% growth in lead generation",
        "250% improvement in brand recognition"
      ],
      services: ["Brand Marketing", "Web Development", "PPC"],
      image: "/images/placeholder.png",
      duration: "12 months"
    },
    {
      title: "Educational Platform Launch",
      client: "LearnTech Academy",
      industry: "Education Technology",
      challenge: "New platform launch with zero market presence",
      solution: "Comprehensive go-to-market strategy with multi-channel approach",
      results: [
        "10,000+ users in first 3 months",
        "500% growth in course enrollments",
        "300% ROI on marketing investment"
      ],
      services: ["PPC", "Social Media", "SEO", "Brand Marketing"],
      image: "/images/placeholder.png",
      duration: "6 months"
    }
  ];

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
          
          {/* Floating success badges */}
          <div className="absolute top-20 right-20 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-gray-100 animate-float">
            <div className="text-xs font-semibold text-[#002186] flex items-center">
              <Award className="w-3 h-3 mr-2 text-[#FFD302]" />
              Success Stories
            </div>
          </div>
          <div className="absolute bottom-32 left-10 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-gray-100 animate-float-slow">
            <div className="text-xs font-semibold text-[#002186] flex items-center">
              <TrendingUp className="w-3 h-3 mr-2 text-green-500" />
              Proven Results
            </div>
          </div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-[#FFD302]/10 border border-[#FFD302]/20 rounded-full text-sm font-medium text-[#002186] mb-8">
            <Sparkles className="w-4 h-4 mr-2" />
            Real Results from Real Businesses
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-gray-900 leading-tight">
            <span className="bg-gradient-to-r from-[#002186] to-[#FFD302] bg-clip-text text-transparent">Success Stories</span>
            <br />
            <span className="text-4xl md:text-5xl text-gray-600 font-normal">That Inspire Growth</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
            Discover how we've helped businesses across industries achieve remarkable growth through 
            strategic digital marketing and proven methodologies.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link 
              href="/get-quote" 
              className="group inline-flex items-center justify-center px-8 py-4 bg-[#002186] text-white font-semibold rounded-xl hover:bg-[#001760] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl"
            >
              Start Your Success Story
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link 
              href="/contact" 
              className="group inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-[#002186] hover:text-[#002186] transition-all duration-300"
            >
              Schedule Consultation
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Quick preview stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: "500+", label: "Success Stories", icon: Award },
              { number: "300%", label: "Avg ROI Growth", icon: TrendingUp },
              { number: "98%", label: "Client Satisfaction", icon: Star },
              { number: "50+", label: "Industries Served", icon: Building2 }
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

      {/* Featured Results Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-[#FFD302]/10 border border-[#FFD302]/20 rounded-full text-sm font-medium text-[#002186] mb-6">
              Our Impact
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Results That <span className="bg-gradient-to-r from-[#002186] to-[#FFD302] bg-clip-text text-transparent">Define Success</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every number tells a story of transformation, growth, and businesses reaching their full potential.
            </p>
          </div>

          {/* Highlighted case study results */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                metric: "500%",
                description: "Website Traffic Increase",
                detail: "Industrial Solutions Inc.",
                color: "from-blue-500 to-blue-600",
                icon: "📈"
              },
              {
                metric: "400%",
                description: "Revenue Growth",
                detail: "RetailTech Solutions",
                color: "from-green-500 to-emerald-600", 
                icon: "💰"
              },
              {
                metric: "350%",
                description: "New Customer Inquiries",
                detail: "Wellness Medical Center",
                color: "from-purple-500 to-pink-500",
                icon: "🎯"
              }
            ].map((result, index) => (
              <div key={index} className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden text-center">
                {/* Gradient top bar */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${result.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                  {result.icon}
                </div>
                
                <div className="text-5xl font-bold text-[#002186] mb-3 group-hover:scale-105 transition-transform">
                  {result.metric}
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {result.description}
                </h3>
                
                <p className="text-gray-600">
                  {result.detail}
                </p>

                {/* Decorative corner */}
                <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-[#FFD302]/10 to-transparent rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>

          {/* Trust indicators */}
          <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-8">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {[
                { number: "500+", label: "Projects Completed", icon: Target },
                { number: "98%", label: "Client Satisfaction", icon: Star },
                { number: "50+", label: "Industries Served", icon: Building2 },
                { number: "3+", label: "Years of Excellence", icon: Award }
              ].map((stat, index) => (
                <div key={index} className="group">
                  <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                    <stat.icon className="w-8 h-8 text-[#002186] group-hover:text-[#FFD302] transition-colors" />
                  </div>
                  <div className="text-3xl font-bold text-[#002186] mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-[#FFD302]/10 border border-[#FFD302]/20 rounded-full text-sm font-medium text-[#002186] mb-6">
              Client Success Stories
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Transformations That <span className="bg-gradient-to-r from-[#002186] to-[#FFD302] bg-clip-text text-transparent">Inspire</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each case study represents a partnership built on trust, strategy, and measurable results that exceeded expectations.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
                {/* Image with overlay */}
                <div className="relative mb-6 overflow-hidden">
                  <div className="h-48 bg-gradient-to-br from-[#002186] to-[#001760] flex items-center justify-center">
                    <div className="text-center text-white p-6">
                      <div className="text-4xl font-bold mb-2">{study.results[0].match(/\d+/)[0]}%</div>
                      <div className="text-sm opacity-90">Growth Achieved</div>
                    </div>
                  </div>
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-8">
                  {/* Service tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.services.map((service, serviceIndex) => (
                      <span 
                        key={serviceIndex}
                        className="px-3 py-1 bg-[#FFD302]/20 text-[#002186] text-xs font-semibold rounded-full border border-[#FFD302]/30 group-hover:bg-[#FFD302] group-hover:text-white transition-all duration-300"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#002186] transition-colors">{study.title}</h3>
                  <div className="flex items-center mb-4">
                    <div className="w-3 h-3 bg-[#FFD302] rounded-full mr-3"></div>
                    <p className="text-[#002186] font-semibold">{study.client}</p>
                  </div>
                  <p className="text-gray-600 text-sm mb-6 flex items-center">
                    <Building2 className="w-4 h-4 mr-2" />
                    {study.industry} • {study.duration}
                  </p>
                  
                  <div className="space-y-4 mb-6">
                    <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                      <h4 className="font-semibold text-red-900 mb-2 flex items-center">
                        <Eye className="w-4 h-4 mr-2" />
                        Challenge:
                      </h4>
                      <p className="text-red-800 text-sm">{study.challenge}</p>
                    </div>
                    
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                      <h4 className="font-semibold text-blue-900 mb-2 flex items-center">
                        <Zap className="w-4 h-4 mr-2" />
                        Solution:
                      </h4>
                      <p className="text-blue-800 text-sm">{study.solution}</p>
                    </div>
                    
                    <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                      <h4 className="font-semibold text-green-900 mb-3 flex items-center">
                        <TrendingUp className="w-4 h-4 mr-2" />
                        Results:
                      </h4>
                      <ul className="space-y-2">
                        {study.results.map((result, resultIndex) => (
                          <li key={resultIndex} className="flex items-center space-x-3">
                            <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                            <span className="text-green-800 text-sm font-medium">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <Link 
                    href="/get-quote"
                    className="group/link inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#002186] to-[#001760] text-white font-semibold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                  >
                    Get Similar Results
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="section-padding bg-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-[#FFD302]/5 to-[#002186]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-tl from-[#002186]/5 to-[#FFD302]/5 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-[#FFD302]/10 border border-[#FFD302]/20 rounded-full text-sm font-medium text-[#002186] mb-6">
              Industry Expertise
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Trusted Across <span className="bg-gradient-to-r from-[#002186] to-[#FFD302] bg-clip-text text-transparent">Every Industry</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From startups to enterprise, our expertise spans across diverse industries, 
              delivering tailored solutions that understand your unique business challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { name: "E-commerce", Icon: ShoppingCart, color: "from-orange-500 to-red-500" },
              { name: "Healthcare", Icon: Stethoscope, color: "from-blue-500 to-cyan-500" },
              { name: "Technology", Icon: Laptop, color: "from-purple-500 to-pink-500" },
              { name: "Education", Icon: BookOpen, color: "from-green-500 to-emerald-500" },
              { name: "Manufacturing", Icon: Factory, color: "from-gray-600 to-gray-800" },
              { name: "Real Estate", Icon: Home, color: "from-indigo-500 to-blue-600" },
              { name: "Finance", Icon: DollarSign, color: "from-yellow-500 to-orange-500" },
              { name: "Food & Beverage", Icon: UtensilsCrossed, color: "from-red-500 to-pink-500" },
              { name: "Professional Services", Icon: Briefcase, color: "from-slate-600 to-gray-700" },
              { name: "Non-Profit", Icon: Heart, color: "from-pink-500 to-rose-500" },
              { name: "Automotive", Icon: Car, color: "from-blue-600 to-indigo-600" },
              { name: "Travel & Tourism", Icon: Plane, color: "from-sky-500 to-blue-500" }
            ].map((industry, index) => (
              <div key={index} className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 text-center relative overflow-hidden">
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${industry.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    <industry.Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#002186] transition-colors">
                    {industry.name}
                  </h3>
                  
                  {/* Hover indicator */}
                  <div className="mt-3 w-12 h-0.5 bg-gradient-to-r from-transparent via-[#FFD302] to-transparent mx-auto transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom section */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-[#002186]/5 to-[#FFD302]/5 rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Don't See Your Industry?</h3>
              <p className="text-gray-600 mb-6">
                We've worked with businesses across countless sectors. Let's discuss how our proven strategies can be tailored to your unique industry challenges.
              </p>
              <Link 
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-[#002186] text-white font-semibold rounded-xl hover:bg-[#001760] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl"
              >
                Discuss Your Industry
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-[#002186] to-[#001760] text-white relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border border-[#FFD302] rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 border border-white rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-[#FFD302] rounded-full animate-ping"></div>
          <div className="absolute top-1/3 right-1/3 w-6 h-6 bg-white/40 rounded-full animate-bounce"></div>
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-[#FFD302]/20 border border-[#FFD302]/30 rounded-full text-sm font-medium text-[#FFD302] mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              Join Our Success Community
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Your Success Story
              <br />
              <span className="bg-gradient-to-r from-[#FFD302] to-yellow-300 bg-clip-text text-transparent">Starts Here</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed">
              Don't just read about success—become part of it. Join our growing list of clients 
              who've transformed their digital presence and achieved remarkable growth.
            </p>
          </div>

          {/* Value propositions */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: "🎯",
                title: "Proven Strategy",
                description: "Time-tested methods that consistently deliver results across industries"
              },
              {
                icon: "⚡",
                title: "Rapid Implementation",
                description: "Get started quickly with our streamlined onboarding process"
              },
              {
                icon: "📈",
                title: "Measurable Growth",
                description: "Track your success with detailed reporting and transparent metrics"
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6">Ready to Get Started?</h3>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
              <Link 
                href="/get-quote"
                className="group inline-flex items-center justify-center px-8 py-4 bg-[#FFD302] text-[#002186] font-bold rounded-xl hover:bg-yellow-400 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl text-lg relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Start Your Success Story
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              
              <Link 
                href="/contact"
                className="group inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-[#002186] transition-all duration-300 text-lg"
              >
                Schedule Free Consultation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex justify-center items-center space-x-8 text-sm text-gray-300">
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-2" />
                500+ Happy Clients
              </div>
              <div className="flex items-center">
                <Award className="w-4 h-4 mr-2" />
                98% Success Rate
              </div>
              <div className="flex items-center">
                <TrendingUp className="w-4 h-4 mr-2" />
                300% Average Growth
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}