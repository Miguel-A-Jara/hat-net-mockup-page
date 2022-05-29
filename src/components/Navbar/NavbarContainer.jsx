import React, { useState } from 'react';

const NavbarContainer = () => {
  const [isNavOpened, setIsNavOpened] = useState(false);

  const toggleNavbar = () => {
    setIsNavOpened(!isNavOpened);
  };

  return (
    <>
      {/* Desktop */}
      <nav className='hidden items-center justify-between bg-purple p-4 text-cream lg:flex'>
        <div>
          <img src='' alt='logo-brand' />
        </div>
        <ul className='flex justify-around'>
          <li>Hello World</li>
          <li>Hello World</li>
          <li>Hello World</li>
          <li>Hello World</li>
          <li>Hello World</li>
          <li>Hello World</li>
        </ul>
      </nav>

      {/* Mobile */}
      <nav
        className={`${
          isNavOpened ? 'h-screen' : ''
        } relative flex items-end justify-end overflow-hidden bg-purple p-4 text-cream lg:hidden`}
      >
        {/* Toggle */}
        <button
          onClick={toggleNavbar}
          className={`${isNavOpened ? 'hidden' : ''} order-1 cursor-pointer justify-self-end text-xl`}
        >
          <i class='bi bi-list text-white'></i>
        </button>

        {/* Hidde - Show Navbar */}
        <div
          className={`${
            isNavOpened ? 'translate-x-0' : 'translate-x-[105%]'
          } absolute top-0 left-0 flex h-screen w-screen flex-col justify-between
          bg-gradient-to-tr from-black/20 to-black/70 transition-all duration-300`}
        >
          <div className='flex w-full items-center justify-between bg-purple p-4'>
            <div className='aspect-square w-8 cursor-pointer'>
              {/* We use invert to make the image white */}
              <img
                className='block max-w-full invert'
                src='/src/assets/images/logo.png'
                alt='logo-brand'
              />
            </div>

            <button
              onClick={toggleNavbar}
              className={`${
                isNavOpened ? 'rotate-0 scale-100' : 'rotate-90 scale-0'
              } order-1 cursor-pointer justify-self-end text-xl transition-all duration-500`}
            >
              <i class='bi bi-x-lg'></i>
            </button>
          </div>
          <ul className='flex basis-full flex-col items-center justify-around'>
            <li>Hello World</li>
            <li>Hello World</li>
            <li>Hello World</li>
            <li>Hello World</li>
            <li>Hello World</li>
            <li>Hello World</li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavbarContainer;
