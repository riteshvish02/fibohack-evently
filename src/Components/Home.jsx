import React from "react";
import Nav from "./Partials/Nav";
import SecondPage from "./Partials/Home/SecondPage";
import EventList from "./Partials/Home/EventList";
import Faq from "./Partials/Home/Faq";


const Home = () => {
  return (
    <div className="min-h-screen overflow-x-hidden  relative">


      <div className="relative w-full min-h-screen flex justify-between items-center">
        <Nav />

        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-200 via-purple-50 to-white clip-hero"></div>

        {/* Content Section */}
        <div className="relative z-10 w-2/4  flex items-start justify-center flex-col ml-24 ">
          <h1 className="text-6xl font-[ppbold] font-bold text-black mb-4">
            Host, Connect, <br /> Celebrate: Your <br /> Events, Our Platform!
          </h1>
          <p className="text-gray-700 mt-6 mb-6 font-semibold text-lg">
            Book and learn helpful tips from 3,168+ mentors in <br /> world-class companies with our global community.
          </p>
          <button
            className="px-6 py-3 rounded-full text-white font-semibold transition-all duration-300 transform hover:shadow-lg hover:brightness-110"
            style={{
              background: 'linear-gradient(90deg, #E9D5FF, #C4B5FD, #A78BFA, #8B5CF6)'
            }}
          >
            Explore Now
          </button>



        </div>

        {/* Image Grid */}
        <div className=" relative  pl-20 gap-3 z-10 w-1/2">
          {/* Image 1 */}
          <div className="flex  m-3 gap-5">
            <div className="w-[45%] h-40 mr-5 rounded-xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1588952924055-cca185a87ab5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5Mnx8fGVufDB8fHx8fA%3D%3D" alt="Event 1" className="object-cover w-full h-full" />
            </div>

            {/* Image 2 */}
            <div className="  w-40 h-40 rounded-full overflow-hidden">
              <img src="https://images.unsplash.com/photo-1730112635879-86d3e9072e8a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3NXx8fGVufDB8fHx8fA%3D%3D" alt="Event 2" className="object-cover w-full h-full" />
            </div>
          </div>

          <div className="flex m-3 gap-5">
            {/* Image 3 */}
            <div className="  w-40 h-40 mr-5 rounded-full  overflow-hidden">
              <img src="https://images.unsplash.com/photo-1727106281849-eb20141db354?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2Nnx8fGVufDB8fHx8fA%3D%3D" alt="Event 3" className="object-cover w-full h-full" />
            </div>

            {/* Image 4 */}
            <div className=" w-[45%] h-40 rounded-xl  overflow-hidden">
              <img src="https://plus.unsplash.com/premium_photo-1664382465641-997aa3b73907?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2NHx8fGVufDB8fHx8fA%3D%3D" alt="Event 4" className="object-cover w-full h-full" />
            </div>
          </div>

          {/* Image 5 */}
          <div className="flex gap-2">
            <div className=" w-48 h-48  rounded-full overflow-hidden">
              <img src="https://images.unsplash.com/photo-1730871082254-65b6e151c82b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2M3x8fGVufDB8fHx8fA%3D%3D" alt="Event 5" className="object-cover w-full h-full" />
            </div>

            {/* Image 6 */}
            <div className=" w-[25%] h-48 rounded-full overflow-hidden">
              <img src="https://plus.unsplash.com/premium_photo-1712029146082-3faa70d0144c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1MHx8fGVufDB8fHx8fA%3D%3D" alt="Event 6" className="object-cover w-full h-full" />
            </div>

            <div className=" w-[25%] h-48 rounded-full overflow-hidden">
              <img src="https://plus.unsplash.com/premium_photo-1712029146082-3faa70d0144c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1MHx8fGVufDB8fHx8fA%3D%3D" alt="Event 6" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>



      </div>
      <div className="pt-4 lg:w-full w-full min-h-screen bg-[#F4F7FC]">
        <SecondPage />
      </div>
      <div className="pt-4 lg:w-full w-full min-h-screen bg-[#F4F7FC]">
        <EventList />
      </div>
      <div className="pt-4 lg:w-full w-full min-h-screen bg-[#F4F7FC]">
        <Faq />
      </div>


    </div>
  );
};

export default Home;
