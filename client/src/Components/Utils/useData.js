import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [academyData, setAcademyData] = useState(null);



  const api = process.env.REACT_APP_API_URL
 
  useEffect(() => {
    let isMounted = true; // Prevents state updates on unmounted components
    const executeFetch = async () => {
      try {
        const res= await axios.get(`${api}/contacts`);
        const data = await axios.get(`${api}/academy`);
        if (isMounted) {
          setData(res.data);
          setAcademyData(data.data);
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
  return { data, loading, error, academyData  };
};

export default useFetchData;