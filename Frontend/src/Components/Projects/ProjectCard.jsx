import { useContext } from 'react'
import { DataContext } from "../../Context/AllData";
export default function ProjectCard() {
  const { data } = useContext(DataContext);
  const { projects } = data || {};

  return (
    <>
      {projects?.map((project, index) => (
        <div key={index} className='bg-gray-800 p-4 rounded-lg shadow-md'>
          <img
            className='w-full h-48 object-cover rounded-md mb-4'
            src={project?.projectImg} alt="Project Image" />
          <h2
            className='text-3xl font-bold text-neutral-50 mb-2'>
            {project?.projectName}
          </h2>
          <p
            className='text-gray-500 text-xl'>
            {project?.projectDescription}
          </p>
          <p className='text-gray-400 mt-3'>
            {project?.techStack}
          </p>
          <a
            target='_blank'
            href={project?.projectLink}
            className='text-blue-500 hover:underline'>
            View Project
          </a>
        </div>
      ))}
    </>
  )
}
