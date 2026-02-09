import {  useState } from "react";
import Nav from "./nav";
import {  FaEye, FaEyeSlash } from "react-icons/fa6";
// import leadd from "../assets/leadd.jpg";
import { useNavigate } from "react-router-dom";
import Links from "../link";
const Login=()=>{
  const[email, setemail]=useState("")
  const[passwords,setpassword]=useState("")
  const[password, ispassword]=useState(false)
  const[error, setError]=useState("");
  const navigate=useNavigate();
  const handleClick= async(e)=>{
                e.preventDefault();
                if(!email){
                  setError("need email");
                  return;
                }
                else if(!passwords){
                  setError("need password");
                  return;
                }
                setError(null);
                const data={email,password: passwords};
                try{
                  const res= await fetch("http://localhost:8000/alllogin/login",{

                    method:"POST",
                    headers:{
                      "Content-Type":"application/json"
                    },
                    body:JSON.stringify(data)
                  }
                  
                )
                const result= await res.json();
                console.log(result);
                alert(result.msg|| "login failed");
                setemail("");
                setpassword("");
                }
                catch(err){
                  console.log("unnecessary error",err);
                }
    console.log("button clicked");
  }
 
  return(
<>
<Nav/>
  
<div className="w-full h-screen mt-20 text-xl font-nunito bg-gradient-to-t from-slate-400 to-slate-100" >
  
<form className="flex flex-wrap justify-center ">

  <div className="flex flex-col p-8 shadow-2xl gap-7 lg:mt-10">
    <div className="text-4xl font-bold text-center ">
      
    Login
    </div>
    <div className="">
      <input type="text" placeholder="enter the email" value={email} onChange={(e)=>setemail(e.target.value)} className="px-12 py-1 text-center rounded-sm"/>
      
    </div>
    <div className="flex gap-2 text-center ">
           <input type={password?"text":"password"} value={passwords} onChange={(e)=>setpassword(e.target.value)} placeholder="enter the password" className="px-12 py-1 text-center rounded-sm "/> <span className="mt-2 text-gray-700 " onClick={()=>ispassword(!password)} >{password?<FaEyeSlash/>:<FaEye/>}</span>
    </div>
    <div className="text-center ">
      <button type="button" className="p-2 cursor-pointer hover:bg-gradient-to-t from-slate-50 to-slate-400 hover:text-blue-500 " onClick={handleClick}>Login !</button> <br/>
<span className="text-base"> Not registered Yet?  <span className="text-blue-600 hover:cursor-pointer " onClick={()=>navigate("/signup")}>Create an account.</span>
  </span>  
  </div>
  </div>
</form>


<Links />
</div>
</>

  )
}
export default Login;