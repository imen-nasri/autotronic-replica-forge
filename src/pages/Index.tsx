
// Page d’accueil inspirée de https://www.autotronic-performance.fr/
import Header from "@/components/Header";
import Simulator from "@/components/Simulator";

// Hero BG placeholder
const HERO_BG = "/lovable-uploads/f8b0ae2c-9883-42d5-a018-69cc5dd23719.png";

const Index = () => {
  return (
    <div className="bg-lightGray min-h-screen w-full font-sans relative">
      <Header />
      {/* HERO SECTION */}
      <section
        className="relative overflow-hidden h-[480px] flex items-center"
        style={{
          background: `linear-gradient(90deg, rgba(36,38,43,0.86) 80%,rgba(36,38,43,0) 100%), url(${HERO_BG}) center/cover no-repeat`
        }}
      >
        <div className="container flex flex-col justify-center h-full z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg mb-5 max-w-[600px] animate-fade-in">
            Autotronic performance, spécialiste reprogrammation moteur à Sainte Geneviève (91)
          </h1>
          <p className="text-lg md:text-xl text-white/90 font-medium mb-6 max-w-lg animate-fade-in">
            Plus de 15 ans d&apos;expériences dans la reprogrammation moteur. <br />
            Gagnez en puissance moteur et économisez de l&apos;essence.
          </p>
          <a
            href="tel:0629631976"
            className="bg-primaryRed rounded-lg px-6 py-3 text-white text-xl font-bold shadow-lg w-max hover:bg-[#d32f2f] transition animate-fade-in"
          >
            06 29 63 19 76
          </a>
        </div>
        {/* Le simulateur : le plus important ! */}
        <Simulator />
      </section>
      {/* SECTION PRESENTATION */}
      <section className="container bg-white rounded-lg shadow-lg -mt-16 z-10 relative py-10 px-8">
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
