import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import Scenarios from './components/Scenarios';
import Stats from './components/Stats';
import Process from './components/Process';
import Certifications from './components/Certifications';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Stats />
        <Products />
        <Scenarios />
        <Certifications />
        <Process />
      </main>
      <Footer />
    </div>
  );
};

export default App;