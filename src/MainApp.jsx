import React from 'react';
import Hero from './components/HeroSection/Hero';
import NavbarContainer from './components/Navbar/NavbarContainer';

const MainApp = () => {
  return (
    <div className='bg-violet min-h-screen'>
      <NavbarContainer />
      <Hero />
    </div>
  );
};

export default MainApp;
