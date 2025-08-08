"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, Sparkles } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  {
    href: "/services",
    label: "Services",
    children: [
      { href: "/services/ppc", label: "PPC" },
      { href: "/services/seo", label: "SEO" },
      { href: "/services/social-media", label: "Social Media Management" },
      { href: "/services/web-development", label: "Web Development" },
      { href: "/services/brand-marketing", label: "Brand Marketing" },
    ],
  },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];


  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-100' 
        : 'bg-white/80 backdrop-blur-sm border-b border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo + Text */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="relative">
            <Image
              src="/logo.png"
              alt="NXL Digital Logo"
              width={120}
              height={36}
              priority
              className="transition-all duration-300 group-hover:scale-105"
            />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#FFD302] rounded-full animate-pulse opacity-75"></div>
          </div>
          <div className="hidden sm:block">
            <div className="flex items-center text-sm font-semibold text-gray-700 group-hover:text-[#002186] transition-colors">
              <Sparkles className="w-4 h-4 mr-1 text-[#FFD302]" />
              Digital
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
            {navLinks.map((link) =>
  link.children ? (
    <div 
      key={link.href} 
      className="relative group"
      onMouseEnter={() => setActiveDropdown(link.href)}
      onMouseLeave={() => setActiveDropdown(null)}
    >
      <Link
        href={link.href}
        className={`flex items-center space-x-1 transition-all duration-300 px-3 py-2 rounded-lg ${
          pathname === link.href
            ? "text-[#002186] font-semibold bg-[#FFD302]/10"
            : "text-gray-700 hover:text-[#002186] hover:bg-gray-50"
        }`}
      >
        <span>{link.label}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${
          activeDropdown === link.href ? 'rotate-180' : ''
        }`} />
      </Link>
      <div className={`absolute top-full left-0 mt-2 transition-all duration-300 ${
        activeDropdown === link.href ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-2 invisible'
      } bg-white shadow-xl rounded-xl border border-gray-100 z-50`}>
        <div className="flex flex-col min-w-[220px] p-2">
          {link.children.map((sublink, index) => (
            <Link
              key={sublink.href}
              href={sublink.href}
              className={`px-4 py-3 text-sm rounded-lg transition-all duration-200 flex items-center space-x-3 ${
                pathname === sublink.href
                  ? "text-[#002186] font-semibold bg-[#FFD302]/10"
                  : "text-gray-700 hover:text-[#002186] hover:bg-gray-50"
              }`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="w-2 h-2 rounded-full bg-[#FFD302]"></div>
              <span>{sublink.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  ) : (
    <Link
      key={link.href}
      href={link.href}
      className={`transition-all duration-300 px-3 py-2 rounded-lg ${
        pathname === link.href
          ? "text-[#002186] font-semibold bg-[#FFD302]/10"
          : "text-gray-700 hover:text-[#002186] hover:bg-gray-50"
      }`}
    >
      {link.label}
    </Link>
  )
)}


          <Link
            href="/get-quote"
            className="ml-6 bg-gradient-to-r from-[#002186] to-[#001760] text-white font-semibold text-sm px-6 py-2.5 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 group relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center">
              <Sparkles className="w-4 h-4 mr-2 group-hover:animate-spin" />
              Get Quote
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#FFD302] to-[#ffdb33] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-700 hover:text-[#002186] focus:outline-none p-2 rounded-lg hover:bg-gray-50 transition-all duration-300"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="relative">
            {menuOpen ? (
              <X className="w-6 h-6 transition-transform duration-300 rotate-90" />
            ) : (
              <Menu className="w-6 h-6 transition-transform duration-300" />
            )}
          </div>
        </button>
      </div>

      {/* Mobile Nav */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${
        menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-white/95 backdrop-blur-sm border-t border-gray-100 px-6 py-4 space-y-2">
          {navLinks.map((link, index) => (
            <div key={link.href} className="animate-fadeIn" style={{ animationDelay: `${index * 100}ms` }}>
              <Link
                href={link.href}
                className={`flex items-center py-3 px-3 rounded-lg transition-all duration-300 ${
                  pathname === link.href
                    ? "text-[#002186] font-semibold bg-[#FFD302]/10"
                    : "text-gray-700 hover:text-[#002186] hover:bg-gray-50"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                <div className="w-2 h-2 rounded-full bg-[#FFD302] mr-3"></div>
                {link.label}
              </Link>
              {link.children && (
                <div className="ml-5 mt-2 space-y-1">
                  {link.children.map((sublink) => (
                    <Link
                      key={sublink.href}
                      href={sublink.href}
                      className={`block py-2 px-3 text-sm rounded-lg transition-all duration-300 ${
                        pathname === sublink.href
                          ? "text-[#002186] font-semibold bg-[#FFD302]/10"
                          : "text-gray-600 hover:text-[#002186] hover:bg-gray-50"
                      }`}
                      onClick={() => setMenuOpen(false)}
                    >
                      {sublink.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="pt-4 animate-fadeIn" style={{ animationDelay: `${navLinks.length * 100}ms` }}>
            <Link
              href="/get-quote"
              className="flex items-center justify-center w-full bg-gradient-to-r from-[#002186] to-[#001760] text-white font-semibold px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 group"
              onClick={() => setMenuOpen(false)}
            >
              <Sparkles className="w-4 h-4 mr-2 group-hover:animate-spin" />
              Get Quote
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
