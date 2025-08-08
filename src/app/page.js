import Link from "next/link";
import Image from "next/image";
import { ArrowRight, PlayCircle, Star, Users, Award, Zap, CheckCircle, Quote, Target, Search, Smartphone, Monitor, Palette } from "lucide-react";
import { metaTagsData } from "./lib/metaTagsData";

export const metadata = {
  title: metaTagsData.home.title,
  description: metaTagsData.home.description,
  keywords: metaTagsData.home.keywords,
  openGraph: metaTagsData.home.openGraph,
  twitter: metaTagsData.home.twitter,
};

export default function HomePage() {
  const portfolioProjects = [
    { name: "APCEU", image: "/images/portfolio/APCEU.png", category: "E-commerce" },
    { name: "Eastrade", image: "/images/portfolio/eastrade.png", category: "Trading Platform" },
    { name: "Neon Intelligence", image: "/images/portfolio/neonintelligence.png", category: "AI Technology" },
    { name: "Zendz Tools", image: "/images/portfolio/zendztools.png", category: "SaaS Platform" }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Solutions",
      text: "NXL Digital transformed our online presence completely. Our lead generation increased by 300% in just 4 months!",
      rating: 5
    },
    {
      name: "Mark Rodriguez",
      company: "E-Commerce Plus",
      text: "The team's human-centered approach combined with cutting-edge technology delivered results beyond our expectations.",
      rating: 5
    },
    {
      name: "Lisa Chen",
      company: "Healthcare Innovations",
      text: "Professional, results-driven, and always available. They helped us achieve 250% ROI on our digital marketing investment.",
      rating: 5
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed", icon: Award },
    { number: "98%", label: "Client Satisfaction", icon: Star },
    { number: "300%", label: "Average ROI Increase", icon: Zap },
    { number: "24/7", label: "Support Available", icon: Users }
  ];

  return (
    <>
      {/* Dynamic Hero Section */}
      <section className="relative h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden flex items-center">
        {/* Floating Bubbles/Circles */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Large background circles */}
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-[#002186]/5 to-[#FFD302]/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-[#FFD302]/5 to-[#002186]/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          
          {/* Medium floating circles */}
          <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-[#002186]/10 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute bottom-1/3 left-1/5 w-24 h-24 bg-[#FFD302]/20 rounded-full animate-float-slow" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute top-1/3 left-1/4 w-16 h-16 bg-[#002186]/15 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
          
          {/* Rising bubbles */}
          <div className="absolute left-1/6 w-6 h-6 bg-[#FFD302]/25 rounded-full animate-bubble-rise" style={{ animationDelay: '0s' }}></div>
          <div className="absolute left-1/3 w-4 h-4 bg-[#002186]/20 rounded-full animate-bubble-rise" style={{ animationDelay: '5s' }}></div>
          <div className="absolute right-1/4 w-8 h-8 bg-[#FFD302]/15 rounded-full animate-bubble-rise" style={{ animationDelay: '10s' }}></div>
          
          {/* Small decorative circles */}
          <div className="absolute top-1/2 right-1/3 w-8 h-8 bg-[#FFD302]/30 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/4 left-1/3 w-6 h-6 bg-[#002186]/20 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-3/4 right-1/2 w-4 h-4 bg-[#FFD302]/40 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
          
          {/* Floating geometric shapes */}
          <div className="absolute top-1/5 right-1/6 w-12 h-12 border-2 border-[#002186]/20 rounded-lg rotate-45 animate-spin" style={{ animationDuration: '10s' }}></div>
          <div className="absolute bottom-1/5 left-1/2 w-8 h-8 border border-[#FFD302]/30 rounded-full animate-spin" style={{ animationDuration: '8s', animationDirection: 'reverse' }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-[#FFD302]/10 border border-[#FFD302]/20 rounded-full text-sm font-medium text-[#002186]">
                <Zap className="w-4 h-4 mr-2" />
                #1 Digital Marketing Agency
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                <span className="text-gray-900">Beyond Algorithms</span><br />
                <span className="bg-gradient-to-r from-[#002186] to-[#FFD302] bg-clip-text text-transparent">Building Digital Ecosystems</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                We're not just another agency. We're architects of digital growth, driven by human connection and fortified by cutting-edge technology. Let's transform your digital presence together.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/get-quote" 
                  className="group inline-flex items-center justify-center px-8 py-4 bg-[#002186] text-white font-semibold rounded-xl hover:bg-[#001760] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <Link 
                  href="/about" 
                  className="group inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-[#002186] hover:text-[#002186] transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center space-x-8 pt-8 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#002186]">500+</div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#002186]">98%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#002186]">300%</div>
                  <div className="text-sm text-gray-600">Avg ROI</div>
                </div>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative lg:pl-8">
              <div className="relative">
                {/* Main Image/Graphic */}
                <div className="relative bg-gradient-to-br from-[#002186] to-[#001760] rounded-3xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="bg-white rounded-2xl p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 bg-[#FFD302] rounded-full flex items-center justify-center">
                        <Award className="w-6 h-6 text-[#002186]" />
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-[#002186]">+300%</div>
                        <div className="text-sm text-gray-600">Growth</div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-3 bg-[#FFD302] rounded-full"></div>
                      <div className="h-3 bg-gray-200 rounded-full w-3/4"></div>
                      <div className="h-3 bg-gray-200 rounded-full w-1/2"></div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-6 -left-6 bg-white rounded-2xl p-4 shadow-xl animate-pulse">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-medium">Live Campaign</span>
                  </div>
                </div>

                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl">
                  <div className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-[#FFD302]" />
                    <span className="text-sm font-bold">4.9/5</span>
                    <span className="text-xs text-gray-600">Rating</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Interactive background particles */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-1/4 w-32 h-32 border border-gray-200 rounded-full animate-pulse hover:border-[#FFD302] transition-colors duration-500 cursor-pointer"></div>
          <div className="absolute bottom-10 right-1/4 w-24 h-24 border border-[#FFD302]/30 rounded-full animate-pulse hover:animate-spin transition-all duration-500 cursor-pointer" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/6 w-4 h-4 bg-[#FFD302]/50 rounded-full animate-ping hover:bg-[#FFD302] transition-colors"></div>
          <div className="absolute top-1/3 right-1/6 w-6 h-6 bg-gray-200 rounded-full animate-bounce hover:bg-[#FFD302] transition-colors cursor-pointer"></div>
          
          {/* Floating achievement badges */}
          <div className="absolute top-20 right-20 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-gray-100 animate-float">
            <div className="text-xs font-semibold text-[#002186] flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
              Live Results
            </div>
          </div>
          <div className="absolute bottom-32 left-10 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-gray-100 animate-float-slow">
            <div className="text-xs font-semibold text-[#002186]">🏆 #1 Agency</div>
          </div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-[#FFD302]/10 border border-[#FFD302]/20 rounded-full text-sm font-medium text-[#002186] mb-6 hover:bg-[#FFD302]/20 transition-colors cursor-pointer">
              <div className="w-2 h-2 bg-[#FFD302] rounded-full mr-2 animate-pulse"></div>
              Our Impact
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 hover:text-[#002186] transition-colors cursor-default">
              Results That Make Our Clients 
              <span className="bg-gradient-to-r from-[#002186] to-[#FFD302] bg-clip-text text-transparent"> Smile</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real numbers from real businesses. Here's the growth story we've written together.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group cursor-pointer">
                <div className="relative mb-6">
                  {/* Ripple effect container */}
                  <div className="absolute inset-0 w-20 h-20 mx-auto rounded-2xl bg-[#FFD302]/20 scale-0 group-hover:scale-150 transition-transform duration-700 opacity-0 group-hover:opacity-100"></div>
                  
                  <div className="relative w-20 h-20 mx-auto bg-white rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-2xl border-2 border-gray-100 group-hover:border-[#FFD302] group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-[#FFD302]/5">
                    <stat.icon className="w-10 h-10 text-gray-600 group-hover:text-[#002186] transition-all duration-300 group-hover:scale-125" />
                  </div>
                  
                  {/* Notification badges */}
                  <div className="absolute -top-3 -right-3 w-7 h-7 bg-gradient-to-r from-[#FFD302] to-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center shadow-lg group-hover:animate-bounce">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  
                  {/* Progress ring */}
                  <div className="absolute inset-0 w-20 h-20 mx-auto">
                    <svg className="transform -rotate-90 w-20 h-20" viewBox="0 0 80 80">
                      <circle
                        cx="40"
                        cy="40"
                        r="35"
                        stroke="#FFD302"
                        strokeWidth="2"
                        fill="none"
                        strokeDasharray="220"
                        strokeDashoffset="220"
                        className="group-hover:stroke-dashoffset-0 transition-all duration-1000 opacity-0 group-hover:opacity-100"
                      />
                    </svg>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="text-4xl lg:text-5xl font-bold mb-3 text-gray-900 group-hover:text-[#002186] transition-all duration-300 group-hover:scale-105">
                    <span className="inline-block group-hover:animate-bounce" style={{ animationDelay: `${index * 100}ms` }}>
                      {stat.number}
                    </span>
                  </div>
                  <div className="text-gray-600 font-medium group-hover:text-gray-800 transition-colors duration-300">
                    {stat.label}
                  </div>
                  <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#FFD302] to-transparent mx-auto transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-full"></div>
                  
                  {/* Interactive tooltip */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 mt-3">
                    <div className="text-xs text-[#002186] font-semibold bg-[#FFD302]/10 rounded-full px-3 py-1 inline-block">
                      {index === 0 && "Completed Successfully"}
                      {index === 1 && "Happy Customers"}
                      {index === 2 && "Growth Achieved"}
                      {index === 3 && "Always Here"}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Interactive CTA */}
          <div className="mt-20 text-center">
            <div className="inline-flex items-center space-x-3 bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group">
              <div className="flex items-center space-x-2 text-gray-600 font-medium group-hover:text-[#002186] transition-colors">
                <div className="w-8 h-0.5 bg-gray-300 group-hover:bg-[#FFD302] transition-colors"></div>
                <span>Want to be our next success story?</span>
                <div className="w-8 h-0.5 bg-gray-300 group-hover:bg-[#FFD302] transition-colors"></div>
              </div>
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-[#FFD302] rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-[#FFD302] rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-[#FFD302] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-[#FFD302]/10 border border-[#FFD302]/20 rounded-full text-sm font-medium text-[#002186] mb-6">
                About NXL Digital
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                We Build Digital Success Stories
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                At NXL Digital, we believe that behind every successful digital campaign is a deep understanding of human behavior, market dynamics, and cutting-edge technology working in perfect harmony.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  "Human-centered approach to digital marketing",
                  "Data-driven strategies with measurable results",
                  "End-to-end solutions from strategy to execution",
                  "Dedicated team of experts in your corner"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-[#FFD302] flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/about" className="inline-flex items-center text-[#002186] font-semibold hover:text-[#001760] transition-colors">
                Learn More About Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8">
                <div className="grid grid-cols-2 gap-4">
                  {portfolioProjects.map((project, index) => (
                    <div key={index} className="bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-shadow">
                      <Image
                        src={project.image}
                        alt={project.name}
                        width={200}
                        height={120}
                        className="w-full h-20 object-cover rounded-lg mb-3"
                      />
                      <h4 className="font-semibold text-gray-900 text-sm">{project.name}</h4>
                      <p className="text-xs text-gray-600">{project.category}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-[#FFD302]/10 border border-[#FFD302]/20 rounded-full text-sm font-medium text-[#002186] mb-6">
              Our Services
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Digital Solutions That Drive Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital marketing services designed to elevate your brand and drive measurable growth.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "PPC Management",
                description: "Maximize your ROI with expert pay-per-click campaigns across all major platforms.",
                Icon: Target,
                link: "/services/ppc"
              },
              {
                title: "SEO Optimization",
                description: "Boost your organic visibility and drive qualified traffic with advanced SEO strategies.",
                Icon: Search,
                link: "/services/seo"
              },
              {
                title: "Social Media Management",
                description: "Build meaningful connections and engage your audience across social platforms.",
                Icon: Smartphone,
                link: "/services/social-media-marketing"
              },
              {
                title: "Web Development",
                description: "Custom websites and applications that convert visitors into customers.",
                Icon: Monitor,
                link: "/services/web-development"
              },
              {
                title: "Brand Marketing",
                description: "Strategic brand development that resonates with your target audience.",
                Icon: Palette,
                link: "/services/brand-marketing"
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group relative overflow-hidden border border-gray-100">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#002186] to-[#FFD302] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                <div className="w-16 h-16 mb-6 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-[#FFD302] group-hover:scale-110 transition-all duration-300">
                  <service.Icon className="w-8 h-8 text-gray-600 group-hover:text-[#002186] transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#002186] transition-colors">{service.title}</h3>
                <p className="text-gray-600 mb-6 group-hover:text-gray-700 transition-colors">{service.description}</p>
                <Link 
                  href={service.link}
                  className="inline-flex items-center text-[#002186] font-semibold hover:text-[#001760] transition-all duration-300 group-hover:gap-3"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-[#FFD302]/10 border border-[#FFD302]/20 rounded-full text-sm font-medium text-[#002186] mb-6">
              Our Work
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Recent Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take a look at some of our recent work and see how we've helped businesses achieve their digital goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {portfolioProjects.map((project, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="aspect-w-16 aspect-h-10">
                    <Image
                      src={project.image}
                      alt={project.name}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-[#002186] font-semibold mb-2">{project.category}</div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#002186] transition-colors">{project.name}</h3>
                  </div>
                  <div className="absolute inset-0 bg-[#002186]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Link href="/case-studies" className="bg-[#FFD302] text-[#002186] px-6 py-3 rounded-lg font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      View Project
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/case-studies" className="inline-flex items-center px-8 py-4 bg-[#002186] text-white font-semibold rounded-xl hover:bg-[#001760] transition-colors">
              View All Projects
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-[#FFD302]/10 border border-[#FFD302]/20 rounded-full text-sm font-medium text-[#002186] mb-6">
              Client Success Stories
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say about working with NXL Digital.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 group relative overflow-hidden border border-gray-100">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#FFD302]/20 to-transparent rounded-bl-3xl"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-[#FFD302] fill-current transform hover:scale-110 transition-transform" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-[#002186] mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <p className="text-gray-700 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#002186] to-[#FFD302] rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.company}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-[#FFD302]/10 border border-[#FFD302]/20 rounded-full text-sm font-medium text-[#002186] mb-6">
              Latest Insights
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Digital Marketing Insights
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay ahead of the curve with our latest thoughts on digital marketing trends, strategies, and industry insights.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "The Future of AI in Digital Marketing",
                excerpt: "Discover how artificial intelligence is reshaping the digital marketing landscape and what it means for your business.",
                category: "Technology",
                readTime: "5 min read",
                date: "Jan 8, 2025"
              },
              {
                title: "PPC Strategies That Actually Work in 2025",
                excerpt: "Learn the most effective pay-per-click strategies that are driving results for businesses this year.",
                category: "PPC",
                readTime: "7 min read", 
                date: "Jan 5, 2025"
              },
              {
                title: "SEO Beyond Keywords: User Experience Focus",
                excerpt: "Why modern SEO success depends more on user experience than keyword density, and how to optimize for both.",
                category: "SEO",
                readTime: "6 min read",
                date: "Jan 3, 2025"
              }
            ].map((post, index) => (
              <article key={index} className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
                <div className="h-48 bg-gradient-to-br from-[#002186] to-[#001760] relative">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute bottom-4 left-6 right-6">
                    <div className="text-sm text-[#FFD302] font-medium">{post.category}</div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#002186] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <Link href="/blog" className="inline-flex items-center mt-4 text-[#002186] font-semibold hover:text-[#001760] transition-colors">
                    Read Article
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/blog" className="inline-flex items-center px-8 py-4 bg-[#002186] text-white font-semibold rounded-xl hover:bg-[#001760] transition-colors">
              View All Articles
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-[#002186] to-[#001760] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        {/* Floating elements for visual interest */}
        <div className="absolute top-10 left-10 w-20 h-20 border border-white/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 border border-[#FFD302]/30 rounded-full animate-bounce" style={{ animationDuration: '3s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-[#FFD302] rounded-full animate-ping"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-white/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            Join hundreds of successful businesses that have achieved remarkable growth with our proven strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/get-quote" 
              className="group inline-flex items-center justify-center px-8 py-4 bg-[#FFD302] text-[#002186] font-bold rounded-xl hover:bg-yellow-400 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                Get Your Free Quote
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            <Link 
              href="/case-studies" 
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-[#002186] transition-all duration-300"
            >
              View Success Stories
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}