import React, { useState } from 'react';

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('Category');

  const toggleDropdown = () => setIsOpen(!isOpen);

  const selectCategory = (category) => {
    setSelected(category);
    setIsOpen(false);
  };

  const categories = ['AI', 'Development', 'Conference'];

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="flex items-center justify-between w-full px-4 py-2 text-gray-700 bg-[#F4F7FC] border rounded-md shadow-sm"
      >
        {selected}
        <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-[#F4F7FC] rounded-md shadow-lg z-10">
          <div className="py-1">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => selectCategory(category)}
                className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
