// src/components/HeatmapCell.js
import React from 'react';
import { getBackgroundColor } from '../utils/colorUtils';

const HeatmapCell = ({ value }) => {
  const bgColor = getBackgroundColor(value);
  const [showValue, setShowValue] = React.useState(false);

  return (
    <div 
      className={`h-12 relative ${bgColor} cursor-pointer`}
      onMouseEnter={() => setShowValue(true)}
      onMouseLeave={() => setShowValue(false)}
    >
      {showValue && (
        <div className="absolute inset-0 flex items-center justify-center text-white text-sm">
          {value.toFixed(1)}
        </div>
      )}
    </div>
  );
};

export default HeatmapCell;