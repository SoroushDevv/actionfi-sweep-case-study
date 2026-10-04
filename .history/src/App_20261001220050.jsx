import React from 'react';
import Header from './components/layout/Header.jsx';
import Hero from './components/sections/Hero.jsx';
import Funnel from './components/sections/Funnel.jsx';
import Tasks from './components/sections/Tasks.jsx';
import Comparison from './components/sections/Comparison.jsx';
import Results from './components/sections/Results.jsx';
import Close from './components/sections/Close.jsx';
import Footer from './components/layout/Footer.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0F001A] text-white font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <Funnel />
        <Tasks />
        <Comparison />
        <Results />
        <Close />
      </main>
      <Footer />
    </div>
  );
}