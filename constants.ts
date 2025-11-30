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
  whatsappLink: "https://wa.me/5541991579124",
  videoBgId: "M7lc1UVf-VE", // Abstract technological background
};

export const NAV_LINKS: NavItem[] = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Produtos", href: "#produtos" },
  { label: "Blog", href: "#blog" },
  { label: "Contato", href: "#contato" },
];

export const SERVICES: ServiceItem[] = [
  {
    id: "1",
    title: "Corte a Laser",
    description: "Corte preciso em acrílico, MDF e outros materiais com tecnologia de ponta para acabamento perfeito.",
    icon: "laser",
  },
  {
    id: "2",
    title: "Domos e Clarabóias",
    description: "Fabricação de domos em acrílico para iluminação natural, ventilação e estética do ambiente.",
    icon: "dome",
  },
  {
    id: "3",
    title: "Displays e Expositores",
    description: "Desenvolvimento de displays personalizados para ponto de venda, eventos e sinalização.",
    icon: "display",
  },
  {
    id: "4",
    title: "Chapas de Acrílico",
    description: "Comercialização de chapas de acrílico em diversas cores e espessuras para seus projetos.",
    icon: "sheet",
  },
];

export const PRODUCTS: ProductItem[] = [
  {
    id: "1",
    title: "Domo Acrílico Piramidal",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600&auto=format&fit=crop",
    description: "Domo em formato piramidal para iluminação zenital, alta resistência e durabilidade.",
  },
  {
    id: "2",
    title: "Display de Mesa A4",
    image: "https://images.unsplash.com/photo-1517646331032-9e8563c523a1?q=80&w=600&auto=format&fit=crop",
    description: "Display em L ou T para folhas A4, ideal para avisos, menus e identificação.",
  },
  {
    id: "3",
    title: "Troféu Personalizado",
    image: "https://images.unsplash.com/photo-1590845947698-8924d7409b56?q=80&w=600&auto=format&fit=crop",
    description: "Troféus em acrílico com corte e gravação a laser, design exclusivo para premiações.",
  },
  {
    id: "4",
    title: "Urna em Acrílico",
    image: "https://images.unsplash.com/photo-1610443427909-009872d80d28?q=80&w=600&auto=format&fit=crop",
    description: "Urnas para sorteios, sugestões e votações, transparentes e seguras.",
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    title: "Vantagens da Iluminação Zenital",
    excerpt: "Descubra como domos e clarabóias podem reduzir sua conta de energia e melhorar o ambiente.",
    date: "15 Out 2023",
    category: "Sustentabilidade",
  },
  {
    id: "2",
    title: "Acrílico vs Vidro: Qual escolher?",
    excerpt: "Um comparativo completo entre acrílico e vidro para te ajudar a decidir o melhor material.",
    date: "22 Set 2023",
    category: "Materiais",
  },
  {
    id: "3",
    title: "Manutenção de Domos",
    excerpt: "Dicas essenciais para limpar e manter a vida útil das suas clarabóias em acrílico.",
    date: "10 Ago 2023",
    category: "Dicas",
  },
];