const CardProp=({title,img,desc,number})=>{
  return(
    <>    <div className="p-4 border shadow-2xl rounded-3xl">
      <h2 className="text-xl font-bold">{title}</h2>
      <div className="flex items-baseline justify-around gap-3">
        <span className="text-3xl font-bold hover:text-green-600" >{number}</span>
        <img src={img} alt={title} className="h-12" />
      </div>
      <p>{desc}</p>
    </div>

    </>
  )
}
export default CardProp;