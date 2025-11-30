import React from 'react';
import { CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    "Experiência de 25 anos",
    "Matéria-prima de alta qualidade",
    "Tecnologia de corte a laser",
    "Atendimento personalizado",
    "Entrega ágil",
    "Projetos sob medida"
  ];

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image Side */}
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1622340337537-a5f187383e32?q=80&w=800&auto=format&fit=crop"
                alt="Tecnologia de Corte a Laser Moraes Acrílicos"
                className="rounded-lg shadow-xl w-full object-cover h-[400px] md:h-[500px]"
              />
              <div className="absolute -bottom-6 -right-6 bg-brand-orange text-white p-6 rounded-lg shadow-lg hidden md:block">
                <p className="text-4xl font-bold font-display">25</p>
                <p className="text-sm uppercase tracking-wider font-semibold">Anos de<br/>Experiência</p>
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-brand-blue font-bold uppercase tracking-wider mb-2 text-sm">Sobre Nós</h2>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-gray-800 mb-6">
              25 Anos de Experiência em <span className="text-brand-orange">Acrílicos</span>
            </h3>

            <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
              <p>
                A <strong>MORAES ACRÍLICOS</strong> está no mercado de produtos em acrílicos há 25 anos, sempre utilizando matérias-primas da mais alta qualidade e acabamento aprimorado.
              </p>
              <p>
                Nossa especialidade é a fabricação e comercialização de domos e clarabóias em acrílico, projetados para iluminar ambientes internos. Oferecemos soluções autolimpantes que aproveitam a água da chuva, dispensando manutenção constante.
              </p>
              <p>
                Atendemos diversos segmentos: comunicação visual, decoração, construção civil, peças técnicas, projetos especiais, displays, troféus e brindes personalizados.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="text-brand-orange w-5 h-5 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;