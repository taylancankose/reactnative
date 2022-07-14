import React, {useEffect, useState} from 'react';
import axios from 'axios';

function useFetch(url) {
  const [results, setResults] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      const res = await response.data;
      setResults(res);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {results, loading, error};
}

export default useFetch;
