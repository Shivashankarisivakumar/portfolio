import React from 'react'
import Cta from './Cta'
import Social from './Social'

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen text-[#ffffff] px-6 gap-5">
    <p className="font-medium text-xs sm:text-sm p-1 text-[#Ffffff]">Hello, I'm</p>
    <h1 className="font-medium text-[#ffffff] text-3xl sm:text-[2.5rem]  text-center">
        Shivashangari
    </h1>
    <p className="text-[#ffffff99] text-xs sm:text-sm font-medium p-1">Web Developer</p>
    <Cta/>
    <Social/>
</div>

  )
}

export default Home