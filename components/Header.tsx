import React, { useState } from 'react';
import { Phone, MessageCircle, Menu, X } from 'lucide-react';
import { COMPANY_INFO, NAV_LINKS } from '../constants';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed w-full z-40 bg-white shadow-md">
      {/* Top Bar */}
      <div className="bg-brand-blue text-white py-2 text-sm hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <p className="font-light">Especialistas em Acrílicos há 25 anos</p>
          <div className="flex gap-6">
            <a href={`tel:${COMPANY_INFO.phoneClean}`} className="flex items-center gap-2 hover:text-brand-orange transition-colors">
              <Phone size={16} />
              {COMPANY_INFO.phone}
            </a>
            <a href={COMPANY_INFO.whatsappLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-brand-orange transition-colors">
              <MessageCircle size={16} />
              {COMPANY_INFO.whatsapp}
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo Area */}
        <a href="#" className="flex flex-col">
          <span className="text-2xl md:text-3xl font-display font-bold text-brand-darkBlue tracking-tight">
            MORAES
            <span className="text-brand-orange"> ACRÍLICOS</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-gray-700 font-medium hover:text-brand-blue transition-colors relative group"
            >
              {link.label}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-brand-orange transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-brand-darkBlue p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
          <div className="flex flex-col p-4 gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-800 font-medium py-2 border-b border-gray-100 last:border-0 hover:text-brand-blue"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="flex flex-col gap-3 mt-2 pt-4 border-t border-gray-100">
               <a href={`tel:${COMPANY_INFO.phoneClean}`} className="flex items-center gap-2 text-brand-blue">
                <Phone size={16} />
                {COMPANY_INFO.phone}
              </a>
              <a href={COMPANY_INFO.whatsappLink} className="flex items-center gap-2 text-green-600 font-semibold">
                <MessageCircle size={16} />
                WhatsApp Agora
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;