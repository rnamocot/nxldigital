import Link from "next/link";
import Image from "next/image";
import { metaTagsData } from "../lib/metaTagsData";

export const metadata = {
  title: metaTagsData.blog.title,
  description: metaTagsData.blog.description,
  keywords: metaTagsData.blog.keywords,
  openGraph: metaTagsData.blog.openGraph,
};

export default function BlogPage() {
  const blogPosts = [
    {
      title: "10 Essential PPC Strategies to Maximize Your ROI in 2024",
      excerpt: "Discover the latest pay-per-click advertising strategies that successful businesses are using to increase their return on investment and drive qualified leads.",
      category: "PPC",
      readTime: "5 min read",
      date: "December 15, 2024",
      image: "/images/placeholder.png",
      slug: "ppc-strategies-maximize-roi-2024"
    },
    {
      title: "The Complete Guide to Local SEO for Small Businesses",
      excerpt: "Learn how to dominate local search results and attract more customers to your business with proven local SEO techniques and best practices.",
      category: "SEO",
      readTime: "8 min read", 
      date: "December 12, 2024",
      image: "/images/placeholder.png",
      slug: "complete-guide-local-seo-small-businesses"
    },
    {
      title: "Social Media Marketing Trends That Will Shape 2024",
      excerpt: "Stay ahead of the curve with the latest social media trends, platform updates, and marketing strategies that will define successful campaigns.",
      category: "Social Media",
      readTime: "6 min read",
      date: "December 10, 2024", 
      image: "/images/placeholder.png",
      slug: "social-media-marketing-trends-2024"
    },
    {
      title: "How to Create High-Converting Landing Pages",
      excerpt: "Master the art of landing page optimization with proven design principles, copywriting techniques, and conversion rate optimization strategies.",
      category: "Web Development",
      readTime: "7 min read",
      date: "December 8, 2024",
      image: "/images/placeholder.png", 
      slug: "create-high-converting-landing-pages"
    },
    {
      title: "Brand Storytelling: How to Connect with Your Audience",
      excerpt: "Discover the power of authentic brand storytelling and learn how to create compelling narratives that resonate with your target audience.",
      category: "Brand Marketing",
      readTime: "5 min read",
      date: "December 5, 2024",
      image: "/images/placeholder.png",
      slug: "brand-storytelling-connect-audience"
    },
    {
      title: "Google Analytics 4: Essential Metrics Every Business Should Track",
      excerpt: "Navigate the new Google Analytics 4 interface and learn which metrics matter most for measuring your digital marketing success.",
      category: "Analytics",
      readTime: "6 min read",
      date: "December 3, 2024",
      image: "/images/placeholder.png",
      slug: "google-analytics-4-essential-metrics"
    },
    {
      title: "Email Marketing Automation: From Setup to Success",
      excerpt: "Build effective email marketing funnels that nurture leads and convert subscribers into loyal customers with automated sequences.",
      category: "Email Marketing",
      readTime: "9 min read",
      date: "November 30, 2024",
      image: "/images/placeholder.png",
      slug: "email-marketing-automation-setup-success"
    },
    {
      title: "The Future of Digital Marketing: AI and Machine Learning",
      excerpt: "Explore how artificial intelligence and machine learning are transforming digital marketing and what it means for your business strategy.",
      category: "Digital Marketing",
      readTime: "7 min read", 
      date: "November 28, 2024",
      image: "/images/placeholder.png",
      slug: "future-digital-marketing-ai-machine-learning"
    }
  ];

  const categories = ["All", "PPC", "SEO", "Social Media", "Web Development", "Brand Marketing", "Analytics", "Email Marketing", "Digital Marketing"];

  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-[#002186] to-[#003ba3] text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Digital Marketing <span className="text-[#FFD302]">Blog</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Expert insights, proven strategies, and the latest trends in digital marketing to help grow your business.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Article</h2>
          </div>
          
          <div className="card p-0 overflow-hidden max-w-4xl mx-auto">
            <div className="md:flex">
              <div className="md:w-1/2">
                <Image
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  width={600}
                  height={400}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="px-3 py-1 bg-[#FFD302] text-[#002186] text-sm font-semibold rounded-full">
                    {blogPosts[0].category}
                  </span>
                  <span className="text-gray-500 text-sm">{blogPosts[0].date}</span>
                  <span className="text-gray-500 text-sm">{blogPosts[0].readTime}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {blogPosts[0].title}
                </h3>
                <p className="text-gray-600 mb-6 text-lg">
                  {blogPosts[0].excerpt}
                </p>
                <Link 
                  href={`/blog/${blogPosts[0].slug}`}
                  className="inline-flex items-center text-[#002186] font-semibold hover:text-[#FFD302] transition-colors"
                >
                  Read Full Article
                  <span className="ml-2">�</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  index === 0
                    ? "bg-[#002186] text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <div key={index} className="card p-0 overflow-hidden h-full flex flex-col">
                <div className="relative">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-[#FFD302] text-[#002186] text-sm font-semibold rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center space-x-4 mb-3 text-sm text-gray-500">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 flex-1 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-[#002186] font-semibold hover:text-[#FFD302] transition-colors mt-auto"
                  >
                    Read More
                    <span className="ml-2">�</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="card p-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Stay Updated with <span className="text-gradient">Digital Marketing Insights</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Get the latest strategies, tips, and industry insights delivered directly to your inbox.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002186] focus:border-transparent"
                required
              />
              <button
                type="submit"
                className="btn-primary px-8"
              >
                Subscribe
              </button>
            </form>
            
            <p className="text-sm text-gray-500 mt-4">
              No spam, ever. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding gradient-primary text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Implement These Strategies?</h2>
          <p className="text-xl mb-8 text-gray-200">
            Let our expert team help you apply these insights to grow your business with proven digital marketing strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/get-quote" className="btn-accent text-lg">
              Get Free Consultation
            </Link>
            <Link href="/services" className="btn-primary text-lg border-2 border-white bg-transparent hover:bg-white hover:text-[#002186]">
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}