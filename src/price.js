import Priceprop from "./priceprop";


const Price=()=>{
    const details=[
        {
            title:"Freelacer",
            desc:"Good for a personal or client web/mobile app.",
            number:"$79",
            info:["Complete documentation","Full code","Projects-1","Support","Free Updates-6 months"]
        },
         {
            title:"Startup",
            desc:"Good for a personal or client web/mobile app.",
            number:"$79",
            info:["Complete documentation","Full code","Projects-1","Support","Free Updates-6 months"]
        },
         {
            title:"Company",
            desc:"Good for a personal or client web/mobile app.",
            number:"$79",
            info:["Complete documentation","Full code","Projects-1","Support","Free Updates-6 months"]
        },
         {
            title:"Enterprise",
            desc:"Good for a personal or client web/mobile app.",
            number:"$79",
            info:["Complete documentation","Full code","Projects-1","Support","Free Updates-6 months"]
        }
    ]
    return(
        <>

        <div className="grid grid-cols-4 mt-5 gap-14 lg:px-20 ">
           {details.map((items,i)=>(
            <Priceprop
            title={items.title}
            desc={items.desc}
            number={items.number}
            info={items.info}
            />
           ))}

        </div>
        </>
    )
}
export default Price; 