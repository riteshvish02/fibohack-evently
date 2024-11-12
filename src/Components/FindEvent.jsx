import React, { useState } from 'react';
import { LocationMarkerIcon, CalendarIcon, TagIcon, ClockIcon } from '@heroicons/react/outline';
import { FilterIcon, SearchIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

function FindEventPage() {
    const [registrationStatus, setRegistrationStatus] = useState({
        photographyExhibition: false,
        techConference: false,
        aiWorkshop: false
    });

    const handleRegister = (eventName) => {
        setRegistrationStatus(prevStatus => ({
            ...prevStatus,
            [eventName]: true
        }));
    };

    return (
        <div className="flex justify-center items-start min-h-screen bg-gray-100">
            <div className="lg:w-3/4 w-full p-6 flex flex-col lg:flex-row space-y-6 lg:space-y-0">

                {/* Filters Section */}
                <div className="w-full lg:w-1/4 bg-white p-6 shadow-md rounded-md">
                    <h2 className="text-xl font-semibold mb-4 flex items-center">
                        <FilterIcon className="h-6 w-6 text-indigo-600 mr-2" />
                        Filters
                    </h2>
                    <div className="mb-4">
                        <label htmlFor="event-type" className="block font-medium mb-1">Event Type</label>
                        <input
                            id="event-type"
                            type="text"
                            placeholder="e.g. Concert, Workshop"
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="location" className="block font-medium mb-1">Location</label>
                        <input
                            id="location"
                            type="text"
                            placeholder="e.g. New York, Online"
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block font-medium mb-1">Event Mode</label>
                        <div className="space-y-2">
                            <label className="flex items-center">
                                <input type="checkbox" className="form-checkbox" />
                                <span className="ml-2">Online</span>
                            </label>
                            <label className="flex items-center">
                                <input type="checkbox" className="form-checkbox" />
                                <span className="ml-2">In-Person</span>
                            </label>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="date" className="block font-medium mb-1">Date</label>
                        <input
                            id="date"
                            type="date"
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>
                    <button className="w-full bg-[#8154fc] text-white py-2 rounded-md hover:bg-[#7747fc]">
                        Search
                    </button>
                </div>


                <div className="flex-1 ml-5 bg-white p-6 shadow-md rounded-md">
                    <h2 className="text-xl font-bold mb-4 flex items-center">
                        <SearchIcon className="h-6 w-6 text-indigo-600 mr-2" />
                        Find Events Near You
                    </h2>
                    <div className="space-y-4">
                        {/* First Event Card */}
                        <div className="bg-white p-6 shadow-md rounded-md flex flex-col sm:flex-row justify-between items-start sm:items-center sm:space-x-4 space-y-4 sm:space-y-0 border border-gray-200">  
                            <div className="sm:w-3/4">
                                <h3 className="text-lg font-semibold">Photography Exhibition</h3>
                                <p className="text-gray-600 font-medium flex items-center">
                                    <LocationMarkerIcon className="h-5 w-5 text-indigo-600 mr-2" />
                                    New York City
                                </p>
                                <p className="text-gray-600 font-medium flex items-center">
                                    <CalendarIcon className="h-5 w-5 text-indigo-600 mr-2" />
                                    10th February 2025
                                </p>
                                <p className="text-gray-600 font-medium mt-1 flex items-center">
                                    <TagIcon className="h-5 w-5 text-indigo-600 mr-2" />
                                    Category: Exhibition
                                </p>
                                <p className="text-gray-600 font-medium mt-1 flex items-center">
                                    <ClockIcon className="h-5 w-5 text-indigo-600 mr-2" />
                                    11:00 AM - 7:00 PM
                                </p>
                                <p className="text-gray-600 font-medium mt-2">
                                    Discover stunning photography from local and international artists at this
                                    one-of-a-kind exhibition.
                                </p>
                            </div>

                            <div className="flex flex-col justify-end items-end gap-3 sm:w-full sm:justify-start space-x-4 sm:mt-4 mt-6">
                                <div className="sm:w-1/4 flex justify-center items-center">
                                    <img
                                        src='https://plus.unsplash.com/premium_photo-1683140790296-6815a1675b75?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                        alt="Event Image"
                                        className="w-24 h-24 object-cover rounded-md shadow-md"
                                    />
                                </div>

                                {registrationStatus.photographyExhibition ? (
                                    <button
                                        className="bg-[#6c45d1] text-white px-4 py-2 rounded-md hover:bg-[#8154fc] transition duration-200"
                                        disabled
                                    >
                                        Registered
                                    </button>
                                ) : (
                                    <button
                                        className="bg-[#8154fc] text-white px-4 py-2 rounded-md hover:bg-[#6c45d1] transition duration-200"
                                        onClick={() => handleRegister('photographyExhibition')}
                                    >
                                        Register
                                    </button>
                                )}
                                <Link to="/eventdetails">
                                    <button className="bg-gray-300 text-black px-4 py-2 rounded-md hover:bg-gray-400 transition duration-200">
                                        View Details
                                    </button>
                                </Link>
                            </div>
                        </div>

                        {/* Second Event Card */}
                        <div className="bg-white p-6 shadow-md rounded-md flex flex-col sm:flex-row justify-between items-start sm:items-center sm:space-x-4 space-y-4 sm:space-y-0 border border-gray-200">
                            <div className="sm:w-3/4">
                                <h3 className="text-lg font-semibold">Tech Conference 2025</h3>
                                <p className="text-gray-600 font-medium flex items-center">
                                    <LocationMarkerIcon className="h-5 w-5 text-indigo-600 mr-2" />
                                    San Francisco, CA
                                </p>
                                <p className="text-gray-600 font-medium flex items-center">
                                    <CalendarIcon className="h-5 w-5 text-indigo-600 mr-2" />
                                    15th March 2025
                                </p>
                                <p className="text-gray-600 font-medium mt-1 flex items-center">
                                    <TagIcon className="h-5 w-5 text-indigo-600 mr-2" />
                                    Category: Conference
                                </p>
                                <p className="text-gray-600 font-medium mt-1 flex items-center">
                                    <ClockIcon className="h-5 w-5 text-indigo-600 mr-2" />
                                    9:00 AM - 5:00 PM
                                </p>
                                <p className="text-gray-600 font-medium mt-2">
                                    Join industry leaders for a day of insightful talks, panel discussions, and hands-on workshops on the latest trends in technology and innovation.
                                </p>
                            </div>

                            <div className="flex flex-col justify-end items-end gap-3 sm:w-full sm:justify-start space-x-4 sm:mt-4 mt-6">
                                <div className="sm:w-1/4 flex justify-center items-center">
                                    <img
                                        src='https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                        alt="Event Image"
                                        className="w-24 h-24 object-cover rounded-md shadow-md"
                                    />
                                </div>

                                {registrationStatus.techConference ? (
                                    <button
                                        className="bg-[#6c45d1] text-white px-4 py-2 rounded-md hover:bg-[#8154fc] transition duration-200"
                                        disabled
                                    >
                                        Registered
                                    </button>
                                ) : (
                                    <button
                                        className="bg-[#8154fc] text-white px-4 py-2 rounded-md hover:bg-[#6c45d1] transition duration-200"
                                        onClick={() => handleRegister('techConference')}
                                    >
                                        Register
                                    </button>
                                )}
                                <Link to="/eventdetails">
                                    <button className="bg-gray-300 text-black px-4 py-2 rounded-md hover:bg-gray-400 transition duration-200">
                                        View Details
                                    </button>
                                </Link>
                            </div>
                        </div>

                        {/* Third Event Card */}
                        <div className="bg-white p-6 shadow-md rounded-md flex flex-col sm:flex-row justify-between items-start sm:items-center sm:space-x-4 space-y-4 sm:space-y-0 border border-gray-200">
                            <div className="sm:w-3/4">
                                <h3 className="text-lg font-semibold">AI Workshop</h3>
                                <p className="text-gray-600 font-medium flex items-center">
                                    <LocationMarkerIcon className="h-5 w-5 text-indigo-600 mr-2" />
                                    London, UK
                                </p>
                                <p className="text-gray-600 font-medium flex items-center">
                                    <CalendarIcon className="h-5 w-5 text-indigo-600 mr-2" />
                                    20th April 2025
                                </p>
                                <p className="text-gray-600 font-medium mt-1 flex items-center">
                                    <TagIcon className="h-5 w-5 text-indigo-600 mr-2" />
                                    Category: Workshop
                                </p>
                                <p className="text-gray-600 font-medium mt-1 flex items-center">
                                    <ClockIcon className="h-5 w-5 text-indigo-600 mr-2" />
                                    10:00 AM - 4:00 PM
                                </p>
                                <p className="text-gray-600 font-medium mt-2">
                                    Gain hands-on experience with artificial intelligence tools and techniques
                                    through interactive sessions and project-based learning.
                                </p>
                            </div>

                            <div className="flex flex-col justify-end items-end gap-3 sm:w-full sm:justify-start space-x-4 sm:mt-4 mt-6">
                                <div className="sm:w-1/4 flex justify-center items-center">
                                    <img
                                      src='https://plus.unsplash.com/premium_photo-1683121718643-fb18d2668d53?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YWl8ZW58MHx8MHx8fDA%3D'
                                        alt="Event Image"
                                        className="w-24 h-24 object-cover rounded-md shadow-md"
                                    />
                                </div>

                                {registrationStatus.aiWorkshop ? (
                                    <button
                                        className="bg-[#6c45d1] text-white px-4 py-2 rounded-md hover:bg-[#8154fc] transition duration-200"
                                        disabled
                                    >
                                        Registered
                                    </button>
                                ) : (
                                    <button
                                        className="bg-[#8154fc] text-white px-4 py-2 rounded-md hover:bg-[#6c45d1] transition duration-200"
                                        onClick={() => handleRegister('aiWorkshop')}
                                    >
                                        Register
                                    </button>
                                )}
                                <Link to="/eventdetails">
                                    <button className="bg-gray-300 text-black px-4 py-2 rounded-md hover:bg-gray-400 transition duration-200">
                                        View Details
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default FindEventPage;