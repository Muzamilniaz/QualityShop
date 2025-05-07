import Link from 'next/link';
import React from 'react'

interface Dropdown {
  title: string;
  items: string[];
}

interface SidebarProps {
  dropdownData: Dropdown[];
  openDropdowns: number[];
  toggleDropdown: (index: number) => void;
}

const sidebar: React.FC<SidebarProps> = ({ dropdownData, openDropdowns, toggleDropdown }) => {
  return (
        <>
         <h5 className="text-lg font-semibold mb-4 mt-6">Categories</h5>
                {dropdownData.map((dropdown, index) => (
                  <div key={dropdown.title} className="mb-2">
                    <button
                      onClick={() => toggleDropdown(index)}
                      className="w-full text-left text-gray-700 hover:text-blue-600 flex justify-between items-center py-2"
                      aria-expanded={openDropdowns.includes(index)}
                      aria-controls={`categoryFlush${index + 1}`}
                    >
                      {dropdown.title}
                      <svg
                        className={`h-4 w-4 transform ${
                          openDropdowns.includes(index) ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    <div
                      className={`transition-all duration-300 ${
                        openDropdowns.includes(index) ? "block" : "hidden"
                      }`}
                      id={`categoryFlush${index + 1}`}
                    >
                      <ul className="pl-4">
                        {dropdown.items.map((item) => (
                          <li key={item} className="py-1">
                            <Link
                              href="productdetail"
                              className="text-gray-600 hover:text-blue-600"
                            >
                              {item}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
        </>      

  )
}

export default sidebar
