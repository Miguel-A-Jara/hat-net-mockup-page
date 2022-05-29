import React from 'react';

const Button = ({ title }) => {
  return (
    <button
      className={`w-full rounded-3xl bg-white p-4 font-bold uppercase text-purple transition-all 
      duration-300 hover:bg-black/50 hover:text-white active:bg-black/50 active:text-white lg:w-auto 
      lg:text-2xl`}
    >
      {title}
    </button>
  );
};

export default Button;
