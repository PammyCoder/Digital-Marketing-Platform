import React, { useState } from "react";
import { IoHome } from "react-icons/io5";
import { ImUsers } from "react-icons/im";
import { GrServices } from "react-icons/gr";
import { FaBlogger } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
const Header = () => {
  const [toggle,setToggle]=useState(false)
  return (
    <nav className="w-full p-3  bg-gradient-to-r from-cyan-500 to-blue-900 ">
      <div className="max-w-[1280px]  mx-auto flex justify-between ">
        <div className="text-white text-2xl"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6NRnHAaH3UERvRfDdtJO_PFuAsCX5lhWsCA&usqp=CAU" alt="" className="w-15 h-10 rounded-full duration-300 hover:rotate-[360deg]" /></div>
        {toggle ? (
            <AiOutlineClose
              onClick={() => setToggle(!toggle)}
              className="text-white text-2xl md:hidden block"
            />
          ) : (
            <AiOutlineMenu
              onClick={() => setToggle(!toggle)}
              className="text-white text-2xl md:hidden block"
            />
          )}
        <ul className="hidden md:flex justify-center  items-center text-white text-xl gap-14">
          <li className=" ">
            <Link to="/" className=" flex justify-center items-center gap-4">
              <IoHome  className="text-2xl duration-300 hover:scale-150"/>
              Home
            </Link>
          </li>
          <li >
            <Link to="/about" className=" flex justify-center items-center gap-4"> <ImUsers   className="text-2xl duration-300 hover:scale-150"/>About Us</Link>
          </li>
          <li >
            <Link to="/location" className=" flex justify-center items-center gap-4"><GrServices   className="text-2xl duration-300 hover:scale-150"/>Location</Link>
          </li>
          <li >
            <Link to="/blog" className=" flex justify-center items-center gap-4"> <FaBlogger   className="text-2xl duration-300 hover:scale-150"/>Blog</Link>
          </li>
        </ul>
        {/* responsive */}
        <ul className={`duration-300 md:hidden flex text-white gap-5 text-lg fixed bg-black top-[65px] z-50 ${toggle?'left-[0]':'left-[-100%]'} w-full  flex-col items-center justify-center `}>
          <li className=" ">
            <Link to="/" className=" flex justify-center items-center gap-4">
              <IoHome  className="text-2xl duration-300 hover:scale-150"/>
              Home
            </Link>
          </li>
          <li >
            <Link to="/about" className=" flex justify-center items-center gap-4"> <ImUsers   className="text-2xl duration-300 hover:scale-150"/>About Us</Link>
          </li>
          <li >
            <Link to="/location" className=" flex justify-center items-center gap-4"><GrServices   className="text-2xl duration-300 hover:scale-150"/>Location</Link>
          </li>
          <li >
            <Link to="/blog" className=" flex justify-center items-center gap-4"> <FaBlogger   className="text-2xl duration-300 hover:scale-150"/>Blog</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
