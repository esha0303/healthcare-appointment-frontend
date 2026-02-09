import { useRef, useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { RiShutDownFill } from "react-icons/ri";
const Search = () => {
     const[query,setquery]=useState(" ");
  const inputRef = useRef(null);
  const handleclick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }; 
  const handleinput = () => {
    if (inputRef.current) {
        setquery("");
        console.log("workkiing");
    }
  };

  return (
    <>
      <div className="flex font-mono ">
        <input
          type="text"
          ref={inputRef}
          value={query}
          onChange={(e)=>setquery(e.target.value)}
          className="relative w-full h-5 py-4 mt-10 mb-2 font-medium bg-white rounded-sm shadow-lg px-14"
          placeholder="Search Panel"
        />
        <div
          className="absolute flex mt-12 ml-5 cursor-pointer "
          onClick={handleclick}
        >
          <FaMagnifyingGlass className="" />
          <div className="px-60" onClick={handleinput}>
            {" "}
            <RiShutDownFill />
          </div>
        </div>
      </div>
    </>
  );
};
export default Search;
