
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const carData = {
  "Alfa Romeo": {
    "Giulia": {
      "2.0 Turbo": ["2.0L Turbo I4 200ch", "2.0L Turbo I4 280ch"],
      "2.9 V6 Quadrifoglio": ["2.9L Twin-Turbo V6 510ch"]
    },
    "Stelvio": {
      "2.0 Turbo": ["2.0L Turbo I4 200ch", "2.0L Turbo I4 280ch"],
      "2.9 V6 Quadrifoglio": ["2.9L Twin-Turbo V6 510ch"]
    },
    "Tonale": {
      "1.5 Mild Hybrid": ["1.5L Mild Hybrid 130ch"],
      "1.3 PHEV": ["1.3L Plug-in Hybrid 272ch"],
      "1.6 Diesel": ["1.6L Diesel 130ch"]
    }
  },
  "Audi": {
    "A3": {
      "1.4 TFSI": ["1.4L TFSI 125ch", "1.4L TFSI 150ch"],
      "2.0 TDI": ["2.0L TDI 140ch", "2.0L TDI 170ch"],
      "2.0 TFSI": ["2.0L TFSI 190ch", "2.0L TFSI 245ch"]
    },
    "A4": {
      "2.0 TFSI": ["2.0L TFSI 190ch", "2.0L TFSI 245ch"],
      "2.0 TDI": ["2.0L TDI 150ch", "2.0L TDI 190ch"],
      "3.0 TFSI": ["3.0L TFSI 340ch"]
    },
    "Q3": {
      "1.5 TFSI": ["1.5L TFSI 150ch"],
      "2.0 TFSI": ["2.0L TFSI 190ch", "2.0L TFSI 245ch"],
      "2.0 TDI": ["2.0L TDI 150ch"]
    }
  },
  "BMW": {
    "Série 3": {
      "320i": ["2.0L Turbo I4 184ch"],
      "330i": ["2.0L Turbo I4 258ch"],
      "320d": ["2.0L Diesel 190ch"],
      "330d": ["3.0L Diesel 265ch"]
    },
    "X3": {
      "xDrive20i": ["2.0L Turbo I4 184ch"],
      "xDrive30i": ["2.0L Turbo I4 252ch"],
      "xDrive20d": ["2.0L Diesel 190ch"],
      "xDrive30d": ["3.0L Diesel 265ch"]
    },
    "Série 5": {
      "520i": ["2.0L Turbo I4 184ch"],
      "530i": ["2.0L Turbo I4 252ch"],
      "520d": ["2.0L Diesel 190ch"],
      "530d": ["3.0L Diesel 265ch"]
    }
  },
  "Mercedes": {
    "Classe A": {
      "A200": ["1.3L Turbo I4 163ch"],
      "A250": ["2.0L Turbo I4 224ch"],
      "A180d": ["1.5L Diesel 116ch"],
      "A200d": ["2.0L Diesel 150ch"]
    },
    "Classe C": {
      "C200": ["1.5L Turbo I4 204ch"],
      "C300": ["2.0L Turbo I4 258ch"],
      "C220d": ["2.0L Diesel 200ch"],
      "C300d": ["2.0L Diesel 265ch"]
    },
    "GLC": {
      "GLC200": ["2.0L Turbo I4 197ch"],
      "GLC300": ["2.0L Turbo I4 258ch"],
      "GLC220d": ["2.0L Diesel 194ch"],
      "GLC300d": ["2.0L Diesel 245ch"]
    }
  },
  "Peugeot": {
    "208": {
      "1.2 PureTech": ["1.2L PureTech 75ch", "1.2L PureTech 100ch", "1.2L PureTech 130ch"],
      "1.5 BlueHDi": ["1.5L BlueHDi 100ch", "1.5L BlueHDi 130ch"],
      "e-208": ["Electrique 136ch"]
    },
    "308": {
      "1.2 PureTech": ["1.2L PureTech 110ch", "1.2L PureTech 130ch"],
      "1.6 PureTech": ["1.6L PureTech 180ch"],
      "1.5 BlueHDi": ["1.5L BlueHDi 130ch"],
      "PHEV": ["1.6L PHEV 225ch"]
    },
    "3008": {
      "1.2 PureTech": ["1.2L PureTech 130ch"],
      "1.6 PureTech": ["1.6L PureTech 180ch"],
      "1.5 BlueHDi": ["1.5L BlueHDi 130ch"],
      "PHEV": ["1.6L PHEV 300ch"]
    }
  },
  "Renault": {
    "Clio": {
      "1.0 TCe": ["1.0L TCe 90ch", "1.0L TCe 100ch"],
      "1.3 TCe": ["1.3L TCe 130ch", "1.3L TCe 160ch"],
      "1.5 Blue dCi": ["1.5L Blue dCi 85ch", "1.5L Blue dCi 115ch"],
      "E-Tech": ["1.6L E-Tech 140ch"]
    },
    "Captur": {
      "1.0 TCe": ["1.0L TCe 90ch", "1.0L TCe 100ch"],
      "1.3 TCe": ["1.3L TCe 130ch", "1.3L TCe 155ch"],
      "1.5 Blue dCi": ["1.5L Blue dCi 95ch", "1.5L Blue dCi 115ch"],
      "E-Tech PHEV": ["1.6L E-Tech PHEV 160ch"]
    },
    "Megane": {
      "1.3 TCe": ["1.3L TCe 140ch", "1.3L TCe 160ch"],
      "1.5 Blue dCi": ["1.5L Blue dCi 115ch"],
      "E-Tech Electric": ["Electrique 220ch", "Electrique 300ch"]
    }
  },
  "Volkswagen": {
    "Golf": {
      "1.0 TSI": ["1.0L TSI 110ch"],
      "1.5 TSI": ["1.5L TSI 130ch", "1.5L TSI 150ch"],
      "2.0 TSI": ["2.0L TSI 245ch GTI", "2.0L TSI 320ch R"],
      "2.0 TDI": ["2.0L TDI 115ch", "2.0L TDI 150ch"]
    },
    "Tiguan": {
      "1.5 TSI": ["1.5L TSI 130ch", "1.5L TSI 150ch"],
      "2.0 TSI": ["2.0L TSI 190ch"],
      "2.0 TDI": ["2.0L TDI 150ch", "2.0L TDI 200ch"],
      "eHybrid": ["1.4L TSI eHybrid 245ch"]
    },
    "Passat": {
      "1.5 TSI": ["1.5L TSI 150ch"],
      "2.0 TSI": ["2.0L TSI 190ch"],
      "2.0 TDI": ["2.0L TDI 150ch", "2.0L TDI 200ch"],
      "GTE": ["1.4L TSI GTE 218ch"]
    }
  }
};

const Simulator = () => {
  const [marque, setMarque] = useState("");
  const [modele, setModele] = useState("");
  const [version, setVersion] = useState("");
  const [moteur, setMoteur] = useState("");

  const handleMarqueChange = (value: string) => {
    setMarque(value);
    setModele("");
    setVersion("");
    setMoteur("");
  };

  const handleModeleChange = (value: string) => {
    setModele(value);
    setVersion("");
    setMoteur("");
  };

  const handleVersionChange = (value: string) => {
    setVersion(value);
    setMoteur("");
  };

  const handleMoteurChange = (value: string) => {
    setMoteur(value);
  };

  const isDisabled = !(marque && modele && version && moteur);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isDisabled) {
      alert(`Simulation pour: ${marque} ${modele} - ${version} - ${moteur}\n\nContacter MH AUTO Performance au 06 29 63 19 76 pour plus d'informations sur la reprogrammation de ce véhicule.`);
    }
  };

  const getModeles = () => {
    return marque ? Object.keys(carData[marque as keyof typeof carData] || {}) : [];
  };

  const getVersions = () => {
    if (!marque || !modele) return [];
    const marqueData = carData[marque as keyof typeof carData];
    return marqueData ? Object.keys(marqueData[modele as keyof typeof marqueData] || {}) : [];
  };

  const getMoteurs = () => {
    if (!marque || !modele || !version) return [];
    const marqueData = carData[marque as keyof typeof carData];
    if (!marqueData) return [];
    const modeleData = marqueData[modele as keyof typeof marqueData];
    if (!modeleData) return [];
    return modeleData[version as keyof typeof modeleData] || [];
  };

  return (
    <Card className="w-full max-w-lg bg-white shadow-2xl rounded-2xl overflow-hidden border-none">
      <CardHeader className="bg-white text-center py-6">
        <CardTitle className="text-2xl lg:text-3xl font-black text-primaryRed">
          Simulateur de performance
        </CardTitle>
      </CardHeader>
      <CardContent className="p-8 bg-white">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Marque Dropdown */}
          <div className="space-y-2">
            <Select value={marque} onValueChange={handleMarqueChange}>
              <SelectTrigger className="w-full h-14 border-2 border-gray-300 rounded-lg px-4 text-gray-700 font-semibold focus:border-primaryRed bg-gray-50 text-lg">
                <SelectValue placeholder="Marque" />
              </SelectTrigger>
              <SelectContent className="bg-white border-2 border-gray-200 rounded-lg shadow-xl max-h-60 z-50">
                {Object.keys(carData).map((m) => (
                  <SelectItem 
                    key={m} 
                    value={m}
                    className="text-gray-700 font-medium py-3 px-4 hover:bg-primaryRed/10 hover:text-primaryRed cursor-pointer"
                  >
                    {m}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Modele Dropdown */}
          <div className="space-y-2">
            <Select 
              value={modele} 
              onValueChange={handleModeleChange}
              disabled={!marque}
            >
              <SelectTrigger className="w-full h-14 border-2 border-gray-300 rounded-lg px-4 text-gray-700 font-semibold focus:border-primaryRed bg-gray-50 text-lg disabled:opacity-50 disabled:cursor-not-allowed">
                <SelectValue placeholder="Modèle" />
              </SelectTrigger>
              <SelectContent className="bg-white border-2 border-gray-200 rounded-lg shadow-xl max-h-60 z-50">
                {getModeles().map((mod) => (
                  <SelectItem 
                    key={mod} 
                    value={mod}
                    className="text-gray-700 font-medium py-3 px-4 hover:bg-primaryRed/10 hover:text-primaryRed cursor-pointer"
                  >
                    {mod}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Version Dropdown */}
          <div className="space-y-2">
            <Select 
              value={version} 
              onValueChange={handleVersionChange}
              disabled={!modele}
            >
              <SelectTrigger className="w-full h-14 border-2 border-gray-300 rounded-lg px-4 text-gray-700 font-semibold focus:border-primaryRed bg-gray-50 text-lg disabled:opacity-50 disabled:cursor-not-allowed">
                <SelectValue placeholder="Version" />
              </SelectTrigger>
              <SelectContent className="bg-white border-2 border-gray-200 rounded-lg shadow-xl max-h-60 z-50">
                {getVersions().map((ver) => (
                  <SelectItem 
                    key={ver} 
                    value={ver}
                    className="text-gray-700 font-medium py-3 px-4 hover:bg-primaryRed/10 hover:text-primaryRed cursor-pointer"
                  >
                    {ver}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Moteur Dropdown */}
          <div className="space-y-2">
            <Select 
              value={moteur} 
              onValueChange={handleMoteurChange}
              disabled={!version}
            >
              <SelectTrigger className="w-full h-14 border-2 border-gray-300 rounded-lg px-4 text-gray-700 font-semibold focus:border-primaryRed bg-gray-50 text-lg disabled:opacity-50 disabled:cursor-not-allowed">
                <SelectValue placeholder="Moteur" />
              </SelectTrigger>
              <SelectContent className="bg-white border-2 border-gray-200 rounded-lg shadow-xl max-h-60 z-50">
                {getMoteurs().map((mot) => (
                  <SelectItem 
                    key={mot} 
                    value={mot}
                    className="text-gray-700 font-medium py-3 px-4 hover:bg-primaryRed/10 hover:text-primaryRed cursor-pointer"
                  >
                    {mot}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          {/* Simuler Button */}
          <Button
            type="submit"
            className={`w-full bg-primaryRed hover:bg-red-600 font-black text-white text-xl py-6 rounded-lg transition-all duration-300 ${
              isDisabled 
                ? 'opacity-50 cursor-not-allowed' 
                : 'hover:scale-105 shadow-xl'
            }`}
            disabled={isDisabled}
          >
            Simuler la Performance
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default Simulator;
