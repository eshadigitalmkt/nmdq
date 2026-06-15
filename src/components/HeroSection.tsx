import React from "react";
import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  // Stagger variants for a smooth, editorial entrance
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
      min-h-screen
      w-full
      flex
      items-center
      justify-center
      bg-white
      overflow-hidden
      px-5
      py-24
      "
    >
      {/* Main Content Container 
        Using massive spacing (gap-y) to create that airy studio feel
      */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="
        relative
        z-10
        w-full
        max-w-7xl
        mx-auto
        text-center
        flex
        flex-col
        items-center
        justify-center
        "
      >
        

        {/* Scaled-down Mixed Typography Heading */}
        <motion.h1
          variants={itemVariants}
          className="flex flex-col items-center justify-center w-full mt-10"
        >
          {/* Sans-serif part - Reduced sizes */}
          <span
            className="
            secondary-font
            text-[#1a38ff]
            font-black
            uppercase
            leading-[0.85]
            tracking-tighter
            text-[3rem]
            sm:text-[4rem]
            md:text-[5rem]
            lg:text-[6.5rem]
            xl:text-[8rem]
            "
          >
            Empowering
          </span>
          
          {/* Serif part - Reduced sizes and adjusted margins */}
          <span
            className="
            primary-font
            text-[#1a38ff]
            leading-[1.2]
            text-[3.5rem]
            sm:text-[5rem]
            md:text-[6.5rem]
            lg:text-[8.5rem]
            xl:text-[11rem]
            -mt-1
            sm:-mt-2
            md:-mt-4
            lg:-mt-6
            xl:-mt-8
            "
          >
            Businesses
          </span>
        </motion.h1>

        {/* Bottom Tagline */}
        <motion.span
          variants={itemVariants}
          className="
          secondary-font
          text-[#1a38ff]
          font-bold
          uppercase
          tracking-[0.25em]
          text-xs
          sm:text-sm
          md:text-xl
          mt-4
          md:mt-8
          "
        >
          Through Workforce, Technology & Strategy
        </motion.span>

        {/* List items (<li>) as requested 
          Formatted as a high-end editorial index
        */}
        <motion.ul
          variants={itemVariants}
          className="
          secondary-font
          flex
          flex-wrap
          justify-center
          items-center
          gap-4
          sm:gap-8
          mt-5
          sm:mt-8
          text-slate-500
          uppercase
          tracking-[0.2em]
          text-xs
          sm:text-sm
          font-bold
          "
        >
          <li>Recruitment</li>
          <li className="text-[#1a38ff] select-none">•</li>
          <li>Staffing</li>
          <li className="text-[#1a38ff] select-none">•</li>
          <li>Consulting</li>
          <li className="text-[#1a38ff] select-none">•</li>
          <li>Technology</li>
        </motion.ul>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="
          mt-12
          sm:mt-16
          flex
          flex-col
          sm:flex-row
          justify-center
          gap-5
          "
        >
          <button
            className="
            secondary-font
            group
            h-14
            px-10
            bg-[#1a38ff]
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
            hover:shadow-xl
            hover:shadow-[#1a38ff]/20
            "
          >
            Partner With Us
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </button>

          <button
            className="
            secondary-font
            h-14
            px-10
            border-2
            border-[#1a38ff]
            bg-transparent
            text-[#1a38ff]
            font-bold
            uppercase
            tracking-widest
            text-xs
            sm:text-sm
            rounded-full
            transition-all
            duration-300
            hover:bg-[#1a38ff]
            hover:text-white
            "
          >
            View Services
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;