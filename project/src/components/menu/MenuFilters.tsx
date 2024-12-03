import React from 'react';
import { MenuFilter } from '../../types/menu';
import { Leaf, Wheat } from 'lucide-react';

interface MenuFiltersProps {
  filters: MenuFilter;
  onFilterChange: (filters: MenuFilter) => void;
  categories: string[];
}

export function MenuFilters({ filters, onFilterChange, categories }: MenuFiltersProps) {
  return (
    <div className="flex flex-wrap gap-4 mb-8">
      <button
        onClick={() => onFilterChange({ ...filters, vegetarian: !filters.vegetarian })}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
          filters.vegetarian
            ? 'bg-green-100 text-green-700'
            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
        }`}
      >
        <Leaf className="w-4 h-4" />
        Vegetariano
      </button>
      <button
        onClick={() => onFilterChange({ ...filters, glutenFree: !filters.glutenFree })}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
          filters.glutenFree
            ? 'bg-amber-100 text-amber-700'
            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
        }`}
      >
        <Wheat className="w-4 h-4" />
        Sem Glúten
      </button>
      <select
        value={filters.category || ''}
        onChange={(e) => onFilterChange({ ...filters, category: e.target.value || null })}
        className="px-4 py-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
      >
        <option value="">Todas as Categorias</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}