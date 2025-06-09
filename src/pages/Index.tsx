import Header from "@/components/Header";
import Simulator from "@/components/Simulator";

const Index = () => {
  return (
    <div className="min-h-screen w-full font-sans">
      <Header />
      {/* HERO SECTION */}
      <section className="relative overflow-hidden flex flex-col-reverse lg:flex-row items-center justify-between py-16 lg:py-20 min-h-[600px] bg-white">
        {/* LEFT: Title and CTA */}
        <div className="flex-1 max-w-2xl px-6 lg:px-12 z-10">
          <h1 className="text-4xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
            Autotronic performance,{" "}
            <span className="block text-primaryRed bg-gray-100 px-4 py-2 inline-block transform -rotate-1 shadow-lg">
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
          <a
            href="tel:0629631976"
            className="inline-block bg-primaryRed rounded-none px-12 py-6 text-white text-2xl font-black shadow-2xl hover:bg-red-600 transition-all duration-300 hover:scale-105"
          >
            06 29 63 19 76
          </a>
        </div>
        
        {/* RIGHT: Simulator */}
        <div className="flex-1 flex items-start justify-end px-6 lg:px-12 mb-8 lg:mb-0">
          <Simulator />
        </div>
      </section>

      {/* SECTION PRESENTATION */}
      <section className="bg-gray-50 py-16">
        <div className="container max-w-4xl">
          <h2 className="text-3xl lg:text-4xl font-black mb-4 text-gray-900">
            AUTOTRONIC <span className="text-primaryRed">PERFORMANCE</span>
          </h2>
          <div className="text-xl text-gray-800 leading-relaxed">
            <p className="font-bold text-2xl mb-6 text-primaryRed">
              Reprogrammation &amp; Optimisation
            </p>
            <p className="text-lg leading-loose">
              Chez Autotronic Performance, nous sommes fiers d'être pleinement impliqués dans chaque projet de reprogrammation moteur.
              <br /><br />
              Notre expertise et notre passion nous permettent d'optimiser les performances de votre véhicule : plus de puissance, de couple, tout en réduisant la consommation.
              <br /><br />
              Faites confiance à plus de 15 ans d'expérience pour booster et protéger votre moteur !
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
