import React from "react";
import Hotel from "../assets/Image1.jpeg";
import { ReactTyped } from "react-typed";
import Desk from "../components/Desk";
import Book from "../components/Book";
const Home = () => {
  return (
    <>

   
    <div className="w-full  h-96 border  mt-3 relative">
      <img src={Hotel} className="h-full w-full object-cover -z-10" alt="" />
      <div className="w-full h-full z-[2] bg-opacity-30 bg-black absolute top-0"></div>
      <div className="w-full mx-auto  h-full flex justify-center items-center absolute top-0 border border-black z-10">
        <h1 className="text-white text-4xl">
          <ReactTyped
            strings={["Welcome to <br/> Numetry Technology Digital Marketing"]}
            typeSpeed={100}
            backSpeed={50}
            loop={true}
          />
        </h1>
      </div>
    </div>
    <Desk/>
    <Book/>
    </>
  );
};

export default Home;
