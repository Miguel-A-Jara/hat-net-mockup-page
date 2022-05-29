import React from 'react';
import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';

const NavbarContainer = () => {
  return (
    <>
      {/* Desktop */}
      <DesktopNavbar />

      {/* Mobile */}
      <MobileNavbar />
    </>
  );
};

export default NavbarContainer;
