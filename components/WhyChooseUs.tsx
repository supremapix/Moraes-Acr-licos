import React from 'react';
import { Award, Cpu, Layers, UserCheck, Star, Clock } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const reasons = [
    { icon: Award, title: "Experiência e Qualidade", desc: "25 anos oferecendo produtos de alta qualidade sob medida." },
    { icon: Cpu, title: "Tecnologia de Ponta", desc: "Equipamentos de corte a laser de última geração." },
    { icon: Layers, title: "Diversidade de Produtos", desc: "Domos, clarabóias, displays e peças técnicas." },
    { icon: UserCheck, title: "Atendimento Personalizado", desc: "Auxiliamos em todas as etapas do projeto." },
    { icon: Star, title: "Materiais de Primeira", desc: "Trabalhamos apenas com matéria-prima premium." },
    { icon: Clock, title: "Prazos Cumpridos", desc: "Compromisso com entrega pontual." },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-800">
            Por que escolher a <span className="text-brand-blue">Moraes Acrílicos?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, idx) => (
            <div key={idx} className="flex gap-4 p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-all hover:bg-blue-50/50">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-brand-orange/10 text-brand-orange rounded-lg flex items-center justify-center">
                  <reason.icon size={24} />
                </div>
              </div>
              <div>
                <h4 className="font-bold text-lg text-gray-800 mb-1">{reason.title}</h4>
                <p className="text-gray-600 text-sm">{reason.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;