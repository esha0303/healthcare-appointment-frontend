import Feature from "./mainpropdata.js";

const Center=({icon, title, description})=>{

    return(
            <>
        <div>
    
            <div className="gap-5 px-32 py-3 mt-8 text-lg ">
                <div className="grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-5 sm:grid-cols-2 lg:grid-cols-3 grid justify-items-center px-10">
            {Feature.map((item)=>(
        <div className="flex px-2 py-3 transition duration-500 transform border shadow-2xl rounded-xl hover:scale-y-125 hover:shadow-2xl">
        <div className="flex flex-col items-center justify-center gap-2 font-bold text-center">
           <img src={item.icon} alt=""  className=" h-14"/>
           {item.title}
             <div className="font-medium">{item.description}</div>
        </div>
                </div>
            ))
            
            
        }
        </div>
        </div>
    </div>
    </>
)
}
export default Center;

