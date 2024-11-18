import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import 'swiper/css/free-mode';
import '../../../../public/stylesheets/internship.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, FreeMode, Navigation, Scrollbar, A11y } from 'swiper/modules';
import { IoAnalytics } from 'react-icons/io5';
import { CiCalendar, CiLocationOn } from 'react-icons/ci';
import { PiMoneyDuotone } from 'react-icons/pi';
import { Link } from 'react-router-dom';

const SecondPage = () => {
    const imageUrls = [
        "https://img.freepik.com/free-vector/colorful-new-year-party-concept_23-2148373941.jpg?t=st=1731916571~exp=1731920171~hmac=7e9c235fe7f94196715f450a77b05202d1c38f814e4401e183ae6d7d606ea872&w=1060",
        "https://img.freepik.com/premium-photo/hallway-decorated-with-balloons-streamers_230068-2736.jpg?w=1380",
        "https://images.unsplash.com/photo-1558008258-3256797b43f3?q=80&w=2531&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1613687969216-40c7b718c025?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://locable-assets-production.s3.amazonaws.com/uploads/resource/file/844564/bb.jpg?timestamp=1731065174",
        "https://img.freepik.com/free-vector/flat-prom-background_23-2149370326.jpg?t=st=1731916914~exp=1731920514~hmac=7c6f90a4dc3d76f341ba91645d142fb11029115ffd8b5eabd998bb319a4175b8&w=1060",
        "https://img.freepik.com/free-photo/wedding-reception-hall-with-elegant-table-setting-with-candles_181624-9932.jpg?t=st=1731917120~exp=1731920720~hmac=99a515c4af68a0166f8f49d4212a39b5e9c0763119b54f72137f91de4698f5a5&w=1060",
      ];
      
    return (
        <>
            {/* Background Gradient */}
            <div className="relative w-full  h-full overflow-hidden">

                {/* Content */}
                <div className="relative z-10">
                    <div className='pl-4 pb-5 lg:pt-[3%]'>
                        <h2 className='font-bold font-[ppbold] lg:text-3xl lg:text-center'>Discover Local Events</h2>
                        <div className='lg:flex lg:items-center lg:w-full lg:justify-center lg:mt-3'>
                            <h2 className='text-zinc-600 font-[ppbold] text-[17px] font-medium mt-2 lg:whitespace-nowrap'>POPULAR CATEGORIES:</h2>
                            <div className='w-full lg:w-fit category hide-scrollbar py-2 flex whitespace-nowrap overflow-x-auto '>
                                <button className='px-2 py-1 ml-2 bg-[#9976fb] rounded-full font-medium text-white'>Music Festivals</button>
                                <button className='px-2 py-1 ml-2 border-zinc-400 border rounded-full font-medium text-zinc-700'>Workshops</button>
                                <button className='px-2 py-1 ml-2 border-zinc-400 border rounded-full font-medium text-zinc-700'>Networking</button>
                                <button className='px-2 py-1 ml-2 border-zinc-400 border rounded-full font-medium text-zinc-700'>Tech Conferences</button>
                                <button className='px-2 py-1 ml-2 border-zinc-400 border rounded-full font-medium text-zinc-700'>Art Exhibits</button>
                                <button className='px-2 py-1 ml-2 border-zinc-400 border rounded-full font-medium text-zinc-700'>Food Fairs</button>
                                <button className='px-2 py-1 ml-2 border-zinc-400 border rounded-full font-medium text-zinc-700'>Charity Events</button>
                            </div>
                        </div>
                    </div>
                    <Swiper
                        modules={[Navigation, FreeMode, Pagination, Scrollbar, A11y]}
                        spaceBetween={25}
                        slidesPerView={1}
                        freeMode={true}
                        navigation={true}
                        breakpoints={{
                            1024: {
                              slidesPerView: 4, // 3 slides per view on lg screens
                            },
                          }}
                        className="mySwiper px-4 w-[76vw]max-sm:w-[90vw] "
                    >
                       {[...imageUrls].map((imageUrl, index) => (
      <SwiperSlide
        key={index}
        className="border shrink-0 lg:ml-5 px-5 flex-col items-start justify-start lg:w-[22vw!important] lg:h-[60vh!important] border-zinc-400 h-[65vh!important]"
      >
        <div className="h-[25vh] object-cover object-center rounded-md overflow-hidden w-[40vh]">
          <img
            className="object-cover h-full w-full object-center"
            src={imageUrl}
            alt={`Event Thumbnail ${index + 1}`}
          />
        </div>
        <div className="companydets w-full flex items-center border-b pb-3 gap-1 pt-3">
          <div className="w-[100%] text-left py-2">
            <h2 className="font-medium lg:font-semibold text-[#323232] text-[2vh] leading-[2vh]">
              Event Name #{index + 1}
            </h2>
            <h3 className="text-[1.6vh] lg:text-[1.8vh] text-zinc-500 font-medium">
              Event Organizer #{index + 1}
            </h3>
          </div>
          <button className="px-3 text-center border flex items-end text-sm lg:text-xs lg:font-semibold gap-2 py-1 bg rounded border-zinc-400">
            <h2 className="w-24 text-center font-lg p-2">Popular Event</h2>
          </button>
        </div>
        <div className="loc flex h-32 w-full text-zinc-600">
          <div>
            <h2 className="text-[15px] pt-2 font-medium flex items-start gap-2 lg:font-normal lg:text-[1.8vh]">
              <CiLocationOn className="font-bold scale-[1.2]" /> Location #{index + 1}
            </h2>
            <h2 className="text-[15px] font-medium flex my-2 items-center gap-2 lg:font-normal lg:text-[1.8vh]">
              <PiMoneyDuotone className="font-bold scale-[1.2]" /> Entry Fee: $
              {Math.floor(Math.random() * 100)}
            </h2>
            <h2 className="text-[15px] font-medium flex my-2 items-center gap-2 lg:font-normal lg:text-[1.8vh]">
              <CiCalendar className="font-bold scale-[1.2]" /> Date: {new Date().toLocaleDateString()}
            </h2>
          </div>
          <div className="w-full flex absolute bottom-0 left-0 p-3 mt-10 items-center justify-between lg:px-4">
            <Link
              to="/eventdetails"
              className="text-center font-medium pt-2 text-sm w-32 h-10 rounded-md bg-[#9672f9] text-[#fff] lg:text-[2vh] font-[400]"
            >
              View Details
            </Link>
          </div>
        </div>
      </SwiperSlide>
    ))}
                    </Swiper>
                </div>
            </div>
        </>
    );
};

export default SecondPage;
