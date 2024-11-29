import React from 'react'
import Mee from '../assets/women.png'
const About = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center p-5">
  <h1 className="font-medium text-xs text-light p-[2px]">Get to know</h1>
  <p className="font-medium text-[22px] text-primary p-[2px]">About Me</p>

  <div className="flex flex-col md:flex-row justify-center items-center mx-5 md:mx-20 gap-10 md:gap-20 mt-10">
    <img src={Mee} alt="About_Img" className="w-[200px] h-[200px] md:w-[250px] md:h-[250px] rounded-full rotate-[-10deg] hover:rotate-0 transition-all duration-700 ease-in-out cursor-pointer" />
    <div className="flex flex-col text-light text-center md:text-left">
      <h1 className="text-xl mb-2">Hi!!</h1>
      <p className="text-baseconsole.log('About component rendered'); leading-loose">
        I’m Shivashangari Sivakumar, a passionate frontend developer with hands-on experience in creating intuitive and user-friendly web applications. During my<span className='font-medium text-white'> internship at NexarcIT</span> , I honed my skills in building responsive and visually appealing web interfaces.
        I specialize in modern web technologies, including <span className='font-medium text-white uppercase'>React, Next.js, Tailwind CSS, and JavaScript,</span> to craft seamless digital experiences. I thrive on learning, problem-solving, and pushing the boundaries of web development to deliver innovative and efficient solutions.
        Beyond coding, let’s connect and build something extraordinary together!
      </p>
    </div>
  </div>
</div>
  )
}

export default About