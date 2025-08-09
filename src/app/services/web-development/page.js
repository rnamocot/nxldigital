import Link from "next/link";
import { Monitor, Code, Smartphone, Zap, Shield, Globe, Database, Palette, ArrowRight, CheckCircle, Sparkles, Award, Clock, Users, Star, Settings, FileText, Search, TrendingUp, Package } from "lucide-react";

export const metadata = {
  title: "Web Development Services | Custom Website Development | NXL Digital",
  description: "Custom websites and applications that convert visitors into customers. Responsive design, e-commerce solutions, and modern web development.",
  keywords: "web development, custom websites, responsive design, e-commerce development, web applications, website design, mobile-first development",
};

export default function WebDevelopmentPage() {
  const webFeatures = [
    {
      title: "Custom Website Design",
      description: "Unique, brand-focused designs that capture your business essence and engage your target audience.",
      Icon: Palette,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "E-commerce Solutions",
      description: "Powerful online stores with secure payment processing, inventory management, and conversion optimization.",
      Icon: Globe,
      color: "from-green-500 to-green-600"
    },
    {
      title: "Mobile-Responsive Development",
      description: "Websites that look and function perfectly on all devices, from smartphones to desktops.",
      Icon: Smartphone,
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "CMS Integration",
      description: "Easy-to-use content management systems that give you full control over your website content.",
      Icon: Settings,
      color: "from-orange-500 to-orange-600"
    },
    {
      title: "Website Optimization",
      description: "Performance optimization for fast loading times, better user experience, and improved SEO rankings.",
      Icon: Zap,
      color: "from-pink-500 to-pink-600"
    },
    {
      title: "Maintenance & Support",
      description: "Ongoing website maintenance, security updates, and technical support to keep your site running smoothly.",
      Icon: Shield,
      color: "from-yellow-500 to-yellow-600"
    }
  ];

  const technologies = [
    {
      name: "React & Next.js",
      description: "Modern JavaScript frameworks for fast, interactive websites",
      useCase: "Dynamic Web Apps",
      Icon: Code,
      color: "from-blue-400 to-blue-600"
    },
    {
      name: "WordPress",
      description: "Flexible CMS for easy content management",
      useCase: "Content-Rich Sites",
      Icon: FileText,
      color: "from-indigo-500 to-purple-600"
    },
    {
      name: "Shopify/WooCommerce",
      description: "Powerful e-commerce platforms for online stores",
      useCase: "E-commerce Stores",
      Icon: Package,
      color: "from-green-500 to-emerald-600"
    },
    {
      name: "Node.js & Python",
      description: "Backend development for complex applications",
      useCase: "Custom Applications",
      Icon: Code,
      color: "from-orange-500 to-red-600"
    },
    {
      name: "Cloud Hosting",
      description: "Scalable hosting solutions for reliability and performance",
      useCase: "High-Performance Sites",
      Icon: Globe,
      color: "from-gray-600 to-gray-800"
    },
    {
      name: "Database Solutions",
      description: "Secure and efficient database architecture",
      useCase: "Data-Driven Sites",
      Icon: Database,
      color: "from-purple-600 to-pink-600"
    }
  ];

  const benefits = [
    {
      title: "Fast Loading Speed",
      description: "Optimized websites that load in under 3 seconds for better user experience and SEO",
      Icon: Zap,
      stat: "< 3 seconds load time"
    },
    {
      title: "Mobile-First Design",
      description: "Responsive websites that look perfect on all devices and screen sizes",
      Icon: Smartphone,
      stat: "100% responsive"
    },
    {
      title: "SEO-Optimized",
      description: "Built-in SEO best practices to help your website rank higher in search results",
      Icon: Search,
      stat: "SEO-ready"
    },
    {
      title: "Secure & Reliable",
      description: "Enterprise-level security measures and 99.9% uptime guarantee",
      Icon: Shield,
      stat: "99.9% uptime"
    }
  ];

  const projectTypes = [
    {
      title: "Business Websites",
      description: "Professional websites for service-based businesses",
      features: ["Custom Design", "CMS Integration", "Contact Forms", "SEO Optimization"],
      timeframe: "2-4 weeks",
      Icon: Monitor
    },
    {
      title: "E-commerce Stores",
      description: "Full-featured online stores that drive sales",
      features: ["Product Catalog", "Payment Processing", "Inventory Management", "Order Tracking"],
      timeframe: "4-8 weeks",
      Icon: Package
    },
    {
      title: "Web Applications",
      description: "Custom web applications for specific business needs",
      features: ["Custom Functionality", "User Authentication", "Database Integration", "API Development"],
      timeframe: "8-16 weeks",
      Icon: Code
    },
    {
      title: "Landing Pages",
      description: "High-converting landing pages for marketing campaigns",
      features: ["Conversion Optimization", "A/B Testing", "Analytics Integration", "Fast Deployment"],
      timeframe: "1-2 weeks",
      Icon: TrendingUp
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
          
          {/* Floating Web Dev badges */}
          <div className="absolute top-20 right-20 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-gray-100 animate-float">
            <div className="text-xs font-semibold text-[#002186] flex items-center">
              <Code className="w-3 h-3 mr-2 text-[#FFD302]" />
              Modern Development
            </div>
          </div>
          <div className="absolute bottom-32 left-10 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-gray-100 animate-float-slow">
            <div className="text-xs font-semibold text-[#002186] flex items-center">
              <Zap className="w-3 h-3 mr-2 text-green-500" />
              Fast & Secure
            </div>
          </div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-[#FFD302]/10 border border-[#FFD302]/20 rounded-full text-sm font-medium text-[#002186] mb-8">
            <Sparkles className="w-4 h-4 mr-2" />
            Professional Web Development
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-gray-900 leading-tight">
            Websites That
            <br />
            <span className="bg-gradient-to-r from-[#002186] to-[#FFD302] bg-clip-text text-transparent">Convert Visitors</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
            Custom websites and applications that not only look amazing but drive real business results. 
            Modern design, powerful functionality, and seamless user experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link 
              href="/get-quote" 
              className="group inline-flex items-center justify-center px-8 py-4 bg-[#002186] text-white font-semibold rounded-xl hover:bg-[#001760] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl"
            >
              Get Web Development Quote
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link 
              href="/case-studies" 
              className="group inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-[#002186] hover:text-[#002186] transition-all duration-300"
            >
              View Portfolio
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Web Development stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: "< 3sec", label: "Load Time", icon: Zap },
              { number: "100%", label: "Mobile Responsive", icon: Smartphone },
              { number: "99.9%", label: "Uptime Guarantee", icon: Shield },
              { number: "7+ Years", label: "Development Experience", icon: Award }
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
              Complete Web Development Services
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Everything You Need for <span className="bg-gradient-to-r from-[#002186] to-[#FFD302] bg-clip-text text-transparent">Web Success</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to launch and beyond, we provide comprehensive web development services that drive results and grow your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {webFeatures.map((feature, index) => (
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

      {/* Technologies Section */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-[#FFD302]/10 border border-[#FFD302]/20 rounded-full text-sm font-medium text-[#002186] mb-6">
              Modern Technologies
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Built With <span className="bg-gradient-to-r from-[#002186] to-[#FFD302] bg-clip-text text-transparent">Latest Tech</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We use cutting-edge technologies and frameworks to build fast, secure, and scalable websites that stand the test of time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="group bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 text-center relative overflow-hidden">
                {/* Gradient top bar */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${tech.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#002186] to-[#001760] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <tech.Icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#002186] transition-colors">
                  {tech.name}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed group-hover:text-gray-700 transition-colors">
                  {tech.description}
                </p>
                
                <div className="inline-flex items-center px-3 py-1 bg-[#FFD302]/20 text-[#002186] text-sm font-semibold rounded-full">
                  {tech.useCase}
                </div>
                
                {/* Hover indicator */}
                <div className="mt-4 w-12 h-0.5 bg-gradient-to-r from-transparent via-[#FFD302] to-transparent mx-auto transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Types Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-[#FFD302]/10 border border-[#FFD302]/20 rounded-full text-sm font-medium text-[#002186] mb-6">
              Project Types
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Solutions for <span className="bg-gradient-to-r from-[#002186] to-[#FFD302] bg-clip-text text-transparent">Every Need</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you need a simple business website or a complex web application, we have the expertise to bring your vision to life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projectTypes.map((project, index) => (
              <div key={index} className="group bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden">
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-[#FFD302]/20 to-transparent rounded-bl-3xl"></div>
                
                <div className="relative">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#002186] to-[#001760] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <project.Icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-[#002186] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                        {project.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {project.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-[#FFD302] flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center px-4 py-2 bg-[#002186]/10 text-[#002186] text-sm font-bold rounded-full">
                      <Clock className="w-4 h-4 mr-2" />
                      {project.timeframe}
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
              Why Choose Our Development
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Built for <span className="bg-gradient-to-r from-[#002186] to-[#FFD302] bg-clip-text text-transparent">Performance</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every website we build is optimized for speed, security, and search engines to give you the best possible results.
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
              Ready to Build Your Website?
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Launch Your
              <br />
              <span className="bg-gradient-to-r from-[#FFD302] to-yellow-300 bg-clip-text text-transparent">Dream Website</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed">
              Transform your online presence with a custom website that drives results. Fast, secure, 
              and built to convert visitors into customers.
            </p>
          </div>

          {/* Value propositions */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                Icon: Users,
                title: "Free Consultation",
                description: "Discuss your project requirements and get expert recommendations"
              },
              {
                Icon: Palette,
                title: "Custom Design",
                description: "Unique designs tailored to your brand and business goals"
              },
              {
                Icon: Zap,
                title: "Fast Delivery",
                description: "Professional websites delivered on time and on budget"
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
                  Get Development Quote
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              
              <Link 
                href="/contact"
                className="group inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-[#002186] transition-all duration-300 text-lg"
              >
                Schedule Consultation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex justify-center items-center space-x-8 text-sm text-gray-300">
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-2" />
                200+ Websites Built
              </div>
              <div className="flex items-center">
                <Award className="w-4 h-4 mr-2" />
                Expert Developers
              </div>
              <div className="flex items-center">
                <Shield className="w-4 h-4 mr-2" />
                99.9% Uptime
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}