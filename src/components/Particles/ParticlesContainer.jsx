import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import particlesConfig from './particles-config';

const ParticlesContainer = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      className='h-full'
      init={particlesInit}
      params={particlesConfig}
    ></Particles>
  );
};

export default ParticlesContainer;
