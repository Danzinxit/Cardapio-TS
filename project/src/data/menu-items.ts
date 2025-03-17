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
        image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Findos.com.br%2Fcomo-rechear-pao-de-alho%2F&psig=AOvVaw2LcoVDlEA_NeKvcFE9d_nf&ust=1742315379946000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJipzMnEkYwDFQAAAAAdAAAAABAE', // Imagem de pão de alho
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
        image: 'https://images.unsplash.com/photo-1583802775764-9f1b8332bbf9?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjcwMHwwfDF8c2VhY2h8Mnx8cGFzdGVpcyUyMGFzJTIwZGVzY2FzJTIwdW5pdGFzfDB8fHx8fDE2Nzg0NjMzMjg&ixlib=rb-1.2.1&q=80&w=1080', // Imagem de pastéis
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
        image: 'https://images.unsplash.com/photo-1604070757234-8f28b8e04f09?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjcwMHwwfDF8c2VhY2h8Mnx8ZmVpam9hZGElMjBjb21wbGV0YXxlbnwwfHx8fDE2Nzg0NjMzNjI&ixlib=rb-1.2.1&q=80&w=1080', // Imagem de feijoada
        category: 'principais',
        prepTime: '30 min',
        servingSize: '2-3 pessoas'
      },
      {
        id: 4,
        name: 'Moqueca de Peixe',
        description: 'Peixe fresco com leite de coco, pimentões e dendê',
        price: 98.90,
        image: 'https://images.unsplash.com/photo-1587767883029-b865f70225d2?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjcwMHwwfDF8c2VhY2h8N3x8bW9xdWVjYSUyMGRlJTIwcGVpeGUlMjBnaXJvJTIwY2VsaXxlbnwwfHx8fDE2Nzg0NjMzNjM&ixlib=rb-1.2.1&q=80&w=1080', // Imagem de moqueca de peixe
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
        image: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjcwMHwwfDF8c2VhY2h8Mnx8cHVkaW0lMjBkZSUyMGxlaXRlJTIwY29uZGVuc2Fkb3xlbnwwfHx8fDE2Nzg0NjMzNjU&ixlib=rb-1.2.1&q=80&w=1080', // Imagem de pudim de leite
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
        image: 'https://images.unsplash.com/photo-1576901314161-27adbb89f5c4?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjcwMHwwfDF8c2VhY2h8Mnx8YnJpZ2FkZWlyb3MlMjBndW9ybWV0JTIwdW5pZGFkZXxlbnwwfHx8fDE2Nzg0NjMzNzI&ixlib=rb-1.2.1&q=80&w=1080', // Imagem de brigadeiro gourmet
        category: 'sobremesas',
        isVegetarian: true,
        prepTime: '5 min',
        servingSize: '2 pessoas'
      },
    ],
  },
];
