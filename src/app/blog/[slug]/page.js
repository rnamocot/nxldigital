import Link from "next/link";
import { Calendar, Clock, User, ArrowRight, ArrowLeft, Share2, BookOpen, TrendingUp, Target, CheckCircle, Sparkles, Award, Zap } from "lucide-react";
import { notFound } from 'next/navigation';

// Blog posts data - in a real app this would come from a CMS or API
const blogPosts = [
  {
    title: "10 Game-Changing PPC Strategies to Dominate 2025",
    excerpt: "Discover the cutting-edge pay-per-click advertising strategies that forward-thinking businesses are using to maximize ROI and drive explosive growth in 2025.",
    category: "PPC",
    readTime: "5 min read",
    date: "January 15, 2025",
    author: "Sarah Chen",
    authorTitle: "PPC Specialist",
    image: "/images/placeholder.png",
    slug: "ppc-strategies-dominate-2025",
    content: `
      <h2>The PPC Landscape in 2025: What's Changed</h2>
      <p>Pay-per-click advertising has evolved dramatically in 2025. With AI-powered bidding strategies, advanced audience targeting, and new privacy-focused tracking methods, businesses need to adapt their approach to stay competitive.</p>
      
      <h3>1. AI-Powered Smart Bidding Revolution</h3>
      <p>Google's enhanced Smart Bidding algorithms now incorporate real-time market conditions, competitor analysis, and customer lifetime value predictions. This means your campaigns can automatically adjust bids based on hundreds of signals simultaneously.</p>
      
      <h3>2. Privacy-First Attribution Modeling</h3>
      <p>With the complete phase-out of third-party cookies, successful PPC campaigns now rely on first-party data and server-side tracking. This shift requires a fundamental change in how we measure and optimize campaign performance.</p>
      
      <h3>3. Video-First Ad Strategies</h3>
      <p>Video content now drives 3x more engagement than static ads. The most successful campaigns in 2025 combine short-form video content with compelling calls-to-action that drive immediate action.</p>
      
      <h3>4. Micro-Moment Targeting</h3>
      <p>Modern consumers make purchase decisions in seconds. Your PPC campaigns need to capture these micro-moments with highly relevant, instantly gratifying ad experiences.</p>
      
      <h3>5. Cross-Platform Campaign Integration</h3>
      <p>The most successful PPC strategies now seamlessly integrate across Google, Microsoft, Meta, TikTok, and emerging platforms. This omnichannel approach increases reach while maintaining consistent messaging.</p>
      
      <h2>Implementation Strategy</h2>
      <p>To implement these strategies effectively, start with a comprehensive audit of your current campaigns. Focus on:</p>
      <ul>
        <li>Upgrading to Smart Bidding strategies</li>
        <li>Implementing enhanced conversion tracking</li>
        <li>Creating video ad content</li>
        <li>Expanding to new platforms</li>
        <li>Optimizing for mobile-first experiences</li>
      </ul>
      
      <h2>Measuring Success</h2>
      <p>Success in 2025 requires looking beyond traditional metrics. Focus on customer lifetime value, cross-channel attribution, and engagement quality rather than just clicks and impressions.</p>
    `
  },
  {
    title: "Local SEO Mastery: Your 2025 Guide to Market Dominance",
    excerpt: "Learn the latest local SEO strategies and algorithm updates that will help your business dominate local search results and attract more customers in 2025.",
    category: "SEO",
    readTime: "8 min read",
    date: "January 12, 2025",
    author: "Marcus Rodriguez",
    authorTitle: "SEO Director",
    image: "/images/placeholder.png",
    slug: "local-seo-mastery-2025-guide",
    content: `
      <h2>Local SEO in 2025: The New Competitive Landscape</h2>
      <p>Local search has become more competitive than ever. With Google's latest algorithm updates prioritizing authentic local signals and user experience, businesses need sophisticated strategies to rank in the coveted local pack.</p>
      
      <h3>Google Business Profile Optimization 2.0</h3>
      <p>Your Google Business Profile is now more than a listing—it's a comprehensive business hub. The latest features include real-time inventory updates, appointment booking, and AI-powered customer service integration.</p>
      
      <h3>Hyperlocal Content Strategies</h3>
      <p>Generic location pages no longer work. Successful local SEO requires neighborhood-specific content that addresses local events, landmarks, and community interests. Think beyond "City + Service" to create truly valuable local content.</p>
      
      <h3>Voice Search Optimization</h3>
      <p>With 50% of local searches now happening via voice, optimizing for conversational queries is crucial. Focus on natural language patterns and question-based keywords that match how people actually speak.</p>
      
      <h3>Local Link Building Evolution</h3>
      <p>Quality trumps quantity more than ever. A single high-authority local link from a respected community organization outperforms dozens of low-quality directory submissions.</p>
      
      <h3>Review Management at Scale</h3>
      <p>Managing reviews across multiple platforms requires automation tools that can monitor sentiment, respond appropriately, and identify opportunities for service improvements.</p>
      
      <h2>Technical Local SEO</h2>
      <p>The technical foundation of local SEO includes:</p>
      <ul>
        <li>Structured data implementation for rich snippets</li>
        <li>Mobile-first indexing optimization</li>
        <li>Local schema markup</li>
        <li>NAP (Name, Address, Phone) consistency across all platforms</li>
        <li>Page speed optimization for mobile users</li>
      </ul>
      
      <h2>Measuring Local SEO Success</h2>
      <p>Track local pack rankings, Google Business Profile insights, foot traffic data, and local keyword rankings to measure your progress and ROI.</p>
    `
  },
  {
    title: "Social Media Revolution: 2025 Trends That Will Transform Marketing",
    excerpt: "Stay ahead with the revolutionary social media trends, platform innovations, and marketing strategies that will define successful campaigns in 2025.",
    category: "Social Media",
    readTime: "6 min read",
    date: "January 10, 2025",
    author: "Emma Thompson",
    authorTitle: "Social Media Strategist",
    image: "/images/placeholder.png",
    slug: "social-media-revolution-2025-trends",
    content: `
      <h2>The Social Media Transformation of 2025</h2>
      <p>Social media marketing has undergone its biggest transformation yet. From AI-generated content to immersive AR experiences, the platforms and strategies that worked last year are already obsolete.</p>
      
      <h3>AI-Powered Content Creation</h3>
      <p>The most successful brands now use AI tools not just for scheduling, but for creating personalized content at scale. AI can generate platform-specific content variations that resonate with different audience segments.</p>
      
      <h3>Interactive Shopping Experiences</h3>
      <p>Social commerce has evolved beyond simple product tags. Brands are creating immersive shopping experiences with AR try-ons, live shopping events, and AI-powered personal shopping assistants within social platforms.</p>
      
      <h3>Community-Driven Marketing</h3>
      <p>The brands winning in 2025 focus less on follower count and more on community engagement. Private groups, exclusive content, and member-only experiences drive higher conversion rates than traditional posts.</p>
      
      <h3>Micro-Video Dominance</h3>
      <p>Short-form video content now represents 80% of social media engagement. The key is creating thumb-stopping content that delivers value within the first 3 seconds.</p>
      
      <h3>Platform-Specific Strategies</h3>
      <p>Each platform now requires distinct content strategies:</p>
      <ul>
        <li><strong>TikTok:</strong> Authentic, trending content with strong hooks</li>
        <li><strong>Instagram:</strong> High-quality visuals with story-driven content</li>
        <li><strong>LinkedIn:</strong> Professional insights and thought leadership</li>
        <li><strong>YouTube Shorts:</strong> Educational content in bite-sized formats</li>
        <li><strong>Twitter/X:</strong> Real-time engagement and community building</li>
      </ul>
      
      <h2>Content Planning for 2025</h2>
      <p>Successful social media marketing requires a strategic approach to content creation, community management, and performance optimization. Focus on creating valuable, shareable content that builds genuine connections with your audience.</p>
      
      <h2>Analytics and ROI Measurement</h2>
      <p>Move beyond vanity metrics to track engagement quality, community growth, conversion rates, and customer lifetime value from social channels.</p>
    `
  },
  {
    title: "Landing Page Optimization: The 2025 Conversion Playbook",
    excerpt: "Master advanced landing page optimization with the latest design principles, AI-powered personalization, and conversion strategies that work in 2025.",
    category: "Web Development",
    readTime: "7 min read",
    date: "January 8, 2025",
    author: "David Kim",
    authorTitle: "UX Director",
    image: "/images/placeholder.png",
    slug: "landing-page-optimization-2025-playbook",
    content: `
      <h2>Landing Page Optimization in the Age of AI</h2>
      <p>Landing page optimization has become a sophisticated discipline combining psychology, data science, and emerging technologies. The best-converting pages in 2025 adapt in real-time to visitor behavior and preferences.</p>
      
      <h3>AI-Powered Personalization</h3>
      <p>Modern landing pages use machine learning to personalize headlines, images, and calls-to-action based on visitor demographics, behavior, and traffic source. This dynamic personalization can increase conversions by up to 300%.</p>
      
      <h3>Micro-Interaction Design</h3>
      <p>Small animations and interactions guide user attention and create engaging experiences. From progress indicators to hover effects, these details significantly impact user engagement and conversion rates.</p>
      
      <h3>Mobile-First Conversion Design</h3>
      <p>With 70% of landing page traffic now mobile, successful pages are designed primarily for mobile experiences. This includes thumb-friendly navigation, fast loading times, and simplified forms.</p>
      
      <h3>Advanced A/B Testing Strategies</h3>
      <p>Modern testing goes beyond simple headline changes. The most effective tests examine:</p>
      <ul>
        <li>Value proposition positioning</li>
        <li>Social proof placement and types</li>
        <li>Form field optimization</li>
        <li>Visual hierarchy and scanning patterns</li>
        <li>Trust signal effectiveness</li>
      </ul>
      
      <h3>Performance Optimization</h3>
      <p>Page speed directly impacts conversion rates. Every second of load time can reduce conversions by 7%. Optimization techniques include:</p>
      <ul>
        <li>Image optimization and lazy loading</li>
        <li>Critical CSS inlining</li>
        <li>JavaScript optimization</li>
        <li>CDN implementation</li>
        <li>Server response optimization</li>
      </ul>
      
      <h2>Conversion Psychology Principles</h2>
      <p>Understanding visitor psychology is crucial for optimization. Apply principles of urgency, social proof, authority, and reciprocity to guide visitors toward conversion.</p>
      
      <h2>Analytics and Continuous Improvement</h2>
      <p>Use heatmaps, scroll tracking, form analytics, and user session recordings to understand visitor behavior and identify optimization opportunities.</p>
    `
  },
  {
    title: "Brand Storytelling in the AI Era: 2025 Connection Strategies",
    excerpt: "Discover how to create authentic brand stories that cut through the noise in 2025, building deeper connections with your audience in an AI-driven world.",
    category: "Brand Marketing",
    readTime: "5 min read",
    date: "January 5, 2025",
    author: "Isabella Martinez",
    authorTitle: "Brand Strategist",
    image: "/images/placeholder.png",
    slug: "brand-storytelling-ai-era-2025",
    content: `
      <h2>Authentic Storytelling in an AI-Generated World</h2>
      <p>As AI-generated content floods the internet, authentic human stories have become more valuable than ever. Brands that master genuine storytelling create deeper emotional connections and stronger customer loyalty.</p>
      
      <h3>The Human Element</h3>
      <p>While AI can generate content, it cannot replicate authentic human experiences. The most compelling brand stories in 2025 showcase real people, genuine challenges, and authentic solutions that resonate on an emotional level.</p>
      
      <h3>Multi-Platform Narrative Consistency</h3>
      <p>Your brand story must remain consistent across all touchpoints while adapting to each platform's unique format and audience expectations. This requires a clear brand narrative framework that guides all content creation.</p>
      
      <h3>Customer-Centric Storytelling</h3>
      <p>The best brand stories position customers as the hero, not the brand. Your brand serves as the guide that helps customers overcome challenges and achieve their goals.</p>
      
      <h3>Visual Storytelling Techniques</h3>
      <p>Modern storytelling combines text, images, video, and interactive elements to create immersive experiences. Key techniques include:</p>
      <ul>
        <li>Behind-the-scenes content that builds authenticity</li>
        <li>Customer success stories with emotional depth</li>
        <li>Founder and team stories that humanize the brand</li>
        <li>Values-driven narratives that attract aligned customers</li>
        <li>Interactive content that engages audiences</li>
      </ul>
      
      <h3>Emotional Connection Metrics</h3>
      <p>Measuring story effectiveness requires tracking emotional engagement metrics like time spent with content, social sharing rates, and brand sentiment analysis.</p>
      
      <h2>Building Your Brand Narrative</h2>
      <p>Start with your core values, mission, and unique perspective. Develop a brand voice that reflects your personality and resonates with your target audience.</p>
      
      <h2>Content Implementation Strategy</h2>
      <p>Create a content calendar that weaves your brand story through various formats and platforms, ensuring consistent messaging while maintaining platform-appropriate delivery.</p>
    `
  },
  {
    title: "GA4 Advanced Analytics: 2025 Metrics That Drive Growth",
    excerpt: "Unlock the full potential of Google Analytics 4 with advanced tracking strategies and key metrics that successful businesses monitor in 2025.",
    category: "Analytics",
    readTime: "6 min read",
    date: "January 3, 2025",
    author: "Alex Johnson",
    authorTitle: "Analytics Consultant",
    image: "/images/placeholder.png",
    slug: "ga4-advanced-analytics-2025-metrics",
    content: `
      <h2>GA4 Mastery: Beyond Basic Metrics</h2>
      <p>Google Analytics 4 has matured into a powerful platform for understanding customer behavior. The businesses thriving in 2025 go far beyond basic metrics to uncover actionable insights that drive growth.</p>
      
      <h3>Event-Based Analytics Strategy</h3>
      <p>GA4's event-based model allows for sophisticated tracking of user interactions. Smart businesses track custom events that align with their specific business objectives and customer journey stages.</p>
      
      <h3>Predictive Metrics</h3>
      <p>GA4's machine learning capabilities now provide predictive insights including:</p>
      <ul>
        <li>Purchase probability scores</li>
        <li>Churn probability predictions</li>
        <li>Revenue predictions</li>
        <li>Customer lifetime value estimates</li>
      </ul>
      
      <h3>Advanced Audience Building</h3>
      <p>Create sophisticated audience segments using behavioral data, predictive metrics, and custom parameters. These audiences can be exported to Google Ads and other platforms for targeted campaigns.</p>
      
      <h3>Cross-Platform Attribution</h3>
      <p>Understanding the complete customer journey across devices and channels is crucial. GA4's enhanced attribution models provide insights into how different touchpoints contribute to conversions.</p>
      
      <h3>Custom Reporting Dashboards</h3>
      <p>Build dashboards that focus on your specific business metrics rather than generic reports. Include KPIs like:</p>
      <ul>
        <li>Customer acquisition cost by channel</li>
        <li>Engagement rate by content type</li>
        <li>Conversion funnel performance</li>
        <li>Revenue attribution by traffic source</li>
      </ul>
      
      <h2>Data Privacy Compliance</h2>
      <p>With increasing privacy regulations, ensure your GA4 setup complies with GDPR, CCPA, and other data protection laws while still providing valuable insights.</p>
      
      <h2>Integration Strategies</h2>
      <p>Connect GA4 with your CRM, email marketing platform, and other business tools to create a comprehensive view of customer behavior and business performance.</p>
    `
  },
  {
    title: "Email Marketing Automation 2.0: AI-Powered Success in 2025",
    excerpt: "Build next-generation email marketing funnels with AI automation, predictive analytics, and personalization strategies that convert in 2025.",
    category: "Email Marketing",
    readTime: "9 min read",
    date: "December 30, 2024",
    author: "Rachel Foster",
    authorTitle: "Email Marketing Director",
    image: "/images/placeholder.png",
    slug: "email-marketing-automation-ai-powered-2025",
    content: `
      <h2>The Evolution of Email Marketing Automation</h2>
      <p>Email marketing automation has transformed from simple drip campaigns to sophisticated, AI-driven systems that predict customer behavior and deliver personalized experiences at scale.</p>
      
      <h3>AI-Powered Send Time Optimization</h3>
      <p>Modern email platforms use machine learning to determine the optimal send time for each individual subscriber based on their historical engagement patterns, timezone, and behavior data.</p>
      
      <h3>Dynamic Content Personalization</h3>
      <p>Go beyond name personalization to create emails that adapt content, products, and messaging based on:</p>
      <ul>
        <li>Purchase history and preferences</li>
        <li>Browsing behavior and interests</li>
        <li>Demographic and geographic data</li>
        <li>Engagement history and preferences</li>
        <li>Lifecycle stage and customer value</li>
      </ul>
      
      <h3>Behavioral Trigger Campaigns</h3>
      <p>Set up sophisticated triggers that respond to specific customer behaviors across your website, app, and other touchpoints. Examples include:</p>
      <ul>
        <li>Abandoned cart recovery sequences</li>
        <li>Post-purchase onboarding flows</li>
        <li>Re-engagement campaigns for inactive subscribers</li>
        <li>Cross-sell and upsell opportunities</li>
      </ul>
      
      <h3>Predictive Analytics Integration</h3>
      <p>Use predictive models to identify customers likely to churn, make repeat purchases, or upgrade to premium services. Tailor your email campaigns accordingly.</p>
      
      <h3>Multi-Channel Automation</h3>
      <p>Integrate email with SMS, push notifications, and social media retargeting to create cohesive customer experiences across all touchpoints.</p>
      
      <h2>Advanced Segmentation Strategies</h2>
      <p>Create micro-segments based on detailed behavioral and preference data to deliver highly relevant content that drives engagement and conversions.</p>
      
      <h2>Performance Optimization</h2>
      <p>Focus on advanced metrics like customer lifetime value, engagement quality scores, and revenue attribution to optimize your campaigns for business growth.</p>
    `
  },
  {
    title: "Digital Marketing Evolution: AI & Beyond in 2025",
    excerpt: "Explore how artificial intelligence, machine learning, and emerging technologies are reshaping digital marketing strategies for unprecedented growth in 2025.",
    category: "Digital Marketing",
    readTime: "7 min read",
    date: "December 28, 2024",
    author: "Thomas Wilson",
    authorTitle: "Digital Strategy Lead",
    image: "/images/placeholder.png",
    slug: "digital-marketing-evolution-ai-beyond-2025",
    content: `
      <h2>The AI-Powered Digital Marketing Revolution</h2>
      <p>Digital marketing in 2025 is defined by intelligent automation, predictive analytics, and hyper-personalized customer experiences. The brands that embrace these technologies gain significant competitive advantages.</p>
      
      <h3>Generative AI for Content Creation</h3>
      <p>AI tools now help marketers create high-quality content at scale, from blog posts and social media content to personalized email campaigns and ad copy. However, human creativity and strategy remain essential for authentic brand voice.</p>
      
      <h3>Predictive Customer Journey Mapping</h3>
      <p>Advanced analytics platforms can predict customer behavior and recommend the next best action for each individual customer. This enables proactive marketing strategies rather than reactive responses.</p>
      
      <h3>Voice and Visual Search Optimization</h3>
      <p>With the rise of voice assistants and visual search technologies, marketers must optimize content for conversational queries and image-based searches.</p>
      
      <h3>Privacy-First Marketing Strategies</h3>
      <p>The elimination of third-party cookies has forced marketers to focus on first-party data collection and relationship building. Successful strategies include:</p>
      <ul>
        <li>Value exchange programs for data collection</li>
        <li>Progressive profiling techniques</li>
        <li>Zero-party data collection through surveys and preferences</li>
        <li>Community building for direct customer relationships</li>
      </ul>
      
      <h3>Omnichannel Experience Orchestration</h3>
      <p>Modern customers expect seamless experiences across all touchpoints. Successful brands create unified customer profiles and deliver consistent messaging across channels.</p>
      
      <h3>Real-Time Personalization</h3>
      <p>Websites and apps now adapt in real-time based on visitor behavior, preferences, and context. This includes dynamic content, product recommendations, and personalized user interfaces.</p>
      
      <h2>Emerging Technologies</h2>
      <p>Stay ahead by experimenting with AR/VR marketing, blockchain for transparency, and IoT integration for enhanced customer experiences.</p>
      
      <h2>Skills for the Future</h2>
      <p>Digital marketers must develop skills in data analysis, AI tool utilization, privacy compliance, and customer experience design to remain competitive.</p>
    `
  }
];

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const post = blogPosts.find(post => post.slug === params.slug);
  
  if (!post) {
    return {
      title: 'Blog Post Not Found | NXL Digital',
      description: 'The requested blog post could not be found.'
    };
  }

  return {
    title: `${post.title} | NXL Digital Blog`,
    description: post.excerpt,
    keywords: `digital marketing, ${post.category.toLowerCase()}, marketing strategy, business growth`,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    }
  };
}

export default function BlogPost({ params }) {
  const post = blogPosts.find(post => post.slug === params.slug);
  
  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-1/4 w-32 h-32 border border-[#FFD302]/30 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-1/4 w-24 h-24 border border-[#002186]/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/6 w-4 h-4 bg-[#FFD302]/50 rounded-full animate-ping"></div>
          <div className="absolute top-1/3 right-1/6 w-6 h-6 bg-[#002186]/20 rounded-full animate-bounce"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-[#002186] transition-colors">Home</Link>
            <ArrowRight className="w-4 h-4" />
            <Link href="/blog" className="hover:text-[#002186] transition-colors">Blog</Link>
            <ArrowRight className="w-4 h-4" />
            <span className="text-gray-700">{post.title}</span>
          </nav>

          {/* Category and Meta Info */}
          <div className="flex items-center space-x-4 mb-6">
            <span className="px-4 py-2 bg-[#FFD302]/20 text-[#002186] text-sm font-semibold rounded-full border border-[#FFD302]/30">
              {post.category}
            </span>
            <div className="flex items-center text-gray-500 text-sm space-x-4">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                {post.date}
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                {post.readTime}
              </div>
              <div className="flex items-center">
                <User className="w-4 h-4 mr-1" />
                {post.author}
              </div>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 leading-tight">
            {post.title}
          </h1>

          {/* Excerpt */}
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            {post.excerpt}
          </p>

          {/* Author Info */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#002186] to-[#001760] rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">{post.author}</div>
                <div className="text-gray-600 text-sm">{post.authorTitle}</div>
              </div>
            </div>

            <button className="flex items-center space-x-2 text-gray-500 hover:text-[#002186] transition-colors">
              <Share2 className="w-5 h-5" />
              <span className="text-sm">Share</span>
            </button>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-6 py-16">
        <div className="prose prose-lg max-w-none">
          <div 
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
            style={{
              lineHeight: '1.8',
              fontSize: '18px',
            }}
          />
        </div>

        {/* Article Footer */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <Link 
              href="/blog"
              className="group inline-flex items-center text-[#002186] font-semibold hover:text-[#FFD302] transition-colors"
            >
              <ArrowLeft className="mr-2 w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              Back to Blog
            </Link>

            <div className="flex items-center space-x-4">
              <span className="text-gray-500 text-sm">Share this article:</span>
              <div className="flex items-center space-x-2">
                <button className="w-10 h-10 bg-gray-100 hover:bg-[#002186] hover:text-white rounded-lg flex items-center justify-center transition-all duration-300">
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-[#FFD302]/10 border border-[#FFD302]/20 rounded-full text-sm font-medium text-[#002186] mb-6">
                Related Articles
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Continue <span className="bg-gradient-to-r from-[#002186] to-[#FFD302] bg-clip-text text-transparent">Learning</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore more insights in {post.category} to accelerate your digital marketing success.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost, index) => (
                <article key={index} className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
                  <div className="relative overflow-hidden">
                    <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative group-hover:scale-105 transition-transform duration-500">
                      <div className="w-16 h-16 bg-white/80 rounded-2xl flex items-center justify-center shadow-lg">
                        <BookOpen className="w-8 h-8 text-[#002186]" />
                      </div>
                      
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-[#FFD302]/90 backdrop-blur-sm text-[#002186] text-xs font-bold rounded-full border border-[#FFD302]">
                          {relatedPost.category}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center space-x-4 mb-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{relatedPost.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{relatedPost.readTime}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-4 line-clamp-2 group-hover:text-[#002186] transition-colors leading-tight">
                      {relatedPost.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed group-hover:text-gray-700 transition-colors">
                      {relatedPost.excerpt}
                    </p>
                    
                    <Link 
                      href={`/blog/${relatedPost.slug}`}
                      className="group/link inline-flex items-center text-[#002186] font-semibold hover:text-[#FFD302] transition-colors"
                    >
                      Read Article
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

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
              Ready to Implement These Strategies?
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Let's Turn Knowledge Into
              <br />
              <span className="bg-gradient-to-r from-[#FFD302] to-yellow-300 bg-clip-text text-transparent">Real Results</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed">
              Don't just read about success—achieve it. Our expert team can help you implement 
              these proven strategies to accelerate your business growth.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
              <Link 
                href="/get-quote"
                className="group inline-flex items-center justify-center px-8 py-4 bg-[#FFD302] text-[#002186] font-bold rounded-xl hover:bg-yellow-400 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl text-lg"
              >
                Get Free Strategy Session
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
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
                <CheckCircle className="w-4 h-4 mr-2" />
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