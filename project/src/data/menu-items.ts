import { MenuCategory } from '../types/menu';

export const menuCategories: MenuCategory[] = [
  {
    id: 'entradas',
    name: 'Entradas',
    description: 'Comece sua refeição com nossas deliciosas entradas',
    items: [
      {
        id: 1,
        name: 'Pão de Alho',
        description: 'Pão artesanal com manteiga de alho e ervas frescas',
        price: 18.90,
        image: 'https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?auto=format&fit=crop&q=80',
        category: 'entradas',
        isVegetarian: true,
        prepTime: '10 min',
        servingSize: '2 pessoas'
      },
      {
        id: 2,
        name: 'Pastéis (4 unidades)',
        description: 'Pastéis crocantes recheados com carne ou queijo',
        price: 24.90,
        image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80',
        category: 'entradas',
        prepTime: '15 min',
        servingSize: '2 pessoas'
      },
    ],
  },
  {
    id: 'principais',
    name: 'Pratos Principais',
    description: 'Especialidades da casa preparadas com ingredientes selecionados',
    items: [
      {
        id: 3,
        name: 'Feijoada Completa',
        description: 'Tradicional feijoada com arroz, couve, farofa e laranja',
        price: 89.90,
        image: 'https://images.unsplash.com/photo-1574966739987-27c7f024868f?auto=format&fit=crop&q=80',
        category: 'principais',
        prepTime: '30 min',
        servingSize: '2-3 pessoas'
      },
      {
        id: 4,
        name: 'Moqueca de Peixe',
        description: 'Peixe fresco com leite de coco, pimentões e dendê',
        price: 98.90,
        image: 'https://images.unsplash.com/photo-1560717845-968823efbee1?auto=format&fit=crop&q=80',
        category: 'principais',
        isGlutenFree: true,
        prepTime: '35 min',
        servingSize: '2 pessoas'
      },
    ],
  },
  {
    id: 'sobremesas',
    name: 'Sobremesas',
    description: 'Doces tradicionais para adoçar seu dia',
    items: [
      {
        id: 5,
        name: 'Pudim de Leite',
        description: 'Clássico pudim de leite condensado com calda de caramelo',
        price: 18.90,
        image: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&q=80',
        category: 'sobremesas',
        isVegetarian: true,
        prepTime: '10 min',
        servingSize: '1 pessoa'
      },
      {
        id: 6,
        name: 'Brigadeiros Gourmet (6 unidades)',
        description: 'Brigadeiros artesanais em diferentes sabores',
        price: 24.90,
        image: 'https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?auto=format&fit=crop&q=80',
        category: 'sobremesas',
        isVegetarian: true,
        prepTime: '5 min',
        servingSize: '2 pessoas'
      },
    ],
  },
];