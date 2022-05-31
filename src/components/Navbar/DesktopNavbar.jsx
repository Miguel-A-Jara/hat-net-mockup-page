import React from 'react';
import NavbarItem from './NavbarItem';

const DesktopNavbar = () => {

  /* We import the assets using const, so vite can access them during the building process */
  const logo = '/logo.png';

  return (
    <nav className='hidden items-stretch justify-between bg-purple text-cream lg:flex h-fit'>
      <div className='w-14 m-2'>
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
