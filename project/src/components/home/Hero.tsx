import React from 'react';

export function Hero() {
  return (
    <div className="relative min-h-[70vh]">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="relative flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Sabor Brasileiro
        </h1>
        <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-8">
          A autêntica culinária brasileira com um toque especial
        </p>
        <div className="flex gap-4">
          <a 
            href="#menu"
            className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
          >
            Ver Cardápio
          </a>
          <a
            href="#reservas"
            className="bg-white hover:bg-gray-100 text-amber-600 px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
          >
            Fazer Reserva
          </a>
        </div>
      </div>
    </div>
  );
}