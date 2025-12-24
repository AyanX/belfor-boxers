import { useState, useEffect } from 'react';
import axios from 'axios';
const useFetchData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [resetData, setResetData] = useState(null);

  const api = process.env.REACT_APP_API_URL || 'http://localhost:5000';
 
  useEffect(() => {
    let isMounted = true; // Prevents state updates on unmounted components
    const executeFetch = async () => {
      try {
        const response = await axios.get(`${api}/contacts`);
        const resetResponse = await axios.get(`${api}/reset`);

        const resetResult = resetResponse.data;
        const result = response.data;
        if (isMounted) {
          setData(result);
          setResetData(resetResult);
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
  return { data, loading, error,resetData };
};

export default useFetchData;