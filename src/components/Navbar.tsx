import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence, type Variants } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Updated to use router paths instead of hash links
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
  ];

  // Soft, elegant entrance animations for the new light theme
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

  const linkVariants: Variants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          {/* Logo */}
         {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="flex items-center">
              <img 
                src="/NMDQ-Logo.png" /* Replace with your actual logo file path */
                alt="NMDQ Logo" 
                className="h-14 md:h-18 w-auto object-cover" /* Adjust height (h-8, h-10, etc.) as needed */
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.nav
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="hidden md:flex items-center gap-8"
          >
            {navLinks.map((link) => (
              <motion.div variants={linkVariants} key={link.name}>
                <Link
                  to={link.path}
                  className="
                  secondary-font 
                  text-[#1a38ff] 
                  hover:opacity-70 
                  transition-opacity 
                  duration-300 
                  text-sm 
                  font-medium
                  "
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}

            {/* Desktop CTA - Cobalt Blue Pill */}
            <motion.div variants={linkVariants}>
              <Link
                to="/contact"
                className="
                secondary-font 
                group 
                px-5 
                h-10 
                bg-[#1a38ff] 
                text-white 
                font-medium 
                text-sm 
                flex 
                items-center 
                gap-2 
                rounded-full 
                transition-all 
                duration-300 
                hover:scale-105 
                hover:shadow-lg 
                hover:shadow-[#1a38ff]/20
                "
              >
                Contact
                <ArrowRight
                  size={16}
                  strokeWidth={2}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </motion.div>
          </motion.nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#1a38ff] hover:opacity-70 transition-opacity"
          >
            {isOpen ? <X size={28} strokeWidth={1.5} /> : <Menu size={28} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden shadow-lg"
          >
            <div className="px-5 py-6 flex flex-col gap-4">
              {navLinks.map((link, i) => (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={link.name}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="
                    secondary-font 
                    text-[#1a38ff] 
                    text-lg 
                    font-medium 
                    hover:bg-slate-50 
                    px-4 
                    py-3 
                    rounded-lg 
                    transition-colors
                    block
                    "
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="
                  mt-2 
                  secondary-font 
                  h-12 
                  w-full 
                  bg-[#1a38ff] 
                  text-white 
                  font-medium 
                  text-base 
                  rounded-full 
                  flex 
                  items-center 
                  justify-center 
                  gap-2 
                  hover:shadow-lg 
                  transition-all
                  "
                >
                  Contact
                  <ArrowRight size={18} />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;