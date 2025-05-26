
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
  // etc
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

  return (
    <Card className="w-full max-w-md rounded-2xl shadow-xl border-[1.5px] border-primaryRed/20 animate-fade-in bg-white/95 backdrop-blur">
      <CardHeader>
        <CardTitle className="font-extrabold text-primaryRed text-xl">
          Simulateur de performance
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-4">
          <select
            className="border border-gray-200 rounded-lg px-4 py-3 text-gray-700 font-semibold focus:outline-none focus:ring-2 focus:ring-primaryRed disabled:bg-gray-50 transition"
            value={marque}
            onChange={e => handleMarque(e.target.value)}
          >
            <option value="">Marque</option>
            {marques.map(m => (
              <option key={m} value={m}>{m}</option>
            ))}
          </select>
          <select
            className="border border-gray-200 rounded-lg px-4 py-3 text-gray-700 font-semibold focus:outline-none focus:ring-2 focus:ring-primaryRed disabled:bg-gray-50 transition"
            value={modele}
            onChange={e => handleModele(e.target.value)}
            disabled={!marque}
          >
            <option value="">Modèle</option>
            {marque && modeles[marque]?.map(mod => (
              <option key={mod} value={mod}>{mod}</option>
            ))}
          </select>
          <select
            className="border border-gray-200 rounded-lg px-4 py-3 text-gray-700 font-semibold focus:outline-none focus:ring-2 focus:ring-primaryRed disabled:bg-gray-50 transition"
            value={mot}
            onChange={e => setMot(e.target.value)}
            disabled={!modele}
          >
            <option value="">Motorisation</option>
            {modele && motorisations[modele]?.map(motor => (
              <option key={motor} value={motor}>{motor}</option>
            ))}
          </select>
        </div>
        <button
          className="w-full bg-primaryRed text-white font-extrabold text-base py-3 rounded-lg shadow-md hover:bg-[#d32f2f] hover:scale-105 transition"
          onClick={() => alert(`Recherche : ${marque} / ${modele} / ${mot}`)}
          disabled={!(marque && modele && mot)}
        >
          Rechercher
        </button>
      </CardContent>
    </Card>
  );
};

export default Simulator;
