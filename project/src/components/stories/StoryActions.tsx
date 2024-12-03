import React from 'react';
import { Heart, Share2 } from 'lucide-react';

interface StoryActionsProps {
  isLiked: boolean;
  onLike: () => void;
  onShare: () => void;
}

export function StoryActions({ isLiked, onLike, onShare }: StoryActionsProps) {
  return (
    <div className="absolute top-4 right-4 flex gap-2">
      <button 
        onClick={onLike}
        className="p-2 bg-white/90 rounded-full hover:bg-pink-50 transition-colors"
      >
        <Heart 
          className={`w-6 h-6 ${isLiked ? 'fill-pink-500 text-pink-500' : 'text-pink-500'}`} 
        />
      </button>
      <button 
        onClick={onShare}
        className="p-2 bg-white/90 rounded-full hover:bg-pink-50 transition-colors"
      >
        <Share2 className="w-6 h-6 text-pink-500" />
      </button>
    </div>
  );
}