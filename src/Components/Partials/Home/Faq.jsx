import React, { useState } from 'react';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl min-w-[320px] mx-auto px-6 md:px-12 py-8">
      <h1 className="text-2xl mb-[10%] font-[ppbold]  md:text-3xl text-center">Frequently Asked Questions</h1>
      <div className="mt-4  ">
        <AccordionItem
          index={1}
          title="What is SEO, and why is it important for online businesses?"
          description="SEO, or Search Engine Optimization, is the practice of optimizing a website to improve its visibility on search engines like Google. It involves various techniques to enhance a site's ranking in search results. SEO is crucial for online businesses as it helps drive organic traffic, increases visibility, and ultimately leads to higher conversions."
          activeIndex={activeIndex}
          toggleAccordion={toggleAccordion}
        />
        <AccordionItem
          index={2}
          title="How long does it take to see results from SEO efforts?"
          description="The timeline for seeing results from SEO can vary based on several factors, such as the competitiveness of keywords, the current state of the website, and the effectiveness of the SEO strategy. Generally, it may take several weeks to months before noticeable improvements occur. However, long-term commitment to SEO is essential for sustained success."
          activeIndex={activeIndex}
          toggleAccordion={toggleAccordion}
        />
        <AccordionItem
          index={3}
          title="What are the key components of a successful SEO strategy?"
          description="A successful SEO strategy involves various components, including keyword research, on-page optimization, quality content creation, link building, technical SEO, and user experience optimization. These elements work together to improve a website's relevance and authority in the eyes of search engines."
          activeIndex={activeIndex}
          toggleAccordion={toggleAccordion}
        />
        <AccordionItem
          index={4}
          title="How does mobile optimization impact SEO?"
          description="Mobile optimization is crucial for SEO because search engines prioritize mobile-friendly websites. With the increasing use of smartphones, search engines like Google consider mobile responsiveness as a ranking factor. Websites that provide a seamless experience on mobile devices are more likely to rank higher in search results."
          activeIndex={activeIndex}
          toggleAccordion={toggleAccordion}
        />
        <AccordionItem
          index={5}
          title="What is the role of backlinks in SEO, and how can they be acquired?"
          description="Backlinks, or inbound links from other websites to yours, play a significant role in SEO. They are considered a vote of confidence and can improve a site's authority. Quality over quantity is crucial when acquiring backlinks. Strategies for obtaining backlinks include creating high-quality content, guest posting, reaching out to industry influencers, and participating in community activities. It's important to focus on natural and ethical link-building practices."
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
