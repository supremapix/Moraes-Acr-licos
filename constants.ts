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
  whatsappLink: "https://api.whatsapp.com/send?phone=5541991579124&text=Ol%C3%A1%2C%20achei%20seu%20site%20no%20*Google*%20e%20gostaria%20de%3A",
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
    title: "Domos e Clarabóias",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600&auto=format&fit=crop",
    description: "Domos em acrílico leitoso ou cristal. Modelos quadrados, retangulares e redondos para telhados e lajes. Iluminação natural e economia de energia.",
    images: [
        "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600",
        "https://images.unsplash.com/photo-1595846519845-68e298c2edd8?q=80&w=600", // Placeholder for roof view
        "https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?q=80&w=600"  // Placeholder for internal view
    ]
  },
  {
    id: "2",
    title: "Púlpitos em Acrílico",
    image: "https://images.unsplash.com/photo-1544259392-ae3276805090?q=80&w=600&auto=format&fit=crop",
    description: "Púlpitos modernos e sofisticados para igrejas e eventos. Fabricados em acrílico virgem de alta espessura com gravação a laser personalizada.",
  },
  {
    id: "3",
    title: "Urnas e Caixas",
    image: "https://images.unsplash.com/photo-1610443427909-009872d80d28?q=80&w=600&auto=format&fit=crop",
    description: "Urnas para sorteios, sugestões e caixas organizadoras sob medida. Fechos para cadeado e suporte para informativos opcionais.",
  },
  {
    id: "4",
    title: "Troféus Personalizados",
    image: "https://images.unsplash.com/photo-1590845947698-8924d7409b56?q=80&w=600&auto=format&fit=crop",
    description: "Troféus e medalhas em acrílico com corte a laser. Design exclusivo para premiações corporativas e esportivas.",
  },
  {
    id: "5",
    title: "Letreiros e Fachadas",
    image: "https://images.unsplash.com/photo-1563245139-938b244795cf?q=80&w=600&auto=format&fit=crop",
    description: "Letras caixa e logotipos em acrílico para fachadas e recepções. Acabamento brilhante e durabilidade contra intempéries.",
  },
  {
    id: "6",
    title: "Displays Iluminados (LED)",
    image: "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=600&auto=format&fit=crop",
    description: "Displays com iluminação LED interna ou neon. Ideal para bares, restaurantes e sinalização noturna de alto impacto.",
  },
  {
    id: "7",
    title: "Expositores de Produtos",
    image: "https://images.unsplash.com/photo-1517646331032-9e8563c523a1?q=80&w=600&auto=format&fit=crop",
    description: "Expositores tipo escada, nichos e suportes para vitrines. Destaque seus produtos com a transparência do acrílico.",
  },
  {
    id: "8",
    title: "Chapas de Acrílico",
    image: "https://images.unsplash.com/photo-1612450636662-b94156942c4b?q=80&w=600&auto=format&fit=crop",
    description: "Venda de chapas inteiras ou fracionadas. Diversas cores (leitoso, cristal, preto, espelhado) e espessuras variadas.",
  }
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