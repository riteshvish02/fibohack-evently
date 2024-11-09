import React from 'react';
import EventCard from './EventCard';
import Dropdown from './Dropdown';

function  EventList() {
  const events = [
    {
      id: 1,
      title: 'GitHub Universe 2023',
      date: 'Tue, Jan 2, 4:30 AM',
      price: '$100',
      category: 'AI',
      host: 'Faizan | JS Mastery',
      imageUrl: 'https://images.unsplash.com/photo-1730724742886-b0e36d1eb067?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 2,
      title: 'JSM Nexus: Journey into the Future of Web Development',
      date: 'Fri, Dec 15, 8:30 AM',
      price: 'FREE',
      category: 'Development',
      host: 'Faizan | JS Mastery',
      imageUrl: 'https://images.unsplash.com/photo-1645565537051-a97a066f1d64?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D',
    },
    {
      id: 3,
      title: 'Open AI dev day - OpenAI’s first developer conference',
      date: 'Wed, Dec 13, 6:30 AM',
      price: 'FREE',
      category: 'AI',
      host: 'Faizan | JS Mastery',
      imageUrl: 'https://plus.unsplash.com/premium_photo-1675705698856-4e15ed5506d6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];

  return (
    <div className="p-8">
      <h1 className="text-5xl font-[ppbold] mb-8 font-bold">Trusted by Thousands of Events</h1>
      <div className="flex items-center space-x-4 mt-4">
        <input
          type="text"
          placeholder="Search title..."
          className="px-4 py-2 border rounded-md w-1/2"
        />
        <Dropdown />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {events.map(event => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}

export default  EventList;
