import React from 'react';

function EventCard({ event }) {
  return (
    <div className="bg-[#F4F7FC] rounded-lg shadow-md overflow-hidden relative">
      <img src={event.imageUrl} alt={event.title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <div className="flex items-center justify-between">
          <span className={`px-2 py-1 text-xs font-semibold rounded ${event.price === 'FREE' ? 'bg-green-200 text-green-800' : 'bg-blue-200 text-blue-800'}`}>
            {event.price}
          </span>
          <span className="text-xs text-gray-500">{event.category}</span>
        </div>
        <p className="mt-2 text-sm text-gray-600">{event.date}</p>
        <h2 className="mt-1 font-semibold text-lg">{event.title}</h2>
        <p className="text-gray-500 text-sm">{event.host}</p>
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
