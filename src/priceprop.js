// import Swiper from "swiper";
// import { SwiperSlide } from "swiper/react";
// import ".swiper/css";

const Priceprop=({title,desc,number,info})=>{
    return(
        <>
        <div className=" text-start">
            
    
        <div className="p-8 space-y-5 text-lg font-medium transition duration-500 transform border shadow-2xl rounded-bl-2xl rounded-tr-2xl hover:bg-slate-300 hover:space-y-8 ">
          <span className="text-2xl font-bold">  {title}</span><br/>
            <span className="text-base text-gray-500">{desc}</span>
            <div className="text-2xl font-bold">{number}</div>
    
                
            <ul className="px-2 space-y-5 text-base text-gray-800">{info.map((items,i)=>(
                
                <li className="list-disc"> {items}</li>
            ))}
            </ul>
            </div>
        </div>
        </>
    )
}
export default Priceprop;