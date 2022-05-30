import React from 'react';
import ParticlesContainer from '../Particles/ParticlesContainer';
import PackageItem from './PackageItem';

const PackagesSection = () => {
  return (
    <div className='grid min-h-screen grid-rows-1 bg-black lg:grid-cols-2 py-4'>
      <div
        className='col-span-full row-span-full flex flex-col flex-wrap items-center justify-center gap-4 
      bg-gradient-to-tr from-black/30 to-black/50 font-extralight backdrop-blur-sm lg:static lg:col-span-1 lg:row-span-1 md:flex-row'
      >
        <h2 className='z-10 w-full py-4 text-center text-5xl text-white lg:text-7xl'>
          Still not sure?
        </h2>
        <h3 className='z-10 w-full text-center text-3xl uppercase text-white'>
          Try one of our{' '}
          <span className='text-5xl font-bold text-purple'>packages!</span>
        </h3>
        <PackageItem price={'50'} title={'silver'} />
        <PackageItem price={'100'} title={'gold'} />
        <PackageItem price={'300'} title={'diamond'} />
      </div>
      <div className=' col-span-full row-span-full lg:col-span-1 lg:row-span-1'>
        <ParticlesContainer />
      </div>
    </div>
  );
};

export default PackagesSection;
