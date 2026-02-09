import Nav from "./nav";
const Contact=()=>{
    return(
        <>
        <div className="w-full min-h-screen bg-gradient-to-t from-slate-200 to-slate-400 font-nunito" >
            <Nav/>

    <div className="min-h-screen pb-16 pt-14 0 bg-gradient-to-t from-slate-400 to-slate-100">

      {/* HERO SECTION */}
      <section className="p-8 mx-6 mt-6 bg-blue-100 shadow-sm rounded-3xl backdrop-blur-md font-nunito">
        <div className="flex flex-col items-center gap-6 md:flex-row">
          
          <img
            src="https://images.unsplash.com/photo-1550831107-1553da8c8464"
            alt="Healthcare"
            className="object-cover w-40 h-40 rounded-2xl"
          />

          <div>
                    <h1 className="text-3xl font-bold text-slate-900">
              Contact Our Healthcare Team
              </h1>
              <p className="max-w-xl mt-2 text-slate-600">
              We are here to help you with appointments, queries, and support.
              </p>
             </div>
             </div>
          </section>

      {/* MAIN CONTENT */}
      <section className="grid grid-cols-1 gap-8 mx-6 mt-10 md:grid-cols-2">

        {/* LEFT INFO */}
        <div className="space-y-6">
          <div className="p-6 bg-white shadow-lg rounded-2xl">
            <h3 className="text-lg font-semibold text-slate-800 ">📍 Visit Us</h3>
            <p className="mt-2 text-slate-600">
              123 Health Street, New Delhi, India
            </p>
          </div>

          <div className="p-6 bg-white shadow-lg rounded-2xl">
            <h3 className="text-lg font-semibold text-slate-800">📞 Call Us</h3>
            <p className="mt-2 text-slate-600">+91 98765 43210</p>
            <span className="text-sm text-slate-400">
              Mon – Fri, 9:00 AM – 6:00 PM
            </span>
          </div>

          <div className="p-6 bg-white shadow-lg rounded-2xl">
            <h3 className="text-lg font-semibold text-slate-800">✉️ Email</h3>
            <p className="mt-2 text-slate-600">
              support@healthcare.com
            </p>
            <span className="text-sm text-slate-400">
              We reply within 24 hours
            </span>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="p-8 bg-white shadow-lg rounded-2xl">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            Send Us a Feedback
          </h2>

          <div className="flex flex-col gap-4 md:flex-row">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 border rounded-xl border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 border rounded-xl border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <input
            type="text"
            placeholder="Subject"
            className="w-full px-4 py-3 mt-4 border rounded-xl border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <textarea
            placeholder="Your Message"
            className="w-full h-32 px-4 py-3 mt-4 border rounded-xl border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button className="w-full py-3 mt-6 font-semibold text-white transition bg-blue-600 rounded-xl hover:bg-blue-700">
            Send Message
          </button>
        </div>
      </section>

      {/* MAP */}
      <section className="mx-6 mt-12">
        <h2 className="mb-4 text-xl font-semibold text-slate-800">
          Find Us on Map
        </h2>
        <iframe
          title="map"
          src="https://maps.google.com/maps?q=india%20gate&t=&z=13&ie=UTF8&iwloc=&output=embed"
          className="w-full border-0 shadow-lg h-72 rounded-2xl"
        />
      </section>


    </div>



</div>
        </>
    )
}
export default Contact;

// import React from "react";
// import useCustom from "./customhook";
// const Contact=()=>{
//     const {data, loading}=useCustom("https://jsonplaceholder.typicode.com/users");
//    if(loading) return <p>Loading.............</p>
//     return(
        
//         <>
//         {
//             data.map((user)=>(
//                 <h1 key={user.id}>{user.name}</h1>
//             ))
//         }
//         <p>something is cooking</p>
//         </>
//     )
// }

// export default Contact;