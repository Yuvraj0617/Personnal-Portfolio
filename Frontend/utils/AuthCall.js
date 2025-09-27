import Axios from 'axios'
import base_url from '../utils/Backendcall';

const api = Axios.create({
  baseURL: `${base_url}/api/`,
  withCredentials: true,
});
export default api;
