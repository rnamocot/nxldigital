import Link from "next/link";
import { Search, TrendingUp, Globe, FileText, Link2, MapPin, Users, ArrowRight, CheckCircle, Sparkles, Award, Zap, Clock, Shield, Star, BarChart3, Settings, DollarSign } from "lucide-react";

export const metadata = {
  title: "SEO Services | Search Engine Optimization | NXL Digital",
  description: "Boost your organic visibility with expert SEO services. Technical SEO, keyword research, content optimization, and link building that drives qualified traffic.",
  keywords: "SEO services, search engine optimization, organic traffic, keyword research, technical SEO, local SEO, content optimization",
};

export default function SEOPage() {
  const seoFeatures = [
    {
      title: "Technical SEO Audits",
      description: "Comprehensive website analysis to identify and fix technical issues that impact search rankings.",
      Icon: Search,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Keyword Research & Strategy",
      description: "In-depth keyword analysis to target high-value search terms that drive qualified traffic.",
      Icon: FileText,
      color: "from-green-500 to-green-600"
    },
    {
      title: "On-Page Optimization",
      description: "Strategic optimization of content, meta tags, and page structure for maximum search visibility.",
      Icon: Globe,
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Content Marketing",
      description: "SEO-focused content creation that engages users and builds topical authority in your industry.",
      Icon: FileText,
      color: "from-orange-500 to-orange-600"
    },
    {
      title: "Link Building Campaigns",
      description: "White-hat link building strategies to improve domain authority and search rankings.",
      Icon: Link2,
      color: "from-pink-500 to-pink-600"
    },
    {
      title: "Local SEO Services",
      description: "Optimize your local presence to dominate local search results and attract nearby customers.",
      Icon: MapPin,
      color: "from-yellow-500 to-yellow-600"
    }
  ];

  const seoTypes = [
    {
      name: "Technical SEO",
      description: "Site speed, crawlability, and structure optimization",
      focus: "Foundation & Performance",
      Icon: Settings
    },
    {
      name: "On-Page SEO",
      description: "Content, keywords, and meta optimization",
      focus: "Content & Relevance",
      Icon: FileText
    },
    {
      name: "Off-Page SEO",
      description: "Link building and authority development",
      focus: "Authority & Trust",
      Icon: Link2
    },
    {
      name: "Local SEO",
      description: "Google My Business and local search optimization",
      focus: "Local Visibility",
      Icon: MapPin
    }
  ];

  const benefits = [
    {
      title: "Sustainable Growth",
      description: "Long-term organic traffic growth that continues to compound over time",
      Icon: TrendingUp,
      stat: "Long-term ROI"
    },
    {
      title: "Cost-Effective",
      description: "Lower cost per acquisition compared to paid advertising channels",
      Icon: DollarSign,
      stat: "90% less than PPC"
    },
    {
      title: "Higher Trust",
      description: "Organic results are trusted more by users than paid advertisements",
      Icon: Shield,
      stat: "70% user preference"
    },
    {
      title: "Competitive Advantage",
      description: "Outrank competitors and capture market share in search results",
      Icon: Award,
      stat: "25% more clicks"
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
          
          {/* Floating SEO badges */}
          <div className="absolute top-20 right-20 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-gray-100 animate-float">
            <div className="text-xs font-semibold text-[#002186] flex items-center">
              <Search className="w-3 h-3 mr-2 text-[#FFD302]" />
              Organic Growth
            </div>
          </div>
          <div className="absolute bottom-32 left-10 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-gray-100 animate-float-slow">
            <div className="text-xs font-semibold text-[#002186] flex items-center">
              <TrendingUp className="w-3 h-3 mr-2 text-green-500" />
              Long-term Results
            </div>
          </div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-[#FFD302]/10 border border-[#FFD302]/20 rounded-full text-sm font-medium text-[#002186] mb-8">
            <Sparkles className="w-4 h-4 mr-2" />
            Expert SEO Services
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-gray-900 leading-tight">
            SEO That
            <br />
            <span className="bg-gradient-to-r from-[#002186] to-[#FFD302] bg-clip-text text-transparent">Drives Traffic</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
            Boost your organic visibility and drive qualified traffic with comprehensive SEO strategies. 
            Technical optimization, content marketing, and link building that delivers sustainable growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link 
              href="/get-quote" 
              className="group inline-flex items-center justify-center px-8 py-4 bg-[#002186] text-white font-semibold rounded-xl hover:bg-[#001760] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl"
            >
              Get Free SEO Audit
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link 
              href="/case-studies" 
              className="group inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-[#002186] hover:text-[#002186] transition-all duration-300"
            >
              View SEO Success Stories
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* SEO stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: "500%+", label: "Traffic Increase", icon: TrendingUp },
              { number: "3-6mo", label: "Results Timeline", icon: Clock },
              { number: "95%", label: "Client Success Rate", icon: Shield },
              { number: "10+ Years", label: "SEO Experience", icon: Award }
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

      {/* What's Included Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-[#FFD302]/10 border border-[#FFD302]/20 rounded-full text-sm font-medium text-[#002186] mb-6">
              Comprehensive SEO Services
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Complete SEO <span className="bg-gradient-to-r from-[#002186] to-[#FFD302] bg-clip-text text-transparent">Optimization</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From technical foundations to content strategy, we cover every aspect of SEO to maximize your organic search visibility.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {seoFeatures.map((feature, index) => (
              <div key={index} className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden">
                {/* Gradient top bar */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${feature.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                
                <div className="relative">
                  <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                    <feature.Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center group-hover:text-[#002186] transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed text-center group-hover:text-gray-700 transition-colors">
                    {feature.description}
                  </p>
                </div>
                
                {/* Decorative corner */}
                <div className="absolute bottom-0 right-0 w-12 h-12 bg-gradient-to-tl from-[#FFD302]/10 to-transparent rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Types */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-[#FFD302]/10 border border-[#FFD302]/20 rounded-full text-sm font-medium text-[#002186] mb-6">
              SEO Specializations
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Every Aspect of <span className="bg-gradient-to-r from-[#002186] to-[#FFD302] bg-clip-text text-transparent">SEO Covered</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive approach addresses all elements of search engine optimization to ensure maximum visibility and performance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {seoTypes.map((type, index) => (
              <div key={index} className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 text-center relative overflow-hidden">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#002186] to-[#001760] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <type.Icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#002186] transition-colors">
                  {type.name}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed group-hover:text-gray-700 transition-colors">
                  {type.description}
                </p>
                
                <div className="inline-flex items-center px-3 py-1 bg-[#FFD302]/20 text-[#002186] text-sm font-semibold rounded-full">
                  {type.focus}
                </div>
                
                {/* Hover indicator */}
                <div className="mt-4 w-12 h-0.5 bg-gradient-to-r from-transparent via-[#FFD302] to-transparent mx-auto transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-[#FFD302]/5 to-[#002186]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-tl from-[#002186]/5 to-[#FFD302]/5 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-[#FFD302]/10 border border-[#FFD302]/20 rounded-full text-sm font-medium text-[#002186] mb-6">
              Why Choose SEO
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              The <span className="bg-gradient-to-r from-[#002186] to-[#FFD302] bg-clip-text text-transparent">SEO Advantage</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover why SEO is the most sustainable and cost-effective way to grow your online presence and attract qualified customers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="group bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 text-center relative overflow-hidden">
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-[#FFD302]/20 to-transparent rounded-bl-3xl"></div>
                
                <div className="relative">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-[#FFD302] to-yellow-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <benefit.Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#002186] transition-colors">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700 transition-colors">
                    {benefit.description}
                  </p>
                  
                  <div className="inline-flex items-center px-4 py-2 bg-[#002186]/10 text-[#002186] text-sm font-bold rounded-full">
                    {benefit.stat}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-[#FFD302]/10 border border-[#FFD302]/20 rounded-full text-sm font-medium text-[#002186] mb-6">
              Our SEO Process
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              How We <span className="bg-gradient-to-r from-[#002186] to-[#FFD302] bg-clip-text text-transparent">Build Your Rankings</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven SEO methodology ensures sustainable growth in organic rankings and traffic through strategic optimization.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "SEO Audit & Analysis",
                description: "Comprehensive website audit to identify technical issues, opportunities, and competitive landscape analysis.",
                Icon: Search
              },
              {
                step: "02", 
                title: "Strategy Development",
                description: "Custom SEO strategy based on your goals, industry, and competitive analysis with keyword targeting.",
                Icon: FileText
              },
              {
                step: "03",
                title: "Implementation & Optimization",
                description: "Execute technical fixes, content optimization, and begin link building campaigns for improved rankings.",
                Icon: Settings
              },
              {
                step: "04",
                title: "Monitor & Improve",
                description: "Continuous monitoring, reporting, and optimization to maintain and improve search rankings over time.",
                Icon: TrendingUp
              }
            ].map((step, index) => (
              <div key={index} className="text-center group relative">
                {/* Connection line */}
                {index < 3 && (
                  <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-[#FFD302] to-gray-200 transform translate-x-4 z-0"></div>
                )}
                
                <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                  {/* Large step number background */}
                  <div className="absolute top-4 right-4 text-6xl font-bold text-gray-100 group-hover:text-[#FFD302]/20 transition-colors">
                    {step.step}
                  </div>
                  
                  {/* Step indicator */}
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#002186] to-[#001760] rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg relative z-10">
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
              Ready to Dominate Search Results?
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Start Your SEO
              <br />
              <span className="bg-gradient-to-r from-[#FFD302] to-yellow-300 bg-clip-text text-transparent">Journey Today</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed">
              Build sustainable organic growth that compounds over time. Our SEO experts will help you 
              outrank competitors and capture more qualified traffic from search engines.
            </p>
          </div>

          {/* Value propositions */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                Icon: Search,
                title: "Free SEO Audit",
                description: "Comprehensive analysis of your website's SEO performance and opportunities"
              },
              {
                Icon: TrendingUp,
                title: "Proven Results",
                description: "Track record of delivering 300%+ increases in organic traffic"
              },
              {
                Icon: Award,
                title: "Expert Team",
                description: "Certified SEO professionals with 10+ years of experience"
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="w-12 h-12 mb-4 mx-auto bg-[#FFD302]/20 rounded-xl flex items-center justify-center">
                  <benefit.Icon className="w-6 h-6 text-[#002186]" />
                </div>
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
                  Get Free SEO Audit
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              
              <Link 
                href="/contact"
                className="group inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-[#002186] transition-all duration-300 text-lg"
              >
                Schedule SEO Consultation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex justify-center items-center space-x-8 text-sm text-gray-300">
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-2" />
                300+ Websites Optimized
              </div>
              <div className="flex items-center">
                <Award className="w-4 h-4 mr-2" />
                SEO Certified Experts
              </div>
              <div className="flex items-center">
                <TrendingUp className="w-4 h-4 mr-2" />
                500%+ Traffic Growth
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}