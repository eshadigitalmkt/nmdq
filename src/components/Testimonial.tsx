import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah Jenkins",
      role: "Chief Operating Officer",
      company: "TechNova",
      quote: "NMDQ GRID didn't just fill our open roles; they completely restructured our hiring process. Their team understood our culture immediately and brought in top-tier talent that helped us scale effortlessly.",
    },
    {
      name: "David Chen",
      role: "VP of Engineering",
      company: "BluePeak Solutions",
      quote: "Finding specialized developers is always a challenge, but NMDQ GRID made it look easy. Their technology deployment solutions and staffing expertise have been invaluable to our recent product launch.",
    },
    {
      name: "Elena Rodriguez",
      role: "Founder & CEO",
      company: "Vanguard Retail",
      quote: "The strategic consulting we received transformed how we operate. They identified bottlenecks we didn't even know we had and provided a roadmap that increased our overall efficiency by 40%.",
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Header entrance animation
  const headerVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80, damping: 20 },
    },
  };

  // Smooth crossfade for the carousel
  const slideVariants: Variants = {
    initial: { opacity: 0, x: 20, scale: 0.98 },
    animate: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
    exit: { opacity: 0, x: -20, scale: 0.98, transition: { duration: 0.3, ease: "easeIn" } },
  };

  return (
    <section
      id="testimonials"
      className="
      relative
      py-24
      lg:py-32
      bg-white
      px-5
      overflow-hidden
      "
    >
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* =========================================
            HEADER AREA
        ========================================= */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={headerVariants}
          className="flex flex-col items-center text-center mb-16 lg:mb-24"
        >
          {/* Section Tag - Orange Accent */}
          <div className="flex items-center gap-3 mb-8">
            <span className="w-8 h-[2px] bg-[#e67416]"></span>
            <span className="secondary-font text-[#e67416] text-xs sm:text-sm font-bold uppercase tracking-[0.3em]">
              Client Stories
            </span>
            <span className="w-8 h-[2px] bg-[#e67416]"></span>
          </div>

          {/* Typography Heading - Secondary Font & Navy */}
          <h2 className="flex flex-col">
            <span className="secondary-font text-[#092f61] font-black uppercase tracking-tighter leading-[0.9] text-5xl sm:text-6xl md:text-8xl">
              Trusted
            </span>
            <span className="secondary-font text-[#092f61] font-black uppercase tracking-tighter leading-[1] text-5xl sm:text-6xl md:text-8xl -mt-1 sm:-mt-2">
              Partners
            </span>
          </h2>
        </motion.div>

        {/* =========================================
            CAROUSEL AREA
        ========================================= */}
        <div className="relative w-full max-w-4xl mx-auto">
          
          {/* Decorative Quote Icon Background */}
          <div className="absolute -top-10 -left-6 sm:-top-16 sm:-left-12 text-[#092f61]/5 z-0">
            <Quote size={120} className="rotate-180" />
          </div>

          {/* The Slider Content */}
          <div className="relative z-10 min-h-[350px] sm:min-h-[250px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                variants={slideVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="w-full flex flex-col items-center text-center"
              >
                {/* Replaced primary-font with secondary-font */}
                <p className="secondary-font font-medium italic text-slate-800 text-2xl sm:text-3xl lg:text-4xl leading-relaxed sm:leading-relaxed mb-10">
                  "{testimonials[currentIndex].quote}"
                </p>
                
                <div className="flex flex-col items-center">
                  <span className="secondary-font text-[#092f61] font-bold uppercase tracking-widest text-sm sm:text-base mb-1">
                    {testimonials[currentIndex].name}
                  </span>
                  <span className="secondary-font text-slate-500 text-xs sm:text-sm tracking-wider uppercase font-medium">
                    {testimonials[currentIndex].role} <span className="mx-2 text-slate-300">|</span> {testimonials[currentIndex].company}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* =========================================
              CONTROLS & PAGINATION
          ========================================= */}
          <div className="mt-12 flex flex-col items-center gap-6">
            
            {/* Arrow Buttons - Navy */}
            <div className="flex items-center gap-4">
              <button
                onClick={handlePrev}
                className="w-12 h-12 rounded-full border-2 border-slate-200 flex items-center justify-center text-[#092f61] hover:bg-[#092f61] hover:border-[#092f61] hover:text-white transition-all duration-300"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} />
              </button>
              
              <button
                onClick={handleNext}
                className="w-12 h-12 rounded-full border-2 border-slate-200 flex items-center justify-center text-[#092f61] hover:bg-[#092f61] hover:border-[#092f61] hover:text-white transition-all duration-300"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Pagination Dots - Orange for Active */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`transition-all duration-300 rounded-full ${
                    currentIndex === idx 
                      ? "w-8 h-2 bg-[#e67416]" 
                      : "w-2 h-2 bg-slate-300 hover:bg-[#e67416]/50"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;