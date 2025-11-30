import React from 'react';
import { COMPANY_INFO, NAV_LINKS } from '../constants';
import { Facebook, Instagram, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          
          {/* Column 1: About */}
          <div>
            <span className="text-2xl font-display font-bold text-white tracking-tight mb-4 block">
              MORAES
              <span className="text-brand-orange"> ACRÍLICOS</span>
            </span>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Há 25 anos fabricando produtos em acrílico de alta qualidade. Somos especialistas em transformar ideias em realidade com precisão e excelência.
            </p>
            <div className="flex gap-4">
                {/* Social Icons linked to WhatsApp with Google message as requested */}
                <a href={COMPANY_INFO.whatsappLink} target="_blank" className="bg-gray-800 hover:bg-brand-blue p-2 rounded-full transition-colors">
                    <Instagram size={20} />
                </a>
                <a href={COMPANY_INFO.whatsappLink} target="_blank" className="bg-gray-800 hover:bg-brand-blue p-2 rounded-full transition-colors">
                    <Facebook size={20} />
                </a>
            </div>
          </div>

          {/* Column 2: Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white border-l-4 border-brand-orange pl-3">Links Rápidos</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map(link => (
                <li key={link.label}>
                    <a href={link.href} className="text-gray-400 hover:text-brand-orange transition-colors flex items-center gap-2">
                        <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
                        {link.label}
                    </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
             <h4 className="text-xl font-bold mb-6 text-white border-l-4 border-brand-orange pl-3">Contato</h4>
             <ul className="space-y-4 text-gray-400">
                <li className="flex flex-col">
                    <span className="font-bold text-white text-sm">Endereço:</span>
                    {COMPANY_INFO.address}
                </li>
                <li className="flex flex-col">
                    <span className="font-bold text-white text-sm">Telefone:</span>
                    <a href={`tel:${COMPANY_INFO.phoneClean}`} className="hover:text-brand-orange">{COMPANY_INFO.phone}</a>
                </li>
                <li className="flex flex-col">
                    <span className="font-bold text-white text-sm">WhatsApp:</span>
                    <a href={COMPANY_INFO.whatsappLink} target="_blank" className="hover:text-brand-orange">{COMPANY_INFO.whatsapp}</a>
                </li>
                <li className="flex flex-col">
                    <span className="font-bold text-white text-sm">E-mail:</span>
                    <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-brand-orange">{COMPANY_INFO.email}</a>
                </li>
             </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
            <p className="text-gray-500 text-sm">
                &copy; {currentYear} {COMPANY_INFO.name} - Todos os direitos reservados.
            </p>
            
            <div className="text-gray-500 text-sm flex flex-col md:flex-row items-center gap-1 md:gap-2">
                <span className="flex items-center gap-1">
                    Feito com <Heart size={14} className="text-red-500 fill-red-500 animate-heart-beat" /> por
                </span>
                <a href="https://www.supremasite.com.br" target="_blank" rel="noopener noreferrer" className="text-brand-orange hover:text-white font-semibold transition-colors">
                    Suprema Mídia Express
                </a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;