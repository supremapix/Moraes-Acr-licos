import React from 'react';
import { GALLERY_IMAGES } from '../constants';

const Gallery: React.FC = () => {
  // Use the gallery images directly, ensuring we have enough to scroll
  // If the list is short, we duplicate it. If it's huge (like now), duplicating once is enough for a smooth loop.
  const displayImages = [...GALLERY_IMAGES, ...GALLERY_IMAGES];

  return (
    <section id="galeria" className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4 mb-8 text-center">
        <h2 className="text-brand-blue font-bold uppercase tracking-wider mb-2 text-sm">Nosso Portfólio</h2>
        <h3 className="text-3xl md:text-4xl font-display font-bold text-gray-800">Galeria de Projetos Realizados</h3>
        <div className="w-24 h-1 bg-brand-orange mx-auto mt-4 rounded-full"></div>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Confira abaixo algumas das obras, produtos e serviços entregues pela Moraes Acrílicos. Qualidade que você pode ver.
        </p>
      </div>

      <div className="relative w-full overflow-hidden py-8">
        {/* Gradient Overlay Left */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        
        {/* Gradient Overlay Right */}
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        {/* Slider Track */}
        <div className="gallery-track animate-scroll hover:[animation-play-state:paused]">
          {displayImages.map((img, index) => (
            <div 
              key={`${index}-${img}`} 
              className="flex-shrink-0 w-64 h-48 md:w-80 md:h-64 mx-2 md:mx-4 rounded-xl overflow-hidden shadow-md border border-gray-100 relative group bg-gray-100"
            >
              <img 
                src={img} 
                alt={`Galeria Moraes Acrílicos - Projeto ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="text-center mt-4">
        <p className="text-sm text-gray-500 italic">Arraste para o lado ou aguarde a animação para ver mais fotos.</p>
      </div>
    </section>
  );
};

export default Gallery;