import { useState, useEffect } from 'react';
import axios from 'axios';
const useFetchData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [resetData, setResetData] = useState(null);

  const [messageCount, setMessageCount] =useState(0)

  const [academyData, setAcademyData] = useState({})


  const api = process.env.REACT_APP_API_BASE_URL
 
  useEffect(() => {
    let isMounted = true; // Prevents state updates on unmounted components
    const executeFetch = async () => {
      try {
        const response = await axios.get(`${api}/contacts`);
        const resetResponse = await axios.get(`${api}/reset`);
        const messageCount = await axios.get(`${api}/count`)
        const academySettings = await axios.get(`${api}/academy`)

        const resetResult = resetResponse.data;
        const result = response.data;
        const messageLength = messageCount.data
        if (isMounted) {
          setData(result);
          setMessageCount(messageLength)
          setResetData(resetResult);
          setAcademyData(academySettings.data);
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
  return { data, loading, error,resetData,messageCount,academyData };
};

export default useFetchData;