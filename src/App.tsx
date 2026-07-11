
import { Routes, Route } from "react-router-dom";

// Layout & Global Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage"
import ServicesPage from "./Pages/ServicesPage";
import ContactPage from "./Pages/ContactPage";
import SocialMediaBar from "./components/SocvilaMediaBar"



const App = () => {
  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-[#1a38ff] selection:text-white">
      {/* Persistent Navigation */}
      <Navbar />
      <SocialMediaBar />
      {/* Dynamic Route Switching */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      {/* Persistent Footer */}
      <Footer />
    </main>
  );
};

export default App;