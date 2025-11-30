import React, { useEffect, useState } from 'react';
import { COMPANY_INFO } from '../constants';
import { Mail, Phone, ChevronUp } from 'lucide-react';

const FloatingButtons: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed right-4 bottom-4 z-50 flex flex-col gap-3 items-end">
      {/* WhatsApp Button */}
      <a
        href={COMPANY_INFO.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 md:w-14 md:h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 group relative"
        aria-label="Fale conosco no WhatsApp"
      >
        <div className="absolute right-full mr-2 bg-white px-3 py-1.5 rounded-lg text-xs font-bold text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-md pointer-events-none transform translate-x-2 group-hover:translate-x-0">
          WhatsApp
        </div>
        {/* SVG for WhatsApp Brand Icon */}
        <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-8 md:h-8 fill-white" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.016 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>

      {/* Phone Button */}
      <a
        href={`tel:${COMPANY_INFO.phoneClean}`}
        className="w-12 h-12 md:w-14 md:h-14 bg-brand-blue rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 group relative"
        aria-label="Ligar agora"
      >
        <div className="absolute right-full mr-2 bg-white px-3 py-1.5 rounded-lg text-xs font-bold text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-md pointer-events-none transform translate-x-2 group-hover:translate-x-0">
          Ligar
        </div>
        <Phone className="w-6 h-6 md:w-8 md:h-8 text-white" />
      </a>

      {/* Email Button */}
      <a
        href={`mailto:${COMPANY_INFO.email}`}
        className="w-12 h-12 md:w-14 md:h-14 bg-brand-orange rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 group relative"
        aria-label="Enviar e-mail"
      >
        <div className="absolute right-full mr-2 bg-white px-3 py-1.5 rounded-lg text-xs font-bold text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-md pointer-events-none transform translate-x-2 group-hover:translate-x-0">
          E-mail
        </div>
        <Mail className="w-6 h-6 md:w-8 md:h-8 text-white" />
      </a>

      {/* Scroll Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="w-10 h-10 md:w-12 md:h-12 bg-gray-700/80 rounded-full flex items-center justify-center shadow-lg hover:bg-gray-900 transition-colors duration-300 mt-4 group relative"
          aria-label="Voltar ao topo"
        >
          <div className="absolute right-full mr-2 bg-white px-3 py-1.5 rounded-lg text-xs font-bold text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-md pointer-events-none transform translate-x-2 group-hover:translate-x-0">
            Voltar ao topo
          </div>
          <ChevronUp className="w-6 h-6 text-white" />
        </button>
      )}
    </div>
  );
};

export default FloatingButtons;