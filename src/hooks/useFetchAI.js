import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useFetchAI(endpoint, token) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(endpoint, { headers: { Authorization: `Bearer ${token}` } });
        setData(res.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [endpoint, token]);

  return { data, loading, error };
}
