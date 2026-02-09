import {  useState } from "react";
import Nav from "./nav";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import {  useNavigate } from "react-router-dom";
import Links from "../link";
const Sign=()=>{
    const navigate=useNavigate();
    const[pass,setPass]=useState(false);
    const[name, setname]=useState("");
    const[email,setemail]=useState("");
    const[password,setpassword]=useState("");
    const[typeInput, updateInput]=useState("");
    const[error,seterror]=useState(null);

            const handlelogin=async (e)=>{
                e.preventDefault();
                 if(!name){
                    

            seterror("Please enter the  name");
            return;
        }
        if(!email){
            seterror("Please enter email");
            return;
        }
        if(!password){
            seterror("Please enter password");
            return;
        }
      
            seterror(null);
            console.log("form submitted " +name +email); 

                const data={name,email,password}
                try{
                    const res=await fetch("http://localhost:8000/api/signup",{
                        method:"POST",
                        headers:{       
                                              
                            "Content-Type":"application/json"
                        } ,
                        body: JSON.stringify(data)
                    }   
                    
                )
                
                     const result= await res.json();
                    console.log(result);
                    alert(result.message||error)
                    setname("");
                    setemail("");
                    setpassword("");
                }
                catch(error){
                          console.error(error);
                }       
       
            
    }
    return(
        <form className="h-screen mt-20 bg-gradient-to-t from-slate-400 to-slate-100" >
        <Nav/>

        <div className="flex justify-center w-full font-nunito ">
            <div className="flex flex-col items-center mt-10 mb-5 text-xl shadow-2xl p-14">
              <span className="mb-2 text-4xl font-bold">  Sign Up</span>
           {/* NAME */}
            <input type="text text-3xl" value={name} placeholder="Name" className="p-2 mb-5 border" onChange={(e)=>setname(e.target.value)}/>{error}
            {/* EMAIL */}
            <input type="text" value={email} placeholder="Email" className="p-2 mb-5 border" onChange={(e)=>setemail(e.target.value)}/>
            <div className="relative">
            
            {/* PASSWORD */}
            <input type={pass?"text":"Password"} value={password} placeholder="Password" className="p-2 border" onChange={(e)=>setpassword(e.target.value)}  /><span onClick={()=>setPass(!pass)} className="absolute px-2 py-3 text-gray-500"> {pass? <FaEye/>:<FaEyeSlash/>}</span>
            </div>
                

                <p className="text-red-600">{error}</p>
          {/* Symptoms */}

            <input type="text" placeholder="Symptoms" onChange={(e)=>updateInput(e.target.value) } value={typeInput} className="p-2 mt-4 mb-5 border" />

      <button type="button" onClick={handlelogin} className="p-2 mt-4 cursor-pointer hover:bg-gradient-to-t from-slate-50 to-slate-400 hover:text-blue-500 ">Sign Up !</button>        <p className="mt-5 text-base">Already have an account?<span onClick={()=>navigate("/login")} className="p-1 text-base text-blue-600 cursor-pointer">Login</span></p>
        </div>
            
            </div>
            <Links/>
        </form>
    )
}
export default Sign;