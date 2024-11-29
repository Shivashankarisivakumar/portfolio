import React from 'react';
import { LiaHomeSolid } from "react-icons/lia";
import { LuUser2 } from "react-icons/lu";
import { GoProject } from "react-icons/go";
import { LiaBookSolid } from "react-icons/lia";
import { BiMessageSquareDetail } from "react-icons/bi";
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="fixed bottom-5 flex justify-center items-center w-full z-50">
      <div className="w-[300px] h-[63px] bg-[#181032] rounded-full flex justify-evenly items-center shadow-custom">
        {/* Home */}
        <NavLink
          to="/"
          className={({ isActive }) =>
            `w-[38px] h-[38px] flex items-center justify-center text-base cursor-pointer rounded-full ${
              isActive ? "bg-bg text-white" : "text-[#ffff] hover:bg-[#0000004d]"
            }`
          }
        >
          <LiaHomeSolid />
        </NavLink>

        {/* About */}
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `w-[38px] h-[38px] flex items-center justify-center text-base cursor-pointer rounded-full ${
              isActive ? "bg-bg text-white" : "text-[#ffff] hover:bg-[#0000004d]"
            }`
          }
        >
          <LuUser2 />
        </NavLink>

        {/* Services */}
        <NavLink
          to="/services"
          className={({ isActive }) =>
            `w-[38px] h-[38px] flex items-center justify-center text-base cursor-pointer rounded-full ${
              isActive ? "bg-bg text-white" : "text-[#ffff] hover:bg-[#0000004d]"
            }`
          }
        >
          <LiaBookSolid />
        </NavLink>

        {/* Projects */}
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `w-[38px] h-[38px] flex items-center justify-center text-base cursor-pointer rounded-full ${
              isActive ? "bg-bg text-white" : "text-[#ffff] hover:bg-[#0000004d]"
            }`
          }
        >
          <GoProject />
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `w-[38px] h-[38px] flex items-center justify-center text-base cursor-pointer rounded-full  ${
              isActive ? "bg-bg text-white" : "text-[#ffff] hover:bg-[#0000004d]"
            }`
          }
        >
          <BiMessageSquareDetail />
        </NavLink>
      </div>
    </div>
  );
};

export default Nav;
