import React from "react";
import { ReactTyped } from "react-typed";
const Book = () => {
  return (
    <>
      <div className="mt-24 mb-4 w-ful bg-gradient-to-r from-cyan-500 to-blue-900 p-4">
        <div className="max-w-[1240px] mx-auto md:flex justify-between py-[50px]">
          <div className="m-2 ">
            <h1 className="text-[20px] md:text-[40px] font-bold  text-white">Want to Do Internship in Numetry Technology</h1>
            <span className="text-white">Sign up and go visit this Software Company site</span>
          </div>
          <div className="">
            <input type="text" className="sm:w-full p-3 mb-2 mr-2 text-salte-600 " placeholder="Email"/>
            <button className='bg-black text-xl text-white p-3 mt-[2px] rounded-md mb-2'> Book Now </button>
            <br />
            <p className="text-white mt-2 text-lg">
                
                <ReactTyped strings={["We are waiting For you..."]} typeSpeed={100} backSpeed={50} loop={true}/>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Book;
