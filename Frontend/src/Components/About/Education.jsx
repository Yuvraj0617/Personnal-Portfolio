import React from 'react'
import { FaGraduationCap } from "react-icons/fa"
import { FaCalendarAlt } from "react-icons/fa";
import { useContext } from 'react';
import { DataContext } from '../../Context/AllData';

export default function Education() {
  const{data}=useContext(DataContext)
  const{education}=data || {};

  return (
    <>
    {education?.map((edu, index) => (
      <div className='md:w-190 w-full p-6 bg-gray-900/80 border border-gray-700 rounded-3xl' key={index}>
        <div className=' mb-4 flex'>
          <div className='flex items-center justify-center mr-8 w-25 h-25 bg-gray-800 rounded-full'>
            <FaGraduationCap size={60} className='inline-block mr-2  text-indigo-500 ' />
          </div>
          <div>
            <h4 className='font-bold md:text-3xl text-2xl text-neutral-50'>{edu?.institution}</h4>
            <p className='text-gray-400 text-lg'>{edu?.course}</p>
            <p className='text-gray-400 text-lg '>
              <FaCalendarAlt className='inline-block mr-2 text-gray-400' />
              {edu?.year}
            </p>
            <p className='text-gray-400 text-lg '>Grade: {edu?.grade}</p>
          </div>
        </div>
      </div>
    ))}
    </>
  )
}
