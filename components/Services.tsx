import React from 'react';
import { SERVICES, COMPANY_INFO } from '../constants';
import { Zap, Monitor, Layers, Sun } from 'lucide-react';

const iconMap = {
  laser: Zap,
  display: Monitor,
  sheet: Layers,
  dome: Sun,
  engraving: Zap // Fallback
};

const Services: React.FC = () => {
  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-brand-blue font-bold uppercase tracking-wider mb-2 text-sm">O que fazemos</h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold text-gray-800">Nossos Principais Serviços</h3>
          <div className="w-24 h-1 bg-brand-orange mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon] || Zap;
            return (
              <div key={service.id} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 group border-b-4 border-transparent hover:border-brand-orange">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-blue transition-colors duration-300">
                  <Icon className="w-8 h-8 text-brand-blue group-hover:text-white transition-colors duration-300" />
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h4>
                <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                  {service.description}
                </p>
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsappClean}?text=Gostaria%20de%20saber%20mais%20sobre%20${encodeURIComponent(service.title)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-brand-blue font-semibold text-sm hover:text-brand-orange flex items-center gap-1 transition-colors"
                >
                  Saiba Mais <span>&rarr;</span>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;