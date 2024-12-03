import React from 'react';
import { Clock, MapPin, Award } from 'lucide-react';

export function About() {
  return (
    <div className="pt-16 bg-gray-50" id="sobre">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-4">Sobre Nós</h1>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Há mais de 20 anos trazendo o melhor da culinária brasileira para sua mesa
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div>
            <img
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80"
              alt="Nosso Restaurante"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4">Nossa História</h2>
            <p className="text-gray-600 mb-4">
              Fundado em 2004, o Sabor Brasileiro nasceu do sonho de compartilhar a rica 
              gastronomia brasileira em um ambiente acolhedor e sofisticado.
            </p>
            <p className="text-gray-600">
              Nossa missão é preservar as tradições culinárias brasileiras enquanto 
              inovamos com técnicas modernas e apresentações contemporâneas.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <Clock className="w-12 h-12 text-amber-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Horário de Funcionamento</h3>
            <p className="text-gray-600">
              Segunda a Sexta: 11h30 - 23h<br />
              Sábado e Domingo: 11h30 - 00h
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <MapPin className="w-12 h-12 text-amber-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Localização</h3>
            <p className="text-gray-600">
              Rua das Flores, 123<br />
              Centro - São Paulo, SP
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <Award className="w-12 h-12 text-amber-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Reconhecimentos</h3>
            <p className="text-gray-600">
              Melhor Restaurante Brasileiro 2023<br />
              Chef Revelação 2022
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}