import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full bg-[#f4f7fc] flex flex-col items-center">
            <div className='h-[1px] w-[94%] bg-[#010101]  mb-[4%]'></div>
            <div className="w-full   flex flex-col md:flex-row lg:flex-row lg:justify-between lg:pt-[2vw] gap-[6vw] items-center justify-between pl-2 pt-2 pr-[4vw] ">
                <div className="flex   w-1/2 flex-col justify-bet items-center text-center">
                    <h2 className="text-xl font-[ppbold] font-bold mb-2">CONTACT US</h2>
                    <p className="mb-4 font-medium">Fill out the form below and we will be in contact shortly.</p>
                    <form className="  space-y-4 w-full max-w-xs">
                        <input
                            type="text"
                            placeholder="Name"
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                        <input
                            type="tel"
                            placeholder="Phone"
                            className="w-full p-2 border border-gray-300 rounded"
                        />

                        <textarea
                            placeholder="Describe Your Event"
                            className="w-full p-2 border border-gray-300 rounded"
                        ></textarea>
                        <button type="submit" className="px-4 w-full font-semibold  py-2 bg-[#865df6] text-white rounded">
                            SEND
                        </button>
                    </form>
                </div>


              <div className='flex w-1/2 items-center justify-start gap-48'>
              <div className="text-black max-w-xs rounded-md">
                    <h2 className="text-xl font-[ppbold] font-bold mb-4">Quick Links.</h2>
                    <ul className="space-y-3 text-lg">
                        {['home', 'about us', 'location', 'faqs', 'contact us'].map((link, index) => (
                            <li key={index} className="flex items-center">
                                <a href={`#${link.replace(' ', '-')}`} className="hover:text-[#7d53f1]">
                                    {link}
                                </a>
                                <span className="ml-2">→</span>
                            </li>
                        ))}
                    </ul>
               
                </div>
                <div className="flex flex-col items-center justify-between text-center mb-8">
                    <div className="w-[20vw] mb-8">
                        <img
                            className="w-full"
                            src="https://eventally.vercel.app/_next/static/media/logo-transparent-svg.ccd037f9.svg"
                            alt=""
                        />
                    </div>

                    <h1 className='font-medium text-lg'>let's connect with our socials</h1>
                    <div className="flex gap-5 items-center justify-center p-4 ">
                        <h3>
                            <img
                                src="https://imgs.search.brave.com/KP-_9B_ORi1keg5FriFbzgdb9L7IVZvZQ4V0zXWjhAM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9mcmVl/bG9nb3BuZy5jb20v/aW1hZ2VzL2FsbF9p/bWcvMTY1ODU4NzMw/M2luc3RhZ3JhbS1w/bmcucG5n"
                                alt="Instagram"
                                className="w-8 h-8 cursor-pointer transition-transform transform hover:scale-110"
                            />
                        </h3>
                        <h3>
                            <img
                                src="https://imgs.search.brave.com/sfjFFKeD6WKZonyXondr4KmocH1mx3JkdLtOBGtgvL8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxNi8w/Ny9GYWNlYm9vay5w/bmc"
                                alt="Facebook"
                                className="w-8 h-8 cursor-pointer transition-transform transform hover:scale-110"
                            />
                        </h3>
                        <h3>
                            <img
                                src="https://imgs.search.brave.com/GpB5WQlesvec2MXDXDV3SmKb0pzSJzyH667WAzbxGcs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9j/L2NhL0xpbmtlZElu/X2xvZ29faW5pdGlh/bHMucG5n"
                                alt="LinkedIn"
                                className="w-8 h-8 cursor-pointer transition-transform transform hover:scale-110"
                            />
                        </h3>
                        <h3>
                            <img
                                src="https://imgs.search.brave.com/uEC1NyPQHM7tWS0JmAQXd3dND5K1DXAGT4CNDHadEK8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxNi8w/Ny9Ud2l0dGVyLnBu/Zw"
                                alt="Twitter"
                                className="w-8 h-8 cursor-pointer transition-transform transform hover:scale-110"
                            />
                        </h3>
                    </div>

                </div>
              </div>

            </div>
            <div className='h-[1px] w-[94%] bg-[#010101]  mt-[1%]'></div>
          
            <div className="m-8 text-center font-semibold text-sm text-gray-600 pt-1">
                <p className="">&copy; 2024 QUINTANA EVENTS, LLC. ALL RIGHTS RESERVED.</p>
                <p>
                    <a href="#" className=" ">
                        Web Design by Octavo Designs
                    </a>{' '}
                    |{' '}
                    <a href="#" className=" ">
                        Privacy Policy
                    </a>{' '}
                    |{' '}
                    <a href="#" className="">
                        Staff Login
                    </a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
