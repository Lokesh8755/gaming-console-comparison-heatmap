export const fetchData = async () => {
    try {
      const response = await fetch('/assessment.json');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error('Error loading data: ' + error.message);
    }
  };