import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div className='w-full absolute z-10 top-0 h-20 flex items-center justify-between p-4 md:p-10'>
            <div>
                <img className='w-32 md:w-44 ml-4 md:ml-14' src="https://eventally.vercel.app/_next/static/media/logo-transparent-svg.ccd037f9.svg" alt="Logo" />
            </div>
            <div className='flex gap-2 md:gap-5'>
                <Link
                    to="/Login"
                    className="cursor-pointer font-medium bg-[#b498ff] mr-4 md:mr-10 rounded-lg flex items-center px-4 md:px-6 py-2 md:py-3 hover:bg-gradient-to-r from-[#A485F9] to-[#6F56C9] text-white duration-300"
                >
                    Login
                </Link>
            </div>
        </div>
    );
}

export default Nav;