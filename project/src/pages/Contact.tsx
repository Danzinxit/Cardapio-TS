import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { ContactMessage } from '../types/contact';

export function Contact() {
  const [message, setMessage] = React.useState<ContactMessage>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Mensagem enviada:', message);
    // Implement form submission
  };

  return (
    <div className="pt-16 bg-gray-50" id="contato">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-4">Contato</h1>
        <p className="text-gray-600 text-center mb-12">Entre em contato conosco</p>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
              <div className="flex items-center mb-4">
                <Phone className="w-6 h-6 text-amber-600 mr-3" />
                <div>
                  <h3 className="font-semibold">Telefone</h3>
                  <p className="text-gray-600">(11) 3456-7890</p>
                </div>
              </div>
              <div className="flex items-center mb-4">
                <Mail className="w-6 h-6 text-amber-600 mr-3" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-600">contato@saborbrasileiro.com</p>
                </div>
              </div>
              <div className="flex items-center">
                <MapPin className="w-6 h-6 text-amber-600 mr-3" />
                <div>
                  <h3 className="font-semibold">Endereço</h3>
                  <p className="text-gray-600">Rua das Flores, 123 - Centro<br />São Paulo, SP</p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-sm">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                Nome
              </label>
              <input
                type="text"
                id="name"
                value={message.name}
                onChange={(e) => setMessage({ ...message, name: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={message.email}
                onChange={(e) => setMessage({ ...message, email: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                Assunto
              </label>
              <input
                type="text"
                id="subject"
                value={message.subject}
                onChange={(e) => setMessage({ ...message, subject: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                Mensagem
              </label>
              <textarea
                id="message"
                value={message.message}
                onChange={(e) => setMessage({ ...message, message: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                rows={4}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-amber-600 text-white py-2 px-4 rounded-lg hover:bg-amber-700 transition-colors"
            >
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}