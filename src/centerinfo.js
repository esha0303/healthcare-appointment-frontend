import doctor from "./assets/doc.png";
import { useNavigate } from "react-router-dom";
const CenterInfo=()=>{
    const navigate = useNavigate();

    return(
        <>
    <div className="">
  <div className="flex items-start justify-center">
    {/* Left box */}
    <div className="w-[500px] lg:mt-32 px-5 space-y-8 ">
      <div className="text-5xl">
       Book Doctor Appointments
 <span className="font-extrabold"> Easily
</span>
      </div>
      <div className="mt-2 text-lg">
       Smart appointment booking for small clinics.
Easy scheduling with reminders via email or SMS.
Works on mobile, tablet, and desktop.



      </div>
      <div className="mt-2">
        <button className="p-2 px-5 rounded-xl bg-gradient-to-l from-gray-200 to-slate-400 hover:shadow-2xl hover:border-blue-200" onClick={()=>navigate("/login")}>
          Get started
        </button>
      </div>
    </div>

    {/* Right box */}
    <img
      src={doctor}
      alt=""
      className="shadow-xl lg:mt-32 h-72 w-80 rounded-3xl"
      />
  </div>
</div>
      </>
  )
    }
    export default CenterInfo;