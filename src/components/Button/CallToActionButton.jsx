import React from 'react';

const CallToActionButton = ({ title }) => {
  return (
    <button
      className={`w-full rounded-3xl bg-purple p-4 font-bold uppercase text-white transition-all 
      duration-300 hover:animate-pulse hover:bg-red-500 hover:text-white lg:w-auto lg:text-2xl`}
    >
      {title}
    </button>
  );
};

export default CallToActionButton;
