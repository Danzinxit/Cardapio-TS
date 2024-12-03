import React, { useState } from 'react';
import { Menu as MenuIcon, X } from 'lucide-react';

const navLinks = [
  { label: 'Cardápio', href: '#menu' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
  { label: 'Reservas', href: '#reservas' },
];

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="hidden md:flex items-center space-x-8">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-gray-600 hover:text-amber-600 transition-colors"
          >
            {link.label}
          </a>
        ))}
        <button className="bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition-colors">
          Pedir Online
        </button>
      </nav>

      <button
        className="md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? (
          <X className="w-6 h-6 text-gray-600" />
        ) : (
          <MenuIcon className="w-6 h-6 text-gray-600" />
        )}
      </button>

      {isMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white md:hidden py-4 px-4 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block py-2 text-gray-600 hover:text-amber-600 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <button className="w-full mt-4 bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition-colors">
            Pedir Online
          </button>
        </div>
      )}
    </>
  );
}