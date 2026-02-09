// import Profile from "./profileinfo";
// import Search from "./search";
import { Link } from "react-router-dom";

const Nav=()=>{
    return(
        <>
       <div>
            {/* //UPPER */}
          <div className="fixed top-0 left-0 z-50 flex flex-wrap justify-between w-full px-40 py-5 bg-slate-200">
            <div className="px-10 text-4xl font-bold font-nunito">
            Healthcare Bookings
            </div>
            <div className="flex flex-col ">
              <ol className="flex gap-10 px-5 mx-10 text-xl font-semibold px- hover:border-blue-600">
                <Link to="/home" className=" hover:text-blue-600" >Home</Link>
                <Link to="/about" className=" hover:text-blue-600">About</Link>
                  <Link to="/department" className="">Department</Link>
                <Link to="/login" className=" hover:text-blue-600">Login</Link>
                <Link to="/signup" className=" hover:text-blue-600">Signup</Link>
                <Link to="/contact" className=" hover:text-blue-600">Contact</Link>

              </ol>
            </div>
          </div>
        </div>
        </>
    )
}
export default Nav;