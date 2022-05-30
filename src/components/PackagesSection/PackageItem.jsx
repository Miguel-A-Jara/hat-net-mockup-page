import React from 'react';
import Button from '../Button/Button';

const PackageItem = ({ title, price }) => {
  return (
    <div className='z-10 flex w-full flex-col items-center justify-around gap-4 bg-gradient-to-tr from-purple/70 to-blue-700/30 p-8 backdrop-blur-3xl sm:max-w-[20em] md:rounded-lg'>
      <h3 className='text-5xl font-bold uppercase text-white'>{title}</h3>

      <div className='flex flex-col items-center justify-around gap-8 text-white'>
        <p className='font-extralight text-3xl'>30 days trial!</p>
        <p className='text-center text-5xl font-bold'>${price}</p>
      </div>

      <Button title={`${title} tier`} />
    </div>
  );
};

export default PackageItem;
