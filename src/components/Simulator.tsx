
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

// Marque, Modèle, Motorisation data (to be expanded)
const marques = ["Audi", "BMW", "Peugeot"];
const modeles: { [key: string]: string[] } = {
  Audi: ["A3", "A4", "A6"],
  BMW: ["320i", "330d"],
  Peugeot: ["208", "308"],
};
const motorisations: { [key: string]: string[] } = {
  "A6": ["2.0 TDi DPF 140ch Diesel", "2.7 V6 TDi 180ch Diesel"],
  "320i": ["2.0 Turbo Essence 170ch"],
  "208": ["1.2 PureTech 110ch Essence"],
};

const Simulator = () => {
  const [marque, setMarque] = useState("");
  const [modele, setModele] = useState("");
  const [mot, setMot] = useState("");

  const handleMarque = (val: string) => {
    setMarque(val);
    setModele("");
    setMot("");
  };
  const handleModele = (val: string) => {
    setModele(val);
    setMot("");
  };

  // For button animation/UX; optionally expand features later
  const disabled = !(marque && modele && mot);

  return (
    <div className="w-full flex flex-col items-center">
      <Card className="w-full max-w-xl bg-white/95 border-2 border-primaryRed/25 shadow-2xl rounded-3xl p-0 md:px-8 py-6 
        animate-fade-in backdrop-blur-md md:mt-8">
        <CardHeader className="pb-3 px-0">
          <CardTitle className="text-2xl md:text-3xl font-black text-primaryRed drop-shadow-sm tracking-wide text-center">
            Simulateur de performance
          </CardTitle>
        </CardHeader>
        <CardContent className="px-0">
          <form
            className="flex flex-col gap-6"
            onSubmit={e => {
              e.preventDefault();
              alert(`Recherche : ${marque} / ${modele} / ${mot}`);
            }}
          >
            {/* Steps */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {/* Marque */}
              <div className="relative group">
                <select
                  className="peer border-2 border-gray-200 rounded-xl px-5 py-3 w-full text-gray-800 text-base font-bold focus:outline-none focus:ring-2 focus:ring-primaryRed focus:border-primaryRed appearance-none bg-gray-50 transition"
                  value={marque}
                  onChange={e => handleMarque(e.target.value)}
                >
                  <option value="">Marque</option>
                  {marques.map(m => (
                    <option key={m} value={m}>{m}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
              </div>
              {/* Modele */}
              <div className="relative group">
                <select
                  className="peer border-2 border-gray-200 rounded-xl px-5 py-3 w-full text-gray-800 text-base font-bold focus:outline-none focus:ring-2 focus:ring-primaryRed focus:border-primaryRed appearance-none bg-gray-50 transition"
                  value={modele}
                  onChange={e => handleModele(e.target.value)}
                  disabled={!marque}
                >
                  <option value="">Modèle</option>
                  {marque && modeles[marque]?.map(mod => (
                    <option key={mod} value={mod}>{mod}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
              </div>
              {/* Motorisation */}
              <div className="relative group">
                <select
                  className="peer border-2 border-gray-200 rounded-xl px-5 py-3 w-full text-gray-800 text-base font-bold focus:outline-none focus:ring-2 focus:ring-primaryRed focus:border-primaryRed appearance-none bg-gray-50 transition"
                  value={mot}
                  onChange={e => setMot(e.target.value)}
                  disabled={!modele}
                >
                  <option value="">Motorisation</option>
                  {modele && motorisations[modele]?.map(motor => (
                    <option key={motor} value={motor}>{motor}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
              </div>
            </div>
            {/* CTA */}
            <Button
              type="submit"
              className={`w-full bg-primaryRed font-black text-lg py-3 rounded-xl shadow-lg hover:bg-[#d32f2f] hover:scale-105 transition active:scale-95 ${disabled ? 'opacity-60 pointer-events-none' : ''}`}
              disabled={disabled}
              size="lg"
            >
              Rechercher
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
export default Simulator;
