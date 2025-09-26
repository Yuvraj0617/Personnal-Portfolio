import ProjectCard from '../Components/Projects/ProjectCard'
function Project() {
  return (
    <>
    <div id='Projects' className=' text-center p-4 sm:p-6 rounded-lg  shadow-md'>
        <div>
          <h1 className='text-6xl text-neutral-50 font-bold mb-4'>My Projects</h1>
          <p className='text-2xl text-gray-500 mb-4'>Here are some of the projects I've worked on:</p>
        </div>
        <div className='mt-12'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 '>
            <ProjectCard />
        </div>
        </div>
    </div>
    </>
  )
}

export default Project