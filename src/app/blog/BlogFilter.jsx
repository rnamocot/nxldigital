'use client';

import { useState } from 'react';
import Link from "next/link";
import { Calendar, Clock, Users, ArrowRight, Filter, Sparkles, BookOpen } from "lucide-react";

export default function BlogFilter({ blogPosts, categories }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <>
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
                onClick={() => setSelectedCategory(category)}
                className={`group px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category
                    ? "bg-[#002186] text-white shadow-lg hover:shadow-2xl"
                    : "bg-white text-gray-700 hover:text-[#002186] hover:bg-gray-50 border border-gray-200 hover:border-[#002186]/30 shadow-sm hover:shadow-lg"
                }`}
              >
                <div className="flex items-center">
                  {category}
                  {selectedCategory === category && <Sparkles className="w-4 h-4 ml-2 group-hover:animate-spin" />}
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
              {selectedCategory === "All" ? "Latest" : selectedCategory} <span className="bg-gradient-to-r from-[#002186] to-[#FFD302] bg-clip-text text-transparent">Insights</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {selectedCategory === "All" 
                ? "Stay ahead of the curve with our latest articles covering cutting-edge strategies, trends, and best practices."
                : `Discover expert insights and proven strategies in ${selectedCategory} to accelerate your business growth.`
              }
            </p>
            {selectedCategory !== "All" && (
              <div className="mt-4">
                <span className="text-sm text-gray-500">
                  Showing {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} in {selectedCategory}
                </span>
              </div>
            )}
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
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
          
          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <div className="w-16 h-16 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                <BookOpen className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
              <p className="text-gray-600 mb-6">We don't have any articles in this category yet, but we're working on it!</p>
              <button 
                onClick={() => setSelectedCategory("All")}
                className="inline-flex items-center px-6 py-3 bg-[#002186] text-white font-semibold rounded-xl hover:bg-[#001760] transition-all duration-300"
              >
                View All Articles
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          )}
          
          {/* Load more section - only show when showing all articles */}
          {selectedCategory === "All" && (
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
          )}
        </div>
      </section>
    </>
  );
}