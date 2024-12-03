import React from 'react';
import { MenuSection } from '../components/menu/MenuSection';
import { MenuFilters } from '../components/menu/MenuFilters';
import { menuCategories } from '../data/menu-items';
import { MenuFilter } from '../types/menu';

export function Menu() {
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
    <div className="pt-16 bg-gray-50" id="menu">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-4">Cardápio</h1>
        <p className="text-gray-600 text-center mb-8">Descubra nossa seleção de pratos tradicionais brasileiros</p>
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