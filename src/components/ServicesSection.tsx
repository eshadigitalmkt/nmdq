
import { motion, type Variants } from "framer-motion";
import { ArrowRight, Users, Cpu, TrendingUp, Briefcase } from "lucide-react";

const Services = () => {
  // Soft, editorial stagger variants
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

  const services = [
    {
      id: "01",
      title: "Workforce & Staffing Solutions",
      desc: "Precision staffing and recruitment engineered to integrate seamlessly into your operational grid. We deploy top-tier talent calibrated to your exact technical requirements.",
      icon: <Users size={28} strokeWidth={1.5} />,
    },
    {
      id: "02",
      title: "Technology & Digital Solutions",
      desc: "Custom IT infrastructure, software development, and system integration. We build the digital frameworks that allow your workforce to operate at maximum efficiency.",
      icon: <Cpu size={28} strokeWidth={1.5} />,
    },
    {
      id: "03",
      title: "Digital Marketing & Business Promotion",
      desc: "Data-driven advisory services. We analyze your structural bottlenecks and engineer scalable growth protocols to dominate your market sector.",
      icon: <TrendingUp size={28} strokeWidth={1.5} />,
    },
    {
      id: "04",
      title: "Trading & Corporate Supply",
      desc: "End-to-end outsourcing of critical business functions. We take control of complex processes, enforcing strict quality standards while reducing your overhead.",
      icon: <Briefcase size={28} strokeWidth={1.5} />,
    },
  ];

  return (
    <section
      id="services"
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
            {/* Section Tag */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3 mb-8"
            >
              <span className="w-8 h-[2px] bg-[#1a38ff]"></span>
              <span className="secondary-font text-[#1a38ff] text-xs sm:text-sm font-bold uppercase tracking-[0.3em]">
                System / Services
              </span>
              <span className="w-8 h-[2px] bg-[#1a38ff]"></span>
            </motion.div>

            {/* Mixed Typography Heading */}
            <motion.h2
              variants={itemVariants}
              className="flex flex-col mb-10 w-full"
            >
              <span className="secondary-font text-[#1a38ff] font-black uppercase tracking-tighter leading-[0.9] text-5xl sm:text-6xl md:text-8xl">
                Operational
              </span>
              <span className="primary-font text-[#1a38ff] leading-[1] text-6xl sm:text-7xl md:text-8xl lg:text-[8rem] -mt-2 sm:-mt-4">
                Capabilities
              </span>
            </motion.h2>

            
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto w-full">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="
                group
                relative
                p-8
                sm:p-12
                bg-slate-50
                border
                border-slate-100
                hover:bg-white
                hover:border-[#1a38ff]/20
                hover:shadow-2xl
                hover:shadow-[#1a38ff]/5
                hover:-translate-y-2
                transition-all
                duration-500
                rounded-[2rem]
                flex
                flex-col
                justify-between
                min-h-[360px]
                overflow-hidden
                "
              >
                {/* Top Row: Icon & ID */}
                <div className="flex items-start justify-between mb-12 relative z-10">
                  <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center text-[#1a38ff] group-hover:scale-110 transition-transform duration-500">
                    {service.icon}
                  </div>
                  <span className="primary-font text-slate-300 text-4xl sm:text-5xl group-hover:text-[#1a38ff]/20 transition-colors duration-500">
                    {service.id}
                  </span>
                </div>

                {/* Bottom Row: Text & Link */}
                <div className="relative z-10">
                  <h3 className="secondary-font text-slate-900 font-bold text-2xl sm:text-3xl tracking-tight mb-4 group-hover:text-[#1a38ff] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="secondary-font text-slate-600 text-sm sm:text-base leading-relaxed font-medium mb-8">
                    {service.desc}
                  </p>

                  {/* Clean Animated Link */}
                  <div className="flex items-center gap-3 text-[#1a38ff] uppercase text-xs font-bold tracking-widest secondary-font">
                    <span>Know More</span>
                    <div className="w-8 h-8 rounded-full bg-[#1a38ff]/10 flex items-center justify-center group-hover:bg-[#1a38ff] group-hover:text-white transition-colors duration-300">
                      <ArrowRight size={14} className="transform group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;