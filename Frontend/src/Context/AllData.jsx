import { createContext, useState, useEffect } from 'react';
import Axios from 'axios';
import base_url from '../../utils/Backendcall';
const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  const getData = async () => {
    setLoading(true);
    try {
      const response = await Axios.get(`${base_url}/api/`);
      if (response.status !== 200) {
        throw new Error('Network response was not ok');
      }
      setData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <DataContext.Provider value={{ data, loading, error }}>
      {children}
    </DataContext.Provider>
  );
}
export { DataContext, DataProvider };