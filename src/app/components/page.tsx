'use client';
import { useState, useRef, useEffect } from 'react';

interface DropdownMenuProps {
  categories: string[];
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ categories }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className='relative' ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className='flex items-center w-[146px] h-[22px] bg-[#f2f0f0] text-[#000] font-["Comfortaa"] text-[20px] font-bold leading-[22px] text-center'
      >
        <span className="flex w-[114px] h-[22px] justify-center items-start text-[#000] text-center whitespace-nowrap text-[20px]">
          All
        </span>
        <div className='w-[9.59%] h-[40.91%] bg-[url(/assets/73aec825-d738-4fe3-890e-a860223e2c45.png)] bg-[length:100%_100%] bg-no-repeat ml-2' />
      </button>
      {isOpen && (
        <div className='absolute top-[100%] left-0 w-full bg-[#fff] border border-[#ddd] z-10 rounded-2xl'>
          {categories.map((category, index) => (
            <a
              key={index}
              href={`#${category.toLowerCase().replace(/\s+/g, '-')}`}
              className='block px-4 py-2 text-[#000] hover:bg-[#fbc3c3] rounded-lg'
            >
              {category}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
