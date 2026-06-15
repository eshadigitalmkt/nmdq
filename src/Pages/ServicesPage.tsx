import { motion, type Variants } from "framer-motion";
import { 
  Users2, 
  Cpu, 
  Megaphone, 
  Truck, 
  CheckCircle2, 
  Fingerprint, 
  Workflow, 
  Layers 
} from "lucide-react";

const ServicesPage = () => {
  // Soft, editorial stagger animation configurations
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

  // Exact service categories and capabilities matched to your requirements
  const dynamicServices = [
    {
      id: "01",
      title: "Workforce & Staffing Solutions",
      subtitle: "Comprehensive Talent Acquisition & Management",
      icon: <Users2 size={32} strokeWidth={1.2} />,
      summary: "We design flexible, high-performing team structures by connecting your organization with thoroughly vetted professionals across various custom models.",
      extendedDesc: "Attracting exceptional talent requires a structured, data-first approach. Our recruitment pipeline evaluates exact technical competence, leadership capabilities, and corporate cultural fit. We manage everything from executive placements to international hiring compliance, ensuring a reliable onboarding trajectory that keeps your operations moving at maximum velocity.",
      capabilities: [
        "Permanent Recruitment",
        "Contract Staffing",
        "International Hiring Support",
        "Executive Hiring",
        "HR Outsourcing",
        "Skilled Workforce Deployment"
      ]
    },
    {
      id: "02",
      title: "Technology & Digital Solutions",
      subtitle: "Custom Architecture & Software Frameworks",
      icon: <Cpu size={32} strokeWidth={1.2} />,
      summary: "We deliver modern, scalable software ecosystems and robust IT infrastructure engineered to eliminate operational friction.",
      extendedDesc: "Legacy software and disconnected digital layers slow down organizational progress. Our technology experts specialize in updating your core setups, integrating automated pipelines, and deploying hiring and workflow systems. We build secure frameworks that let your internal teams operate cleanly and handle growth seamlessly.",
      capabilities: [
        "IT Staffing",
        "Recruitment Automation",
        "Digital Hiring Platforms",
        "Workflow Support Systems",
        "Technology Consulting",
        "Business Process Support"
      ]
    },
    {
      id: "03",
      title: "Digital Marketing & Business Promotion",
      subtitle: "Brand Position & Performance Funnels",
      icon: <Megaphone size={32} strokeWidth={1.2} />,
      summary: "We drive sustainable customer acquisition and visibility through precision target-marketing pipelines and sophisticated brand messaging.",
      extendedDesc: "Visibility without conversions creates unnecessary overhead waste. We approach market placement with a metrics-driven mindset, deploying advanced optimization tactics across corporate brands, social platforms, and specialized sectors like healthcare. We construct consistent, highly targeted outreach strategies that amplify market share.",
      capabilities: [
        "Digital Marketing",
        "Hospital Promotions",
        "Corporate Branding",
        "Lead Generation",
        "Social Media Campaigns",
        "Business Development Support"
      ]
    },
    {
      id: "04",
      title: "Trading & Corporate Supply",
      subtitle: "Strategic Sourcing & Enterprise Logistics",
      icon: <Truck size={32} strokeWidth={1.2} />,
      summary: "We streamline your enterprise asset procurement pipelines, delivering critical physical resources under strict timeline and quality metrics.",
      extendedDesc: "Fragmented supplier channels drain internal strategic focus and cut into operating margins. Our trading and corporate supply branch coordinates end-to-end business-to-business sourcing with absolute accountability. From daily industrial consumables to high-end equipment procurement, we mitigate logistical risks and manage fulfillment smoothly.",
      capabilities: [
        "Equipment Procurement",
        "Corporate Supply Solutions",
        "Import & Export Assistance",
        "Industrial Consumables",
        "Multi-Sector Product Trading"
      ]
    }
  ];

  const workflowSteps = [
    {
      step: "01",
      name: "Discovery & Audit",
      desc: "We analyze your current organizational setup, operational challenges, and resource bottlenecks to define a clear project baseline."
    },
    {
      step: "02",
      name: "Blueprint Design",
      desc: "Our consultants map out a custom service strategy, matching your targets with specific talent models or digital frameworks."
    },
    {
      step: "03",
      name: "Smooth Deployment",
      desc: "We deploy specialized teams, activate secure digital pipelines, or clear logistics routes without disrupting current workflows."
    },
    {
      step: "04",
      name: "Continuous Evaluation",
      desc: "We continuously track execution data against established key parameters, fine-tuning structures to sustain long-term business value."
    }
  ];

  return (
    <main className="w-full bg-white text-slate-900 selection:bg-[#092f61] selection:text-white overflow-hidden">
      
      {/* =========================================
          SECTION 1: HERO HEADER
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
              Our Capabilities
            </span>
            <span className="w-8 h-[2px] bg-[#e67416]"></span>
          </motion.div>

          {/* Mixed Typography Main Title - Secondary Font & Navy */}
          <motion.h1 variants={itemVariants} className="flex flex-col mb-10 w-full">
            <span className="secondary-font text-[#092f61] font-black uppercase tracking-tighter leading-[0.85] text-5xl sm:text-7xl md:text-9xl lg:text-[10rem]">
              Services Built
            </span>
            <span className="secondary-font text-[#092f61] font-black uppercase tracking-tighter leading-[1.3] text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] -mt-2 sm:-mt-5 md:-mt-6">
              To Deliver Impact
            </span>
          </motion.h1>

          {/* Subtitle / Narrative Intro */}
          <motion.p
            variants={itemVariants}
            className="
            secondary-font
            text-slate-600
            text-base
            sm:text-lg
            md:text-xl
            leading-relaxed
            font-medium
            max-w-3xl
            mt-6
            "
          >
            We deploy interconnected solutions across workforce acquisition, technology setup, business promotion, and corporate logistics to ensure your enterprise scales efficiently.
          </motion.p>
        </motion.div>
      </section>

      {/* =========================================
          SECTION 2: COMPREHENSIVE SERVICE DEEP-DIVE
      ========================================= */}
      <section className="relative py-12 px-5 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="flex flex-col gap-16 lg:gap-20"
          >
            {dynamicServices.map((service, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="
                group
                relative
                bg-white
                border-2
                border-slate-100
                rounded-[2.5rem]
                sm:rounded-[3rem]
                p-8
                sm:p-12
                lg:p-16
                overflow-hidden
                hover:border-[#092f61]/30
                hover:shadow-2xl
                hover:shadow-[#092f61]/10
                transition-all
                duration-500
                "
              >
                {/* Giant Watermark Background Number - Navy */}
                <div className="absolute top-[-5%] right-[-2%] secondary-font font-black tracking-tighter text-[12rem] sm:text-[18rem] lg:text-[22rem] leading-none text-slate-50 group-hover:text-[#092f61]/5 transition-colors duration-700 select-none pointer-events-none z-0">
                  {service.id}
                </div>

                {/* Content Container */}
                <div className="relative z-10 flex flex-col gap-10 lg:gap-14">
                  
                  {/* Top Row: Icon & Main Title */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                    {/* Icon Container - Navy */}
                    <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 rounded-full bg-[#092f61]/5 text-[#092f61] flex items-center justify-center group-hover:bg-[#092f61] group-hover:text-white transition-colors duration-500">
                      {service.icon}
                    </div>
                    <h2 className="secondary-font text-slate-900 font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tighter">
                      {service.title}
                    </h2>
                  </div>

                  {/* Elegant Divider Line */}
                  <hr className="border-slate-100 group-hover:border-[#092f61]/10 transition-colors duration-500" />

                  {/* Bottom Row: 3-Column Content Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
                    
                    {/* Column 1: Subtitle & Summary */}
                    <div className="flex flex-col gap-4">
                      <h3 className="secondary-font font-bold italic text-[#092f61] text-xl sm:text-2xl leading-snug">
                        {service.subtitle}
                      </h3>
                      <p className="secondary-font text-slate-500 text-sm sm:text-base font-medium leading-relaxed">
                        {service.summary}
                      </p>
                    </div>

                    {/* Column 2: Extended Overview */}
                    <div className="flex flex-col gap-4">
                      <h4 className="secondary-font text-slate-400 font-bold uppercase tracking-widest the-x text-[10px] sm:text-xs">
                        Overview & Standards
                      </h4>
                      <p className="secondary-font text-slate-800 text-sm sm:text-base leading-relaxed font-medium">
                        {service.extendedDesc}
                      </p>
                    </div>

                    {/* Column 3: Capabilities List */}
                    <div className="flex flex-col gap-4">
                      <h4 className="secondary-font text-[#092f61] font-bold uppercase tracking-widest text-[10px] sm:text-xs">
                        Core Deliverables
                      </h4>
                      <ul className="flex flex-col gap-3 sm:gap-4">
                        {service.capabilities.map((cap, capIdx) => (
                          <li key={capIdx} className="flex items-start gap-3">
                            <CheckCircle2 size={18} className="text-[#092f61] shrink-0 mt-0.5" />
                            <span className="secondary-font text-slate-600 text-sm font-semibold leading-snug group-hover:text-slate-900 transition-colors">
                              {cap}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =========================================
          SECTION 3: PROCESS FRAMEWORK
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
            {/* Header Area */}
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
              <h2 className="secondary-font text-[#e67416] text-xs sm:text-sm font-bold uppercase tracking-[0.3em] mb-4 flex items-center gap-2">
                <span className="w-4 h-[2px] bg-[#e67416]"></span> Strategic Execution
              </h2>
              <p className="secondary-font font-black text-[#092f61] text-4xl sm:text-5xl md:text-6xl uppercase leading-none mb-6 tracking-tighter">
                Our Engagement Blueprint
              </p>
              <p className="secondary-font text-slate-500 text-sm sm:text-base md:text-lg font-medium max-w-2xl leading-relaxed">
                We implement a verified, multi-phase delivery method to guarantee clear accountability, fast setup, and zero business downtime.
              </p>
            </div>

            {/* Large Format Process Blocks (2x2 Grid) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto w-full">
              {workflowSteps.map((step, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="
                  group
                  relative
                  bg-white
                  border-2
                  border-slate-100
                  rounded-[2.5rem]
                  p-10
                  lg:p-14
                  shadow-sm
                  hover:border-[#092f61]/30
                  hover:shadow-2xl
                  hover:shadow-[#092f61]/10
                  transition-all
                  duration-500
                  overflow-hidden
                  flex
                  flex-col
                  min-h-[320px]
                  "
                >
                  {/* Giant Watermark Step Number */}
                  <div className="absolute -bottom-8 -right-4 secondary-font font-black tracking-tighter text-[10rem] lg:text-[14rem] leading-none text-slate-50 group-hover:text-[#092f61]/5 transition-colors duration-700 select-none pointer-events-none z-0">
                    {step.step}
                  </div>

                  {/* Content Container */}
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Top Accent */}
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-12 h-12 rounded-full bg-[#092f61]/5 flex items-center justify-center group-hover:bg-[#092f61] transition-colors duration-500">
                        <span className="secondary-font font-bold text-[#092f61] group-hover:text-white transition-colors duration-500">
                          {step.step}
                        </span>
                      </div>
                      <div className="h-[2px] flex-grow bg-slate-100 group-hover:bg-[#092f61]/20 transition-colors duration-500" />
                    </div>

                    {/* Text Content */}
                    <div className="mt-auto">
                      <h3 className="secondary-font text-slate-900 font-black text-2xl sm:text-3xl uppercase tracking-tight mb-4 group-hover:text-[#092f61] transition-colors duration-300">
                        {step.name}
                      </h3>
                      <p className="secondary-font text-slate-600 text-sm sm:text-base leading-relaxed font-medium max-w-md">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================
          SECTION 4: OPERATIONAL STANDARDS BRIEF (Navy Theme)
      ========================================= */}
      <section className="relative py-24 bg-white px-5">
        <div className="max-w-5xl mx-auto rounded-[3rem] p-8 sm:p-14 lg:p-20 bg-[#092f61] shadow-2xl shadow-[#092f61]/20 relative overflow-hidden">
          
          {/* Subtle Abstract Light Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 blur-[100px] rounded-full pointer-events-none transform translate-x-1/3 -translate-y-1/3" />
          
          {/* Watermark Icon */}
          <div className="absolute -bottom-10 -right-10 text-white/5 pointer-events-none">
            <Layers size={240} strokeWidth={1} />
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
            className="flex flex-col gap-8 relative z-10"
          >
            <motion.div variants={itemVariants} className="flex items-center gap-3">
              <Fingerprint size={24} className="text-white" />
              <span className="secondary-font text-white text-sm font-bold uppercase tracking-[0.25em]">
                Reliable Service Baselines
              </span>
            </motion.div>

            <motion.p variants={itemVariants} className="secondary-font font-medium text-slate-200 text-2xl sm:text-3xl md:text-4xl leading-relaxed">
              Every placement confirmed, custom integration deployed, and commercial supply chain managed satisfies demanding corporate guidelines. We prioritize absolute accountability across our frameworks, protecting your project schedules and unlocking long-term value for your operations.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-x-10 gap-y-5 border-t border-white/20 pt-8 mt-4 text-blue-100 uppercase tracking-widest font-bold text-xs sm:text-sm secondary-font">
              <span className="flex items-center gap-3">
                <Workflow size={18} className="text-white" /> 
                Guaranteed Service Level Standards
              </span>
              <span className="flex items-center gap-3">
                <Workflow size={18} className="text-white" /> 
                Continuous System Evaluations
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* =========================================
          SECTION 5: CALL TO ACTION (Bright Editorial)
      ========================================= */}
      <section className="relative py-24 lg:py-32 bg-slate-50 border-t border-slate-100 px-5 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
            className="flex flex-col items-center"
          >
            {/* CTA Tag - Orange Accent */}
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-8">
              <span className="w-8 h-[2px] bg-[#e67416]"></span>
              <span className="secondary-font text-[#e67416] text-xs sm:text-sm font-bold uppercase tracking-[0.3em]">
                Initiate Project
              </span>
              <span className="w-8 h-[2px] bg-[#e67416]"></span>
            </motion.div>

            {/* Giant Heading - Navy */}
            <motion.h2 variants={itemVariants} className="flex flex-col mb-10 w-full">
              <span className="secondary-font text-[#092f61] font-black uppercase tracking-tighter leading-[0.9] text-5xl sm:text-7xl md:text-8xl">
                Ready To
              </span>
              <span className="secondary-font text-[#092f61] font-black uppercase tracking-tighter leading-[1] text-6xl sm:text-8xl md:text-9xl -mt-2 sm:-mt-5">
                Transform?
              </span>
            </motion.h2>

            <motion.p variants={itemVariants} className="secondary-font text-slate-600 text-base sm:text-lg leading-relaxed font-medium mb-12 max-w-2xl">
              Partner with NMDQ GRID to engineer your workforce, deploy cutting-edge technology, and secure your market advantage. Let's map out your next operational phase.
            </motion.p>
            
          </motion.div>
        </div>
      </section>

    </main>
  );
};

export default ServicesPage;