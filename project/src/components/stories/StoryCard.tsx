import React, { useState } from 'react';
import { StoryActions } from './StoryActions';
import { StoryMeta } from './StoryMeta';
import { StoryCardProps } from '../../types/story';

export function StoryCard({ story, onLike }: StoryCardProps) {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
    onLike(story.id);
  };

  const handleShare = () => {
    // Implement share functionality
    console.log('Share story:', story.title);
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
      <div className="relative h-64">
        <img
          src={story.image}
          alt={story.title}
          className="w-full h-full object-cover"
        />
        <StoryActions
          isLiked={isLiked}
          onLike={handleLike}
          onShare={handleShare}
        />
      </div>
      <div className="p-6">
        <StoryMeta
          author={story.author}
          date={story.date}
          likes={story.likes}
        />
        <h3 className="text-2xl font-semibold mb-2 text-gray-800">{story.title}</h3>
        <p className="text-gray-600 mb-4">{story.excerpt}</p>
        <button className="text-pink-500 font-semibold hover:text-pink-600 transition-colors">
          Read More →
        </button>
      </div>
    </div>
  );
}