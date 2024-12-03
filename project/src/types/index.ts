export interface Story {
  id: number;
  title: string;
  author: string;
  image: string;
  excerpt: string;
  date?: string;
  likes?: number;
}

export interface NavLink {
  label: string;
  href: string;
}