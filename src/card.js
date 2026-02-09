import grw from "./assets/bars.png";
import CardProp from "./cardprop";
const Card=()=>{

    const CardData=[{
        title:"Multiple Users",
        img:grw,
        number:18000,
        desc:"This way we can lead in the upcoming world"
    },
{
        title:"Multiple Users",
        img:grw,
        number:18000,
        desc:"This way we can lead in the upcoming world"
    },
{
        title:"Multiple Users",
        img:grw,
        number:18000,
        desc:"This way we can lead in the upcoming world"
    }]
    return(
        <>
    <div className="grid gap-5 lg:grid-cols-3 font-nunito lg:px-8">
            {CardData.map((card, index)=>(
          <CardProp 
          key={index}
          title={card.title}
          img={card.img}
          number={card.number}
          desc={card.desc}
          />
          
))}

        </div>
        </>
    )
}
export default Card;