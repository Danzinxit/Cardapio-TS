import React from 'react';
import { Calendar, Clock, Users } from 'lucide-react';
import { Reservation, TimeSlot } from '../types/reservation';

const timeSlots: TimeSlot[] = [
  { time: '11:30', available: true },
  { time: '12:00', available: true },
  { time: '12:30', available: false },
  { time: '13:00', available: true },
  { time: '13:30', available: true },
  { time: '19:00', available: true },
  { time: '19:30', available: false },
  { time: '20:00', available: true },
  { time: '20:30', available: true },
];

export function ReservationPage() {
  const [reservation, setReservation] = React.useState<Reservation>({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: 2,
    specialRequests: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Reserva enviada:', reservation);
    // Implement reservation submission
  };

  return (
    <div className="pt-16 bg-gray-50" id="reservas">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-4">Faça sua Reserva</h1>
        <p className="text-gray-600 text-center mb-12">Reserve sua mesa e desfrute de uma experiência única</p>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-sm">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  value={reservation.name}
                  onChange={(e) => setReservation({ ...reservation, name: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={reservation.email}
                  onChange={(e) => setReservation({ ...reservation, email: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={reservation.phone}
                  onChange={(e) => setReservation({ ...reservation, phone: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="guests" className="block text-gray-700 font-medium mb-2">
                  Número de Pessoas
                </label>
                <div className="flex items-center">
                  <Users className="w-5 h-5 text-gray-400 mr-2" />
                  <select
                    id="guests"
                    value={reservation.guests}
                    onChange={(e) => setReservation({ ...reservation, guests: Number(e.target.value) })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'pessoa' : 'pessoas'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="date" className="block text-gray-700 font-medium mb-2">
                  Data
                </label>
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 text-gray-400 mr-2" />
                  <input
                    type="date"
                    id="date"
                    value={reservation.date}
                    onChange={(e) => setReservation({ ...reservation, date: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="time" className="block text-gray-700 font-medium mb-2">
                  Horário
                </label>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-gray-400 mr-2" />
                  <select
                    id="time"
                    value={reservation.time}
                    onChange={(e) => setReservation({ ...reservation, time: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    required
                  >
                    <option value="">Selecione um horário</option>
                    {timeSlots.map((slot) => (
                      <option
                        key={slot.time}
                        value={slot.time}
                        disabled={!slot.available}
                      >
                        {slot.time} {!slot.available && '(Indisponível)'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <label htmlFor="specialRequests" className="block text-gray-700 font-medium mb-2">
                Pedidos Especiais
              </label>
              <textarea
                id="specialRequests"
                value={reservation.specialRequests}
                onChange={(e) => setReservation({ ...reservation, specialRequests: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                rows={3}
                placeholder="Alergias, preferências ou ocasiões especiais"
              />
            </div>
            <button
              type="submit"
              className="w-full mt-6 bg-amber-600 text-white py-3 px-4 rounded-lg hover:bg-amber-700 transition-colors"
            >
              Confirmar Reserva
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}