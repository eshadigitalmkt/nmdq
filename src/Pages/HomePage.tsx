
import Hero from "../components/HeroSection";
import About from "../components/AboutSection";
import Services from "../components/ServicesSection";
import Industries from "../components/IndustriesWeServe";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonial";
import CTA from "../components/CTASection";

const HomePage = () => {
  return (
    <div className="flex flex-col w-full overflow-x-hidden bg-white">
     
      <Hero />
      <About />
      <Services />
      <Industries />
      <WhyChooseUs />
      <Testimonials />
      <CTA />
    </div>
  );
};

export default HomePage;