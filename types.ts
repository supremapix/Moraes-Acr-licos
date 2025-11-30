export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: 'laser' | 'display' | 'sheet' | 'dome' | 'engraving';
}

export interface ProductItem {
  id: string;
  title: string;
  image: string;
  description: string;
  images?: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image?: string;
}

export interface NavItem {
  label: string;
  href: string;
}