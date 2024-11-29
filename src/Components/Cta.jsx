import React from 'react'
import RESUME from '../assets/resume.pdf'
const Cta = () => {
  return (
    <div className='flex gap-4'>
        <a href={RESUME} download className="relative inline-flex items-center justify-center p-4 text-sm overflow-hidden font-medium tracking-tighter hover:text-[#1f1f38] text-[#4db5ff] border border-[#4db5ff] bg-transparent rounded-lg group">
                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 "></span>
                <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 "></span>
                <span className="relative">Download Resume</span>
        </a>
     <a href="" className=' text-sm rounded-md p-4 bg-[#4db5ff] text-[#1f1f38] hover:bg-transparent hover:border hover:text-white'>Lets Talk</a>
      
    </div>
  )
}

export default Cta