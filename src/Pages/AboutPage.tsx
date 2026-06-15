
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

  const timeline = [
    { year: "2023", title: "Company Founded", desc: "NMDQ was established with a clear goal: to bridge the gap between emerging technology networks and traditional corporate structures." },
    { year: "2024", title: "Expanding Across Sectors", desc: "Successfully expanded our workforce solutions into 6 major industries, matching and placing over 5,000 highly qualified professionals worldwide." },
    { year: "2025", title: "Technology Integration", desc: "Launched our dedicated technology deployment services, seamlessly pairing strategic consulting with modern software frameworks." },
    { year: "2026", title: "Global Operations Today", desc: "Proudly partnering with mid-market businesses and large enterprises alike to manage their talent strategy and organizational growth." },
  ];

  const team = [
    { name: "Julian Vance", role: "Chief Executive Officer", image: "/api/placeholder/400/400" },
    { name: "Amara Sterling", role: "Head of Talent Solutions", image: "/api/placeholder/400/400" },
    { name: "Kaelen Voss", role: "Director of Technology Delivery", image: "/api/placeholder/400/400" },
  ];

  return (
    <main className="w-full bg-white text-slate-900 selection:bg-[#1a38ff] selection:text-white overflow-hidden">
      
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
          {/* Section Tag */}
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-8">
            <span className="w-8 h-[2px] bg-[#1a38ff]"></span>
            <span className="secondary-font text-[#1a38ff] text-xs sm:text-sm font-bold uppercase tracking-[0.3em]">
              Who We Are
            </span>
            <span className="w-8 h-[2px] bg-[#1a38ff]"></span>
          </motion.div>

          {/* Mixed Typography Page Title */}
          <motion.h1 variants={itemVariants} className="flex flex-col mb-10 w-full">
            <span className="secondary-font text-[#1a38ff] font-black uppercase tracking-tighter leading-[0.85] text-5xl sm:text-7xl md:text-9xl lg:text-[10rem]">
              Driven By People
            </span>
            <span className="primary-font text-[#1a38ff] leading-[1] text-6xl sm:text-8xl md:text-9xl lg:text-[11rem] -mt-2 sm:-mt-5 md:-mt-6">
              Powered by Tech
            </span>
          </motion.h1>

          {/* Core Story Block */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 text-left max-w-6xl mx-auto pt-12 border-t border-slate-100 mt-6"
          >
            <div className="lg:col-span-5">
              <p className="primary-font text-[#1a38ff] text-2xl sm:text-3xl lg:text-4xl leading-tight">
                We believe that organizations do not grow through guesswork—they scale through reliable strategy and talented teams.
              </p>
            </div>
            <div className="lg:col-span-7">
              <p className="secondary-font text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed font-medium mb-6">
                NMDQ is a premier business solutions firm operating at the crossroads of specialized recruitment, IT deployment, and strategic consulting. We help companies navigate operational challenges, refine internal processes, and find the talent they need to build sustainable advantages.
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
                <div className="w-12 h-12 rounded-full bg-[#1a38ff]/10 flex items-center justify-center shrink-0 text-[#1a38ff]">
                  <Eye size={24} strokeWidth={1.5} />
                </div>
                <span className="secondary-font text-[#1a38ff] text-xs sm:text-sm font-bold uppercase tracking-widest">
                  Our Vision
                </span>
              </div>
              <p className="primary-font text-slate-800 text-xl sm:text-2xl leading-relaxed italic">
                "To become a trusted business solutions company delivering workforce, technology, and strategic consulting services that drive sustainable growth and operational excellence."
              </p>
            </motion.div>

            {/* Mission Statement */}
            <motion.div
              variants={itemVariants}
              className="relative p-8 sm:p-12 bg-white border border-slate-200/60 rounded-[2rem] shadow-sm flex flex-col gap-4 justify-center"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#1a38ff]/10 flex items-center justify-center shrink-0 text-[#1a38ff]">
                  <Compass size={24} strokeWidth={1.5} />
                </div>
                <span className="secondary-font text-[#1a38ff] text-xs sm:text-sm font-bold uppercase tracking-widest">
                  Our Mission
                </span>
              </div>
              <p className="primary-font text-slate-800 text-xl sm:text-2xl leading-relaxed italic">
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
              <h2 className="secondary-font text-[#1a38ff] text-xs sm:text-sm font-bold uppercase tracking-[0.3em] mb-4 flex items-center gap-2">
                <span className="w-4 h-[2px] bg-[#1a38ff]"></span> 01 / Foundation
              </h2>
              <p className="primary-font text-slate-900 text-3xl sm:text-4xl uppercase leading-none">
                The Values That Guide Us
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((val, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="bg-slate-50 p-8 border border-slate-100 rounded-[2rem] hover:bg-white hover:border-[#1a38ff]/20 hover:shadow-2xl hover:shadow-[#1a38ff]/5 hover:-translate-y-1 transition-all duration-500 flex flex-col justify-between group min-h-[260px]"
                >
                  <div className="w-12 h-12 rounded-full bg-white text-[#1a38ff] shadow-sm flex items-center justify-center group-hover:bg-[#1a38ff] group-hover:text-white transition-colors duration-500 mb-6">
                    {val.icon}
                  </div>
                  <div>
                    <h3 className="secondary-font text-slate-900 font-bold text-lg mb-2 group-hover:text-[#1a38ff] transition-colors">
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

      {/* =========================================
          SECTION 4: CHRONOLOGICAL MILESTONES
      ========================================= */}
      <section className="relative py-24 lg:py-32 border-t border-slate-100 px-5 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8"
          >
            <div className="lg:col-span-4 flex flex-col justify-start">
              <h2 className="secondary-font text-[#1a38ff] text-xs sm:text-sm font-bold uppercase tracking-[0.3em] mb-4 flex items-center gap-2">
                <span className="w-4 h-[2px] bg-[#1a38ff]"></span> 02 / Trajectory
              </h2>
              <p className="primary-font text-slate-900 text-3xl sm:text-4xl lg:text-5xl uppercase leading-tight mb-6">
                Our Timeline
              </p>
              <p className="secondary-font text-slate-500 text-sm font-medium leading-relaxed uppercase tracking-wider">
                A brief overview of how we have expanded our capacity and services.
              </p>
            </div>

            <div className="lg:col-span-8 flex flex-col border-l-2 border-slate-100 pl-6 sm:pl-12 gap-12 relative">
              {timeline.map((time, idx) => (
                <motion.div 
                  key={idx} 
                  variants={itemVariants}
                  className="relative group"
                >
                  {/* Timeline Node Point */}
                  <div className="absolute -left-[31px] sm:-left-[55px] top-1.5 w-4 h-4 rounded-full border-4 border-white bg-[#1a38ff] group-hover:scale-125 transition-transform duration-300" />
                  
                  <span className="primary-font text-3xl md:text-4xl text-[#1a38ff] block leading-none mb-2">
                    {time.year}
                  </span>
                  <h3 className="secondary-font text-slate-900 font-bold text-lg sm:text-xl tracking-tight mb-2">
                    {time.title}
                  </h3>
                  <p className="secondary-font text-slate-600 text-sm sm:text-base font-medium leading-relaxed max-w-xl">
                    {time.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================
          SECTION 5: LEADERSHIP TEAM
      ========================================= */}
      <section className="relative py-24 lg:py-32 bg-slate-50 border-t border-slate-100 px-5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="flex flex-col gap-16 lg:gap-24"
          >
            {/* Header Block */}
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
              <h2 className="secondary-font text-[#1a38ff] text-xs sm:text-sm font-bold uppercase tracking-[0.3em] mb-4 flex items-center gap-2">
                <span className="w-4 h-[2px] bg-[#1a38ff]"></span> 03 / Team
              </h2>
              <p className="primary-font text-slate-900 text-3xl sm:text-4xl md:text-5xl uppercase leading-none mb-6">
                Meet Our Leadership
              </p>
              <p className="secondary-font text-slate-500 text-sm sm:text-base font-medium max-w-xl">
                The strategic thinkers and operational leaders focused on delivering measurable value to our partners.
              </p>
            </div>

            {/* Team Frames Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto w-full">
              {team.map((member, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="group flex flex-col items-center text-center"
                >
                  {/* Photo Frame Wrapper */}
                  <div className="w-full aspect-square bg-slate-200 overflow-hidden rounded-[2.5rem] mb-6 border border-slate-200/40 group-hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-1">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 mix-blend-multiply"
                    />
                  </div>
                  <h3 className="primary-font text-slate-900 text-2xl sm:text-3xl mb-1 group-hover:text-[#1a38ff] transition-colors">
                    {member.name}
                  </h3>
                  <span className="secondary-font text-slate-500 text-xs sm:text-sm tracking-widest font-bold uppercase">
                    {member.role}
                  </span>
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