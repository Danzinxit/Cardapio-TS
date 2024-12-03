import React from 'react';
import { MenuSection } from '../components/menu/MenuSection';
import { MenuFilters } from '../components/menu/MenuFilters';
import { menuCategories } from '../data/menu-items';
import { MenuFilter } from '../types/menu';
import { ShoppingBag } from 'lucide-react';

export function OrderOnline() {
  const [filters, setFilters] = React.useState<MenuFilter>({
    vegetarian: false,
    glutenFree: false,
    category: null,
  });

  const categories = menuCategories.map(cat => cat.name);

  const filteredCategories = menuCategories.map(category => ({
    ...category,
    items: category.items.filter(item => {
      if (filters.vegetarian && !item.isVegetarian) return false;
      if (filters.glutenFree && !item.isGlutenFree) return false;
      if (filters.category && category.name !== filters.category) return false;
      return true;
    }),
  })).filter(category => category.items.length > 0);

  return (
    <div className="pt-16 bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-4">Peça Online</h1>
        <p className="text-gray-600 text-center mb-8">
          Escolha seus pratos favoritos e receba em casa
        </p>

        <div className="flex justify-end mb-8">
          <button className="flex items-center gap-2 bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition-colors">
            <ShoppingBag className="w-5 h-5" />
            Carrinho (0)
          </button>
        </div>

        <MenuFilters
          filters={filters}
          onFilterChange={setFilters}
          categories={categories}
        />

        {filteredCategories.map((category) => (
          <MenuSection key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
}