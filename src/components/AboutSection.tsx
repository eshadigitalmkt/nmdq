
import { motion, type Variants } from "framer-motion";
import { ArrowRight, Crosshair, Layers, Terminal } from "lucide-react";

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

  const stats = [
    { value: "500+", label: "Global Partners" },
    { value: "10k+", label: "Talent Placed" },
    { value: "98%", label: "Success Rate" },
    { value: "24/7", label: "Grid Support" },
  ];

  const features = [
    {
      icon: <Terminal size={24} className="text-[#1a38ff]" />,
      title: "Data-Driven Strategy",
      desc: "Precision algorithms to match talent with organizational architecture.",
    },
    {
      icon: <Layers size={24} className="text-[#1a38ff]" />,
      title: "Scalable Operations",
      desc: "Workforce frameworks designed to expand dynamically with your growth.",
    },
    {
      icon: <Crosshair size={24} className="text-[#1a38ff]" />,
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
          {/* Section Tag */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-3 mb-8"
          >
            <span className="w-8 h-[2px] bg-[#1a38ff]"></span>
            <span className="secondary-font text-[#1a38ff] text-xs sm:text-sm font-bold uppercase tracking-[0.3em]">
              System / About
            </span>
            <span className="w-8 h-[2px] bg-[#1a38ff]"></span>
          </motion.div>

          {/* Mixed Typography Heading */}
          <motion.h2
            variants={itemVariants}
            className="flex flex-col mb-8 w-full"
          >
            <span className="secondary-font text-[#1a38ff] font-black uppercase tracking-tighter leading-[0.9] text-5xl sm:text-6xl md:text-8xl">
              Architecting
            </span>
            <span className="primary-font text-[#1a38ff] leading-[1] text-6xl sm:text-7xl md:text-8xl lg:text-[8rem] -mt-2 sm:-mt-4">
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
            NMDQ is a structural force in the modern corporate ecosystem. We don't just fill seats; we engineer specialized workforce solutions that align aggressively with your technological and strategic imperatives.
          </motion.p>

          {/* CTA Pill Button */}
          <motion.div variants={itemVariants}>
            <button
              className="
              secondary-font
              group
              h-14
              px-10
              bg-transparent
              border-2
              border-[#1a38ff]
              text-[#1a38ff]
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
              hover:bg-[#1a38ff]
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
          </motion.div>
        </div>

        {/* =========================================
            MIDDLE ROW: Horizontal Stats Banner
        ========================================= */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="
              group
              p-8
              sm:p-10
              border-2
              border-slate-100
              bg-white
              hover:border-[#1a38ff]/30
              hover:shadow-2xl
              hover:shadow-[#1a38ff]/10
              transition-all
              duration-500
              rounded-3xl
              flex
              flex-col
              justify-center
              items-center
              text-center
              "
            >
              <span className="primary-font text-5xl sm:text-6xl lg:text-7xl text-[#1a38ff] leading-none mb-3 group-hover:scale-105 transition-transform duration-500">
                {stat.value}
              </span>
              <span className="secondary-font text-slate-500 text-xs sm:text-sm font-bold uppercase tracking-[0.15em]">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

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
              <div className="w-20 h-20 rounded-full bg-[#1a38ff]/5 border border-[#1a38ff]/10 flex items-center justify-center mb-6 group-hover:bg-[#1a38ff] group-hover:text-white transition-colors duration-500">
                {/* Clone element to change icon color on hover if needed, 
                    but lucide icons inherit color via text- classes 
                */}
                <div className="text-[#1a38ff] group-hover:text-white transition-colors duration-500">
                  {feature.icon}
                </div>
              </div>
              <h3 className="secondary-font text-[#1a38ff] font-bold uppercase tracking-wider text-base sm:text-lg mb-3">
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