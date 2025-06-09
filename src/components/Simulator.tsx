
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const marques = ["Alfa Romeo", "Audi", "BMW", "Mercedes", "Peugeot", "Renault", "Volkswagen"];

const modeles: { [key: string]: string[] } = {
  "Alfa Romeo": ["147", "156", "159", "166", "4C", "Brera", "CrossWagon", "Giulia", "Giulietta", "GT", "MiTo", "Spider"],
  "Audi": ["A1", "A3", "A4", "A5", "A6", "A7", "A8", "Q3", "Q5", "Q7", "TT"],
  "BMW": ["Série 1", "Série 3", "Série 5", "Série 7", "X1", "X3", "X5", "Z4"],
  "Mercedes": ["Classe A", "Classe B", "Classe C", "Classe E", "Classe S", "CLA", "GLA", "GLB"],
  "Peugeot": ["206", "207", "208", "307", "308", "407", "508", "2008", "3008", "5008"],
  "Renault": ["Clio", "Megane", "Scenic", "Laguna", "Espace", "Captur", "Kadjar"],
  "Volkswagen": ["Golf", "Polo", "Passat", "Tiguan", "Touran", "Jetta", "Arteon"]
};

const versions: { [key: string]: string[] } = {
  "147": ["1.6 TS 120ch", "2.0 TS 150ch", "1.9 JTD 115ch", "1.9 JTD 140ch"],
  "A3": ["1.4 TFSI 125ch", "1.8 TFSI 180ch", "2.0 TDI 140ch", "2.0 TDI 170ch"],
  "Série 3": ["320i 170ch", "325i 218ch", "320d 163ch", "330d 231ch"],
  "208": ["1.2 PureTech 82ch", "1.2 PureTech 110ch", "1.6 HDI 92ch", "1.6 HDI 115ch"]
};

const Simulator = () => {
  const [marque, setMarque] = useState("");
  const [modele, setModele] = useState("");
  const [version, setVersion] = useState("");

  const handleMarqueChange = (value: string) => {
    setMarque(value);
    setModele("");
    setVersion("");
  };

  const handleModeleChange = (value: string) => {
    setModele(value);
    setVersion("");
  };

  const handleVersionChange = (value: string) => {
    setVersion(value);
  };

  const isDisabled = !(marque && modele && version);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isDisabled) {
      alert(`Recherche pour: ${marque} ${modele} - ${version}`);
    }
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
              <SelectContent className="bg-white border-2 border-gray-200 rounded-lg shadow-xl max-h-60">
                {marques.map((m) => (
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
              <SelectContent className="bg-white border-2 border-gray-200 rounded-lg shadow-xl max-h-60">
                {marque && modeles[marque]?.map((mod) => (
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
              <SelectContent className="bg-white border-2 border-gray-200 rounded-lg shadow-xl max-h-60">
                {modele && versions[modele]?.map((ver) => (
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
          
          {/* Rechercher Button */}
          <Button
            type="submit"
            className={`w-full bg-primaryRed hover:bg-red-600 font-black text-white text-xl py-6 rounded-lg transition-all duration-300 ${
              isDisabled 
                ? 'opacity-50 cursor-not-allowed' 
                : 'hover:scale-105 shadow-xl'
            }`}
            disabled={isDisabled}
          >
            Rechercher
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default Simulator;
