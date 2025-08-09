import Link from "next/link";
import { Smartphone, Users, Heart, Share2, MessageCircle, TrendingUp, BarChart3, Camera, ArrowRight, CheckCircle, Sparkles, Award, Zap, Clock, Shield, Star, Facebook, Instagram, Linkedin, Video, Twitter, Youtube, Eye, UserPlus, Target, UsersRound, Search, Lightbulb } from "lucide-react";

export const metadata = {
  title: "Social Media Marketing Services | Social Media Management | NXL Digital",
  description: "Build meaningful connections with expert social media marketing. Content creation, community management, and social advertising across all platforms.",
  keywords: "social media marketing, social media management, content creation, community management, social advertising, Facebook marketing, Instagram marketing",
};

export default function SocialMediaPage() {
  const socialFeatures = [
    {
      title: "Social Media Strategy",
      description: "Comprehensive social media strategy aligned with your business goals and target audience behavior.",
      Icon: Smartphone,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Content Creation & Curation",
      description: "Engaging visual content, copywriting, and content curation that resonates with your audience.",
      Icon: Camera,
      color: "from-green-500 to-green-600"
    },
    {
      title: "Community Management",
      description: "Active community management, responding to comments, and building relationships with followers.",
      Icon: Users,
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Social Media Advertising",
      description: "Targeted social media ad campaigns to expand reach, drive traffic, and generate leads.",
      Icon: TrendingUp,
      color: "from-orange-500 to-orange-600"
    },
    {
      title: "Influencer Partnerships",
      description: "Strategic influencer collaborations to expand brand reach and build authentic connections.",
      Icon: Heart,
      color: "from-pink-500 to-pink-600"
    },
    {
      title: "Analytics & Reporting",
      description: "Detailed social media analytics and performance reporting to track growth and engagement.",
      Icon: BarChart3,
      color: "from-yellow-500 to-yellow-600"
    }
  ];

  const platforms = [
    {
      name: "Facebook",
      description: "Community building and targeted advertising",
      userBase: "2.9B+ monthly users",
      Icon: Facebook,
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "Instagram",
      description: "Visual storytelling and influencer marketing",
      userBase: "2B+ monthly users",
      Icon: Instagram,
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "LinkedIn",
      description: "B2B networking and professional content",
      userBase: "900M+ professionals",
      Icon: Linkedin,
      color: "from-blue-600 to-indigo-600"
    },
    {
      name: "TikTok",
      description: "Short-form video content and viral marketing",
      userBase: "1B+ monthly users",
      Icon: Video,
      color: "from-black to-gray-800"
    },
    {
      name: "Twitter/X",
      description: "Real-time engagement and thought leadership",
      userBase: "450M+ monthly users",
      Icon: Twitter,
      color: "from-slate-600 to-slate-700"
    },
    {
      name: "YouTube",
      description: "Video marketing and educational content",
      userBase: "2.7B+ monthly users",
      Icon: Youtube,
      color: "from-red-500 to-red-600"
    }
  ];

  const benefits = [
    {
      title: "Brand Awareness",
      description: "Increase brand visibility and recognition across social platforms",
      Icon: Eye,
      stat: "70% increase"
    },
    {
      title: "Customer Engagement",
      description: "Build meaningful relationships with your audience through active engagement",
      Icon: Heart,
      stat: "5x more interaction"
    },
    {
      title: "Lead Generation",
      description: "Generate qualified leads through targeted social media campaigns",
      Icon: UserPlus,
      stat: "3x more leads"
    },
    {
      title: "Community Growth",
      description: "Build a loyal community of brand advocates and engaged followers",
      Icon: UsersRound,
      stat: "200%+ growth"
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
          
          {/* Floating Social Media badges */}
          <div className="absolute top-20 right-20 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-gray-100 animate-float">
            <div className="text-xs font-semibold text-[#002186] flex items-center">
              <Heart className="w-3 h-3 mr-2 text-[#FFD302]" />
              Engagement Focus
            </div>
          </div>
          <div className="absolute bottom-32 left-10 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-gray-100 animate-float-slow">
            <div className="text-xs font-semibold text-[#002186] flex items-center">
              <TrendingUp className="w-3 h-3 mr-2 text-green-500" />
              Viral Growth
            </div>
          </div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-[#FFD302]/10 border border-[#FFD302]/20 rounded-full text-sm font-medium text-[#002186] mb-8">
            <Sparkles className="w-4 h-4 mr-2" />
            Expert Social Media Marketing
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-gray-900 leading-tight">
            Social Media That
            <br />
            <span className="bg-gradient-to-r from-[#002186] to-[#FFD302] bg-clip-text text-transparent">Builds Communities</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
            Build meaningful connections and engage your audience across all major social platforms. 
            Strategic content creation, community management, and social advertising that drives real results.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link 
              href="/get-quote" 
              className="group inline-flex items-center justify-center px-8 py-4 bg-[#002186] text-white font-semibold rounded-xl hover:bg-[#001760] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl"
            >
              Get Social Media Audit
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link 
              href="/case-studies" 
              className="group inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-[#002186] hover:text-[#002186] transition-all duration-300"
            >
              View Social Success Stories
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Social Media stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: "200%+", label: "Engagement Growth", icon: TrendingUp },
              { number: "24/7", label: "Community Management", icon: Clock },
              { number: "6+ Platforms", label: "Multi-Platform Expertise", icon: Shield },
              { number: "5+ Years", label: "Social Media Experience", icon: Award }
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
              Complete Social Media Services
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Everything You Need for <span className="bg-gradient-to-r from-[#002186] to-[#FFD302] bg-clip-text text-transparent">Social Success</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From strategy to execution, we handle every aspect of your social media presence to build engaged communities and drive business growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {socialFeatures.map((feature, index) => (
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

      {/* Platform Coverage */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-[#FFD302]/10 border border-[#FFD302]/20 rounded-full text-sm font-medium text-[#002186] mb-6">
              Multi-Platform Expertise
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Every Platform <span className="bg-gradient-to-r from-[#002186] to-[#FFD302] bg-clip-text text-transparent">Mastered</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Reach your audience wherever they are with expertly managed social media presence across all major platforms.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <div key={index} className="group bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 text-center relative overflow-hidden">
                {/* Gradient top bar */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${platform.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#002186] to-[#001760] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <platform.Icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#002186] transition-colors">
                  {platform.name}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed group-hover:text-gray-700 transition-colors">
                  {platform.description}
                </p>
                
                <div className="inline-flex items-center px-3 py-1 bg-[#FFD302]/20 text-[#002186] text-sm font-semibold rounded-full">
                  {platform.userBase}
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
              Why Social Media Marketing Works
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              The <span className="bg-gradient-to-r from-[#002186] to-[#FFD302] bg-clip-text text-transparent">Social Advantage</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover why social media marketing is essential for building brand awareness, customer relationships, and business growth.
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
              Our Social Media Process
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              How We <span className="bg-gradient-to-r from-[#002186] to-[#FFD302] bg-clip-text text-transparent">Build Your Community</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven methodology ensures consistent growth in followers, engagement, and business results across all social platforms.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Strategy & Planning",
                description: "Audience analysis, competitor research, and content strategy development tailored to your business goals.",
                Icon: Target
              },
              {
                step: "02", 
                title: "Content Creation",
                description: "Engaging visual content, compelling copy, and multimedia assets designed for each platform's unique audience.",
                Icon: Camera
              },
              {
                step: "03",
                title: "Community Management",
                description: "Active engagement, community building, and real-time responses to build authentic relationships.",
                Icon: Users
              },
              {
                step: "04",
                title: "Optimize & Scale",
                description: "Performance analysis, strategy refinement, and scaling successful content for maximum reach and engagement.",
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
              Ready to Build Your Community?
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Start Growing Your
              <br />
              <span className="bg-gradient-to-r from-[#FFD302] to-yellow-300 bg-clip-text text-transparent">Social Presence</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed">
              Turn social media into your most powerful marketing channel. Build engaged communities, 
              drive traffic, and generate leads with strategic social media marketing.
            </p>
          </div>

          {/* Value propositions */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                Icon: Search,
                title: "Free Social Audit",
                description: "Comprehensive analysis of your current social media performance"
              },
              {
                Icon: Lightbulb,
                title: "Custom Strategy",
                description: "Tailored social media strategy for your industry and audience"
              },
              {
                Icon: TrendingUp,
                title: "Proven Growth",
                description: "Track record of delivering 200%+ engagement growth"
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
                  Get Social Media Audit
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              
              <Link 
                href="/contact"
                className="group inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-[#002186] transition-all duration-300 text-lg"
              >
                Schedule Strategy Call
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex justify-center items-center space-x-8 text-sm text-gray-300">
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-2" />
                500+ Brands Managed
              </div>
              <div className="flex items-center">
                <Award className="w-4 h-4 mr-2" />
                Social Media Certified
              </div>
              <div className="flex items-center">
                <TrendingUp className="w-4 h-4 mr-2" />
                200%+ Engagement Growth
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}