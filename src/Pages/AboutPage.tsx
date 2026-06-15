import { motion, type Variants } from "framer-motion";
import { Target, Users2, ShieldCheck, Sparkles, Eye, Compass } from "lucide-react";

const AboutPage = () => {
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

  const values = [
    {
      icon: <Users2 size={24} />,
      title: "Talent Excellence",
      desc: "We look beyond resumes to find exceptional professionals who align seamlessly with your company culture and project requirements.",
    },
    {
      icon: <Target size={24} />,
      title: "Tailored Solutions",
      desc: "We do not believe in one-size-fits-all strategies. Every workforce plan and technology service is custom-built for your business goals.",
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "Trust & Transparency",
      desc: "Reliability is at the heart of what we do. We build long-term relationships with our clients through open communication and clear execution.",
    },
    {
      icon: <Sparkles size={24} />,
      title: "Continuous Innovation",
      desc: "Business environments change rapidly. We introduce modern tech-enabled approaches to ensure your business remains competitive and agile.",
    },
  ];

  return (
    <main className="w-full bg-white text-slate-900 selection:bg-[#e67416] selection:text-white overflow-hidden">
      
      {/* =========================================
          SECTION 1: HERO & STORY HEADER
      ========================================= */}
      <section className="relative pt-36 pb-20 md:pb-28 px-5">
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
              Who We Are
            </span>
            <span className="w-8 h-[2px] bg-[#e67416]"></span>
          </motion.div>

          {/* Mixed Typography Page Title - All Secondary Font & Navy */}
          <motion.h1 variants={itemVariants} className="flex flex-col mb-10 w-full">
            <span className="secondary-font text-[#092f61] font-black uppercase tracking-tighter leading-[0.85] text-5xl sm:text-7xl md:text-9xl lg:text-[10rem]">
              Driven By People
            </span>
            <span className="secondary-font text-[#092f61] font-black uppercase tracking-tighter leading-[1] text-6xl sm:text-8xl md:text-9xl lg:text-[11rem] -mt-2 sm:-mt-5 md:-mt-6">
              Powered by Tech
            </span>
          </motion.h1>

          {/* Core Story Block */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 text-left max-w-6xl mx-auto pt-12 border-t border-slate-100 mt-6"
          >
            <div className="lg:col-span-5">
              <p className="secondary-font font-bold text-[#092f61] text-2xl sm:text-3xl lg:text-4xl leading-tight">
                We believe that organizations do not grow through guesswork—they scale through reliable strategy and talented teams.
              </p>
            </div>
            <div className="lg:col-span-7">
              <p className="secondary-font text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed font-medium mb-6">
                NMD Q GRID is a premier business solutions firm operating at the crossroads of specialized recruitment, IT deployment, and strategic consulting. We help companies navigate operational challenges, refine internal processes, and find the talent they need to build sustainable advantages.
              </p>
              <p className="secondary-font text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed font-medium">
                From helping agile startups set up their very first operational workflows to supporting large corporate enterprises in scaling engineering cells, we construct the recruitment pipelines and technology systems necessary to deliver long-term value.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* =========================================
          SECTION 2: VISION & MISSION LAYOUT
      ========================================= */}
      <section className="relative py-20 bg-slate-50 border-y border-slate-100 px-5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full"
          >
            {/* Vision Statement */}
            <motion.div
              variants={itemVariants}
              className="relative p-8 sm:p-12 bg-white border border-slate-200/60 rounded-[2rem] shadow-sm flex flex-col gap-4 justify-center"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#092f61]/10 flex items-center justify-center shrink-0 text-[#092f61]">
                  <Eye size={24} strokeWidth={1.5} />
                </div>
                <span className="secondary-font text-[#092f61] text-xs sm:text-sm font-bold uppercase tracking-widest">
                  Our Vision
                </span>
              </div>
              <p className="secondary-font font-medium text-slate-800 text-xl sm:text-2xl leading-relaxed italic">
                "To become a trusted business solutions company delivering workforce, technology, and strategic consulting services that drive sustainable growth and operational excellence."
              </p>
            </motion.div>

            {/* Mission Statement */}
            <motion.div
              variants={itemVariants}
              className="relative p-8 sm:p-12 bg-white border border-slate-200/60 rounded-[2rem] shadow-sm flex flex-col gap-4 justify-center"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#092f61]/10 flex items-center justify-center shrink-0 text-[#092f61]">
                  <Compass size={24} strokeWidth={1.5} />
                </div>
                <span className="secondary-font text-[#092f61] text-xs sm:text-sm font-bold uppercase tracking-widest">
                  Our Mission
                </span>
              </div>
              <p className="secondary-font font-medium text-slate-800 text-xl sm:text-2xl leading-relaxed italic">
                "To empower organizations with reliable talent solutions, innovative business services, and technology-enabled systems that create measurable impact and long-term value."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* =========================================
          SECTION 3: CORE VALUES GRID
      ========================================= */}
      <section className="relative py-24 px-5 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="flex flex-col gap-16"
          >
            <div className="max-w-xl">
              <h2 className="secondary-font text-[#e67416] text-xs sm:text-sm font-bold uppercase tracking-[0.3em] mb-4 flex items-center gap-2">
                <span className="w-4 h-[2px] bg-[#e67416]"></span> 01 / Foundation
              </h2>
              <p className="secondary-font font-black text-[#092f61] text-3xl sm:text-4xl uppercase leading-none tracking-tight">
                The Values That Guide Us
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((val, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="bg-slate-50 p-8 border border-slate-100 rounded-[2rem] hover:bg-white hover:border-[#092f61]/20 hover:shadow-2xl hover:shadow-[#092f61]/5 hover:-translate-y-1 transition-all duration-500 flex flex-col justify-between group min-h-[260px]"
                >
                  <div className="w-12 h-12 rounded-full bg-white text-[#092f61] shadow-sm flex items-center justify-center group-hover:bg-[#092f61] group-hover:text-white transition-colors duration-500 mb-6">
                    {val.icon}
                  </div>
                  <div>
                    <h3 className="secondary-font text-slate-900 font-bold text-lg mb-2 group-hover:text-[#e67416] transition-colors">
                      {val.title}
                    </h3>
                    <p className="secondary-font text-slate-600 text-sm leading-relaxed font-medium">
                      {val.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
};

export default AboutPage;