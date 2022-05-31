import React from 'react';
import NavbarItem from './NavbarItem';
import logo from '../../images/logo.png';

const DesktopNavbar = () => {
  return (
    <nav className='hidden h-fit items-stretch justify-between bg-purple text-cream lg:flex'>
      <div className='m-2 w-14'>
        {/* We use invert to make the image white */}
        <img
          className='block max-w-full cursor-pointer invert transition-all duration-300 hover:animate-pulse hover:invert-0'
          src={logo}
          alt='logo-brand'
        />
      </div>
      <ul className='flex basis-1/2 justify-around'>
        <NavbarItem title={'home'} />
        <NavbarItem title={'about'} />
        <NavbarItem title={'contact us'} />
      </ul>
    </nav>
  );
};

export default DesktopNavbar;
