import React, { useState } from 'react';
import { Heart, Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'Stories', href: '#stories' },
  { label: 'Write', href: '#write' },
  { label: 'About', href: '#about' },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Heart className="w-8 h-8 text-pink-500" />
            <span className="ml-2 text-xl font-bold text-gray-800">Love Stories</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-600 hover:text-pink-500 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <button className="bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600 transition-colors">
              Sign In
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-600" />
            ) : (
              <Menu className="w-6 h-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block py-2 text-gray-600 hover:text-pink-500 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <button className="w-full mt-4 bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600 transition-colors">
              Sign In
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}