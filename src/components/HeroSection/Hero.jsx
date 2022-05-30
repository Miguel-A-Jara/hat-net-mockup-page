import React from 'react';
import Button from '../Button/Button';
import CallToActionButton from '../Button/CallToActionButton';

const Hero = () => {
  return (
    <div className='mt-10 flex flex-col items-center justify-between lg:flex-row-reverse'>
      {/* Image Hero */}
      <div className='relative w-full rounded-l-3xl px-2'>
        <img
          className='relative z-10 mx-auto ml-auto block w-full max-w-sm object-cover md:max-w-screen-sm lg:max-w-screen-md'
          alt='hero-page'
          src='/public/assets/SVGs/undraw_functions_re_alho.svg'
        />
        <div className='absolute right-0 bottom-0 min-h-[25%] w-3/4 rounded-l-full bg-purple'></div>
      </div>

      {/* Title Hero */}
      <div className='flex w-full flex-wrap px-4 text-center text-purple lg:pl-20 lg:text-left'>
        <div className='w-full'>
          <h2 className='text-2xl md:text-4xl xl:text-6xl'>
            Browse anonymously with
          </h2>
          <h1 className='text-5xl font-extrabold md:text-8xl xl:text-9xl'>
            Hat-Net
          </h1>
        </div>

        {/* Buttons Hero */}
        <div className='my-8 flex w-full flex-col items-center justify-start gap-8 lg:flex-row lg:gap-12'>
          <Button title={'Learn More'} />
          <CallToActionButton title={'Try it now'} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
