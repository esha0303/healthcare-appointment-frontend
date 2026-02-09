import { useEffect, useState } from "react";
const useCustom=(url)=>{
   
    const[ data, setData]=useState([]);
    const[loading, setLoading]=useState(true);
    useEffect(()=>{

        const call=async()=>{
            try{

                const info=await fetch("https://jsonplaceholder.typicode.com/users");
                const conv= await info.json();
                
                console.log(conv);
                setData(conv);
                setLoading(false);
            }
            catch(err){
console.log(err);
            }
        }
        call();
    },[]);
    return{data, loading};
}
export default useCustom;