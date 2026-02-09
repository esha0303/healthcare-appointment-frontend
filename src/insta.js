import { useState } from "react";
import { useEffect } from "react";
const Instagram=({img, title})=>{
    const [like, liked]=useState(0);
    useEffect(()=>{
      console.log(`${title} has been liked ${like}`)
    },[title, like]);

return(
  <>
  <div style={{padding:'65px'}}>
<img src={img} alt="xyz"/><br/>
<h2 >
   {title}</h2> 
   <button onClick={()=>{liked(like+1)}}>  LIKE {like} </button>
   <button onClick={()=>{liked(like-1)}}>    UNLIKE</button>
   
  </div>

  </>

)
}
export default Instagram;
