
import Header from "@/components/Header";
import Simulator from "@/components/Simulator";

const HERO_BG = "/lovable-uploads/f8b0ae2c-9883-42d5-a018-69cc5dd23719.png";

const Index = () => {
  return (
    <div className="min-h-screen w-full font-sans relative bg-gradient-to-br from-primaryRed/10 via-white to-gray-100">
      <Header />
      {/* HERO SECTION */}
      <section
        className="relative overflow-hidden flex flex-col-reverse lg:flex-row items-center lg:items-center justify-center py-10 lg:py-16"
        style={{
          minHeight: 530,
          background: `linear-gradient(90deg, rgba(229,57,53,0.15) 0%,rgba(36,38,43,0.12) 100%), url(${HERO_BG}) right/cover no-repeat`,
        }}
      >
        {/* LEFT: Title and CTA */}
        <div className="container flex flex-1 justify-center flex-col h-full z-10 max-w-2xl py-10 lg:py-20 px-4 lg:px-0">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primaryRed drop-shadow mb-5 animate-fade-in">
            Autotronic performance, spécialiste reprogrammation moteur à Sainte Geneviève (91)
          </h1>
          <p className="text-lg md:text-xl text-gray-900/80 font-medium mb-6 animate-fade-in">
            Plus de 15 ans d&apos;expérience dans la reprogrammation moteur.<br />
            Gagnez en puissance et économisez du carburant.
          </p>
          <a
            href="tel:0629631976"
            className="inline-block bg-primaryRed rounded-lg px-8 py-4 text-white text-xl font-extrabold shadow-lg hover:bg-[#d32f2f] transition hover:scale-105 animate-fade-in"
          >
            06 29 63 19 76
          </a>
        </div>
        {/* RIGHT: Simulator */}
        <div className="flex-1 flex items-center justify-center mt-0 mb-8 lg:mb-0 px-4 lg:px-0">
          <Simulator />
        </div>
      </section>

      {/* SECTION PRESENTATION */}
      <section className="container bg-white rounded-2xl shadow-2xl -mt-12 z-10 relative py-10 px-8 max-w-3xl border border-gray-100">
        <h2 className="text-2xl font-extrabold mb-1 font-sans">
          AUTOTRONIC <span className="text-primaryRed">PERFORMANCE</span>
        </h2>
        <div className="text-lg text-gray-700">
          <b>Reprogrammation &amp; Optimisation</b>
          <p className="mt-3">
            Chez Autotronic Performance, nous sommes fiers d&apos;être pleinement impliqués dans chaque projet de reprogrammation moteur.<br />
            Notre expertise et notre passion nous permettent d&apos;optimiser les performances de votre véhicule&nbsp;: plus de puissance, de couple, tout en réduisant la consommation.<br />
            Faites confiance à plus de 15 ans d&apos;expérience pour booster et protéger votre moteur !
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;
