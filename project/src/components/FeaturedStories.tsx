import React from 'react';
import { StoryCard } from './StoryCard';

const stories = [
  {
    id: 1,
    title: "Love at First Sight",
    author: "Emma & James",
    image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&q=80",
    excerpt: "We met on a rainy day in Paris, and the rest is history...",
  },
  {
    id: 2,
    title: "A Decade of Love",
    author: "Sofia & Lucas",
    image: "https://images.unsplash.com/photo-1583157048761-ac1867d1bee6?auto=format&fit=crop&q=80",
    excerpt: "From high school sweethearts to soulmates for life...",
  },
  {
    id: 3,
    title: "Unexpected Journey",
    author: "Oliver & Mia",
    image: "https://images.unsplash.com/photo-1544642899-f0d6e5f6ed6f?auto=format&fit=crop&q=80",
    excerpt: "Sometimes the best love stories begin when you least expect them...",
  },
];

export function FeaturedStories() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Featured Love Stories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story) => (
            <StoryCard key={story.id} {...story} />
          ))}
        </div>
      </div>
    </section>
  );
}