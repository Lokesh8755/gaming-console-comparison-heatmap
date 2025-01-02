import React, { useState, useEffect } from 'react';
import HeatmapGrid from './HeatmapGrid';
import { fetchData } from '../utils/dataUtils';
import RatingLegend from './RatingLegend';

const HeatmapContainer = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const result = await fetchData();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) return <div className="text-center p-2">Loading...</div>;
  if (error) return <div className="text-red-500 text-center p-2">{error}</div>;

  return (
    <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-lg p-2 relative">
      <h1 className="text-2xl font-bold text-gray-800 pl-2">
        Gaming Console Features Comparison Heatmap
      </h1>
      <HeatmapGrid data={data} />
      <RatingLegend />
    </div>
  );
};

export default HeatmapContainer;