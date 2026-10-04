import React from 'react';
import Header from './components/layout/Header.jsx';
import Hero from './components/sections/Hero.jsx';
import Funnel from './components/sections/Funnel.jsx';
import Tasks from './components/sections/Tasks.jsx';
import Comparison from './components/sections/Comparison.jsx';
import Results from './components/sections/Results.jsx';
import Close from './components/sections/Close.jsx';
import Footer from './components/layout/Footer.jsx';
import CustomCursor from './components/ui/CustomCursor.jsx';

export default function App() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0F001A', color: '#ffffff', position: 'relative' }}>
      <CustomCursor />
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