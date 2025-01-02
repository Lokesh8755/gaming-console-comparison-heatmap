import React from 'react';
import HeatmapCell from './HeatmapCell';
import { formatFeatureLabel } from '../utils/formatters';

const HeatmapGrid = ({ data }) => {
  const features = data.data[0].data.map(item => item.label);
  const consoles = data.data.map(item => item.name);

  return (
    <div className="overflow-x-auto">
      <div className="min-w-[1000px]">
        <div className="grid grid-cols-[200px_repeat(7,1fr)] mb-8">
          <div className="col-start-1"></div>
          {consoles.map((console, index) => (
            <div key={index} className="relative h-32">
              {/* <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 origin-bottom-left text-sm text-gray-600 whitespace-nowrap">
                {console}
              </span> */}
            </div>
          ))}
        </div>

        {features.map((feature, rowIndex) => (
          <div key={rowIndex} className="grid grid-cols-[150px_repeat(7,1fr)]">
            <div className="flex items-center text-sm text-gray-600 font-medium px-4">
              {formatFeatureLabel(feature)}
            </div>
            {data.data.map((console, colIndex) => {
              const cellData = console.data.find(d => d.label === feature);
              return (
                <HeatmapCell
                  key={`${rowIndex}-${colIndex}`}
                  value={cellData.value}
                />
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeatmapGrid;