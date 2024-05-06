import React, { useState, useId } from "react";
import useClickOutside from "../../hooks/useClickOutside";

function DropdownCheckboxButton(props) {
  const [isOpen, setIsOpen] = useState(false);
  const RandomId = useId();
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  let { options = [], onChange, RenderOptions, onClick, selectedOption, heading='' } = props;

  useClickOutside(isOpen, ['[data-dropdown-content]'], () => setIsOpen(false))

  return (
    <>
      <div className="relative">
        <button
          id={"dropdownHelperButton" + RandomId}
          onClick={toggleDropdown}
          className="text-white bg-[#393939] leading-[20px] py-[8px]  hover:bg-[#393939] focus:ring-4 focus:ring-transparent focus:outline-none rounded-lg text-sm px-5 text-center inline-flex items-center"
          type="button"
        >
          {selectedOption ? selectedOption.label : heading}
          <svg
            className="w-2.5 h-2.5 ms-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>

        {/* Dropdown menu */}
        {isOpen && (
          <div
            className="absolute w-[max-content] z-10 bg-[#393939] top-[38px] divide-y divide-gray-100 rounded-lg shadow w-60 dark:bg-gray-700 dark:divide-gray-600"
            data-dropdown-content
          >
            <ul
              className="p-[6px] space-y-1 text-sm "

            >
              {RenderOptions
                ? options.map((item, index) => {
                    return (
                      <li
                        key={item.id}
                        onClick={() => onClick(item)}
                        className="hover:bg-[#ffffff21]"
                      >
                        <RenderOptions item={item} selectedOption={selectedOption} />
                      </li>
                    );
                  })
                : options.map((item, index) => {
                    return (
                      <li key={item.id} className="hover:bg-[#ffffff21]">
                        <div className="flex p-2 rounded py-[4px] dark:hover:bg-gray-600">
                          <div className="flex items-center h-5">
                            <input
                              id={item.id}
                              aria-describedby="helper-checkbox-text-1"
                              type="checkbox"
                              value=""
                              onChange={() => onChange(item)}
                              className="w-5 h-5 text-[#12daa8] bg-[#393939] border-gray-300 focus:ring-transparent "
                            />
                          </div>
                          <div className="ms-2 text-sm">
                            <label
                              htmlFor={item.id}
                              className=" text-[white] dark:text-gray-300"
                            >
                              <div>{item.label}</div>
                            </label>
                          </div>
                        </div>
                      </li>
                    );
                  })}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default DropdownCheckboxButton;
