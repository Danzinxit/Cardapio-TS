import React from 'react';
import { Heart } from 'lucide-react';

interface StoryCardProps {
  title: string;
  author: string;
  image: string;
  excerpt: string;
}

export function StoryCard({ title, author, image, excerpt }: StoryCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
      <div className="relative h-64">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4">
          <button className="p-2 bg-white/90 rounded-full hover:bg-pink-50 transition-colors">
            <Heart className="w-6 h-6 text-pink-500" />
          </button>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-2 text-gray-800">{title}</h3>
        <p className="text-sm text-pink-500 mb-3">{author}</p>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <button className="text-pink-500 font-semibold hover:text-pink-600 transition-colors">
          Read More →
        </button>
      </div>
    </div>
  );
}