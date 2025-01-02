export const getBackgroundColor = (value) => {
    if (value >= 4.5) return 'bg-orange-600';
    if (value >= 4.0) return 'bg-orange-500';
    if (value >= 3.5) return 'bg-orange-400';
    if (value >= 3.0) return 'bg-orange-300';
    if (value >= 2.5) return 'bg-orange-200';
    return 'bg-orange-100';
  };