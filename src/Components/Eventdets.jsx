'use client'
import { Link } from "react-router-dom";
const Register=()=> {
  return (
    <div className="min-h-screen bg-[#F4F7FC">
      <main className="max-w-6xl mx-auto px-4  py-8">
        {/* Speakers Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-8 border-l-4 border-pink-500 pl-3">Dummy data</h2>   
          <div>
          <img
                  src="https://plus.unsplash.com/premium_photo-1661340622801-6e19ab613b2f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGV2ZW50c3xlbnwwfHwwfHx8MA%3D%3D" alt=""
                  className="w-[600px] h-[400px]  object-cover mb-4"
                />
          </div>
        </section>

        {/* Event Details */}
        <div className="grid md:grid-cols-[2fr,1fr] gap-8 ">
          <div >
            <section  className="mb-8 bg-[#F4F1F9]  p-3">
              <h1 className="text-4xl font-bold mb-2">Test Event</h1>
              <p className="text-gray-600 text-lg">Hosted by Aditya</p>
              <div className="flex items-center gap-4 mt-4">
                <div>2024-01-01</div>
                <div>Dehradun, Uttarakhand</div>
              </div>
            </section>

            {/* Registration */}
            <section className="mb-8 p-6 bg-[#F4F1F9]  rounded-lg">
              <h2 className="text-xl font-bold mb-4">Registration</h2>
              <hr className="mb-2"/>
              <p className="mb-4 text-lg text-zinc-600">Hello! To join the event, please register below.</p>
              <button className="w-full py-2 mt-4 text-white bg-gradient-to-r from-[#9f7ff9] to-[#8b62fc] rounded-md hover:from-[#8b62fc] hover:to-[#A485F9]">
  Register
</button>

            </section>

         <div className="bg-[#F4F1F9] ">
             {/* About Event */}
             <section className="mb-8 bg-[#F4F1F9]  p-3 rounded">
              <h2 className="text-xl font-bold mb-4">About Event</h2>
              <hr className="mb-3" />
              <p className="text-zinc-500">Test Description Hi</p>
            </section>

            {/* Sponsors */}
            <section className="mb-5 bg-[#F4F1F9]  p-3  rounded">
              <h2 className="text-xl font-semibold mb-4">Our Sponsors</h2>
              <div className="text-zinc-500">Appwrite</div>
            </section>

            {/* Social Links */}
            <section className="text-center  bg-[#F4F1F9]  p-2">
              <h2 className="text-xl font-bold mb-4">Follow us on</h2>
              <div className="flex justify-center gap-6">
                <a href="#" className="text-gray-600 hover:text-gray-900">🌐</a>
                <a href="#" className="text-gray-600 hover:text-gray-900">𝕏</a>
                <a href="#" className="text-gray-600 hover:text-gray-900">in</a>
                <a href="#" className="text-gray-600 hover:text-gray-900">📷</a>
              </div>
            </section>
          </div>

         </div>
          <div className="bg-[#F4F1F9]  p-3">
            {/* Location */}
            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4">Location</h2>
              <div className="aspect-video bg-gray-100 mb-4">
                <img src="" alt="" />
              </div>
              <p className="text-[#374151] text-xl font-bold">Dehradun</p>
              <p className="text-zinc-500 mt-3 text-lg ">Dehradun, Uttarakhand, IN - 248001</p>
            </section>

            {/* Agenda */}
            <section className="mb-8">
              <h2 className="text-xl text-[#374151] font-bold mb-4">Agenda</h2>
              <hr className="bg-black h-[1.5px]" />
              <div className="text-zinc-500 mt-2 text-xl">.NET</div>
            </section>

            {/* Hosts */}
            <section className="mb-8">
              <h2 className="text-xl text-[#374151] font-bold mb-4">Hosts</h2>
              <hr className="bg-black h-[1.5px]" />

              <div>
                <p className="mt-2 text-xl text-[#374151] font-bold">Aditya</p>
                <button className="w-full py-2 mt-4 text-white bg-gradient-to-r from-[#9f7ff9] to-[#8b62fc] rounded-md hover:from-[#8b62fc] hover:to-[#A485F9]">
  Contact
</button>

              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Register;