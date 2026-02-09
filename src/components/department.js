import Nav from "./nav";
import { departmentID } from "./departmentid";
import { useEffect, useState } from "react";
const Department=()=>{
    const[selectDepartment, updateDepartment]=useState(null);
    useEffect(()=>{
       console.log( "selected specifications",selectDepartment);
    }
    ,[selectDepartment])
return(
    <>
        <div className="items-center w-full min-h-screen font-nunito bg-gradient-to-t from-slate-300 to-slate-100">
            <div>

        <Nav />
        </div>
        <div className="flex justify-center">

        <div className="grid grid-cols-3 gap-5 mt-16 font-bold font-nunito">
            {departmentID.map((user)=>{
                 return(
                    
                        
                    <div className="" key={user.id} >
                    <div onClick={()=>updateDepartment(user.sp)}>
                        <div className={`flex flex-col p-8 mt-8 transition duration-300 ease-out transform bg-gradient-to-b from-slate-100 to-slate-300 rounded-xl hover:font-extrabold hover:-translate-y-3 hover:scale-95 hover:shadow-2xl ${selectDepartment===user.sp? "ring-2 ring-blue-500 ":""}`}>
                            
                    <img src={user.img} alt="" className="h-44"/>
                    <p className="mt-2">{user.name}</p>
                    <h1>{user.sp}</h1>
                    <p>{user.Timing}</p>
                    </div>
                        </div>
                    </div>
                    
                )

                
})}
        
        </div>
        </div>
        
    </div>

    </>
)
}

export default Department;