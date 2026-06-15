import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Mail, Phone, ArrowRight, MapPin, ChevronDown } from "lucide-react";

const ContactPage = () => {
  // Custom Dropdown State
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const serviceOptions = [
    { value: "workforce", label: "Workforce & Staffing Solutions" },
    { value: "technology", label: "Technology & Digital Solutions" },
    { value: "marketing", label: "Digital Marketing & Promotion" },
    { value: "supply", label: "Trading & Corporate Supply" },
    { value: "other", label: "Other" },
  ];

  // Soft, editorial stagger animation configurations
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 20,
      },
    },
  };

  const contactMethods = [
    {
      icon: <Mail size={24} />,
      title: "Email Us",
      desc: "For general questions and partnership opportunities.",
      value: "hr@nmdqgrid.com",
      link: "mailto:hr@nmdqgrid.com"
    },
    {
      icon: <Phone size={24} />,
      title: "Call Us",
      desc: "Speak directly with a member of our team.",
      value: "+91 9666983000",
      link: "tel:+919666983000"
    },
    {
      icon: <MapPin size={24} />,
      title: "Our Office",
      desc: "Visit us at our main headquarters.",
      value: "House no: 1, F45 Building, 42/1, Masjid Banda Rd, above Tulsi Furniture, Kondapur, Hyderabad, Telangana 500084",
      link: "https://maps.google.com/?q=House+no+1+F45+Building+Masjid+Banda+Rd+Kondapur+Hyderabad+Telangana+500084" 
    }
  ];

  return (
    <main className="w-full bg-white text-slate-900 selection:bg-[#092f61] selection:text-white overflow-hidden pb-24">
      
      {/* =========================================
          SECTION 1: HERO HEADER
      ========================================= */}
      <section className="relative pt-36 pb-16 md:pb-24 px-5">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto flex flex-col items-center text-center"
        >
          {/* Section Tag - Orange Accent */}
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-8">
            <span className="w-8 h-[2px] bg-[#e67416]"></span>
            <span className="secondary-font text-[#e67416] text-xs sm:text-sm font-bold uppercase tracking-[0.3em]">
              Connect With Us
            </span>
            <span className="w-8 h-[2px] bg-[#e67416]"></span>
          </motion.div>

          {/* Mixed Typography Main Title - Secondary Font & Navy */}
          <motion.h1 variants={itemVariants} className="flex flex-col mb-8 w-full">
            <span className="secondary-font text-[#092f61] font-black uppercase tracking-tighter leading-[0.85] text-5xl sm:text-7xl md:text-9xl">
              Get in
            </span>
            <span className="secondary-font text-[#092f61] font-black uppercase tracking-tighter leading-[1.3] text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] -mt-2 sm:-mt-5 md:-mt-6">
              Touch
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="secondary-font text-slate-600 text-base sm:text-lg md:text-xl leading-relaxed font-medium max-w-2xl"
          >
            Looking for staffing, technology, or business solutions? Reach out to our team today to see how we can help your business grow.
          </motion.p>
        </motion.div>
      </section>

      {/* =========================================
          SECTION 2: CONTACT GRID & FORM
      ========================================= */}
      <section className="relative px-5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8"
          >
            
            {/* Left Column: Contact Methods & Info */}
            <div className="lg:col-span-5 flex flex-col gap-8 lg:pr-10">
              <h2 className="secondary-font text-slate-900 font-bold text-3xl sm:text-4xl mb-2">
                Contact Info
              </h2>
              <p className="secondary-font text-slate-600 text-sm sm:text-base font-medium mb-4">
                Feel free to reach out directly using the details below. We usually reply to all emails and messages within 24 hours.
              </p>

              <div className="flex flex-col gap-4">
                {contactMethods.map((method, idx) => (
                  <motion.a
                    href={method.link}
                    key={idx}
                    variants={itemVariants}
                    className="group flex items-start gap-5 p-6 rounded-[2rem] bg-slate-50 border border-slate-100 hover:bg-white hover:border-[#092f61]/30 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="w-12 h-12 shrink-0 rounded-full bg-white text-[#092f61] shadow-sm flex items-center justify-center group-hover:bg-[#092f61] group-hover:text-white transition-colors duration-300">
                      {method.icon}
                    </div>
                    <div className="flex flex-col overflow-hidden">
                      <span className="secondary-font font-bold text-slate-900 text-lg mb-1 group-hover:text-[#092f61] transition-colors">
                        {method.title}
                      </span>
                      <span className="secondary-font text-slate-500 text-xs sm:text-sm font-medium mb-2">
                        {method.desc}
                      </span>
                      <span className="secondary-font text-[#092f61] font-bold text-sm tracking-wide break-all">
                        {method.value}
                      </span>
                    </div>
                  </motion.a>
                ))}
              </div>

              
            </div>

            {/* Right Column: The Contact Form */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-7 bg-white border-2 border-slate-100 rounded-[2.5rem] sm:rounded-[3rem] p-8 sm:p-12 lg:p-14 shadow-xl shadow-slate-200/40 relative overflow-hidden"
            >
              <h3 className="secondary-font text-slate-900 font-bold text-3xl sm:text-4xl mb-8">
                Send Us a Message
              </h3>

              <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                
                {/* Name & Company Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="secondary-font text-xs font-bold uppercase tracking-widest text-slate-500">
                      Full Name *
                    </label>
                    <input 
                      type="text" 
                      placeholder="John Doe"
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 secondary-font text-sm text-slate-900 focus:outline-none focus:border-[#092f61] focus:ring-1 focus:ring-[#092f61] transition-all"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="secondary-font text-xs font-bold uppercase tracking-widest text-slate-500">
                      Company Name
                    </label>
                    <input 
                      type="text" 
                      placeholder="Your Company"
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 secondary-font text-sm text-slate-900 focus:outline-none focus:border-[#092f61] focus:ring-1 focus:ring-[#092f61] transition-all"
                    />
                  </div>
                </div>

                {/* Email & Phone Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="secondary-font text-xs font-bold uppercase tracking-widest text-slate-500">
                      Email Address *
                    </label>
                    <input 
                      type="email" 
                      placeholder="john@example.com"
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 secondary-font text-sm text-slate-900 focus:outline-none focus:border-[#092f61] focus:ring-1 focus:ring-[#092f61] transition-all"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="secondary-font text-xs font-bold uppercase tracking-widest text-slate-500">
                      Phone Number
                    </label>
                    <input 
                      type="tel" 
                      placeholder="+1 (555) 000-0000"
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 secondary-font text-sm text-slate-900 focus:outline-none focus:border-[#092f61] focus:ring-1 focus:ring-[#092f61] transition-all"
                    />
                  </div>
                </div>

                {/* Custom Service Interest Dropdown */}
                <div className="flex flex-col gap-2 relative">
                  <label className="secondary-font text-xs font-bold uppercase tracking-widest text-slate-500">
                    How can we help? *
                  </label>
                  
                  {/* Custom Dropdown Trigger */}
                  <div 
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className={`w-full bg-slate-50 border ${
                      isDropdownOpen ? "border-[#092f61] ring-1 ring-[#092f61]" : "border-slate-200"
                    } rounded-2xl px-5 py-4 secondary-font text-sm cursor-pointer flex justify-between items-center transition-all select-none`}
                  >
                    <span className={selectedService ? "text-slate-900" : "text-slate-400"}>
                      {selectedService 
                        ? serviceOptions.find(opt => opt.value === selectedService)?.label 
                        : "Select an option"
                      }
                    </span>
                    <ChevronDown 
                      size={18} 
                      className={`text-slate-400 transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`} 
                    />
                  </div>

                  {/* Custom Dropdown Menu */}
                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-[80px] left-0 w-full bg-white border border-slate-100 rounded-2xl shadow-xl shadow-slate-200/50 z-50 overflow-hidden flex flex-col py-2"
                      >
                        {serviceOptions.map((option) => (
                          <div
                            key={option.value}
                            onClick={() => {
                              setSelectedService(option.value);
                              setIsDropdownOpen(false);
                            }}
                            className={`px-5 py-3 secondary-font text-sm cursor-pointer transition-colors ${
                              selectedService === option.value 
                                ? "bg-[#092f61]/10 text-[#092f61] font-bold" 
                                : "text-slate-600 hover:bg-slate-50 hover:text-[#092f61]"
                            }`}
                          >
                            {option.label}
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Submit Button - Orange Pill */}
                <button 
                  type="submit"
                  className="secondary-font group mt-4 h-14 w-full bg-[#e67416] text-white font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#e67416]/20"
                >
                  Send Request
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </button>
                
                <p className="secondary-font text-center text-xs text-slate-400 mt-2 font-medium">
                  Your information is safe and secure with us.
                </p>

              </form>
            </motion.div>

          </motion.div>
        </div>
      </section>

    </main>
  );
};

export default ContactPage;