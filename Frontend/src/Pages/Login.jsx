import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import api from '../../utils/AuthCall';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react'
import { AuthContext } from '../../src/Context/Auth'


function Login() {
  const navigate = useNavigate();
  const { refreshUser } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    try {
     await api.post('/auth/login', data);
      toast.success("Login Successful");
      await refreshUser();
      navigate('/admin');
    } catch (error) {
      console.error(error);
      toast.error("Login Failed");
    }
  }
  return (
    <>
      <div className="h-screen min-w-full flex flex-col items-center justify-center bg-black">
        <h3 className="text-white text-5xl font-semibold text-center mb-8">Welcome Back! Let's get you signed in.</h3>
        <div className="bg-white max-w-md shadow-md mx-auto rounded px-8 pt-6 pb-8 mb-4 text-center">
          <h1 className="text-3xl font-bold mb-4">Sign In</h1>
          <form onSubmit={handleSubmit(onSubmit)} >
            <label className="block mb-4">
              Email:
              <input type="email" className="border border-gray-300 p-2 rounded w-full"
                {...register("email")} required />
            </label>
            <label className="block mb-4">
              Password:
              <input type="password" className="border border-gray-300 p-2 rounded w-full"
                {...register("password")} required />
            </label>
             <button type="submit" className="bg-blue-500 text-white p-2 rounded-lg font-semibold text-lg focus:scale-90">Sign In</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login