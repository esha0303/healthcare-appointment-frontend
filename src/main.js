import CenterInfo from "./centerinfo";
import Center from "./mainfeature";
import Carousel from "./components/carousel";
import Card from "./card";
import Links from "./link";
import bg from "./assets/bg.jpg";
import Price from "./price";
import Nav from "./components/nav";

const Main = () => {
  return ( 
    <>
        <div className="items-center w-full min-h-screen font-nunito bg-gradient-to-t from-slate-300 to-slate-100">
      <Nav/>
        <CenterInfo/>
<Center />
</div>
<Carousel/>

<div className="mt-10 text-center ">  
<div className="text-3xl font-bold ">
    Our key features
</div>
<div className="mt-4 text-xl lg:px-32 md:px-14 mb-9">while grayscale applies a complete grayscale transformation to the image. For a partially desaturated look, while grayscale applies a complete grayscale transformation to the image. For a partially desaturated look, you could use you could use</div>
<Card />
<div className=" px-11">

<div className="text-3xl font-bold bg-blue-200 lg:mt-20 py-11 rounded-xl " style={{backgroundImage: `url(${bg})`, backgroundRepeat:"repeat"}}>
  Ready to get the material kit<br/>
  <span className="text-lg">Based on the license you get, you will have direct access to our team
of developers who built the product.</span>
  </div>
  </div>
<Price/>
</div>
<Links />
      
    </>
  );
};
export default Main;
