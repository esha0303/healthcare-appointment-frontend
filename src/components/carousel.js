import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import card from "../assets/stet.jpg";
// import { Autoplay, Pagination } from "swiper/modules";
const Carousel=()=>{
    // const swipeRef=useRef(null)
    return(
        <>
<div className="px-12 py-5 mt-12 font-medium">
<div className="flex items-center justify-center font-black bg-white shadow-inherit rounded-3xl">
        <Swiper modules={[Pagination, Autoplay]}
        loop={true}
        spaceBetween={5}
        pagination={{clickable:true}}
        autoplay={{delay:1000}}
        >

   <SwiperSlide>

<div className="grid px-72  py-2 mt-6  text-blue-800 font-bold grid-cols-[repeat(auto-fit,minmax(250px,1fr))] sm:grid-cols-2 lg:grid-cols-2 ">

<div className="">

          <div className="px-20 text-5xl">Welcome to Our<span className=""> Website</span></div>
          <div className="px-20 mt-2 text-lg ">  I am building a Smart Clinic Appointment System for small clinics.  An online service for booking health appointments Simple booking process with reminder email or text message Works on PC/Mac desktop computers or both Android/Apple phones & tablets </div>
          <div className="px-20 mt-2 ">
            
          <button className="p-2 px-5 rounded-xl bg-gradient-to-l from-gray-300 to-slate-500 hover:shadow-2xl">Get started</button>
          </div>
    </div>
    <div className="">

<img src={card} alt="" className="shadow-xl h-72 w-80 justify-items-center rounded-3xl"/>
    </div>
</div>
   </SwiperSlide>
   <SwiperSlide>
<div className="grid px-72 text-blue-800 font-bold  py-2 mt-6  grid-cols-[repeat(auto-fit,minmax(250px,1fr))] sm:grid-cols-2 lg:grid-cols-2    ">

<div className="">

          <div className="px-20 text-5xl">Welcome to Our<span className="font-"> Website</span></div>
          <div className="px-20 mt-2 text-lg ">  I am building a Smart Clinic Appointment System for small clinics.  An online service for booking health appointments Simple booking process with reminder email or text message Works on PC/Mac desktop computers or both Android/Apple phones & tablets </div>
          <div className="px-20 mt-2 ">
            
          <button className="p-2 px-5 rounded-xl bg-gradient-to-l from-gray-300 to-slate-500 hover:shadow-2xl">Get started</button>
          </div>
    </div>
    <div className="">

<img src={card} alt="" className="shadow-xl h-72 w-80 justify-items-center rounded-3xl"/>
    </div>
</div>
   </SwiperSlide>
   <SwiperSlide>
<div className="grid px-72  text-blue-800 font-bold py-2 mt-6  grid-cols-[repeat(auto-fit,minmax(250px,1fr))] sm:grid-cols-2 lg:grid-cols-2    ">

<div className="">

          <div className="px-20 text-5xl">Welcome to Our<span className=""> Website</span></div>
          <div className="px-20 mt-2 text-lg ">  I am building a Smart Clinic Appointment System for small clinics.  An online service for booking health appointments Simple booking process with reminder email or text message Works on PC/Mac desktop computers or both Android/Apple phones & tablets </div>
          <div className="px-20 mt-2 ">
            
          <button className="p-2 px-5 rounded-xl bg-gradient-to-l from-gray-300 to-slate-500 hover:shadow-2xl">Get started</button>
          </div>
    </div>
    <div className="">

<img src={card} alt="" className="shadow-xl h-72 w-80 justify-items-center rounded-3xl"/>
    </div>
</div>
   </SwiperSlide>

  
        </Swiper>
        </div>

        {/* <button className="p-4 bg-slate-400" >Prev</button>
                <button className="p-4 bg-slate-400" >Next</button> */}
                </div>
        </>
    )
}

export default Carousel;