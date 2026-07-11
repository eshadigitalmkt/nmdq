import { FaLinkedin } from "react-icons/fa";

const SocialBar = () => {
  return (
    <div className="fixed right-6 bottom-8 z-50 flex flex-col">
      <a
        href="https://www.linkedin.com/company/www.nmdqgrid.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="
          text-[#092f61] 
          hover:text-[#e67416] 
          transition-all 
          duration-300 
          hover:scale-110
        "
      >
        {/* Increased size to 40 for a bolder, more prominent look */}
        <FaLinkedin size={40} />
      </a>
    </div>
  );
};

export default SocialBar;