import React from 'react';
import logoImage from '../assets/Logo.png';
import menuImage from '../assets/Menu.png';
import generalImage from '../assets/General.png';

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-900 text-white p-4 flex flex-col justify-between h-screen">
      {/* Logo at the top */}
      <img src={logoImage} alt="Logo" className="w-full h-auto mb-8" />

      {/* Menu section */}
      <nav className="flex flex-col space-y-2">
        <img src={menuImage} alt="Menu" className="w-full h-auto" />
      </nav>

      {/* General image at the bottom */}
      <div className="mt-auto">
        <img src={generalImage} alt="General" className="w-full h-auto mb-14" />
      </div>
    </div>
  );
};

export default Sidebar;

