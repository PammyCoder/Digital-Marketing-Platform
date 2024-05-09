import React from "react";
import Hotel from "../assets/hotel.jpg";
import Hotel2 from "../assets/hotel2.jpg";
import Hotel3 from "../assets/hotel3.jpg";
import Hotel4 from "../assets/hotel4.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Autoplay } from "swiper/modules";
import "swiper/css/autoplay";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
const Desk = () => {
  return (
    <>
      <div className="max-w-[1240px] my-[40px] mx-auto md:h-[200px] p-2 flex flex-col items-center justify-center  h-[600px] gap-4  md:grid grid-cols-2">
        <div className="h-[200px]  col-span-1 w-[80%]">
          {/* <img src={Hotel} alt="" className='object-contain w-full h-full '/> */}

          <Swiper
            className="w-full h-full"
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            autoplay={true}
            spaceBetween={5}
            slidesPerView={1}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            
          >
            <SwiperSlide className="slide">
              
              <img
                className="object-cover w-full h-full"
                src={Hotel}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide className="slide">
            
              <img
                className="object-cover w-full h-full"
                src={Hotel2}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide className="slide">
             
              <img
                className="object-cover w-full h-full"
                src={Hotel3}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide className="slide">
              
              <img
                className="object-cover w-full h-full"
                src={Hotel4}
                alt=""
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="h-[200px] mt-4 col-span-1 flex flex-col justify-center p-5 rounded-md">
          <h1 className=" underline font-bold my-2 text-lg text-center md:text-left ">
            visit Our New site
          </h1>
          <p className="my-2 text-lg">
            welcome to Digital Marketing . Your can save your time and visit here and collects ideas for your self.
          </p>
          <button className="bg-black text-white p-3 rounded-md w-[30%] mb-2 animate-pulse">
            {" "}
            Vist Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Desk;
