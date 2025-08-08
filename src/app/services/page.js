import Link from "next/link";
import { Target, Search, Smartphone, Monitor, Palette, RotateCcw, BarChart3, Users, ArrowRight, CheckCircle, Zap, Sparkles } from "lucide-react";
import { metaTagsData } from "../lib/metaTagsData";

export const metadata = {
  title: metaTagsData.services.title,
  description: metaTagsData.services.description,
  keywords: metaTagsData.services.keywords,
  openGraph: metaTagsData.services.openGraph,
};

export default function ServicesPage() {
  const services = [
    {
      title: "PPC Management",
      description: "Maximize your advertising ROI with our expert pay-per-click management services across Google Ads, Facebook, LinkedIn, and more.",
      features: [
        "Campaign Strategy & Setup",
        "Keyword Research & Analysis", 
        "Ad Creation & A/B Testing",
        "Bid Management & Optimization",
        "Performance Tracking & Reporting",
        "Landing Page Optimization"
      ],
      Icon: Target,
      link: "/services/ppc",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "SEO Optimization",
      description: "Boost your organic visibility and drive qualified traffic with our comprehensive search engine optimization strategies.",
      features: [
        "Technical SEO Audits",
        "Keyword Research & Strategy",
        "On-Page Optimization", 
        "Content Marketing",
        "Link Building Campaigns",
        "Local SEO Services"
      ],
      Icon: Search,
      link: "/services/seo",
      color: "from-green-500 to-green-600"
    },
    {
      title: "Social Media Management",
      description: "Build meaningful connections and engage your audience across all major social media platforms with strategic content and community management.",
      features: [
        "Social Media Strategy",
        "Content Creation & Curation",
        "Community Management",
        "Social Media Advertising",
        "Influencer Partnerships", 
        "Analytics & Reporting"
      ],
      Icon: Smartphone,
      link: "/services/social-media-marketing",
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Web Development",
      description: "Custom websites and applications that not only look great but convert visitors into customers and drive business growth.",
      features: [
        "Custom Website Design",
        "E-commerce Solutions",
        "Mobile-Responsive Development",
        "CMS Integration",
        "Website Optimization",
        "Maintenance & Support"
      ],
      Icon: Monitor,
      link: "/services/web-development",
      color: "from-orange-500 to-orange-600"
    },
    {
      title: "Brand Marketing",
      description: "Strategic brand development and marketing campaigns that resonate with your target audience and drive long-term growth.",
      features: [
        "Brand Strategy & Positioning",
        "Visual Identity Design",
        "Brand Messaging & Voice",
        "Multi-Channel Campaigns",
        "Brand Guidelines",
        "Reputation Management"
      ],
      Icon: Palette,
      link: "/services/brand-marketing",
      color: "from-pink-500 to-pink-600"
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
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-[#FFD302]/10 border border-[#FFD302]/20 rounded-full text-sm font-medium text-[#002186] mb-8">
            <Sparkles className="w-4 h-4 mr-2" />
            Comprehensive Digital Solutions
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-gray-900 leading-tight">
            Services That
            <br />
            <span className="bg-gradient-to-r from-[#002186] to-[#FFD302] bg-clip-text text-transparent">Drive Growth</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
            From strategy to execution, we deliver comprehensive digital marketing solutions 
            that transform your business and accelerate measurable results.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link 
              href="/get-quote" 
              className="group inline-flex items-center justify-center px-8 py-4 bg-[#002186] text-white font-semibold rounded-xl hover:bg-[#001760] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl"
            >
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link 
              href="/case-studies" 
              className="group inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-[#002186] hover:text-[#002186] transition-all duration-300"
            >
              View Our Work
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Service overview stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: "5+", label: "Core Services" },
              { number: "500+", label: "Projects Delivered" },
              { number: "98%", label: "Client Satisfaction" },
              { number: "24/7", label: "Support Available" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-[#002186] mb-2">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-[#FFD302]/10 border border-[#FFD302]/20 rounded-full text-sm font-medium text-[#002186] mb-6">
              Our Expertise
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Comprehensive Digital Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every service is crafted to work seamlessly together, creating a unified strategy that amplifies your digital presence.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden">
                {/* Gradient border on hover */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#002186] to-[#FFD302] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                
                <div className="flex items-start space-x-6">
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 border-2 border-gray-100 group-hover:border-[#FFD302]/50">
                      <service.Icon className="w-10 h-10 text-gray-600 group-hover:text-[#002186] transition-colors duration-300" />
                    </div>
                    {/* Notification badge */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#FFD302] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 group-hover:text-[#002186] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6 text-lg leading-relaxed group-hover:text-gray-700 transition-colors">
                      {service.description}
                    </p>
                    
                    <div className="mb-8">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <Zap className="w-5 h-5 mr-2 text-[#FFD302]" />
                        What's Included:
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-3 group/item hover:bg-gray-50 rounded-lg p-2 transition-colors">
                            <CheckCircle className="w-5 h-5 text-[#FFD302] flex-shrink-0 group-hover/item:scale-110 transition-transform" />
                            <span className="text-gray-700 group-hover/item:text-gray-900 transition-colors">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <Link 
                      href={service.link}
                      className="group/link inline-flex items-center px-6 py-3 bg-gray-50 text-[#002186] font-semibold rounded-xl hover:bg-[#002186] hover:text-white transition-all duration-300 hover:shadow-lg"
                    >
                      Learn More About {service.title}
                      <ArrowRight className="ml-2 w-5 h-5 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-[#FFD302]/10 border border-[#FFD302]/20 rounded-full text-sm font-medium text-[#002186] mb-6">
              Why Choose Us
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              The NXL Digital <span className="bg-gradient-to-r from-[#002186] to-[#FFD302] bg-clip-text text-transparent">Advantage</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We don't just deliver services—we build partnerships that drive sustainable growth and long-term success.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Integrated Approach",
                description: "All our services work together seamlessly to create a comprehensive digital marketing strategy that amplifies your results.",
                Icon: RotateCcw,
                highlight: "Unified Strategy"
              },
              {
                title: "Data-Driven Decisions",
                description: "Every strategy is backed by thorough research and analytics, ensuring your investment delivers measurable ROI.",
                Icon: BarChart3,
                highlight: "Measurable Results"
              },
              {
                title: "Dedicated Support",
                description: "Work directly with experienced professionals who understand your industry and are committed to your success.",
                Icon: Users,
                highlight: "Expert Team"
              }
            ].map((benefit, index) => (
              <div key={index} className="group text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden">
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-[#FFD302]/20 to-transparent rounded-bl-3xl"></div>
                
                <div className="relative">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 border-2 border-gray-100 group-hover:border-[#FFD302]/50">
                    <benefit.Icon className="w-10 h-10 text-gray-600 group-hover:text-[#002186] transition-colors duration-300" />
                  </div>
                  
                  {/* Highlight badge */}
                  <div className="inline-flex items-center px-3 py-1 bg-[#FFD302]/10 rounded-full text-xs font-semibold text-[#002186] mb-4">
                    {benefit.highlight}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#002186] transition-colors">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 border border-[#FFD302] rounded-full"></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 border border-[#002186] rounded-full"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-[#FFD302]/10 border border-[#FFD302]/20 rounded-full text-sm font-medium text-[#002186] mb-6">
              Our Methodology
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              How We <span className="bg-gradient-to-r from-[#002186] to-[#FFD302] bg-clip-text text-transparent">Deliver Success</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven 4-step methodology ensures every project delivers exceptional results and exceeds expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Analysis",
                description: "Deep dive into your business, audience, and competitive landscape to uncover opportunities and challenges.",
                icon: "🔍"
              },
              {
                step: "02", 
                title: "Strategic Planning",
                description: "Craft a data-driven strategy tailored to your goals, budget, and market position for maximum impact.",
                icon: "🎯"
              },
              {
                step: "03",
                title: "Expert Execution",
                description: "Implement campaigns across all channels with precision, creativity, and attention to every detail.",
                icon: "⚡"
              },
              {
                step: "04",
                title: "Continuous Optimization",
                description: "Monitor performance in real-time and continuously optimize for better results and higher ROI.",
                icon: "📈"
              }
            ].map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-8">
                  {/* Connection line */}
                  {index < 3 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-[#FFD302] to-gray-200 transform translate-x-4"></div>
                  )}
                  
                  {/* Step circle */}
                  <div className="relative w-16 h-16 bg-gradient-to-br from-[#002186] to-[#001760] text-white rounded-2xl flex items-center justify-center text-xl font-bold mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg group-hover:shadow-2xl">
                    {step.step}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#FFD302]/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  {/* Process icon */}
                  <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#002186] transition-colors">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">{step.description}</p>
                
                {/* Progress indicator */}
                <div className="mt-6 w-12 h-1 bg-gray-200 rounded-full mx-auto overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#002186] to-[#FFD302] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-[#002186]/5 to-[#FFD302]/5 rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Experience Our Process?</h3>
              <p className="text-gray-600 mb-6">Let's start with a free consultation to understand your needs and show you exactly how we can help.</p>
              <Link 
                href="/get-quote"
                className="inline-flex items-center px-8 py-4 bg-[#002186] text-white font-semibold rounded-xl hover:bg-[#001760] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl"
              >
                Start Your Project
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
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-[#FFD302]/20 border border-[#FFD302]/30 rounded-full text-sm font-medium text-[#FFD302] mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              Ready to Transform Your Business?
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Let's Build Your
              <br />
              <span className="bg-gradient-to-r from-[#FFD302] to-yellow-300 bg-clip-text text-transparent">Digital Success Story</span>
            </h2>
            
            <p className="text-xl mb-12 text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Every successful business has a story. Let us help you write the next chapter with strategies 
              that drive real growth and deliver measurable results.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link 
              href="/get-quote" 
              className="group inline-flex items-center justify-center px-8 py-4 bg-[#FFD302] text-[#002186] font-bold rounded-xl hover:bg-yellow-400 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl text-lg relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                Get Free Consultation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            
            <Link 
              href="/case-studies" 
              className="group inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-[#002186] transition-all duration-300 text-lg"
            >
              View Success Stories
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            {[
              { metric: "500+", label: "Projects Completed" },
              { metric: "98%", label: "Client Satisfaction" },
              { metric: "300%", label: "Average ROI" },
              { metric: "24/7", label: "Support" }
            ].map((item, index) => (
              <div key={index} className="group">
                <div className="text-2xl font-bold text-[#FFD302] mb-1 group-hover:scale-110 transition-transform">
                  {item.metric}
                </div>
                <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}