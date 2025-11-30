import React from 'react';

const LaserEngraving: React.FC = () => {
  return (
    <section className="py-20 bg-brand-darkBlue text-white relative overflow-hidden">
        {/* Background Pattern Overlay */}
        <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
        }}></div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
          Gravação a Laser em Acrílicos
        </h2>
        <p className="text-lg text-blue-100 max-w-3xl mx-auto mb-10 leading-relaxed">
          Serviço especializado de gravação a laser com precisão e detalhamento. Personalize placas de sinalização, troféus, brindes corporativos e muito mais. Nossa tecnologia avançada garante durabilidade e resistência.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { title: "Alta Precisão", desc: "Cortes milimétricos" },
            { title: "Design Único", desc: "Acabamento Premium" },
            { title: "Durabilidade", desc: "Resistente a riscos" },
            { title: "Versatilidade", desc: "Diversas cores" }
          ].map((feature, idx) => (
            <div key={idx} className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
              <h4 className="font-bold text-xl mb-1">{feature.title}</h4>
              <p className="text-sm text-blue-200">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LaserEngraving;