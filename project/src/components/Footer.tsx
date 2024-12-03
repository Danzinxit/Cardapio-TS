import React from 'react';
import { Heart, Instagram, Twitter, Facebook } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <Heart className="w-8 h-8 text-pink-400 mr-2" />
            <span className="text-2xl font-bold">Love Stories</span>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-pink-400 transition-colors">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-pink-400 transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-pink-400 transition-colors">
              <Facebook className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Love Stories. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}