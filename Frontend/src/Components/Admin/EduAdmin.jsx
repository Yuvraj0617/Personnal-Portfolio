import { useForm } from 'react-hook-form';
import Axios from 'axios';
import base_url from '../../../utils/Backendcall';
import { toast } from 'react-toastify'
import { FaCalendarAlt } from "react-icons/fa"
import { useContext } from 'react';
import { DataContext } from '../../Context/AllData';

export default function EduAdmin() {

  const{data}=useContext(DataContext)
  const{education}=data || {};
  const { register, handleSubmit } = useForm();

  const RemoveData=async (data) => {
    try{
    const response = await Axios.delete(`${base_url}/api/admin/education/${data._id}`);
    console.log('Success:', response.data);
    toast.success('Removed successfully!'); 
  }
  catch (error) {
    console.log(error)
    toast.error('Failed to remove!');
  }
}

  const onSubmit = async (data) => {
    try {
      const response = await Axios.post(`${base_url}/api/admin/education`, data);
      console.log('Success:', response.data);
      toast.success('Updated successfully!');
    } catch (error) {
      console.error('Error:', error);
      toast.error('Failed to update!');
    }
  };

  return (
    <div className='my-8 min-w-2xl'>
      <h2 className='text-4xl text-amber-50 font-bold mb-4'>Education Management</h2>
      <p className='text-gray-400 text-2xl mb-6'>Add, edit, and remove your education details from here.</p>

      <div className='mt-4 p-6 w-lg bg-gray-800 rounded-lg shadow-xl ml-6'>
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
          <div className='flex flex-col space-y-4'>
            <input
              type="text"
              id="institution"
              placeholder="Enter your institution"
              className="bg-gray-700 border border-amber-300 p-3 rounded-md text-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-500"
              {...register("institution")}
            />

            <input
              type="text"
              id="course"
              placeholder="Enter your course"
              className="bg-gray-700 border border-amber-300 p-3 rounded-md text-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-500"
              {...register("course")}
            />

            <input
              type="text"
              id="year"
              placeholder="Enter year of completion"
              className="bg-gray-700 border border-amber-300 p-3 rounded-md text-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-500"
              {...register("year")}
            />
            <input
              type="text"
              id="grade"
              placeholder="Enter your Grade"
              className="bg-gray-700 border border-amber-300 p-3 rounded-md text-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-500"
              {...register("grade")}
            />

            <div className='mt-6'>
              <button
                type="submit"
                className='bg-amber-500 hover:bg-amber-600 text-gray-900 font-semibold px-6 py-3 rounded-md transition duration-300 ease-in-out'
              >
                Add Education
              </button>
            </div>
          </div>
        </form>
      </div>
      
      <div  className='bg-zinc-900 mt-3 w-full rounded-lg shadow-xl ml-6 p-6'>
          <h3 className='text-2xl text-center  text-amber-50 font-bold mb-4 p-6'> Education Details</h3>
          <div className='grid  md:grid-cols-3 grid-cols-2 gap-4 p-4'>
           {education?.map((edu, index) => (
          <div key={index} className='max-w-max p-6 bg-gray-900/80 border border-gray-700 rounded-3xl' >
              <div className=''> 
                <h4 className='font-bold md:text-2xl text-xl text-neutral-50'> {edu.institution}</h4>
                <p className='text-gray-400 text-lg'>{edu.course}</p>
                <p className='text-gray-400 text-lg '>
                  <FaCalendarAlt className='inline-block mr-2 text-gray-400' />
                  {edu.year}
                </p>
                <p 
                className='text-gray-400 text-lg'>
                  Grade: {edu.grade}
                </p>
            <div className='flex space-x-4 mt-4 '>
              <button 
              onClick={() => RemoveData(edu)}
              className='bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-md transition duration-300 ease-in-out'>
                Remove
              </button>
              <button className='bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-md transition duration-300 ease-in-out'>
                Edit
              </button>
            </div>
            </div>
        </div>
        ))}
        </div>
      </div>
   

    </div>
  )
} 
