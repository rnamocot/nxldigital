import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, User, ArrowRight, Search, Filter, Sparkles, BookOpen, TrendingUp, Users, Award, Zap } from "lucide-react";
import { metaTagsData } from "../lib/metaTagsData";
import BlogFilter from './BlogFilter';

export const metadata = {
  title: metaTagsData.blog.title,
  description: metaTagsData.blog.description,
  keywords: metaTagsData.blog.keywords,
  openGraph: metaTagsData.blog.openGraph,
};

export default function BlogPage() {
  const blogPosts = [
    {
      title: "10 Game-Changing PPC Strategies to Dominate 2025",
      excerpt: "Discover the cutting-edge pay-per-click advertising strategies that forward-thinking businesses are using to maximize ROI and drive explosive growth in 2025.",
      category: "PPC",
      readTime: "5 min read",
      date: "January 15, 2025",
      image: "/images/placeholder.png",
      slug: "ppc-strategies-dominate-2025"
    },
    {
      title: "Local SEO Mastery: Your 2025 Guide to Market Dominance",
      excerpt: "Learn the latest local SEO strategies and algorithm updates that will help your business dominate local search results and attract more customers in 2025.",
      category: "SEO",
      readTime: "8 min read", 
      date: "January 12, 2025",
      image: "/images/placeholder.png",
      slug: "local-seo-mastery-2025-guide"
    },
    {
      title: "Social Media Revolution: 2025 Trends That Will Transform Marketing",
      excerpt: "Stay ahead with the revolutionary social media trends, platform innovations, and marketing strategies that will define successful campaigns in 2025.",
      category: "Social Media",
      readTime: "6 min read",
      date: "January 10, 2025", 
      image: "/images/placeholder.png",
      slug: "social-media-revolution-2025-trends"
    },
    {
      title: "Landing Page Optimization: The 2025 Conversion Playbook",
      excerpt: "Master advanced landing page optimization with the latest design principles, AI-powered personalization, and conversion strategies that work in 2025.",
      category: "Web Development",
      readTime: "7 min read",
      date: "January 8, 2025",
      image: "/images/placeholder.png", 
      slug: "landing-page-optimization-2025-playbook"
    },
    {
      title: "Brand Storytelling in the AI Era: 2025 Connection Strategies",
      excerpt: "Discover how to create authentic brand stories that cut through the noise in 2025, building deeper connections with your audience in an AI-driven world.",
      category: "Brand Marketing",
      readTime: "5 min read",
      date: "January 5, 2025",
      image: "/images/placeholder.png",
      slug: "brand-storytelling-ai-era-2025"
    },
    {
      title: "GA4 Advanced Analytics: 2025 Metrics That Drive Growth",
      excerpt: "Unlock the full potential of Google Analytics 4 with advanced tracking strategies and key metrics that successful businesses monitor in 2025.",
      category: "Analytics",
      readTime: "6 min read",
      date: "January 3, 2025",
      image: "/images/placeholder.png",
      slug: "ga4-advanced-analytics-2025-metrics"
    },
    {
      title: "Email Marketing Automation 2.0: AI-Powered Success in 2025",
      excerpt: "Build next-generation email marketing funnels with AI automation, predictive analytics, and personalization strategies that convert in 2025.",
      category: "Email Marketing",
      readTime: "9 min read",
      date: "December 30, 2024",
      image: "/images/placeholder.png",
      slug: "email-marketing-automation-ai-powered-2025"
    },
    {
      title: "Digital Marketing Evolution: AI & Beyond in 2025",
      excerpt: "Explore how artificial intelligence, machine learning, and emerging technologies are reshaping digital marketing strategies for unprecedented growth in 2025.",
      category: "Digital Marketing",
      readTime: "7 min read", 
      date: "December 28, 2024",
      image: "/images/placeholder.png",
      slug: "digital-marketing-evolution-ai-beyond-2025"
    }
  ];

  const categories = ["All", "PPC", "SEO", "Social Media", "Web Development", "Brand Marketing", "Analytics", "Email Marketing", "Digital Marketing"];

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
          
          {/* Floating knowledge badges */}
          <div className="absolute top-20 right-20 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-gray-100 animate-float">
            <div className="text-xs font-semibold text-[#002186] flex items-center">
              <BookOpen className="w-3 h-3 mr-2 text-[#FFD302]" />
              Expert Insights
            </div>
          </div>
          <div className="absolute bottom-32 left-10 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-gray-100 animate-float-slow">
            <div className="text-xs font-semibold text-[#002186] flex items-center">
              <TrendingUp className="w-3 h-3 mr-2 text-green-500" />
              Latest Strategies
            </div>
          </div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-[#FFD302]/10 border border-[#FFD302]/20 rounded-full text-sm font-medium text-[#002186] mb-8">
            <Sparkles className="w-4 h-4 mr-2" />
            Expert Digital Marketing Insights
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-gray-900 leading-tight">
            Knowledge That
            <br />
            <span className="bg-gradient-to-r from-[#002186] to-[#FFD302] bg-clip-text text-transparent">Drives Growth</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
            Discover proven strategies, expert insights, and the latest trends that successful businesses 
            use to accelerate their digital growth and maximize ROI.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link 
              href="#latest-posts" 
              className="group inline-flex items-center justify-center px-8 py-4 bg-[#002186] text-white font-semibold rounded-xl hover:bg-[#001760] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl"
            >
              Explore Latest Posts
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link 
              href="/get-quote" 
              className="group inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-[#002186] hover:text-[#002186] transition-all duration-300"
            >
              Get Free Consultation
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Blog stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: "100+", label: "Expert Articles", icon: BookOpen },
              { number: "50K+", label: "Monthly Readers", icon: Users },
              { number: "95%", label: "Actionable Content", icon: Award },
              { number: "Weekly", label: "Fresh Updates", icon: Zap }
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

      {/* Featured Post */}
      <section id="latest-posts" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-[#FFD302]/10 border border-[#FFD302]/20 rounded-full text-sm font-medium text-[#002186] mb-6">
              Editor's Pick
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Featured <span className="bg-gradient-to-r from-[#002186] to-[#FFD302] bg-clip-text text-transparent">Article</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our most popular and impactful content, handpicked to accelerate your digital marketing success.
            </p>
          </div>
          
          <div className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden max-w-6xl mx-auto relative">
            {/* Gradient top bar */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#002186] to-[#FFD302] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            
            <div className="lg:flex">
              <div className="lg:w-1/2 relative overflow-hidden">
                <div className="h-64 lg:h-full bg-gradient-to-br from-[#002186] to-[#001760] flex items-center justify-center relative">
                  {/* Featured badge */}
                  <div className="absolute top-6 left-6 bg-[#FFD302] text-[#002186] px-4 py-2 rounded-full text-sm font-bold flex items-center">
                    <Sparkles className="w-4 h-4 mr-2" />
                    Featured
                  </div>
                  
                  {/* Content placeholder with icon */}
                  <div className="text-center text-white p-6">
                    <div className="w-20 h-20 mx-auto mb-4 bg-white/20 rounded-2xl flex items-center justify-center">
                      <BookOpen className="w-10 h-10 text-white" />
                    </div>
                    <div className="text-lg font-semibold">
                      Most Popular Article
                    </div>
                  </div>
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
              
              <div className="lg:w-1/2 p-8 lg:p-12">
                <div className="flex items-center space-x-4 mb-6">
                  <span className="px-4 py-2 bg-[#FFD302]/20 text-[#002186] text-sm font-semibold rounded-full border border-[#FFD302]/30">
                    {blogPosts[0].category}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm space-x-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {blogPosts[0].date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {blogPosts[0].readTime}
                    </div>
                  </div>
                </div>
                
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 group-hover:text-[#002186] transition-colors leading-tight">
                  {blogPosts[0].title}
                </h3>
                
                <p className="text-gray-600 mb-8 text-lg leading-relaxed group-hover:text-gray-700 transition-colors">
                  {blogPosts[0].excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <Link 
                    href={`/blog/${blogPosts[0].slug}`}
                    className="group/link inline-flex items-center px-6 py-3 bg-[#002186] text-white font-semibold rounded-xl hover:bg-[#001760] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl"
                  >
                    Read Full Article
                    <ArrowRight className="ml-2 w-5 h-5 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                  
                  <div className="flex items-center space-x-3 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      5.2K reads
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-gradient-to-r from-gray-50 to-white py-12 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2 flex items-center justify-center">
              <Filter className="w-6 h-6 mr-2 text-[#002186]" />
              Explore by Category
            </h3>
            <p className="text-gray-600">Find content that matches your specific interests and business needs</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`group px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${
                  index === 0
                    ? "bg-[#002186] text-white shadow-lg hover:shadow-2xl"
                    : "bg-white text-gray-700 hover:text-[#002186] hover:bg-gray-50 border border-gray-200 hover:border-[#002186]/30 shadow-sm hover:shadow-lg"
                }`}
              >
                <div className="flex items-center">
                  {category}
                  {index === 0 && <Sparkles className="w-4 h-4 ml-2 group-hover:animate-spin" />}
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Latest <span className="bg-gradient-to-r from-[#002186] to-[#FFD302] bg-clip-text text-transparent">Insights</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay ahead of the curve with our latest articles covering cutting-edge strategies, trends, and best practices.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <article key={index} className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden h-full flex flex-col relative">
                {/* Gradient top bar */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#002186] to-[#FFD302] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                
                <div className="relative overflow-hidden">
                  <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative group-hover:scale-105 transition-transform duration-500">
                    {/* Category icon placeholder */}
                    <div className="w-16 h-16 bg-white/80 rounded-2xl flex items-center justify-center shadow-lg">
                      <BookOpen className="w-8 h-8 text-[#002186]" />
                    </div>
                    
                    {/* Category badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-4 py-2 bg-[#FFD302]/90 backdrop-blur-sm text-[#002186] text-xs font-bold rounded-full border border-[#FFD302] group-hover:bg-[#FFD302] transition-colors">
                        {post.category}
                      </span>
                    </div>
                    
                    {/* Reading indicator */}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                      <Clock className="w-4 h-4 text-[#002186]" />
                    </div>
                  </div>
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center space-x-4 mb-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 line-clamp-2 group-hover:text-[#002186] transition-colors leading-tight">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 flex-1 line-clamp-3 leading-relaxed group-hover:text-gray-700 transition-colors">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto">
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="group/link inline-flex items-center text-[#002186] font-semibold hover:text-[#FFD302] transition-colors"
                    >
                      Read Article
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                    
                    <div className="flex items-center space-x-2 text-xs text-gray-500">
                      <Users className="w-4 h-4" />
                      <span>{Math.floor(Math.random() * 5000) + 1000}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          {/* Load more section */}
          <div className="text-center mt-16">
            <div className="bg-white rounded-2xl p-8 max-w-2xl mx-auto shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Want More Insights?</h3>
              <p className="text-gray-600 mb-6">Explore our complete archive of digital marketing articles and resources.</p>
              <button className="inline-flex items-center px-8 py-4 bg-[#002186] text-white font-semibold rounded-xl hover:bg-[#001760] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl">
                Load More Articles
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding bg-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-[#FFD302]/5 to-[#002186]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-tl from-[#002186]/5 to-[#FFD302]/5 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-12 shadow-lg border border-gray-100 relative overflow-hidden">
            {/* Decorative corner */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#FFD302]/20 to-transparent rounded-bl-3xl"></div>
            
            <div className="relative">
              <div className="inline-flex items-center px-4 py-2 bg-[#FFD302]/10 border border-[#FFD302]/20 rounded-full text-sm font-medium text-[#002186] mb-6">
                <Sparkles className="w-4 h-4 mr-2" />
                Join Our Community
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Never Miss an <span className="bg-gradient-to-r from-[#002186] to-[#FFD302] bg-clip-text text-transparent">Insight</span>
              </h2>
              
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                Get exclusive access to our latest strategies, insider tips, and industry insights 
                delivered directly to your inbox every week.
              </p>
              
              <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto mb-8">
                <div className="relative flex-1">
                  <input
                    type="email"
                    placeholder="Enter your professional email"
                    className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#002186] focus:border-transparent transition-all duration-300 bg-white shadow-sm"
                    required
                  />
                  <User className="absolute right-4 top-4 w-5 h-5 text-gray-400" />
                </div>
                <button
                  type="submit"
                  className="group px-8 py-4 bg-[#002186] text-white font-semibold rounded-xl hover:bg-[#001760] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl flex items-center justify-center"
                >
                  Subscribe Now
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
              
              {/* Benefits */}
              <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto mb-8">
                {[
                  { icon: "📈", text: "Weekly insights" },
                  { icon: "🎯", text: "Actionable strategies" },
                  { icon: "🔒", text: "No spam, ever" }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                    <span className="text-lg">{benefit.icon}</span>
                    <span>{benefit.text}</span>
                  </div>
                ))}
              </div>
              
              <p className="text-sm text-gray-500">
                Join 10,000+ digital marketers who trust our insights. 
                <span className="font-medium">Unsubscribe anytime.</span>
              </p>
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
              Ready to Take Action?
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Turn Insights Into
              <br />
              <span className="bg-gradient-to-r from-[#FFD302] to-yellow-300 bg-clip-text text-transparent">Real Results</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed">
              Don't just read about success—achieve it. Let our expert team help you implement 
              these proven strategies to accelerate your business growth.
            </p>
          </div>

          {/* Value propositions */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: "🎯",
                title: "Custom Strategy",
                description: "Tailored implementation of the strategies that fit your business"
              },
              {
                icon: "⚡",
                title: "Expert Execution",
                description: "Professional team that knows how to execute these insights effectively"
              },
              {
                icon: "📈",
                title: "Proven Results",
                description: "Track record of turning knowledge into measurable business growth"
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
                  Get Free Strategy Session
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              
              <Link 
                href="/services"
                className="group inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-[#002186] transition-all duration-300 text-lg"
              >
                Explore Our Services
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex justify-center items-center space-x-8 text-sm text-gray-300">
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-2" />
                500+ Success Stories
              </div>
              <div className="flex items-center">
                <Award className="w-4 h-4 mr-2" />
                98% Client Satisfaction
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