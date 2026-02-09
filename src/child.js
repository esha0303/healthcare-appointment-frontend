import { useState } from "react"

const Child=({name})=>{
  
  const [setlike, hasliked]=useState(false);
  return(

    <div className="child">

    {name}
<button onClick={()=>hasliked(!setlike)}>
  {setlike ?'liked':'like'}
  </button>    
    </div>
  )
}
export default Child;