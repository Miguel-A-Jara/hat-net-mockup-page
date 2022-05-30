import React from 'react';
import Hero from './components/HeroSection/Hero';
import NavbarContainer from './components/Navbar/NavbarContainer';
import SafeBrowsing from './components/SafeBrowsingSection/SafeBrowsing';
import TestSection from './components/PackagesSection/PackagesSection';

const MainApp = () => {
  return (
    <div className='min-h-screen bg-black/90'>
      <NavbarContainer />

      <Hero />

      <SafeBrowsing />

      <TestSection />
    </div>
  );
};

export default MainApp;
