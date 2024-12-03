import React from 'react';
import { StoryCard } from './StoryCard';
import { Story } from '../../types/story';

interface StoriesSectionProps {
  title: string;
  stories: Story[];
}

export function StoriesSection({ title, stories }: StoriesSectionProps) {
  const handleLike = (id: number) => {
    console.log('Liked story:', id);
  };

  return (
    <section className="py-20 bg-gray-50" id="stories">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          {title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story) => (
            <StoryCard
              key={story.id}
              story={story}
              onLike={handleLike}
            />
          ))}
        </div>
      </div>
    </section>
  );
}