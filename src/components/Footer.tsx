import React from "react";
import { Link } from "react-router-dom";
import { ArrowUp, ArrowRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Updated to connect to the actual page routes
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Our Services", path: "/services" },
    { name: "Contact Us", path: "/contact" },
  ];

  // Linking to the services page (you can add hash links later if you want to scroll to specific sections)
  const coreServices = [
    { name: "Workforce & Staffing", path: "/services" },
    { name: "Technology & Digital", path: "/services" },
    { name: "Marketing & Promotion", path: "/services" },
    { name: "Trading & Supply", path: "/services" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-white border-t border-slate-100 pt-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 relative z-10 flex flex-col gap-20">
        
        {/* =========================================
            TOP SECTION: Massive Brand Statement
        ========================================= */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 border-b border-slate-100 pb-16">
          <div className="flex flex-col max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-[2px] bg-[#1a38ff]"></span>
              <span className="secondary-font text-[#1a38ff] text-xs sm:text-sm font-bold uppercase tracking-[0.3em]">
                Ready to Scale?
              </span>
            </div>
            <h2 className="primary-font text-slate-900 text-5xl sm:text-6xl md:text-7xl leading-[1.1] tracking-tight">
              Let's architect your <br className="hidden md:block" /> next phase of growth.
            </h2>
          </div>
          
          <Link 
            to="/contact"
            className="secondary-font group h-14 px-8 bg-[#1a38ff] text-white font-bold uppercase tracking-widest text-xs sm:text-sm flex items-center justify-center gap-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#1a38ff]/20 shrink-0"
          >
            Start a Conversation
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* =========================================
            MIDDLE SECTION: Navigation Grid
        ========================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-10">
          
          {/* Brand Identity */}
          <div className="lg:col-span-5 flex flex-col items-start lg:pr-10">
  {/* Image Logo */}
  <Link to="/" className="mb-6 block hover:opacity-80 transition-opacity">
    <img 
      src="/NMDQ-Logo.png" /* Replace with your actual logo file path */
      alt="NMDQ Logo" 
      className="h-10 md:h-12 w-auto object-contain" /* Adjust height as needed */
    />
  </Link>
  
  <p className="secondary-font text-slate-500 text-sm md:text-base font-medium leading-relaxed max-w-sm">
    Engineering premium workforce, technology, and strategic consulting frameworks to amplify business velocity globally.
  </p>
  <a 
    href="mailto:solutions@nmdq.com" 
    className="mt-8 secondary-font text-slate-900 text-lg font-bold hover:text-[#1a38ff] transition-colors"
  >
    solutions@nmdq.com
  </a>
</div>

          {/* Column 1: Quick Links */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <h4 className="secondary-font text-slate-900 font-bold uppercase tracking-widest text-xs">
              Platform
            </h4>
            <ul className="flex flex-col gap-4">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.path}
                    onClick={scrollToTop}
                    className="secondary-font text-slate-500 hover:text-[#1a38ff] hover:translate-x-1 inline-block font-medium tracking-wide text-sm transition-all duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Capabilities */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <h4 className="secondary-font text-slate-900 font-bold uppercase tracking-widest text-xs">
              Core Capabilities
            </h4>
            <ul className="flex flex-col gap-4">
              {coreServices.map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.path}
                    onClick={scrollToTop}
                    className="secondary-font text-slate-500 hover:text-[#1a38ff] hover:translate-x-1 inline-block font-medium tracking-wide text-sm transition-all duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* =========================================
          BOTTOM SECTION: Giant Wordmark & Legal
      ========================================= */}
      <div className="w-full relative mt-10">
        {/* Floating Back To Top Button - Positioned beautifully above the text */}
        <div className="max-w-7xl mx-auto px-5 relative z-20 flex justify-end mb-[-20px] sm:mb-[-40px]">
          <button
            onClick={scrollToTop}
            className="w-14 h-14 rounded-full border border-slate-200 text-slate-500 flex items-center justify-center bg-white/80 backdrop-blur-md hover:bg-[#1a38ff] hover:border-[#1a38ff] hover:text-white transition-all duration-300 shadow-sm"
            aria-label="Scroll to top"
          >
            <ArrowUp size={24} strokeWidth={2} />
          </button>
        </div>

        {/* The Giant Watermark */}
        <div className="w-full flex justify-center overflow-hidden border-t border-slate-100 pt-10 pb-4">
          <h3 className="primary-font text-slate-50 font-black uppercase tracking-tighter leading-none text-[16vw] select-none pointer-events-none">
            NMDQ GRID
          </h3>
        </div>

        {/* Absolute Bottom Legal Bar */}
        <div className="absolute bottom-6 left-0 w-full">
          <div className="max-w-7xl mx-auto px-5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="secondary-font text-slate-400 font-medium text-[10px] sm:text-xs uppercase tracking-widest">
              © {currentYear} NMDQ TECHNOLOGY. ALL RIGHTS RESERVED.
            </span>
            
            <div className="flex items-center gap-6">
              <Link to="#" className="secondary-font text-slate-400 hover:text-[#1a38ff] font-medium text-[10px] sm:text-xs uppercase tracking-widest transition-colors">
                Privacy
              </Link>
              <Link to="#" className="secondary-font text-slate-400 hover:text-[#1a38ff] font-medium text-[10px] sm:text-xs uppercase tracking-widest transition-colors">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;