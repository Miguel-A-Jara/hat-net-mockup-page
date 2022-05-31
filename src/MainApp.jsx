import React from 'react';
import Hero from './components/HeroSection/Hero';
import NavbarContainer from './components/Navbar/NavbarContainer';
import SafeBrowsing from './components/SafeBrowsingSection/SafeBrowsing';
import TestSection from './components/PackagesSection/PackagesSection';
import Footer from './components/Footer/Footer';

const MainApp = () => {

  return (
    <div className='min-h-screen bg-black'>
      <NavbarContainer />

      <Hero />

      <SafeBrowsing />

      <TestSection />

      <Footer />
    </div>
  );
};

export default MainApp;
