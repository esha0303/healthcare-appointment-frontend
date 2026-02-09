import {  useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Password=({value, type})=>{
    
    const [ispassword, showpassword]=useState(true);
    // const[values,showvalue]=useState();
    
   
    return(<>
     <input
        
        type={ispassword? "password":"text"}
        placeholder="Enter the password "
        className="relative p-2 ml-5 border rounded-lg cursor-pointer"   /><span className="absolute px-2 mt-3 cursor-pointer" onClick={()=>showpassword(!ispassword)}>{ispassword?<FaEyeSlash/>:<FaEye/>}</span>
            {/* <p className="">{values}</p> */}
        </>)
}
export default Password; 
