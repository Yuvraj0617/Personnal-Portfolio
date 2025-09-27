import { useForm } from 'react-hook-form';
import Axios from 'axios';
import base_url from '../../../utils/Backendcall';
import { toast } from 'react-toastify';
import { DataContext } from '../../Context/AllData'
import { useContext } from 'react'
export default function ProjectAdmin() {
  const { register, handleSubmit, reset } = useForm();

  const { data } = useContext(DataContext);
  const { projects } = data || {};

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append('projectImage', data.projectImage[0]);
      formData.append('projectName', data.projectName);
      formData.append('projectDescription', data.projectDescription);
      formData.append('techStack', data.techStack);
      formData.append('projectLink', data.projectLink);

      const response = await Axios.post(`${base_url}/api/admin/projects`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('Success:', response.data);
      toast.success(' Added successfully!');
      reset();
    } catch (error) {
      console.error('Error adding project:', error);
      toast.error('Failed to Add Project.');
    }
  };

  const RemoveData=async (data) => {
      try{
      const response = await Axios.delete(`${base_url}/api/admin/projects/${data._id}`);
      console.log('Success:', response.data);
      toast.success('Removed successfully!');
    }
    catch (error) {
      console.log(error)
      toast.error('Failed to remove!');
    }
  }

  return (
    <div className='my-8 min-w-3xl'>
      <h2 className='text-4xl text-amber-50 font-bold mb-4'>Project Management</h2>
      <p className='text-gray-400 text-2xl mb-6'>Create and manage your projects from here.</p>
      <div className='mt-4 p-6 w-lg bg-gray-800 rounded-lg shadow-xl ml-6'>
        <form onSubmit={handleSubmit(onSubmit)} encType='multipart/form-data'>
          <div className='flex flex-col space-y-4 '>

            <input
              type="file"
              id="projectImage"
              accept="image/*"
              placeholder="Upload project image"
              className="bg-gray-700 border border-amber-300 p-3 rounded-md text-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-500"
              {...register("projectImage")}
            />

            <input
              type="text"
              id="projectName"
              placeholder="Enter project name"
              className="bg-gray-700 border border-amber-300 p-3 rounded-md text-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-500"
              {...register("projectName")}
            />
            <textarea
              id="projectDescription"
              placeholder="Enter project description"
              className="bg-gray-700 border border-amber-300 p-3 rounded-md text-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-500"
              {...register("projectDescription")}
            />
          
            <input
              type="text"
              id="techStack"
              placeholder="Enter tech stack"
              className="bg-gray-700 border border-amber-300 p-3 rounded-md text-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-500"
              {...register("techStack")}
            />
            <input
              type="text"
              id="projectLink"
              placeholder="Enter project link"
              className="bg-gray-700 border border-amber-300 p-3 rounded-md text-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-500"
              {...register("projectLink")}
            />

            <div className='mt-6 max-w-2xl'>
              <button
                type="submit"
                className='bg-amber-500 hover:bg-amber-600 text-gray-900 font-semibold px-6 py-3 rounded-md transition duration-300 ease-in-out'
              >
                Add Project
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="bg-gray-800 mt-3 mr-8 text-center rounded-lg shadow-xl ml-6 p-6">
        <h3 className="text-2xl text-center text-amber-50 font-bold mb-4">My Projects</h3>
        <div className='grid md:grid-cols-2 grid-cols-2 gap-4 p-4'>
          {projects?.map((project, index) => (
            <div key={index} className='max-w-max p-6 bg-gray-900/80 border border-gray-700 rounded-3xl'
            >
              <div>
                <img src={project?.projectImg} alt="" className="w-full h-32 object-cover rounded-md mb-4" />
                <h4 className="text-lg text-amber-50 font-bold">{project?.projectName}</h4>
                <p className="text-gray-400">{project?.projectDescription}</p>
                <p className='text-gray-400 mt-3'>{project?.techStack}</p>
                <a
                  href={(project?.projectLink) ? project?.projectLink : "#"}
                  className='text-indigo-400  hover:text-amber-500'
                >Demo</a>
              </div>
              <div className='mt-4'>
                <button 
                onClick={() => RemoveData(project)}
                className='bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-md'>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
