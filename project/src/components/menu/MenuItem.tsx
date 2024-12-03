import React from 'react';
import { MenuItem as MenuItemType } from '../../types/menu';
import { Leaf, Wheat, Clock, Users } from 'lucide-react';

interface MenuItemProps {
  item: MenuItemType;
}

export function MenuItem({ item }: MenuItemProps) {
  return (
    <div className="flex flex-col md:flex-row gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <img
        src={item.image}
        alt={item.name}
        className="w-full md:w-32 h-32 object-cover rounded-lg"
      />
      <div className="flex-1">
        <div className="flex justify-between items-start mb-1">
          <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
          <span className="text-lg font-semibold text-amber-600">
            R$ {item.price.toFixed(2)}
          </span>
        </div>
        <p className="text-gray-600 text-sm mb-3">{item.description}</p>
        <div className="flex flex-wrap gap-3">
          {item.isVegetarian && (
            <span className="flex items-center text-green-600 text-sm">
              <Leaf className="w-4 h-4 mr-1" />
              Vegetariano
            </span>
          )}
          {item.isGlutenFree && (
            <span className="flex items-center text-amber-600 text-sm">
              <Wheat className="w-4 h-4 mr-1" />
              Sem Glúten
            </span>
          )}
          {item.prepTime && (
            <span className="flex items-center text-gray-600 text-sm">
              <Clock className="w-4 h-4 mr-1" />
              {item.prepTime}
            </span>
          )}
          {item.servingSize && (
            <span className="flex items-center text-gray-600 text-sm">
              <Users className="w-4 h-4 mr-1" />
              {item.servingSize}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}