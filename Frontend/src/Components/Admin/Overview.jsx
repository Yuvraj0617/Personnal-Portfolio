import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import { toast } from 'react-toastify';
export default function Overview() {
  const { register, handleSubmit } = useForm();
  const [headline, setHeadline] = useState("");
  const [bio, setBio] = useState("");
  const [id, setId] = useState(null)


  const GetData = async () => {
    try {
      const res = await Axios.get(`/api/admin/overview/`);
      const overviewData = res.data[0]; 
      setHeadline(overviewData.headline);
      setBio(overviewData.bio);
      setId(overviewData._id);
    } catch (error) {
      toast.error("Failed to fetch data.");
      console.error(error);
    }
  }
  useEffect(() => {
    GetData();
  }, [])

  // Method will be change into get overview by id
  const SubmitData = async (data) => {
    if (!id) {
      toast.error("No overview ID found.");
      return;
    }
    const updateData = {
      headline: data.headline || headline,
      bio: data.bio || bio
    };
    try {
      const response = await Axios.patch(`/api/admin/overview/${id}`, updateData);
      console.log("Update:", response.data);
      toast.success("Overview updated successfully!");
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to update overview.");
    }
  };

  return (
    <div className='w-full  p-6 justify-center'>
      <div className='flex flex-row mb-4'>
        <div className='flex-1'>
          <h1 className='text-4xl font-bold text-amber-50'>Overview</h1>
          <p className='text-gray-600 text-2xl font-medium'>Update your HeadLine and Bio below:</p>
        </div>
      </div>
      <form onSubmit={handleSubmit(SubmitData)} className='flex flex-col gap-4'>
        <div className='flex flex-col gap-4 justify-center bg-gray-800 m-3 p-6 rounded-lg shadow-lg w-lg'>
          <input
            type='text'
            {...register("headline")}
            className='border p-2 rounded border-amber-400 bg-gray-700 text-amber-50'
            value={headline}
            onChange={(e) => setHeadline(e.target.value)}
          />
          <textarea {...register("bio")}
            className='border p-2 rounded border-amber-400 bg-gray-700 text-amber-50'
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
        </div>
        <div className='flex justify-center mr-4'>
          <button
            className='bg-blue-500 text-white text-2xl rounded-2xl p-2'
            type="submit" >
              Update
          </button>
        </div>
      </form>
    </div>
  )
}
