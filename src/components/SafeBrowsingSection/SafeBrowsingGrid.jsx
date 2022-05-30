import React from 'react';

const SafeBrowsingGrid = () => {
  return (
    <div className='md:max-w-screen-md md:mx-auto grid w-full gap-1 overflow-hidden rounded-3xl bg-cream lg:w-1/2 lg:rotate-3 lg:grid-cols-4 lg:gap-2 lg:p-2'>
      <div
        className='flex flex-col items-center justify-center gap-2 lg:gap-8 bg-black/90 p-2 text-center text-white 
        lg:col-span-3 lg:rounded-2xl lg:text-xl'
      >
        <i className='bi bi-display text-5xl'></i>
        <h2 className=''>On your Desktop</h2>
      </div>
      <div
        className='flex flex-col items-center justify-center gap-2 lg:gap-8 bg-black/90 p-2 text-center text-white 
        lg:row-span-2 lg:rounded-2xl lg:text-xl'
      >
        <i className='bi bi-phone text-5xl'></i>
        <h2>On your Phone</h2>
      </div>
      <div
        className='flex flex-col items-center justify-center gap-2 lg:gap-8 bg-black/90 p-2 text-center 
        text-white lg:rounded-2xl lg:text-xl'
      >
        <i className='bi bi-shield-check text-5xl'></i>
        <h2>Privacy everywhere</h2>
      </div>
      <div
        className='flex flex-col items-center justify-center gap-2 lg:gap-8 bg-black/90 p-2 text-center text-white 
        lg:col-span-2 lg:rounded-2xl lg:text-xl'
      >
        <i className='bi bi-globe2 text-5xl'></i>
        <h2>Always connected</h2>
      </div>
    </div>
  );
};

export default SafeBrowsingGrid;
