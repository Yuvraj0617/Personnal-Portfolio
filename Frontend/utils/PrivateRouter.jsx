import { useContext } from 'react'
import { AuthContext } from '../src/Context/Auth'
import { Navigate } from 'react-router-dom';

  function PrivateRouter({ children }) {
    const { data, loading } =  useContext(AuthContext);
    if (loading) {
        return <div>Loading...</div>;
    }
    if (!data) {
        return <Navigate to="/login" replace/>
    }
    return children;

}

export default PrivateRouter;

