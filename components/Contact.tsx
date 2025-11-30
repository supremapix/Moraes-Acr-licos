import React, { useState } from 'react';
import { COMPANY_INFO } from '../constants';
import { Send, MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Domos e Clarabóias',
    message: '',
    whatsappOptIn: true
  });

  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [shake, setShake] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Basic validation check
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setShake(true);
      setTimeout(() => setShake(false), 500); // Reset shake after animation
      setIsSubmitting(false);
      // Mark all as touched to show errors
      setTouched({
        name: true,
        email: true,
        phone: true,
        message: true
      });
      return;
    }
    
    // Constructing message for WhatsApp
    const message = `Olá! Vim do site e gostaria de solicitar um orçamento:
    
*Nome:* ${formData.name}
*E-mail:* ${formData.email}
*Telefone:* ${formData.phone}
*Assunto:* ${formData.subject}
*Mensagem:* ${formData.message}
    `;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappClean}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    setIsSubmitting(false);
  };

  const getInputClasses = (fieldName: string) => {
    const hasError = touched[fieldName] && !formData[fieldName as keyof typeof formData];
    return `w-full px-4 py-3 rounded-lg border outline-none transition-all duration-300 ease-in-out 
      ${hasError 
        ? 'border-red-500 ring-2 ring-red-200 focus:border-red-500 focus:ring-red-200 animate-shake' 
        : 'border-gray-300 focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue focus:shadow-lg focus:scale-[1.01]'
      }`;
  };

  return (
    <section id="contato" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Form Side */}
          <div>
            <h2 className="text-brand-blue font-bold uppercase tracking-wider mb-2 text-sm">Fale Conosco</h2>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-gray-800 mb-6">Solicite Seu Orçamento</h3>
            <p className="text-gray-600 mb-8">Preencha o formulário abaixo e entraremos em contato o mais breve possível via WhatsApp.</p>
            
            <form onSubmit={handleSubmit} className={`space-y-5 ${shake ? 'animate-shake' : ''}`} noValidate>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nome Completo *</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={getInputClasses('name')}
                  placeholder="Seu nome"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">E-mail *</label>
                    <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={getInputClasses('email')}
                    placeholder="seu@email.com"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Telefone/WhatsApp *</label>
                    <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={getInputClasses('phone')}
                    placeholder="(41) 99999-9999"
                    />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Assunto</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 outline-none transition-all duration-300 ease-in-out focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue focus:shadow-lg focus:scale-[1.01] bg-white"
                >
                  <option>Domos e Clarabóias</option>
                  <option>Corte a Laser</option>
                  <option>Displays e Expositores</option>
                  <option>Chapas Acrílicas</option>
                  <option>Gravação a Laser</option>
                  <option>Placas Personalizadas</option>
                  <option>Outros Serviços</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Mensagem *</label>
                <textarea
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  rows={4}
                  className={getInputClasses('message')}
                  placeholder="Descreva seu projeto ou dúvida..."
                ></textarea>
              </div>

              <div className="flex items-center group cursor-pointer">
                  <input
                    type="checkbox"
                    id="whatsappOptIn"
                    checked={formData.whatsappOptIn}
                    onChange={() => setFormData(prev => ({...prev, whatsappOptIn: !prev.whatsappOptIn}))}
                    className="h-4 w-4 text-brand-blue rounded border-gray-300 focus:ring-brand-blue transition-colors"
                  />
                  <label htmlFor="whatsappOptIn" className="ml-2 text-sm text-gray-600 group-hover:text-brand-blue transition-colors cursor-pointer">
                    Aceito receber contato por WhatsApp
                  </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 transform hover:-translate-y-1 active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <Send size={20} />
                {isSubmitting ? 'Enviando...' : 'Enviar Orçamento via WhatsApp'}
              </button>
            </form>
          </div>

          {/* Contact Info & Map Side */}
          <div className="flex flex-col gap-8">
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-bold text-xl text-gray-800 mb-6">Informações de Contato</h4>
                <div className="space-y-4">
                    <div className="flex items-start gap-4">
                        <div className="bg-white p-2 rounded-full shadow-sm text-brand-orange">
                            <MapPin size={20} />
                        </div>
                        <div>
                            <p className="font-bold text-gray-800">Endereço</p>
                            <p className="text-gray-600 text-sm">{COMPANY_INFO.address}</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="bg-white p-2 rounded-full shadow-sm text-brand-orange">
                            <Phone size={20} />
                        </div>
                        <div>
                            <p className="font-bold text-gray-800">Telefone</p>
                            <a href={`tel:${COMPANY_INFO.phoneClean}`} className="text-gray-600 text-sm hover:text-brand-blue">{COMPANY_INFO.phone}</a>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="bg-white p-2 rounded-full shadow-sm text-brand-orange">
                            <Mail size={20} />
                        </div>
                        <div>
                            <p className="font-bold text-gray-800">E-mail</p>
                            <a href={`mailto:${COMPANY_INFO.email}`} className="text-gray-600 text-sm hover:text-brand-blue">{COMPANY_INFO.email}</a>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="bg-white p-2 rounded-full shadow-sm text-brand-orange">
                            <Clock size={20} />
                        </div>
                        <div>
                            <p className="font-bold text-gray-800">Horário de Atendimento</p>
                            <p className="text-gray-600 text-sm">Segunda a Sexta: 08:00 - 18:00</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="h-[300px] w-full bg-gray-200 rounded-xl overflow-hidden shadow-lg border-4 border-white hover:border-brand-gray transition-colors duration-300">
                 <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.242728929949!2d-49.2084779!3d-25.4297125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce54e1814690d%3A0x6295514088a53162!2sR.%20Manoel%20Lucas%20Evangelista%20Neto%2C%20168%20-%20Vila%20Maria%20Antonieta%2C%20Pinhais%20-%20PR%2C%2083326-690!5e0!3m2!1spt-BR!2sbr!4v1709400000000!5m2!1spt-BR!2sbr" 
                    width="100%" 
                    height="100%" 
                    style={{border:0}} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;