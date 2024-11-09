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
                        spaceBetween={70}
                        slidesPerView={1}
                        freeMode={true}
                        navigation={true}
                        breakpoints={{
                            0: {
                                slidesPerView: 4,
                            },
                        }}
                        className="mySwiper px-4 w-[76vw] max-sm:w-[100vw]"
                    >
                        {[...Array(10)].map((_, index) => (
                            <SwiperSlide key={index} className='border p-5 flex-col items-start justify-start py-5 lg:w-[17vw!important] lg:h-[40vh!important] border-zinc-400 w-[92vw!important] h-[45vh!important]' >
                                <div className='h-[25vh] object-cover object-center rounded-md overflow-hidden w-[40vh]'>
                                        <img className='object-cover h-full w-full object-center' src="https://images.unsplash.com/photo-1721332149274-586f2604884d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8" alt="Event Thumbnail" />
                                    </div>
                               
                                <div className='companydets w-full flex items-center border-b pb-3 gap-1 pt-3'>
                                    <div className='w-[100%] text-left py-2 '>
                                        <h2 className='font-medium lg:font-semibold text-[#323232] text-[2vh] leading-[2vh]'>Event Name #{index + 1}</h2>
                                        <h3 className='text-[1.6vh] lg:text-[1.8vh] text-zinc-500 font-medium'>Event Organizer #{index + 1}</h3>
                                    </div>
                                    <button className='px-3  text-center border flex items-end text-sm lg:text-xs lg:font-semibold gap-2 py-1 bg rounded border-zinc-400'>
                                     <h2 className='w-24 text-center font-lg p-2'>Popular Event</h2>
                                </button>
                                </div>
                                <div className='loc flex h-32 w-full  text-zinc-600  '>
                                    <div>
                                    <h2 className='text-[15px] pt-2 font-medium flex items-start gap-2 lg:font-normal lg:text-[1.8vh]'>
                                        <CiLocationOn className='font-bold scale-[1.2]' /> Location #{index + 1}
                                    </h2>
                                    <h2 className='text-[15px] font-medium flex my-2 items-center gap-2 lg:font-normal lg:text-[1.8vh]'>
                                        <PiMoneyDuotone className='font-bold scale-[1.2]' /> Entry Fee: ${Math.floor(Math.random() * 100)}
                                    </h2>
                                    <h2 className='text-[15px] font-medium flex my-2 items-center gap-2 lg:font-normal lg:text-[1.8vh]'>
                                        <CiCalendar className='font-bold scale-[1.2]' /> Date: {new Date().toLocaleDateString()}
                                    </h2>
                                    </div>
                                    <div className='w-full flex absolute bottom-0 left-0 p-3 mt-10 items-center justify-between lg:px-4'>
                                    <Link to='/eventdetails' className='text-center font-medium pt-2 text-sm w-32 h-10 rounded-md  bg-[#9672f9] text-[#fff] lg:text-[2vh] font-[400]'>View Details</Link>
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
