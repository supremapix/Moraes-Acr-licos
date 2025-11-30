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
  videoBgId: "OoorHB6btU0", 
};

export const NAV_LINKS: NavItem[] = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Produtos", href: "#produtos" },
  { label: "Galeria", href: "#galeria" },
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

// Lista completa de imagens para a galeria slider
export const GALLERY_IMAGES = [
  "domos-2000x1125.jpg",
  "pulpito-2000x1333.jpg",
  "displays-de-acrilicos-pr-1-1036x583.jpeg",
  "corte-acrilico-laser-1920x1080.jpg",
  "trofeu 1-1920x1080.jpg",
  "letreiro 1-1920x1920.jpg",
  "fachadas-e-letreiros-de-acrilico-curitiba (5)-1280x720.jpg",
  "brindes-comprar-de-acrilico-barato-curitiba-e-regiao (1)-640x453.jpg",
  "placas-letras-3d-acrilicos-brasil-1600x721.jpg",
  "pulpito-acrilico-torre-forte-led-direto-da-fabrica-pulpito-721x1280.jpg",
  "domos-transparentes-de-acrilicos-parana-1280x590.jpg",
  "acrilicos-pinhais-1600x898.jpg",
  "displays-acrilicos-com-led-602x330.jpg",
  "artigos-para-casamento-e-formatura-acrilico-549x412.jpg",
  "moveis-e-decoracao-acrilico-6-1226x920.jpg",
  "cnc-router-800x800.jpg",
];

export const PRODUCTS: ProductItem[] = [
  {
    id: "1",
    title: "Domos e Clarabóias",
    image: "domos-2000x1125.jpg",
    description: "Domos em acrílico leitoso ou cristal. Modelos quadrados, retangulares e redondos para telhados e lajes. Iluminação natural e economia de energia.",
    images: [
        "domos-1036x583.jpg",
        "domos-de-acrilicos-em-curitiba-1280x720.jpg",
        "domos-e-claraboias-acrilico-curitiba-576x1252.jpg"
    ]
  },
  {
    id: "2",
    title: "Púlpitos em Acrílico",
    image: "pulpito-2000x1333.jpg",
    description: "Púlpitos modernos e sofisticados para igrejas e eventos. Fabricados em acrílico virgem de alta espessura com gravação a laser personalizada.",
    images: [
        "pulpito-de-acrilico-800x800.jpg",
        "pulpito-em-acrilico-e-inox-mirian-pulpitos-de-inox-580x434.jpg",
        "pilpito-de-acrilicos-1845x966.png"
    ]
  },
  {
    id: "3",
    title: "Troféus e Medalhas",
    image: "trofeu 1-1920x1080.jpg",
    description: "Troféus e medalhas em acrílico com corte a laser e impressão UV. Design exclusivo para premiações corporativas e esportivas.",
  },
  {
    id: "4",
    title: "Fachadas e Letreiros",
    image: "fachadas-e-letreiros-de-acrilico-curitiba (5)-1280x720.jpg",
    description: "Letras caixa e logotipos em acrílico para fachadas e recepções. Acabamento brilhante e durabilidade contra intempéries.",
    images: [
        "letreiro 1-1920x1920.jpg",
        "letras-caixa-pinhais-pr-1600x637.jpg",
        "fachadas-e-letreiros-de-acrilico-curitiba (2)-1280x720.jpg"
    ]
  },
  {
    id: "5",
    title: "Displays e Expositores",
    image: "display-em-acrilico-curitiba-pr-894x494.jpg",
    description: "Displays de mesa, porta-folha, expositores de produtos e sinalização interna. Soluções visuais para o seu negócio.",
    images: [
        "displays-acrilico (4)-640x550.jpg",
        "displays-de-acrilicos-pr-1036x583.jpeg"
    ]
  },
  {
    id: "6",
    title: "Urnas e Caixas",
    image: "brindes-comprar-de-acrilico-barato-curitiba-e-regiao (1)-640x453.jpg",
    description: "Urnas para sorteios, sugestões e caixas organizadoras sob medida. Fechos para cadeado e suporte para informativos opcionais.",
  },
  {
    id: "7",
    title: "Corte a Laser",
    image: "corte-acrilico-laser-1920x1080.jpg",
    description: "Serviço de corte a laser em acrílico, MDF e outros materiais. Alta precisão para peças técnicas e decorativas.",
    images: [
        "corte-laser-800x800.jpg",
        "cnc-router-800x800.jpg"
    ]
  },
  {
    id: "8",
    title: "Luminárias e Decoração",
    image: "moveis-e-decoracao-acrilico (3)-640x427.jpg",
    description: "Luminárias personalizadas, peças de decoração, móveis e artigos para festas e casamentos em acrílico.",
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    title: "Vantagens da Iluminação Zenital",
    excerpt: "Descubra como domos e clarabóias podem reduzir sua conta de energia e melhorar o ambiente.",
    date: "15 Out 2023",
    category: "Sustentabilidade",
    image: "domos-de-acrilicos-parana-brasil-576x960.jpg"
  },
  {
    id: "2",
    title: "Acrílico vs Vidro: Qual escolher?",
    excerpt: "Um comparativo completo entre acrílico e vidro para te ajudar a decidir o melhor material.",
    date: "22 Set 2023",
    category: "Materiais",
    image: "revenda-de-chapas-800x800.jpg"
  },
  {
    id: "3",
    title: "Corte a Laser em MDF e Acrílico",
    excerpt: "Entenda as possibilidades infinitas de criação com nossa tecnologia de corte a laser.",
    date: "10 Ago 2023",
    category: "Tecnologia",
    image: "corte-laser-800x800.jpg"
  },
];