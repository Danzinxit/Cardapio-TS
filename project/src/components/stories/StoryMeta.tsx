import React from 'react';
import { Calendar } from 'lucide-react';

interface StoryMetaProps {
  author: string;
  date: string;
  likes: number;
}

export function StoryMeta({ author, date, likes }: StoryMetaProps) {
  return (
    <div className="flex items-center justify-between mb-3">
      <p className="text-sm text-pink-500">{author}</p>
      <div className="flex items-center gap-4">
        <div className="flex items-center text-gray-500 text-sm">
          <Calendar className="w-4 h-4 mr-1" />
          {new Date(date).toLocaleDateString()}
        </div>
        <span className="text-gray-500 text-sm">{likes} likes</span>
      </div>
    </div>
  );
}