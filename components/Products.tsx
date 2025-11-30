import React, { useState } from 'react';
import { PRODUCTS, COMPANY_INFO } from '../constants';
import { MessageCircle, Share2, X, Phone, Mail } from 'lucide-react';
import { ProductItem } from '../types';

const Products: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [shareMenuOpen, setShareMenuOpen] = useState<string | null>(null);

  const openModal = (product: ProductItem) => {
    setSelectedProduct(product);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProduct(null);
    document.body.style.overflow = 'auto';
  };

  const toggleShareMenu = (e: React.MouseEvent, productId: string) => {
    e.stopPropagation();
    if (shareMenuOpen === productId) {
        setShareMenuOpen(null);
    } else {
        setShareMenuOpen(productId);
    }
  };

  const handleShare = (e: React.MouseEvent, product: ProductItem, type: 'whatsapp' | 'email') => {
    e.stopPropagation();
    setShareMenuOpen(null);
    
    const shareText = `Confira este produto da Moraes Acrílicos: ${product.title} - ${product.description}`;
    const shareUrl = window.location.href;

    if (type === 'whatsapp') {
        const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`;
        window.open(whatsappUrl, '_blank');
    } else if (type === 'email') {
        const mailtoUrl = `mailto:?subject=${encodeURIComponent(`Conheça: ${product.title}`)}&body=${encodeURIComponent(`${shareText}\n\nVeja mais em: ${shareUrl}`)}`;
        window.location.href = mailtoUrl;
    }
  };

  const handleNativeShare = async (e: React.MouseEvent, product: ProductItem) => {
      e.stopPropagation();
      const shareData = {
        title: `Moraes Acrílicos - ${product.title}`,
        text: `Confira este produto: ${product.title} - ${product.description}`,
        url: window.location.href,
      };

      if (navigator.share) {
        try {
            await navigator.share(shareData);
        } catch (err) {
            console.log('Error sharing', err);
        }
      } else {
          toggleShareMenu(e, product.id);
      }
  }

  // Close share menu when clicking outside
  React.useEffect(() => {
      const handleClickOutside = () => setShareMenuOpen(null);
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <section id="produtos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-brand-blue font-bold uppercase tracking-wider mb-2 text-sm">Catálogo</h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold text-gray-800">Produtos e Aplicações</h3>
          <div className="w-24 h-1 bg-brand-orange mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.map((product) => (
            <div 
                key={product.id} 
                onClick={() => openModal(product)}
                className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer relative"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  loading="lazy"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-semibold border border-white px-4 py-2 rounded-full text-sm flex items-center gap-2 backdrop-blur-sm hover:bg-white hover:text-black transition-colors">
                        Ver Detalhes
                    </span>
                </div>
              </div>
              <div className="p-5 relative">
                <div className="flex justify-between items-start mb-2 relative">
                    <h4 className="font-bold text-gray-800 text-lg group-hover:text-brand-blue transition-colors pr-8">{product.title}</h4>
                    
                    <div className="relative">
                        <button 
                            onClick={(e) => handleNativeShare(e, product)}
                            className="text-gray-400 hover:text-brand-orange transition-colors p-1"
                            aria-label="Compartilhar produto"
                        >
                            <Share2 size={18} />
                        </button>
                        
                        {/* Custom Share Menu Fallback */}
                        {shareMenuOpen === product.id && (
                            <div className="absolute right-0 top-8 bg-white shadow-xl rounded-lg p-2 z-20 border border-gray-100 w-40 animate-fade-in">
                                <button 
                                    onClick={(e) => handleShare(e, product, 'whatsapp')}
                                    className="w-full flex items-center gap-2 text-sm text-gray-700 hover:bg-gray-50 p-2 rounded transition-colors text-left"
                                >
                                    <MessageCircle size={14} className="text-[#25D366]" /> WhatsApp
                                </button>
                                <button 
                                    onClick={(e) => handleShare(e, product, 'email')}
                                    className="w-full flex items-center gap-2 text-sm text-gray-700 hover:bg-gray-50 p-2 rounded transition-colors text-left"
                                >
                                    <Mail size={14} className="text-gray-500" /> E-mail
                                </button>
                            </div>
                        )}
                    </div>
                </div>
                <p className="text-sm text-gray-600 line-clamp-2">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in" onClick={closeModal}>
          <div 
            className="bg-white rounded-2xl w-full max-w-4xl overflow-hidden shadow-2xl flex flex-col md:flex-row relative animate-slide-up max-h-[90vh] md:max-h-auto overflow-y-auto md:overflow-visible"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full transition-colors backdrop-blur-sm"
            >
                <X size={24} />
            </button>

            {/* Image Gallery Area (Single Image for now) */}
            <div className="w-full md:w-1/2 bg-gray-100 h-[300px] md:h-auto shrink-0">
                <img 
                    src={selectedProduct.image} 
                    alt={selectedProduct.title} 
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Content Area */}
            <div className="w-full md:w-1/2 p-8 flex flex-col">
                <h3 className="text-3xl font-display font-bold text-gray-800 mb-2">{selectedProduct.title}</h3>
                <div className="w-16 h-1 bg-brand-orange rounded-full mb-6"></div>
                
                <div className="flex-grow">
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                        {selectedProduct.description}
                    </p>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mb-6">
                        <h5 className="font-semibold text-brand-darkBlue mb-2 flex items-center gap-2">
                            <span className="w-2 h-2 bg-brand-orange rounded-full"></span>
                            Destaques:
                        </h5>
                        <ul className="text-sm text-gray-700 space-y-1 ml-4 list-disc">
                            <li>Material de alta resistência e durabilidade.</li>
                            <li>Acabamento premium com corte a laser.</li>
                            <li>Disponível sob medida para seu projeto.</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-auto space-y-3 pt-6 md:pt-0">
                    <p className="text-sm text-gray-500 italic mb-2">Gostou deste produto? Fale com um especialista agora mesmo.</p>
                    <a 
                        href={`https://wa.me/${COMPANY_INFO.whatsappClean}?text=Olá, vi o produto *${encodeURIComponent(selectedProduct.title)}* no site e gostaria de um orçamento.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-transform hover:scale-[1.02] shadow-md"
                    >
                        <MessageCircle size={20} />
                        Cotar via WhatsApp
                    </a>
                    <a 
                        href={`tel:${COMPANY_INFO.phoneClean}`}
                        className="w-full bg-brand-blue hover:bg-brand-darkBlue text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-transform hover:scale-[1.02] shadow-md"
                    >
                        <Phone size={20} />
                        Ligar Agora
                    </a>
                </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Products;