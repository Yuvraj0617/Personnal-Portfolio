import { createContext, useState,useEffect} from 'react'
import api from '../../utils/AuthCall'
const AuthContext = createContext();
const AuthProvider = ({ children }) => {

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const authdata = async () => {
    try {
      const response = await api.get('auth/me');
      setData(response.data);
      return response.data;

    } 
    catch (error) {
      setError(error);
      return null;
    } 
    finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    authdata();
  }, []);
  
  const refreshUser = async () => {
    return await authdata();
  }
  return (
    <AuthContext.Provider value={{ loading, data, error, refreshUser }}>
      {children}
    </AuthContext.Provider>
  )
}
export { AuthContext, AuthProvider }





