export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  spicyLevel?: number;
  isVegetarian?: boolean;
  isGlutenFree?: boolean;
  prepTime?: string;
  servingSize?: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  description: string;
  items: MenuItem[];
}

export interface MenuFilter {
  vegetarian: boolean;
  glutenFree: boolean;
  category: string | null;
}