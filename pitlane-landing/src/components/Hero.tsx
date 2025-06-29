import React from 'react';

const Hero: React.FC = () => (
  <div className="relative h-screen bg-[url('/assets/hero-bg.jpg')] bg-cover bg-center bg-fixed flex items-center justify-center text-center">
    <div className="bg-black/50 p-8 rounded-xl">
      <h1 className="text-4xl md:text-6xl font-bold text-primary">Pitlane Holding</h1>
      <p className="mt-4 text-secondary text-lg">
        Circuito de inversión. Circuito de oportunidades.
      </p>
      <button className="mt-6 px-6 py-3 bg-accent text-white rounded hover:bg-darkblue transition">
        Más información
      </button>
    </div>
  </div>
);

export default Hero;
