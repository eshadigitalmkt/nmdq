import { motion, type Variants } from "framer-motion";
import { ArrowRight, Crosshair, Layers, Terminal } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  // Stagger variants for a smooth, sequential entrance
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
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

  const features = [
    {
      icon: <Terminal size={24} />,
      title: "Data-Driven Strategy",
      desc: "Precision algorithms to match talent with organizational architecture.",
    },
    {
      icon: <Layers size={24} />,
      title: "Scalable Operations",
      desc: "Workforce frameworks designed to expand dynamically with your growth.",
    },
    {
      icon: <Crosshair size={24} />,
      title: "Targeted Consulting",
      desc: "Strategic deployment of subject matter experts to critical bottlenecks.",
    },
  ];

  return (
    <section
      id="about"
      className="
      relative
      py-24
      lg:py-32
      bg-white
      px-5
      overflow-hidden
      "
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto relative z-10 flex flex-col gap-20 lg:gap-32"
      >
        
        {/* =========================================
            TOP ROW: Centered Editorial Header
        ========================================= */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Section Tag - Using Orange accent */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-3 mb-8"
          >
            <span className="w-8 h-[2px] bg-[#e67416]"></span>
            <span className="secondary-font text-[#e67416] text-xs sm:text-sm font-bold uppercase tracking-[0.3em]">
              System / About
            </span>
            <span className="w-8 h-[2px] bg-[#e67416]"></span>
          </motion.div>

          {/* Typography Heading - All Secondary Font & Navy Blue */}
          <motion.h2
            variants={itemVariants}
            className="flex flex-col mb-8 w-full"
          >
            <span className="secondary-font text-[#092f61] font-black uppercase tracking-tighter leading-[0.9] text-5xl sm:text-6xl md:text-8xl">
              Architecting
            </span>
            <span className="secondary-font text-[#092f61] font-black uppercase tracking-tighter leading-[1] text-5xl sm:text-6xl md:text-8xl -mt-1 sm:-mt-2">
              The Future of Work
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="
            secondary-font
            text-slate-600
            text-sm
            sm:text-base
            md:text-lg
            leading-relaxed
            font-medium
            mb-10
            max-w-2xl
            "
          >
            NMDQ GRID is a structural force in the modern corporate ecosystem. We don't just fill seats; we engineer specialized workforce solutions that align aggressively with your technological and strategic imperatives.
          </motion.p>

          {/* CTA Pill Button - Outlined Navy */}
          <motion.div variants={itemVariants}>
            <Link to="/about">
              <button
                className="
                secondary-font
                group
                h-14
                px-10
                bg-transparent
                border-2
                border-[#092f61]
                text-[#092f61]
                font-bold
                uppercase
                tracking-widest
                text-xs
                sm:text-sm
                flex
                items-center
                gap-3
                transition-all
                duration-300
                hover:bg-[#092f61]
                hover:text-white
                rounded-full
                "
              >
                More About us
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
            </Link>
          </motion.div>
        </div>


        {/* =========================================
            BOTTOM ROW: 3-Column Features Grid
        ========================================= */}
        <motion.div 
          variants={containerVariants} 
          className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 max-w-6xl mx-auto"
        >
          {features.map((feature, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              className="flex flex-col items-center text-center group"
            >
              {/* Icon Wrapper - Navy tint */}
              <div className="w-20 h-20 rounded-full bg-[#092f61]/5 border border-[#092f61]/10 flex items-center justify-center mb-6 group-hover:bg-[#092f61] transition-colors duration-500">
                <div className="text-[#092f61] group-hover:text-white transition-colors duration-500">
                  {feature.icon}
                </div>
              </div>
              <h3 className="secondary-font text-[#092f61] font-bold uppercase tracking-wider text-base sm:text-lg mb-3">
                {feature.title}
              </h3>
              <p className="secondary-font text-slate-500 text-sm sm:text-base leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </motion.div>
    </section>
  );
};

export default About;