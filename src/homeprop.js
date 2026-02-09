import { useState } from "react";
import { BiNotepad } from "react-icons/bi";
import { PiNavigationArrow , PiPlusBold} from "react-icons/pi";
import Modal  from "react-modal";
const Prop = () => {
  const[isOpen,setOpen]=useState(false);
  
  return (
    <>
      {/* <div className="flex flex-row flex-wrap gap-5 mt-5 justify-evenly"> */}

      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] font-nunito mt-5 px-10  sm:grid-cols-2 lg:grid-cols-3 gap-8  ">
        <div className="flex justify-between border border-gray-500 rounded-sm shadow-lg hover:border-blue-900 hover:rounded-lg hover:shadow-2xl">
          <div className="flex flex-col p-4 text-lg ">
            Team Agenda <br />
            <span className="text-sm text-gray-600 font-nunito">#Get ready</span>
            Meeting on 9th Sep
            <br />
            Be ready for the meeting. read all the KT now.
          </div>
          <div className="flex flex-col gap-2 p-2 text-blue-800 left-96">
            <BiNotepad />
            <PiNavigationArrow />{" "}
          </div>
        </div>
        <div className="flex justify-between border border-gray-500 rounded-sm shadow-lg">
          <div className="flex flex-col p-4 text-lg ">
            Team Agenda <br />
            <span className="text-sm text-gray-600">#Get ready</span>
            Meeting on 9th Sep
            <br />
            Be ready for the meeting. read all the KT now.
          </div>
          <div className="flex flex-col gap-2 p-2 text-blue-800 left-96">
            <BiNotepad />
            <PiNavigationArrow />{" "}
          </div>
        </div>
        <div className="flex justify-between border border-gray-500 rounded-sm shadow-lg">
          <div className="flex flex-col p-4 text-lg ">
            Team Agenda <br />
            <span className="text-sm text-gray-600">#Get ready</span>
            Meeting on 9th Sep
            <br />
            Be ready for the meeting. read all the KT now.
          </div>
          <div className="flex flex-col gap-2 p-2 text-blue-800 left-96">
            <BiNotepad />
            <PiNavigationArrow />{" "}
          </div>
        </div>
        <div className="flex justify-between border border-gray-500 rounded-sm shadow-lg">
          <div className="flex flex-col p-4 text-lg ">
            Team Agenda <br />
            <span className="text-sm text-gray-600">#Get ready</span>
            Meeting on 9th Sep
            <br />
            Be ready for the meeting. read all the KT now.
          </div>
          <div className="flex flex-col gap-2 p-2 text-blue-800 left-96">
            <BiNotepad />
            <PiNavigationArrow />{" "}
          </div>
          </div>
          <div className="absolute right-8 bottom-9">
            <Modal data="null"
            isOpen={isOpen}
            onRequestClose={()=>setOpen(false)}
            style={
              {
                 content: {
                  // display:"flex",
            maxWidth: "500px",
            margin: "auto",
            padding: "20px",
            borderRadius: "10px",
          },
              }
            }
            >
              <div className="flex flex-col flex-wrap gap-5 font-nunito">
                
              <input type="text" placeholder="Meeting Name" className="border border-black rounded-sm"/>
              <textarea type="text" className="border border-black" placeholder="Enter the details" />
               <h2>Hello 👋</h2>
  <p>This is a modal popup.</p>
      <button className="p-2 bg-slate-400">Save</button>        
              </div>
            </Modal>
<button className="p-4 bg-slate-500 rounded-xl hover:bg-blue-500 "><PiPlusBold className="text-xl font-bold"  onClick={()=>setOpen(true)}/></button>

        </div>
        {/* </div> */}
      </div>
    </>
  );
};
export default Prop;
