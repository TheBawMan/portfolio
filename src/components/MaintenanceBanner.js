

import React from 'react';

const MaintenanceBanner = () => {
  return (
    <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-screen flex items-center justify-center">
      <div className="text-white text-center">
        <h1 className="text-4xl font-bold mb-4">TheBawMan 2.0 is coming soon</h1>
        <div className="animate-pulse">
          <p className="text-lg">This site is under maintenance</p>
        </div>
      </div>
    </div>
  );
};

export default MaintenanceBanner;
