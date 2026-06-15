import { motion, type Variants } from "framer-motion";
import { ShieldCheck, Zap, CheckCircle2, LineChart, Eye, Compass } from "lucide-react";

const WhyChooseUs = () => {
  // Soft, editorial stagger variants matching the design system
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const pillars = [
    {
      title: "Multi-Industry Expertise",
      desc: "Leveraging deep operational experience across diverse commercial sectors to deliver highly adaptive, tailored business frameworks.",
      icon: <ShieldCheck size={26} strokeWidth={1.5} />,
    },
    {
      title: "Technology-Driven Approach",
      desc: "Integrating advanced digital systems, automated pipelines, and intelligent tools to maximize efficiency and future-proof your grid.",
      icon: <Zap size={26} strokeWidth={1.5} />,
    },
    {
      title: "Reliable Execution",
      desc: "Enforcing strict quality standards and metrics-driven project deployment to ensure absolute operational baseline continuity.",
      icon: <CheckCircle2 size={26} strokeWidth={1.5} />,
    },
    {
      title: "Growth-Focused Solutions",
      desc: "Engineering scalable workforce and consulting models designed to amplify enterprise velocity and create long-term value.",
      icon: <LineChart size={26} strokeWidth={1.5} />,
    },
  ];

  const visions = [
    {
      tag: "Strategic Vision",
      text: "To become a trusted business solutions company delivering workforce, technology, and strategic consulting services that drive sustainable growth and operational excellence.",
      icon: <Eye size={22} className="text-[#092f61]" />,
    },
    {
      tag: "Our Commitment",
      text: "To empower organizations with reliable talent solutions, innovative business services, and technology-enabled systems that create measurable impact and long-term value.",
      icon: <Compass size={22} className="text-[#092f61]" />,
    },
  ];

  return (
    <section
      id="why-choose-us"
      className="
      relative
      py-24
      lg:py-32
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
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col gap-16 lg:gap-24"
        >
          {/* =========================================
              TOP ROW: Centered Editorial Header
          ========================================= */}
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            {/* Section Tag - Orange Accent */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3 mb-8"
            >
              <span className="w-8 h-[2px] bg-[#e67416]"></span>
              <span className="secondary-font text-[#e67416] text-xs sm:text-sm font-bold uppercase tracking-[0.3em]">
                Value Proposition
              </span>
              <span className="w-8 h-[2px] bg-[#e67416]"></span>
            </motion.div>

            {/* Typography Heading - Secondary Font & Navy */}
            <motion.h2
              variants={itemVariants}
              className="flex flex-col mb-8 w-full"
            >
              <span className="secondary-font text-[#092f61] font-black uppercase tracking-tighter leading-[0.9] text-5xl sm:text-6xl md:text-8xl">
                Why Choose
              </span>
              <span className="secondary-font text-[#092f61] font-black uppercase tracking-tighter leading-[1] text-5xl sm:text-6xl md:text-8xl -mt-1 sm:-mt-2">
                Us
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
              max-w-2xl
              "
            >
              We combine cross-sector talent networks with custom system architectures to deliver measurable strategic advantages.
            </motion.p>
          </div>

          {/* =========================================
              MIDDLE ROW: Dual Core Visions Banner
          ========================================= */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto w-full">
            {visions.map((vision, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="
                relative
                p-8
                sm:p-10
                bg-slate-50
                border
                border-slate-100
                rounded-[2rem]
                flex
                flex-col
                gap-4
                justify-center
                "
              >
                <div className="flex items-center gap-3">
                  {/* Icon uses Navy */}
                  <div className="w-10 h-10 rounded-full bg-[#092f61]/10 flex items-center justify-center shrink-0">
                    {vision.icon}
                  </div>
                  {/* Tag uses Navy */}
                  <span className="secondary-font text-[#092f61] text-xs sm:text-sm font-bold uppercase tracking-widest">
                    {vision.tag}
                  </span>
                </div>
                {/* Secondary font, italicized for a sleek look */}
                <p className="secondary-font text-slate-800 font-medium text-lg sm:text-xl leading-relaxed italic">
                  "{vision.text}"
                </p>
              </motion.div>
            ))}
          </div>

          {/* =========================================
              BOTTOM ROW: The 4 Core Value Pillars
          ========================================= */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto w-full">
            {pillars.map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="
                group
                relative
                p-6
                sm:p-8
                bg-white
                border-2
                border-slate-100
                hover:border-[#092f61]/20
                hover:shadow-2xl
                hover:shadow-[#092f61]/10
                hover:-translate-y-2
                transition-all
                duration-500
                rounded-[2rem]
                flex
                flex-col
                min-h-[260px]
                overflow-hidden
                "
              >
                {/* Abstract subtle gradient on hover */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#092f61]/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Icon Circle */}
                <div className="w-12 h-12 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-[#092f61] mb-6 group-hover:scale-110 group-hover:bg-[#092f61] group-hover:text-white transition-all duration-500 relative z-10">
                  {item.icon}
                </div>

                {/* Text Blocks */}
                <div className="relative z-10 grow flex flex-col">
                  {/* Title highlights to Orange on hover */}
                  <h3 className="secondary-font text-slate-900 font-bold text-base sm:text-lg tracking-tight mb-3 group-hover:text-[#e67416] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="secondary-font text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;