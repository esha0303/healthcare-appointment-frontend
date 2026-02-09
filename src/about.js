import Footer from "./footer";
// import Prop from "./homeprop";
import protect from "./assets/check.png";
import bars from "./assets/cal.png";
import setting from "./assets/use.jpg";
import team from "./assets/team.avif";
import { BsWhatsapp } from "react-icons/bs";
import { BiLogoPlayStore } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import logo from "./assets/logo.png";
import Nav from "./components/nav";

const About=()=>{
    const navigate= useNavigate();
    
    
    const handleClick=()=>{
        navigate("/login")
    }
    const handleClicks=()=>{
        navigate("/contact")

    }   
    return(
       
        <>
        <div className="w-full">
            
        <div className="w-full min-h-screen bg-gradient-to-t from-slate-400 to-slate-100">
    <Nav/>
<div className="w-full px-4 mx-auto overflow-x-hidden max-w-7xl">

    {/* HEADINGS */}
    <div className="flex justify-center mt-20 text-zinc-700-900 ">

<div className="grid grid-cols-1 gap-6 px-4 md:grid-cols-2 md:px-16">
    <div className="flex flex-col items-center justify-center p-10 ">
        
        
    <div className="text-xl text-black">
     <div className="py-4 text-4xl font-bold font-nunito"> Simple Cancellation  </div> 
In no more than five simple steps book your appointment.
 <br/>
</div>
    <div className="text-xl text-black">
     <div className="py-4 space-y-3 text-4xl font-bold font-nunito">24x7 Chat Support</div> 
Register and avoid filling out a form every time you want to make an appointment.
 <br/>
</div>

    <div className="text-xl text-black ">
     <div className="py-4 text-4xl font-bold font-nunito">Easy Scheduling</div>
 Book your healthcare appointments around a time and location that suits you.


</div>
    </div>
    {/* IMAGES */}
    <div className="">

            <img src={team  } alt="xyz"  className="mt-5 rounded-full "/>
        
          
        </div>
    </div>
    </div>
    <div>

<div className="gap-5 px-32 py-3 mt-8 text-lg ">

    <div className="grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-5 sm:grid-cols-2 lg:grid-cols-3 grid justify-items-center px-10">
        <div className="flex px-2 py-3 transition duration-500 transform border shadow-2xl rounded-xl hover:scale-y-125 hover:shadow-2xl">
<div className="flex flex-col items-center justify-center gap-2 font-bold text-center">
    <img src={bars} alt="" className=" h-14" />

      Online booking

                <div className="font-medium">An online service for booking health appointments.
  </div>
  
</div>

                </div>
         <div className="flex px-2 py-3 transition duration-500 transform border shadow-2xl rounded-xl hover:scale-y-125 hover:shadow-2xl">
<div className="flex flex-col items-center justify-center gap-2 font-bold text-center">
    <img src={protect} alt="" className="rounded-full h-14" />

      Booking process

                <div className="font-medium">Simple booking process with reminder email or text message.
  </div>
  
</div>

                </div>
          <div className="flex px-2 py-3 transition duration-500 transform border shadow-2xl rounded-xl hover:scale-y-125 hover:shadow-2xl">
<div className="flex flex-col items-center justify-center gap-2 font-bold text-center">
    <img src={setting} alt="" className="text-blue-800 h-14" />
Easy to use
                <div className="font-medium">Works on PC/Mac desktop computers or both Android/Apple phones & tablets


  </div>
  
</div>

                </div>
    </div>    </div>
    <div className="flex flex-col items-center justify-center w-full gap-2 mt-10 bg-blue-200">
        <div className="text-xl mt-9">
            Core Services
            </div>
            <div className="text-3xl text-blue-800">
Explore our medical services
            </div>
            <div><div className=" h-[2px] bg-green-500 my-4 text-blue-200">hiCore ServicesCore Services</div>
            </div>
            <div className="text-lg text-gray-500">
For now we offer the following services.
            </div>
            <div className="py-20">

            <div className="flex flex-col p-5 transition duration-500 transform bg-white border border-blue-400 rounded-md hover:scale-y-110"> 
                <div><img src={logo} alt="" className="w-36 h-36"/>
                <div className="text-xl text-center">  Our Services </div> 
                </div>
                </div>
            </div>
    </div>
    <div className="flex justify-center ">
        
    <div className="mt-5 space-x-2 text-base mb-9 ">

<button className="inline-flex items-center gap-2 p-2 mt-4 text-sm text-white bg-green-600 " onClick={handleClicks}> <BsWhatsapp/> CHAT WITH US</button>
<button className="inline-flex gap-2 p-2 text-sm text-white bg-black" onClick={handleClick}><BiLogoPlayStore className="text-xl"/> DOWNLOAD</button>
</div>
</div>


            <Footer/>
</div>
</div>
</div>
        </div>

        </>
    )
}
export default About;