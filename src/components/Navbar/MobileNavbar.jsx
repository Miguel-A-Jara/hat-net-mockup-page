import React, { useState } from 'react';
import NavbarItem from './NavbarItem';

const MobileNavbar = () => {
  const [isNavOpened, setIsNavOpened] = useState(false);

  const toggleNavbar = () => {
    setIsNavOpened(!isNavOpened);
  };

  return (
    <nav
      className={`${
        isNavOpened ? 'h-screen' : ''
      } relative flex items-end justify-end overflow-hidden bg-purple p-4 text-cream lg:hidden`}
    >
      {/* Toggle */}
      <button
        onClick={toggleNavbar}
        className={`${
          isNavOpened ? 'hidden' : ''
        } order-1 cursor-pointer justify-self-end text-2xl md:text-3xl`}
      >
        <i className='bi bi-list text-white transition-all duration-300 hover:text-black'></i>
      </button>

      {/* Hidde - Show Navbar */}
      <div
        className={`${
          isNavOpened ? 'translate-x-0' : 'translate-x-[105%]'
        } absolute top-0 left-0 flex h-screen w-screen flex-col justify-between
          bg-gradient-to-tr from-black/20 to-black/70 transition-all duration-300`}
      >
        <div className='flex w-full items-center justify-between bg-purple p-4'>
          <div className='aspect-square w-10 cursor-pointer md:w-16'>
            {/* We use invert to make the image white */}
            <img
              className={`${
                isNavOpened ? 'scale-100' : 'scale-0'
              } block max-w-full invert transition-all duration-300`}
              src='images/logo.png'
              alt='logo-brand'
            />
          </div>

          <button
            onClick={toggleNavbar}
            className={`${
              isNavOpened ? 'rotate-0 scale-100' : 'rotate-90 scale-0'
            } order-1 cursor-pointer justify-self-end text-2xl transition-all duration-500 md:text-3xl px-4`}
          >
            <i className='bi bi-x-lg text-white transition-all duration-300 hover:text-black'></i>
          </button>
        </div>
        <ul className='flex basis-full flex-col items-center justify-around'>
          <NavbarItem title={'home'} />
          <NavbarItem title={'about'} />
          <NavbarItem title={'contact us'} />
        </ul>
      </div>
    </nav>
  );
};

export default MobileNavbar;
