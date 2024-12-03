import React from 'react';
import { MenuCategory } from '../../types/menu';
import { MenuItem } from './MenuItem';

interface MenuSectionProps {
  category: MenuCategory;
}

export function MenuSection({ category }: MenuSectionProps) {
  return (
    <section className="py-12" id={category.id}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">{category.name}</h2>
        <p className="text-gray-600 mb-8">{category.description}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {category.items.map((item) => (
            <MenuItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}