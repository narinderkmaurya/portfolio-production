"use client";

import React, { useState } from 'react';

const Tooltip = ({ text, children }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        onClick={() => setShowTooltip(true)}
      >
        {children}
      </div>
      {showTooltip && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2  text-white text-sm rounded-md whitespace-nowrap bg-[#72665d] bg-opacity-40 backdrop-blur-lg p-2 ">
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;