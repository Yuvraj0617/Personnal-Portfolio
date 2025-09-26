import {Link} from 'react-scroll'
import Photo from '../../assets/Photo.jpg'
import { useContext } from 'react'
import { DataContext } from '../../Context/AllData'
import { TypeAnimation } from 'react-type-animation';
export default function Home() {
  const { data } = useContext(DataContext)
  const {overview} = data || {};
  const Response=overview?.[0];
  return (
    <>
      <div className='flex md:flex-row flex-col-reverse items-center justify-center w-full min-h-screen px-4 sm:px-6 lg:px-8 py-12 md:py-0'>
        <div className='text-center md:w-1/2 w-full p-4 sm:p-6'>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-neutral-50 leading-tight">{Response?.headline}</h1>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-cyan-500 mt-4">
            <TypeAnimation
            sequence={[
              'Frontend Developer',
              1000,
              'React Developer',
              1000,
              'JavaScript Enthusiast',
              1000,
              'Web Developer',
              1000,
              'Full Stack Developer',
              1000,
              'MERN Stack Developer',
              1000
            ]} 
            wrapper='span'
            repeat={Infinity}
            speed={50}
            cursor={true}
            />
          </h3>
          <p className="text-lg sm:text-xl md:text-2xl text-neutral-50 mt-4">
            I am <span className='text-amber-600 font-bold'>Yubraj Sapkota</span> and {Response?.bio}
            </p>
          <div className='flex items-center justify-center mt-6 gap-4'>
            <Link to="Contact" smooth={true} duration={300}>
              <button className='bg-amber-500  hover:scale-105 hover:text-gray-50 text-xl font-semibold md:text-2xl cursor-pointer px-4 py-2 rounded-md'>Contact Me</button>
            </Link>
            <a href="#" >
              <button
               className='bg-amber-500 text-xl md:text-2xl hover:scale-105 hover:text-gray-50 font-semibold cursor-pointer px-4 py-2 rounded-md'
               >My Resume </button>
            </a>
          </div>
        </div>
        <div className='flex mt-2 justify-center md:h-2/3 h-1/2 md:w-1/2 w-full p-4'>
          <img
            className='rounded-full shadow-md w-48 sm:w-64 md:w-80 h-48 sm:h-64 md:h-80 object-cover'
            src={Photo} 
            alt="Profile photo of Yubraj Sapkota" 
          />
        </div>
      </div>
    </>
  )
}
