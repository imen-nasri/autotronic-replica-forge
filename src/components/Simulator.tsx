
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

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

  const disabled = !(marque && modele && mot);

  return (
    <Card className="w-full max-w-lg bg-white shadow-2xl rounded-2xl overflow-hidden border-none">
      <CardHeader className="bg-white text-center py-6">
        <CardTitle className="text-2xl lg:text-3xl font-black text-primaryRed">
          Simulateur de performance
        </CardTitle>
      </CardHeader>
      <CardContent className="p-8 bg-white">
        <form
          className="space-y-6"
          onSubmit={e => {
            e.preventDefault();
            alert(`Recherche : ${marque} / ${modele} / ${mot}`);
          }}
        >
          {/* Dropdowns */}
          <div className="grid grid-cols-1 gap-4">
            {/* Marque */}
            <div className="relative">
              <select
                className="w-full border-2 border-gray-300 rounded-lg px-4 py-4 text-gray-700 font-semibold focus:outline-none focus:border-primaryRed appearance-none bg-gray-50 text-lg"
                value={marque}
                onChange={e => handleMarque(e.target.value)}
              >
                <option value="">Marque</option>
                {marques.map(m => (
                  <option key={m} value={m}>{m}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" size={20} />
            </div>
            
            {/* Modele */}
            <div className="relative">
              <select
                className="w-full border-2 border-gray-300 rounded-lg px-4 py-4 text-gray-700 font-semibold focus:outline-none focus:border-primaryRed appearance-none bg-gray-50 text-lg disabled:opacity-50"
                value={modele}
                onChange={e => handleModele(e.target.value)}
                disabled={!marque}
              >
                <option value="">Modèle</option>
                {marque && modeles[marque]?.map(mod => (
                  <option key={mod} value={mod}>{mod}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" size={20} />
            </div>
            
            {/* Motorisation */}
            <div className="relative">
              <select
                className="w-full border-2 border-gray-300 rounded-lg px-4 py-4 text-gray-700 font-semibold focus:outline-none focus:border-primaryRed appearance-none bg-gray-50 text-lg disabled:opacity-50"
                value={mot}
                onChange={e => setMot(e.target.value)}
                disabled={!modele}
              >
                <option value="">Motorisation</option>
                {modele && motorisations[modele]?.map(motor => (
                  <option key={motor} value={motor}>{motor}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" size={20} />
            </div>
          </div>
          
          {/* CTA Button */}
          <Button
            type="submit"
            className={`w-full bg-primaryRed hover:bg-red-600 font-black text-white text-xl py-6 rounded-lg transition-all duration-300 ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'}`}
            disabled={disabled}
          >
            Rechercher
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default Simulator;
