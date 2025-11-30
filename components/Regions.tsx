import React from 'react';
import { MapPin } from 'lucide-react';

const Regions: React.FC = () => {
  const regions = [
    "Curitiba (Todas as regiões)",
    "Pinhais",
    "São José dos Pinhais",
    "Colombo",
    "Araucária",
    "Região Metropolitana"
  ];

  return (
    <section className="py-16 bg-brand-blue text-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="mb-8 md:mb-0 md:w-1/3">
          <h3 className="text-3xl font-display font-bold mb-4">Atendemos Curitiba e Região</h3>
          <p className="text-blue-100">Levamos qualidade e agilidade para onde você estiver.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:w-2/3">
            {regions.map((region, idx) => (
                <div key={idx} className="flex items-center gap-2 bg-white/10 p-3 rounded-lg backdrop-blur-sm">
                    <MapPin size={18} className="text-brand-orange" />
                    <span className="font-medium text-sm">{region}</span>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Regions;