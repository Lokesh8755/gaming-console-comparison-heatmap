// src/components/RatingLegend.js
import React from 'react';

const RatingLegend = () => {
  const ratings = [
    { range: '4.5+', color: 'bg-orange-600' },
    { range: '4.0-4.4', color: 'bg-orange-500' },
    { range: '3.5-3.9', color: 'bg-orange-400' },
    { range: '3.0-3.4', color: 'bg-orange-300' },
    { range: '2.5-2.9', color: 'bg-orange-200' },
    { range: '<2.5', color: 'bg-orange-100' }
  ];

  return (
    <div className="absolute top-4 right-4 bg-white p-2 rounded-lg shadow-md">
      <h3 className="text-sm font-semibold mb-2">Rating Scale</h3>
      <div className="flex gap-4">
        {ratings.map((rating, index) => (
          <div key={index} className="flex items-center gap-1">
            <div className={`w-6 h-6 ${rating.color}`}></div>
            <span className="text-xs text-gray-600 whitespace-nowrap">{rating.range}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RatingLegend;