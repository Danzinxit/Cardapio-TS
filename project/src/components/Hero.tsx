import React from 'react';
import { Heart } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative min-h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1518049362265-d5b2a6467637?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="relative flex flex-col items-center justify-center min-h-screen text-center px-4">
        <Heart className="w-16 h-16 text-pink-400 animate-pulse mb-6" />
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Love Stories
        </h1>
        <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-8">
          Where romance blooms and hearts connect. Share your journey of love with the world.
        </p>
        <button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors">
          Share Your Story
        </button>
      </div>
    </div>
  );
}