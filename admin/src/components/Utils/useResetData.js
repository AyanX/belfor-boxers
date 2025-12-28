import { useState, useEffect } from 'react';
import axios from 'axios';
const useFetchData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const api = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000';
 
  useEffect(() => {
    let isMounted = true; // Prevents state updates on unmounted components
    const executeFetch = async () => {
      try {
        const response = await axios.get(`${api}/reset`);
        const result = response.data;
        if (isMounted) {
          setData(result);
          setLoading(false);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message);
          setLoading(false);
        }
      }
    };

    executeFetch();

    return () => {
      isMounted = false; // Cleanup to avoid memory leaks
    };
  }, [api]);
   // data is an object containing the fetched data
  return { data, loading, error };
};

export default useFetchData;