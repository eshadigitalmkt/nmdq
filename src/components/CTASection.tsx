import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CTA = () => {
  // Soft, editorial stagger variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
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

  return (
    <section
      className="
      relative
      py-16
      bg-white
      px-5
      overflow-hidden
      "
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="
          relative
          bg-[#092f61]
          rounded-[2rem]
          sm:rounded-[3rem]
          px-6
          py-10
          sm:py-14
          lg:py-16
          flex
          flex-col
          items-center
          text-center
          overflow-hidden
          shadow-2xl
          shadow-[#092f61]/20
          "
        >
          {/* Abstract Glow/Light Effects in the background */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-48 bg-white/5 blur-[80px] rounded-full pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-[#e67416]/10 blur-[100px] rounded-full pointer-events-none" />

          {/* Section Tag - Orange Accent */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-3 mb-4 relative z-10"
          >
            <span className="w-6 h-[2px] bg-[#e67416]"></span>
            <span className="secondary-font text-[#e67416] text-xs font-bold uppercase tracking-[0.25em]">
              Initiate Protocol
            </span>
            <span className="w-6 h-[2px] bg-[#e67416]"></span>
          </motion.div>

          {/* Typography Heading - Secondary Font Only */}
          <motion.h2
            variants={itemVariants}
            className="flex flex-col mb-5 relative z-10 w-full"
          >
            <span className="secondary-font text-white font-black uppercase tracking-tighter leading-[0.9] text-5xl sm:text-6xl lg:text-7xl xl:text-[6.5rem]">
              Ready To
            </span>
            <span className="secondary-font text-white font-black uppercase tracking-tighter leading-[1] text-6xl sm:text-7xl lg:text-8xl xl:text-[8rem] -mt-2 sm:-mt-4 md:-mt-5">
              Scale?
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="
            secondary-font
            text-slate-300
            text-sm
            sm:text-base
            leading-relaxed
            font-medium
            mb-8
            max-w-2xl
            relative
            z-10
            "
          >
            Join the industry leaders who have already transformed their workforce architecture. Let’s build the operational framework your company needs to dominate the market.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="
            flex
            flex-col
            sm:flex-row
            justify-center
            gap-4
            relative
            z-10
            w-full
            sm:w-auto
            "
          >
            {/* Primary Orange Pill */}
            <Link to="/contact">
              <button
                className="
                secondary-font
                group
                h-12
                sm:h-14
                px-8
                sm:px-10
                bg-[#e67416]
                text-white
                font-bold
                uppercase
                tracking-widest
                text-xs
                sm:text-sm
                flex
                items-center
                justify-center
                gap-3
                rounded-full
                transition-all
                duration-300
                hover:scale-105
                hover:shadow-lg
                hover:shadow-[#e67416]/30
                w-full
                sm:w-auto
                "
              >
                Start Building
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
            </Link>

            {/* Secondary Transparent Pill */}
            <Link to="/contact">
              <button
                className="
                secondary-font
                h-12
                sm:h-14
                px-8
                sm:px-10
                border-2
                border-white/30
                bg-transparent
                text-white
                font-bold
                uppercase
                tracking-widest
                text-xs
                sm:text-sm
                rounded-full
                transition-all
                duration-300
                hover:bg-white
                hover:text-[#092f61]
                hover:border-white
                w-full
                sm:w-auto
                "
              >
                Contact Sales
              </button>
            </Link>
          </motion.div>
          
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;