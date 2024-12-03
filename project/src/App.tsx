import React from 'react';
import { Header } from './components/layout/Header';
import { Hero } from './components/home/Hero';
import { Menu } from './pages/Menu';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { ReservationPage } from './pages/Reservation';
import { OrderOnline } from './pages/OrderOnline';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <Menu />
      <About />
      <Contact />
      <ReservationPage />
      <OrderOnline />
    </div>
  );
}

export default App;