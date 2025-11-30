import { NavItem, ProductItem, ServiceItem, BlogPost } from './types';

export const COMPANY_INFO = {
  name: "Moraes Acrílicos",
  slogan: "Fabricação e comercialização de Domos e Clarabóias em Acrílico - Corte a Laser - 25 anos no mercado",
  address: "R. Manoel Lucas Evangelista Neto, 168 - Vila Carolina, Pinhais - PR, 83326-690",
  phone: "(41) 3665-7164",
  whatsapp: "(41) 99157-9124",
  whatsappClean: "5541991579124",
  phoneClean: "554136657164",
  email: "contato@moraesacrilicos.com.br",
  videoBgId: "OoorHB6btU0",
  // Link requested with Google attribution
  whatsappLink: "https://api.whatsapp.com/send?phone=5541991579124&text=Ol%C3%A1%2C%20achei%20seu%20site%20no%20*Google*%20e%20gostaria%20de%3A"
};

export const NAV_LINKS: NavItem[] = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Produtos", href: "#produtos" },
  { label: "Sobre Nós", href: "#sobre" },
  { label: "Blog", href: "#blog" },
  { label: "Contato", href: "#contato" },
];

export const SERVICES: ServiceItem[] = [
  {
    id: "corte-laser",
    title: "Corte a Laser em Acrílico",
    description: "Especializados na fabricação com corte a laser de alta precisão. Criamos peças personalizadas com acabamento impecável para diversos segmentos.",
    icon: "laser"
  },
  {
    id: "displays",
    title: "Displays e Expositores",
    description: "Displays de preço, expositores personalizados em acrílico para destacar seus produtos. Soluções criativas para comunicação visual.",
    icon: "display"
  },
  {
    id: "chapas",
    title: "Chapas Acrílicas",
    description: "Material de alta qualidade disponível em diversas cores e espessuras. Resistente, versátil e com excelente acabamento.",
    icon: "sheet"
  },
  {
    id: "domos",
    title: "Domos e Clarabóias",
    description: "Iluminação natural para seus ambientes. Fabricação de domos em acrílico leitoso e transparente com estrutura em alumínio.",
    icon: "dome"
  }
];

// Updated to match the specific images provided (Podiums, Domes, Urns, Signs)
export const PRODUCTS: ProductItem[] = [
  { 
    id: "domos-redondos", 
    title: "Domos e Clarabóias", 
    description: "Domos redondos, quadrados e piramidais para iluminação natural.", 
    image: "https://images.unsplash.com/photo-1520699697851-3dc68aa3a474?q=80&w=800&auto=format&fit=crop" 
  },
  { 
    id: "pulpitos", 
    title: "Púlpitos e Pódios", 
    description: "Púlpitos em acrílico transparente e personalizados para igrejas e eventos.", 
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop" // Generic podium/modern interior
  },
  { 
    id: "letreiros", 
    title: "Letreiros e Fachadas", 
    description: "Letras caixa, logotipos em acrílico e sinalização LED.", 
    image: "https://images.unsplash.com/photo-1563291074-2bf037e6f969?q=80&w=800&auto=format&fit=crop" 
  },
  { 
    id: "urnas", 
    title: "Urnas e Caixas", 
    description: "Urnas para sorteios, caixas organizadoras e de sugestões.", 
    image: "https://images.unsplash.com/photo-1616606103915-dea7be788566?q=80&w=800&auto=format&fit=crop" 
  },
  { 
    id: "displays", 
    title: "Displays e Expositores", 
    description: "Expositores de mesa, porta-folhetos e displays escalonados.", 
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop" 
  },
  { 
    id: "trofeus", 
    title: "Troféus e Medalhas", 
    description: "Troféus personalizados com corte a laser e gravação.", 
    image: "https://images.unsplash.com/photo-1590050252726-2489c447e8b2?q=80&w=800&auto=format&fit=crop" 
  },
  { 
    id: "corte-laser", 
    title: "Corte a Laser", 
    description: "Serviço de corte preciso para peças técnicas e decorativas.", 
    image: "https://images.unsplash.com/photo-1624821588855-a2266af6518e?q=80&w=800&auto=format&fit=crop" 
  },
  { 
    id: "chapas", 
    title: "Chapas de Acrílico", 
    description: "Venda de chapas em diversas cores (leitoso, cristal, coloridos).", 
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop" 
  },
  { 
    id: "pecas-tecnicas", 
    title: "Peças Técnicas", 
    description: "Desenvolvimento de peças sob medida conforme desenho.", 
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop" 
  },
  { 
    id: "domos-telha", 
    title: "Domos para Telhados", 
    description: "Modelos adaptáveis para telhados ondulados e planos.", 
    image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=800&auto=format&fit=crop" 
  },
  { 
    id: "placas", 
    title: "Placas de Sinalização", 
    description: "Placas de obra, identificação de salas e corporativas.", 
    image: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?q=80&w=800&auto=format&fit=crop" 
  },
  { 
    id: "barreiras", 
    title: "Barreiras de Proteção", 
    description: "Escudos de proteção em acrílico para balcões e mesas.", 
    image: "https://images.unsplash.com/photo-1584036561566-b93a90a6b262?q=80&w=800&auto=format&fit=crop" 
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    title: "Novidades no Ramo de Acrílicos em Curitiba",
    excerpt: "Descubra as tendências de materiais sustentáveis e o uso de acrílico reciclado na decoração moderna.",
    date: "12 Mar, 2024",
    category: "Novidades"
  },
  {
    id: "2",
    title: "Como Funciona o Corte a Laser em Acrílico",
    excerpt: "Entenda o processo técnico que garante precisão milimétrica e bordas perfeitamente polidas.",
    date: "05 Fev, 2024",
    category: "Tecnologia"
  },
  {
    id: "3",
    title: "Vantagens dos Domos e Clarabóias",
    excerpt: "Iluminação natural, economia de energia e design moderno para sua residência ou empresa.",
    date: "20 Jan, 2024",
    category: "Dicas"
  }
];