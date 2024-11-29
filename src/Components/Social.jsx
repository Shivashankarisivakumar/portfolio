import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import { PiLineVerticalThin } from "react-icons/pi";
import { GoHorizontalRule } from "react-icons/go";

const Social = () => {
  return (
    <div className="text-[#4db5ff] flex flex-row items-center text-[20px] gap-5 p-4 sm:absolute sm:left-[10%] sm:bottom-20 sm:flex-col">
  
    <a href="https://www.linkedin.com/in/shivashangarisivakumar13/" target={'_blank'} className="hover:text-white">
      <BsLinkedin />
    </a>
    <a 
      href="https://github.com/Shivashankarisivakumar" target={'_blank'} className="hover:text-white">
      <FaGithub />
    </a>
    <a href="https://www.instagram.com/___infinity___gurl___" target={'_blank'}className="hover:text-white">
      <BsInstagram />
    </a>
    <p className='text-5xl hidden sm:block'><PiLineVerticalThin /></p>
    <span className='text-4xl block sm:hidden'><GoHorizontalRule /></span>
  </div>
  )
}

export default Social