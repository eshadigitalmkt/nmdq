
import { Link } from "react-router-dom";
import { ArrowUp, ArrowRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Our Services", path: "/services" },
    { name: "Contact Us", path: "/contact" },
  ];

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
    <footer className="relative bg-white border-t border-slate-100 pt-20 overflow-hidden flex flex-col items-center">
      <div className="max-w-7xl mx-auto px-5 relative z-10 flex flex-col items-center w-full gap-16">
        
        {/* =========================================
            TOP SECTION: Massive Brand Statement
        ========================================= */}
        <div className="flex flex-col items-center justify-center text-center gap-10 border-b border-slate-100 pb-16 w-full">
          <div className="flex flex-col items-center max-w-2xl">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="w-8 h-[2px] bg-[#1a38ff]"></span>
              <span className="secondary-font text-[#1a38ff] text-xs sm:text-sm font-bold uppercase tracking-[0.3em]">
                Ready to Scale?
              </span>
              <span className="w-8 h-[2px] bg-[#1a38ff]"></span>
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
            MIDDLE SECTION: Centered Navigation Grid
        ========================================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 pb-8 w-full text-center">
          
          {/* Column 1: Brand Identity */}
          <div className="flex flex-col items-center justify-start">
            <Link to="/" className="mb-6 inline-block hover:opacity-80 transition-opacity">
              <img 
                src="/NMDQ-Logo.png" 
                alt="NMDQ Logo" 
                className="h-10 md:h-12 w-auto object-contain mx-auto" 
              />
            </Link>
            <p className="secondary-font text-slate-500 text-sm md:text-base font-medium leading-relaxed max-w-sm mx-auto">
              Engineering premium workforce, technology, and strategic consulting frameworks to amplify business velocity globally.
            </p>
            <a 
              href="mailto:aniel@nmdqgrid.com" 
              className="mt-6 secondary-font text-slate-900 text-lg font-bold hover:text-[#1a38ff] transition-colors"
            >
              aneil@nmdqgrid.com
            </a>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col items-center gap-6">
            <h4 className="secondary-font text-slate-900 font-bold uppercase tracking-widest text-xs">
              Platform
            </h4>
            <ul className="flex flex-col items-center gap-4">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.path}
                    onClick={scrollToTop}
                    className="secondary-font text-slate-500 hover:text-[#1a38ff] hover:-translate-y-0.5 inline-block font-medium tracking-wide text-sm transition-all duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Capabilities */}
          <div className="flex flex-col items-center gap-6">
            <h4 className="secondary-font text-slate-900 font-bold uppercase tracking-widest text-xs">
              Core Capabilities
            </h4>
            <ul className="flex flex-col items-center gap-4">
              {coreServices.map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.path}
                    onClick={scrollToTop}
                    className="secondary-font text-slate-500 hover:text-[#1a38ff] hover:-translate-y-0.5 inline-block font-medium tracking-wide text-sm transition-all duration-300"
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
      <div className="w-full relative mt-4 flex flex-col items-center">
        
        {/* Floating Back To Top Button - Centered above Wordmark */}
        <div className="relative z-20 flex justify-center w-full mb-[-28px]">
          <button
            onClick={scrollToTop}
            className="w-14 h-14 rounded-full border border-slate-200 text-slate-500 flex items-center justify-center bg-white hover:bg-[#1a38ff] hover:border-[#1a38ff] hover:text-white transition-all duration-300 shadow-lg"
            aria-label="Scroll to top"
          >
            <ArrowUp size={24} strokeWidth={2} />
          </button>
        </div>

        {/* The Giant Watermark */}
        <div className="w-full flex justify-center overflow-hidden border-t border-slate-100 pt-10 pb-6 px-4">
          <h3 className="primary-font text-slate-50 font-black uppercase tracking-tighter leading-none text-[16vw] sm:text-[14vw] select-none pointer-events-none text-center">
            NMDQ GRID
          </h3>
        </div>

        {/* Normal Flow Bottom Legal Bar (Fixes mobile overlap) */}
        <div className="w-full bg-white border-t border-slate-50 py-6">
          <div className="max-w-7xl mx-auto px-5 flex flex-col items-center gap-4">
            <div className="flex items-center gap-6">
              <Link to="#" className="secondary-font text-slate-400 hover:text-[#1a38ff] font-medium text-xs uppercase tracking-widest transition-colors">
                Privacy
              </Link>
              <Link to="#" className="secondary-font text-slate-400 hover:text-[#1a38ff] font-medium text-xs uppercase tracking-widest transition-colors">
                Terms
              </Link>
            </div>
            
            <span className="secondary-font text-slate-400 font-medium text-[10px] sm:text-xs uppercase tracking-widest text-center">
              © {currentYear} NMDQ TECHNOLOGY. ALL RIGHTS RESERVED.
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;