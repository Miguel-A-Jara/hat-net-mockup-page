import React from 'react';

const NavbarItem = ({ title }) => {
  return (
    <li className='flex h-full w-full cursor-pointer items-center justify-center px-4 uppercase transition-all duration-300 hover:bg-black/75 active:bg-black/75 md:text-2xl'>
      {title}
    </li>
  );
};

export default NavbarItem;
