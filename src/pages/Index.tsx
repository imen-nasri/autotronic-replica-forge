
import Header from "@/components/Header";
import Simulator from "@/components/Simulator";
import ServicesSection from "@/components/ServicesSection";
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
      <section className="relative overflow-hidden flex flex-col-reverse lg:flex-row items-center justify-between py-16 lg:py-20 min-h-[700px] bg-gradient-to-br from-gray-50 to-white">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 bg-primaryRed rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-primaryRed rounded-full blur-3xl"></div>
        </div>
        
        {/* LEFT: Title and CTA */}
        <div className="flex-1 max-w-2xl px-6 lg:px-12 z-10">
          <div className="inline-flex items-center bg-primaryRed/10 text-primaryRed px-4 py-2 rounded-full text-sm font-semibold mb-6">
            ⚡ Spécialiste depuis 15 ans
          </div>
          <h1 className="text-4xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
            Autotronic performance,{" "}
            <span className="block text-primaryRed bg-gray-100 px-4 py-2 inline-block transform -rotate-1 shadow-lg rounded-lg">
              spécialiste
            </span>
            <span className="block mt-2">
              reprogrammation moteur à Sainte Geneviève (91)
            </span>
          </h1>
          <p className="text-xl lg:text-2xl text-gray-700 font-semibold mb-8 leading-relaxed">
            Plus de 15 ans d'expérience dans la reprogrammation moteur.
            <br />
            <span className="text-gray-600">Gagnez en puissance et économisez du carburant.</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:0629631976"
              className="inline-block bg-primaryRed rounded-lg px-8 py-4 text-white text-xl font-black shadow-xl hover:bg-red-600 transition-all duration-300 hover:scale-105 text-center"
            >
              📞 06 29 63 19 76
            </a>
            <a
              href="#services"
              className="inline-block bg-white border-2 border-primaryRed text-primaryRed rounded-lg px-8 py-4 text-xl font-black hover:bg-primaryRed hover:text-white transition-all duration-300 text-center"
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
