import React from 'react';

const FooterSocialMedia = () => {
  return (
    <ul className='flex flex-col md:flex-row items-stretch justify-around text-3xl md:text-5xl text-white'>
      <li
        className='flex w-full cursor-pointer items-center justify-center transition-all duration-300 hover:bg-black/50 
      hover:text-purple p-2'
      >
        <i className='bi bi-facebook'></i>
      </li>
      <li
        className='flex w-full cursor-pointer items-center justify-center transition-all duration-300 hover:bg-black/50 
      hover:text-purple p-2'
      >
        <i className='bi bi-twitter'></i>
      </li>
      <li
        className='flex w-full cursor-pointer items-center justify-center transition-all duration-300 hover:bg-black/50 
      hover:text-purple p-2'
      >
        <i className='bi bi-youtube'></i>
      </li>
      <li
        className='flex w-full cursor-pointer items-center justify-center transition-all duration-300 hover:bg-black/50 
      hover:text-purple p-2'
      >
        <i className='bi bi-telephone-fill'></i>
      </li>
    </ul>
  );
};

export default FooterSocialMedia;
