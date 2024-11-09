import React from 'react';
import { Link } from 'react-router-dom';

function EventCard({ event }) {
  return (
    <div className="bg-[#F4F7FC]  rounded-lg shadow-md overflow-hidden relative">
      <img src={event.imageUrl} alt={event.title} className="w-full h-72 object-cover" />
      <div className="p-5">
        <div className="flex items-center justify-between">
          <span className={`px-4 py-2 font-[ppbold] text-xs font-bold rounded ${event.price === 'FREE' ? 'bg-green-200 text-green-800' : 'bg-blue-200 text-blue-800'}`}>
            {event.price}
          </span>
          <span className="text-md  text-gray-600">{event.category}</span>
        </div>
        <p className="mt-2 text-sm text-gray-600">{event.date}</p>
        <h2 className="mt-1  font-semibold text-lg">
          {event.title.split(" ").slice(0, 7).join(" ") + (event.title.split(" ").length > 7 ? "..." : "")}
        </h2>

        <p className="text-gray-500 text-sm">{event.host}</p>

        <Link
          to="/register"
          className="cursor-pointer font-semibold text-md mt-5 hover:bg-[#A485F9] hover:text-white duration-300 bg-[#b498ff]  rounded-lg  flex items-center px-3 py-3 w-24"
        >
          Register
        </Link>
      </div>
      <div className="absolute top-2 right-2 flex space-x-1">
        <button className="p-1 bg-gray-200 rounded-full hover:bg-gray-300">
          <span role="img" aria-label="edit">✏️</span>
        </button>
        <button className="p-1 bg-gray-200 rounded-full hover:bg-gray-300">
          <span role="img" aria-label="delete">🗑️</span>
        </button>
      </div>
    </div>
  );
}

export default EventCard;
