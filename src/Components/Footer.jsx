import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="w-full bg-[#f4f7fc] flex flex-col items-center">
            <div className='h-[1px] w-[94%] bg-[#010101] mb-[4%]'></div>

            <div className="w-full flex flex-col lg:flex-row lg:justify-between items-center gap-10 px-4 lg:px-[4vw] pt-4">
                <div className="w-full lg:w-1/2 flex flex-col items-center text-center">
                    <h2 className="text-xl font-bold mb-2">CONTACT US</h2>
                    <p className="mb-4 font-medium">Fill out the form below and we will be in contact shortly.</p>
                    <form className="space-y-4 w-full max-w-xs">
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
                        <button type="submit" className="px-4 w-full font-semibold py-2 bg-[#865df6] text-white rounded">
                            SEND
                        </button>
                    </form>
                </div>

                <div className='flex w-full lg:w-1/2 items-center justify-center lg:justify-between gap-8 lg:gap-12'>
                    <div className="text-black max-w-xs text-center lg:text-left">
                        <h2 className="text-xl font-bold mb-4">Quick Links</h2>
                        <ul className="space-y-3 text-lg">
                            {['home', 'about us', 'location', 'faqs', 'contact us'].map((link, index) => (
                                <li key={index} className="flex items-center justify-center lg:justify-start">
                                    <a href={`#${link.replace(' ', '-')}`} className="hover:text-[#7d53f1]">
                                        {link}
                                    </a>
                                    <span className="ml-2">→</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex flex-col items-center lg:items-end text-center mb-8">
                        <div className="w-[40vw] lg:w-[20vw] mb-4">
                            <img
                                className="w-full"
                                src="https://eventally.vercel.app/_next/static/media/logo-transparent-svg.ccd037f9.svg"
                                alt="Logo"
                            />
                        </div>

                        <h1 className='font-medium text-lg'>Let's connect on social media</h1>
                        <div className="flex gap-4 items-center justify-center p-4">
                <FaInstagram className="w-8 h-8 text-[#E4405F] cursor-pointer transition-transform transform hover:scale-110" />
                <FaFacebook className="w-8 h-8 text-[#1877F2] cursor-pointer transition-transform transform hover:scale-110" />
                <FaLinkedin className="w-8 h-8 text-[#0A66C2] cursor-pointer transition-transform transform hover:scale-110" />
                <FaTwitter className="w-8 h-8 text-[#1DA1F2] cursor-pointer transition-transform transform hover:scale-110" />
            </div>
                    </div>
                </div>
            </div>

            <div className='h-[1px] w-[94%] bg-[#010101] mt-4'></div>

            <div className="text-center font-semibold text-sm text-gray-600 p-4">
                <p>&copy; 2024 QUINTANA EVENTS, LLC. ALL RIGHTS RESERVED.</p>
                <p>
                    <a href="#" className="underline">Web Design by Octavo Designs</a> |{' '}
                    <a href="#" className="underline">Privacy Policy</a> |{' '}
                    <a href="#" className="underline">Staff Login</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;