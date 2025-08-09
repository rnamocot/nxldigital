import Link from "next/link";
import { Palette, Heart, Megaphone, Target, Eye, Lightbulb, Users, Star, ArrowRight, CheckCircle, Sparkles, Award, Zap, Clock, Shield, TrendingUp, Rocket, RefreshCw, Briefcase, User, FileText, DollarSign } from "lucide-react";

export const metadata = {
  title: "Brand Marketing Services | Brand Strategy & Development | NXL Digital",
  description: "Strategic brand development and marketing campaigns that resonate with your audience. Brand positioning, visual identity, and multi-channel campaigns.",
  keywords: "brand marketing, brand strategy, brand development, visual identity, brand positioning, brand campaigns, reputation management",
};

export default function BrandMarketingPage() {
  const brandFeatures = [
    {
      title: "Brand Strategy & Positioning",
      description: "Comprehensive brand strategy development that defines your unique position in the market and resonates with your target audience.",
      Icon: Target,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Visual Identity Design",
      description: "Cohesive visual identity systems including logos, color palettes, typography, and brand guidelines that make you memorable.",
      Icon: Palette,
      color: "from-green-500 to-green-600"
    },
    {
      title: "Brand Messaging & Voice",
      description: "Compelling brand messaging and tone of voice that communicates your values and connects emotionally with your audience.",
      Icon: Megaphone,
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Multi-Channel Campaigns",
      description: "Integrated brand campaigns across digital and traditional channels that amplify your message and drive engagement.",
      Icon: Eye,
      color: "from-orange-500 to-orange-600"
    },
    {
      title: "Brand Guidelines",
      description: "Comprehensive brand guidelines that ensure consistent brand application across all touchpoints and team members.",
      Icon: Lightbulb,
      color: "from-pink-500 to-pink-600"
    },
    {
      title: "Reputation Management",
      description: "Proactive brand reputation monitoring and management to protect and enhance your brand's online presence.",
      Icon: Shield,
      color: "from-yellow-500 to-yellow-600"
    }
  ];

  const brandTypes = [
    {
      name: "Startup Branding",
      description: "Complete brand identity for new businesses",
      focus: "Market Entry & Differentiation",
      Icon: Rocket,
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "Rebranding",
      description: "Brand refresh and modernization for established businesses",
      focus: "Evolution & Modernization",
      Icon: RefreshCw,
      color: "from-green-500 to-green-600"
    },
    {
      name: "Brand Extensions",
      description: "Expanding existing brands into new markets or products",
      focus: "Growth & Expansion",
      Icon: TrendingUp,
      color: "from-purple-500 to-purple-600"
    },
    {
      name: "Personal Branding",
      description: "Individual brand development for professionals and executives",
      focus: "Personal Authority",
      Icon: User,
      color: "from-orange-500 to-orange-600"
    }
  ];

  const benefits = [
    {
      title: "Brand Recognition",
      description: "Increase brand awareness and recognition in your target market",
      Icon: Eye,
      stat: "85% increase"
    },
    {
      title: "Customer Loyalty",
      description: "Build emotional connections that drive customer loyalty and retention",
      Icon: Heart,
      stat: "3x more loyalty"
    },
    {
      title: "Premium Positioning",
      description: "Position your brand for premium pricing and market leadership",
      Icon: Award,
      stat: "40% price premium"
    },
    {
      title: "Market Differentiation",
      description: "Stand out from competitors with unique brand positioning",
      Icon: Target,
      stat: "Unique positioning"
    }
  ];

  const brandElements = [
    {
      title: "Logo & Identity System",
      description: "Professional logo design and complete visual identity system",
      deliverables: ["Logo Design", "Color Palette", "Typography", "Icon System"],
      timeframe: "2-3 weeks",
      Icon: Palette
    },
    {
      title: "Brand Strategy Document",
      description: "Comprehensive brand strategy and positioning framework",
      deliverables: ["Brand Positioning", "Target Audience", "Value Proposition", "Messaging Framework"],
      timeframe: "1-2 weeks",
      Icon: FileText
    },
    {
      title: "Brand Guidelines",
      description: "Detailed brand usage guidelines for consistent application",
      deliverables: ["Usage Guidelines", "Do's & Don'ts", "Templates", "Asset Library"],
      timeframe: "1 week",
      Icon: Briefcase
    },
    {
      title: "Marketing Collateral",
      description: "Branded marketing materials and campaign assets",
      deliverables: ["Business Cards", "Brochures", "Digital Assets", "Campaign Materials"],
      timeframe: "2-4 weeks",
      Icon: Megaphone
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
          
          {/* Floating Brand badges */}
          <div className="absolute top-20 right-20 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-gray-100 animate-float">
            <div className="text-xs font-semibold text-[#002186] flex items-center">
              <Heart className="w-3 h-3 mr-2 text-[#FFD302]" />
              Brand Connection
            </div>
          </div>
          <div className="absolute bottom-32 left-10 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-gray-100 animate-float-slow">
            <div className="text-xs font-semibold text-[#002186] flex items-center">
              <Star className="w-3 h-3 mr-2 text-green-500" />
              Premium Positioning
            </div>
          </div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-[#FFD302]/10 border border-[#FFD302]/20 rounded-full text-sm font-medium text-[#002186] mb-8">
            <Sparkles className="w-4 h-4 mr-2" />
            Strategic Brand Marketing
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-gray-900 leading-tight">
            Brands That
            <br />
            <span className="bg-gradient-to-r from-[#002186] to-[#FFD302] bg-clip-text text-transparent">Inspire Loyalty</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
            Build powerful brand identities that resonate with your audience and drive long-term growth. 
            Strategic positioning, compelling messaging, and cohesive visual identity.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link 
              href="/get-quote" 
              className="group inline-flex items-center justify-center px-8 py-4 bg-[#002186] text-white font-semibold rounded-xl hover:bg-[#001760] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl"
            >
              Get Brand Strategy Consultation
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link 
              href="/case-studies" 
              className="group inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-[#002186] hover:text-[#002186] transition-all duration-300"
            >
              View Brand Portfolio
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Brand Marketing stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: "85%+", label: "Brand Recognition Increase", icon: Eye },
              { number: "3x", label: "Customer Loyalty Boost", icon: Heart },
              { number: "40%", label: "Premium Price Positioning", icon: TrendingUp },
              { number: "8+ Years", label: "Brand Development Experience", icon: Award }
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
              Complete Brand Marketing Services
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Everything You Need for <span className="bg-gradient-to-r from-[#002186] to-[#FFD302] bg-clip-text text-transparent">Brand Success</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From strategy to execution, we provide comprehensive brand marketing services that build recognition, loyalty, and long-term value.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brandFeatures.map((feature, index) => (
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

      {/* Brand Types */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-[#FFD302]/10 border border-[#FFD302]/20 rounded-full text-sm font-medium text-[#002186] mb-6">
              Brand Development Types
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Brand Solutions for <span className="bg-gradient-to-r from-[#002186] to-[#FFD302] bg-clip-text text-transparent">Every Stage</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you're launching a new brand or refreshing an existing one, we have the expertise to create brands that resonate and perform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {brandTypes.map((type, index) => (
              <div key={index} className="group bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 text-center relative overflow-hidden">
                {/* Gradient top bar */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${type.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                
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

      {/* Brand Elements Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-[#FFD302]/10 border border-[#FFD302]/20 rounded-full text-sm font-medium text-[#002186] mb-6">
              Brand Deliverables
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Complete Brand <span className="bg-gradient-to-r from-[#002186] to-[#FFD302] bg-clip-text text-transparent">Asset Library</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every brand project includes a comprehensive set of assets and guidelines to ensure consistent brand application across all touchpoints.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {brandElements.map((element, index) => (
              <div key={index} className="group bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden">
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-[#FFD302]/20 to-transparent rounded-bl-3xl"></div>
                
                <div className="relative">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#002186] to-[#001760] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <element.Icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-[#002186] transition-colors">
                        {element.title}
                      </h3>
                      <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                        {element.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">What's Included:</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {element.deliverables.map((deliverable, deliverableIndex) => (
                        <div key={deliverableIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-[#FFD302] flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{deliverable}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center px-4 py-2 bg-[#002186]/10 text-[#002186] text-sm font-bold rounded-full">
                      <Clock className="w-4 h-4 mr-2" />
                      {element.timeframe}
                    </div>
                    
                    <Link 
                      href="/get-quote"
                      className="group/link inline-flex items-center text-[#002186] font-semibold hover:text-[#FFD302] transition-colors"
                    >
                      Get Quote
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-[#FFD302]/5 to-[#002186]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-tl from-[#002186]/5 to-[#FFD302]/5 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-[#FFD302]/10 border border-[#FFD302]/20 rounded-full text-sm font-medium text-[#002186] mb-6">
              Why Invest in Brand Marketing
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              The <span className="bg-gradient-to-r from-[#002186] to-[#FFD302] bg-clip-text text-transparent">Brand Advantage</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Strong brands command premium prices, inspire customer loyalty, and create lasting competitive advantages in the marketplace.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 text-center relative overflow-hidden">
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
              Ready to Build Your Brand?
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Create a Brand That
              <br />
              <span className="bg-gradient-to-r from-[#FFD302] to-yellow-300 bg-clip-text text-transparent">Inspires Loyalty</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed">
              Transform your business with a powerful brand identity that resonates with your audience, 
              commands premium pricing, and drives long-term growth.
            </p>
          </div>

          {/* Value propositions */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                Icon: Lightbulb,
                title: "Brand Strategy Session",
                description: "Free consultation to discuss your brand goals and positioning"
              },
              {
                Icon: Palette,
                title: "Custom Brand Identity",
                description: "Unique brand identity designed specifically for your business"
              },
              {
                Icon: Briefcase,
                title: "Complete Brand Package",
                description: "All brand assets and guidelines for consistent application"
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
                  Get Brand Strategy Session
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              
              <Link 
                href="/contact"
                className="group inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-[#002186] transition-all duration-300 text-lg"
              >
                Schedule Brand Consultation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex justify-center items-center space-x-8 text-sm text-gray-300">
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-2" />
                100+ Brands Created
              </div>
              <div className="flex items-center">
                <Award className="w-4 h-4 mr-2" />
                Brand Strategy Experts
              </div>
              <div className="flex items-center">
                <TrendingUp className="w-4 h-4 mr-2" />
                85% Recognition Increase
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}