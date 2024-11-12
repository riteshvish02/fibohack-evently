import React, { useEffect } from "react";
import Nav from "./Partials/Nav";
import SecondPage from "./Partials/Home/SecondPage";
import EventList from "./Partials/Home/EventList";
import Faq from "./Partials/Home/Faq";
import Footer from "./Footer";
import { toast } from "react-toastify";

const Home = () => {
  useEffect(() => {
    toast.success("Welcome to Evently! Enjoy your stay", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden relative">
      <div  className="relative w-full min-h-screen flex flex-col lg:flex-row   justify-between items-center">
        <Nav />

        {/* Background Gradient */}
        <div style={{pointerEvents:"none"}} className="absolute  inset-0 bg-gradient-to-b from-purple-200 via-purple-50 to-white clip-hero"></div>

        {/* Content Section */}
        <div className="relative pointer-events-none   z-10 w-full lg:w-2/4  flex items-start justify-center flex-col lg:ml-24 p-6 lg:p-0">
          <h1 className="text-4xl   mt-20 lg:text-6xl font-[ppbold] font-bold text-black mb-4 w-full   lg:w-[93%]">
            Host, Connect, Celebrate: Your Events, Our Platform!
          </h1>
          <p className="text-gray-700 mt-4 mb-4 lg:mt-6 lg:mb-6 font-semibold text-base lg:text-lg">
            Book and learn helpful tips from 3,168+ mentors in world-class companies with our global community.
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
        <div className="relative pointer-events-none w-full lg:w-1/2 flex flex-col gap-3 z-10 p-6 lg:pl-20">
          {/* Image Row 1 */}
          <div className="flex flex-wrap lg:flex-nowrap gap-3">
            <div className="w-[45%] h-40 rounded-xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1581090581500-58b180d1f0fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI5fHx8ZW58MHx8fHx8" alt="" />
            </div>
            <div className="w-[45%] h-40 rounded-full overflow-hidden">
              <img src="https://images.unsplash.com/photo-1520583457224-aee11bad5112?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kZSUyMGFuZCUyMGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
            </div>
          </div>

          {/* Image Row 2 */}
          <div className="flex flex-wrap lg:flex-nowrap gap-3">
            <div className="w-[45%] h-40 rounded-full overflow-hidden">
              <img src="https://i.pinimg.com/236x/3e/f3/7b/3ef37b6667a660805ef9bb7869312e1d.jpg" alt="" />
            </div>
            <div className="w-[45%] h-40 rounded-xl overflow-hidden">
              <img src="https://i.pinimg.com/564x/4c/49/33/4c493380c52f6bf51226acb1b86904d0.jpg" alt="" />
            </div>
          </div>

          {/* Image Row 3 */}
          <div className="flex flex-wrap lg:flex-nowrap gap-3">
            <div className="w-[30%] h-48 rounded-full overflow-hidden">
              <img src="https://i.pinimg.com/236x/2d/99/f8/2d99f85cb8c10b9daa74f7730d348c7a.jpg" alt="" />
            </div>
            <div className="w-[30%] h-48 rounded-full overflow-hidden">
              <img src="https://images.unsplash.com/photo-1580983218765-f663bec07b37?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMzfHx8ZW58MHx8fHx8" alt="Event 6" className="object-cover w-full h-full" />
            </div>
            <div className="w-[30%] h-48 rounded-full overflow-hidden">
              <img className="mt-10" src="https://i.pinimg.com/236x/e8/62/0d/e8620d5364138fe60785cadcc95d7270.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* Other Sections */}
      <div className="pt-4 w-full min-h-screen bg-[#F4F7FC]">
        <SecondPage />
      </div>
      <div className="pt-4 w-full min-h-screen bg-[#F4F7FC]">
        <EventList />
      </div>
      <div className="pt-4 w-full max-md:h-[70vh] lg:min-h-screen bg-[#F4F7FC]">
        <Faq />
      </div>
      <Footer />
    </div>
  );
};

export default Home;