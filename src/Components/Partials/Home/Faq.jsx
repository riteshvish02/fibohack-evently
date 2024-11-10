import React, { useState } from 'react';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl min-w-[320px] mx-auto px-6 md:px-12 py-8">
      <h1 className="text-2xl mb-[10%] font-[ppbold]  md:text-3xl text-center">Frequently Asked Questions</h1>
      <div className="mt-4">
        <AccordionItem
          index={1}
          title="What types of events can I find on this platform?"
          description="You can discover a wide variety of local events, including festivals, concerts, workshops, sports events, community gatherings, and more. Our goal is to provide a space for all types of events that promote community engagement and fun!"
          activeIndex={activeIndex}
          toggleAccordion={toggleAccordion}
        />
        <AccordionItem
          index={2}
          title="How can I add or promote my own event on the platform?"
          description="Once you’ve created an account, you can easily add your event by navigating to the 'Add Event' section, where you’ll enter details like date, location, description, and images. Your event will then be visible to all users, allowing the community to engage and RSVP."
          activeIndex={activeIndex}
          toggleAccordion={toggleAccordion}
        />
        <AccordionItem
          index={3}
          title="Is there a way to RSVP or show interest in an event?"
          description="Yes, each event page includes an RSVP button. Simply click 'RSVP' to confirm your attendance or interest in the event. You can also see the list of other users who have RSVP’d, which helps in gauging the event’s popularity."
          activeIndex={activeIndex}
          toggleAccordion={toggleAccordion}
        />
        <AccordionItem
          index={4}
          title="Can I share events on social media from this platform?"
          description="Absolutely! We provide built-in social media sharing options so you can share any event directly to platforms like Facebook, Twitter, and Instagram. Sharing events can help spread the word and increase participation from your friends and community."
          activeIndex={activeIndex}
          toggleAccordion={toggleAccordion}
        />
        <AccordionItem
          index={5}
          title="Is there a way to receive notifications or updates about events I’m interested in?"
          description="Yes, when you RSVP to an event, you’ll have the option to enable notifications for updates. This way, you’ll be informed about any changes, reminders, or announcements related to the events you're following."
          activeIndex={activeIndex}
          toggleAccordion={toggleAccordion}
        />
      </div>
    </div>
  );
};

const AccordionItem = ({ index, title, description, activeIndex, toggleAccordion }) => {
  return (
    <div className="mt-4 border border-gray-200 rounded-lg bg-white shadow-sm">
      <input
        type="checkbox"
        id={`accordion${index}`}
        className="hidden"
        checked={activeIndex === index}
        onChange={() => toggleAccordion(index)}
      />
      <label
        htmlFor={`accordion${index}`}
        className="flex justify-between items-center cursor-pointer px-5 py-4 text-sm md:text-lg"
      >
        <span>{title}</span>
        <span className="ml-2 text-xl md:text-2xl">{activeIndex === index ? '-' : '+'}</span>
      </label>
      {activeIndex === index && (
        <div className="px-5 pb-5 pt-0 text-xs sm:text-sm md:text-base text-gray-700 border-t border-gray-300">
          {description}
        </div>
      )}
    </div>
  );
};

export default Faq;
