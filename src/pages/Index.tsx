import Header from "@/components/Header";
import Simulator from "@/components/Simulator";
import ServicesSection from "@/components/ServicesSection";
import ProgrammationSection from "@/components/ProgrammationSection";
import ReparationSection from "@/components/ReparationSection";
import BenefitsSection from "@/components/BenefitsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen w-full font-sans">
      <Header />
      
      {/* HERO SECTION */}
      <section className="relative overflow-hidden flex flex-col-reverse lg:flex-row items-center justify-between py-16 lg:py-20 min-h-[700px] bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1486496572940-2bb2341fdbdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
      }}>
        {/* Background Pattern - keeping for additional visual interest */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-primaryRed rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-primaryRed rounded-full blur-3xl"></div>
        </div>
        
        {/* LEFT: Title and CTA */}
        <div className="flex-1 max-w-2xl px-6 lg:px-12 z-10">
          <div className="inline-flex items-center bg-primaryRed/10 text-primaryRed px-4 py-2 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm border border-primaryRed/20">
            ⚡ Vous conduisez, nous optimisons
          </div>
          <h1 className="text-4xl lg:text-6xl font-black text-white mb-6 leading-tight drop-shadow-lg">
            MH AUTO Performance,{" "}
            <span className="block text-primaryRed bg-white/90 px-4 py-2 inline-block transform -rotate-1 shadow-lg rounded-lg">
              spécialiste
            </span>
            <span className="block mt-2">
              reprogrammation et réparation automobile
            </span>
          </h1>
          <p className="text-xl lg:text-2xl text-white font-semibold mb-8 leading-relaxed drop-shadow-md">
            Spécialisés dans la réparation, l'entretien et la reprogrammation de tout type de véhicule.
            <br />
            <span className="text-gray-200">Plus de puissance, moins de consommation.</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:0629631976"
              className="inline-block bg-primaryRed rounded-lg px-8 py-4 text-white text-xl font-black shadow-xl hover:bg-red-600 transition-all duration-300 hover:scale-105 text-center"
            >
              📞 06 29 63 19 76
            </a>
            <a
              href="#programmation"
              className="inline-block bg-white/90 backdrop-blur-sm border-2 border-white text-gray-900 rounded-lg px-8 py-4 text-xl font-black hover:bg-white hover:scale-105 transition-all duration-300 text-center"
            >
              Nos Services
            </a>
          </div>
        </div>
        
        {/* RIGHT: Simulator */}
        <div className="flex-1 flex items-start justify-end px-6 lg:px-12 mb-8 lg:mb-0">
          <Simulator />
        </div>
      </section>

      {/* SERVICES SECTION */}
      <ServicesSection />

      {/* PROGRAMMATION SECTION */}
      <ProgrammationSection />

      {/* REPARATION SECTION */}
      <ReparationSection />

      {/* BENEFITS SECTION */}
      <BenefitsSection />

      {/* SECTION PRESENTATION */}
      <AboutSection />

      {/* TESTIMONIALS SECTION */}
      <TestimonialsSection />

      {/* CONTACT SECTION */}
      <ContactSection />

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default Index;
