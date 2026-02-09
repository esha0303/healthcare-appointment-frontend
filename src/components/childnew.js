

const Childnew=({updatemsg})=>{
    
    return(
    <>
<button onClick={()=>updatemsg("update from child to parent")}> 
    update from parent
    </button>
    <h1>hi there</h1>
    </>)
}
export default Childnew;