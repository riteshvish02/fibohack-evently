import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className='w-full absolute z-10 top-0 h-20 flex items-center justify-between p-10'>
      <div>
        <img className='w-44' src="https://eventally.vercel.app/_next/static/media/logo-transparent-svg.ccd037f9.svg" alt="" />
      </div>
      <div className='flex gap-5'>
        <Link
          to="/MyEvent"
          className="cursor-pointer  hover:bg-[#A485F9] hover:text-white duration-300 font-medium rounded-lg p-4 flex items-center"
        >
          My Event
        </Link>
        <Link
          to="/FindEvent"
          className="cursor-pointer  font-medium hover:bg-[#A485F9] hover:text-white duration-300 rounded-lg p-4 flex items-center"
        >
          Find Event
        </Link>
        <Link
          to="/CreateEvent"
          className="cursor-pointer  font-medium hover:bg-[#A485F9] hover:text-white duration-300 rounded-lg p-4 flex items-center"
        >
          Create Event
        </Link>
        <Link
          to="/MyEvent"
          className="cursor-pointer  font-medium hover:bg-[#A485F9] hover:text-white duration-300 rounded-lg p-4 flex items-center"
        >
        Login
        </Link>
      </div>
    </div>
  );
}

export default Nav;
