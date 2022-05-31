import React from 'react';
import SafeBrowsingGrid from './SafeBrowsingGrid';
import safeBrowsing from '../../images/safeBrowsing.svg';

const SafeBrowsing = () => {
  return (
    <div className='mt-20 flex min-h-screen flex-wrap gap-8 bg-purple p-4 lg:gap-0 lg:p-8'>
      {/* Title */}
      <h2 className='my-8 w-full text-center text-5xl font-extralight text-white lg:my-0 lg:mb-12 lg:text-7xl'>
        Why should you use {'  '}
        <span className='block font-bold lg:inline'>Hat-Net?</span>
      </h2>

      {/* Image */}
      <div className='relative w-full rounded-l-3xl lg:w-1/2'>
        <img
          src={safeBrowsing}
          alt='safe-browsing-img'
          className='mx-auto block'
        />
      </div>

      {/* Grid-Section */}
      <SafeBrowsingGrid />
    </div>
  );
};

export default SafeBrowsing;
