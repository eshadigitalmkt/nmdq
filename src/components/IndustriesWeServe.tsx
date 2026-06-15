import { motion, type Variants } from "framer-motion";
import { 
  Monitor, 
  HeartPulse, 
  ShoppingBag, 
  Building, 
  Building2, 
  Factory, 
  Briefcase, 
  Rocket, 
} from "lucide-react";

const Industries = () => {
  // Soft, editorial stagger variants
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

  const industries = [
    {
      title: "Healthcare",
      desc: "Securing specialized medical and digital health professionals to advance patient care.",
      icon: <HeartPulse size={26} strokeWidth={1.5} />,
    },
    {
      title: "Information Technology",
      desc: "Scaling engineering, product, and data teams for rapid-growth tech innovators.",
      icon: <Monitor size={26} strokeWidth={1.5} />,
    },
    {
      title: "Hospitality",
      desc: "Building dedicated service and management teams for premium global hospitality brands.",
      icon: <Building size={26} strokeWidth={1.5} />,
    },
    {
      title: "Infrastructure",
      desc: "Sourcing elite talent for large-scale development and civil engineering projects.",
      icon: <Building2 size={26} strokeWidth={1.5} />,
    },
    {
      title: "Manufacturing",
      desc: "Staffing industrial operations with skilled technical, floor, and management experts.",
      icon: <Factory size={26} strokeWidth={1.5} />,
    },
    {
      title: "Retail",
      desc: "Empowering consumer brands with robust operational and retail management talent.",
      icon: <ShoppingBag size={26} strokeWidth={1.5} />,
    },
    {
      title: "Corporate Enterprises",
      desc: "Optimizing workforce architecture and leadership teams for Fortune 500 companies.",
      icon: <Briefcase size={26} strokeWidth={1.5} />,
    },
    {
      title: "Startups & SMEs",
      desc: "Fueling rapid scaling with agile, high-impact talent acquisitions and strategic hiring.",
      icon: <Rocket size={26} strokeWidth={1.5} />,
    },
  ];

  return (
    <section
      id="industries"
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
                System / Sectors
              </span>
              <span className="w-8 h-[2px] bg-[#e67416]"></span>
            </motion.div>

            {/* Mixed Typography Heading - All Secondary Font & Navy */}
            <motion.h2
              variants={itemVariants}
              className="flex flex-col mb-8 w-full"
            >
              <span className="secondary-font text-[#092f61] font-black uppercase tracking-tighter leading-[0.9] text-5xl sm:text-6xl md:text-8xl">
                Industries
              </span>
              <span className="secondary-font text-[#092f61] font-black uppercase tracking-tighter leading-[1] text-5xl sm:text-6xl md:text-8xl -mt-1 sm:-mt-2">
                We Serve
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
              We engineer specialized workforce frameworks across the most demanding and complex sectors of the global economy. 
            </motion.p>
          </div>

          {/* =========================================
              BOTTOM ROW: 4-Column Industries Grid
          ========================================= */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto w-full">
            {industries.map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="
                group
                relative
                p-6
                sm:p-8
                bg-slate-50
                border
                border-slate-100
                hover:bg-white
                hover:border-[#092f61]/20
                hover:shadow-2xl
                hover:shadow-[#092f61]/10
                hover:-translate-y-2
                transition-all
                duration-500
                rounded-[2rem]
                flex
                flex-col
                min-h-[280px]
                overflow-hidden
                "
              >
                {/* Abstract corner background for hover */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#092f61]/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Icon */}
                <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-[#092f61] mb-6 group-hover:scale-110 group-hover:bg-[#092f61] group-hover:text-white transition-all duration-500 relative z-10">
                  {item.icon}
                </div>

                {/* Text Content */}
                <div className="relative z-10 grow flex flex-col">
                  {/* Title changes to orange on hover */}
                  <h3 className="secondary-font text-slate-900 font-bold text-lg sm:text-xl tracking-tight mb-3 group-hover:text-[#e67416] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="secondary-font text-slate-600 text-xs sm:text-sm leading-relaxed font-medium mb-6">
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

export default Industries;