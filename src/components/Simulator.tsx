
import { useState } from "react";

// Options (dans une vraie app, récupérés d'une API)
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

  // Met à jour modèles selon la marque
  const handleMarque = (val: string) => {
    setMarque(val);
    setModele("");
    setMot("");
  };

  // Met à jour motorisation selon le modèle
  const handleModele = (val: string) => {
    setModele(val);
    setMot("");
  };

  return (
    <div className="absolute right-10 top-[calc(42%)] translate-y-[-50%] bg-white rounded-xl shadow-lg px-6 py-6 z-20 min-w-[440px] w-[440px] max-w-full animate-fade-in font-sans">
      <div className="grid grid-cols-3 gap-2 mb-4">
        <select
          className="border border-gray-200 rounded-lg px-4 py-3 text-gray-700 font-medium focus:outline-none focus:ring-2 focus:ring-primaryRed appearance-none"
          value={marque}
          onChange={e => handleMarque(e.target.value)}
        >
          <option value="">Marque</option>
          {marques.map(m => (
            <option key={m} value={m}>{m}</option>
          ))}
        </select>
        <select
          className="border border-gray-200 rounded-lg px-4 py-3 text-gray-700 font-medium focus:outline-none focus:ring-2 focus:ring-primaryRed appearance-none"
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
          className="border border-gray-200 rounded-lg px-4 py-3 text-gray-700 font-medium focus:outline-none focus:ring-2 focus:ring-primaryRed appearance-none"
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
        className="w-full bg-primaryRed text-white font-bold text-base py-3 rounded-lg shadow hover:bg-[#d32f2f] transition"
        onClick={() => alert(`Recherche : ${marque} / ${modele} / ${mot}`)}
        disabled={!(marque && modele && mot)}
      >
        Rechercher
      </button>
    </div>
  );
};

export default Simulator;
